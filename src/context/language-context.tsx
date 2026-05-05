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
// src/context/language-context.tsx

const t = (key: string) => {
  const keys = key.split('.');
  // On utilise unknown au lieu de any pour satisfaire le linter
  let result: unknown = translations[locale]; 

  for (const k of keys) {
    // On vérifie si result est un objet et contient la clé k
    if (result && typeof result === 'object' && k in (result as Record<string, unknown>)) {
      result = (result as Record<string, unknown>)[k];
    } else {
      console.warn(`No translation found for key: ${key} in locale: ${locale}`);
      return key;
    }
  }
  
  // On s'assure que le résultat final est bien une chaîne de caractères
  return typeof result === 'string' ? result : key;
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