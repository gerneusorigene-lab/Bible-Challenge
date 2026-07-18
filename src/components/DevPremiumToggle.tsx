import { useEntitlement } from '@/hooks/useEntitlement';
import { useSound } from '@/hooks/useSound';

/**
 * Developer-only control to flip premium entitlement on/off for testing,
 * without needing a real purchase. Rendered in development builds
 * (`import.meta.env.DEV`), or in a production build explicitly compiled
 * with `VITE_SHOW_PREMIUM_TOGGLE=true` (see `build:capacitor:test`) for
 * testing the full/premium experience on a real device. Regular production
 * builds (`build:capacitor`) never set that flag, so end users never see it.
 */
export function DevPremiumToggle() {
  const { isPremium, devSetPremium } = useEntitlement();
  const { playClick } = useSound();

  if (!import.meta.env.DEV && import.meta.env.VITE_SHOW_PREMIUM_TOGGLE !== 'true') return null;

  return (
    <button
      onClick={() => { playClick(); devSetPremium(!isPremium); }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-dashed border-white/20 text-white/30 hover:text-white/60 hover:border-white/40 font-mono text-[10px] uppercase tracking-wider transition-colors"
      data-testid="button-dev-toggle-premium"
    >
      🛠 DEV: Premium {isPremium ? 'ON' : 'OFF'}
    </button>
  );
}
