/**
 * Unit tests for the Firebase error-code → i18n-key mapping in authService.ts.
 *
 * Each function that wraps a Firebase Auth call must translate known error codes
 * into stable i18n keys.  If Firebase renames a code in a future SDK release
 * the mapping silently falls back to the generic key — these tests catch that.
 *
 * Functions covered
 * -----------------
 * signInWithEmail
 *   auth/user-not-found       → "auth_error_invalid_credential"
 *   auth/invalid-credential   → "auth_error_invalid_credential"
 *   auth/wrong-password       → "auth_error_invalid_credential"
 *   auth/invalid-email        → "auth_error_invalid_email"
 *   auth/too-many-requests    → "auth_error_too_many_requests"
 *   unknown Firebase code     → "sign_in_error_generic"
 *   non-Firebase error        → re-thrown unchanged
 *   success                   → returns user object
 *
 * createUserWithEmail
 *   auth/email-already-in-use → "auth_error_email_in_use"
 *   auth/invalid-email        → "auth_error_invalid_email"
 *   auth/weak-password        → "auth_error_weak_password"
 *   unknown Firebase code     → "sign_in_error_generic"
 *   non-Firebase error        → re-thrown unchanged
 *   success                   → returns user object
 *
 * signInWithGoogle
 *   auth/unauthorized-domain      → "auth_error_unauthorized_domain"
 *   auth/popup-closed-by-user     → "auth_error_popup_closed"
 *   auth/cancelled-popup-request  → "auth_error_popup_closed"
 *   unknown Firebase code         → "sign_in_error_generic"
 *   non-Firebase error            → re-thrown unchanged
 *   success                       → returns user object
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FirebaseError } from 'firebase/app';

// ---------------------------------------------------------------------------
// Mock firebase/auth so every Firebase call is fully controlled.
// ---------------------------------------------------------------------------

const mockSignInWithEmailAndPassword = vi.fn();
const mockCreateUserWithEmailAndPassword = vi.fn();
const mockSignInWithPopup = vi.fn();
const mockSendPasswordResetEmail = vi.fn();

vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
  createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword,
  signInWithPopup: mockSignInWithPopup,
  sendPasswordResetEmail: mockSendPasswordResetEmail,
  GoogleAuthProvider: vi.fn().mockImplementation(() => ({})),
  signOut: vi.fn(),
}));

// Provide a fake auth object so requireAuth() returns truthy.
vi.mock('../firebase', () => ({
  auth: { app: {} },
}));

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

function makeFirebaseError(code: string): FirebaseError {
  return new FirebaseError(code, `Firebase: ${code}`);
}

const fakeUser = { uid: 'test-uid', email: 'user@example.com' };

// ---------------------------------------------------------------------------
// signInWithEmail
// ---------------------------------------------------------------------------

describe('signInWithEmail()', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it.each([
    ['auth/user-not-found', 'auth_error_invalid_credential'],
    ['auth/invalid-credential', 'auth_error_invalid_credential'],
    ['auth/wrong-password', 'auth_error_invalid_credential'],
  ])(
    'maps %s → "%s"',
    async (code, expectedKey) => {
      mockSignInWithEmailAndPassword.mockRejectedValueOnce(makeFirebaseError(code));
      const { signInWithEmail } = await import('../authService');
      await expect(signInWithEmail('a@b.com', 'pw')).rejects.toThrow(expectedKey);
    },
  );

  it('maps auth/invalid-email → "auth_error_invalid_email"', async () => {
    mockSignInWithEmailAndPassword.mockRejectedValueOnce(
      makeFirebaseError('auth/invalid-email'),
    );
    const { signInWithEmail } = await import('../authService');
    await expect(signInWithEmail('bad-email', 'pw')).rejects.toThrow(
      'auth_error_invalid_email',
    );
  });

  it('maps auth/too-many-requests → "auth_error_too_many_requests"', async () => {
    mockSignInWithEmailAndPassword.mockRejectedValueOnce(
      makeFirebaseError('auth/too-many-requests'),
    );
    const { signInWithEmail } = await import('../authService');
    await expect(signInWithEmail('a@b.com', 'pw')).rejects.toThrow(
      'auth_error_too_many_requests',
    );
  });

  it('maps an unrecognised Firebase code → "sign_in_error_generic"', async () => {
    mockSignInWithEmailAndPassword.mockRejectedValueOnce(
      makeFirebaseError('auth/some-future-code'),
    );
    const { signInWithEmail } = await import('../authService');
    await expect(signInWithEmail('a@b.com', 'pw')).rejects.toThrow(
      'sign_in_error_generic',
    );
  });

  it('re-throws non-Firebase errors unchanged', async () => {
    const networkError = new Error('network failure');
    mockSignInWithEmailAndPassword.mockRejectedValueOnce(networkError);
    const { signInWithEmail } = await import('../authService');
    await expect(signInWithEmail('a@b.com', 'pw')).rejects.toThrow('network failure');
  });

  it('returns the user object on success', async () => {
    mockSignInWithEmailAndPassword.mockResolvedValueOnce({ user: fakeUser });
    const { signInWithEmail } = await import('../authService');
    await expect(signInWithEmail('a@b.com', 'pw')).resolves.toEqual(fakeUser);
  });
});

// ---------------------------------------------------------------------------
// createUserWithEmail
// ---------------------------------------------------------------------------

describe('createUserWithEmail()', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('maps auth/email-already-in-use → "auth_error_email_in_use"', async () => {
    mockCreateUserWithEmailAndPassword.mockRejectedValueOnce(
      makeFirebaseError('auth/email-already-in-use'),
    );
    const { createUserWithEmail } = await import('../authService');
    await expect(createUserWithEmail('a@b.com', 'pw')).rejects.toThrow(
      'auth_error_email_in_use',
    );
  });

  it('maps auth/invalid-email → "auth_error_invalid_email"', async () => {
    mockCreateUserWithEmailAndPassword.mockRejectedValueOnce(
      makeFirebaseError('auth/invalid-email'),
    );
    const { createUserWithEmail } = await import('../authService');
    await expect(createUserWithEmail('bad-email', 'pw')).rejects.toThrow(
      'auth_error_invalid_email',
    );
  });

  it('maps auth/weak-password → "auth_error_weak_password"', async () => {
    mockCreateUserWithEmailAndPassword.mockRejectedValueOnce(
      makeFirebaseError('auth/weak-password'),
    );
    const { createUserWithEmail } = await import('../authService');
    await expect(createUserWithEmail('a@b.com', '123')).rejects.toThrow(
      'auth_error_weak_password',
    );
  });

  it('maps an unrecognised Firebase code → "sign_in_error_generic"', async () => {
    mockCreateUserWithEmailAndPassword.mockRejectedValueOnce(
      makeFirebaseError('auth/some-future-code'),
    );
    const { createUserWithEmail } = await import('../authService');
    await expect(createUserWithEmail('a@b.com', 'pw')).rejects.toThrow(
      'sign_in_error_generic',
    );
  });

  it('re-throws non-Firebase errors unchanged', async () => {
    const originalError = new Error('unexpected failure');
    mockCreateUserWithEmailAndPassword.mockRejectedValueOnce(originalError);
    const { createUserWithEmail } = await import('../authService');
    await expect(createUserWithEmail('a@b.com', 'pw')).rejects.toThrow(
      'unexpected failure',
    );
  });

  it('returns the user object on success', async () => {
    mockCreateUserWithEmailAndPassword.mockResolvedValueOnce({ user: fakeUser });
    const { createUserWithEmail } = await import('../authService');
    await expect(createUserWithEmail('a@b.com', 'StrongPass1!')).resolves.toEqual(
      fakeUser,
    );
  });
});

// ---------------------------------------------------------------------------
// signInWithGoogle
// ---------------------------------------------------------------------------

describe('signInWithGoogle()', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('maps auth/unauthorized-domain → "auth_error_unauthorized_domain"', async () => {
    mockSignInWithPopup.mockRejectedValueOnce(
      makeFirebaseError('auth/unauthorized-domain'),
    );
    const { signInWithGoogle } = await import('../authService');
    await expect(signInWithGoogle()).rejects.toThrow('auth_error_unauthorized_domain');
  });

  it('maps auth/popup-closed-by-user → "auth_error_popup_closed"', async () => {
    mockSignInWithPopup.mockRejectedValueOnce(
      makeFirebaseError('auth/popup-closed-by-user'),
    );
    const { signInWithGoogle } = await import('../authService');
    await expect(signInWithGoogle()).rejects.toThrow('auth_error_popup_closed');
  });

  it('maps auth/cancelled-popup-request → "auth_error_popup_closed"', async () => {
    mockSignInWithPopup.mockRejectedValueOnce(
      makeFirebaseError('auth/cancelled-popup-request'),
    );
    const { signInWithGoogle } = await import('../authService');
    await expect(signInWithGoogle()).rejects.toThrow('auth_error_popup_closed');
  });

  it('maps an unrecognised Firebase code → "sign_in_error_generic"', async () => {
    mockSignInWithPopup.mockRejectedValueOnce(
      makeFirebaseError('auth/some-future-code'),
    );
    const { signInWithGoogle } = await import('../authService');
    await expect(signInWithGoogle()).rejects.toThrow('sign_in_error_generic');
  });

  it('re-throws non-Firebase errors unchanged', async () => {
    const originalError = new Error('popup blocked by browser');
    mockSignInWithPopup.mockRejectedValueOnce(originalError);
    const { signInWithGoogle } = await import('../authService');
    await expect(signInWithGoogle()).rejects.toThrow('popup blocked by browser');
  });

  it('returns the user object on success', async () => {
    mockSignInWithPopup.mockResolvedValueOnce({ user: fakeUser });
    const { signInWithGoogle } = await import('../authService');
    await expect(signInWithGoogle()).resolves.toEqual(fakeUser);
  });
});
