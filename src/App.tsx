import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Component, useEffect, useState, type ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import { LanguageProvider } from '@/hooks/useLanguage';
import { SoundProvider } from '@/hooks/useSound';
import { useEntitlement } from '@/hooks/useEntitlement';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/Header';

import Home from '@/pages/Home';
import JourneySelection from '@/pages/JourneySelection';
import JourneyMap from '@/pages/JourneyMap';
import LevelSelect from '@/pages/LevelSelect';
import Game from '@/pages/Game';
import Result from '@/pages/Result';
import End from '@/pages/End';
import Review from '@/pages/Review';
import Paywall from '@/pages/Paywall';
import Achievements from '@/pages/achievements';
import Settings from '@/pages/Settings';
import About from '@/pages/About';
import Terms from '@/pages/Terms';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import ForgotPassword from '@/pages/ForgotPassword';
import NotFound from '@/pages/not-found';

import { getRevenueCatAppUserId } from '@/lib/revenuecat';
import { useProgressSync } from '@/hooks/useProgressSync';

const queryClient = new QueryClient();

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-center sacred-gradient text-center px-6">
          <h1 className="font-serif text-3xl text-gold mb-4">
            Something went wrong
          </h1>
          <p className="text-foreground/70 mb-8">
            An unexpected error occurred. Please refresh to continue.
          </p>
          <button
            type="button"
            onClick={() => {
              this.setState({ hasError: false });
              window.location.href = '/';
            }}
            className="px-8 py-3 rounded-full border border-gold text-gold font-serif hover:bg-gold/10 transition-colors"
          >
            Return to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function AuthErrorBanner() {
  const { authError } = useAuth();
  const [dismissed, setDismissed] = useState(false);

  if (!authError || dismissed) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-xl border border-amber-500/40 bg-amber-950/90 backdrop-blur px-4 py-3 shadow-lg max-w-sm w-[calc(100%-2rem)] text-sm text-amber-200"
    >
      <span className="text-lg leading-none" aria-hidden>⚠️</span>
      <p className="flex-1">{authError}</p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="shrink-0 text-amber-400 hover:text-amber-200 transition-colors font-bold leading-none"
      >
        ✕
      </button>
    </div>
  );
}

function Router() {
  const { user, loading } = useAuth();
  useProgressSync();

  console.log('Firebase loading =', loading);
  console.log('Firebase user =', user);

  return (
    <>
      <Header />
      <AuthErrorBanner />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/journey" component={JourneySelection} />
        <Route path="/journey-map" component={JourneyMap} />
        <Route path="/levels" component={LevelSelect} />
        <Route path="/game" component={Game} />
        <Route path="/result" component={Result} />
        <Route path="/end" component={End} />
        <Route path="/review" component={Review} />
        <Route path="/paywall" component={Paywall} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/settings" component={Settings} />
        <Route path="/terms" component={Terms} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const checkStatus = useEntitlement((state) => state.checkStatus);

  useEffect(() => {
    let statusCheckInProgress = false;

    const refreshPremiumStatus = async () => {
      if (statusCheckInProgress) return;
      statusCheckInProgress = true;
      try {
        const isPremium = await checkStatus();
        console.log('[RevenueCat] Premium status refreshed:', isPremium);
      } catch (error) {
        console.error('[RevenueCat] Could not refresh Premium status.', error);
      } finally {
        statusCheckInProgress = false;
      }
    };

    void refreshPremiumStatus();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') void refreshPremiumStatus();
    };
    const handleFocus = () => void refreshPremiumStatus();
    const handlePageShow = () => void refreshPremiumStatus();
    const handlePopState = () => void refreshPremiumStatus();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('popstate', handlePopState);

    getRevenueCatAppUserId()
      .then((id) => console.log('RevenueCat App User ID =', id))
      .catch((error) =>
        console.error('[RevenueCat] Could not retrieve the App User ID.', error),
      );

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [checkStatus]);

  return (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider>
          <SoundProvider>
            <WouterRouter>
              <Router />
            </WouterRouter>

            <Toaster />
          </SoundProvider>
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);
}

export default App;
