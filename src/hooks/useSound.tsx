import { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  isMusicEnabled: boolean;
  toggleMusic: () => void;
  playCorrect: () => void;
  playWrong: () => void;
  playClick: () => void;
  playComplete: () => void;
}

const MUSIC_TRACKS = [
  '/piano-meditation.mp3',
  '/piano-music.mp3',
] as const;

const MUSIC_VOLUME = 0.18;

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('isMuted') === 'true';
  });

  const [isMusicEnabled, setIsMusicEnabled] = useState(() => {
    return localStorage.getItem('musicEnabled') !== 'false';
  });

  const audioCtxRef = useRef<AudioContext | null>(null);
  const musicAudioRef = useRef<HTMLAudioElement | null>(null);
  const musicEnabledRef = useRef(isMusicEnabled);
  const musicTrackIndexRef = useRef(Math.random() < 0.5 ? 0 : 1);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      localStorage.setItem('isMuted', String(next));
      return next;
    });
  }, []);

  const toggleMusic = useCallback(() => {
    setIsMusicEnabled(prev => {
      const next = !prev;
      localStorage.setItem('musicEnabled', String(next));
      return next;
    });
  }, []);

  useEffect(() => {
    const audio = new Audio(MUSIC_TRACKS[musicTrackIndexRef.current]);
    audio.volume = MUSIC_VOLUME;
    audio.preload = 'auto';

    const playMusic = () => {
      if (!musicEnabledRef.current) return;

      void audio.play().catch((error) => {
        // Browsers can block audible autoplay until the first user gesture.
        if (error instanceof DOMException && error.name === 'NotAllowedError') {
          return;
        }

        console.warn('[Background Music] Playback could not start.', error);
      });
    };

    const handleEnded = () => {
      musicTrackIndexRef.current =
        (musicTrackIndexRef.current + 1) % MUSIC_TRACKS.length;

      audio.src = MUSIC_TRACKS[musicTrackIndexRef.current];
      audio.load();
      playMusic();
    };

    const handleFirstInteraction = () => {
      playMusic();
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    audio.addEventListener('ended', handleEnded);
    window.addEventListener('pointerdown', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction, {
      passive: true,
    });

    musicAudioRef.current = audio;

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
      musicAudioRef.current = null;
    };
  }, []);

  useEffect(() => {
    musicEnabledRef.current = isMusicEnabled;

    const audio = musicAudioRef.current;
    if (!audio) return;

    if (!isMusicEnabled) {
      audio.pause();
      return;
    }

    void audio.play().catch((error) => {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        return;
      }

      console.warn('[Background Music] Playback could not resume.', error);
    });
  }, [isMusicEnabled]);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // Resume context if suspended (needed for some browsers after user interaction)
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const playCorrect = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      // Triumphant ascending harp glissando effect
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760]; // A4, C#5, E5, A5, C#6, E6, A6
      
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        const startTime = now + (i * 0.05);
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.8);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + 0.8);
      });
    } catch (e) {
      console.error("Audio error", e);
    }
  }, [isMuted, getAudioContext]);

  const playWrong = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      // Gentle soft woodblock clack
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
      
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      console.error("Audio error", e);
    }
  }, [isMuted, getAudioContext]);

  const playClick = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {
      console.error("Audio error", e);
    }
  }, [isMuted, getAudioContext]);

  const playComplete = useCallback(() => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      // Fanfare
      const notes = [
        { f: 523.25, t: 0, d: 0.15 }, // C5
        { f: 523.25, t: 0.2, d: 0.15 }, // C5
        { f: 523.25, t: 0.4, d: 0.15 }, // C5
        { f: 659.25, t: 0.6, d: 0.4 }, // E5
        { f: 587.33, t: 1.0, d: 0.2 }, // D5
        { f: 783.99, t: 1.2, d: 0.6 }, // G5
      ];
      
      notes.forEach(({ f, t, d }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = f;
        
        const startTime = now + t;
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + d);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + d);
      });
    } catch (e) {
      console.error("Audio error", e);
    }
  }, [isMuted, getAudioContext]);

  return (
    <SoundContext.Provider
      value={{
        isMuted,
        toggleMute,
        isMusicEnabled,
        toggleMusic,
        playCorrect,
        playWrong,
        playClick,
        playComplete,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}
