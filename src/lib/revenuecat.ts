import { Capacitor } from '@capacitor/core';
import { Purchases, LOG_LEVEL, PURCHASES_ERROR_CODE, type PurchasesError } from '@revenuecat/purchases-capacitor';

/**
 * RevenueCat configuration for the "Three Truths and One Lie" app.
 *
 * Real store billing (App Store / Play Store) only exists inside a packaged
 * native app built via Capacitor — it never runs in the Replit web preview.
 * On web (including this preview), `isNativePlatform()` is false and the
 * entitlement store falls back to the local dev-only override instead of
 * calling any of the functions below.
 *
 * API keys are RevenueCat *public* SDK keys (safe to ship in a client build,
 * unlike secret keys) and are read from Vite env vars so they are never
 * hardcoded in source. See artifacts/bible-game/REVENUECAT_SETUP.md for how
 * to obtain and configure them.
 */

/** The RevenueCat entitlement identifier that unlocks premium content. */
export const PREMIUM_ENTITLEMENT_ID = 'premium';

const IOS_API_KEY = import.meta.env.VITE_REVENUECAT_IOS_API_KEY as string | undefined;
const ANDROID_API_KEY = import.meta.env.VITE_REVENUECAT_ANDROID_API_KEY as string | undefined;

export function isNativePlatform(): boolean {
  return Capacitor.isNativePlatform();
}

function getApiKeyForCurrentPlatform(): string | undefined {
  const platform = Capacitor.getPlatform();
  if (platform === 'ios') return IOS_API_KEY;
  if (platform === 'android') return ANDROID_API_KEY;
  return undefined;
}

let configurePromise: Promise<boolean> | null = null;

/**
 * Configures the RevenueCat SDK exactly once per app session. Safe to call
 * repeatedly — subsequent calls reuse the same in-flight/completed promise.
 * Returns false (without throwing) when not on a native platform or when no
 * API key is configured for the current platform, so callers can fall back
 * to the dev override instead of crashing.
 */
export function ensureRevenueCatConfigured(): Promise<boolean> {
  if (!isNativePlatform()) return Promise.resolve(false);

  if (!configurePromise) {
    configurePromise = (async () => {
      const apiKey = getApiKeyForCurrentPlatform();
      if (!apiKey) {
        console.warn(
          `[RevenueCat] No API key configured for platform "${Capacitor.getPlatform()}". ` +
            'Set VITE_REVENUECAT_IOS_API_KEY / VITE_REVENUECAT_ANDROID_API_KEY. ' +
            'See REVENUECAT_SETUP.md.'
        );
        return false;
      }

      try {
        if (import.meta.env.DEV) {
          await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
        }

        await Purchases.configure({ apiKey });
        return true;
      } catch (err) {
        console.error('[RevenueCat] Failed to configure SDK', err);
        return false;
      }
    })().then((configured) => {
      // Keep the successful promise for the rest of the session.
      // Clear failed attempts so a later purchase action can retry.
      if (!configured) {
        configurePromise = null;
      }

      return configured;
    });
  }

  return configurePromise;
}

/** Discriminated result reasons surfaced to the UI for bilingual messaging. */
export type EntitlementErrorReason =
  | 'cancelled'
  | 'store_unavailable'
  | 'network'
  | 'no_offering'
  | 'no_previous_purchase'
  | 'unknown';

export function isPurchasesError(err: unknown): err is PurchasesError {
  return typeof err === 'object' && err !== null && 'code' in err;
}

/** Maps a thrown RevenueCat error (or unknown error) to a UI-facing reason. */
export function toEntitlementErrorReason(err: unknown): EntitlementErrorReason {
  if (isPurchasesError(err)) {
    switch (err.code) {
      case PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR:
        return 'cancelled';
      case PURCHASES_ERROR_CODE.NETWORK_ERROR:
        return 'network';
      case PURCHASES_ERROR_CODE.STORE_PROBLEM_ERROR:
      case PURCHASES_ERROR_CODE.PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR:
      case PURCHASES_ERROR_CODE.PURCHASE_NOT_ALLOWED_ERROR:
        return 'store_unavailable';
      default:
        return 'unknown';
    }
  }
  return 'unknown';
}
