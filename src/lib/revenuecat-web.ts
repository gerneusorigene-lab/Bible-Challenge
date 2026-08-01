import {
  Purchases,
  ErrorCode,
  LogLevel,
  PackageType,
  PurchasesError,
  type CustomerInfo,
} from '@revenuecat/purchases-js';
import {
  WEB_API_KEY,
  PREMIUM_ENTITLEMENT_ID,
  isNativePlatform,
  getEffectiveWebUserId,
  type EntitlementErrorReason,
} from './revenuecat';

/**
 * RevenueCat Web Billing (Stripe-backed) integration for the browser build.
 *
 * This is the web counterpart to `src/lib/revenuecat.ts` (which drives the
 * native iOS/Android StoreKit/Play Billing path via Capacitor). Native builds
 * never use this module — `ensureWebBillingConfigured()` short-circuits to
 * `false` whenever `isNativePlatform()` is true, so on a packaged app this
 * file has no effect.
 *
 * The customer is identified by an `appUserId` supplied by `getEffectiveWebUserId`
 * from `src/lib/revenuecat.ts`: a Firebase UID when the user is signed in
 * (enabling cross-platform sync), or an anonymous UUID in localStorage otherwise.
 * A web purchase without a shared Firebase account is therefore tied to
 * *this browser* — clearing site data loses the connection to the purchase.
 * See the "Known limitation" section in REVENUECAT_SETUP.md.
 */

/** Whether Web Billing is applicable: not a native build, and a web API key is set. */
export function isWebBillingAvailable(): boolean {
  return !isNativePlatform() && Boolean(WEB_API_KEY);
}

let configurePromise: Promise<boolean> | null = null;

/**
 * Switches the RevenueCat Web SDK to a different user identity.
 *
 * Call this whenever Firebase Auth fires a sign-in or sign-out event so that
 * a user who opened the paywall anonymously and then signs in will have their
 * subscription looked up under the correct Firebase UID rather than the stale
 * anonymous ID that was active at first configuration.
 *
 * Two cases are handled:
 *  - SDK not yet configured: clearing `configurePromise` is enough — the next
 *    `ensureWebBillingConfigured()` call will configure with the correct uid.
 *  - SDK already running (`Purchases.isConfigured() === true`): `changeUser()`
 *    is called in-place so the identity switches immediately without needing a
 *    full reconfiguration (which `ensureWebBillingConfigured` would skip because
 *    it guards with `!Purchases.isConfigured()`).
 *
 * @param uid Firebase UID when signing in, or `null` when signing out (a fresh
 *   anonymous RevenueCat ID is generated for the signed-out session).
 */
export async function switchWebBillingUser(uid: string | null): Promise<void> {
  // Always clear the cached promise so future ensureWebBillingConfigured()
  // calls pick up the new identity rather than the old resolved promise.
  configurePromise = null;

  if (!isWebBillingAvailable()) return;

  if (Purchases.isConfigured()) {
    // The SDK is already running with an old user ID. Switch in-place —
    // ensureWebBillingConfigured() would skip configure() because isConfigured()
    // is true, so we must update the identity directly.
    const newUserId =
      uid ?? Purchases.generateRevenueCatAnonymousAppUserId();
    try {
      await Purchases.getSharedInstance().changeUser(newUserId);
      console.log(
        '[RevenueCat Web] Switched user to',
        uid ? `Firebase UID ${uid}` : 'new anonymous ID',
      );
    } catch (err) {
      console.error('[RevenueCat Web] Failed to switch user identity', err);
    }
  }
  // If not yet configured, the cleared configurePromise is sufficient — the
  // next ensureWebBillingConfigured() will configure with the correct uid.
}

/**
 * Configures the RevenueCat Web Billing SDK exactly once per session. Safe to
 * call repeatedly. Returns false (without throwing) when running natively or
 * when no web API key is configured, so callers can fall back to the local
 * dev override instead of crashing.
 */
export function ensureWebBillingConfigured(): Promise<boolean> {
  if (!isWebBillingAvailable()) return Promise.resolve(false);

  if (!configurePromise) {
    configurePromise = (async () => {
      try {
        if (import.meta.env.DEV) {
          Purchases.setLogLevel(LogLevel.Debug);
        }
        if (!Purchases.isConfigured()) {
          // Use the Firebase-aware user ID when available, fall back to an
          // RC-format anonymous ID when localStorage is unavailable.
          const userId =
            (await getEffectiveWebUserId()) ??
            Purchases.generateRevenueCatAnonymousAppUserId();
          Purchases.configure({ apiKey: WEB_API_KEY, appUserId: userId });
        }
        return true;
      } catch (err) {
        console.error('[RevenueCat Web] Failed to configure SDK', err);
        return false;
      }
    })();
  }

  return configurePromise;
}

function hasPremiumEntitlement(customerInfo: CustomerInfo): boolean {
  const entitlement = customerInfo.entitlements.active[PREMIUM_ENTITLEMENT_ID];
  return Boolean(entitlement && entitlement.isActive);
}

/** Maps a thrown Web Billing error (or unknown error) to the same UI-facing reasons the native path uses. */
export function toWebEntitlementErrorReason(err: unknown): EntitlementErrorReason {
  if (err instanceof PurchasesError) {
    switch (err.errorCode) {
      case ErrorCode.UserCancelledError:
        return 'cancelled';
      case ErrorCode.NetworkError:
        return 'network';
      case ErrorCode.StoreProblemError:
      case ErrorCode.ProductNotAvailableForPurchaseError:
      case ErrorCode.PurchaseNotAllowedError:
        return 'store_unavailable';
      default:
        return 'unknown';
    }
  }
  return 'unknown';
}

/** Re-checks entitlement status against RevenueCat Web Billing (e.g. on app launch, same browser). */
export async function checkStatusWeb(): Promise<{ isPremium: boolean } | { error: EntitlementErrorReason }> {
  try {
    const customerInfo = await Purchases.getSharedInstance().getCustomerInfo();
    return { isPremium: hasPremiumEntitlement(customerInfo) };
  } catch (err) {
    console.error('[RevenueCat Web] checkStatus failed', err);
    return { error: toWebEntitlementErrorReason(err) };
  }
}

/** Runs the Web Billing (Stripe checkout) purchase flow for the premium entitlement. */
export async function purchaseWeb(): Promise<{ isPremium: boolean } | { error: EntitlementErrorReason }> {
  try {
    const purchases = Purchases.getSharedInstance();
    const offerings = await purchases.getOfferings();
    const offering = offerings.current;
    const rcPackage =
      offering?.lifetime ??
      offering?.availablePackages.find((p) => p.packageType === PackageType.Custom) ??
      offering?.availablePackages[0];

    if (!rcPackage) {
      return { error: 'no_offering' };
    }

    const { customerInfo } = await purchases.purchase({ rcPackage });
    return { isPremium: hasPremiumEntitlement(customerInfo) };
  } catch (err) {
    console.error('[RevenueCat Web] purchase failed', err);
    return { error: toWebEntitlementErrorReason(err) };
  }
}

/**
 * Web Billing has no separate "restore" action — there is no store account
 * to re-query. Since entitlement is tied to the user ID persisted in this
 * browser (or Firebase UID when signed in), "restoring" is just re-checking
 * the current customer info. If the browser's storage was cleared and no
 * Firebase account is signed in, the connection to the purchase is lost (see
 * the "Known limitation" section in REVENUECAT_SETUP.md).
 */
export async function restoreWeb(): Promise<{ isPremium: boolean } | { error: EntitlementErrorReason }> {
  const result = await checkStatusWeb();
  if ('error' in result) return result;
  if (!result.isPremium) return { error: 'no_previous_purchase' };
  return result;
}
