import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  Info,
  LogOut,
  Settings as SettingsIcon,
  Trash2,
  UserX,
  Music2,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useState } from 'react';
import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { useLocation } from 'wouter';
import { useAchievementsStore } from '@/hooks/useAchievements';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/hooks/useLanguage';
import { useSound } from '@/hooks/useSound';
import { useAuth } from '@/context/AuthContext';
import { deleteCurrentUserAccount } from '@/lib/authService';

const copy = {
  en: {
    exitApp: 'Exit App',
    exitSubtitle: 'Leave Bible Challenge without signing out',
    exitTitle: 'Exit Bible Challenge?',
    exitText: 'Your account and progress will be kept.',
    exitConfirm: 'Exit',
    exitWebMessage: "You can now close this browser tab or return to your phone's home screen.",
    exitWebHint: 'Close this tab to leave the game.',
    done: 'Done',
    title: 'Settings', audio: 'Audio', sound: 'Sound',
    soundOn: 'Sound effects are on', soundOff: 'Sound effects are off',
    music: 'Background Music',
    musicOn: 'Relaxing background music is on',
    musicOff: 'Background music is off',
    game: 'Game', reset: 'Reset Progress',
    resetSubtitle: 'Erase scores, progress, and achievements',
    information: 'Information', about: 'About Bible Challenge',
    aboutSubtitle: 'Version and developer information', back: 'Back',
    confirmTitle: 'Reset All Progress?',
    confirmText: 'This will permanently erase your journey progress, scores, and achievements. This action cannot be undone.',
    cancel: 'Cancel', confirm: 'Yes, Reset',
    account: 'Account', deleteAccount: 'Delete Account',
    deleteAccountSubtitle: 'Permanently delete your Bible Challenge account',
    deleteAccountTitle: 'Delete Your Account?',
    deleteAccountText: 'This permanently deletes your Bible Challenge sign-in account. This action cannot be undone.',
    deleteAccountConfirm: 'Yes, Delete', deletingAccount: 'Deleting...',
    deleteAccountError: 'We could not delete your account. Please sign in again and retry.',
  },
  fr: {
    exitApp: 'Quitter l’application',
    exitSubtitle: 'Quitter Bible Challenge sans vous déconnecter',
    exitTitle: 'Quitter Bible Challenge ?',
    exitText: 'Votre compte et votre progression seront conservés.',
    exitConfirm: 'Quitter',
    exitWebMessage: 'Vous pouvez maintenant fermer cet onglet ou revenir à l’écran d’accueil de votre téléphone.',
    exitWebHint: 'Fermez cet onglet pour quitter le jeu.',
    done: 'Terminé',
    title: 'Paramètres', audio: 'Audio', sound: 'Son',
    soundOn: 'Les effets sonores sont activés', soundOff: 'Les effets sonores sont désactivés',
    music: 'Musique de fond',
    musicOn: 'La musique de fond relaxante est activée',
    musicOff: 'La musique de fond est désactivée',
    game: 'Jeu', reset: 'Réinitialiser la progression',
    resetSubtitle: 'Effacer les scores, la progression et les réussites',
    information: 'Information', about: 'À propos de Bible Challenge',
    aboutSubtitle: 'Version et renseignements sur le développeur', back: 'Retour',
    confirmTitle: 'Réinitialiser toute la progression?',
    confirmText: 'Cette action effacera définitivement votre progression, vos scores et vos réussites. Elle est irréversible.',
    cancel: 'Annuler', confirm: 'Oui, réinitialiser',
    account: 'Compte', deleteAccount: 'Supprimer le compte',
    deleteAccountSubtitle: 'Supprimer définitivement votre compte Bible Challenge',
    deleteAccountTitle: 'Supprimer votre compte?',
    deleteAccountText: 'Cette action supprime définitivement votre compte de connexion Bible Challenge. Elle est irréversible.',
    deleteAccountConfirm: 'Oui, supprimer', deletingAccount: 'Suppression...',
    deleteAccountError: 'Impossible de supprimer votre compte. Veuillez vous reconnecter et réessayer.',
  },
  es: {
    exitApp: 'Salir de la aplicación',
    exitSubtitle: 'Salir sin cerrar sesión',
    exitTitle: '¿Salir de Bible Challenge?',
    exitText: 'Se conservarán tu cuenta y tu progreso.',
    exitConfirm: 'Salir',
    exitWebMessage: 'Ahora puedes cerrar esta pestaña o volver a la pantalla de inicio del teléfono.',
    exitWebHint: 'Cierra esta pestaña para salir del juego.',
    done: 'Listo',
    title: 'Configuración', audio: 'Audio', sound: 'Sonido',
    soundOn: 'Los efectos de sonido están activados', soundOff: 'Los efectos de sonido están desactivados',
    music: 'Música de fondo',
    musicOn: 'La música de fondo relajante está activada',
    musicOff: 'La música de fondo está desactivada',
    game: 'Juego', reset: 'Restablecer progreso',
    resetSubtitle: 'Borrar puntuaciones, progreso y logros',
    information: 'Información', about: 'Acerca de Bible Challenge',
    aboutSubtitle: 'Versión e información del desarrollador', back: 'Volver',
    confirmTitle: '¿Restablecer todo el progreso?',
    confirmText: 'Esto borrará permanentemente tu progreso, puntuaciones y logros. Esta acción no se puede deshacer.',
    cancel: 'Cancelar', confirm: 'Sí, restablecer',
    account: 'Cuenta', deleteAccount: 'Eliminar cuenta',
    deleteAccountSubtitle: 'Eliminar permanentemente tu cuenta de Bible Challenge',
    deleteAccountTitle: '¿Eliminar tu cuenta?',
    deleteAccountText: 'Esto elimina permanentemente tu cuenta de inicio de sesión de Bible Challenge. Esta acción no se puede deshacer.',
    deleteAccountConfirm: 'Sí, eliminar', deletingAccount: 'Eliminando...',
    deleteAccountError: 'No pudimos eliminar tu cuenta. Vuelve a iniciar sesión e inténtalo de nuevo.',
  },
  pt: {
    exitApp: 'Sair do aplicativo',
    exitSubtitle: 'Sair sem encerrar a sessão',
    exitTitle: 'Sair do Bible Challenge?',
    exitText: 'Sua conta e seu progresso serão mantidos.',
    exitConfirm: 'Sair',
    exitWebMessage: 'Agora você pode fechar esta aba ou voltar à tela inicial do telefone.',
    exitWebHint: 'Feche esta aba para sair do jogo.',
    done: 'Concluído',
    title: 'Configurações', audio: 'Áudio', sound: 'Som',
    soundOn: 'Os efeitos sonoros estão ativados', soundOff: 'Os efeitos sonoros estão desativados',
    music: 'Música de fundo',
    musicOn: 'A música de fundo relaxante está ativada',
    musicOff: 'A música de fundo está desativada',
    game: 'Jogo', reset: 'Redefinir progresso',
    resetSubtitle: 'Apagar pontuações, progresso e conquistas',
    information: 'Informações', about: 'Sobre Bible Challenge',
    aboutSubtitle: 'Versão e informações do desenvolvedor', back: 'Voltar',
    confirmTitle: 'Redefinir todo o progresso?',
    confirmText: 'Isso apagará permanentemente seu progresso, suas pontuações e suas conquistas. Esta ação não pode ser desfeita.',
    cancel: 'Cancelar', confirm: 'Sim, redefinir',
    account: 'Conta', deleteAccount: 'Excluir conta',
    deleteAccountSubtitle: 'Excluir permanentemente sua conta do Bible Challenge',
    deleteAccountTitle: 'Excluir sua conta?',
    deleteAccountText: 'Isso exclui permanentemente sua conta de login do Bible Challenge. Esta ação não pode ser desfeita.',
    deleteAccountConfirm: 'Sim, excluir', deletingAccount: 'Excluindo...',
    deleteAccountError: 'Não foi possível excluir sua conta. Entre novamente e tente outra vez.',
  },
} as const;

export default function Settings() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const {
    isMuted,
    toggleMute,
    isMusicEnabled,
    toggleMusic,
    playClick,
    stopAllSound,
  } = useSound();
  const { resetAllProgress } = useGameState();
  const { clearAll } = useAchievementsStore();
  const { user } = useAuth();
  const [confirmingReset, setConfirmingReset] = useState(false);
  const [confirmingExit, setConfirmingExit] = useState(false);
  const [webExitMessage, setWebExitMessage] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [deletingAccount, setDeletingAccount] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const text = copy[language as keyof typeof copy] ?? copy.en;

  const goBack = () => { playClick(); setLocation('/'); };
  const openAbout = () => { playClick(); setLocation('/about'); };
  const confirmExit = async () => {
    stopAllSound();
    setConfirmingExit(false);
    // Keep the goodbye screen visible if the browser cannot close itself.
    setWebExitMessage(true);
    if (Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'android') {
      try {
        await CapacitorApp.exitApp();
      } catch (error) {
        console.error('[Exit] Unable to close Android app:', error);
      }
    }
  };

  const openResetConfirmation = () => { playClick(); setConfirmingReset(true); };
  const closeResetConfirmation = () => { playClick(); setConfirmingReset(false); };
  const confirmReset = () => {
    playClick();
    resetAllProgress();
    clearAll();
    setConfirmingReset(false);
  };

  const openDeleteConfirmation = () => {
    playClick();
    setDeleteError(null);
    setConfirmingDelete(true);
  };

  const closeDeleteConfirmation = () => {
    if (deletingAccount) return;
    playClick();
    setDeleteError(null);
    setConfirmingDelete(false);
  };

  const confirmDeleteAccount = async () => {
    playClick();
    setDeletingAccount(true);
    setDeleteError(null);
    try {
      await deleteCurrentUserAccount();
      setConfirmingDelete(false);
      setLocation('/');
    } catch (error) {
      console.error('[Account] Delete failed:', error);
      setDeleteError(text.deleteAccountError);
    } finally {
      setDeletingAccount(false);
    }
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

          <motion.button
            type="button"
            whileTap={{ scale: 0.985 }}
            onClick={toggleMusic}
            className="mt-3 flex w-full items-center gap-4 rounded-2xl border border-white/20 bg-slate-950/35 p-4 text-left shadow-xl backdrop-blur-md transition-colors hover:bg-slate-950/45"
            aria-pressed={isMusicEnabled}
            data-testid="settings-music-toggle"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
              <Music2 size={24} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-lg font-bold text-white">{text.music}</span>
              <span className="block text-sm text-white/60">
                {isMusicEnabled ? text.musicOn : text.musicOff}
              </span>
            </span>
            <span
              aria-hidden="true"
              className={`relative h-7 w-12 shrink-0 rounded-full border transition-colors ${
                isMusicEnabled
                  ? 'border-emerald-300/60 bg-emerald-500/80'
                  : 'border-white/20 bg-black/30'
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
                  isMusicEnabled ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
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

        {user && (
          <section className="mb-6">
            <h2 className="mb-2 px-2 font-serif text-xs font-black uppercase tracking-[0.22em] text-gold/70">{text.account}</h2>
            <motion.button type="button" whileTap={{ scale: 0.985 }} onClick={openDeleteConfirmation}
              className="flex w-full items-center gap-4 rounded-2xl border border-red-400/25 bg-slate-950/35 p-4 text-left shadow-xl backdrop-blur-md transition-colors hover:bg-red-950/20"
              data-testid="settings-delete-account">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-400/30 bg-red-500/10 text-red-300"><UserX size={23} /></span>
              <span className="min-w-0 flex-1">
                <span className="block font-serif text-lg font-bold text-white">{text.deleteAccount}</span>
                <span className="block text-sm text-white/60">{text.deleteAccountSubtitle}</span>
              </span>
              <ChevronRight size={21} className="shrink-0 text-white/45" />
            </motion.button>
          </section>
        )}

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

        <section className="mb-7">
          <motion.button type="button" whileTap={{ scale: 0.985 }} onClick={() => { playClick(); setConfirmingExit(true); }}
            className="flex w-full items-center gap-4 rounded-2xl border border-gold/30 bg-slate-950/35 p-4 text-left shadow-xl backdrop-blur-md transition-colors hover:bg-slate-950/45"
            data-testid="settings-exit-app">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><LogOut size={24} /></span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-lg font-bold text-white">{text.exitApp}</span>
              <span className="block text-sm text-white/60">{text.exitSubtitle}</span>
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
        {confirmingExit && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setConfirmingExit(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm">
            <motion.div role="alertdialog" aria-modal="true" aria-labelledby="exit-dialog-title" aria-describedby="exit-dialog-description"
              initial={{ opacity: 0, scale: 0.88, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.88, y: 12 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-sm rounded-3xl border border-gold/35 bg-slate-950 p-7 text-center shadow-2xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold"><LogOut size={28} /></div>
              <h2 id="exit-dialog-title" className="mb-3 font-serif text-2xl font-black text-white">{text.exitTitle}</h2>
              <p id="exit-dialog-description" className="mb-7 text-sm leading-6 text-white/65">{text.exitText}</p>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setConfirmingExit(false)} className="min-w-0 rounded-xl border border-white/30 px-3 py-3 font-serif font-bold text-white">{text.cancel}</button>
                <button type="button" onClick={confirmExit} className="min-w-0 rounded-xl border border-amber-400 bg-amber-400 px-3 py-3 font-serif font-black text-slate-950" style={{ backgroundColor: "#fbbf24", color: "#0f172a", opacity: 1, visibility: "visible" }} data-testid="settings-confirm-exit">{text.exitConfirm}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
        {webExitMessage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 px-5 backdrop-blur-sm">
            <motion.div role="dialog" aria-modal="true" aria-labelledby="exit-web-title"
              className="w-full max-w-sm rounded-3xl border border-gold/35 bg-slate-950 p-7 text-center shadow-2xl">
              <h2 id="exit-web-title" className="mb-3 font-serif text-2xl font-black text-white">{text.exitApp}</h2>
              <p className="mb-3 text-sm leading-6 text-white/75">{text.exitWebMessage}</p>
              <p className="mb-7 text-sm text-white/55">{text.exitWebHint}</p>

            </motion.div>
          </motion.div>
        )}
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

        {confirmingDelete && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeDeleteConfirmation}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm">
            <motion.div role="alertdialog" aria-modal="true"
              aria-labelledby="delete-account-dialog-title" aria-describedby="delete-account-dialog-description"
              initial={{ opacity: 0, scale: 0.88, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 12 }} onClick={(event) => event.stopPropagation()}
              className="w-full max-w-sm rounded-3xl border border-red-400/35 bg-slate-950 p-7 text-center shadow-2xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-red-400/35 bg-red-500/10 text-red-300"><UserX size={28} /></div>
              <h2 id="delete-account-dialog-title" className="mb-3 font-serif text-2xl font-black text-white">{text.deleteAccountTitle}</h2>
              <p id="delete-account-dialog-description" className="mb-4 text-sm leading-6 text-white/65">{text.deleteAccountText}</p>
              {deleteError && <p className="mb-4 rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">{deleteError}</p>}
              <div className="flex gap-3">
                <button type="button" onClick={closeDeleteConfirmation} disabled={deletingAccount}
                  className="flex-1 rounded-xl border border-white/20 px-4 py-3 font-serif font-bold text-white/80 transition-colors hover:bg-white/5 disabled:opacity-50">{text.cancel}</button>
                <button type="button" onClick={confirmDeleteAccount} disabled={deletingAccount}
                  className="flex-1 rounded-xl bg-red-600 px-4 py-3 font-serif font-black text-white transition-colors hover:bg-red-500 disabled:opacity-60"
                  data-testid="settings-confirm-delete-account">{deletingAccount ? text.deletingAccount : text.deleteAccountConfirm}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
