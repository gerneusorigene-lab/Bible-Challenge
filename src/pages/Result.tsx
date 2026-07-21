

import { LEVELS } from '@/data/questions';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { getDailyLevel, getTodayString } from '@/utils/daily';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { StatementCard } from '@/components/StatementCard';
import { ChevronRight, Flame } from 'lucide-react';

export default function Result() {
  const {
    currentLevelId, lastAnswerCorrect, lastSelectedStatementId,
    nextLevel, streak, lastBonusEarned,
    dailyChallengeLastCompleted, completeDailyChallenge,
  } = useGameState();
  const { language, t } = useLanguage();
  const { playClick } = useSound();
  const [, setLocation] = useLocation();

  const navigating = useRef(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (!currentLevelId || lastAnswerCorrect === null) setLocation('/');
  }, [currentLevelId, lastAnswerCorrect, setLocation]);

  // Mark daily challenge complete if this was today's level
  useEffect(() => {
    if (!currentLevelId) return;
    const today = getTodayString();
    if (dailyChallengeLastCompleted !== today && getDailyLevel().id === currentLevelId) {
      completeDailyChallenge();
    }
  }, []);

  if (!currentLevelId || lastAnswerCorrect === null) return null;

  const currentLevel = LEVELS.find(l => l.id === currentLevelId)!;
  const theLie = currentLevel.statements.find(s => !s.isTruth)!;
  const lieIndex = currentLevel.statements.findIndex(s => !s.isTruth);
  const letters = ['A', 'B', 'C', 'D'];

  const handleNext = () => {
    if (navigating.current) return;
    navigating.current = true;
    setBtnDisabled(true);
    playClick();
    nextLevel();
    setTimeout(() => {
      const state = useGameState.getState();
      setLocation(state.currentLevelId ? '/game' : '/end');
    }, 50);
  };

  return (
    <div className="min-h-[100dvh] pt-20 pb-24 px-4 sacred-gradient flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        <ScoreDisplay />
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-2xl text-center"
      >
        {/* Verdict */}
        <div className="mb-8">
          {lastAnswerCorrect ? (
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block">
              <h1 className="font-serif text-4xl md:text-5xl text-gold mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">
                {t('divine_truth')}
              </h1>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <p className="text-xl text-green-400 font-serif">+10 {t('points')}</p>
                {lastBonusEarned > 0 && (
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-lg text-amber-400 font-serif"
                  >
                    +{lastBonusEarned} {t('bonus')}
                  </motion.p>
                )}
                {streak >= 3 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-1 text-orange-400 font-serif"
                  >
                    <Flame size={16} className="animate-pulse" />
                    <span>{streak} {t('streak_suffix')}</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block">
              <h1 className="font-serif text-4xl md:text-5xl text-foreground/80 mb-2">
                {t('not_quite')}
              </h1>
              <p className="text-xl text-red-400/80 font-serif">0 {t('points')}</p>
            </motion.div>
          )}
        </div>

        {/* The Lie */}
        <div className="mb-8 text-left">
          <p className="text-center font-serif text-gold/70 mb-4 uppercase tracking-widest text-sm">
            {t('the_lie_was')}
          </p>
          <StatementCard
            statement={theLie}
            letter={letters[lieIndex]}
            index={0}
            status="selected-correct"
            disabled
          />
        </div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="parchment-bg p-6 md:p-8 rounded-xl border border-gold/40 text-left mb-12 shadow-2xl relative"
        >
          <div className="absolute -top-4 left-6 bg-background px-4 py-1 border border-gold/40 rounded-full text-gold font-serif text-sm uppercase tracking-widest">
            {t('explanation')}
          </div>
          <p className="text-card-foreground text-lg leading-relaxed mt-2">
            {currentLevel.explanation[language]}
          </p>
        </motion.div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 w-full flex justify-center px-4"
      >
        <button
          onClick={handleNext}
          disabled={btnDisabled}
          className="flex items-center gap-3 parchment-bg px-8 py-4 rounded-full text-card-foreground font-serif text-xl font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] border border-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          data-testid="button-next"
        >
          {t('continue')}
          <ChevronRight />
        </button>
      </motion.div>
    </div>
  );
}