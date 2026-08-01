/**
 * Integration tests for the anonymous → sign-in → restore flow in
 * revenuecat-web.ts.
 *
 * Scenario covered: a user opens the paywall in an anonymous session (fresh
 * browser / incognito), buys a subscription, later signs in to their Firebase
 * account, and taps "Restore Purchases". The SDK must switch to the Firebase
 * UID so getCustomerInfo returns the purchase that was tied to that UID.
 *
 * Key assertions:
 *  - switchWebBillingUser() resets configurePromise so the next
 *    ensureWebBillingConfigured() call re-runs the setup lambda.
 *  - When the SDK is already running, switchWebBillingUser() calls
 *    changeUser() with the Firebase UID (or a fresh anonymous ID on sign-out).
 *  - restoreWeb() (which delegates to getCustomerInfo) resolves to
 *    { isPremium: true } when the customer record has the premium entitlement.
 */

import { describe, it, expect, vi, beforeEach, type MockedFunction } from 'vitest';

// ---------------------------------------------------------------------------
// Shared mock objects — mutated per test via beforeEach resets.
// ---------------------------------------------------------------------------

const mockConfigure = vi.fn();
const mockIsConfigured = vi.fn<[], boolean>();
const mockChangeUser = vi.fn<[string], Promise<void>>();
const mockGetCustomerInfo = vi.fn();
const mockGenerateAnonymousId = vi.fn<[], string>();
const mockGetEffectiveWebUserId = vi.fn<[], Promise<string | null>>();
const mockIsNativePlatform = vi.fn<[], boolean>();

// ---------------------------------------------------------------------------
// Static module mocks — registered before any import so they are applied
// to every dynamic import() inside each test.
// ---------------------------------------------------------------------------

vi.mock('@revenuecat/purchases-js', () => ({
  Purchases: {
    configure: mockConfigure,
    isConfigured: mockIsConfigured,
    getSharedInstance: vi.fn(() => ({
      changeUser: mockChangeUser,
      getCustomerInfo: mockGetCustomerInfo,
    })),
    generateRevenueCatAnonymousAppUserId: mockGenerateAnonymousId,
    setLogLevel: vi.fn(),
  },
  // Minimal stubs for the enums/classes imported by revenuecat-web.ts
  ErrorCode: {},
  LogLevel: {},
  PackageType: {},
  PurchasesError: class PurchasesError extends Error {
    errorCode: unknown;
    constructor(code: unknown, msg?: string) {
      super(msg);
      this.errorCode = code;
    }
  },
}));

vi.mock('../revenuecat', () => ({
  WEB_API_KEY: 'test-rcb-key',
  PREMIUM_ENTITLEMENT_ID: 'premium',
  isNativePlatform: mockIsNativePlatform,
  getEffectiveWebUserId: mockGetEffectiveWebUserId,
}));

// ---------------------------------------------------------------------------
// Reset module-level state (configurePromise) and mock state before each test.
// ---------------------------------------------------------------------------

beforeEach(() => {
  vi.resetModules();
  vi.clearAllMocks();

  // Default: web platform, SDK not yet configured
  mockIsNativePlatform.mockReturnValue(false);
  mockIsConfigured.mockReturnValue(false);
  mockGenerateAnonymousId.mockReturnValue('$RCAnonymousID:anon-uuid');
  mockChangeUser.mockResolvedValue(undefined);
  // Default getEffectiveWebUserId: anonymous browser session
  mockGetEffectiveWebUserId.mockResolvedValue('local-anon-uuid');
});

// ---------------------------------------------------------------------------
// Helper: fresh import of the module under test after resetModules().
// ---------------------------------------------------------------------------

async function importModule() {
  return import('../revenuecat-web');
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('ensureWebBillingConfigured', () => {
  it('configures the SDK with the anonymous ID on the first call', async () => {
    const { ensureWebBillingConfigured } = await importModule();

    const result = await ensureWebBillingConfigured();

    expect(result).toBe(true);
    expect(mockConfigure).toHaveBeenCalledOnce();
    expect(mockConfigure).toHaveBeenCalledWith({
      apiKey: 'test-rcb-key',
      appUserId: 'local-anon-uuid',
    });
  });

  it('returns the cached promise and does not call configure() again', async () => {
    const { ensureWebBillingConfigured } = await importModule();

    await ensureWebBillingConfigured();
    await ensureWebBillingConfigured();
    await ensureWebBillingConfigured();

    // configure() and getEffectiveWebUserId() run only once
    expect(mockConfigure).toHaveBeenCalledOnce();
    expect(mockGetEffectiveWebUserId).toHaveBeenCalledOnce();
  });

  it('returns false without throwing when on a native platform', async () => {
    mockIsNativePlatform.mockReturnValue(true);
    const { ensureWebBillingConfigured } = await importModule();

    const result = await ensureWebBillingConfigured();

    expect(result).toBe(false);
    expect(mockConfigure).not.toHaveBeenCalled();
  });
});

describe('switchWebBillingUser', () => {
  it('resets configurePromise so ensureWebBillingConfigured re-runs setup with the new UID', async () => {
    mockGetEffectiveWebUserId
      .mockResolvedValueOnce('local-anon-uuid')   // first configure call
      .mockResolvedValueOnce('firebase-uid-123'); // second configure call after switch

    const { ensureWebBillingConfigured, switchWebBillingUser } = await importModule();

    // --- anonymous session ---
    await ensureWebBillingConfigured();
    expect(mockConfigure).toHaveBeenCalledOnce();
    expect(mockGetEffectiveWebUserId).toHaveBeenCalledOnce();

    // A second call without switching still uses the cached promise.
    await ensureWebBillingConfigured();
    expect(mockGetEffectiveWebUserId).toHaveBeenCalledOnce(); // no second call yet

    // --- user signs in → configurePromise must be cleared ---
    await switchWebBillingUser('firebase-uid-123');

    // --- next ensureWebBillingConfigured re-runs setup with Firebase UID ---
    await ensureWebBillingConfigured();

    // getEffectiveWebUserId was called a second time (new promise, new setup run)
    expect(mockGetEffectiveWebUserId).toHaveBeenCalledTimes(2);
    // configure is called again with the Firebase UID
    expect(mockConfigure).toHaveBeenCalledTimes(2);
    expect(mockConfigure).toHaveBeenLastCalledWith({
      apiKey: 'test-rcb-key',
      appUserId: 'firebase-uid-123',
    });
  });

  it('calls changeUser() with the Firebase UID when the SDK is already running', async () => {
    // Simulate SDK already configured from an earlier anonymous session.
    mockIsConfigured.mockReturnValue(true);

    const { switchWebBillingUser } = await importModule();

    await switchWebBillingUser('firebase-uid-123');

    expect(mockChangeUser).toHaveBeenCalledOnce();
    expect(mockChangeUser).toHaveBeenCalledWith('firebase-uid-123');
  });

  it('calls changeUser() with a fresh anonymous ID on sign-out', async () => {
    mockIsConfigured.mockReturnValue(true);
    mockGenerateAnonymousId.mockReturnValue('$RCAnonymousID:fresh-anon');

    const { switchWebBillingUser } = await importModule();

    await switchWebBillingUser(null);

    expect(mockGenerateAnonymousId).toHaveBeenCalledOnce();
    expect(mockChangeUser).toHaveBeenCalledOnce();
    expect(mockChangeUser).toHaveBeenCalledWith('$RCAnonymousID:fresh-anon');
  });

  it('does not call changeUser() when the SDK has not been configured yet', async () => {
    mockIsConfigured.mockReturnValue(false);

    const { switchWebBillingUser } = await importModule();

    await switchWebBillingUser('firebase-uid-123');

    expect(mockChangeUser).not.toHaveBeenCalled();
  });
});

describe('restoreWeb', () => {
  it('returns isPremium:true when getCustomerInfo reports an active premium entitlement', async () => {
    mockIsConfigured.mockReturnValue(true);
    mockGetCustomerInfo.mockResolvedValue({
      entitlements: {
        active: {
          premium: { isActive: true, identifier: 'premium' },
        },
      },
    });

    const { restoreWeb } = await importModule();
    const result = await restoreWeb();

    expect(result).toEqual({ isPremium: true });
    expect(mockGetCustomerInfo).toHaveBeenCalledOnce();
  });

  it('returns no_previous_purchase when no entitlement is active', async () => {
    mockIsConfigured.mockReturnValue(true);
    mockGetCustomerInfo.mockResolvedValue({
      entitlements: { active: {} },
    });

    const { restoreWeb } = await importModule();
    const result = await restoreWeb();

    expect(result).toEqual({ error: 'no_previous_purchase' });
  });
});

describe('full anonymous → sign-in → restore flow', () => {
  it('finds the subscription after signing in from a fresh browser session', async () => {
    // ------------------------------------------------------------------ setup
    // First visit: anonymous session; SDK not yet configured.
    mockIsConfigured.mockReturnValue(false);
    mockGetEffectiveWebUserId
      .mockResolvedValueOnce('local-anon-uuid')    // anonymous configure
      .mockResolvedValueOnce('firebase-uid-123');  // post-sign-in configure

    const {
      ensureWebBillingConfigured,
      switchWebBillingUser,
      restoreWeb,
    } = await importModule();

    // ------------------------------------------------------------------ step 1: open paywall anonymously
    await ensureWebBillingConfigured();
    expect(mockConfigure).toHaveBeenCalledWith({
      apiKey: 'test-rcb-key',
      appUserId: 'local-anon-uuid',
    });

    // ------------------------------------------------------------------ step 2: user signs in
    // SDK is now running (isConfigured = true) so changeUser() fires in-place.
    mockIsConfigured.mockReturnValue(true);
    mockChangeUser.mockResolvedValue(undefined);

    await switchWebBillingUser('firebase-uid-123');

    // changeUser was called with the Firebase UID
    expect(mockChangeUser).toHaveBeenCalledOnce();
    expect(mockChangeUser).toHaveBeenCalledWith('firebase-uid-123');

    // ------------------------------------------------------------------ step 3: tap Restore Purchases
    // getCustomerInfo is now called against the Firebase UID's record and
    // returns an active premium entitlement.
    mockGetCustomerInfo.mockResolvedValue({
      entitlements: {
        active: {
          premium: { isActive: true, identifier: 'premium' },
        },
      },
    });

    const restoreResult = await restoreWeb();

    // Subscription is found ✓
    expect(restoreResult).toEqual({ isPremium: true });
    expect(mockGetCustomerInfo).toHaveBeenCalledOnce();
  });

  it('does not find the subscription when the SDK is still on the anonymous user', async () => {
    // Regression guard: if switchWebBillingUser is never called (i.e. the fix
    // from Task 51 were absent), getCustomerInfo would look up the anonymous
    // customer record rather than the Firebase UID's record — and the prior
    // web purchase would not be found.
    mockIsConfigured.mockReturnValue(true);
    mockGetCustomerInfo.mockResolvedValue({
      entitlements: { active: {} }, // anonymous customer has no purchase
    });

    const { restoreWeb } = await importModule();
    // Without switchWebBillingUser, restoreWeb checks the current (anonymous) user.
    const result = await restoreWeb();

    expect(result).toEqual({ error: 'no_previous_purchase' });
  });
});
