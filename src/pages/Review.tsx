import { LEVELS } from '@/data/questions';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  BookOpen,
  Check,
  ChevronLeft,
  GraduationCap,
  Heart,
  Home,
  Lightbulb,
  Sparkles,
  Star,
  X,
} from 'lucide-react';

function splitExplanation(explanation: string) {
  const match = explanation.match(/\s*\(([^()]*(?:Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|Samuel|Kings|Chronicles|Ezra|Nehemiah|Esther|Job|Psalm|Psalms|Proverbs|Ecclesiastes|Song|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|Corinthians|Galatians|Ephesians|Philippians|Colossians|Thessalonians|Timothy|Titus|Philemon|Hebrews|James|Peter|Jude|Revelation|Genèse|Exode|Lévitique|Nombres|Deutéronome|Josué|Juges|Samuel|Rois|Chroniques|Esdras|Néhémie|Esther|Psaume|Psaumes|Proverbes|Ecclésiaste|Cantique|Ésaïe|Jérémie|Ézéchiel|Daniel|Osée|Joël|Amos|Abdias|Jonas|Michée|Nahum|Habacuc|Sophonie|Aggée|Zacharie|Malachie|Matthieu|Marc|Luc|Jean|Actes|Romains|Corinthiens|Galates|Éphésiens|Philippiens|Colossiens|Thessaloniciens|Timothée|Tite|Philémon|Hébreux|Jacques|Pierre|Jude|Apocalypse)[^()]*)\)\s*\.?$/i);

  if (!match) {
    return { explanation, scripture: null as string | null };
  }

  return {
    explanation: explanation.slice(0, match.index).trim(),
    scripture: match[1].trim(),
  };
}

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
type TranslationKey = Parameters<ReturnType<typeof useLanguage>['t']>[0];

const DIFFICULTY_KEYS: Record<Difficulty, TranslationKey> = {
  Beginner: 'beginner',
  Intermediate: 'intermediate',
  Advanced: 'advanced',
};

export default function Review() {
  const { wrongAnswers, resetGame } = useGameState();
  const { language, t } = useLanguage();
  const { playClick } = useSound();
  const [, setLocation] = useLocation();

  const handleBack = () => {
    playClick();
    resetGame();
    setLocation('/');
  };

  if (wrongAnswers.length === 0) {
    return (
      <div className="min-h-[100dvh] px-4 py-20 sacred-gradient flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md parchment-bg rounded-3xl border border-gold/30 p-8 text-center shadow-2xl"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
            <Sparkles size={30} />
          </div>
          <h1 className="font-serif text-2xl text-card-foreground mb-2">
            {t('excellent_work')}
          </h1>
          <p className="text-card-foreground/65 mb-6">
            {t('no_mistakes_review')}
          </p>
          <button
            onClick={handleBack}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-5 py-3 font-serif font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            <Home size={17} />
            {t('return_home')}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] sacred-gradient px-4 pb-16 pt-20">
      <div className="mx-auto w-full max-w-3xl">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="mb-5 flex items-center gap-3">
            <button
              onClick={handleBack}
              aria-label={t('return_home')}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-black/10 text-gold transition-colors hover:bg-gold/10"
            >
              <ChevronLeft size={21} />
            </button>

            <div>
              <p className="mb-1 font-serif text-xs uppercase tracking-[0.24em] text-gold/65">
                {t('reflect_and_learn')}
              </p>
              <h1 className="font-serif text-3xl font-bold text-gold md:text-4xl">
                {t('bible_study_review')}
              </h1>
            </div>
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            {t('review_intro')}
          </p>
        </motion.header>

        <div className="space-y-8">
          {wrongAnswers.map((wrong, idx) => {
            const level = LEVELS.find((item) => item.id === wrong.levelId);
            if (!level) return null;

            const theLie = level.statements.find((statement) => !statement.isTruth);
            if (!theLie) return null;

            const letters = ['A', 'B', 'C', 'D'];
            const lieIdx = level.statements.findIndex((statement) => !statement.isTruth);
            const selectedIdx = level.statements.findIndex(
              (statement) => statement.id === wrong.selectedStatementId,
            );
            const study = splitExplanation(level.explanation[language]);
            const scripture = level.scripture?.[language] ?? study.scripture;

            return (
              <motion.article
                key={`${wrong.levelId}-${idx}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.35 }}
                className="overflow-hidden rounded-3xl border border-gold/35 parchment-bg shadow-2xl"
              >
                <div className="relative overflow-hidden border-b border-gold/20">
                  <img
                    src={level.image}
                    alt={level.topic[language]}
                    className="h-52 w-full object-cover md:h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                    <div className="mb-4 flex items-center gap-2 text-red-300">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-300/50 bg-red-950/45">
                        <X size={17} strokeWidth={2.5} />
                      </div>
                      <span className="font-serif text-sm font-bold uppercase tracking-[0.18em]">
                        {t('incorrect')}
                      </span>
                    </div>

                    <div className="flex items-end gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${level.badgeColor} font-serif text-lg font-bold text-white shadow-lg`}
                      >
                        {level.levelNumber}
                      </div>
                      <div className="min-w-0">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                          {t(DIFFICULTY_KEYS[level.difficulty])}
                          {' • '}
                          {t(level.testament === 'Old' ? 'old_testament' : 'new_testament')}
                        </p>
                        <h2 className="font-serif text-2xl font-bold leading-snug text-white md:text-3xl">
                          {level.topic[language]}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-5 md:p-7">
                  <section>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                        <BookOpen size={21} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-card-foreground/45">
                          {t('question_review')}
                        </p>
                        <h3 className="font-serif text-xl font-bold text-card-foreground">
                          {t('review_four_statements')}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {level.statements.map((statement, statementIdx) => {
                        const isLie = !statement.isTruth;
                        const isSelected = statement.id === wrong.selectedStatementId;

                        const cardClasses = isLie
                          ? 'border-gold/55 bg-gold/10 shadow-[0_0_24px_rgba(212,175,55,0.10)]'
                          : isSelected
                            ? 'border-red-700/35 bg-red-950/10'
                            : 'border-emerald-800/20 bg-emerald-700/[0.045]';

                        const letterClasses = isLie
                          ? 'border-gold bg-gold/15 text-gold'
                          : isSelected
                            ? 'border-red-700/40 bg-red-950/15 text-red-700'
                            : 'border-emerald-800/30 bg-emerald-700/10 text-emerald-800';

                        return (
                          <motion.div
                            key={statement.id}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.12 + idx * 0.08 + statementIdx * 0.06,
                              duration: 0.3,
                            }}
                            className={`rounded-2xl border p-4 md:p-5 ${cardClasses}`}
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-serif font-bold ${letterClasses}`}
                              >
                                {letters[statementIdx]}
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                  {isLie ? (
                                    <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-gold">
                                      <X size={12} />
                                      {t('the_lie')}
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-800/25 bg-emerald-700/[0.07] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-800">
                                      <Check size={12} />
                                      {t('true')}
                                    </span>
                                  )}

                                  {isSelected && (
                                    <span className="inline-flex items-center gap-1 rounded-full border border-red-700/30 bg-red-950/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-red-700">
                                      {t('your_selection')}
                                    </span>
                                  )}
                                </div>

                                <p
                                  className={`text-base leading-relaxed md:text-lg ${
                                    isLie
                                      ? 'font-medium text-card-foreground'
                                      : 'text-card-foreground/78'
                                  }`}
                                >
                                  {statement.text[language]}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="mt-4 rounded-xl border border-gold/20 bg-black/[0.025] px-4 py-3 text-sm leading-relaxed text-card-foreground/65">
                      {t('review_selected_lie')
                        .replace('{selected}', letters[selectedIdx])
                        .replace('{lie}', letters[lieIdx])}
                    </div>
                  </section>

                  <section className="rounded-2xl border border-gold/25 bg-black/[0.035] p-5 md:p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                        <BookOpen size={21} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-card-foreground/45">
                          {t('bible_study')}
                        </p>
                        <h3 className="font-serif text-xl font-bold text-card-foreground">
                          {t('why_false')}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base leading-7 text-card-foreground/80 md:text-lg md:leading-8">
                      {study.explanation}
                    </p>

                    {scripture && (
                      <div className="mt-5 flex items-start gap-3 border-t border-gold/15 pt-4">
                        <BookOpen size={17} className="mt-0.5 shrink-0 text-gold" />
                        <div>
                          <p className="mb-0.5 text-xs font-semibold uppercase tracking-[0.13em] text-card-foreground/45">
                            {t('scripture')}
                          </p>
                          <p className="font-serif font-semibold text-gold">
                            {scripture}
                          </p>
                        </div>
                      </div>
                    )}
                  </section>

                  <section className="flex items-start gap-3 rounded-2xl border border-amber-700/20 bg-amber-500/[0.07] p-4 md:p-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-700">
                      <Lightbulb size={18} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-serif font-bold text-card-foreground">
                        {t('key_lesson')}
                      </h3>
                      <p className="text-sm leading-relaxed text-card-foreground/70 md:text-base">
                        {level.keyLesson?.[language] ??
                          t('default_key_lesson')}
                      </p>
                    </div>
                  </section>

                  {level.teacherNote && (
                    <section className="flex items-start gap-3 rounded-2xl border border-sky-800/20 bg-sky-700/[0.06] p-4 md:p-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-700/10 text-sky-800">
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-serif font-bold text-card-foreground">
                          {t('teacher_note')}
                        </h3>
                        <p className="text-sm leading-relaxed text-card-foreground/70 md:text-base">
                          {level.teacherNote[language]}
                        </p>
                      </div>
                    </section>
                  )}

                  {level.didYouKnow && (
                    <section className="flex items-start gap-3 rounded-2xl border border-violet-800/20 bg-violet-700/[0.05] p-4 md:p-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-700/10 text-violet-800">
                        <Star size={18} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-serif font-bold text-card-foreground">
                          {t('did_you_know')}
                        </h3>
                        <p className="text-sm leading-relaxed text-card-foreground/70 md:text-base">
                          {level.didYouKnow[language]}
                        </p>
                      </div>
                    </section>
                  )}

                  {level.lifeApplication && (
                    <section className="flex items-start gap-3 rounded-2xl border border-rose-800/20 bg-rose-700/[0.05] p-4 md:p-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-700/10 text-rose-800">
                        <Heart size={18} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-serif font-bold text-card-foreground">
                          {t('life_application')}
                        </h3>
                        <p className="text-sm leading-relaxed text-card-foreground/70 md:text-base">
                          {level.lifeApplication[language]}
                        </p>
                      </div>
                    </section>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={handleBack}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gold/45 bg-gold/10 px-6 py-3 font-serif font-bold text-gold transition-all hover:-translate-y-0.5 hover:bg-gold/20"
          >
            <Home size={18} />
            {t('continue_journey')}
          </button>
        </motion.div>
      </div>
    </div>
  );
}