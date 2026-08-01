import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  Purchases as NativePurchases,
  PACKAGE_TYPE,
} from '@revenuecat/purchases-capacitor';
import { LEVELS } from '../data/questions';
import {
  PREMIUM_ENTITLEMENT_ID,
  ensureRevenueCatConfigured,
  toEntitlementErrorReason,
  type EntitlementErrorReason,
} from '../lib/revenuecat';
import {
  ensureWebBillingConfigured,
  checkStatusWeb,
  purchaseWeb,
  restoreWeb,
} from '../lib/revenuecat-web';

/**
 * Free-tier configuration.
 * Free players may only play the Beginner tier, capped at FREE_QUESTION_LIMIT levels.
 */
export const FREE_DIFFICULTY = 'Beginner' as const;
export const FREE_QUESTION_LIMIT = 15;

/** Beginner levels available to free players, in their natural (levelNumber) order. */
export const FREE_LEVEL_IDS: string[] = LEVELS
  .filter((level) => level.difficulty === FREE_DIFFICULTY)
  .slice(0, FREE_QUESTION_LIMIT)
  .map((level) => level.id);

export function isLevelFree(levelId: string): boolean {
  return FREE_LEVEL_IDS.includes(levelId);
}

export function isDifficultyFree(
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
): boolean {
  return difficulty === FREE_DIFFICULTY;
}

interface CustomerInfoLike {
  entitlements: {
    active: Record<string, unknown>;
  };
}

function hasPremiumEntitlement(customerInfo: CustomerInfoLike): boolean {
  return Boolean(customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID]);
}

/**
 * Entitlement provider interface.
 *
 * Single source of truth for whether the current user has unlocked premium
 * content, across three billing paths chosen automatically by runtime platform:
 *
 *  - Native iOS/Android build: RevenueCat over Apple StoreKit / Google Play
 *    Billing via the Capacitor SDK (src/lib/revenuecat.ts).
 *  - Deployed web build with VITE_REVENUECAT_WEB_API_KEY set: RevenueCat Web
 *    Billing over Stripe via the purchases-js SDK (src/lib/revenuecat-web.ts).
 *  - Anything else (Replit preview, web build without a Web Billing key): no
 *    real store to talk to — falls back to the persisted local devSetPremium
 *    override for testing.
 *
 * Known limitation: a purchase on web does not automatically unlock premium in
 * the mobile apps (and vice versa) without a shared user account. See
 * REVENUECAT_SETUP.md.
 */
interface EntitlementState {
  isPremium: boolean;
  isProcessing: boolean;
  lastError: EntitlementErrorReason | null;
  checkStatus: () => Promise<boolean>;
  purchase: () => Promise<boolean>;
  restore: () => Promise<boolean>;
  devSetPremium: (value: boolean) => void;
}

export const useEntitlement = create<EntitlementState>()(
  persist(
    (set, get) => ({
      isPremium: false,
      isProcessing: false,
      lastError: null,

      checkStatus: async () => {
        if (await ensureRevenueCatConfigured()) {
          try {
            const { customerInfo } = await NativePurchases.getCustomerInfo();
            const isPremium = hasPremiumEntitlement(customerInfo);
            set({ isPremium, lastError: null });
            return isPremium;
          } catch (error) {
            console.error('[RevenueCat] Native entitlement check failed.', error);
            // Keep whatever was last persisted rather than locking the user out
            // because of a transient network error.
            return get().isPremium;
          }
        }

        if (await ensureWebBillingConfigured()) {
          const result = await checkStatusWeb();
          if ('error' in result) return get().isPremium;
          set({ isPremium: result.isPremium });
          return result.isPremium;
        }

        // No real store to check against (dev preview, or missing API keys) —
        // trust the persisted local state.
        return get().isPremium;
      },

      purchase: async () => {
        set({ isProcessing: true, lastError: null });

        if (await ensureRevenueCatConfigured()) {
          try {
            const offerings = await NativePurchases.getOfferings();
            const offering = offerings.current;
            const pkg =
              offering?.lifetime ??
              offering?.annual ??
              offering?.availablePackages.find(
                (item) => item.packageType === PACKAGE_TYPE.ANNUAL,
              ) ??
              offering?.availablePackages.find(
                (item) => item.packageType === PACKAGE_TYPE.CUSTOM,
              ) ??
              offering?.availablePackages[0];

            if (!pkg) {
              set({ isProcessing: false, lastError: 'no_offering' });
              return false;
            }

            const { customerInfo } = await NativePurchases.purchasePackage({
              aPackage: pkg,
            });
            const isPremium = hasPremiumEntitlement(customerInfo);
            set({
              isPremium,
              isProcessing: false,
              lastError: isPremium ? null : 'unknown',
            });
            return isPremium;
          } catch (error) {
            set({ isProcessing: false, lastError: toEntitlementErrorReason(error) });
            return false;
          }
        }

        if (await ensureWebBillingConfigured()) {
          const result = await purchaseWeb();
          if ('error' in result) {
            set({ isProcessing: false, lastError: result.error });
            return false;
          }
          set({ isPremium: result.isPremium, isProcessing: false });
          return result.isPremium;
        }

        // Native platform without an API key, or a web build without a Web
        // Billing key: no real store available.
        set({ isProcessing: false, lastError: 'store_unavailable' });
        return false;
      },

      restore: async () => {
        set({ isProcessing: true, lastError: null });

        if (await ensureRevenueCatConfigured()) {
          try {
            const { customerInfo } = await NativePurchases.restorePurchases();
            const isPremium = hasPremiumEntitlement(customerInfo);
            set({
              isPremium,
              isProcessing: false,
              lastError: isPremium ? null : 'no_previous_purchase',
            });
            return isPremium;
          } catch (error) {
            set({ isProcessing: false, lastError: toEntitlementErrorReason(error) });
            return false;
          }
        }

        if (await ensureWebBillingConfigured()) {
          const result = await restoreWeb();
          if ('error' in result) {
            set({ isProcessing: false, lastError: result.error });
            return false;
          }
          set({ isPremium: result.isPremium, isProcessing: false });
          return result.isPremium;
        }

        set({ isProcessing: false, lastError: 'store_unavailable' });
        return false;
      },

      devSetPremium: (value) => set({ isPremium: value, lastError: null }),
    }),
    {
      name: 'bible-game-entitlement',
      partialize: (state) => ({ isPremium: state.isPremium }),
    },
  ),
);
