import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword as firebaseSignInWithEmail,
  createUserWithEmailAndPassword as firebaseCreateUser,
  sendPasswordResetEmail,
  type ActionCodeSettings,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { auth } from "./firebase";

/**
 * Map a Firebase Auth error code to an i18n key string.
 * The caller (Login/Register page) passes this key through t() so the
 * message is shown in the player's chosen language.
 */
function friendlyAuthError(err: unknown): Error {
  if (err instanceof FirebaseError) {
    if (err.code === "auth/unauthorized-domain") {
      return new Error("auth_error_unauthorized_domain");
    }
    // User closed the popup — surface a friendlier message
    if (err.code === "auth/popup-closed-by-user" || err.code === "auth/cancelled-popup-request") {
      return new Error("auth_error_popup_closed");
    }
    return new Error("sign_in_error_generic");
  }
  return err instanceof Error ? err : new Error("sign_in_error_generic");
}

function requireAuth() {
  if (!auth) {
    throw new Error(
      "Firebase Auth is not initialized. " +
        "Check that VITE_FIREBASE_* environment variables are set."
    );
  }
  return auth;
}

/**
 * Sign in with Google (popup flow).
 *
 * Throws a descriptive error when the current domain is not listed in
 * Firebase Console → Authentication → Settings → Authorized domains.
 * See FIREBASE_SETUP.md for how to add the production domain.
 */
export async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(requireAuth(), provider);
    return credential.user;
  } catch (err) {
    throw friendlyAuthError(err);
  }
}

/**
 * Sign in with email and password.
 * Maps Firebase error codes to user-friendly messages.
 */
export async function signInWithEmail(email: string, password: string) {
  try {
    const credential = await firebaseSignInWithEmail(requireAuth(), email, password);
    return credential.user;
  } catch (err) {
    if (err instanceof FirebaseError) {
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/invalid-credential" ||
        err.code === "auth/wrong-password"
      ) {
        throw new Error("auth_error_invalid_credential");
      }
      if (err.code === "auth/invalid-email") {
        throw new Error("auth_error_invalid_email");
      }
      if (err.code === "auth/too-many-requests") {
        throw new Error("auth_error_too_many_requests");
      }
    }
    throw friendlyAuthError(err);
  }
}

/**
 * Create a new account with email and password.
 * Maps Firebase error codes to user-friendly messages.
 */
export async function createUserWithEmail(email: string, password: string) {
  try {
    const credential = await firebaseCreateUser(requireAuth(), email, password);
    return credential.user;
  } catch (err) {
    if (err instanceof FirebaseError) {
      if (err.code === "auth/email-already-in-use") {
        throw new Error("auth_error_email_in_use");
      }
      if (err.code === "auth/invalid-email") {
        throw new Error("auth_error_invalid_email");
      }
      if (err.code === "auth/weak-password") {
        throw new Error("auth_error_weak_password");
      }
    }
    throw friendlyAuthError(err);
  }
}

/**
 * Send a password-reset email via Firebase Auth.
 *
 * ActionCodeSettings are included so that:
 * - `url` (continueUrl): after the user confirms the reset on Firebase's
 *   hosted page (or your custom action-handler page), they are redirected
 *   back to the app's login screen.
 * - If you configure a custom action-handler URL in the Firebase console
 *   (see FIREBASE_SETUP.md), the reset link will open that branded page
 *   instead of Firebase's default UI, and the user never leaves the app.
 *
 * Maps Firebase error codes to user-friendly i18n keys.
 */
export async function sendPasswordReset(email: string) {
  const actionCodeSettings: ActionCodeSettings = {
    // After the password is reset the user is sent here.
    // Using window.location.origin makes this work in every environment
    // (dev preview, staging, production) without hard-coding a domain.
    url: `${window.location.origin}/login`,
    // false = standard browser link (not a Firebase Dynamic Link).
    // Set to true only if you add the app's domain to Firebase Dynamic Links.
    handleCodeInApp: false,
  };

  try {
    await sendPasswordResetEmail(requireAuth(), email, actionCodeSettings);
  } catch (err) {
    if (err instanceof FirebaseError) {
      // auth/user-not-found: no Firebase account matches this address
      if (err.code === "auth/user-not-found") {
        throw new Error("reset_email_no_account");
      }
      // auth/invalid-email: the address is syntactically malformed
      if (err.code === "auth/invalid-email") {
        throw new Error("auth_error_invalid_email");
      }
      if (err.code === "auth/too-many-requests") {
        throw new Error("auth_error_too_many_requests");
      }
    }
    throw friendlyAuthError(err);
  }
}

/**
 * Sign the current user out of Firebase Auth.
 */
export async function logoutUser() {
  if (!auth) return;
  await signOut(auth);
}
