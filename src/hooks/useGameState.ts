import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LEVELS } from '../data/questions';
import { getStoryIdForLevel } from '../data/storyGroups';

export interface WrongAnswer {
  levelId: string;
  selectedStatementId: string;
}

export interface StoryProgress {
  timesPlayed: number;
  bestScore: number;
  questionsSeen: string[];
  questionsMastered: string[];
  lastPlayed: string | null;
}

interface GameState {
  // ── Session (reset each game) ──────────────────────────────
  score: number;
  currentLevelId: string | null;
  playAllMode: boolean;
  difficultyPlayMode: 'Beginner' | 'Intermediate' | 'Advanced' | null;
  levelsCompleted: string[];
  lastAnswerCorrect: boolean | null;
  lastSelectedStatementId: string | null;
  streak: number;
  wrongAnswers: WrongAnswer[];
  hintsUsedThisLevel: boolean;
  lastBonusEarned: number;
  challengeMode: boolean;
  challengeTimeLimit: 30 | 45 | 60;
  sessionQueue: string[] | null;
  activeStoryId: string | null;

  // ── Persisted ──────────────────────────────────────────────
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

  // ── Actions ────────────────────────────────────────────────
  startLevel: (levelId: string) => void;
  startStory: (levelIds: string[], storyId?: string) => void;
  startPlayAll: () => void;
  startDifficultyPlay: (difficulty: 'Beginner' | 'Intermediate' | 'Advanced', questionLimit?: number, allowedLevelIds?: string[]) => void;
  submitAnswer: (statementId: string, isTruth: boolean, timeBonus?: number) => void;
  useHint: () => void;
  nextLevel: () => void;
  resetGame: () => void;
  completeDailyChallenge: () => void;
  resetAllProgress: () => void;
  setChallengeMode: (on: boolean) => void;
  setChallengeTimeLimit: (seconds: 30 | 45 | 60) => void;
}

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

const SESSION_RESET: Pick<GameState,
  'score' | 'currentLevelId' | 'playAllMode' | 'difficultyPlayMode' |
  'levelsCompleted' | 'lastAnswerCorrect' | 'lastSelectedStatementId' |
  'streak' | 'wrongAnswers' | 'hintsUsedThisLevel' | 'lastBonusEarned' | 'challengeMode' | 'challengeTimeLimit' | 'sessionQueue' | 'activeStoryId'
> = {
  score: 0,
  currentLevelId: null,
  playAllMode: false,
  difficultyPlayMode: null,
  levelsCompleted: [],
  lastAnswerCorrect: null,
  lastSelectedStatementId: null,
  streak: 0,
  wrongAnswers: [],
  hintsUsedThisLevel: false,
  lastBonusEarned: 0,
  challengeMode: false,
  challengeTimeLimit: 30,
  sessionQueue: null,
  activeStoryId: null,
};

export const useGameState = create<GameState>()(
  persist(
    (set, get) => ({
      ...SESSION_RESET,

      highScore: 0,
      allTimeCorrectLevels: [],
      allTimeMaxStreak: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      hintsUsedAllTime: 0,
      noHintLevels: 0,
      perfectRuns: 0,
      maxTimeBonusEarned: 0,
      dailyChallengeLastCompleted: null,
      storyProgress: {},

      startLevel: (levelId) => set({ ...SESSION_RESET, currentLevelId: levelId }),

      startStory: (levelIds, storyId) => {
        const validIds = levelIds.filter((id) =>
          LEVELS.some((level) => level.id === id)
        );

        if (validIds.length === 0) return;

        // Keep the story's representative level first, then randomize the rest.
        const firstLevelId = validIds[0];
        const remainingIds = shuffle(validIds.slice(1));
        const queue = [firstLevelId, ...remainingIds];

        set({
          ...SESSION_RESET,
          currentLevelId: queue[0],
          sessionQueue: queue,
          activeStoryId: storyId ?? getStoryIdForLevel(queue[0]),
        });
      },

      startPlayAll: () => set({
        ...SESSION_RESET,
        currentLevelId: LEVELS[0].id,
        playAllMode: true,
      }),

      startDifficultyPlay: (difficulty, questionLimit, allowedLevelIds) => {
        let tier = LEVELS.filter(l => l.difficulty === difficulty);
        if (allowedLevelIds) tier = tier.filter(l => allowedLevelIds.includes(l.id));
        if (tier.length === 0) return;
        // Journey play always uses an explicit shuffled queue. This prevents every
        // session from starting at the first story and progressing in database order.
        const shuffledIds = shuffle(tier.map((level) => level.id));
        const queue = questionLimit
          ? shuffledIds.slice(0, Math.min(questionLimit, shuffledIds.length))
          : shuffledIds;
        set({
          ...SESSION_RESET,
          currentLevelId: queue[0],
          difficultyPlayMode: difficulty,
          sessionQueue: queue,
        });
      },

      submitAnswer: (statementId, isTruth, timeBonus = 0) => set((state) => {
        const correct = !isTruth;
        const newStreak = correct ? state.streak + 1 : 0;
        const comboBonus = correct && newStreak >= 10 ? 15
          : correct && newStreak >= 5 ? 10
          : correct && newStreak >= 3 ? 5
          : 0;
        const totalBonus = correct ? timeBonus + comboBonus : 0;
        const pointsEarned = correct ? 10 + totalBonus : 0;
        const newScore = state.score + pointsEarned;

        const levelId = state.currentLevelId!;
        const storyId = getStoryIdForLevel(levelId);
        const previousProgress = state.storyProgress[storyId] ?? {
          timesPlayed: 0,
          bestScore: 0,
          questionsSeen: [],
          questionsMastered: [],
          lastPlayed: null,
        };
        const questionsSeen = previousProgress.questionsSeen.includes(levelId)
          ? previousProgress.questionsSeen
          : [...previousProgress.questionsSeen, levelId];
        const questionsMastered = correct && !previousProgress.questionsMastered.includes(levelId)
          ? [...previousProgress.questionsMastered, levelId]
          : previousProgress.questionsMastered;

        return {
          lastAnswerCorrect: correct,
          lastSelectedStatementId: statementId,
          score: newScore,
          highScore: Math.max(state.highScore, newScore),
          streak: newStreak,
          allTimeMaxStreak: Math.max(state.allTimeMaxStreak, newStreak),
          wrongAnswers: correct
            ? state.wrongAnswers
            : [...state.wrongAnswers, { levelId: state.currentLevelId!, selectedStatementId: statementId }],
          allTimeCorrectLevels: correct && state.currentLevelId && !state.allTimeCorrectLevels.includes(state.currentLevelId)
            ? [...state.allTimeCorrectLevels, state.currentLevelId]
            : state.allTimeCorrectLevels,
          totalAnswered: state.totalAnswered + 1,
          totalCorrect: state.totalCorrect + (correct ? 1 : 0),
          lastBonusEarned: totalBonus,
          maxTimeBonusEarned: Math.max(state.maxTimeBonusEarned, timeBonus),
          storyProgress: {
            ...state.storyProgress,
            [storyId]: { ...previousProgress, questionsSeen, questionsMastered },
          },
        };
      }),

      useHint: () => set((state) => ({
        hintsUsedThisLevel: true,
        hintsUsedAllTime: state.hintsUsedAllTime + 1,
      })),

      nextLevel: () => set((state) => {
        if (!state.currentLevelId) return state;

        const finalizeStoryProgress = () => {
          if (!state.activeStoryId || !state.sessionQueue) return state.storyProgress;
          const previous = state.storyProgress[state.activeStoryId] ?? {
            timesPlayed: 0,
            bestScore: 0,
            questionsSeen: [],
            questionsMastered: [],
            lastPlayed: null,
          };
          const answered = state.levelsCompleted.length + 1;
          const correct = Math.max(0, answered - state.wrongAnswers.length);
          const scorePercent = answered > 0 ? Math.round((correct / answered) * 100) : 0;
          return {
            ...state.storyProgress,
            [state.activeStoryId]: {
              ...previous,
              timesPlayed: previous.timesPlayed + 1,
              bestScore: Math.max(previous.bestScore, scorePercent),
              lastPlayed: new Date().toISOString(),
            },
          };
        };

        const newCompleted = [...state.levelsCompleted, state.currentLevelId];
        const noHintIncrement = !state.hintsUsedThisLevel ? 1 : 0;

        const levelReset = {
          lastAnswerCorrect: null,
          lastSelectedStatementId: null,
          hintsUsedThisLevel: false,
          lastBonusEarned: 0,
          noHintLevels: state.noHintLevels + noHintIncrement,
        };

        if (state.playAllMode) {
          const currentIdx = LEVELS.findIndex(l => l.id === state.currentLevelId);
          if (currentIdx < LEVELS.length - 1) {
            return { ...levelReset, currentLevelId: LEVELS[currentIdx + 1].id, levelsCompleted: newCompleted };
          }
        } else if (state.sessionQueue) {
          const currentIdx = state.sessionQueue.indexOf(state.currentLevelId);
          if (currentIdx < state.sessionQueue.length - 1) {
            return { ...levelReset, currentLevelId: state.sessionQueue[currentIdx + 1], levelsCompleted: newCompleted };
          }
          const isPerfect = state.wrongAnswers.length === 0;
          return {
            ...levelReset,
            currentLevelId: null,
            levelsCompleted: newCompleted,
            perfectRuns: isPerfect ? state.perfectRuns + 1 : state.perfectRuns,
            storyProgress: finalizeStoryProgress(),
          };
        } else if (state.difficultyPlayMode) {
          const tier = LEVELS.filter(l => l.difficulty === state.difficultyPlayMode);
          const currentIdx = tier.findIndex(l => l.id === state.currentLevelId);
          if (currentIdx < tier.length - 1) {
            return { ...levelReset, currentLevelId: tier[currentIdx + 1].id, levelsCompleted: newCompleted };
          }
          // Tier finished — check for perfect run
          const isPerfect = state.wrongAnswers.length === 0;
          return {
            ...levelReset,
            currentLevelId: null,
            levelsCompleted: newCompleted,
            perfectRuns: isPerfect ? state.perfectRuns + 1 : state.perfectRuns,
          };
        }

        return { ...levelReset, currentLevelId: null, levelsCompleted: newCompleted };
      }),

      resetGame: () => set(SESSION_RESET),

      completeDailyChallenge: () => set({
        dailyChallengeLastCompleted: new Date().toISOString().split('T')[0],
      }),

      setChallengeMode: (on) => set({ challengeMode: on }),
      setChallengeTimeLimit: (seconds) => set({ challengeTimeLimit: seconds }),

      resetAllProgress: () => set({
        ...SESSION_RESET,
        highScore: 0,
        allTimeCorrectLevels: [],
        allTimeMaxStreak: 0,
        totalAnswered: 0,
        totalCorrect: 0,
        hintsUsedAllTime: 0,
        noHintLevels: 0,
        perfectRuns: 0,
        maxTimeBonusEarned: 0,
        dailyChallengeLastCompleted: null,
        storyProgress: {},
      }),
    }),
    {
      name: 'bible-game-storage',
      partialize: (state) => ({
        highScore: state.highScore,
        allTimeCorrectLevels: state.allTimeCorrectLevels,
        allTimeMaxStreak: state.allTimeMaxStreak,
        totalAnswered: state.totalAnswered,
        totalCorrect: state.totalCorrect,
        hintsUsedAllTime: state.hintsUsedAllTime,
        noHintLevels: state.noHintLevels,
        perfectRuns: state.perfectRuns,
        maxTimeBonusEarned: state.maxTimeBonusEarned,
        dailyChallengeLastCompleted: state.dailyChallengeLastCompleted,
        storyProgress: state.storyProgress,
      }),
    }
  )
);
