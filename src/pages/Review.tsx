import { LEVELS } from '@/data/questions';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { X, Check, ChevronLeft } from 'lucide-react';

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
      <div className="min-h-[100dvh] pt-20 pb-12 px-4 sacred-gradient flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="font-serif text-2xl text-gold mb-4">
            {t('No mistakes to review!', 'Aucune erreur à revoir !')}
          </p>
          <button onClick={handleBack} className="text-gold/60 hover:text-gold font-serif transition-colors">
            {t('Return Home', "Retour à l'accueil")}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] pt-20 pb-12 px-4 sacred-gradient flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={handleBack}
            className="p-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="font-serif text-2xl md:text-3xl text-gold">
            {t('Mistakes Review', 'Révision des Erreurs')}
          </h1>
        </div>

        <div className="space-y-6">
          {wrongAnswers.map((wrong, idx) => {
            const level = LEVELS.find(l => l.id === wrong.levelId);
            if (!level) return null;

            const theLie = level.statements.find(s => !s.isTruth)!;
            const selected = level.statements.find(s => s.id === wrong.selectedStatementId);
            const letters = ['A', 'B', 'C', 'D'];
            const lieIdx = level.statements.findIndex(s => !s.isTruth);
            const selIdx = level.statements.findIndex(s => s.id === wrong.selectedStatementId);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="parchment-bg rounded-2xl border border-gold/30 overflow-hidden"
              >
                {/* Level header */}
                <div className="flex items-center gap-3 p-4 border-b border-gold/20">
                  <div className={`w-10 h-10 rounded-lg ${level.badgeColor} flex items-center justify-center font-serif font-bold text-white shrink-0`}>
                    {level.levelNumber}
                  </div>
                  <div>
                    <div className="text-xs font-serif uppercase tracking-widest text-card-foreground/50 mb-0.5">
                      {language === 'en' ? level.difficulty : level.difficultyFr}
                    </div>
                    <h3 className="font-serif text-base font-bold text-card-foreground">
                      {level.topic[language]}
                    </h3>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  {/* What they picked */}
                  {selected && (
                    <div className="flex gap-3 items-start p-3 rounded-lg bg-red-900/20 border border-red-700/30">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-900/40 border border-red-700/50 flex items-center justify-center font-serif text-sm font-bold text-red-300">
                        {letters[selIdx]}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-red-400 font-serif uppercase tracking-wider mb-1 flex items-center gap-1">
                          <X size={11} /> {t('You chose (truth)', 'Vous avez choisi (vérité)')}
                        </div>
                        <p className="text-sm text-red-200/80">{selected.text[language]}</p>
                      </div>
                    </div>
                  )}

                  {/* The actual lie */}
                  <div className="flex gap-3 items-start p-3 rounded-lg bg-gold/10 border border-gold/30">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/20 border border-gold flex items-center justify-center font-serif text-sm font-bold text-gold">
                      {letters[lieIdx]}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gold font-serif uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Check size={11} /> {t('The Lie', 'Le Mensonge')}
                      </div>
                      <p className="text-sm text-card-foreground">{theLie.text[language]}</p>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="text-sm text-card-foreground/70 leading-relaxed pt-1 border-t border-gold/10">
                    {level.explanation[language]}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
