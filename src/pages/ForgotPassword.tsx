import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { sendPasswordReset } from "../lib/authService";
import { useLanguage } from "@/hooks/useLanguage";
import type { TranslationKey } from "@/i18n/translations";

export default function ForgotPassword() {
  const [, navigate] = useLocation();
  const { t } = useLanguage();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await sendPasswordReset(email.trim());
      setSent(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        const key = err.message as TranslationKey;
        // t() returns the raw key when there is no matching translation;
        // treat that the same as "not found" and fall back to the generic message.
        const resolved = t(key);
        setError(resolved !== err.message ? resolved : t("reset_email_error_generic"));
      } else {
        setError(t("reset_email_error_generic"));
      }
    } finally {
      setLoading(false);
    }
  }

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
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="mb-2 font-serif text-3xl font-black uppercase tracking-[0.12em] text-gold drop-shadow-lg">
          {t("forgot_password_title")}
        </h1>

        <p className="mb-8 text-sm text-white/60 leading-relaxed">
          {t("forgot_password_subtitle")}
        </p>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-green-400/30 bg-green-950/40 px-4 py-5 text-sm text-green-300 leading-relaxed"
          >
            {t("reset_email_sent").replace("{email}", email.trim())}
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3 text-left">
            <div>
              <label htmlFor="reset-email" className="sr-only">{t("email")}</label>
              <input
                id="reset-email"
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
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={loading || !email}
              className="w-full rounded-2xl border border-gold/50 bg-gold/10 px-5 py-4 font-serif text-base font-bold text-gold shadow-xl transition-opacity hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? t("sending") : t("send_reset_link")}
            </motion.button>
          </form>
        )}

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

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-8 text-sm text-white/40 underline-offset-2 hover:text-white/70 hover:underline transition-colors"
        >
          {t("back_to_sign_in")}
        </button>
      </motion.div>
    </main>
  );
}
