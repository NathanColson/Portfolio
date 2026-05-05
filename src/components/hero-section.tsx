"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, GraduationCap, Mail } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link"; // Importation pour la navigation interne[cite: 4]

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

// --- COMPOSANT INTERACTIF 3D ---
function InteractiveLogo() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative w-72 h-72 [perspective:1000px] flex items-center justify-center cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full relative rounded-2xl border border-white/10 dark:border-white/5 bg-gradient-to-br from-zinc-800/80 to-zinc-950/90 shadow-2xl overflow-hidden flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 opacity-40 mix-blend-overlay"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)",
            left: glareX,
            top: glareY,
            transform: "translate(-50%, -50%) scale(2)",
          }}
        />

        <div 
          className="relative z-10 flex flex-col items-center justify-center gap-4"
          style={{ transform: "translateZ(50px)" }} 
        >
          <div className="w-24 h-24 rounded-full border border-white/20 bg-black/40 flex items-center justify-center shadow-inner">
            <span className="text-3xl font-light text-zinc-200 tracking-widest">
              NC
            </span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">
              Developer
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2 opacity-50" />
          </div>
        </div>

        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const { t } = useLanguage(); 

  return (
    <div className="w-full max-w-6xl min-h-[80vh] flex flex-col lg:flex-row lg:justify-start items-center text-left py-16 md:py-0 gap-12 lg:gap-32">
      
      <div className="flex flex-col justify-center w-full lg:w-[60%] z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {t("hero.description")}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {/* Bouton vers la page Activités[cite: 4] */}
          <Link href="/activites" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 w-full"
            >
              {t("hero.activitiesButton")}
            </Button>
          </Link>
          
          {/* BOUTON MODIFIÉ : Redirection vers la page CV interne[cite: 4, 10] */}
          <Link href="/cv" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 w-full"
            >
              {t("header.cvButton")}
            </Button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-x-6 gap-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
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

      <motion.div
        className="hidden lg:flex w-full lg:w-[40%] justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <InteractiveLogo />
      </motion.div>

    </div>
  );
}