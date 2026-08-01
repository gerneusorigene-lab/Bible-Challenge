/**
 * Integration tests for the ForgotPassword page.
 *
 * Tests the full UI interaction: entering an email, submitting the form, and
 * verifying that the correct message (success or error) is rendered.
 *
 * Covered cases:
 *  - Successful send → shows confirmation copy
 *  - reset_email_no_account error → shows "no account" message
 *  - auth_error_invalid_email error → shows "invalid email" message
 *  - auth_error_too_many_requests error → shows rate-limit message
 *  - Unknown error key → falls back to generic error message
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup, within } from '@testing-library/react';
import { Router } from 'wouter';
import { LanguageProvider } from '@/hooks/useLanguage';
import ForgotPassword from '../ForgotPassword';

// ---------------------------------------------------------------------------
// Mock authService — all tests control sendPasswordReset directly.
// ---------------------------------------------------------------------------

const mockSendPasswordReset = vi.fn<(email: string) => Promise<void>>();

vi.mock('@/lib/authService', () => ({
  sendPasswordReset: (...args: [string]) => mockSendPasswordReset(...args),
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function renderPage() {
  return render(
    <LanguageProvider>
      <Router>
        <ForgotPassword />
      </Router>
    </LanguageProvider>,
  );
}

async function submitForm(email: string) {
  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: email },
  });
  fireEvent.click(screen.getByRole('button', { name: /send reset link/i }));
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('ForgotPassword page', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('shows the confirmation message when the reset email is sent successfully', async () => {
    mockSendPasswordReset.mockResolvedValueOnce(undefined);
    const { container } = renderPage();
    const view = within(container);

    fireEvent.change(view.getByPlaceholderText(/email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.click(view.getByRole('button', { name: /send reset link/i }));

    await waitFor(() => {
      expect(view.getByText(/check your inbox/i)).toBeInTheDocument();
    });
    // The submitted address should appear in the confirmation copy
    expect(view.getByText(/user@example\.com/i)).toBeInTheDocument();
  });

  it('shows the "no account" error when the email is not registered', async () => {
    mockSendPasswordReset.mockRejectedValueOnce(
      new Error('reset_email_no_account'),
    );
    const { container } = renderPage();
    const view = within(container);

    fireEvent.change(view.getByPlaceholderText(/email/i), {
      target: { value: 'ghost@example.com' },
    });
    fireEvent.click(view.getByRole('button', { name: /send reset link/i }));

    await waitFor(() => {
      expect(
        view.getByText(/no account found with that email/i),
      ).toBeInTheDocument();
    });
  });

  it('shows the "invalid email" error when the address is malformed', async () => {
    mockSendPasswordReset.mockRejectedValueOnce(
      new Error('auth_error_invalid_email'),
    );
    const { container } = renderPage();
    const view = within(container);

    fireEvent.change(view.getByPlaceholderText(/email/i), {
      target: { value: 'not-an-email' },
    });
    fireEvent.click(view.getByRole('button', { name: /send reset link/i }));

    await waitFor(() => {
      expect(
        view.getByText(/doesn't look like a valid email/i),
      ).toBeInTheDocument();
    });
  });

  it('shows the rate-limit error when too many requests are made', async () => {
    mockSendPasswordReset.mockRejectedValueOnce(
      new Error('auth_error_too_many_requests'),
    );
    const { container } = renderPage();
    const view = within(container);

    fireEvent.change(view.getByPlaceholderText(/email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.click(view.getByRole('button', { name: /send reset link/i }));

    await waitFor(() => {
      expect(view.getByText(/too many/i)).toBeInTheDocument();
    });
  });

  it('falls back to the generic error for an unrecognised error key', async () => {
    mockSendPasswordReset.mockRejectedValueOnce(
      new Error('some_completely_unknown_key'),
    );
    const { container } = renderPage();
    const view = within(container);

    fireEvent.change(view.getByPlaceholderText(/email/i), {
      target: { value: 'user@example.com' },
    });
    fireEvent.click(view.getByRole('button', { name: /send reset link/i }));

    await waitFor(() => {
      expect(
        view.getByText(/unable to send reset email/i),
      ).toBeInTheDocument();
    });
  });
});
