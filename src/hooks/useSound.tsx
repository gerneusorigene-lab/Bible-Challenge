import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

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
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem('isMuted', String(next));
      return next;
    });
  }, []);

  const toggleMusic = useCallback(() => {
    setIsMusicEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('musicEnabled', String(next));
      return next;
    });
  }, []);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      audioCtxRef.current = new (
        window.AudioContext ||
        (window as typeof window & {
          webkitAudioContext: typeof AudioContext;
        }).webkitAudioContext
      )();
    }

    return audioCtxRef.current;
  }, []);

  /**
   * Run a sound only after the Web Audio context is actually active.
   * This avoids the intermittent "first click is silent" behavior that can
   * happen in Chrome, Android WebView, and PWAs when resume() is asynchronous.
   */
  const withRunningAudioContext = useCallback(
    (play: (ctx: AudioContext) => void) => {
      try {
        const ctx = getAudioContext();

        if (ctx.state === 'running') {
          play(ctx);
          return;
        }

        void ctx
          .resume()
          .then(() => {
            if (ctx.state === 'running') {
              play(ctx);
            }
          })
          .catch((error) => {
            console.warn('[Sound Effects] Audio context could not resume.', error);
          });
      } catch (error) {
        console.error('[Sound Effects] Audio error.', error);
      }
    },
    [getAudioContext],
  );

  /**
   * Background music player.
   * One HTMLAudioElement lives for the lifetime of SoundProvider, so music
   * survives route changes without restarting.
   */
  useEffect(() => {
     const audio = new Audio(MUSIC_TRACKS[musicTrackIndexRef.current]);
      audio.volume = MUSIC_VOLUME;
      audio.preload = 'auto';
      audio.autoplay = true;

    const tryPlayMusic = async () => {
      if (!musicEnabledRef.current || document.visibilityState === 'hidden') {
        return false;
      }

      try {
        audio.volume = MUSIC_VOLUME;

        if (audio.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
          audio.load();
        }

        await audio.play();
        return true;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'NotAllowedError') {
          // Audible autoplay can be blocked by the browser. We keep retrying
          // on media-ready/lifecycle events and use the first normal user
          // interaction only as a silent fallback.
          return false;
        }

        console.warn('[Background Music] Playback could not start.', error);
        return false;
      }
    };

    const handleMediaReady = () => {
      void tryPlayMusic();
    };

    const handleEnded = () => {
      musicTrackIndexRef.current =
        (musicTrackIndexRef.current + 1) % MUSIC_TRACKS.length;

      audio.src = MUSIC_TRACKS[musicTrackIndexRef.current];
      audio.load();
      void tryPlayMusic();
    };

    const handleUserInteraction = () => {
      // Unlock Web Audio for sound effects.
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        void ctx.resume().catch((error) => {
          console.warn('[Sound Effects] Could not unlock audio context.', error);
        });
      }

      // Also unlock/resume background music.
      void tryPlayMusic().then((started) => {
        if (started) {
          window.removeEventListener('pointerdown', handleUserInteraction);
          window.removeEventListener('keydown', handleUserInteraction);
          window.removeEventListener('touchstart', handleUserInteraction);
        }
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const ctx = audioCtxRef.current;
        if (ctx?.state === 'suspended') {
          void ctx.resume().catch(() => {
            // A new user gesture may still be required on some devices.
          });
        }

        void tryPlayMusic();
      } else {
        audio.pause();
      }
    };

    const handleWindowFocus = () => {
      if (document.visibilityState === 'visible') {
        void tryPlayMusic();
      }
    };

    const handlePageShow = () => {
      if (document.visibilityState === 'visible') {
        void tryPlayMusic();
      }
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadeddata', handleMediaReady);
    audio.addEventListener('canplay', handleMediaReady);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);
    window.addEventListener('pageshow', handlePageShow);

    window.addEventListener('pointerdown', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction, {
      passive: true,
    });

    musicAudioRef.current = audio;

    // Attempt audible autoplay immediately on page load.
    void tryPlayMusic();

    // A few short retries cover cases where the page renders before the MP3
    // has enough buffered data. These do not bypass browser autoplay policy.
    const startupRetryTimers = [
      window.setTimeout(() => void tryPlayMusic(), 250),
      window.setTimeout(() => void tryPlayMusic(), 1000),
      window.setTimeout(() => void tryPlayMusic(), 2500),
    ];

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadeddata', handleMediaReady);
      audio.removeEventListener('canplay', handleMediaReady);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      startupRetryTimers.forEach((timer) => window.clearTimeout(timer));

      audio.pause();
      audio.src = '';
      musicAudioRef.current = null;
    };
  }, [getAudioContext]);

  /**
   * React immediately when the player changes the Background Music setting.
   */
  useEffect(() => {
    musicEnabledRef.current = isMusicEnabled;

    const audio = musicAudioRef.current;
    if (!audio) return;

    if (!isMusicEnabled) {
      audio.pause();
      return;
    }

    if (document.visibilityState === 'hidden') {
      return;
    }

    void audio.play().catch((error) => {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        // A user gesture will restart it through the global interaction listener.
        return;
      }

      console.warn('[Background Music] Playback could not resume.', error);
    });
  }, [isMusicEnabled]);

  const playCorrect = useCallback(() => {
    if (isMuted) return;

    withRunningAudioContext((ctx) => {
      const now = ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760];

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.value = freq;

        const startTime = now + i * 0.05;

        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.8);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.8);
      });
    });
  }, [isMuted, withRunningAudioContext]);

  const playWrong = useCallback(() => {
    if (isMuted) return;

    withRunningAudioContext((ctx) => {
      const now = ctx.currentTime;
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
    });
  }, [isMuted, withRunningAudioContext]);

  const playClick = useCallback(() => {
    if (isMuted) return;

    withRunningAudioContext((ctx) => {
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
    });
  }, [isMuted, withRunningAudioContext]);

  const playComplete = useCallback(() => {
    if (isMuted) return;

    withRunningAudioContext((ctx) => {
      const now = ctx.currentTime;
      const notes = [
        { f: 523.25, t: 0, d: 0.15 },
        { f: 523.25, t: 0.2, d: 0.15 },
        { f: 523.25, t: 0.4, d: 0.15 },
        { f: 659.25, t: 0.6, d: 0.4 },
        { f: 587.33, t: 1.0, d: 0.2 },
        { f: 783.99, t: 1.2, d: 0.6 },
      ];

      notes.forEach(({ f, t, d }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const startTime = now + t;

        osc.type = 'sine';
        osc.frequency.value = f;

        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + d);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + d);
      });
    });
  }, [isMuted, withRunningAudioContext]);

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
