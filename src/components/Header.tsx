import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { useGameState } from '@/hooks/useGameState';
import { Volume2, VolumeX, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { playClick } = useSound();

  const handleToggle = () => {
    playClick();
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-2 rounded-full border-2 border-slate-900/70 bg-white/90 px-3 py-1.5 font-serif font-black text-slate-950 shadow-lg backdrop-blur transition-colors hover:bg-white"
      data-testid="button-language-toggle"
    >
      <span className={language === 'en' ? 'text-black' : 'text-black/55'}>EN</span>
      <span className="text-black/45">/</span>
      <span className={language === 'fr' ? 'text-black' : 'text-black/55'}>FR</span>
    </button>
  );
}

export function SoundToggle() {
  const { isMuted, toggleMute } = useSound();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleMute}
      aria-label={isMuted ? t('Unmute sound', 'Activer le son') : t('Mute sound', 'Désactiver le son')}
      className="p-2 rounded-full border border-gold/30 bg-card/10 backdrop-blur text-gold hover:bg-gold/10 transition-colors"
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

  const showHomeButton = location === '/journey';
  const showLeftControls = !location.startsWith('/levels');

  const handleHome = () => {
    playClick();
    resetGame();
    setLocation('/');
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-2">
        {showLeftControls && <SoundToggle />}
        {showLeftControls && showHomeButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleHome}
            aria-label="Return to main menu"
            className="p-2 rounded-full border border-gold/30 bg-card/10 backdrop-blur text-gold hover:bg-gold/10 transition-colors"
            data-testid="button-home"
          >
            <Home size={18} />
          </motion.button>
        )}
      </div>
      <div className="pointer-events-auto">
        <LanguageToggle />
      </div>
    </motion.header>
  );
}
