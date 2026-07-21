import en from "./en";
import fr from "./fr";
import es from "./es";
import pt from "./pt";

export const translations = {
  en,
  fr,
  es,
  pt,
} as const;

export type Language = keyof typeof translations;

export type TranslationKey = keyof typeof en;