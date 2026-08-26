import { useState } from 'react';
import {
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  ArrowLeft,
  Mail,
  Lock,
  KeyRound,
  X,
} from 'lucide-react';
import { useLocation } from 'wouter';
import {
  loginUser,
  resetPassword,
  changePassword,
} from '../lib/authService';
import { useLanguage } from '@/hooks/useLanguage';

const copy = {
  en: {
    title: 'Welcome Back',
    subtitle: 'Sign in to continue your Bible Challenge journey.',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    signIn: 'Sign In',
    signingIn: 'Signing In...',
    forgotPassword: 'Forgot password?',
    changePassword: 'Change password',
    resetSending: 'Sending reset email...',
    resetSent: 'Password reset email sent. Please check your inbox.',
    resetNeedEmail: 'Enter your email address first.',
    resetFailed: 'Unable to send the password reset email. Please verify the email address and try again.',
    noAccount: "Don't have an account?",
    createAccount: 'Create Account',
    home: 'Return Home',
    invalid: 'Please enter your email and password.',
    failed: 'Unable to sign in. Please check your email and password.',
    changeTitle: 'Change Password',
    currentPassword: 'Current password',
    newPassword: 'New password',
    confirmPassword: 'Confirm new password',
    updatePassword: 'Update Password',
    updatingPassword: 'Updating...',
    changeNeedEmail: 'Enter your email address first.',
    changeNeedCurrent: 'Enter your current password.',
    changeNeedNew: 'Enter and confirm your new password.',
    changeMismatch: 'The new passwords do not match.',
    changeTooShort: 'The new password must be at least 6 characters.',
    changeSuccess: 'Password changed successfully.',
    changeFailed: 'Unable to change the password. Please verify your current password and try again.',
    close: 'Close',
  },
  fr: {
    title: 'Bon retour',
    subtitle: 'Connectez-vous pour poursuivre votre parcours Bible Challenge.',
    email: 'Courriel',
    emailPlaceholder: 'vous@exemple.com',
    password: 'Mot de passe',
    passwordPlaceholder: 'Entrez votre mot de passe',
    signIn: 'Se connecter',
    signingIn: 'Connexion...',
    forgotPassword: 'Mot de passe oublié ?',
    changePassword: 'Changer le mot de passe',
    resetSending: 'Envoi du courriel...',
    resetSent: 'Courriel de réinitialisation envoyé. Veuillez vérifier votre boîte de réception.',
    resetNeedEmail: "Entrez d'abord votre adresse courriel.",
    resetFailed: "Impossible d'envoyer le courriel de réinitialisation. Vérifiez l'adresse et réessayez.",
    noAccount: "Vous n'avez pas de compte ?",
    createAccount: 'Créer un compte',
    home: "Retour à l'accueil",
    invalid: 'Veuillez entrer votre courriel et votre mot de passe.',
    failed: 'Connexion impossible. Vérifiez votre courriel et votre mot de passe.',
    changeTitle: 'Changer le mot de passe',
    currentPassword: 'Mot de passe actuel',
    newPassword: 'Nouveau mot de passe',
    confirmPassword: 'Confirmer le nouveau mot de passe',
    updatePassword: 'Mettre à jour',
    updatingPassword: 'Mise à jour...',
    changeNeedEmail: "Entrez d'abord votre adresse courriel.",
    changeNeedCurrent: 'Entrez votre mot de passe actuel.',
    changeNeedNew: 'Entrez et confirmez votre nouveau mot de passe.',
    changeMismatch: 'Les nouveaux mots de passe ne correspondent pas.',
    changeTooShort: 'Le nouveau mot de passe doit contenir au moins 6 caractères.',
    changeSuccess: 'Mot de passe modifié avec succès.',
    changeFailed: "Impossible de modifier le mot de passe. Vérifiez votre mot de passe actuel et réessayez.",
    close: 'Fermer',
  },
  es: {
    title: 'Bienvenido de nuevo',
    subtitle: 'Inicia sesión para continuar tu recorrido en Bible Challenge.',
    email: 'Correo electrónico',
    emailPlaceholder: 'tu@ejemplo.com',
    password: 'Contraseña',
    passwordPlaceholder: 'Ingresa tu contraseña',
    signIn: 'Iniciar sesión',
    signingIn: 'Iniciando...',
    forgotPassword: '¿Olvidaste tu contraseña?',
    changePassword: 'Cambiar contraseña',
    resetSending: 'Enviando correo...',
    resetSent: 'Correo de restablecimiento enviado. Revisa tu bandeja de entrada.',
    resetNeedEmail: 'Ingresa primero tu correo electrónico.',
    resetFailed: 'No se pudo enviar el correo de restablecimiento. Verifica la dirección e inténtalo de nuevo.',
    noAccount: '¿No tienes una cuenta?',
    createAccount: 'Crear cuenta',
    home: 'Volver al inicio',
    invalid: 'Ingresa tu correo electrónico y contraseña.',
    failed: 'No se pudo iniciar sesión. Verifica tu correo y contraseña.',
    changeTitle: 'Cambiar contraseña',
    currentPassword: 'Contraseña actual',
    newPassword: 'Nueva contraseña',
    confirmPassword: 'Confirmar nueva contraseña',
    updatePassword: 'Actualizar contraseña',
    updatingPassword: 'Actualizando...',
    changeNeedEmail: 'Ingresa primero tu correo electrónico.',
    changeNeedCurrent: 'Ingresa tu contraseña actual.',
    changeNeedNew: 'Ingresa y confirma tu nueva contraseña.',
    changeMismatch: 'Las nuevas contraseñas no coinciden.',
    changeTooShort: 'La nueva contraseña debe tener al menos 6 caracteres.',
    changeSuccess: 'Contraseña cambiada correctamente.',
    changeFailed: 'No se pudo cambiar la contraseña. Verifica tu contraseña actual e inténtalo de nuevo.',
    close: 'Cerrar',
  },
  pt: {
    title: 'Bem-vindo de volta',
    subtitle: 'Entre para continuar sua jornada no Bible Challenge.',
    email: 'E-mail',
    emailPlaceholder: 'voce@exemplo.com',
    password: 'Senha',
    passwordPlaceholder: 'Digite sua senha',
    signIn: 'Entrar',
    signingIn: 'Entrando...',
    forgotPassword: 'Esqueceu sua senha?',
    changePassword: 'Alterar senha',
    resetSending: 'Enviando e-mail...',
    resetSent: 'E-mail de redefinição enviado. Verifique sua caixa de entrada.',
    resetNeedEmail: 'Digite primeiro seu e-mail.',
    resetFailed: 'Não foi possível enviar o e-mail de redefinição. Verifique o endereço e tente novamente.',
    noAccount: 'Ainda não tem uma conta?',
    createAccount: 'Criar conta',
    home: 'Voltar ao início',
    invalid: 'Digite seu e-mail e sua senha.',
    failed: 'Não foi possível entrar. Verifique seu e-mail e sua senha.',
    changeTitle: 'Alterar senha',
    currentPassword: 'Senha atual',
    newPassword: 'Nova senha',
    confirmPassword: 'Confirmar nova senha',
    updatePassword: 'Atualizar senha',
    updatingPassword: 'Atualizando...',
    changeNeedEmail: 'Digite primeiro seu e-mail.',
    changeNeedCurrent: 'Digite sua senha atual.',
    changeNeedNew: 'Digite e confirme sua nova senha.',
    changeMismatch: 'As novas senhas não coincidem.',
    changeTooShort: 'A nova senha deve ter pelo menos 6 caracteres.',
    changeSuccess: 'Senha alterada com sucesso.',
    changeFailed: 'Não foi possível alterar a senha. Verifique sua senha atual e tente novamente.',
    close: 'Fechar',
  },
} as const;

export default function Login() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const text = copy[language as keyof typeof copy] ?? copy.en;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [changeError, setChangeError] = useState('');
  const [changeMessage, setChangeMessage] = useState('');

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setMessage('');
    if (!email.trim() || !password) {
      setError(text.invalid);
      return;
    }
    setLoading(true);
    try {
      await loginUser(email.trim(), password);
      setLocation('/');
    } catch (err: unknown) {
  console.error('[Firebase Auth] Login failed.', err);

  const firebaseError = err as {
    code?: string;
    message?: string;
  };

  const code = firebaseError?.code ?? 'unknown';
  const message = firebaseError?.message ?? 'No Firebase error message';

  console.error('[Firebase Auth] Error code:', code);
  console.error('[Firebase Auth] Error message:', message);

  setError(`${text.failed} [${code}]`);
} finally {
  setLoading(false);
}
  }

  async function handleForgotPassword() {
    setError('');
    setMessage('');
    const normalizedEmail = email.trim();
    if (!normalizedEmail) {
      setError(text.resetNeedEmail);
      return;
    }
    setResettingPassword(true);
    try {
      await resetPassword(normalizedEmail);
      setMessage(text.resetSent);
    } catch (err) {
      console.error('[Firebase Auth] Password reset failed.', err);
      setError(text.resetFailed);
    } finally {
      setResettingPassword(false);
    }
  }

  function handleOpenChangePassword() {
    setError('');
    setMessage('');
    setChangeError('');
    setChangeMessage('');
    if (!email.trim()) {
      setError(text.changeNeedEmail);
      return;
    }
    setShowChangePassword(true);
  }

  function handleCloseChangePassword() {
    if (changingPassword) return;
    setShowChangePassword(false);
    setNewPassword('');
    setConfirmNewPassword('');
    setChangeError('');
    setChangeMessage('');
  }

  async function handleChangePassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChangeError('');
    setChangeMessage('');

    if (!email.trim()) {
      setChangeError(text.changeNeedEmail);
      return;
    }
    if (!password) {
      setChangeError(text.changeNeedCurrent);
      return;
    }
    if (!newPassword || !confirmNewPassword) {
      setChangeError(text.changeNeedNew);
      return;
    }
    if (newPassword.length < 6) {
      setChangeError(text.changeTooShort);
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setChangeError(text.changeMismatch);
      return;
    }

    setChangingPassword(true);
    try {
      await changePassword(email.trim(), password, newPassword);
      setPassword(newPassword);
      setNewPassword('');
      setConfirmNewPassword('');
      setChangeMessage(text.changeSuccess);
    } catch (err) {
      console.error('[Firebase Auth] Change password failed.', err);
      setChangeError(text.changeFailed);
    } finally {
      setChangingPassword(false);
    }
  }

  return (
    <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden sacred-gradient px-4 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute left-[12%] top-[16%] h-40 w-40 rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute bottom-[10%] right-[12%] h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <section className="relative z-10 w-full max-w-md">
        <div className="overflow-hidden rounded-[2rem] border border-amber-200/40 bg-slate-950/70 shadow-2xl backdrop-blur-xl">
          <div className="border-b border-amber-200/20 bg-gradient-to-r from-blue-900/80 via-indigo-900/80 to-violet-900/80 px-6 py-7 text-center">
            <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl border border-amber-200/40 bg-amber-300/10 text-amber-300">
              <LogIn size={28} />
            </div>
            <h1 className="font-serif text-3xl font-black uppercase tracking-wide text-amber-200">{text.title}</h1>
            <p className="mt-2 text-sm leading-6 text-white/70">{text.subtitle}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 px-6 py-7">
            <div>
              <label htmlFor="login-email" className="mb-2 block text-sm font-bold text-white">{text.email}</label>
              <div className="relative">
                <Mail size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  placeholder={text.emailPlaceholder}
                  className="h-12 w-full rounded-xl border-2 border-white/30 bg-white pl-12 pr-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-300/15"
                  data-testid="login-email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="login-password" className="mb-2 block text-sm font-bold text-white">{text.password}</label>
              <div className="relative">
                <Lock size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  placeholder={text.passwordPlaceholder}
                  className="h-12 w-full rounded-xl border-2 border-white/30 bg-white pl-12 pr-12 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-300/15"
                  data-testid="login-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-end gap-x-3 gap-y-1">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={resettingPassword}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-200 underline-offset-4 transition hover:text-amber-100 hover:underline disabled:cursor-not-allowed disabled:opacity-60"
                  data-testid="login-forgot-password"
                >
                  <KeyRound size={15} />
                  {resettingPassword ? text.resetSending : text.forgotPassword}
                </button>

                <span className="text-white/30" aria-hidden="true">|</span>

                <button
                  type="button"
                  onClick={handleOpenChangePassword}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-200 underline-offset-4 transition hover:text-violet-100 hover:underline"
                  data-testid="login-change-password"
                >
                  <Lock size={15} />
                  {text.changePassword}
                </button>
              </div>
            </div>

            {message && (
              <div role="status" className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-100">
                {message}
              </div>
            )}

            {error && (
              <div role="alert" className="rounded-xl border border-red-400/40 bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-amber-100/70 bg-gradient-to-b from-amber-300 via-amber-400 to-orange-500 font-serif text-base font-black uppercase tracking-wider text-slate-950 shadow-[0_5px_0_#9a4d00] transition hover:brightness-105 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
              data-testid="login-submit"
            >
              <LogIn size={19} />
              {loading ? text.signingIn : text.signIn}
            </button>

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-white/15" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">or</span>
              <div className="h-px flex-1 bg-white/15" />
            </div>

            <div className="text-center">
              <p className="text-sm text-white/65">{text.noAccount}</p>
              <button
                type="button"
                onClick={() => setLocation('/register')}
                className="mt-3 inline-flex items-center gap-2 rounded-xl border border-violet-300/50 bg-violet-500/15 px-5 py-3 font-serif text-sm font-black uppercase tracking-wider text-violet-100 transition hover:bg-violet-500/25"
                data-testid="login-create-account"
              >
                <UserPlus size={18} />
                {text.createAccount}
              </button>
            </div>
          </form>
        </div>

        <button
          type="button"
          onClick={() => setLocation('/')}
          className="mx-auto mt-5 flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/35 px-5 py-2.5 text-sm font-bold text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
          data-testid="login-home"
        >
          <ArrowLeft size={17} />
          {text.home}
        </button>
      </section>

      {showChangePassword && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm">
          <section className="w-full max-w-md overflow-hidden rounded-[2rem] border border-violet-300/40 bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-blue-900 via-indigo-900 to-violet-900 px-5 py-4">
              <div>
                <h2 className="font-serif text-xl font-black text-amber-200">{text.changeTitle}</h2>
                <p className="mt-1 max-w-[18rem] truncate text-xs text-white/60">{email.trim()}</p>
              </div>
              <button
                type="button"
                onClick={handleCloseChangePassword}
                disabled={changingPassword}
                aria-label={text.close}
                className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
              >
                <X size={19} />
              </button>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4 px-6 py-6">
              <div>
                <label htmlFor="change-current-password" className="mb-2 block text-sm font-bold text-white">{text.currentPassword}</label>
                <input
                  id="change-current-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  className="h-12 w-full rounded-xl border-2 border-white/30 bg-white px-4 text-base font-medium text-slate-950 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-300/15"
                />
              </div>

              <div>
                <label htmlFor="change-new-password" className="mb-2 block text-sm font-bold text-white">{text.newPassword}</label>
                <div className="relative">
                  <input
                    id="change-new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border-2 border-white/30 bg-white px-4 pr-12 text-base font-medium text-slate-950 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-300/15"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword((value) => !value)}
                    className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                  >
                    {showNewPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="change-confirm-password" className="mb-2 block text-sm font-bold text-white">{text.confirmPassword}</label>
                <div className="relative">
                  <input
                    id="change-confirm-password"
                    type={showConfirmNewPassword ? 'text' : 'password'}
                    value={confirmNewPassword}
                    onChange={(event) => setConfirmNewPassword(event.target.value)}
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border-2 border-white/30 bg-white px-4 pr-12 text-base font-medium text-slate-950 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-300/15"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmNewPassword((value) => !value)}
                    className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    aria-label={showConfirmNewPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmNewPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              {changeMessage && (
                <div role="status" className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-100">
                  {changeMessage}
                </div>
              )}

              {changeError && (
                <div role="alert" className="rounded-xl border border-red-400/40 bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-100">
                  {changeError}
                </div>
              )}

              <button
                type="submit"
                disabled={changingPassword}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-amber-100/70 bg-gradient-to-b from-amber-300 via-amber-400 to-orange-500 font-serif text-base font-black uppercase tracking-wider text-slate-950 shadow-[0_5px_0_#9a4d00] transition hover:brightness-105 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60"
                data-testid="change-password-submit"
              >
                <KeyRound size={18} />
                {changingPassword ? text.updatingPassword : text.updatePassword}
              </button>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}
