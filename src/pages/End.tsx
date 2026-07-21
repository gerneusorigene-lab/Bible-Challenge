


import { useGameState } from '@/hooks/useGameState';
import { useAchievements } from '@/hooks/useAchievements';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { LEVELS } from '@/data/questions';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Star, Share2, Check, BookOpen } from 'lucide-react';

export default function End() {
  const {
    score, levelsCompleted, playAllMode, difficultyPlayMode, sessionQueue,
    wrongAnswers, allTimeMaxStreak, streak, resetGame,
  } = useGameState();
  const { t, language } = useLanguage();
  const { playComplete, playClick } = useSound();
  const [, setLocation] = useLocation();
  const [copied, setCopied] = useState(false);
  const { newIds, achievements, markSeen } = useAchievements();

  useEffect(() => { playComplete(); }, [playComplete]);

  useEffect(() => {
    if (newIds.length === 0) return;
    const timer = window.setTimeout(() => markSeen(newIds), 5000);
    return () => window.clearTimeout(timer);
  }, [markSeen, newIds]);

  const maxPossibleScore = sessionQueue
    ? sessionQueue.length * 10
    : playAllMode
      ? LEVELS.length * 10
      : difficultyPlayMode
        ? LEVELS.filter(l => l.difficulty === difficultyPlayMode).length * 10
        : 10;

  const starsCount = score >= maxPossibleScore ? 3 : score >= maxPossibleScore * 0.5 ? 2 : 1;
  const bestStreak = Math.max(streak, allTimeMaxStreak);

  const handleHome = () => { playClick(); resetGame(); setLocation('/'); };
  const handleLevels = () => { playClick(); resetGame(); setLocation('/levels'); };
  const handleReview = () => { playClick(); setLocation('/review'); };

  const handleShare = async () => {
    playClick();
    const text = t('share_score_message')
      .replace('{score}', String(score))
      .replace('{streak}', String(bestStreak));
    if (navigator.share) {
      try { await navigator.share({ title: 'Three Truths & One Lie', text }); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-[100dvh] pt-20 pb-12 px-4 sacred-gradient flex flex-col items-center justify-center relative overflow-hidden">

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', x: `${(i * 37 + 13) % 100}vw`, opacity: 0 }}
            animate={{ y: '-10vh', opacity: [0, 1, 0] }}
            transition={{ duration: 2 + (i % 3), delay: (i * 0.15) % 1.5, repeat: Infinity, repeatDelay: (i * 0.2) % 2 }}
            className="absolute w-2 h-2 bg-gold/60 rounded-full blur-[1px]"
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="relative z-10 w-full max-w-lg parchment-bg p-8 md:p-10 rounded-2xl border-2 border-gold shadow-[0_0_50px_rgba(212,175,55,0.3)] text-center"
      >
        <h1 className="font-serif text-3xl md:text-4xl text-card-foreground font-bold mb-6">
          {t('journey_complete')}
        </h1>

        {/* Stars */}
        <div className="flex justify-center gap-4 mb-6">
          {[1, 2, 3].map((star) => (
            <motion.div key={star} initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: star * 0.2 + 0.5, type: 'spring' }}>
              <Star size={48} className={star <= starsCount ? 'fill-gold text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'fill-transparent text-card-foreground/20'} />
            </motion.div>
          ))}
        </div>

        {/* Score */}
        <div className="mb-6">
          <p className="font-serif text-card-foreground/60 uppercase tracking-widest text-sm mb-1">{t('final_score')}</p>
          <p className="font-serif text-6xl text-gold font-bold">{score}</p>
        </div>

        {/* Stats row */}
        <div className="flex justify-center gap-6 mb-6 text-sm font-serif">
          <div className="text-center">
            <div className="text-gold text-lg font-bold">{levelsCompleted.length}</div>
            <div className="text-card-foreground/50 uppercase tracking-wider text-xs">{t('levels')}</div>
          </div>
          <div className="w-px bg-gold/20" />
          <div className="text-center">
            <div className="text-orange-400 text-lg font-bold">{bestStreak}</div>
            <div className="text-card-foreground/50 uppercase tracking-wider text-xs">{t('best_streak')}</div>
          </div>
          <div className="w-px bg-gold/20" />
          <div className="text-center">
            <div className="text-red-400 text-lg font-bold">{wrongAnswers.length}</div>
            <div className="text-card-foreground/50 uppercase tracking-wider text-xs">{t('mistakes')}</div>
          </div>
        </div>

        {/* New achievements banner */}
        {newIds.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-3 rounded-xl border border-gold/40 bg-gold/10"
          >
            <p className="font-serif text-gold text-sm mb-2">{t('new_achievement')}</p>
            {newIds.map(id => {
              const a = achievements.find(ac => ac.id === id);
              return a ? (
                <p key={id} className="text-card-foreground/80 text-sm">
                  {a.icon} {a.title[language]}
                </p>
              ) : null;
            })}
          </motion.div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 bg-gold/10 hover:bg-gold/20 border border-gold text-gold font-serif py-3 rounded-xl font-bold uppercase tracking-widest transition-colors"
            data-testid="button-share"
          >
            {copied ? <><Check size={16} /> {t('copied')}</> : <><Share2 size={16} /> {t('share_score')}</>}
          </button>

          {wrongAnswers.length > 0 && (
            <button
              onClick={handleReview}
              className="w-full flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30 border border-white/10 text-card-foreground font-serif py-3 rounded-xl font-bold uppercase tracking-widest transition-colors"
              data-testid="button-review"
            >
              <BookOpen size={16} />
              {t(wrongAnswers.length === 1 ? 'review_one_mistake' : 'review_multiple_mistakes')
                .replace('{count}', String(wrongAnswers.length))}
            </button>
          )}

          <button
            onClick={handleLevels}
            className="w-full bg-black/20 hover:bg-black/30 text-card-foreground border border-white/10 font-serif py-3 rounded-xl font-bold uppercase tracking-widest transition-colors"
            data-testid="button-choose-level"
          >
            {t('choose_another_level')}
          </button>

          <button
            onClick={handleHome}
            className="w-full text-card-foreground/50 hover:text-card-foreground font-serif py-2 rounded-xl text-sm uppercase tracking-widest transition-colors"
            data-testid="button-home"
          >
            {t('return_home')}
          </button>
        </div>
      </motion.div>
    </div>
  );
}