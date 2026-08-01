/**
 * Unit tests for sendPasswordReset() in authService.ts.
 *
 * Verifies that each Firebase error code is surfaced as a distinct,
 * accurate i18n key so the ForgotPassword UI can display the right copy.
 *
 * Covered cases:
 *  - auth/user-not-found  → "reset_email_no_account"
 *  - auth/invalid-email   → "auth_error_invalid_email"
 *  - auth/too-many-requests → "auth_error_too_many_requests"
 *  - unknown Firebase code → generic sign-in error
 *  - non-Firebase error   → re-thrown as-is
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FirebaseError } from 'firebase/app';

// ---------------------------------------------------------------------------
// Mock firebase/auth so sendPasswordResetEmail is fully controlled.
// ---------------------------------------------------------------------------

const mockSendPasswordResetEmail = vi.fn<[unknown, string], Promise<void>>();

vi.mock('firebase/auth', () => ({
  sendPasswordResetEmail: mockSendPasswordResetEmail,
  // Other exports used by authService at import time:
  GoogleAuthProvider: vi.fn(),
  signInWithPopup: vi.fn(),
  signOut: vi.fn(),
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
}));

// Provide a fake auth object so requireAuth() returns truthy.
vi.mock('../firebase', () => ({
  auth: { /* stub */ app: {} },
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeFirebaseError(code: string): FirebaseError {
  const err = new FirebaseError(code, `Firebase: ${code}`);
  return err;
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('sendPasswordReset()', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('throws "reset_email_no_account" when Firebase says the user does not exist', async () => {
    mockSendPasswordResetEmail.mockRejectedValueOnce(
      makeFirebaseError('auth/user-not-found'),
    );

    const { sendPasswordReset } = await import('../authService');

    await expect(sendPasswordReset('ghost@example.com')).rejects.toThrow(
      'reset_email_no_account',
    );
  });

  it('throws "auth_error_invalid_email" when the email address is malformed', async () => {
    mockSendPasswordResetEmail.mockRejectedValueOnce(
      makeFirebaseError('auth/invalid-email'),
    );

    const { sendPasswordReset } = await import('../authService');

    await expect(sendPasswordReset('not-an-email')).rejects.toThrow(
      'auth_error_invalid_email',
    );
  });

  it('throws "auth_error_too_many_requests" when the rate limit is hit', async () => {
    mockSendPasswordResetEmail.mockRejectedValueOnce(
      makeFirebaseError('auth/too-many-requests'),
    );

    const { sendPasswordReset } = await import('../authService');

    await expect(sendPasswordReset('user@example.com')).rejects.toThrow(
      'auth_error_too_many_requests',
    );
  });

  it('throws the generic sign-in error key for an unrecognised Firebase code', async () => {
    mockSendPasswordResetEmail.mockRejectedValueOnce(
      makeFirebaseError('auth/some-unknown-code'),
    );

    const { sendPasswordReset } = await import('../authService');

    await expect(sendPasswordReset('user@example.com')).rejects.toThrow(
      'sign_in_error_generic',
    );
  });

  it('re-throws non-Firebase errors unchanged', async () => {
    const original = new Error('network failure');
    mockSendPasswordResetEmail.mockRejectedValueOnce(original);

    const { sendPasswordReset } = await import('../authService');

    await expect(sendPasswordReset('user@example.com')).rejects.toThrow(
      'network failure',
    );
  });

  it('resolves without error on success', async () => {
    mockSendPasswordResetEmail.mockResolvedValueOnce(undefined);

    const { sendPasswordReset } = await import('../authService');

    await expect(sendPasswordReset('user@example.com')).resolves.toBeUndefined();
  });
});
