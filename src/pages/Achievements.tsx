import { useAchievements } from '@/hooks/useAchievements';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, LockKeyhole, Trophy } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

const categoryOrder = ['Learning', 'Accuracy', 'Exploration', 'Dedication', 'Mastery'] as const;

const categoryIcons: Record<(typeof categoryOrder)[number], string> = {
  Learning: '📖',
  Accuracy: '🎯',
  Exploration: '🌍',
  Dedication: '🔥',
  Mastery: '👑',
};

export default function Achievements() {
  const { achievements, unlockedIds, unlockedAt, newIds, unlockedCount, total, markSeen } = useAchievements();
  const { language, t } = useLanguage();
  const { playClick } = useSound();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (newIds.length > 0) markSeen(newIds);
  }, [markSeen, newIds]);

  const goBack = () => {
    playClick();
    setLocation('/');
  };

  const progressPercentage = total > 0 ? Math.floor((unlockedCount / total) * 100) : 0;
  const dateLocale = language === 'fr' ? 'fr-CA' : 'en-US';

  return (
    <main className="min-h-[100dvh] sacred-gradient px-4 pb-12 pt-24 sm:px-6">
      <section className="mx-auto w-full max-w-4xl">
        <button
          onClick={goBack}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm font-bold text-white/80 backdrop-blur hover:bg-black/30"
        >
          <ArrowLeft size={17} /> {t('Back', 'Retour')}
        </button>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-7 rounded-3xl border border-gold/35 bg-slate-950/45 px-5 py-5 text-center shadow-2xl backdrop-blur-md sm:px-7"
        >
          <div className="flex items-center justify-center gap-3">
            <Trophy className="shrink-0 text-yellow-300" size={38} />
            <h1 className="font-serif text-3xl font-black text-gold sm:text-4xl">
              {t('achievement_gallery')}
            </h1>
          </div>

          <p className="mt-2 text-sm text-white/70">
            {t('achievement_gallery_intro')}
          </p>

          <div className="mx-auto mt-4 max-w-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-white/65">
              {t('achievements_unlocked')}
            </p>
            <p className="mt-1 text-base font-extrabold text-white">
              {unlockedCount} {t('of')} {total} ({progressPercentage}%)
            </p>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${total > 0 ? (unlockedCount / total) * 100 : 0}%` }}
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-200"
              />
            </div>
          </div>
        </motion.div>

        <div className="space-y-7">
          {categoryOrder.map((category) => {
            const items = achievements.filter((achievement) => achievement.category === category);
            const translatedCategory = t(
              category === 'Learning' ? 'learning' :
              category === 'Accuracy' ? 'accuracy' :
              category === 'Exploration' ? 'exploration' :
              category === 'Dedication' ? 'dedication' :
              'mastery'
            );

            return (
              <section key={category}>
                <h2 className="mb-3 flex items-center gap-2 font-serif text-xl font-bold text-white">
                  <span aria-hidden="true">{categoryIcons[category]}</span>
                  <span>{translatedCategory}</span>
                </h2>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((achievement, index) => {
                    const unlocked = unlockedIds.includes(achievement.id);
                    const earnedDate = unlockedAt[achievement.id];
                    const formattedDate = earnedDate
                      ? new Intl.DateTimeFormat(dateLocale, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        }).format(new Date(earnedDate))
                      : t('today');

                    return (
                      <motion.article
                        key={achievement.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`relative overflow-hidden rounded-2xl border px-4 py-3.5 ${
                          unlocked
                            ? 'border-gold/45 parchment-bg shadow-[0_0_20px_rgba(212,175,55,0.12)]'
                            : 'border-white/15 bg-slate-900/55'
                        }`}
                      >
                        <div className="flex gap-3">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${
                              unlocked ? 'bg-gold/15' : 'bg-white/10 grayscale opacity-55'
                            }`}
                          >
                            {achievement.icon}
                          </div>

                          <div className="min-w-0">
                            <h3
                              className={`font-serif text-lg font-bold ${
                                unlocked ? 'text-card-foreground' : 'text-white/60'
                              }`}
                            >
                              {achievement.title[language]}
                            </h3>
                            <p
                              className={`mt-0.5 text-sm leading-snug ${
                                unlocked ? 'text-card-foreground/65' : 'text-white/45'
                              }`}
                            >
                              {achievement.desc[language]}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 flex min-h-8 items-end justify-between border-t border-current/10 pt-2.5 text-xs font-bold uppercase tracking-wider">
                          {unlocked ? (
                            <>
                              <span className="inline-flex items-center gap-1.5 text-emerald-700">
                                <CheckCircle2 size={15} /> {t('unlocked')}
                              </span>
                              <span className="text-right normal-case tracking-normal text-card-foreground/55">
                                <span className="block text-[10px] font-bold uppercase tracking-wider">
                                  {t('unlocked')}
                                </span>
                                <time className="block text-xs font-semibold">{formattedDate}</time>
                              </span>
                            </>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-white/50">
                              <LockKeyhole size={14} /> {t('locked')}
                            </span>
                          )}
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}