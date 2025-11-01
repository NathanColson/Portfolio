"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, GraduationCap, Mail } from "lucide-react";
import { motion } from "framer-motion";

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

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
  const { t } = useLanguage(); 

  return (
    <div className="w-full max-w-5xl min-h-[80vh] flex flex-col justify-center text-left py-16 md:py-0">
      
      <motion.h1 
        className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
        initial={{ opacity: 0, y: 20 }} // État initial (caché, décalé)
        animate={{ opacity: 1, y: 0 }} // État final (visible, à sa place)
        transition={{ duration: 0.5, ease: "easeOut" }} // Transition (sans délai)
      >
        {t("hero.title")}
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} // Délai de 0.1s
      >
        {t("hero.description")}
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }} // Délai de 0.2s
      >
        <Button 
          size="lg" 
          className="text-lg px-8 py-6"
          onClick={() => scrollTo("projects")}
        >
          {t("hero.projectsButton")}
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="text-lg px-8 py-6"
          onClick={() => window.open("/path-to-your-cv.pdf", "_blank")}
        >
          {t("header.cvButton")}
        </Button>
      </motion.div>
      
      <motion.div 
        className="flex flex-wrap gap-x-6 gap-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }} // Délai de 0.3s
      >
        
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
          <span>colsonnathan03@gmail.com</span>
        </a>
      </motion.div>
    </div>
  );
}