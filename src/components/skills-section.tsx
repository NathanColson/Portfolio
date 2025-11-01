"use client"; // OBLIGATOIRE pour les hooks et animations

import { useLanguage } from "@/context/language-context";
// 1. Importer motion et les hooks
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// --- (Le reste de tes imports) ---
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Définit la structure de tes catégories de compétences
const skillCategories = [
  {
    categoryKey: "skills.categoryFrontend",
    skills: [
      "React", "Next.js", "JavaScript (ES6+)", "TypeScript", 
      "Tailwind CSS", "HTML5", "CSS3", "shadcn/ui"
    ],
  },
  {
    categoryKey: "skills.categoryBackend",
    skills: ["Node.js", "Express", "Python", "SQL (PostgreSQL)", "MongoDB", "Firebase"],
  },
  {
    categoryKey: "skills.categoryTools",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Linux"],
  },
];

export function SkillsSection() {
  const { t } = useLanguage();

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
        {t("skills.sectionTitle")}
      </motion.h2>

      {/* Grille (2ème enfant) */}
      {/* On anime la grille en entier */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={itemVariants}
      >
        {skillCategories.map((category) => (
          <Card key={category.categoryKey}>
            <CardHeader>
              <CardTitle className="text-xl">
                {t(category.categoryKey)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </motion.div>
  );
}
