import { useAchievements } from '@/hooks/useAchievements';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Trophy, ChevronDown } from 'lucide-react';
import { getLocalizedText } from '@/utils/localizedText';
export function AchievementsPanel() {
  const { ACHIEVEMENTS, unlockedIds, newIds, unlockedCount, total } = useAchievements();
  const { language, t } = useLanguage();
  const { playClick } = useSound();
  const [expanded, setExpanded] = useState(false);

  const toggle = () => { playClick(); setExpanded(e => !e); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
      className="w-full max-w-sm mx-auto"
    >
      {/* Toggle header */}
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-4 py-3 parchment-bg rounded-xl border border-gold/30 hover:border-gold/60 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Trophy size={16} className="text-gold" />
          <span className="font-serif text-sm text-card-foreground">
            {t('achievements')}
          </span>
          {newIds.length > 0 && (
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-serif text-xs text-gold">
            {unlockedCount}/{total}
          </span>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={14} className="text-gold/60" />
          </motion.div>
        </div>
      </button>

      {/* Grid */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-2 pt-3">
              {ACHIEVEMENTS.map((achievement, i) => {
                const unlocked = unlockedIds.includes(achievement.id);
                const isNew = newIds.includes(achievement.id);
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    title={getLocalizedText(achievement.desc, language)}
                    className={`relative flex flex-col items-center gap-1 p-2.5 rounded-xl border text-center transition-all ${
                      unlocked
                        ? 'parchment-bg border-gold/40 shadow-[0_0_8px_rgba(212,175,55,0.15)]'
                        : 'bg-white/5 border-white/10 grayscale opacity-40'
                    }`}
                  >
                    {isNew && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                    )}
                    <span className={`text-2xl ${unlocked ? '' : 'opacity-30'}`}>{achievement.icon}</span>
                    <span className="font-serif text-[10px] leading-tight text-card-foreground">
                      {getLocalizedText(achievement.title, language)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
