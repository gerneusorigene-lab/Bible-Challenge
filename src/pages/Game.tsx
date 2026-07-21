

import { LEVELS, type Level } from '@/data/questions';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from 'wouter';
import { StatementCard } from '@/components/StatementCard';
import { BookOpen, Flame, Home, Lightbulb, Menu, Play, X, Brain, Trophy } from 'lucide-react';


function getStoryArtwork(level: Level): string | null {
  const topic = `${level.topic.en} ${level.topic.fr}`.toLowerCase();
  const image = level.image?.trim();
  if (!image) return null;

  // The first dataset used Noah, David, and Paul as temporary placeholders.
  // Only show those files for a matching story; future story-specific files
  // are accepted automatically.
  if (image.endsWith('/noah.jpg')) {
    return /noah|noé|ark|arche|flood|déluge/.test(topic) ? image : null;
  }
  if (image.endsWith('/david.jpg')) {
    return /david|goliath/.test(topic) ? image : null;
  }
  if (image.endsWith('/paul.jpg')) {
    return /paul|saul|saül/.test(topic) ? image : null;
  }

  return image;
}

function getTimeBonus(timeLeft: number): number {
  if (timeLeft > 20) return 10;
  if (timeLeft > 10) return 5;
  return 0;
}
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
type TranslationKey = Parameters<ReturnType<typeof useLanguage>['t']>[0];

const DIFFICULTY_KEYS: Record<Difficulty, TranslationKey> = {
  Beginner: 'beginner',
  Intermediate: 'intermediate',
  Advanced: 'advanced',
};

export default function Game() {
  const {
    currentLevelId, submitAnswer, streak, hintsUsedThisLevel, useHint,
    challengeMode, challengeTimeLimit, sessionQueue, difficultyPlayMode,
    playAllMode, resetGame, score,
  } = useGameState();
  const { language, t } = useLanguage();
  const { playCorrect, playWrong, playClick } = useSound();
  const [, setLocation] = useLocation();
  const currentLevel = currentLevelId ? LEVELS.find(level => level.id === currentLevelId) : undefined;
  const [shuffledStatements, setShuffledStatements] = useState<Level['statements']>([]);
  const [revealing, setRevealing] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(challengeTimeLimit);
  const [eliminatedId, setEliminatedId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leaveTarget, setLeaveTarget] = useState<'levels' | 'home' | null>(null);
  const [storyImageFailed, setStoryImageFailed] = useState(false);
  const didAnswer = useRef(false);
  const navTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up navigation timeout on unmount
  useEffect(() => () => { if (navTimeout.current) clearTimeout(navTimeout.current); }, []);

  useEffect(() => {
    if (!currentLevelId) setLocation('/levels');
  }, [currentLevelId, setLocation]);

  useEffect(() => {
  didAnswer.current = false;
  setRevealing(false);
  setEliminatedId(null);
  setTimeLeft(challengeTimeLimit);
  setStoryImageFailed(false);

  // Randomize the order of the 4 statements
  if (currentLevel) {
    setShuffledStatements(shuffleArray(currentLevel.statements));
  }

}, [currentLevelId, challengeTimeLimit, currentLevel]);

  // Timer tick — only in challenge mode
  useEffect(() => {
    if (!challengeMode || revealing) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [challengeMode, revealing]);

  // Timeout trigger — only in challenge mode
  useEffect(() => {
    if (!challengeMode) return;
    if (timeLeft === 0 && !revealing && !didAnswer.current) {
      handleTimeout();
    }
  }, [challengeMode, timeLeft]);

  if (!currentLevel) return null;

  const handleAnswer = (statementId: string, isTruth: boolean) => {
    if (didAnswer.current || revealing) return;
    didAnswer.current = true;
    setRevealing(true);
    const bonus = challengeMode ? getTimeBonus(timeLeft) : 0;
    const correct = !isTruth;
    if (correct) playCorrect(); else playWrong();
    submitAnswer(statementId, isTruth, bonus);
    navTimeout.current = setTimeout(() => setLocation('/result'), 1500);
  };

  const handleTimeout = useCallback(() => {
    if (didAnswer.current) return;
    didAnswer.current = true;
    setRevealing(true);
    const firstTruth = shuffledStatements.find(s => s.isTruth)!;
    playWrong();
    submitAnswer(firstTruth.id, true, 0);
    navTimeout.current = setTimeout(() => setLocation('/result'), 1500);
  }, [shuffledStatements, submitAnswer, playWrong, setLocation]);

  const handleHint = () => {
    if (hintsUsedThisLevel || revealing) return;
    playClick();
    const truths = shuffledStatements.filter(s => s.isTruth && s.id !== eliminatedId);
    if (truths.length === 0) return;
    const pick = truths[Math.floor(Math.random() * truths.length)];
    setEliminatedId(pick.id);
    useHint();
  };

  const letters = ['A', 'B', 'C', 'D'];

  const activeJourney = sessionQueue
    ?? (difficultyPlayMode ? LEVELS.filter(level => level.difficulty === difficultyPlayMode).map(level => level.id) : null)
    ?? (playAllMode ? LEVELS.map(level => level.id) : [currentLevelId]);
  const currentQuestionIndex = Math.max(0, activeJourney.indexOf(currentLevelId));
  const questionNumber = currentQuestionIndex + 1;
  const questionTotal = Math.max(1, activeJourney.length);
  const journeyProgress = Math.min(100, Math.max(0, (questionNumber / questionTotal) * 100));

  const requestLeave = (target: 'levels' | 'home') => {
    playClick();
    setMenuOpen(false);
    setLeaveTarget(target);
  };

  const confirmLeave = () => {
    if (!leaveTarget) return;
    if (navTimeout.current) clearTimeout(navTimeout.current);
    resetGame();
    setLocation(leaveTarget === 'home' ? '/' : '/levels');
  };

  const timerPct = challengeTimeLimit > 0
    ? Math.max(0, Math.min(100, (timeLeft / challengeTimeLimit) * 100))
    : 0;
  const timerColor = timeLeft > 20 ? 'bg-emerald-400' : timeLeft > 10 ? 'bg-amber-400' : 'bg-red-400';
  const timerPulse = timeLeft <= 10 && !revealing;
  const storyArtwork = getStoryArtwork(currentLevel);

  return (
    <div className="min-h-[100dvh] px-4 pb-10 pt-6 md:pt-8 sacred-gradient flex flex-col items-center">
      <div className="w-full max-w-3xl">

        {/* Premium play header: score, story title, menu and journey progress */}
        <motion.section
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 rounded-2xl border border-white/10 bg-[#071322]/80 px-3 py-2 shadow-2xl backdrop-blur-md md:px-4 md:py-2.5"
        >
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-5">
            <div className="flex items-center gap-2 rounded-xl border border-slate-500/50 bg-black/25 px-2.5 py-1.5 font-serif shadow-lg">
              <Trophy size={17} className="text-amber-400" />
              <span className="hidden text-xs uppercase tracking-[0.14em] text-white/80 sm:inline">{t('score')}</span>
              <span className="text-xl font-bold text-amber-400">{score}</span>
            </div>

            <div className="min-w-0 text-center">
              <div className="flex items-center justify-center gap-2">
                <BookOpen size={22} className="shrink-0 text-amber-400" />
                <h1 className="truncate font-serif text-lg font-bold text-white md:text-2xl">
                  {currentLevel.topic[language]}
                </h1>
              </div>
              <div className="mt-2 flex items-center justify-center gap-3">
                <div className="flex max-w-md flex-1 gap-1.5" aria-label={t('journey_progress')}>
                  {Array.from({ length: Math.min(questionTotal, 10) }).map((_, index) => {
                    const completed = index < Math.min(questionNumber, 10);
                    return <span key={index} className={`h-2 flex-1 rounded-full ${completed ? 'bg-amber-400' : 'bg-white/20'}`} />;
                  })}
                </div>
                <span className="shrink-0 font-serif text-sm tabular-nums text-white/90">{questionNumber} / {questionTotal}</span>
              </div>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => { playClick(); setMenuOpen(true); }}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-500/50 bg-black/25 text-white shadow-lg transition-colors hover:border-amber-400/70 hover:text-amber-400"
              aria-label={t('open_game_menu')}
            >
              <Menu size={23} />
            </motion.button>
          </div>
        </motion.section>

        {/* Cinematic story artwork with compact status overlays */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-3 h-36 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-slate-800 via-slate-950 to-amber-950 shadow-2xl md:h-48"
        >
          {storyArtwork && !storyImageFailed ? (
            <img
              src={storyArtwork}
              alt={currentLevel.topic[language]}
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setStoryImageFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,0.18),transparent_42%),linear-gradient(135deg,#14243a,#08111f_58%,#2b1b10)]">
              <div className="flex flex-col items-center gap-2 px-6 text-center text-white/55">
                <BookOpen size={46} className="text-amber-400/55" />
                <span className="font-serif text-base font-semibold md:text-lg">
                  {currentLevel.topic[language]}
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

          <div className="absolute left-3 top-3 md:left-4 md:top-4">
            <AnimatePresence>
              {streak > 0 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/60 px-3 py-2 font-serif text-sm text-white backdrop-blur"
                >
                  <Flame size={16} className="text-orange-400" />
                  <span>{streak} {t('streak')}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 md:inset-x-4 md:bottom-4">
            <span className={`inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-bold text-white shadow-lg ${currentLevel.badgeColor}`}>
              {t(DIFFICULTY_KEYS[currentLevel.difficulty])}
            </span>
            <span className="rounded-lg border border-white/20 bg-black/55 px-3 py-1.5 font-serif text-sm font-bold text-white backdrop-blur">
              {t('level')} {currentLevel.levelNumber}
            </span>
          </div>
        </motion.div>

        {/* Timer — challenge mode only */}
        {challengeMode && (
          <div className="mb-4 rounded-xl border border-white/10 bg-black/20 px-3 py-2">
            <div className="mb-1.5 flex items-center justify-between font-serif text-xs">
              <span className="text-foreground/60">{t('time_remaining')}</span>
              <span className={`tabular-nums ${timerPulse ? 'text-red-400' : 'text-gold/70'}`}>{revealing ? '—' : `${timeLeft}s`}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full transition-[width] duration-1000 ease-linear ${timerColor} ${timerPulse ? 'animate-pulse' : ''}`}
                style={{ width: `${timerPct}%` }}
              />
            </div>
          </div>
        )}

        {/* Compact game-mode question row: no repeated instruction line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mb-3 rounded-2xl border border-slate-500/40 bg-[#08182c]/85 px-4 py-2.5 text-center shadow-xl md:px-6"
        >
          <div className="mb-1.5 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-purple-500/60 bg-purple-500/10 px-4 py-2 font-serif text-xs font-bold uppercase tracking-[0.16em] text-purple-300 shadow-[0_0_18px_rgba(168,85,247,0.16)] md:text-sm">
              <Brain size={17} />
              <span>{t('game_mode_title')}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <p className="font-serif text-xl font-semibold leading-snug text-white md:text-3xl">
              {t('which_statement_lie')}
            </p>
            {!hintsUsedThisLevel && !revealing && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleHint}
                className="inline-flex items-center gap-2 rounded-full px-2 py-1 font-serif text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300 md:text-base"
              >
                <Lightbulb size={19} />
                {t('use_hint')}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Large answer cards */}
        <div className="space-y-3">
          <AnimatePresence>
            {shuffledStatements.map((statement, idx) => {
              let status: 'default' | 'selected-correct' | 'selected-wrong' | 'revealed-correct' | 'dimmed' | 'hint-eliminated' = 'default';

              if (statement.id === eliminatedId && !revealing) {
                status = 'hint-eliminated';
              } else if (revealing) {
                status = !statement.isTruth ? 'revealed-correct' : 'dimmed';
              }

              return (
                <StatementCard
                  key={statement.id}
                  statement={statement}
                  letter={letters[idx]}
                  index={idx}
                  status={status}
                  disabled={revealing || statement.id === eliminatedId}
                  onClick={() => handleAnswer(statement.id, statement.isTruth)}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Parchment game menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: 'spring', stiffness: 350, damping: 27 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-sm overflow-hidden rounded-3xl border-2 border-amber-700/70 bg-[#efe0b6] text-[#38240f] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-amber-800/25 px-5 py-4">
                <div>
                  <p className="font-serif text-xs font-bold uppercase tracking-[0.25em] text-amber-900/60">Bible Challenge</p>
                  <h2 className="font-serif text-2xl font-black">{t('game_menu')}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-amber-900/25 bg-white/20"
                  aria-label={t('close_menu')}
                >
                  <X size={21} />
                </button>
              </div>
              <div className="space-y-3 p-5">
                <button
                  type="button"
                  onClick={() => { playClick(); setMenuOpen(false); }}
                  className="flex w-full items-center gap-3 rounded-2xl border border-amber-900/25 bg-white/35 px-4 py-4 text-left font-serif text-lg font-bold shadow-sm transition-transform active:scale-[0.98]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-800 text-white"><Play size={19} fill="currentColor" /></span>
                  {t('resume_journey')}
                </button>
                <button
                  type="button"
                  onClick={() => requestLeave('levels')}
                  className="flex w-full items-center gap-3 rounded-2xl border border-amber-900/25 bg-white/35 px-4 py-4 text-left font-serif text-lg font-bold shadow-sm transition-transform active:scale-[0.98]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-800 text-white"><BookOpen size={20} /></span>
                  {t('story_list')}
                </button>
                <button
                  type="button"
                  onClick={() => requestLeave('home')}
                  className="flex w-full items-center gap-3 rounded-2xl border border-amber-900/25 bg-white/35 px-4 py-4 text-left font-serif text-lg font-bold shadow-sm transition-transform active:scale-[0.98]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-700 text-white"><Home size={20} /></span>
                  {t('home')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leave confirmation */}
      <AnimatePresence>
        {leaveTarget && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="w-full max-w-sm rounded-3xl border border-gold/40 bg-[#17130c] p-6 text-center shadow-2xl"
            >
              <h2 className="font-serif text-2xl font-bold text-gold">{t('leave_game')}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {t('leave_warning')}
              </p>
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => setLeaveTarget(null)}
                  className="w-full rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 font-serif font-bold text-gold"
                >
                  {t('continue_playing')}
                </button>
                <button
                  type="button"
                  onClick={confirmLeave}
                  className="w-full rounded-xl border border-red-500/30 bg-red-950/40 px-4 py-3 font-serif font-bold text-red-300"
                >
                  {leaveTarget === 'home' ? t('go_home') : t('back_story_list')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}