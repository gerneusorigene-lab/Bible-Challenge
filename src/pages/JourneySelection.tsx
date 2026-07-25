
import { motion } from 'framer-motion';
import { BookOpen, Crown, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { useEntitlement } from '@/hooks/useEntitlement';
import type { TranslationKey } from '@/i18n/translations';

type Journey = {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  badgeKey: TranslationKey;
  icon: typeof BookOpen;
  theme: string;
  glow: string;
  
};

const JOURNEYS: Journey[] = [
  {
    difficulty: 'Beginner',
    titleKey: 'beginner_journey',
    descriptionKey: 'beginner_journey_description',
    badgeKey: 'beginner_journey_badge',
    icon: BookOpen,
    theme: 'from-emerald-300 via-emerald-500 to-green-800 border-emerald-100/80',
    glow: 'shadow-[0_9px_0_#166534,0_16px_30px_rgba(6,78,59,.45)]',

  },
  {
    difficulty: 'Intermediate',
    titleKey: 'intermediate_journey',
    descriptionKey: 'intermediate_journey_description',
    badgeKey: 'intermediate_journey_badge',
    icon: Shield,
    theme: 'from-sky-300 via-blue-500 to-indigo-800 border-sky-100/80',
    glow: 'shadow-[0_9px_0_#273c91,0_16px_30px_rgba(30,64,175,.45)]',

  },
  {
    difficulty: 'Advanced',
    titleKey: 'advanced_journey',
    descriptionKey: 'advanced_journey_description',
    badgeKey: 'advanced_journey_badge',
    icon: Crown,
    theme: 'from-fuchsia-300 via-violet-500 to-purple-900 border-fuchsia-100/80',
    glow: 'shadow-[0_9px_0_#581c87,0_16px_30px_rgba(88,28,135,.5)]',

  },
];

export default function JourneySelection() {
  const { t } = useLanguage();
  const { playClick } = useSound();
  const { isPremium } = useEntitlement();
  const [, setLocation] = useLocation();

  const chooseJourney = (journey: Journey) => {
    playClick();
    const locked = journey.difficulty !== 'Beginner' && !isPremium;
    if (locked) {
      setLocation('/paywall');
      return;
    }
    setLocation(`/levels?difficulty=${journey.difficulty}`);
  };

  return (
    <main className="journey-screen min-h-[100dvh] overflow-x-hidden px-4 pb-12 pt-24 sm:px-6">
      <div className="journey-scene" aria-hidden="true">
        <div className="journey-light" />
        <div className="journey-orb journey-orb-one" />
        <div className="journey-orb journey-orb-two" />
        <div className="journey-stars" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative z-10 mx-auto w-full max-w-lg"
      >
        <header className="mb-7 text-center">
          <div className="mb-2 flex items-center justify-center gap-2 text-amber-200">
            <Sparkles size={18} />
            <span className="font-serif text-xs font-black uppercase tracking-[0.3em]">
              {t('begin_your_adventure')}
            </span>
            <Sparkles size={18} />
          </div>
          <h1 className="journey-heading font-serif text-4xl font-black leading-tight sm:text-5xl">
            {t('choose_your_journey')}
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm font-semibold text-white/85 sm:text-base">
            {t('journey_selection_intro')}
          </p>
        </header>

        <div className="flex flex-col gap-5">
          {JOURNEYS.map((journey, index) => {
            const Icon = journey.icon;
            const locked = journey.difficulty !== 'Beginner' && !isPremium;
            return (
              <motion.button
                key={journey.difficulty}
                type="button"
                initial={{ opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.12 }}
                whileHover={{ scale: 1.025, y: -3 }}
                whileTap={{ scale: 0.975, y: 5 }}
                onClick={() => chooseJourney(journey)}
                className={`journey-card relative w-full overflow-hidden rounded-[1.65rem] border-2 bg-gradient-to-br p-5 text-left text-white ${journey.theme} ${journey.glow}`}
                data-testid={`journey-${journey.difficulty.toLowerCase()}`}
              >
                <span className="pointer-events-none absolute inset-x-4 top-2 h-1/3 rounded-2xl bg-white/20 blur-sm" />
                <div className="relative flex items-center gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-2 border-white/55 bg-black/15 shadow-inner">
                    <Icon size={34} strokeWidth={2.4} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h2 className="font-serif text-xl font-black leading-tight sm:text-2xl">
                        {t(journey.titleKey)}
                      </h2>
                      {locked && (
                        <span className="rounded-full border border-amber-100/70 bg-amber-300 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-slate-900">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold leading-snug text-white/90">
                      {t(journey.descriptionKey)}
                    </p>
                    <p className="mt-2 text-[11px] font-black uppercase tracking-[0.16em] text-white/70">
                      {t(journey.badgeKey)}
                    </p>
                  </div>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 bg-black/15">
                    {locked ? <Crown size={20} /> : <ChevronRight size={23} />}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <p className="mt-9 text-center font-serif text-xs font-bold uppercase tracking-[0.22em] text-white/65">
          {t('play_learn_grow')}
        </p>
      </motion.section>
    </main>
  );
}