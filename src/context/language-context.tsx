"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { translations } from "@/lib/translations";

// Définit le type de langue (soit 'en', soit 'fr')
export type Locale = "en" | "fr";

// Ce que notre contexte va fournir
interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  // 't' sera notre fonction de traduction
  t: (key: string) => string; 
}

// Crée le contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Crée le "Provider" (le fournisseur)
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en"); // Langue par défaut : anglais

  // La fonction magique de traduction
const t = (key: string) => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let result: any = translations[locale]; 

    for (const k of keys) {
      result = result?.[k];
      if (!result) {
        console.warn(`No translation found for key: ${key} in locale: ${locale}`);
        return key;
      }
    }
    return result as string;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Crée un "Hook" pour l'utiliser facilement
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}