import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LEVELS } from '../data/questions';

export interface WrongAnswer {
  levelId: string;
  selectedStatementId: string;
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

  // ── Actions ────────────────────────────────────────────────
  startLevel: (levelId: string) => void;
  startStory: (levelIds: string[]) => void;
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
  'streak' | 'wrongAnswers' | 'hintsUsedThisLevel' | 'lastBonusEarned' | 'challengeMode' | 'challengeTimeLimit' | 'sessionQueue'
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

      startLevel: (levelId) => set({ ...SESSION_RESET, currentLevelId: levelId }),

      startStory: (levelIds) => {
        const validIds = levelIds.filter((id) => LEVELS.some((level) => level.id === id));
        if (validIds.length === 0) return;
        const queue = shuffle(validIds);
        set({ ...SESSION_RESET, currentLevelId: queue[0], sessionQueue: queue });
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
        };
      }),

      useHint: () => set((state) => ({
        hintsUsedThisLevel: true,
        hintsUsedAllTime: state.hintsUsedAllTime + 1,
      })),

      nextLevel: () => set((state) => {
        if (!state.currentLevelId) return state;

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
      }),
    }
  )
);
