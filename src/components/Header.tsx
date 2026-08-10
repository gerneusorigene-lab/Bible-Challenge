import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { useGameState } from '@/hooks/useGameState';
import { useAuth } from '@/context/AuthContext';
import { logoutUser } from '@/lib/authService';
import { Volume2, VolumeX, Home, Settings, LogIn, User } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'wouter';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
] as const;

type LanguageCode = (typeof languages)[number]['code'];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { playClick } = useSound();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleMenu = () => {
    playClick();
    setShowMenu((open) => !open);
  };

  const handleSelect = (selectedLanguage: LanguageCode) => {
    playClick();
    setLanguage(selectedLanguage);
    setShowMenu(false);
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        className="flex items-center gap-2 rounded-full border-2 border-slate-900/70 bg-white/90 px-3 py-1.5 font-serif font-black text-slate-950 shadow-lg backdrop-blur transition-colors hover:bg-white"
        data-testid="button-language-toggle"
        aria-label={`Current language: ${currentLanguage.label}`}
        aria-haspopup="menu"
        aria-expanded={showMenu}
      >
        <span className="inline-block min-w-[6.5rem] text-left">{currentLanguage.label}</span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: showMenu ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            role="menu"
            aria-label="Choose language"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-300 bg-white text-slate-950 shadow-2xl"
          >
            {languages.map((item) => {
              const isSelected = language === item.code;

              return (
                <button
                  key={item.code}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isSelected}
                  onClick={() => handleSelect(item.code)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-amber-50 ${
                    isSelected ? 'bg-amber-100 font-bold' : ''
                  }`}
                  data-testid={`button-language-${item.code}`}
                >
                  <span className="flex-1">{item.label}</span>
                  {isSelected && (
                    <span className="text-green-700" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SoundToggle() {
  const { isMuted, toggleMute } = useSound();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={isMuted ? t('unmute_sound') : t('mute_sound')}
      className="rounded-full border border-gold/30 bg-card/10 p-2 text-gold backdrop-blur transition-colors hover:bg-gold/10"
      data-testid="button-sound-toggle"
    >
      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </button>
  );
}

export function Header() {
  const [location, setLocation] = useLocation();
  const { playClick } = useSound();
  const { resetGame } = useGameState();
  const { t, language } = useLanguage();
  const { user, loading } = useAuth();
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  const showHomeButton = location === '/journey';
  const showLeftControls = !location.startsWith('/levels');
  const showSettingsButton = location === '/';
  const showLanguageToggle = location === '/';
  const showAuthControl = location === '/';

  const handleHome = () => {
    playClick();
    resetGame();
    setLocation('/');
  };

  const handleSettings = () => {
    playClick();
    setLocation('/settings');
  };

  const handleSignIn = () => {
    playClick();
    setLocation('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target as Node)
      ) {
        setShowAccountMenu(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowAccountMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleAccountClick = () => {
    playClick();
    setShowAccountMenu((open) => !open);
  };

  const handleSignOut = async () => {
    playClick();
    setShowAccountMenu(false);

    try {
      await logoutUser();
      setLocation('/');
    } catch (error) {
      console.error('[Firebase Auth] Sign out failed.', error);
    }
  };

  const signInLabel =
    language === 'fr' ? 'Se connecter' : 'Sign In';

  const accountLabel =
    user?.displayName?.trim() ||
    user?.email?.trim() ||
    'Account';

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex items-center justify-between p-4"
    >
      <div className="pointer-events-auto flex items-center gap-2">
        {showLeftControls && <SoundToggle />}

        {showLeftControls && showHomeButton && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleHome}
            aria-label={t('return_home')}
            className="rounded-full border border-gold/30 bg-card/10 p-2 text-gold backdrop-blur transition-colors hover:bg-gold/10"
            data-testid="button-home"
          >
            <Home size={18} />
          </motion.button>
        )}
      </div>

      <div className="pointer-events-auto flex items-center gap-2">
        {showSettingsButton && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleSettings}
            aria-label={t('settings')}
            className="rounded-full border-2 border-slate-900/70 bg-white/90 p-2 text-slate-950 shadow-lg backdrop-blur transition-colors hover:bg-white"
            data-testid="button-settings"
          >
            <Settings size={18} />
          </motion.button>
        )}

        {showAuthControl && !user && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignIn}
            aria-label={signInLabel}
            className="flex items-center gap-1.5 rounded-full border-2 border-slate-900/70 bg-white/90 px-3 py-1.5 font-serif text-sm font-black text-slate-950 shadow-lg backdrop-blur transition-colors hover:bg-white"
            data-testid="button-sign-in"
          >
            <LogIn size={16} />
            <span>{signInLabel}</span>
          </motion.button>
        )}

        {showAuthControl && user && (
          <div ref={accountMenuRef} className="relative">
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAccountClick}
              aria-haspopup="menu"
              aria-expanded={showAccountMenu}
              className="flex max-w-[12rem] items-center gap-1.5 rounded-full border-2 border-slate-900/70 bg-white/90 px-3 py-1.5 font-serif text-sm font-black text-slate-950 shadow-lg backdrop-blur transition-colors hover:bg-white"
              data-testid="account-status"
              title={user.email ?? accountLabel}
            >
              <User size={16} className="shrink-0" />
              <span className="truncate">{accountLabel}</span>
            </motion.button>

            <AnimatePresence>
              {showAccountMenu && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 z-50 mt-2 w-full min-w-[12rem] overflow-hidden rounded-2xl border border-slate-300 bg-white text-slate-950 shadow-2xl"
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-2 px-4 py-3 text-left font-serif text-sm font-black transition-colors hover:bg-amber-50"
                    data-testid="button-sign-out"
                  >
                    <LogIn size={16} className="rotate-180" />
                    <span>{language === 'fr' ? 'Se déconnecter' : 'Sign Out'}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {showLanguageToggle && <LanguageToggle />}
      </div>
    </motion.header>
  );
}
