/**
 * Cloud progress sync via Firebase Firestore.
 *
 * Each signed-in user gets a single document:
 *   users/{uid}
 * with two sub-objects:
 *   gameProgress  — persisted fields from useGameState
 *   achievements  — persisted fields from useAchievementsStore
 *
 * Anonymous users are never written to Firestore; they keep the
 * localStorage / Zustand persist behaviour unchanged.
 */
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  type FieldValue,
} from 'firebase/firestore';

import { db, isFirebaseConfigured } from '@/lib/firebase';
import type { StoryProgress } from '@/hooks/useGameState';

// ─── Shape of persisted game state ────────────────────────────────────────────

export interface CloudGameProgress {
  highScore: number;
  allTimeCorrectLevels: string[];
  allTimeMaxStreak: number;
  totalAnswered: number;
  totalCorrect: number;
  hintsUsedAllTime: number;
  noHintLevels: number;
  perfectRuns: number;
  maxTimeBonusEarned: number;
  dailyChallengeLastCompleted: string | null;
  storyProgress: Record<string, StoryProgress>;
}

export interface CloudAchievements {
  unlockedAt: Record<string, string>;
  seenIds: string[];
}

interface CloudDocument {
  gameProgress: CloudGameProgress;
  achievements: CloudAchievements;
  updatedAt?: FieldValue | string;
}

// ─── Merge helpers ─────────────────────────────────────────────────────────────

function mergeStoryProgress(
  local: Record<string, StoryProgress>,
  cloud: Record<string, StoryProgress>,
): Record<string, StoryProgress> {
  const merged: Record<string, StoryProgress> = { ...cloud };

  for (const [id, lp] of Object.entries(local)) {
    const cp = cloud[id];
    if (!cp) {
      merged[id] = lp;
    } else {
      merged[id] = {
        timesPlayed: Math.max(lp.timesPlayed, cp.timesPlayed),
        bestScore: Math.max(lp.bestScore, cp.bestScore),
        questionsSeen: [...new Set([...lp.questionsSeen, ...cp.questionsSeen])],
        questionsMastered: [
          ...new Set([...lp.questionsMastered, ...cp.questionsMastered]),
        ],
        lastPlayed:
          lp.lastPlayed && cp.lastPlayed
            ? lp.lastPlayed > cp.lastPlayed
              ? lp.lastPlayed
              : cp.lastPlayed
            : lp.lastPlayed ?? cp.lastPlayed,
      };
    }
  }

  return merged;
}

/** Take the most recent daily-challenge date from local and cloud. */
function mergeDailyChallenge(
  local: string | null,
  cloud: string | null,
): string | null {
  if (!local) return cloud;
  if (!cloud) return local;
  return local >= cloud ? local : cloud;
}

/** Merge achievement timestamps — keep earliest unlock date per id. */
function mergeUnlockedAt(
  local: Record<string, string>,
  cloud: Record<string, string>,
): Record<string, string> {
  const merged: Record<string, string> = { ...cloud };
  for (const [id, ts] of Object.entries(local)) {
    if (!merged[id] || ts < merged[id]) {
      merged[id] = ts;
    }
  }
  return merged;
}

export function mergeGameProgress(
  local: CloudGameProgress,
  cloud: CloudGameProgress,
): CloudGameProgress {
  return {
    highScore: Math.max(local.highScore, cloud.highScore),
    allTimeCorrectLevels: [
      ...new Set([...local.allTimeCorrectLevels, ...cloud.allTimeCorrectLevels]),
    ],
    allTimeMaxStreak: Math.max(local.allTimeMaxStreak, cloud.allTimeMaxStreak),
    totalAnswered: Math.max(local.totalAnswered, cloud.totalAnswered),
    totalCorrect: Math.max(local.totalCorrect, cloud.totalCorrect),
    hintsUsedAllTime: Math.max(local.hintsUsedAllTime, cloud.hintsUsedAllTime),
    noHintLevels: Math.max(local.noHintLevels, cloud.noHintLevels),
    perfectRuns: Math.max(local.perfectRuns, cloud.perfectRuns),
    maxTimeBonusEarned: Math.max(
      local.maxTimeBonusEarned,
      cloud.maxTimeBonusEarned,
    ),
    dailyChallengeLastCompleted: mergeDailyChallenge(
      local.dailyChallengeLastCompleted,
      cloud.dailyChallengeLastCompleted,
    ),
    storyProgress: mergeStoryProgress(local.storyProgress, cloud.storyProgress),
  };
}

export function mergeAchievements(
  local: CloudAchievements,
  cloud: CloudAchievements,
): CloudAchievements {
  return {
    unlockedAt: mergeUnlockedAt(local.unlockedAt, cloud.unlockedAt),
    seenIds: [...new Set([...local.seenIds, ...cloud.seenIds])],
  };
}

// ─── Firestore I/O ─────────────────────────────────────────────────────────────

function userDocRef(uid: string) {
  if (!db) throw new Error('[ProgressSync] Firestore is not initialized.');
  return doc(db, 'users', uid);
}

/**
 * Load the user's cloud snapshot. Returns null if no document exists yet,
 * if Firebase is not configured, or if Firestore is unreachable.
 */
export async function loadCloudProgress(
  uid: string,
): Promise<CloudDocument | null> {
  if (!isFirebaseConfigured || !db) return null;
  try {
    const snap = await getDoc(userDocRef(uid));
    if (!snap.exists()) return null;
    return snap.data() as CloudDocument;
  } catch (err) {
    console.warn('[ProgressSync] Could not load cloud progress:', err);
    return null;
  }
}

/**
 * Write the merged progress snapshot to Firestore.
 * Failures are silently swallowed so the game is never blocked.
 */
export async function saveCloudProgress(
  uid: string,
  gameProgress: CloudGameProgress,
  achievements: CloudAchievements,
): Promise<void> {
  if (!isFirebaseConfigured || !db) return;
  try {
    const payload: CloudDocument = {
      gameProgress,
      achievements,
      updatedAt: serverTimestamp(),
    };
    await setDoc(userDocRef(uid), payload, { merge: true });
  } catch (err) {
    console.warn('[ProgressSync] Could not save cloud progress:', err);
  }
}
