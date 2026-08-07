import { useState } from 'react';
import { Eye, EyeOff, LogIn, UserPlus, ArrowLeft, Mail, Lock } from 'lucide-react';
import { useLocation } from 'wouter';
import { loginUser } from '../lib/authService';
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
    noAccount: "Don't have an account?",
    createAccount: 'Create Account',
    home: 'Return Home',
    invalid: 'Please enter your email and password.',
    failed: 'Unable to sign in. Please check your email and password.',
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
    noAccount: "Vous n'avez pas de compte ?",
    createAccount: 'Créer un compte',
    home: "Retour à l'accueil",
    invalid: 'Veuillez entrer votre courriel et votre mot de passe.',
    failed: 'Connexion impossible. Vérifiez votre courriel et votre mot de passe.',
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
    noAccount: '¿No tienes una cuenta?',
    createAccount: 'Crear cuenta',
    home: 'Volver al inicio',
    invalid: 'Ingresa tu correo electrónico y contraseña.',
    failed: 'No se pudo iniciar sesión. Verifica tu correo y contraseña.',
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
    noAccount: 'Ainda não tem uma conta?',
    createAccount: 'Criar conta',
    home: 'Voltar ao início',
    invalid: 'Digite seu e-mail e sua senha.',
    failed: 'Não foi possível entrar. Verifique seu e-mail e sua senha.',
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
  const [error, setError] = useState('');

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!email.trim() || !password) {
      setError(text.invalid);
      return;
    }

    setLoading(true);

    try {
      await loginUser(email.trim(), password);
      setLocation('/');
    } catch (err) {
      console.error('[Firebase Auth] Login failed.', err);
      setError(text.failed);
    } finally {
      setLoading(false);
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

            <h1 className="font-serif text-3xl font-black uppercase tracking-wide text-amber-200">
              {text.title}
            </h1>

            <p className="mt-2 text-sm leading-6 text-white/70">
              {text.subtitle}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5 px-6 py-7">
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-bold text-white"
              >
                {text.email}
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

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
              <label
                htmlFor="login-password"
                className="mb-2 block text-sm font-bold text-white"
              >
                {text.password}
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

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
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-400/40 bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-100"
              >
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
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                or
              </span>
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
    </main>
  );
}
