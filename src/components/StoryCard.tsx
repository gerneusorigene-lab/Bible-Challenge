import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import type { Language, TranslationKey } from '@/i18n/translations';

type StoryCardProps = {
  story: any;
  level: any;
  index: number;
  theme: any;

  language: Language;
  description: string;

  playableQuestionCount: number;

  masteredCount: number;
  masteryPercent: number;

  bestScore: number;

  locked: boolean;
  completed: boolean;

  t: (key: TranslationKey) => string;

  onPlay: () => void;
};

export default function StoryCard({
  story,
  level,
  index,
  theme,
  language,
  description,
  playableQuestionCount,
  masteredCount,
  masteryPercent,
  bestScore,
  locked,
  t,
  onPlay,
}: StoryCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onPlay}
      className={`group w-full rounded-2xl border ${
        theme.border
      } bg-slate-900 shadow-xl transition ${
        locked ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center gap-4 p-4">
        {/* Information */}
        <div className="min-w-0 flex-1 text-left">
          <div className="flex items-start justify-between gap-3">
            <h2 className="min-w-0 font-serif text-xl font-black">
              {level.topic[language]}
            </h2>

            <div className="flex shrink-0 items-center gap-1">
              {[33, 66, 100].map((value) => (
                <Star
                  key={value}
                  size={16}
                  className={
                    bestScore >= value
                      ? "fill-amber-300 text-amber-300"
                      : "text-white/20"
                  }
                />
              ))}
            </div>
          </div>

          <p className="mt-1 line-clamp-1 text-sm text-white/70">
            {description}
          </p>

          <p className="mt-2 text-xs font-bold text-white/80">
            🧩 {playableQuestionCount}{" "}
            {playableQuestionCount === 1
              ? t("question")
              : t("questions")}
          </p>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full ${theme.progress}`}
              style={{ width: `${masteryPercent}%` }}
            />
          </div>

          <p className="mt-1 text-xs text-white/60">
            {t("mastered")} {masteredCount}/{story.levels.length}
          </p>
        </div>

        {/* Play */}
        <div className="flex shrink-0 items-center justify-center">
          <div
            className={`rounded-full bg-gradient-to-r ${theme.button} p-3 shadow-lg`}
          >
            <ChevronRight size={22} />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
