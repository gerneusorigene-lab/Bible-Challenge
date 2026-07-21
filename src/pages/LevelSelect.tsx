import { LEVELS } from '@/data/questions';
import { groupLevelsIntoStories } from '@/data/storyGroups';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { useGameState } from '@/hooks/useGameState';
import StoryCard from "@/components/StoryCard";
import {
  FREE_DIFFICULTY,
  FREE_LEVEL_IDS,
  FREE_QUESTION_LIMIT,
  isLevelFree,
  useEntitlement,
} from '@/hooks/useEntitlement';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  ArrowLeft,
  BookOpen,
  Crown,
  Gift,
  Lock,
  Map,
  Sparkles,
  Trophy,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
type Testament = 'All' | 'Old' | 'New';
type TranslationKey = Parameters<ReturnType<typeof useLanguage>['t']>[0];

type JourneyTheme = {
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  accent: string;
  accentText: string;
  border: string;
  panel: string;
  button: string;
  progress: string;
  icon: string;
};

const JOURNEY_THEMES: Record<Difficulty, JourneyTheme> = {
  Beginner: {
    titleKey: 'beginner_journey',
    subtitleKey: 'beginner_journey_subtitle',
    accent: 'from-emerald-300 via-emerald-500 to-green-700',
    accentText: 'text-emerald-300',
    border: 'border-emerald-400/45',
    panel: 'from-emerald-950/85 via-emerald-900/55 to-slate-950/75',
    button: 'from-emerald-400 via-emerald-600 to-green-800',
    progress: 'bg-emerald-400',
    icon: '📖',
  },
  Intermediate: {
    titleKey: 'intermediate_journey',
    subtitleKey: 'intermediate_journey_subtitle',
    accent: 'from-sky-300 via-blue-500 to-indigo-700',
    accentText: 'text-sky-300',
    border: 'border-blue-400/45',
    panel: 'from-blue-950/85 via-blue-900/55 to-slate-950/75',
    button: 'from-sky-400 via-blue-600 to-indigo-800',
    progress: 'bg-blue-400',
    icon: '🛡️',
  },
  Advanced: {
    titleKey: 'advanced_journey',
    subtitleKey: 'advanced_journey_subtitle',
    accent: 'from-fuchsia-300 via-violet-500 to-purple-800',
    accentText: 'text-fuchsia-300',
    border: 'border-violet-400/45',
    panel: 'from-purple-950/85 via-violet-950/55 to-slate-950/75',
    button: 'from-fuchsia-400 via-violet-600 to-purple-900',
    progress: 'bg-violet-400',
    icon: '👑',
  },
};

const TESTAMENT_FILTERS: Array<{
  key: Testament;
  labelKey: TranslationKey;
}> = [
  { key: 'All', labelKey: 'all_stories' },
  { key: 'Old', labelKey: 'old_testament' },
  { key: 'New', labelKey: 'new_testament' },
];

const STORY_DESCRIPTION_KEYS: Array<{
  keyword: string;
  descriptionKey: TranslationKey;
}> = [
  { keyword: 'creation', descriptionKey: 'story_description_creation' },
  { keyword: 'adam', descriptionKey: 'story_description_adam' },
  { keyword: 'noah', descriptionKey: 'story_description_noah' },
  { keyword: 'babel', descriptionKey: 'story_description_babel' },
  { keyword: 'abraham', descriptionKey: 'story_description_abraham' },
];

function getStoryDescriptionKey(topic: string): TranslationKey {
  const normalizedTopic = topic.toLowerCase();
  const match = STORY_DESCRIPTION_KEYS.find(({ keyword }) =>
    normalizedTopic.includes(keyword),
  );

  return match?.descriptionKey ?? 'story_description_default';
}

export default function LevelSelect() {
  const { t, language } = useLanguage();
  const { playClick } = useSound();
  const {
    startStory,
    startDifficultyPlay,
    allTimeCorrectLevels,
    storyProgress,
    setChallengeMode,
    setChallengeTimeLimit,
  } = useGameState();
  const { isPremium } = useEntitlement();
  const [, setLocation] = useLocation();

  const selectedDifficulty = useMemo<Difficulty>(() => {
    const requested = new URLSearchParams(window.location.search).get('difficulty');
    return requested === 'Intermediate' || requested === 'Advanced' ? requested : 'Beginner';
  }, []);

  const [testament, setTestament] = useState<Testament>('All');
  const [challengeOn, setChallengeOn] = useState(false);
  const [questionCount, setQuestionCount] = useState<10 | 20 | 40>(10);
  const [timeLimit, setTimeLimit] = useState<30 | 45 | 60>(30);

  const theme = JOURNEY_THEMES[selectedDifficulty];
  const journeyLocked = !isPremium && selectedDifficulty !== FREE_DIFFICULTY;

  const journeyLevels = LEVELS.filter((level) => level.difficulty === selectedDifficulty);
  const journeyStories = groupLevelsIntoStories(journeyLevels);
  const filteredStories = testament === 'All'
    ? journeyStories
    : journeyStories.filter((story) => story.representative.testament === testament);

  const completedCount = journeyStories.filter((story) =>
    story.levels.every((level) => allTimeCorrectLevels.includes(level.id))
  ).length;
  const progressPercent = journeyStories.length > 0 ? Math.round((completedCount / journeyStories.length) * 100) : 0;
  const nextRewardAt = Math.min(Math.max(Math.ceil((completedCount + 1) / 10) * 10, 10), journeyStories.length || 10);

  const goBack = () => {
    playClick();

    // Use an explicit document navigation here instead of relying only on
    // Wouter's setter. This route is opened with a difficulty query string in
    // both the browser and Capacitor builds; the explicit URL makes the Back
    // action reliable on Windows, Android, and after a page refresh.
    const journeyUrl = new URL('journey', document.baseURI);
    window.location.assign(journeyUrl.href);
  };

  const goToPaywall = () => {
    playClick();
    setLocation('/paywall');
  };

  const handleStorySelect = (storyId: string, levelIds: string[]) => {
    const playableIds = isPremium
      ? levelIds
      : levelIds.filter((levelId) => isLevelFree(levelId));

    if (journeyLocked || playableIds.length === 0) {
      goToPaywall();
      return;
    }

    playClick();
    startStory(playableIds, storyId);
    setChallengeMode(challengeOn);
    setChallengeTimeLimit(timeLimit);
    setLocation('/game');
  };

  const handlePlayJourney = () => {
    if (journeyLocked) {
      goToPaywall();
      return;
    }
    playClick();
    const isFreeTier = !isPremium && selectedDifficulty === FREE_DIFFICULTY;
    const limit = isFreeTier
      ? Math.min(challengeOn ? questionCount : FREE_QUESTION_LIMIT, FREE_QUESTION_LIMIT)
      : challengeOn
        ? questionCount
        : undefined;
    startDifficultyPlay(selectedDifficulty, limit, isFreeTier ? FREE_LEVEL_IDS : undefined);
    setChallengeMode(challengeOn);
    setChallengeTimeLimit(timeLimit);
    setLocation('/game');
  };

  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-[radial-gradient(circle_at_top,#0a3761_0%,#071f3d_38%,#031327_100%)] px-4 pb-24 pt-24 text-white sm:px-6">
      <div className="pointer-events-none fixed inset-0 opacity-40" aria-hidden="true">
        <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[4%] top-[38%] h-52 w-52 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute bottom-[8%] left-[35%] h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto w-full max-w-2xl"
      >
        <header className="relative mb-5 text-center">
          <button
            type="button"
            onClick={goBack}
            className="absolute left-0 top-0 z-[70] flex h-11 items-center gap-2 rounded-xl border border-white/20 bg-slate-950/35 px-3 text-xs font-black uppercase tracking-wider text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">{t('back')}</span>
          </button>

          <div className="mb-1 text-5xl drop-shadow-[0_5px_12px_rgba(0,0,0,.45)]">{theme.icon}</div>
          <h1 className={`bg-gradient-to-b ${theme.accent} bg-clip-text font-serif text-4xl font-black uppercase leading-none text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,.5)] sm:text-5xl`}>
            {t(theme.titleKey)}
          </h1>
          <p className="mt-3 text-sm font-bold text-white/90 sm:text-base">
            {t(theme.subtitleKey)}
          </p>
        </header>

        <section className={`mb-5 overflow-hidden rounded-3xl border ${theme.border} bg-gradient-to-r ${theme.panel} p-5 shadow-2xl backdrop-blur`}>
          <div className="flex items-center gap-4">
            <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-full border ${theme.border} bg-black/25 text-3xl shadow-inner`}>
              <BookOpen className={theme.accentText} size={31} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-serif text-xl font-black uppercase tracking-wide">
                {t('your_progress')}
              </p>
              <p className={`mt-1 text-xl font-black ${theme.accentText}`}>
                {completedCount} / {journeyStories.length} {t('completed')}
              </p>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <Gift className="text-amber-300" size={32} />
              <div className="text-right text-xs font-bold text-white/75">
                <p>{t('next_reward')}</p>
                <p className={theme.accentText}>{nextRewardAt} {t('stories')}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full border border-white/15 bg-black/35">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`h-full ${theme.progress} shadow-[0_0_14px_currentColor]`}
            />
          </div>
        </section>

        {journeyLocked && (
          <button
            type="button"
            onClick={goToPaywall}
            className="mb-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-amber-300/60 bg-amber-300/15 px-4 py-3 font-black text-amber-200 transition hover:bg-amber-300/25"
          >
            <Crown size={20} />
            {t('premium_journey_unlock')}
          </button>
        )}

        <section className={`mb-5 rounded-2xl border ${theme.border} bg-slate-950/35 p-4 backdrop-blur`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex shrink-0 items-center gap-3">
              <p className={`whitespace-nowrap font-serif text-sm font-black uppercase ${theme.accentText}`}>
                <Zap className="mr-1 inline" size={17} />
                {t('challenge_mode')}
              </p>

              <button
                type="button"
                onClick={() => {
                  playClick();
                  setChallengeOn((value) => !value);
                }}
                className={`relative h-7 w-14 shrink-0 rounded-full border transition ${
                  challengeOn
                    ? 'border-emerald-200/60 bg-emerald-500'
                    : 'border-white/20 bg-slate-600/70'
                }`}
                aria-label={t('toggle_challenge_mode')}
                aria-pressed={challengeOn}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                    challengeOn ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>

              <span
                className={`text-[11px] font-black uppercase tracking-widest ${
                  challengeOn ? 'text-emerald-300' : 'text-white/50'
                }`}
              >
                {challengeOn ? t('on') : t('off')}
              </span>
            </div>

            <div className="hidden h-10 w-px bg-white/15 sm:block" />

            <div
              className={`min-w-0 flex-1 transition-opacity ${
                challengeOn ? 'opacity-100' : 'opacity-35'
              }`}
            >
              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                <p className="mr-1 whitespace-nowrap text-[11px] font-black uppercase tracking-widest text-white/65">
                  {t('number_of_questions')}
                </p>

                {([10, 20, 40] as const).map((count) => (
                  <button
                    key={count}
                    type="button"
                    disabled={!challengeOn}
                    onClick={() => {
                      playClick();
                      setQuestionCount(count);
                    }}
                    className={`min-w-12 rounded-full border px-3 py-1.5 text-xs font-black transition disabled:cursor-not-allowed ${
                      challengeOn && questionCount === count
                        ? `border-white/70 bg-gradient-to-r ${theme.button} text-white`
                        : 'border-white/15 bg-black/20 text-white/55'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`mt-4 border-t border-white/10 pt-3 transition-opacity ${
              challengeOn ? 'opacity-100' : 'opacity-35'
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="mr-1 whitespace-nowrap text-[11px] font-black uppercase tracking-widest text-white/65">
                {t('time_limit')}
              </p>

              {([30, 45, 60] as const).map((seconds) => (
                <button
                  key={seconds}
                  type="button"
                  disabled={!challengeOn}
                  onClick={() => {
                    playClick();
                    setTimeLimit(seconds);
                  }}
                  className={`min-w-14 rounded-full border px-3 py-1.5 text-xs font-black transition disabled:cursor-not-allowed ${
                    challengeOn && timeLimit === seconds
                      ? `border-white/70 bg-gradient-to-r ${theme.button} text-white`
                      : 'border-white/15 bg-black/20 text-white/55'
                  }`}
                >
                  {seconds}s
                </button>
              ))}

              <p className="basis-full pt-1 text-xs font-semibold text-white/55 sm:ml-2 sm:basis-auto sm:pt-0">
                {t('timed_play_speed_bonus')}
              </p>
            </div>
          </div>
        </section>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm font-bold text-white/80">
            <BookOpen size={19} className={theme.accentText} />
            {t('choose_story_begin_adventure')}
          </p>
          <button
            type="button"
            onClick={handlePlayJourney}
            className={`flex items-center justify-center gap-2 rounded-full border border-white/35 bg-gradient-to-r ${theme.button} px-6 py-2 text-xs font-black uppercase tracking-widest shadow-lg transition hover:brightness-110`}
          >
            {journeyLocked ? <Lock size={15} /> : <Sparkles size={15} />}
            {t('play_journey')}
          </button>
        </div>

        <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
          {TESTAMENT_FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => { playClick(); setTestament(filter.key); }}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-wider transition ${testament === filter.key ? `border-white/55 bg-gradient-to-r ${theme.button}` : 'border-white/15 bg-black/20 text-white/55 hover:text-white'}`}
            >
              {t(filter.labelKey)}
            </button>
          ))}
        </div>

        <motion.div
          key={`${selectedDifficulty}-${testament}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3"
        >
          {filteredStories.map((story, index) => {
            const level = story.representative;
            const completed = story.levels.every((item) => allTimeCorrectLevels.includes(item.id));
            const playableQuestionCount = isPremium
              ? story.levels.length
              : story.levels.filter((item) => isLevelFree(item.id)).length;
            const locked = journeyLocked || playableQuestionCount === 0;
            const description = t(getStoryDescriptionKey(level.topic.en));
            
            const progress = storyProgress[story.id];
            const masteredCount = progress?.questionsMastered.filter((id) => story.levels.some((item) => item.id === id)).length ?? 0;
                  
            const masteryPercent = story.levels.length > 0 ? Math.round((masteredCount / story.levels.length) * 100) : 0;
            const bestScore = progress?.bestScore ?? 0;

            return (
              <StoryCard
                key={story.id}
                story={story}
                level={level}
                index={index}
                theme={theme}
                language={language}
                description={description}
                playableQuestionCount={playableQuestionCount}
                masteredCount={masteredCount}
                masteryPercent={masteryPercent}
                bestScore={bestScore}
                locked={locked}
                completed={completed}
                t={t}
                onPlay={() =>
                  handleStorySelect(
                    story.id,
                    story.levels.map((item) => item.id),
                  )
                }
              />
            );
          })}
        </motion.div>

        <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row">
          <p className="flex items-center gap-2 text-sm font-bold text-white/60">
            <Trophy size={18} className="text-amber-300" />
            {t('complete_stories_unlock_rewards')}
          </p>
          <button
            type="button"
            onClick={() => {
              playClick();
              setLocation('/journey-map');
            }}
            className="flex items-center gap-2 rounded-xl border border-violet-300/40 bg-gradient-to-r from-blue-600 to-violet-700 px-5 py-3 font-serif text-sm font-black uppercase tracking-wide shadow-lg"
          >
            <Map size={19} />
            {t('journey_map')}
          </button>
        </div>
      </motion.section>
    </main>
  );
}