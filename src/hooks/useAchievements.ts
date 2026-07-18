import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useEffect } from 'react';
import { LEVELS } from '../data/questions';
import { useGameState } from './useGameState';

export interface Achievement {
  id: string;
  icon: string;
  title: { en: string; fr: string };
  desc: { en: string; fr: string };
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_steps',
    icon: '✝️',
    title: { en: 'First Steps', fr: 'Premiers Pas' },
    desc: { en: 'Answer your first question correctly', fr: 'Répondez correctement à votre première question' },
  },
  {
    id: 'on_fire',
    icon: '🔥',
    title: { en: 'On Fire', fr: 'En Feu' },
    desc: { en: 'Reach a 5-question streak', fr: 'Atteindre une série de 5 bonnes réponses' },
  },
  {
    id: 'blazing',
    icon: '⚡',
    title: { en: 'Blazing', fr: 'Foudroyant' },
    desc: { en: 'Reach a 10-question streak', fr: 'Atteindre une série de 10 bonnes réponses' },
  },
  {
    id: 'speed_reader',
    icon: '⏱️',
    title: { en: 'Speed Reader', fr: 'Lecteur Rapide' },
    desc: { en: 'Earn a maximum speed bonus (+10)', fr: 'Obtenir le bonus de vitesse maximum (+10)' },
  },
  {
    id: 'pure_wisdom',
    icon: '🧠',
    title: { en: 'Pure Wisdom', fr: 'Sagesse Pure' },
    desc: { en: 'Complete 10 levels without using any hints', fr: 'Compléter 10 niveaux sans utiliser d\'indices' },
  },
  {
    id: 'perfect_run',
    icon: '💎',
    title: { en: 'Flawless', fr: 'Sans Faute' },
    desc: { en: 'Complete a full difficulty run with no wrong answers', fr: 'Terminer un mode de difficulté sans aucune erreur' },
  },
  {
    id: 'beginner_scholar',
    icon: '📗',
    title: { en: 'Beginner Scholar', fr: 'Érudit Débutant' },
    desc: { en: 'Complete all Beginner levels correctly', fr: 'Compléter tous les niveaux Débutant' },
  },
  {
    id: 'intermediate_scholar',
    icon: '📘',
    title: { en: 'Intermediate Scholar', fr: 'Érudit Intermédiaire' },
    desc: { en: 'Complete all Intermediate levels correctly', fr: 'Compléter tous les niveaux Intermédiaire' },
  },
  {
    id: 'bible_master',
    icon: '📙',
    title: { en: 'Bible Master', fr: 'Maître de la Bible' },
    desc: { en: 'Complete all Advanced levels correctly', fr: 'Compléter tous les niveaux Avancé' },
  },
  {
    id: 'centurion',
    icon: '🛡️',
    title: { en: 'Centurion', fr: 'Centurion' },
    desc: { en: 'Answer 100 questions total', fr: 'Répondre à 100 questions au total' },
  },
  {
    id: 'truth_seeker',
    icon: '🔍',
    title: { en: 'Truth Seeker', fr: 'Chercheur de Vérité' },
    desc: { en: 'Answer 50 questions correctly', fr: 'Répondre correctement à 50 questions' },
  },
  {
    id: 'daily_devotion',
    icon: '📅',
    title: { en: 'Daily Devotion', fr: 'Dévotion Quotidienne' },
    desc: { en: 'Complete a daily challenge', fr: 'Compléter un défi quotidien' },
  },
  {
    id: 'all_knowing',
    icon: '👑',
    title: { en: 'All Knowing', fr: 'Omniscient' },
    desc: { en: 'Complete every level correctly', fr: 'Compléter chaque niveau correctement' },
  },
];

// ── Achievement check logic ───────────────────────────────────────────────────

interface CheckInput {
  totalCorrect: number;
  totalAnswered: number;
  allTimeMaxStreak: number;
  allTimeCorrectLevels: string[];
  maxTimeBonusEarned: number;
  dailyChallengeLastCompleted: string | null;
  noHintLevels: number;
  perfectRuns: number;
}

export function getUnlockedIds(s: CheckInput): string[] {
  const ids: string[] = [];
  const beginnerIds = LEVELS.filter(l => l.difficulty === 'Beginner').map(l => l.id);
  const intermediateIds = LEVELS.filter(l => l.difficulty === 'Intermediate').map(l => l.id);
  const advancedIds = LEVELS.filter(l => l.difficulty === 'Advanced').map(l => l.id);

  if (s.totalCorrect >= 1) ids.push('first_steps');
  if (s.allTimeMaxStreak >= 5) ids.push('on_fire');
  if (s.allTimeMaxStreak >= 10) ids.push('blazing');
  if (s.maxTimeBonusEarned >= 10) ids.push('speed_reader');
  if (s.noHintLevels >= 10) ids.push('pure_wisdom');
  if (s.perfectRuns >= 1) ids.push('perfect_run');
  if (beginnerIds.every(id => s.allTimeCorrectLevels.includes(id))) ids.push('beginner_scholar');
  if (intermediateIds.every(id => s.allTimeCorrectLevels.includes(id))) ids.push('intermediate_scholar');
  if (advancedIds.every(id => s.allTimeCorrectLevels.includes(id))) ids.push('bible_master');
  if (s.totalAnswered >= 100) ids.push('centurion');
  if (s.totalCorrect >= 50) ids.push('truth_seeker');
  if (s.dailyChallengeLastCompleted !== null) ids.push('daily_devotion');
  if (LEVELS.every(l => s.allTimeCorrectLevels.includes(l.id))) ids.push('all_knowing');

  return ids;
}

// ── Persisted store for "seen" tracking ───────────────────────────────────────

interface AchievementsStore {
  seenIds: string[];
  markSeen: (id: string) => void;
  markAllSeen: (ids: string[]) => void;
  clearAll: () => void;
}

export const useAchievementsStore = create<AchievementsStore>()(
  persist(
    (set) => ({
      seenIds: [],
      markSeen: (id) => set((s) => ({ seenIds: s.seenIds.includes(id) ? s.seenIds : [...s.seenIds, id] })),
      markAllSeen: (ids) => set((s) => ({ seenIds: [...new Set([...s.seenIds, ...ids])] })),
      clearAll: () => set({ seenIds: [] }),
    }),
    { name: 'bible-game-achievements' }
  )
);

// ── Convenience hook ──────────────────────────────────────────────────────────

export function useAchievements() {
  const { seenIds, markAllSeen } = useAchievementsStore();
  const state = useGameState();

  const unlockedIds = getUnlockedIds({
    totalCorrect: state.totalCorrect,
    totalAnswered: state.totalAnswered,
    allTimeMaxStreak: state.allTimeMaxStreak,
    allTimeCorrectLevels: state.allTimeCorrectLevels,
    maxTimeBonusEarned: state.maxTimeBonusEarned,
    dailyChallengeLastCompleted: state.dailyChallengeLastCompleted,
    noHintLevels: state.noHintLevels,
    perfectRuns: state.perfectRuns,
  });

  const newIds = unlockedIds.filter(id => !seenIds.includes(id));

  // Auto-mark newly unlocked as seen after a short delay
  useEffect(() => {
    if (newIds.length === 0) return;
    const timer = setTimeout(() => markAllSeen(newIds), 3000);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newIds.join(',')]);

  return {
    ACHIEVEMENTS,
    unlockedIds,
    newIds,
    unlockedCount: unlockedIds.length,
    total: ACHIEVEMENTS.length,
  };
}
