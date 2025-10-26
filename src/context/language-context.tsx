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
    // Sépare la clé (ex: "hero.title") en parties
    const keys = key.split('.');
    let result: any = translations[locale]; // Commence au bon niveau du dictionnaire (en ou fr)

    // Navigue dans l'objet (translations.en.hero.title)
    for (const k of keys) {
      result = result?.[k];
      if (!result) {
        console.warn(`No translation found for key: ${key} in locale: ${locale}`);
        return key; // Renvoie la clé si non trouvée
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