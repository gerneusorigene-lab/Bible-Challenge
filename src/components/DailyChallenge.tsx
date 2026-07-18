import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { useEntitlement, isLevelFree } from '@/hooks/useEntitlement';
import { getDailyLevel, getTodayString } from '@/utils/daily';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Calendar, Check, ChevronRight, Lock } from 'lucide-react';

export function DailyChallenge() {
  const { dailyChallengeLastCompleted, completeDailyChallenge, startLevel } = useGameState();
  const { isPremium } = useEntitlement();
  const { t, language } = useLanguage();
  const { playClick } = useSound();
  const [, setLocation] = useLocation();

  const today = getTodayString();
  const dailyLevel = getDailyLevel();
  const isCompletedToday = dailyChallengeLastCompleted === today;
  const locked = !isPremium && !isLevelFree(dailyLevel.id);

  const handlePlay = () => {
    if (isCompletedToday) return;
    playClick();
    if (locked) { setLocation('/paywall'); return; }
    // Completion is recorded in Result.tsx after the question is answered
    startLevel(dailyLevel.id);
    setLocation('/game');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={`w-full max-w-sm mx-auto parchment-bg rounded-xl border p-4 ${
        isCompletedToday ? 'border-emerald-700/40' : 'border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.15)]'
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={14} className={isCompletedToday ? 'text-emerald-400' : 'text-gold/60'} />
        <span className="text-xs uppercase tracking-widest font-serif text-gold/60">
          {t('Daily Challenge', 'Défi du Jour')}
        </span>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-sm font-bold text-card-foreground truncate">
            {dailyLevel.topic[language]}
          </h3>
          <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded font-bold text-white ${dailyLevel.badgeColor}`}>
            {language === 'en' ? dailyLevel.difficulty : dailyLevel.difficultyFr}
          </span>
        </div>

        {isCompletedToday ? (
          <div className="flex items-center gap-1.5 text-emerald-400 font-serif text-sm shrink-0">
            <Check size={16} />
            <span>{t('Done', 'Fait')}</span>
          </div>
        ) : (
          <button
            onClick={handlePlay}
            className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full border border-gold text-gold font-serif text-xs uppercase tracking-wider hover:bg-gold/10 transition-colors"
            data-testid="button-daily-challenge-play"
          >
            {locked ? (
              <>
                <Lock size={12} />
                {t('Premium', 'Premium')}
              </>
            ) : (
              <>
                {t('Play', 'Jouer')} <ChevronRight size={12} />
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}
