import { Capacitor } from '@capacitor/core';
import {
  Purchases as NativePurchases,
  LOG_LEVEL,
  PURCHASES_ERROR_CODE,
  type PurchasesError,
} from '@revenuecat/purchases-capacitor';
import { Purchases as WebPurchases } from '@revenuecat/purchases-js';

/** RevenueCat entitlement that unlocks premium content. */
export const PREMIUM_ENTITLEMENT_ID = 'premium';

const IOS_API_KEY = import.meta.env.VITE_REVENUECAT_IOS_API_KEY?.trim() as
  | string
  | undefined;
const ANDROID_API_KEY = import.meta.env.VITE_REVENUECAT_ANDROID_API_KEY?.trim() as
  | string
  | undefined;
const WEB_API_KEY = import.meta.env.VITE_REVENUECAT_WEB_API_KEY?.trim() as
  | string
  | undefined;

const WEB_APP_USER_ID_STORAGE_KEY =
  'bible-challenge-revenuecat-web-user-id';

export function isNativePlatform(): boolean {
  return Capacitor.isNativePlatform();
}

function getNativeApiKey(): string | undefined {
  switch (Capacitor.getPlatform()) {
    case 'ios':
      return IOS_API_KEY;
    case 'android':
      return ANDROID_API_KEY;
    default:
      return undefined;
  }
}

let nativeConfigurePromise: Promise<boolean> | null = null;

/** Configures the native RevenueCat SDK once per app session. */
export function ensureRevenueCatConfigured(): Promise<boolean> {
  if (!isNativePlatform()) {
    return Promise.resolve(false);
  }

  if (!nativeConfigurePromise) {
    nativeConfigurePromise = (async () => {
      const apiKey = getNativeApiKey();

      if (!apiKey) {
        console.warn(
          `[RevenueCat] Missing API key for ${Capacitor.getPlatform()}.`,
        );
        return false;
      }

      try {
        if (import.meta.env.DEV) {
          await NativePurchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
        }

        await NativePurchases.configure({ apiKey });
        return true;
      } catch (error) {
        console.error(
          '[RevenueCat] Native SDK configuration failed.',
          error,
        );
        return false;
      }
    })().then((configured) => {
      if (!configured) {
        nativeConfigurePromise = null;
      }

      return configured;
    });
  }

  return nativeConfigurePromise;
}

/**
 * Returns a stable RevenueCat App User ID for this browser/PWA installation.
 * The same ID is used by the hosted purchase link and purchases-js.
 */
export function getOrCreateWebAppUserId(): string {
  if (typeof window === 'undefined') {
    throw new Error('Web App User ID requires a browser environment.');
  }

  const existing = window.localStorage.getItem(
    WEB_APP_USER_ID_STORAGE_KEY,
  );

  if (existing) {
    return existing;
  }

  const generated =
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `web-${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random()
          .toString(36)
          .slice(2)}`;

  window.localStorage.setItem(
    WEB_APP_USER_ID_STORAGE_KEY,
    generated,
  );

  return generated;
}

/** Returns the RevenueCat App User ID for the current platform. */
export async function getRevenueCatAppUserId(): Promise<string | null> {
  if (!isNativePlatform()) {
    try {
      return getOrCreateWebAppUserId();
    } catch (error) {
      console.error(
        '[RevenueCat] Could not create web App User ID.',
        error,
      );
      return null;
    }
  }

  const configured = await ensureRevenueCatConfigured();
  if (!configured) {
    return null;
  }

  try {
    const { appUserID } = await NativePurchases.getAppUserID();
    return appUserID || null;
  } catch (error) {
    console.error(
      '[RevenueCat] Could not retrieve native App User ID.',
      error,
    );
    return null;
  }
}

let webPurchases: WebPurchases | null = null;

/**
 * Configures and returns purchases-js for the same web customer used by the
 * hosted RevenueCat purchase link.
 */
export function getRevenueCatWebPurchases(): WebPurchases | null {
  if (isNativePlatform()) {
    return null;
  }

  if (webPurchases) {
    return webPurchases;
  }

  if (!WEB_API_KEY) {
    console.error(
      '[RevenueCat] VITE_REVENUECAT_WEB_API_KEY is missing.',
    );
    return null;
  }

  try {
    webPurchases = WebPurchases.configure({
      apiKey: WEB_API_KEY,
      appUserId: getOrCreateWebAppUserId(),
    });

    return webPurchases;
  } catch (error) {
    console.error(
      '[RevenueCat] Web SDK configuration failed.',
      error,
    );
    return null;
  }
}

export type EntitlementErrorReason =
  | 'cancelled'
  | 'store_unavailable'
  | 'network'
  | 'no_offering'
  | 'no_previous_purchase'
  | 'unknown';

export function isPurchasesError(
  error: unknown,
): error is PurchasesError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error
  );
}

export function toEntitlementErrorReason(
  error: unknown,
): EntitlementErrorReason {
  if (isPurchasesError(error)) {
    switch (error.code) {
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
