/**
 * useProgressSync
 *
 * Keeps player progress in sync with Firebase Firestore for signed-in users.
 *
 * Behaviour:
 *  • Anonymous users: no Firestore reads or writes; local state unchanged.
 *  • On sign-in: loads the cloud snapshot, merges it into the local stores
 *    (taking the "better" value for every field — see progressSync.ts), then
 *    opens the write gate.
 *  • While signed in AND after the initial load has settled: debounces
 *    Firestore writes on every persisted-state change (2-second delay).
 *
 * The write gate (`syncReady`) ensures that no Firestore write can fire
 * before we have had a chance to merge the existing cloud data in.  If the
 * initial load fails (network error, etc.) we still open the gate so that
 * future changes are not silently dropped, but we do NOT suppress retries —
 * the next time the component mounts for this UID (e.g. after a route change
 * that unmounts/remounts) it will retry the load.
 *
 * Mount this hook once inside a component that is already wrapped by
 * AuthProvider, e.g. the Router component in App.tsx.
 */
import { useEffect, useRef, useState } from 'react';

import { useAuth } from '@/context/AuthContext';
import { useGameState } from '@/hooks/useGameState';
import { useAchievementsStore } from '@/hooks/useAchievements';
import { toast } from '@/hooks/use-toast';
import { useSyncStatus } from '@/hooks/useSyncStatus';
import {
  loadCloudProgress,
  saveCloudProgress,
  mergeGameProgress,
  mergeAchievements,
  type CloudGameProgress,
  type CloudAchievements,
} from '@/lib/progressSync';

const DEBOUNCE_MS = 2000;

export function useProgressSync() {
  const { user } = useAuth();
  const { setStatus, setLastSyncedAt } = useSyncStatus();

  // ── Write gate ───────────────────────────────────────────────────────────────
  // Starts false for every new UID.  Only becomes true once the initial cloud
  // load+merge has settled (success OR definitive failure).  This prevents
  // stale local state from overwriting existing cloud progress.
  const [syncReady, setSyncReady] = useState(false);

  // ── Game progress selectors ──────────────────────────────────────────────────
  const highScore = useGameState((s) => s.highScore);
  const allTimeCorrectLevels = useGameState((s) => s.allTimeCorrectLevels);
  const allTimeMaxStreak = useGameState((s) => s.allTimeMaxStreak);
  const totalAnswered = useGameState((s) => s.totalAnswered);
  const totalCorrect = useGameState((s) => s.totalCorrect);
  const hintsUsedAllTime = useGameState((s) => s.hintsUsedAllTime);
  const noHintLevels = useGameState((s) => s.noHintLevels);
  const perfectRuns = useGameState((s) => s.perfectRuns);
  const maxTimeBonusEarned = useGameState((s) => s.maxTimeBonusEarned);
  const dailyChallengeLastCompleted = useGameState(
    (s) => s.dailyChallengeLastCompleted,
  );
  const storyProgress = useGameState((s) => s.storyProgress);

  // ── Achievement selectors ────────────────────────────────────────────────────
  const unlockedAt = useAchievementsStore((s) => s.unlockedAt);
  const seenIds = useAchievementsStore((s) => s.seenIds);

  // ── Store setters (stable references from Zustand) ──────────────────────────
  const gameSet = useGameState.setState;
  const achievementsAward = useAchievementsStore((s) => s.award);
  const achievementsMarkSeen = useAchievementsStore((s) => s.markSeen);

  // ── Track which user we last loaded for (avoid double-loads on re-renders) ───
  const loadedUidRef = useRef<string | null>(null);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Load from cloud when the user signs in ───────────────────────────────────
  useEffect(() => {
    if (!user) {
      // User signed out — reset so the next sign-in triggers a fresh load.
      loadedUidRef.current = null;
      setSyncReady(false);
      setStatus('idle');
      return;
    }

    if (loadedUidRef.current === user.uid) {
      // Already loaded (or attempted) for this UID in this mount.
      return;
    }

    // Mark this UID as "in-progress" immediately so concurrent effect runs
    // (React StrictMode double-invoke, fast re-renders) don't duplicate the load.
    loadedUidRef.current = user.uid;
    setSyncReady(false);
    setStatus('syncing');

    void (async () => {
      try {
        const cloud = await loadCloudProgress(user.uid);

        if (cloud) {
          // Snapshot local state at the moment the cloud data arrives.
          const localGame = useGameState.getState();
          const localAch = useAchievementsStore.getState();

          const localGameSnap: CloudGameProgress = {
            highScore: localGame.highScore,
            allTimeCorrectLevels: localGame.allTimeCorrectLevels,
            allTimeMaxStreak: localGame.allTimeMaxStreak,
            totalAnswered: localGame.totalAnswered,
            totalCorrect: localGame.totalCorrect,
            hintsUsedAllTime: localGame.hintsUsedAllTime,
            noHintLevels: localGame.noHintLevels,
            perfectRuns: localGame.perfectRuns,
            maxTimeBonusEarned: localGame.maxTimeBonusEarned,
            dailyChallengeLastCompleted: localGame.dailyChallengeLastCompleted,
            storyProgress: localGame.storyProgress,
          };

          const localAchSnap: CloudAchievements = {
            unlockedAt: localAch.unlockedAt,
            seenIds: localAch.seenIds,
          };

          // Merge cloud into local (taking the "better" value everywhere).
          const mergedGame = mergeGameProgress(
            localGameSnap,
            cloud.gameProgress ?? {},
          );
          const mergedAch = mergeAchievements(
            localAchSnap,
            cloud.achievements ?? {},
          );

          // Apply merged game progress.
          gameSet({
            highScore: mergedGame.highScore,
            allTimeCorrectLevels: mergedGame.allTimeCorrectLevels,
            allTimeMaxStreak: mergedGame.allTimeMaxStreak,
            totalAnswered: mergedGame.totalAnswered,
            totalCorrect: mergedGame.totalCorrect,
            hintsUsedAllTime: mergedGame.hintsUsedAllTime,
            noHintLevels: mergedGame.noHintLevels,
            perfectRuns: mergedGame.perfectRuns,
            maxTimeBonusEarned: mergedGame.maxTimeBonusEarned,
            dailyChallengeLastCompleted: mergedGame.dailyChallengeLastCompleted,
            storyProgress: mergedGame.storyProgress,
          });

          // Apply merged achievements (award new ones, mark already-seen).
          const newUnlocks = Object.keys(mergedAch.unlockedAt).filter(
            (id) => !localAchSnap.unlockedAt[id],
          );
          if (newUnlocks.length > 0) achievementsAward(newUnlocks);
          if (mergedAch.seenIds.length > 0)
            achievementsMarkSeen(mergedAch.seenIds);

          console.log('[ProgressSync] Cloud progress merged for user', user.uid);

          // Notify the player that their cloud progress was restored.
          toast({
            title: '☁️ Progress restored',
            description: 'Your saved progress has been loaded from the cloud.',
            duration: 4000,
          });
        } else {
          console.log(
            '[ProgressSync] No cloud document found for',
            user.uid,
            '— local state kept.',
          );
        }

        setStatus('synced');
        setLastSyncedAt(Date.now());
      } catch (err) {
        // Load failed (network error, etc.).  Open the gate anyway so that
        // new progress earned in this session is not silently dropped.
        console.warn('[ProgressSync] Initial load failed, writes will proceed with local state:', err);
        setStatus('error');
      } finally {
        // Open the write gate regardless of success or failure.  Writes
        // that happen before the cloud state is known are the dangerous
        // case; after this point we have the best data available.
        setSyncReady(true);
      }
    })();
  }, [user, gameSet, achievementsAward, achievementsMarkSeen, setStatus, setLastSyncedAt]);

  // ── Debounced save whenever persisted state changes ──────────────────────────
  // The `syncReady` dependency ensures this effect cannot fire until after the
  // initial load+merge attempt has completed for the current user.
  useEffect(() => {
    if (!user || !syncReady) return; // Anonymous or not yet loaded — no writes.

    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);

    saveTimerRef.current = setTimeout(() => {
      const gameSnap: CloudGameProgress = {
        highScore,
        allTimeCorrectLevels,
        allTimeMaxStreak,
        totalAnswered,
        totalCorrect,
        hintsUsedAllTime,
        noHintLevels,
        perfectRuns,
        maxTimeBonusEarned,
        dailyChallengeLastCompleted,
        storyProgress,
      };

      const achSnap: CloudAchievements = { unlockedAt, seenIds };

      setStatus('syncing');
      void saveCloudProgress(user.uid, gameSnap, achSnap)
        .then(() => {
          setStatus('synced');
          setLastSyncedAt(Date.now());
        })
        .catch((err) => {
          console.warn('[ProgressSync] Save failed:', err);
          setStatus('error');
        });
    }, DEBOUNCE_MS);

    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [
    user,
    syncReady,
    highScore,
    allTimeCorrectLevels,
    allTimeMaxStreak,
    totalAnswered,
    totalCorrect,
    hintsUsedAllTime,
    noHintLevels,
    perfectRuns,
    maxTimeBonusEarned,
    dailyChallengeLastCompleted,
    storyProgress,
    unlockedAt,
    seenIds,
    setStatus,
    setLastSyncedAt,
  ]);
}
