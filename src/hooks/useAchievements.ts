import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useEffect, useMemo } from 'react';
import { LEVELS } from '../data/questions';
import { groupLevelsIntoStories } from '../data/storyGroups';
import { useGameState, type StoryProgress } from './useGameState';

export interface Achievement {
  id: string;
  icon: string;
  category: 'Learning' | 'Accuracy' | 'Exploration' | 'Dedication' | 'Mastery';
  title: { en: string; fr: string };
  desc: { en: string; fr: string };
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_answer', icon: '✝️', category: 'Learning', title: { en: 'First Light', fr: 'Première Lumière' }, desc: { en: 'Answer your first question correctly.', fr: 'Répondez correctement à votre première question.' } },
  { id: 'first_story', icon: '📖', category: 'Learning', title: { en: 'Story Seeker', fr: "Explorateur d'Histoires" }, desc: { en: 'Complete your first Bible story.', fr: 'Terminez votre première histoire biblique.' } },
  { id: 'five_stories', icon: '🗺️', category: 'Exploration', title: { en: 'Faithful Explorer', fr: 'Explorateur Fidèle' }, desc: { en: 'Complete five different Bible stories.', fr: 'Terminez cinq histoires bibliques différentes.' } },
  { id: 'ten_stories', icon: '🧭', category: 'Exploration', title: { en: 'Bible Traveler', fr: 'Voyageur Biblique' }, desc: { en: 'Complete ten different Bible stories.', fr: 'Terminez dix histoires bibliques différentes.' } },
  { id: 'perfect_story', icon: '💎', category: 'Accuracy', title: { en: 'Flawless Story', fr: 'Histoire Sans Faute' }, desc: { en: 'Earn 100% on a story.', fr: 'Obtenez 100 % dans une histoire.' } },
  { id: 'three_perfect', icon: '🏆', category: 'Accuracy', title: { en: 'Triple Triumph', fr: 'Triple Triomphe' }, desc: { en: 'Earn 100% on three different stories.', fr: 'Obtenez 100 % dans trois histoires différentes.' } },
  { id: 'streak_five', icon: '🔥', category: 'Accuracy', title: { en: 'On Fire', fr: 'En Feu' }, desc: { en: 'Reach a five-answer streak.', fr: 'Atteignez une série de cinq bonnes réponses.' } },
  { id: 'streak_ten', icon: '⚡', category: 'Accuracy', title: { en: 'Unshakable', fr: 'Inébranlable' }, desc: { en: 'Reach a ten-answer streak.', fr: 'Atteignez une série de dix bonnes réponses.' } },
  { id: 'fifty_correct', icon: '🔍', category: 'Dedication', title: { en: 'Truth Seeker', fr: 'Chercheur de Vérité' }, desc: { en: 'Answer 50 questions correctly.', fr: 'Répondez correctement à 50 questions.' } },
  { id: 'hundred_answered', icon: '🛡️', category: 'Dedication', title: { en: 'Centurion', fr: 'Centurion' }, desc: { en: 'Answer 100 questions.', fr: 'Répondez à 100 questions.' } },
  { id: 'ten_no_hint', icon: '🧠', category: 'Mastery', title: { en: 'Pure Wisdom', fr: 'Sagesse Pure' }, desc: { en: 'Complete 10 questions without a hint.', fr: 'Terminez 10 questions sans indice.' } },
  { id: 'speed_bonus', icon: '⏱️', category: 'Mastery', title: { en: 'Quick Discernment', fr: 'Discernement Rapide' }, desc: { en: 'Earn the maximum speed bonus.', fr: 'Obtenez le bonus de vitesse maximal.' } },
  { id: 'beginner_scholar', icon: '📗', category: 'Mastery', title: { en: 'Beginner Scholar', fr: 'Érudit Débutant' }, desc: { en: 'Master every Beginner question.', fr: 'Maîtrisez toutes les questions Débutant.' } },
  { id: 'intermediate_scholar', icon: '📘', category: 'Mastery', title: { en: 'Intermediate Scholar', fr: 'Érudit Intermédiaire' }, desc: { en: 'Master every Intermediate question.', fr: 'Maîtrisez toutes les questions Intermédiaire.' } },
  { id: 'advanced_scholar', icon: '📙', category: 'Mastery', title: { en: 'Advanced Scholar', fr: 'Érudit Avancé' }, desc: { en: 'Master every Advanced question.', fr: 'Maîtrisez toutes les questions Avancé.' } },
  { id: 'bible_master', icon: '👑', category: 'Mastery', title: { en: 'Bible Master', fr: 'Maître de la Bible' }, desc: { en: 'Master every question in Bible Challenge.', fr: 'Maîtrisez toutes les questions de Défi Biblique.' } },
];

interface CheckInput {
  totalCorrect: number;
  totalAnswered: number;
  allTimeMaxStreak: number;
  allTimeCorrectLevels: string[];
  maxTimeBonusEarned: number;
  noHintLevels: number;
  storyProgress: Record<string, StoryProgress>;
}

export function getEligibleAchievementIds(s: CheckInput): string[] {
  const ids: string[] = [];
  const progressEntries = Object.values(s.storyProgress);
  const completedStories = progressEntries.filter((progress) => progress.timesPlayed > 0);
  const perfectStories = progressEntries.filter((progress) => progress.bestScore >= 100);
  const beginnerIds = LEVELS.filter((level) => level.difficulty === 'Beginner').map((level) => level.id);
  const intermediateIds = LEVELS.filter((level) => level.difficulty === 'Intermediate').map((level) => level.id);
  const advancedIds = LEVELS.filter((level) => level.difficulty === 'Advanced').map((level) => level.id);

  if (s.totalCorrect >= 1) ids.push('first_answer');
  if (completedStories.length >= 1) ids.push('first_story');
  if (completedStories.length >= 5) ids.push('five_stories');
  if (completedStories.length >= 10) ids.push('ten_stories');
  if (perfectStories.length >= 1) ids.push('perfect_story');
  if (perfectStories.length >= 3) ids.push('three_perfect');
  if (s.allTimeMaxStreak >= 5) ids.push('streak_five');
  if (s.allTimeMaxStreak >= 10) ids.push('streak_ten');
  if (s.totalCorrect >= 50) ids.push('fifty_correct');
  if (s.totalAnswered >= 100) ids.push('hundred_answered');
  if (s.noHintLevels >= 10) ids.push('ten_no_hint');
  if (s.maxTimeBonusEarned >= 10) ids.push('speed_bonus');
  if (beginnerIds.every((id) => s.allTimeCorrectLevels.includes(id))) ids.push('beginner_scholar');
  if (intermediateIds.every((id) => s.allTimeCorrectLevels.includes(id))) ids.push('intermediate_scholar');
  if (advancedIds.every((id) => s.allTimeCorrectLevels.includes(id))) ids.push('advanced_scholar');
  if (LEVELS.every((level) => s.allTimeCorrectLevels.includes(level.id))) ids.push('bible_master');

  return ids;
}

interface AchievementsStore {
  unlockedAt: Record<string, string>;
  seenIds: string[];
  award: (ids: string[]) => void;
  markSeen: (ids: string[]) => void;
  clearAll: () => void;
}

export const useAchievementsStore = create<AchievementsStore>()(
  persist(
    (set) => ({
      unlockedAt: {},
      seenIds: [],
      award: (ids) => set((state) => {
        const now = new Date().toISOString();
        const unlockedAt = { ...state.unlockedAt };
        ids.forEach((id) => {
          if (!unlockedAt[id]) unlockedAt[id] = now;
        });
        return { unlockedAt };
      }),
      markSeen: (ids) => set((state) => ({ seenIds: [...new Set([...state.seenIds, ...ids])] })),
      clearAll: () => set({ unlockedAt: {}, seenIds: [] }),
    }),
    { name: 'bible-game-achievements-v2' }
  )
);

export function useAchievements() {
  const game = useGameState();
  const { unlockedAt, seenIds, award, markSeen } = useAchievementsStore();

  const eligibleIds = useMemo(() => getEligibleAchievementIds({
    totalCorrect: game.totalCorrect,
    totalAnswered: game.totalAnswered,
    allTimeMaxStreak: game.allTimeMaxStreak,
    allTimeCorrectLevels: game.allTimeCorrectLevels,
    maxTimeBonusEarned: game.maxTimeBonusEarned,
    noHintLevels: game.noHintLevels,
    storyProgress: game.storyProgress,
  }), [
    game.totalCorrect,
    game.totalAnswered,
    game.allTimeMaxStreak,
    game.allTimeCorrectLevels,
    game.maxTimeBonusEarned,
    game.noHintLevels,
    game.storyProgress,
  ]);

  useEffect(() => {
    const missing = eligibleIds.filter((id) => !unlockedAt[id]);
    if (missing.length > 0) award(missing);
  }, [award, eligibleIds, unlockedAt]);

  const unlockedIds = ACHIEVEMENTS.map((achievement) => achievement.id).filter((id) => Boolean(unlockedAt[id]) || eligibleIds.includes(id));
  const newIds = unlockedIds.filter((id) => !seenIds.includes(id));
  const completedStoryCount = groupLevelsIntoStories(LEVELS).filter((story) => game.storyProgress[story.id]?.timesPlayed > 0).length;

  return {
    achievements: ACHIEVEMENTS,
    ACHIEVEMENTS,
    unlockedAt,
    unlockedIds,
    newIds,
    unlockedCount: unlockedIds.length,
    total: ACHIEVEMENTS.length,
    completedStoryCount,
    markSeen,
  };
}
