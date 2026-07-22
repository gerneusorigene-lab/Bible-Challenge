import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  Info,
  Settings as SettingsIcon,
  Trash2,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAchievementsStore } from '@/hooks/useAchievements';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';

const copy = {
  en: {
    title: 'Settings', audio: 'Audio', sound: 'Sound',
    soundOn: 'Sound effects are on', soundOff: 'Sound effects are off',
    game: 'Game', reset: 'Reset Progress',
    resetSubtitle: 'Erase scores, progress, and achievements',
    information: 'Information', about: 'About Bible Challenge',
    aboutSubtitle: 'Version and developer information', back: 'Back',
    confirmTitle: 'Reset All Progress?',
    confirmText: 'This will permanently erase your journey progress, scores, and achievements. This action cannot be undone.',
    cancel: 'Cancel', confirm: 'Yes, Reset',
  },
  fr: {
    title: 'Paramètres', audio: 'Audio', sound: 'Son',
    soundOn: 'Les effets sonores sont activés', soundOff: 'Les effets sonores sont désactivés',
    game: 'Jeu', reset: 'Réinitialiser la progression',
    resetSubtitle: 'Effacer les scores, la progression et les réussites',
    information: 'Information', about: 'À propos de Bible Challenge',
    aboutSubtitle: 'Version et renseignements sur le développeur', back: 'Retour',
    confirmTitle: 'Réinitialiser toute la progression?',
    confirmText: 'Cette action effacera définitivement votre progression, vos scores et vos réussites. Elle est irréversible.',
    cancel: 'Annuler', confirm: 'Oui, réinitialiser',
  },
  es: {
    title: 'Configuración', audio: 'Audio', sound: 'Sonido',
    soundOn: 'Los efectos de sonido están activados', soundOff: 'Los efectos de sonido están desactivados',
    game: 'Juego', reset: 'Restablecer progreso',
    resetSubtitle: 'Borrar puntuaciones, progreso y logros',
    information: 'Información', about: 'Acerca de Bible Challenge',
    aboutSubtitle: 'Versión e información del desarrollador', back: 'Volver',
    confirmTitle: '¿Restablecer todo el progreso?',
    confirmText: 'Esto borrará permanentemente tu progreso, puntuaciones y logros. Esta acción no se puede deshacer.',
    cancel: 'Cancelar', confirm: 'Sí, restablecer',
  },
  pt: {
    title: 'Configurações', audio: 'Áudio', sound: 'Som',
    soundOn: 'Os efeitos sonoros estão ativados', soundOff: 'Os efeitos sonoros estão desativados',
    game: 'Jogo', reset: 'Redefinir progresso',
    resetSubtitle: 'Apagar pontuações, progresso e conquistas',
    information: 'Informações', about: 'Sobre Bible Challenge',
    aboutSubtitle: 'Versão e informações do desenvolvedor', back: 'Voltar',
    confirmTitle: 'Redefinir todo o progresso?',
    confirmText: 'Isso apagará permanentemente seu progresso, suas pontuações e suas conquistas. Esta ação não pode ser desfeita.',
    cancel: 'Cancelar', confirm: 'Sim, redefinir',
  },
} as const;

export default function Settings() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const { isMuted, toggleMute, playClick } = useSound();
  const { resetAllProgress } = useGameState();
  const { clearAll } = useAchievementsStore();
  const [confirmingReset, setConfirmingReset] = useState(false);

  const text = copy[language as keyof typeof copy] ?? copy.en;

  const goBack = () => { playClick(); setLocation('/'); };
  const openAbout = () => { playClick(); setLocation('/about'); };
  const openResetConfirmation = () => { playClick(); setConfirmingReset(true); };
  const closeResetConfirmation = () => { playClick(); setConfirmingReset(false); };
  const confirmReset = () => {
    playClick();
    resetAllProgress();
    clearAll();
    setConfirmingReset(false);
  };

  return (
    <main className="relative min-h-[100dvh] overflow-hidden sacred-gradient px-4 pb-10 pt-24">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 mx-auto w-full max-w-xl"
      >
        <header className="mb-7 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-slate-950/35 text-gold shadow-xl backdrop-blur">
            <SettingsIcon size={28} aria-hidden="true" />
          </div>
          <h1 className="font-serif text-3xl font-black uppercase tracking-[0.12em] text-gold drop-shadow-lg sm:text-4xl">
            {text.title}
          </h1>
        </header>

        <section className="mb-6">
          <h2 className="mb-2 px-2 font-serif text-xs font-black uppercase tracking-[0.22em] text-gold/70">{text.audio}</h2>
          <motion.button
            type="button" whileTap={{ scale: 0.985 }} onClick={toggleMute}
            className="flex w-full items-center gap-4 rounded-2xl border border-white/20 bg-slate-950/35 p-4 text-left shadow-xl backdrop-blur-md transition-colors hover:bg-slate-950/45"
            aria-pressed={!isMuted} data-testid="settings-sound-toggle"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-lg font-bold text-white">{text.sound}</span>
              <span className="block text-sm text-white/60">{isMuted ? text.soundOff : text.soundOn}</span>
            </span>
            <span aria-hidden="true" className={`relative h-7 w-12 shrink-0 rounded-full border transition-colors ${isMuted ? 'border-white/20 bg-black/30' : 'border-emerald-300/60 bg-emerald-500/80'}`}>
              <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${isMuted ? 'translate-x-0.5' : 'translate-x-6'}`} />
            </span>
          </motion.button>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 px-2 font-serif text-xs font-black uppercase tracking-[0.22em] text-gold/70">{text.game}</h2>
          <motion.button
            type="button" whileTap={{ scale: 0.985 }} onClick={openResetConfirmation}
            className="flex w-full items-center gap-4 rounded-2xl border border-red-400/25 bg-slate-950/35 p-4 text-left shadow-xl backdrop-blur-md transition-colors hover:bg-red-950/20"
            data-testid="settings-reset-progress"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-400/30 bg-red-500/10 text-red-300"><Trash2 size={23} /></span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-lg font-bold text-white">{text.reset}</span>
              <span className="block text-sm text-white/60">{text.resetSubtitle}</span>
            </span>
            <ChevronRight size={21} className="shrink-0 text-white/45" />
          </motion.button>
        </section>

        <section className="mb-8">
          <h2 className="mb-2 px-2 font-serif text-xs font-black uppercase tracking-[0.22em] text-gold/70">{text.information}</h2>
          <motion.button
            type="button" whileTap={{ scale: 0.985 }} onClick={openAbout}
            className="flex w-full items-center gap-4 rounded-2xl border border-white/20 bg-slate-950/35 p-4 text-left shadow-xl backdrop-blur-md transition-colors hover:bg-slate-950/45"
            data-testid="settings-about"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-300/30 bg-sky-400/10 text-sky-200"><Info size={24} /></span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-lg font-bold text-white">{text.about}</span>
              <span className="block text-sm text-white/60">{text.aboutSubtitle}</span>
            </span>
            <ChevronRight size={21} className="shrink-0 text-white/45" />
          </motion.button>
        </section>

        <motion.button
          type="button" whileTap={{ scale: 0.97 }} onClick={goBack}
          className="mx-auto flex items-center gap-2 rounded-full border border-gold/40 bg-slate-950/35 px-6 py-3 font-serif font-bold text-gold shadow-lg backdrop-blur transition-colors hover:bg-gold/10"
          data-testid="settings-back"
        >
          <ArrowLeft size={18} /> {text.back}
        </motion.button>
      </motion.section>

      <AnimatePresence>
        {confirmingReset && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeResetConfirmation}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm"
          >
            <motion.div
              role="alertdialog" aria-modal="true" aria-labelledby="reset-dialog-title" aria-describedby="reset-dialog-description"
              initial={{ opacity: 0, scale: 0.88, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.88, y: 12 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-sm rounded-3xl border border-red-400/35 bg-slate-950 p-7 text-center shadow-2xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-red-400/35 bg-red-500/10 text-red-300"><AlertTriangle size={28} /></div>
              <h2 id="reset-dialog-title" className="mb-3 font-serif text-2xl font-black text-white">{text.confirmTitle}</h2>
              <p id="reset-dialog-description" className="mb-7 text-sm leading-6 text-white/65">{text.confirmText}</p>
              <div className="flex gap-3">
                <button type="button" onClick={closeResetConfirmation} className="flex-1 rounded-xl border border-white/20 px-4 py-3 font-serif font-bold text-white/80 transition-colors hover:bg-white/5">{text.cancel}</button>
                <button type="button" onClick={confirmReset} className="flex-1 rounded-xl bg-red-600 px-4 py-3 font-serif font-black text-white transition-colors hover:bg-red-500" data-testid="settings-confirm-reset">{text.confirm}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
