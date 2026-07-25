import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import {
  translations,
  Language,
  TranslationKey,
} from "@/i18n/translations";

type TranslationValues = Record<string, string | number>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, values?: TranslationValues) => string;
}

const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");

    if (
      saved === "en" ||
      saved === "fr" ||
      saved === "es" ||
      saved === "pt"
    ) {
      return saved;
    }

    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

 const t = (key: TranslationKey) => {
  return (
    translations[language][key] ??
    translations.en[key] ??
    key
  );
 };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used within LanguageProvider"
    );
  }

  return context;
}