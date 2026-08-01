import type { StoryProgress } from '@/hooks/useGameState';

export type MasteryLevel = 'not-started' | 'learning' | 'improving' | 'skilled' | 'mastered';

export function getMasteryLevel(progress: StoryProgress | undefined, totalQuestions: number): MasteryLevel {
  if (!progress || progress.questionsSeen.length === 0) return 'not-started';
  const masteryPercent = totalQuestions > 0
    ? Math.round((progress.questionsMastered.length / totalQuestions) * 100)
    : 0;
  if (masteryPercent >= 100 && progress.bestScore >= 90) return 'mastered';
  if (masteryPercent >= 75 || progress.bestScore >= 80) return 'skilled';
  if (masteryPercent >= 40 || progress.bestScore >= 60) return 'improving';
  return 'learning';
}

export function getMasteryLabel(level: MasteryLevel, language: 'en' | 'fr'): string {
  const labels = {
    'not-started': { en: 'Not Started', fr: 'Non commencé' },
    learning: { en: 'Learning', fr: 'Apprentissage' },
    improving: { en: 'Improving', fr: 'En progrès' },
    skilled: { en: 'Skilled', fr: 'Compétent' },
    mastered: { en: 'Mastered', fr: 'Maîtrisé' },
  } as const;
  return labels[level][language];
}

export function getMasteryClasses(level: MasteryLevel): string {
  switch (level) {
    case 'mastered': return 'border-amber-300/45 bg-amber-400/15 text-amber-200';
    case 'skilled': return 'border-violet-300/40 bg-violet-500/15 text-violet-200';
    case 'improving': return 'border-sky-300/40 bg-sky-500/15 text-sky-200';
    case 'learning': return 'border-emerald-300/40 bg-emerald-500/15 text-emerald-200';
    default: return 'border-white/15 bg-white/5 text-white/45';
  }
}
