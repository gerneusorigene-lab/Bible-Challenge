import type { Language } from '@/i18n/translations';

export type LocalizedText = {
  en: string;
  fr: string;
  es?: string;
  pt?: string;
};

/**
 * Returns the requested translation.
 * Falls back to English, then French, when a translation is unavailable.
 */
export function getLocalizedText(
  value: LocalizedText | undefined,
  language: Language,
): string {
  if (!value) return '';

  return value[language] ?? value.en ?? value.fr ?? '';
}