import { useGameState } from '@/hooks/useGameState';
import { useAchievementsStore } from '@/hooks/useAchievements';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Trash2, AlertTriangle } from 'lucide-react';

export function ResetProgressButton() {
  const { resetAllProgress } = useGameState();
  const { clearAll } = useAchievementsStore();
  const { t } = useLanguage();
  const { playClick } = useSound();
  const [confirming, setConfirming] = useState(false);

  const handleReset = () => {
    playClick();
    resetAllProgress();
    clearAll();
    setConfirming(false);
  };

  return (
    <>
      <button
        onClick={() => { playClick(); setConfirming(true); }}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 text-red-400/60 hover:border-red-500/60 hover:text-red-400 font-serif text-sm uppercase tracking-wider transition-colors"
        data-testid="button-reset-progress"
      >
        <Trash2 size={14} />
        {t('reset_progress')}
      </button>

      <AnimatePresence>
        {confirming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
            onClick={() => setConfirming(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="parchment-bg w-full max-w-sm rounded-2xl border border-red-500/40 p-8 text-center shadow-2xl"
            >
              <AlertTriangle size={36} className="text-red-400 mx-auto mb-4" />
              <h2 className="font-serif text-xl font-bold text-card-foreground mb-2">
                {t('reset_all_progress')}
              </h2>
              <p className="text-card-foreground/60 font-serif text-sm mb-8">
                {t('reset_progress_warning')}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirming(false)}
                  className="flex-1 py-3 rounded-xl border border-white/10 text-card-foreground/70 font-serif text-sm hover:bg-white/5 transition-colors"
                >
                  {t('cancel')}
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-serif text-sm font-bold transition-colors"
                  data-testid="button-confirm-reset"
                >
                  {t('yes_reset')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
