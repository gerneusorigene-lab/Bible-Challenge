import { Capacitor } from '@capacitor/core';
import {
  LOG_LEVEL,
  PURCHASES_ERROR_CODE,
  Purchases,
  type PurchasesError,
} from '@revenuecat/purchases-capacitor';

/**
 * RevenueCat configuration for Bible Challenge.
 *
 * Native (Android/iOS): uses the Capacitor SDK with the platform SDK key.
 * Web: uses the RevenueCat REST API with the Web Billing public key to verify
 *   entitlements after a hosted-checkout purchase.
 */

export const PREMIUM_ENTITLEMENT_ID = 'premium';

const IOS_API_KEY = (import.meta.env.VITE_REVENUECAT_IOS_API_KEY as string | undefined)?.trim();
const ANDROID_API_KEY = (import.meta.env.VITE_REVENUECAT_ANDROID_API_KEY as string | undefined)?.trim();

/** RevenueCat Web Billing public key (rcb_ prefix). */
export const WEB_API_KEY = (import.meta.env.VITE_REVENUECAT_WEB_API_KEY as string | undefined)?.trim() ?? '';

const WEB_USER_ID_STORAGE_KEY = 'bible-challenge-revenuecat-user-id';

export function isNativePlatform(): boolean {
  return Capacitor.isNativePlatform();
}

function getApiKeyForCurrentPlatform(): string | undefined {
  const platform = Capacitor.getPlatform();
  if (platform === 'ios') return IOS_API_KEY;
  if (platform === 'android') return ANDROID_API_KEY;
  return undefined;
}

function createUuid(): string {
  if (typeof globalThis.crypto?.randomUUID === 'function') {
    return globalThis.crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

/** Returns the anonymous UUID stored in localStorage for this browser install. */
function getAnonymousWebUserId(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const existing = window.localStorage.getItem(WEB_USER_ID_STORAGE_KEY)?.trim();
    if (existing) return existing;
    const id = createUuid();
    window.localStorage.setItem(WEB_USER_ID_STORAGE_KEY, id);
    return id;
  } catch {
    return null;
  }
}

/**
 * Returns the best available user ID for RevenueCat on web:
 *   - Firebase UID when the user is signed in (enables cross-platform sync
 *     because the same UID is used on native via Purchases.logIn)
 *   - Anonymous UUID in localStorage when not signed in
 */
export async function getEffectiveWebUserId(): Promise<string | null> {
  try {
    const { auth } = await import('./firebase');
    const uid = auth?.currentUser?.uid;
    if (uid) return uid;
  } catch {
    // firebase not available in this environment — fall through
  }
  return getAnonymousWebUserId();
}

/**
 * Returns a stable user ID for RevenueCat's hosted Web Purchase Link.
 * On native, returns the SDK-assigned App User ID.
 * On web, returns the Firebase UID (if signed in) or the localStorage UUID.
 */
export async function getRevenueCatAppUserId(): Promise<string | null> {
  if (isNativePlatform()) {
    const configured = await ensureRevenueCatConfigured();
    if (!configured) return null;
    try {
      const { appUserID } = await Purchases.getAppUserID();
      return appUserID.trim() || null;
    } catch (error) {
      console.error('[RevenueCat] Failed to retrieve App User ID', error);
      return null;
    }
  }
  return getEffectiveWebUserId();
}

let configurePromise: Promise<boolean> | null = null;

/**
 * Configures the native RevenueCat SDK exactly once per app session.
 * Returns false on web (no native store available).
 */
export function ensureRevenueCatConfigured(): Promise<boolean> {
  if (!isNativePlatform()) return Promise.resolve(false);

  if (!configurePromise) {
    configurePromise = (async () => {
      const apiKey = getApiKeyForCurrentPlatform();
      if (!apiKey) {
        console.warn(
          `[RevenueCat] No API key for platform "${Capacitor.getPlatform()}". ` +
            'Set VITE_REVENUECAT_ANDROID_API_KEY / VITE_REVENUECAT_IOS_API_KEY.',
        );
        return false;
      }
      try {
        if (import.meta.env.DEV) await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
        await Purchases.configure({ apiKey });
        return true;
      } catch (error) {
        console.error('[RevenueCat] Failed to configure SDK', error);
        return false;
      }
    })().then((ok) => {
      if (!ok) configurePromise = null;
      return ok;
    });
  }
  return configurePromise;
}

// ─── Web entitlement client ────────────────────────────────────────────────────

interface CustomerInfoLike {
  entitlements: { active: Record<string, unknown> };
}

/** Milliseconds before a RevenueCat REST call is aborted. */
const WEB_FETCH_TIMEOUT_MS = 5_000;

/**
 * Calls the RevenueCat REST API to check the current user's entitlements.
 * Returns a CustomerInfoLike shaped the same way as the native SDK so the
 * entitlement store can use a single code path.
 *
 * Aborts automatically after WEB_FETCH_TIMEOUT_MS (5 s) so a slow or
 * unreachable RevenueCat endpoint never hangs the app.
 */
async function fetchWebCustomerInfo(): Promise<CustomerInfoLike> {
  const userId = await getEffectiveWebUserId();
  if (!userId) throw new Error('[RevenueCat] No web user ID available.');

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), WEB_FETCH_TIMEOUT_MS);

  let res: Response;
  try {
    res = await fetch(
      `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(userId)}`,
      {
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${WEB_API_KEY}`,
          'Content-Type': 'application/json',
          'X-Platform': 'stripe',
        },
      },
    );
  } catch (err) {
    // AbortError means the request timed out; re-throw with a clearer message.
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new Error('[RevenueCat] REST API request timed out after 5 s.');
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }

  if (!res.ok) {
    throw new Error(`[RevenueCat] REST API error ${res.status}: ${await res.text()}`);
  }

  const data = (await res.json()) as {
    subscriber?: {
      entitlements?: Record<string, { expires_date: string | null }>;
    };
  };

  const allEntitlements = data.subscriber?.entitlements ?? {};
  const now = Date.now();
  const active: Record<string, unknown> = {};

  for (const [key, ent] of Object.entries(allEntitlements)) {
    const isActive = !ent.expires_date || new Date(ent.expires_date).getTime() > now;
    if (isActive) active[key] = ent;
  }

  return { entitlements: { active } };
}

/**
 * Returns a web entitlement client if VITE_REVENUECAT_WEB_API_KEY is set,
 * or null if the key is missing (entitlement store falls back to local state).
 */
export function getRevenueCatWebPurchases(): { getCustomerInfo: () => Promise<CustomerInfoLike> } | null {
  if (!WEB_API_KEY) return null;
  return { getCustomerInfo: fetchWebCustomerInfo };
}

// ─── Error mapping ─────────────────────────────────────────────────────────────

export type EntitlementErrorReason =
  | 'cancelled'
  | 'store_unavailable'
  | 'network'
  | 'no_offering'
  | 'no_previous_purchase'
  | 'unknown';

export function isPurchasesError(error: unknown): error is PurchasesError {
  return typeof error === 'object' && error !== null && 'code' in error;
}

export function toEntitlementErrorReason(error: unknown): EntitlementErrorReason {
  if (isPurchasesError(error)) {
    switch (error.code) {
      case PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR: return 'cancelled';
      case PURCHASES_ERROR_CODE.NETWORK_ERROR: return 'network';
      case PURCHASES_ERROR_CODE.STORE_PROBLEM_ERROR:
      case PURCHASES_ERROR_CODE.PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR:
      case PURCHASES_ERROR_CODE.PURCHASE_NOT_ALLOWED_ERROR: return 'store_unavailable';
      default: return 'unknown';
    }
  }
  return 'unknown';
}
