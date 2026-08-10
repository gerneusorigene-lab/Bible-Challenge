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

import { auth } from '@/lib/firebase';

type AuthContextValue = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,

      (firebaseUser) => {
        void (async () => {
          try {
            /*
             * Keep RevenueCat Web Billing synchronized with Firebase Auth.
             *
             * Signed in:
             *   Firebase UID becomes the RevenueCat App User ID.
             *
             * Signed out:
             *   RevenueCat switches to an anonymous browser customer.
             */
            const { switchWebBillingUser } = await import(
              '@/lib/revenuecat_web'
            );

            await switchWebBillingUser(firebaseUser?.uid ?? null);

            /*
             * RevenueCat may initially have checked Premium before Firebase
             * finished restoring the user's session. Re-check after the
             * RevenueCat identity has been synchronized.
             */
            const { useEntitlement } = await import(
              '@/hooks/useEntitlement'
            );

            const isPremium =
              await useEntitlement.getState().checkStatus();

            console.log(
              '[RevenueCat] Premium status after Firebase sync:',
              isPremium,
            );
          } catch (error) {
            /*
             * Authentication itself should continue working even if
             * RevenueCat temporarily fails.
             */
            console.error(
              '[RevenueCat Web] Could not synchronize Firebase user.',
              error,
            );
          } finally {
            setUser(firebaseUser);
            setLoading(false);
          }
        })();
      },

      (error) => {
        console.error(
          '[Firebase Auth] Could not restore the user session.',
          error,
        );

        setUser(null);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside an AuthProvider.',
    );
  }

  return context;
}