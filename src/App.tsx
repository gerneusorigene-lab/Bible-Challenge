import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Component, useEffect, type ReactNode } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import { SoundProvider } from '@/hooks/useSound';
import { useEntitlement } from '@/hooks/useEntitlement';
import { Header } from '@/components/Header';
import Home from '@/pages/Home';
import JourneySelection from '@/pages/JourneySelection';
import LevelSelect from '@/pages/LevelSelect';
import Game from '@/pages/Game';
import Result from '@/pages/Result';
import End from '@/pages/End';
import Review from '@/pages/Review';
import Paywall from '@/pages/Paywall';
import Achievements from '@/pages/Achievements';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-center sacred-gradient text-center px-6">
          <h1 className="font-serif text-3xl text-gold mb-4">Something went wrong</h1>
          <p className="text-foreground/70 mb-8">An unexpected error occurred. Please refresh to continue.</p>
          <button
            onClick={() => { this.setState({ hasError: false }); window.location.href = '/'; }}
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

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/journey" component={JourneySelection} />
        <Route path="/levels" component={LevelSelect} />
        <Route path="/game" component={Game} />
        <Route path="/result" component={Result} />
        <Route path="/end" component={End} />
        <Route path="/review" component={Review} />
        <Route path="/paywall" component={Paywall} />
        <Route path="/achievements" component={Achievements} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const checkStatus = useEntitlement((s) => s.checkStatus);

  useEffect(() => {
    // Re-sync the premium entitlement from RevenueCat on launch so a
    // returning premium user is recognized without re-purchasing. On the web
    // preview (no native store) this is a no-op that trusts local state.
    checkStatus();
  }, [checkStatus]);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <SoundProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
              <Router />
            </WouterRouter>
          </SoundProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
