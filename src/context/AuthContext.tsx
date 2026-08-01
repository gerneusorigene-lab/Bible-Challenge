import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import {
  onAuthStateChanged,
  type User,
} from 'firebase/auth';

import { Purchases } from '@revenuecat/purchases-capacitor';
import { auth, isFirebaseConfigured } from '@/lib/firebase';
import { logoutUser } from '@/lib/authService';
import { isNativePlatform, ensureRevenueCatConfigured } from '@/lib/revenuecat';
import { isWebBillingAvailable, switchWebBillingUser } from '@/lib/revenuecat-web';
import { useEntitlement } from '@/hooks/useEntitlement';

/**
 * How long (ms) to wait for the first Firebase Auth state emission before
 * giving up and treating the user as unauthenticated. This prevents an
 * unreachable Firebase project from leaving the app stuck on a loading screen.
 */
const AUTH_LOADING_TIMEOUT_MS = 8_000;

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  /** Non-null when Firebase Auth failed in a way the user should know about. */
  authError: string | null;
  /** Sign the current user out of Firebase Auth (and RevenueCat on native). */
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    // If Firebase is not configured (missing env vars) treat the user as a
    // permanent guest — skip the loading state entirely so the app starts fast.
    if (!isFirebaseConfigured || !auth) {
      console.warn(
        '[Firebase Auth] Firebase is not configured — running in guest mode. ' +
          'Sign-in and progress sync are disabled.',
      );
      setLoading(false);
      return;
    }

    // Safety-net: if Firebase never calls back (network down, bad config) we
    // don't want to leave the app on a blank loading screen forever.
    const loadingTimeout = setTimeout(() => {
      setLoading((prev) => {
        if (prev) {
          console.warn(
            '[Firebase Auth] No response after',
            AUTH_LOADING_TIMEOUT_MS,
            'ms — proceeding as unauthenticated.',
          );
          setAuthError(
            'Could not reach the sign-in service. ' +
              'You can still play, but your progress may not sync.',
          );
        }
        return false;
      });
    }, AUTH_LOADING_TIMEOUT_MS);

    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        clearTimeout(loadingTimeout);
        setUser(firebaseUser);
        setAuthError(null);
        setLoading(false);

        // Link RevenueCat to the Firebase user so purchases are tied to a real
        // identity rather than an anonymous "default uid".
        // This only runs inside the native Capacitor app (Android/iOS) — the
        // RevenueCat SDK is not available in the web browser.
        if (isNativePlatform()) {
          try {
            const configured = await ensureRevenueCatConfigured();
            if (configured) {
              if (firebaseUser) {
                // User logged in — tell RevenueCat to use the Firebase UID.
                await Purchases.logIn({ appUserID: firebaseUser.uid });
                console.log(
                  '[RevenueCat] Logged in with Firebase UID:',
                  firebaseUser.uid,
                );
              } else {
                // User logged out — reset RevenueCat back to anonymous.
                await Purchases.logOut();
                console.log('[RevenueCat] Logged out, reset to anonymous user.');
              }
            }
          } catch (error) {
            // RevenueCat login failure should never block the app from loading.
            console.error('[RevenueCat] Could not sync user identity.', error);
          }
        } else if (isWebBillingAvailable()) {
          // Web path: the SDK is configured once and caches the user ID at the
          // time of first call. If the user was browsing anonymously and then
          // signed in (or vice-versa), the stale anonymous ID would be used
          // for all subsequent requests — including "Restore Purchases" — which
          // means the subscription would never be found.
          //
          // switchWebBillingUser() handles both cases:
          //  - SDK not yet configured → clears the promise so the next call
          //    configures with the correct uid.
          //  - SDK already running → calls changeUser() in-place, because
          //    ensureWebBillingConfigured() would skip configure() when
          //    Purchases.isConfigured() is already true.
          try {
            // On sign-out, immediately clear the persisted premium flag so
            // the paywall never shows "premium" during the async re-check.
            if (!firebaseUser) {
              useEntitlement.setState({ isPremium: false });
            }
            await switchWebBillingUser(firebaseUser?.uid ?? null);
            // Re-check entitlement so the UI immediately reflects the
            // signed-in user's subscription without a page refresh.
            await useEntitlement.getState().checkStatus();
          } catch (error) {
            // Non-fatal: the UI will just retain whatever it last persisted.
            console.error('[RevenueCat Web] Could not switch user or re-check entitlement.', error);
          }
        }
      },
      (error) => {
        clearTimeout(loadingTimeout);
        console.error(
          '[Firebase Auth] Could not restore the user session.',
          error,
        );
        setAuthError(
          'Sign-in is temporarily unavailable. ' +
            'You can still play, but your progress may not sync.',
        );
        setUser(null);
        setLoading(false);
      },
    );

    return () => {
      clearTimeout(loadingTimeout);
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await logoutUser();
    // onAuthStateChanged fires next and clears user state + RevenueCat automatically.
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authError,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider.');
  }

  return context;
}
