"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/language-context"; 
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription 
} from "@/components/ui/sheet"; 

import { Menu, Home, Trophy, FileText, LayoutGrid } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "fr" : "en");
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-[2000px] items-center justify-between px-4 md:px-6">
        
        {/* === Logo === */}
        <Link href="/" className="font-bold text-xl tracking-tighter">
          Nathan<span className="text-primary">Colson</span>
        </Link>

        {/* === Navigation Desktop (Épurée) === */}
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          
          {/* Bouton HUB (Retour Accueil)[cite: 3] */}
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <LayoutGrid className="h-4 w-4" />
              {t("header.navHub") || "Hub"}
            </Button>
          </Link>

          {/* Bouton ACTIVITÉS (Style Premium)[cite: 3] */}
          <Link href="/activites">
            <Button 
              variant="default" 
              size="sm" 
              className="gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 transition-all shadow-[0_0_15px_rgba(var(--primary),0.1)]"
            >
              <Trophy className="h-4 w-4" />
              {t("header.navActivities") || "Activités"}
            </Button>
          </Link>

          <div className="h-4 w-[1px] bg-border mx-2" /> 

          {/* Bouton CV (Corrigé : Redirige vers /cv au lieu du PDF)[cite: 3, 10] */}
          <Link href="/cv">
            <Button variant="ghost" size="sm" className="gap-2">
              <FileText className="h-4 w-4" />
              {t("header.cvButton")}
            </Button>
          </Link>

          {/* Sélecteur de Langue[cite: 3] */}
          <Button variant="ghost" size="sm" className="font-bold" onClick={toggleLanguage}>
            {locale === "en" ? "FR" : "EN"}
          </Button>

          <ThemeToggle />
        </nav>
        
        {/* === Menu Mobile ===[cite: 3] */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  {t("header.mobileNavDescription")}
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col space-y-3 mt-8">
                <Link href="/" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start gap-3 text-lg">
                    <Home className="h-5 w-5" /> {t("header.navHub") || "Accueil"}
                  </Button>
                </Link>

                <Link href="/activites" onClick={handleLinkClick}>
                  <Button variant="secondary" className="w-full justify-start gap-3 text-lg text-primary">
                    <Trophy className="h-5 w-5" /> {t("header.navActivities") || "Mes Activités"}
                  </Button>
                </Link>

                <hr className="my-2 border-border" />

                {/* Bouton CV Mobile (Corrigé)[cite: 3, 10] */}
                <Link href="/cv" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start gap-3 text-lg">
                    <FileText className="h-5 w-5" /> {t("header.cvButton")}
                  </Button>
                </Link>

                <Button
                  variant="ghost"
                  className="justify-start gap-3 text-lg"
                  onClick={() => {
                    toggleLanguage();
                    handleLinkClick();
                  }}
                >
                  🌐 {locale === "en" ? "Passer en Français" : "Switch to English"}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
      </div>
    </header>
  );
}