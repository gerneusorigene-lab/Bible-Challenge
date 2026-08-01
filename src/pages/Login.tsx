import { useState } from "react";
import { useLocation, useSearch } from "wouter";
import { motion } from "framer-motion";
import { signInWithGoogle, signInWithEmail } from "../lib/authService";
import { useLanguage } from "@/hooks/useLanguage";
import type { TranslationKey } from "@/i18n/translations";

export default function Login() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const next = params.get("next") ?? "/";
  const { t } = useLanguage();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Email/password form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleGoogleSignIn() {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate(next, { replace: true });
    } catch (err: unknown) {
      const key = err instanceof Error ? err.message : "sign_in_error_generic";
      setError(t(key as TranslationKey));
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmail(email.trim(), password);
      navigate(next, { replace: true });
    } catch (err: unknown) {
      const key = err instanceof Error ? err.message : "sign_in_error_generic";
      setError(t(key as TranslationKey));
    } finally {
      setLoading(false);
    }
  }

  const isPurchaseFlow = next === "/paywall";

  return (
    <main className="relative min-h-[100dvh] overflow-hidden sacred-gradient flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm text-center"
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-slate-950/40 shadow-xl backdrop-blur">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-10 w-10 text-gold"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="mb-2 font-serif text-3xl font-black uppercase tracking-[0.12em] text-gold drop-shadow-lg">
          {t("sign_in")}
        </h1>

        {/* Context-aware subtitle */}
        <p className="mb-8 text-sm text-white/60 leading-relaxed">
          {isPurchaseFlow
            ? t("login_purchase_subtitle")
            : t("login_default_subtitle")}
        </p>

        {/* Google button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white px-5 py-4 font-serif text-base font-bold text-slate-800 shadow-xl transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {/* Google "G" logo */}
          <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
            <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z"/>
          </svg>
          {loading ? t("signing_in") : t("continue_with_google")}
        </motion.button>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-xs uppercase tracking-widest text-white/40">{t("or")}</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        {/* Email / password form */}
        <form onSubmit={handleEmailSignIn} noValidate className="space-y-3 text-left">
          <div>
            <label htmlFor="login-email" className="sr-only">{t("email")}</label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("email")}
              className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/40 disabled:opacity-60 transition"
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="login-password" className="sr-only">{t("password")}</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("password")}
              className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/40 disabled:opacity-60 transition"
              disabled={loading}
            />
          </div>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={loading || !email || !password}
            className="w-full rounded-2xl border border-gold/50 bg-gold/10 px-5 py-4 font-serif text-base font-bold text-gold shadow-xl transition-opacity hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? t("signing_in") : t("sign_in")}
          </motion.button>
        </form>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-xl border border-red-400/30 bg-red-950/40 px-4 py-3 text-sm text-red-300"
          >
            {error}
          </motion.p>
        )}

        {/* Back / skip link — hidden during purchase flow since account is required */}
        {!isPurchaseFlow && (
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-8 text-sm text-white/40 underline-offset-2 hover:text-white/70 hover:underline transition-colors"
          >
            {t("continue_without_signing_in")}
          </button>
        )}

        {isPurchaseFlow && (
          <button
            type="button"
            onClick={() => window.history.back()}
            className="mt-8 text-sm text-white/40 underline-offset-2 hover:text-white/70 hover:underline transition-colors"
          >
            {t("go_back")}
          </button>
        )}

        {/* Forgot password */}
        <button
          type="button"
          onClick={() => navigate("/forgot-password")}
          className="mt-4 block w-full text-sm text-white/40 underline-offset-2 hover:text-white/70 hover:underline transition-colors"
        >
          {t("forgot_password")}
        </button>

        {/* Switch to create account */}
        <button
          type="button"
          onClick={() => navigate(`/register${search ? `?${search}` : ""}`)}
          className="mt-4 block w-full text-sm text-white/40 underline-offset-2 hover:text-white/70 hover:underline transition-colors"
        >
          {t("no_account_yet")}
        </button>
      </motion.div>
    </main>
  );
}
