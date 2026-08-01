import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Crown, Check, Sparkles, RotateCcw, X, LogIn } from 'lucide-react';

import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import {
  useEntitlement,
  FREE_QUESTION_LIMIT,
} from '@/hooks/useEntitlement';
import {
  getEffectiveWebUserId,
  isNativePlatform,
  type EntitlementErrorReason,
} from '@/lib/revenuecat';
import { useAuth } from '@/context/AuthContext';
import { LEVELS } from '@/data/questions';
import type { TranslationKey } from '@/i18n/translations';

type Benefit = {
  key: TranslationKey;
  values?: Record<string, string | number>;
};

const BENEFITS: Benefit[] = [
  {
    key: 'benefit_all_levels',
    values: {
      count: LEVELS.length,
    },
  },
  {
    key: 'benefit_unlimited_questions',
    values: {
      count: FREE_QUESTION_LIMIT,
    },
  },
  {
    key: 'benefit_full_challenge',
  },
  {
    key: 'benefit_annual_subscription',
  },
];

const WEB_PURCHASE_URL =
  import.meta.env.VITE_REVENUECAT_WEB_PURCHASE_URL?.trim() ?? '';

export default function Paywall() {
  const { t } = useLanguage();
  const { playClick } = useSound();

  const {
    isPremium,
    isProcessing,
    purchase,
    restore,
  } = useEntitlement();

  const [, setLocation] = useLocation();
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isOpeningCheckout, setIsOpeningCheckout] = useState(false);

  const { user } = useAuth();
  const nativePlatform = isNativePlatform();

  const handleClose = () => {
    playClick();
    setLocation('/levels');
  };

  const errorMessage = (
    reason: EntitlementErrorReason | null,
  ): string => {
    switch (reason) {
      case 'cancelled':
        return t('purchase_cancelled');

      case 'network':
        return t('no_connection_retry');

      case 'store_unavailable':
        return t('store_unavailable');

      case 'no_offering':
        return t('premium_unavailable');

      case 'no_previous_purchase':
        return t('no_previous_purchase');

      default:
        return t('something_went_wrong');
    }
  };

  const handleSignInToUnlock = () => {
    playClick();
    setLocation('/login?next=/paywall');
  };

  const handleUnlock = async () => {
    playClick();
    setFeedback(null);

    /*
     * Account is required to purchase so the subscription is tied to an
     * identity and restores on any device. This should only be reached when
     * the user is already signed in (the UI shows the sign-in prompt instead),
     * but guard here as a safety net.
     */
    if (!nativePlatform && !user) {
      setLocation('/login?next=/paywall');
      return;
    }

    /*
     * Web version:
     * Open the RevenueCat-hosted Web Purchase Link.
     */
    if (!nativePlatform) {
      if (!WEB_PURCHASE_URL) {
        console.error(
          '[RevenueCat] VITE_REVENUECAT_WEB_PURCHASE_URL is missing.',
        );

        setFeedback(t('premium_unavailable'));
        return;
      }

      setIsOpeningCheckout(true);

      try {
        const appUserId = await getEffectiveWebUserId();

        if (!appUserId) {
          console.error(
            '[RevenueCat] Unable to determine the Web Purchase Link user ID.',
          );

          setFeedback(t('premium_unavailable'));
          return;
        }

        const purchaseUrl = new URL(WEB_PURCHASE_URL);
        const basePath = purchaseUrl.pathname.replace(/\/+$/, '');

        purchaseUrl.pathname = `${basePath}/${encodeURIComponent(appUserId)}`;

        window.location.assign(purchaseUrl.toString());
      } catch (error) {
        console.error(
          '[RevenueCat] Unable to open Web Purchase Link:',
          error,
        );

        setFeedback(t('premium_unavailable'));
      } finally {
        setIsOpeningCheckout(false);
      }

      return;
    }

    /*
     * Android/iOS version:
     * Use the native RevenueCat SDK.
     */
    try {
      const success = await purchase();

      setFeedback(
        success
          ? t('premium_unlocked')
          : errorMessage(
              useEntitlement.getState().lastError,
            ),
      );
    } catch (error) {
      console.error(
        '[RevenueCat] Unexpected purchase error:',
        error,
      );

      setFeedback(t('something_went_wrong'));
    }
  };

  const handleRestore = async () => {
    playClick();
    setFeedback(null);

    /*
     * On native, restore goes through the store's receipt validation.
     * On web, a signed-in user can recover their subscription by re-querying
     * RevenueCat with their Firebase UID (the same ID used at purchase time).
     * Guests on web have no account to look up, so the button is hidden for them.
     */
    if (!nativePlatform && !user) {
      setFeedback(t('store_unavailable'));
      return;
    }

    try {
      const restored = await restore();

      setFeedback(
        restored
          ? t('purchase_restored')
          : errorMessage(
              useEntitlement.getState().lastError,
            ),
      );
    } catch (error) {
      console.error(
        '[RevenueCat] Unexpected restore error:',
        error,
      );

      setFeedback(t('something_went_wrong'));
    }
  };

  return (
    <div className="min-h-[100dvh] pt-24 pb-12 px-4 sacred-gradient flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mx-auto relative"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label={t('close')}
          className="absolute -top-2 right-0 p-2 rounded-full text-gold/60 hover:text-gold hover:bg-white/5 transition-colors"
          data-testid="button-close-paywall"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center mb-4 gold-glow">
            <Crown
              size={32}
              className="text-gold"
            />
          </div>

          <h1 className="font-serif text-3xl text-gold mb-2">
            {t('go_premium')}
          </h1>

          <p className="text-card-foreground/60 font-serif text-sm max-w-xs">
            {t('free_version_limit')}
          </p>
        </div>

        <div className="parchment-bg rounded-2xl border border-gold/30 p-6 mb-6">
          <ul className="space-y-3 mb-6">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit.key}
                className="flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check
                    size={12}
                    className="text-white"
                    strokeWidth={3}
                  />
                </span>

                <span className="text-card-foreground font-serif text-sm leading-snug">
                  {t(
                    benefit.key,
                    benefit.values,
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center border-t border-gold/20 pt-5">
            <p className="text-card-foreground/50 font-serif text-xs uppercase tracking-widest mb-1">
              {t('one_time_price')}
            </p>

            <p className="font-serif text-4xl font-bold text-card-foreground">
              $4.99/year
            </p>
          </div>
        </div>

        {isPremium ? (
          <div className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-700/30 border border-emerald-500/40 text-emerald-300 font-serif text-sm mb-4">
            <Sparkles size={16} />
            {t('already_premium')}
          </div>
        ) : !user && !nativePlatform ? (
          /* Not signed in on web — require an account before purchasing */
          <div className="flex flex-col gap-3 mb-3">
            <div className="rounded-2xl border border-sky-400/25 bg-sky-950/20 px-5 py-4 text-center">
              <p className="font-serif text-sm text-sky-200 leading-relaxed">
                {t('paywall_sign_in_required')}
              </p>
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSignInToUnlock}
              className="w-full py-4 rounded-full parchment-bg text-card-foreground border border-gold font-serif text-lg font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-shadow flex items-center justify-center gap-2"
              data-testid="button-sign-in-to-unlock"
            >
              <LogIn size={18} />
              {t('sign_in_to_unlock')}
            </motion.button>
          </div>
        ) : (
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleUnlock}
            disabled={isProcessing || isOpeningCheckout}
            className="w-full py-4 rounded-full parchment-bg text-card-foreground border border-gold font-serif text-lg font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-shadow disabled:opacity-60 mb-3"
            data-testid="button-unlock-premium"
          >
            {isProcessing || isOpeningCheckout
              ? t('processing')
              : t('unlock_premium')}
          </motion.button>
        )}

        {!isPremium && (nativePlatform || user) && (
          <button
            type="button"
            onClick={handleRestore}
            disabled={isProcessing}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-gold/30 text-gold/70 font-serif text-sm hover:text-gold hover:border-gold/60 transition-colors disabled:opacity-60"
            data-testid="button-restore-purchases"
          >
            <RotateCcw size={14} />
            {t('restore_purchases')}
          </button>
        )}

        {feedback && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            role="status"
            className="text-center text-gold/80 font-serif text-sm mt-4"
          >
            {feedback}
          </motion.p>
        )}

        {isPremium && (
          <button
            type="button"
            onClick={handleClose}
            className="w-full mt-3 py-3 rounded-full border border-gold text-gold font-serif text-sm uppercase tracking-widest hover:bg-gold/10 transition-colors"
          >
            {t('continue')}
          </button>
        )}
      </motion.div>
    </div>
  );
}