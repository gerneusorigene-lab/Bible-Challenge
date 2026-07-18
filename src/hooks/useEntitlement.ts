import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Purchases, PACKAGE_TYPE } from '@revenuecat/purchases-capacitor';
import { LEVELS } from '../data/questions';
import {
  PREMIUM_ENTITLEMENT_ID,
  ensureRevenueCatConfigured,
  isNativePlatform,
  toEntitlementErrorReason,
  type EntitlementErrorReason,
} from '../lib/revenuecat';

/**
 * Free-tier configuration.
 * Free players may only play the Beginner tier, capped at FREE_QUESTION_LIMIT levels.
 */
export const FREE_DIFFICULTY = 'Beginner' as const;
export const FREE_QUESTION_LIMIT = 15;

/** Beginner levels available to free players, in their natural (levelNumber) order. */
export const FREE_LEVEL_IDS: string[] = LEVELS
  .filter((l) => l.difficulty === FREE_DIFFICULTY)
  .slice(0, FREE_QUESTION_LIMIT)
  .map((l) => l.id);

export function isLevelFree(levelId: string): boolean {
  return FREE_LEVEL_IDS.includes(levelId);
}

export function isDifficultyFree(difficulty: 'Beginner' | 'Intermediate' | 'Advanced'): boolean {
  return difficulty === FREE_DIFFICULTY;
}

/**
 * Entitlement provider interface.
 *
 * This is the single source of truth for whether the current user has unlocked
 * premium content. On a packaged iOS/Android build, `purchase` and `restore`
 * are backed by RevenueCat (see `src/lib/revenuecat.ts`), which unifies Apple
 * StoreKit and Google Play Billing behind the `premium` entitlement. In the web
 * preview (not a native platform), there is no store to talk to, so these fall
 * back to the persisted local `devSetPremium` override for UI testing.
 */
interface EntitlementState {
  isPremium: boolean;
  isProcessing: boolean;
  /** Machine-readable reason for the last failure, for bilingual UI messaging. */
  lastError: EntitlementErrorReason | null;

  /** Re-check entitlement status (e.g. on app launch). */
  checkStatus: () => Promise<boolean>;
  /** Attempt to purchase premium via the native store (RevenueCat). */
  purchase: () => Promise<boolean>;
  /** Attempt to restore a previous purchase via the native store (RevenueCat). */
  restore: () => Promise<boolean>;
  /** Developer-only: force premium on/off for testing. Never shown to end users in production. */
  devSetPremium: (value: boolean) => void;
}

/** Reads whether the `premium` entitlement is active from a RevenueCat CustomerInfo-shaped object. */
function hasPremiumEntitlement(customerInfo: { entitlements: { active: Record<string, unknown> } }): boolean {
  return Boolean(customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID]);
}

export const useEntitlement = create<EntitlementState>()(
  persist(
    (set, get) => ({
      isPremium: false,
      isProcessing: false,
      lastError: null,

      checkStatus: async () => {
        const configured = await ensureRevenueCatConfigured();
        if (!configured) {
          // No native store to check against (web preview, or missing API key) —
          // trust the persisted local state (set by a real purchase/restore on a
          // prior native run, or by the dev override).
          return get().isPremium;
        }
        try {
          const { customerInfo } = await Purchases.getCustomerInfo();
          const isPremium = hasPremiumEntitlement(customerInfo);
          set({ isPremium });
          return isPremium;
        } catch (err) {
          console.error('[RevenueCat] checkStatus failed', err);
          // Keep whatever was last persisted rather than locking the user out
          // because of a transient network error.
          return get().isPremium;
        }
      },

      purchase: async () => {
        set({ isProcessing: true, lastError: null });

        const configured = await ensureRevenueCatConfigured();
        if (!configured) {
          if (isNativePlatform()) {
            // Native platform but RevenueCat isn't configured (missing API key).
            set({ isProcessing: false, lastError: 'store_unavailable' });
            return false;
          }
          // Web preview: no real store available. Testers should use the dev
          // toggle instead; report this clearly rather than silently succeeding.
          set({ isProcessing: false, lastError: 'store_unavailable' });
          return false;
        }

        try {
          const offerings = await Purchases.getOfferings();
          const offering = offerings.current;
          const pkg =
            offering?.lifetime ??
            offering?.availablePackages.find((p) => p.packageType === PACKAGE_TYPE.CUSTOM) ??
            offering?.availablePackages[0];

          if (!pkg) {
            set({ isProcessing: false, lastError: 'no_offering' });
            return false;
          }

          const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg });
          const isPremium = hasPremiumEntitlement(customerInfo);
          set({ isPremium, isProcessing: false });
          return isPremium;
        } catch (err) {
          set({ isProcessing: false, lastError: toEntitlementErrorReason(err) });
          return false;
        }
      },

      restore: async () => {
        set({ isProcessing: true, lastError: null });

        const configured = await ensureRevenueCatConfigured();
        if (!configured) {
          set({ isProcessing: false, lastError: 'store_unavailable' });
          return false;
        }

        try {
          const { customerInfo } = await Purchases.restorePurchases();
          const isPremium = hasPremiumEntitlement(customerInfo);
          set({ isPremium, isProcessing: false, lastError: isPremium ? null : 'no_previous_purchase' });
          return isPremium;
        } catch (err) {
          set({ isProcessing: false, lastError: toEntitlementErrorReason(err) });
          return false;
        }
      },

      devSetPremium: (value) => set({ isPremium: value, lastError: null }),
    }),
    {
      name: 'bible-game-entitlement',
      partialize: (state) => ({ isPremium: state.isPremium }),
    }
  )
);
