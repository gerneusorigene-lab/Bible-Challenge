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
  isNativePlatform,
  toEntitlementErrorReason,
  type EntitlementErrorReason,
} from '../lib/revenuecat';
import {
  checkStatusWeb,
  ensureWebBillingConfigured,
  purchaseWeb,
  restoreWeb,
} from '../lib/revenuecat_web';

export const FREE_DIFFICULTY = 'Beginner' as const;
export const FREE_QUESTION_LIMIT = 15;

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
        if (!isNativePlatform()) {
          const configured = await ensureWebBillingConfigured();
          if (!configured) return get().isPremium;

          const result = await checkStatusWeb();

          if ('error' in result) {
            set({ lastError: result.error });
            return get().isPremium;
          }

          set({ isPremium: result.isPremium, lastError: null });
          return result.isPremium;
        }

        const configured = await ensureRevenueCatConfigured();
        if (!configured) return get().isPremium;

        try {
          const { customerInfo } = await NativePurchases.getCustomerInfo();
          const isPremium = hasPremiumEntitlement(customerInfo);
          set({ isPremium, lastError: null });
          return isPremium;
        } catch (error) {
          console.error('[RevenueCat] Native entitlement check failed.', error);
          return get().isPremium;
        }
      },

      purchase: async () => {
        set({ isProcessing: true, lastError: null });

        if (!isNativePlatform()) {
          const configured = await ensureWebBillingConfigured();

          if (!configured) {
            set({ isProcessing: false, lastError: 'store_unavailable' });
            return false;
          }

          const result = await purchaseWeb();

          if ('error' in result) {
            set({ isProcessing: false, lastError: result.error });
            return false;
          }

          set({
            isPremium: result.isPremium,
            isProcessing: false,
            lastError: result.isPremium ? null : 'unknown',
          });
          return result.isPremium;
        }

        const configured = await ensureRevenueCatConfigured();
        if (!configured) {
          set({ isProcessing: false, lastError: 'store_unavailable' });
          return false;
        }

        try {
          const offerings = await NativePurchases.getOfferings();
          const offering = offerings.current;
          const pkg =
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
          set({
            isProcessing: false,
            lastError: toEntitlementErrorReason(error),
          });
          return false;
        }
      },

      restore: async () => {
        set({ isProcessing: true, lastError: null });

        if (!isNativePlatform()) {
          const configured = await ensureWebBillingConfigured();

          if (!configured) {
            set({ isProcessing: false, lastError: 'store_unavailable' });
            return false;
          }

          const result = await restoreWeb();

          if ('error' in result) {
            set({ isProcessing: false, lastError: result.error });
            return false;
          }

          set({
            isPremium: result.isPremium,
            isProcessing: false,
            lastError: result.isPremium ? null : 'no_previous_purchase',
          });
          return result.isPremium;
        }

        const configured = await ensureRevenueCatConfigured();
        if (!configured) {
          set({ isProcessing: false, lastError: 'store_unavailable' });
          return false;
        }

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
          set({
            isProcessing: false,
            lastError: toEntitlementErrorReason(error),
          });
          return false;
        }
      },

      devSetPremium: (value) => set({ isPremium: value, lastError: null }),
    }),
    {
      name: 'bible-game-entitlement',
      partialize: (state) => ({ isPremium: state.isPremium }),
    },
  ),
);
