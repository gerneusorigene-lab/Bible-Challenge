import { Statement } from '@/data/questions';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Check, X, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

type CardStatus = 'default' | 'selected-correct' | 'selected-wrong' | 'revealed-correct' | 'dimmed' | 'hint-eliminated';

interface StatementCardProps {
  statement: Statement;
  letter: string;
  onClick?: () => void;
  disabled?: boolean;
  status?: CardStatus;
  index: number;
}

export function StatementCard({ statement, letter, onClick, disabled, status = 'default', index }: StatementCardProps) {
  const { language, t } = useLanguage();
  const isCorrectHighlight = status === 'selected-correct' || status === 'revealed-correct';
  const letterColors = ['bg-violet-700', 'bg-blue-700', 'bg-emerald-700', 'bg-orange-600'];
  const letterColor = letterColors[index % letterColors.length];

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled && status === 'default' ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled && status === 'default' ? { scale: 0.98 } : {}}
      className={cn(
        'w-full text-left relative overflow-hidden transition-all duration-500',
        'px-4 py-3.5 md:px-5 md:py-4 rounded-2xl border shadow-xl min-h-[78px]',
        status === 'default' && 'bg-[#f3f0e9] border-white/80 hover:border-amber-400 hover:shadow-[0_0_18px_rgba(245,158,11,0.28)] cursor-pointer',
        status === 'selected-correct' && 'bg-gold/20 border-gold shadow-[0_0_30px_rgba(212,175,55,0.6)]',
        status === 'revealed-correct' && 'bg-gold/10 border-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]',
        status === 'selected-wrong' && 'bg-black/40 border-red-900/50 grayscale-[0.5] opacity-80',
        status === 'dimmed' && 'bg-black/40 border-white/5 opacity-40 grayscale',
        status === 'hint-eliminated' && 'bg-emerald-900/20 border-emerald-700/40 opacity-60 cursor-not-allowed',
      )}
      data-testid={`card-statement-${letter}`}
    >
      <div className="flex gap-3 items-center">
        <div className={cn(
          'flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-serif text-xl font-bold border border-white/20 text-white shadow-md',
          isCorrectHighlight ? 'bg-gold text-black border-gold' : letterColor,
          status === 'selected-wrong' && 'bg-red-900/30 text-white border-red-900/50',
          status === 'dimmed' && 'opacity-50',
          status === 'hint-eliminated' && 'bg-emerald-800/40 text-emerald-400 border-emerald-600/50',
        )}>
          {letter}
        </div>

        <p className={cn(
          'flex-1 text-base md:text-xl leading-snug',
          status === 'default' && 'text-slate-950 font-medium',
          isCorrectHighlight && 'font-medium text-card-foreground',
          status === 'hint-eliminated' && 'text-emerald-300/80 line-through',
        )}>
          {statement.text[language]}
        </p>

        {status === 'default' && (
          <span aria-hidden="true" className="h-8 w-8 flex-shrink-0 rounded-full border-[3px] border-slate-500/70 bg-transparent" />
        )}

        {status === 'selected-correct' && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-gold mt-1">
            <Check size={24} />
          </motion.div>
        )}
        {status === 'selected-wrong' && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-red-400 mt-1">
            <X size={24} />
          </motion.div>
        )}
        {status === 'hint-eliminated' && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-400 mt-1 flex-shrink-0">
            <Lightbulb size={20} />
          </motion.div>
        )}
      </div>

      {status === 'hint-eliminated' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-emerald-400/70 font-serif text-xs uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded">
            {t('truth_revealed')}
          </span>
        </motion.div>
      )}
    </motion.button>
  );
}
