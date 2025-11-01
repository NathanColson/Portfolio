"use client";

import { useLanguage } from "@/context/language-context";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react"; // Icônes

export function JourneySection() {
  const { t } = useLanguage();

  // On définit les listes de clés pour chaque catégorie
  const educationKeys = ["journey.item1", "journey.item2", "journey.item3"];
  const experienceKeys = ["journey.item4"];

  // 2. Préparer la détection de scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // 3. Déclencher l'animation quand c'est visible
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // 4. Définir les "variantes" d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai de 0.2s entre chaque enfant
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    // 5. Appliquer l'animation au conteneur principal
    <motion.div 
      ref={ref}
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Titre (1er enfant) */}
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        variants={itemVariants}
      >
        {t("journey.sectionTitle")}
      </motion.h2>

      {/* Grille (2ème enfant) */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        variants={itemVariants}
      >
        
        {/* Colonne de gauche : Formation */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-semibold flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            {t("journey.educationTitle")}
          </h3>
          
          <div className="flex flex-col gap-6">
            {educationKeys.map((key) => (
              <Card key={key}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{t(`${key}.title`)}</CardTitle>
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap ml-4">
                      {t(`${key}.date`)}
                    </span>
                  </div>
                  <CardDescription className="font-medium pt-1">
                    {t(`${key}.institution`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t(`${key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Colonne de droite : Expérience */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-semibold flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            {t("journey.experienceTitle")}
          </h3>

          <div className="flex flex-col gap-6">
            {experienceKeys.map((key) => (
              <Card key={key}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{t(`${key}.title`)}</CardTitle>
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap ml-4">
                      {t(`${key}.date`)}
                    </span>
                  </div>
                  <CardDescription className="font-medium pt-1">
                    {t(`${key}.institution`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t(`${key}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}