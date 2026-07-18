import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { useEntitlement, FREE_QUESTION_LIMIT } from '@/hooks/useEntitlement';
import type { EntitlementErrorReason } from '@/lib/revenuecat';
import { LEVELS } from '@/data/questions';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Crown, Check, Sparkles, RotateCcw, X } from 'lucide-react';
import { useState } from 'react';

const BENEFITS: { en: string; fr: string }[] = [
  { en: `All ${LEVELS.length} levels, across Beginner, Intermediate & Advanced`, fr: `Les ${LEVELS.length} niveaux, du Débutant à l'Avancé` },
  { en: 'Unlimited questions — no more free-tier cap', fr: 'Questions illimitées — plus de limite gratuite' },
  { en: 'Play All Levels and full Challenge Mode', fr: 'Jouer tous les niveaux et le Mode Défi complet' },
  { en: 'One-time payment — yours forever, no subscription', fr: 'Paiement unique — à vous pour toujours, sans abonnement' },
];

export default function Paywall() {
  const { t } = useLanguage();
  const { playClick } = useSound();
  const { isPremium, isProcessing, purchase, restore } = useEntitlement();
  const [, setLocation] = useLocation();
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleClose = () => {
    playClick();
    setLocation('/levels');
  };

  const errorMessage = (reason: EntitlementErrorReason | null): string => {
    switch (reason) {
      case 'cancelled':
        return t('Purchase cancelled.', 'Achat annulé.');
      case 'network':
        return t(
          'No connection — check your internet and try again.',
          'Pas de connexion — vérifiez votre accès internet et réessayez.'
        );
      case 'store_unavailable':
        return t(
          'The store is unavailable right now. Please try again later.',
          "La boutique n'est pas disponible pour le moment. Veuillez réessayer plus tard."
        );
      case 'no_offering':
        return t(
          'Premium is not available yet. Please try again later.',
          "Premium n'est pas encore disponible. Veuillez réessayer plus tard."
        );
      case 'no_previous_purchase':
        return t('No previous purchase found.', 'Aucun achat antérieur trouvé.');
      default:
        return t('Something went wrong. Please try again.', "Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  const handleUnlock = async () => {
    playClick();
    setFeedback(null);
    const success = await purchase();
    setFeedback(success
      ? t('Premium unlocked! All levels are now available.', 'Premium débloqué ! Tous les niveaux sont maintenant disponibles.')
      : errorMessage(useEntitlement.getState().lastError));
  };

  const handleRestore = async () => {
    playClick();
    setFeedback(null);
    const restored = await restore();
    setFeedback(restored
      ? t('Purchase restored — Premium is active.', 'Achat restauré — Premium est actif.')
      : errorMessage(useEntitlement.getState().lastError));
  };

  return (
    <div className="min-h-[100dvh] pt-24 pb-12 px-4 sacred-gradient flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mx-auto relative"
      >
        <button
          onClick={handleClose}
          aria-label={t('Close', 'Fermer')}
          className="absolute -top-2 right-0 p-2 rounded-full text-gold/60 hover:text-gold hover:bg-white/5 transition-colors"
          data-testid="button-close-paywall"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center mb-4 gold-glow">
            <Crown size={32} className="text-gold" />
          </div>
          <h1 className="font-serif text-3xl text-gold mb-2">
            {t('Go Premium', 'Passez à Premium')}
          </h1>
          <p className="text-card-foreground/60 font-serif text-sm max-w-xs">
            {t(
              `The free version includes the Beginner tier, capped at ${FREE_QUESTION_LIMIT} questions.`,
              `La version gratuite inclut le niveau Débutant, limité à ${FREE_QUESTION_LIMIT} questions.`
            )}
          </p>
        </div>

        <div className="parchment-bg rounded-2xl border border-gold/30 p-6 mb-6">
          <ul className="space-y-3 mb-6">
            {BENEFITS.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-card-foreground font-serif text-sm leading-snug">
                  {t(b.en, b.fr)}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center border-t border-gold/20 pt-5">
            <p className="text-card-foreground/50 font-serif text-xs uppercase tracking-widest mb-1">
              {t('One-time price', 'Prix unique')}
            </p>
            <p className="font-serif text-4xl font-bold text-card-foreground">$4.99</p>
          </div>
        </div>

        {isPremium ? (
          <div className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-700/30 border border-emerald-500/40 text-emerald-300 font-serif text-sm mb-4">
            <Sparkles size={16} />
            {t('You already have Premium!', 'Vous avez déjà Premium !')}
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleUnlock}
            disabled={isProcessing}
            className="w-full py-4 rounded-full parchment-bg text-card-foreground border border-gold font-serif text-lg font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-shadow disabled:opacity-60 mb-3"
            data-testid="button-unlock-premium"
          >
            {isProcessing ? t('Processing…', 'Traitement…') : t('Unlock Premium', 'Débloquer Premium')}
          </motion.button>
        )}

        {!isPremium && (
          <button
            onClick={handleRestore}
            disabled={isProcessing}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-gold/30 text-gold/70 font-serif text-sm hover:text-gold hover:border-gold/60 transition-colors disabled:opacity-60"
            data-testid="button-restore-purchases"
          >
            <RotateCcw size={14} />
            {t('Restore Purchases', 'Restaurer les achats')}
          </button>
        )}

        {feedback && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gold/80 font-serif text-sm mt-4"
          >
            {feedback}
          </motion.p>
        )}

        {isPremium && (
          <button
            onClick={handleClose}
            className="w-full mt-3 py-3 rounded-full border border-gold text-gold font-serif text-sm uppercase tracking-widest hover:bg-gold/10 transition-colors"
          >
            {t('Continue', 'Continuer')}
          </button>
        )}
      </motion.div>
    </div>
  );
}
