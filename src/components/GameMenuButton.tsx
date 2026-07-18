import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type GameMenuButtonProps = {
  children: ReactNode;
  icon: ReactNode;
  tone: 'gold' | 'blue' | 'green' | 'purple' | 'red';
  onClick?: () => void;
  className?: string;
  testId?: string;
};

const toneClasses: Record<GameMenuButtonProps['tone'], string> = {
  gold: 'from-amber-300 via-yellow-400 to-amber-600 border-yellow-100/80 text-slate-950 shadow-[0_8px_0_#9a5a08,0_12px_24px_rgba(0,0,0,.35)]',
  blue: 'from-sky-300 via-blue-500 to-indigo-700 border-sky-100/70 text-white shadow-[0_8px_0_#243b8d,0_12px_24px_rgba(0,0,0,.35)]',
  green: 'from-emerald-300 via-emerald-500 to-green-800 border-emerald-100/70 text-white shadow-[0_8px_0_#166534,0_12px_24px_rgba(0,0,0,.35)]',
  purple: 'from-fuchsia-300 via-violet-500 to-purple-800 border-fuchsia-100/70 text-white shadow-[0_8px_0_#581c87,0_12px_24px_rgba(0,0,0,.35)]',
  red: 'from-rose-300 via-red-500 to-red-800 border-rose-100/70 text-white shadow-[0_8px_0_#7f1d1d,0_12px_24px_rgba(0,0,0,.35)]',
};

export function GameMenuButton({
  children,
  icon,
  tone,
  onClick,
  className = '',
  testId,
}: GameMenuButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.97, y: 5 }}
      transition={{ type: 'spring', stiffness: 420, damping: 20 }}
      className={`game-menu-button relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 bg-gradient-to-b px-5 py-4 font-serif text-base font-black uppercase tracking-[0.11em] ${toneClasses[tone]} ${className}`}
      data-testid={testId}
    >
      <span className="pointer-events-none absolute inset-x-3 top-1 h-[38%] rounded-xl bg-white/25 blur-[1px]" />
      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/40 bg-black/15 shadow-inner">
        {icon}
      </span>
      <span className="relative drop-shadow-[0_2px_0_rgba(0,0,0,.35)]">{children}</span>
    </motion.button>
  );
}
