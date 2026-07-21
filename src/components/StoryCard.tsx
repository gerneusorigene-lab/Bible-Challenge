import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Check,
  ChevronRight,
  Lock,
  Star,
} from "lucide-react";
import { getStoryArtwork } from "@/data/storyArtwork";

type StoryCardProps = {
  story: any;
  level: any;
  index: number;
  theme: any;

  language: "en" | "fr";
  description: string;

  playableQuestionCount: number;

  masteredCount: number;
  masteryPercent: number;

  bestScore: number;

  locked: boolean;
  completed: boolean;

  t: (en: string, fr: string) => string;

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
  completed,
  t,
  onPlay,
}: StoryCardProps) {
  const [artworkFailed, setArtworkFailed] = useState(false);
  const artworkSrc = getStoryArtwork(level.topic.en);

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
        {/* Artwork */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-800">
          {!artworkFailed && artworkSrc ? (
            <img
              src={artworkSrc}
              alt={level.topic[language]}
              loading="lazy"
              onError={() => setArtworkFailed(true)}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              className={`grid h-full w-full place-items-center bg-gradient-to-br ${theme.button}`}
              aria-label={level.topic[language]}
            >
              <BookOpen size={34} className="text-white/90 drop-shadow" />
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

          {locked && (
            <div className="absolute inset-0 grid place-items-center bg-black/60">
              <Lock size={20} />
            </div>
          )}

          {completed && !locked && (
            <div className="absolute right-1 top-1 rounded-full bg-emerald-500 p-1 shadow">
              <Check size={14} strokeWidth={3} />
            </div>
          )}
        </div>

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
              ? t('question')
              : t('questions')}
          </p>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full ${theme.progress}`}
              style={{ width: `${masteryPercent}%` }}
            />
          </div>

          <p className="mt-1 text-xs text-white/60">
            {t('mastered')} {masteredCount}/{story.levels.length}
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