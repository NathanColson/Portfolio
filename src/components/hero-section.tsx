"use client";

import { useLanguage } from "@/context/language-context"; // Le hook de traduction
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, GraduationCap, Mail } from "lucide-react";

// La fonction pour scroller en douceur
const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// --- MODIFICATION 1 ---
// On met les "clés de traduction" ici (de simples strings)
// au lieu d'essayer d'appeler t()
const infoSnippets = [
  {
    icon: <GraduationCap size={16} />,
    translationKey: "hero.studyRN",
  },
  {
    icon: <MapPin size={16} />,
    translationKey: "hero.location",
  },
  {
    icon: <Briefcase size={16} />,
    translationKey: "hero.role",
  },
];

export function HeroSection() {
  // On récupère la fonction 't' de notre contexte
  const { t } = useLanguage(); 

  return (
    // Les classes d'origine pour le conteneur principal
    <div className="w-full max-w-5xl min-h-[80vh] flex flex-col justify-center text-left py-16 md:py-0">
      
      {/* Nom */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
        {t("hero.title")} {/* Traduit */}
      </h1>

      {/* Description */}
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
        {t("hero.description")} {/* Traduit */}
      </p>

      {/* Boutons CTA */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button 
          size="lg" 
          className="text-lg px-8 py-6"
          onClick={() => scrollTo("projects")}
        >
          {t("hero.projectsButton")} {/* Traduit */}
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="text-lg px-8 py-6"
          onClick={() => window.open("/path-to-your-cv.pdf", "_blank")}
        >
          {t("header.cvButton")} {/* Traduit (réutilise la clé du header) */}
        </Button>
      </div>
      
      {/* Petites infos (comme avant) */}
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        
        {/* --- MODIFICATION 2 ---
            1. On utilise 'item.translationKey' pour la 'key' React (c'est plus stable).
            2. On appelle 't(item.translationKey)' ICI pour afficher le texte traduit.
        */}
        {infoSnippets.map((item) => (
          <div 
            key={item.translationKey} 
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            {item.icon}
            <span>{t(item.translationKey)}</span>
          </div>
        ))}
        
        <a 
          href="mailto:colsonnathan03@gmail.com"
          className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          <Mail size={16} />
          {/* Tu peux aussi traduire ton email si tu veux, ou le laisser tel quel */}
          <span>colsonnathan03@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
