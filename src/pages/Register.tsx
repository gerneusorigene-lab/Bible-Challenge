import { useState } from 'react';
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  UserPlus,
} from 'lucide-react';
import { useLocation } from 'wouter';

import { registerUser } from '../lib/authService';
import { useLanguage } from '@/hooks/useLanguage';

const copy = {
  en: {
    title: 'Create Account',
    subtitle: 'Create your free Bible Challenge account.',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    password: 'Password',
    passwordPlaceholder: 'Create a password',
    create: 'Create Account',
    creating: 'Creating...',
    already: 'Already have an account?',
    signIn: 'Sign In',
    home: 'Return Home',
    required: 'Please enter your name, email, and password.',
    passwordShort: 'Password must be at least 6 characters.',
    failed: 'Unable to create your account. Please try again.',
  },
  fr: {
    title: 'Créer un compte',
    subtitle: 'Créez votre compte Bible Challenge gratuit.',
    name: 'Nom',
    namePlaceholder: 'Votre nom',
    email: 'Courriel',
    emailPlaceholder: 'vous@exemple.com',
    password: 'Mot de passe',
    passwordPlaceholder: 'Créez un mot de passe',
    create: 'Créer un compte',
    creating: 'Création...',
    already: 'Vous avez déjà un compte ?',
    signIn: 'Se connecter',
    home: "Retour à l'accueil",
    required: 'Veuillez entrer votre nom, votre courriel et votre mot de passe.',
    passwordShort: 'Le mot de passe doit contenir au moins 6 caractères.',
    failed: 'Impossible de créer votre compte. Veuillez réessayer.',
  },
} as const;

export default function Register() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();

  const text = language === 'fr' ? copy.fr : copy.en;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password) {
      setError(text.required);
      return;
    }

    if (password.length < 6) {
      setError(text.passwordShort);
      return;
    }

    setLoading(true);

    try {
      await registerUser(name.trim(), email.trim(), password);
      setLocation('/');
    } catch (err) {
      console.error('[Firebase Auth] Registration failed.', err);
      setError(text.failed);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden sacred-gradient px-4 py-16">
      <section className="relative z-10 w-full max-w-md">
        <div className="overflow-hidden rounded-[2rem] border border-amber-200/40 bg-slate-950/70 shadow-2xl backdrop-blur-xl">
          <div className="border-b border-amber-200/20 bg-gradient-to-r from-blue-900/80 via-indigo-900/80 to-violet-900/80 px-6 py-7 text-center">
            <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-2xl border border-amber-200/40 bg-amber-300/10 text-amber-300">
              <UserPlus size={28} />
            </div>

            <h1 className="font-serif text-3xl font-black uppercase tracking-wide text-amber-200">
              {text.title}
            </h1>

            <p className="mt-2 text-sm leading-6 text-white/70">
              {text.subtitle}
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5 px-6 py-7">
            <div>
              <label
                htmlFor="register-name"
                className="mb-2 block text-sm font-bold text-white"
              >
                {text.name}
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  id="register-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  placeholder={text.namePlaceholder}
                  className="h-12 w-full rounded-xl border-2 border-white/30 bg-white pl-12 pr-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-300/15"
                  data-testid="register-name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="register-email"
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
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  placeholder={text.emailPlaceholder}
                  className="h-12 w-full rounded-xl border-2 border-white/30 bg-white pl-12 pr-4 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-300/15"
                  data-testid="register-email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="register-password"
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
                  id="register-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="new-password"
                  placeholder={text.passwordPlaceholder}
                  className="h-12 w-full rounded-xl border-2 border-white/30 bg-white pl-12 pr-12 text-base font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-300/15"
                  data-testid="register-password"
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
              data-testid="register-submit"
            >
              <UserPlus size={19} />
              {loading ? text.creating : text.create}
            </button>

            <div className="text-center">
              <p className="text-sm text-white/65">{text.already}</p>

              <button
                type="button"
                onClick={() => setLocation('/login')}
                className="mt-3 inline-flex items-center gap-2 rounded-xl border border-violet-300/50 bg-violet-500/15 px-5 py-3 font-serif text-sm font-black uppercase tracking-wider text-violet-100 transition hover:bg-violet-500/25"
                data-testid="register-sign-in"
              >
                {text.signIn}
              </button>
            </div>
          </form>
        </div>

        <button
          type="button"
          onClick={() => setLocation('/')}
          className="mx-auto mt-5 flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/35 px-5 py-2.5 text-sm font-bold text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white"
          data-testid="register-home"
        >
          <ArrowLeft size={17} />
          {text.home}
        </button>
      </section>
    </main>
  );
}
