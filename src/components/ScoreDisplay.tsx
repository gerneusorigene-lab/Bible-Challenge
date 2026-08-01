import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';

export function ScoreDisplay() {
  const { score } = useGameState();
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-black/40 backdrop-blur shadow-lg shadow-black/20"
      data-testid="display-score"
    >
      <span className="font-serif text-gold/80 text-sm tracking-widest uppercase">
        {t('score')}
      </span>
      <span className="font-serif font-bold text-xl text-gold gold-glow">
        {score}
      </span>
    </motion.div>
  );
}
