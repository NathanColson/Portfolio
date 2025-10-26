"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context"; // Le hook de traduction
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

// 1. IMPORTER LES COMPOSANTS MANQUANTS
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription 
} from "@/components/ui/sheet"; // Pour le menu mobile

import { Menu } from "lucide-react"; // L'icône du menu mobile

export function Header() {
  // Gère l'état d'ouverture du menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Récupère les fonctions de traduction
  const { locale, setLocale, t } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "fr" : "en");
  };

  // Une fonction pour fermer le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-[2000px] items-center justify-between px-4 md:px-6">
        
        {/* === Logo / Nom === */}
        <Link href="/" className="font-bold text-lg">
          NathanColson
        </Link>

        {/* === Navigation Desktop === */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="#projects"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {t("header.navProjects")} 
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {t("header.navSkills")}
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {t("header.navContact")}
          </Link>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open("/path-to-your-cv.pdf", "_blank")}
          >
            {t("header.cvButton")}
          </Button>

          {/* Le bouton pour changer de langue */}
          <Button variant="ghost" size="sm" onClick={toggleLanguage}>
            {locale === "en" ? "FR" : "EN"}
          </Button>
          <ThemeToggle />
        </nav>
        
        {/* === Menu Mobile (corrigé et complet) === */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              
              {/* 2. AJOUTER LE TITRE CACHÉ ICI */}
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  {/* On peut même utiliser la traduction ici */}
                  {t("header.mobileNavDescription") || "Main site navigation"}
                </SheetDescription>
              </SheetHeader>
              {/* FIN DE L'AJOUT */}

              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="#projects"
                  onClick={handleLinkClick} // Ferme le menu au clic
                  className="text-lg font-medium"
                >
                  {t("header.navProjects")}
                </Link>
                <Link
                  href="#skills"
                  onClick={handleLinkClick}
                  className="text-lg font-medium"
                >
                  {t("header.navSkills")}
                </Link>
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className="text-lg font-medium"
                >
                  {t("header.navContact")}
                </Link>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    window.open("/path-to-your-cv.pdf", "_blank");
                    handleLinkClick();
                  }}
                >
                  {t("header.cvButton")}
                </Button>
                {/* Bouton de langue pour mobile */}
                <Button
                  variant="ghost"
                  className="mt-4"
                  onClick={() => {
                    toggleLanguage();
                    handleLinkClick();
                  }}
                >
                  Passer en {locale === "en" ? "Français" : "English"}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
      </div>
    </header>
  );
}

