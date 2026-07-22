import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { useGameState } from '@/hooks/useGameState';
import { useEntitlement } from '@/hooks/useEntitlement';
import { useAchievements, useAchievementsStore } from '@/hooks/useAchievements';
import { DevPremiumToggle } from '@/components/DevPremiumToggle';
import { GameMenuButton } from '@/components/GameMenuButton';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import {
  BookOpen,
  CalendarDays,
  Crown,
  DoorOpen,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
} from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const { playClick } = useSound();
  const { highScore, resetAllProgress } = useGameState();
  const { unlockedCount, total } = useAchievements();
  const clearAchievements = useAchievementsStore((state) => state.clearAll);
  const { isPremium } = useEntitlement();
  const [, setLocation] = useLocation();
  const isAndroid = Capacitor.getPlatform() === 'android';

  const resetProgress = () => {
    playClick();
    const confirmed = window.confirm(t('reset_confirm'));

    if (confirmed) {
      resetAllProgress();
      clearAchievements();
    }
  };

  const exitApp = async () => {
    playClick();
    const confirmed = window.confirm(t('exit_confirm'));

    if (confirmed) await App.exitApp();
  };

  const go = (path: string) => {
    playClick();
    setLocation(path);
  };

  return (
    <main className="game-home min-h-[100dvh] overflow-x-hidden px-4 pb-10 pt-12 sm:pt-14 sm:px-6">
      <div className="game-sky" aria-hidden="true">
        <div className="sun-glow" />
        <div className="cloud cloud-one" />
        <div className="cloud cloud-two" />
        <div className="spark spark-one" />
        <div className="spark spark-two" />
        <div className="spark spark-three" />
        <div className="hills hills-back" />
        <div className="hills hills-front" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="game-logo mb-3 w-full rounded-[2rem] border-4 border-amber-200/90 px-5 py-4 text-center"
        >
          <div className="mb-1 flex items-center justify-center gap-2 text-amber-100">
            <Sparkles size={17} />
            <span className="font-serif text-xs font-bold uppercase tracking-[0.32em]">
              {t('company_name')}
            </span>
            <Sparkles size={17} />
          </div>

          <h1 className="game-title font-serif text-4xl font-black leading-none sm:text-5xl">
            {t('app_name')}
          </h1>

          <div className="mt-2 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-amber-50/95">
            <BookOpen size={18} />
            <span>{t('tagline')}</span>
          </div>
        </motion.div>

        <div className="mb-4 flex items-center gap-3 rounded-full border border-white/30 bg-slate-950/35 px-4 py-1.5 text-sm font-bold text-white shadow-lg backdrop-blur-md">
          <Trophy className="text-yellow-300" size={18} />
          <span>{t('high_score')}</span>
          <strong className="text-lg text-yellow-300">{highScore}</strong>

          {isPremium && (
            <span className="ml-1 rounded-full bg-violet-500/90 px-2 py-0.5 text-[10px] uppercase tracking-wider">
              Premium
            </span>
          )}
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <Link href="/journey" onClick={playClick}>
            <motion.div
              animate={{ scale: [1, 1.018, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <GameMenuButton
                icon={<Play fill="currentColor" />}
                tone="gold"
                testId="button-play"
              >
                {t('begin_journey')}
              </GameMenuButton>
            </motion.div>
          </Link>

          <GameMenuButton
            icon={<CalendarDays />}
            tone="blue"
            onClick={() => go('/levels')}
            testId="button-daily-home"
          >
            {t('daily_challenge')}
          </GameMenuButton>

          <GameMenuButton
            icon={<Trophy />}
            tone="green"
            onClick={() => go('/achievements')}
            testId="button-achievements-home"
          >
            {t('achievements')} ({unlockedCount}/{total})
          </GameMenuButton>

          {!isPremium && (
            <GameMenuButton
              icon={<Crown />}
              tone="purple"
              onClick={() => go('/paywall')}
              testId="button-premium-home"
            >
              {t('unlock_premium')}
            </GameMenuButton>
          )}

          <GameMenuButton
            icon={<RotateCcw />}
            tone="red"
            onClick={resetProgress}
            className="mt-1 py-3 text-sm opacity-95"
            testId="button-reset-home"
          >
            {t('reset_progress')}
          </GameMenuButton>

          {isAndroid && (
            <div className="flex w-full items-center gap-2">
              <div className="flex-1">
                <GameMenuButton
                  icon={<DoorOpen />}
                  tone="red"
                  onClick={exitApp}
                  className="w-full py-3 text-sm"
                  testId="button-exit-app"
                >
                  {t('exit_app')}
                </GameMenuButton>
              </div>

              <DevPremiumToggle />
            </div>
          )}
        </div>

        <footer className="mt-6 text-center text-xs font-semibold text-white/70 drop-shadow">
          <p>Version 1.0.0</p>
          <p className="mt-1">© 2026 Belleus Educational Games</p>
        </footer>
      </motion.section>
    </main>
  );
}