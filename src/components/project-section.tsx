"use client"; // OBLIGATOIRE pour les hooks et animations

import * as React from "react";
// 1. Importer motion et les hooks
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// --- (Le reste de tes imports) ---
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

// ... (ton tableau 'projects' reste le même)
const projects: Project[] = [
  {
    id: 1,
    titleKey: "projects.project1.title",
    descriptionKey: "projects.project1.description",
  },
  {
    id: 2,
    titleKey: "projects.project2.title",
    descriptionKey: "projects.project2.description",
  },
  {
    id: 3,
    titleKey: "projects.project3.title",
    descriptionKey: "projects.project3.description",
  },
  {
    id: 4,
    titleKey: "projects.project4.title",
    descriptionKey: "projects.project4.description",
  },
];

export function ProjectsSection() {
  const { t } = useLanguage();

  // 2. Préparer la détection de scroll
  const ref = useRef(null);
  // 'once: true' = l'animation ne se joue qu'une fois
  // 'amount: 0.2' = se déclenche quand 20% de la section est visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // 3. Déclencher l'animation quand c'est visible
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // 4. Définir les "variantes" d'animation
  // On va animer le conteneur, puis ses enfants en décalé
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai de 0.2s entre chaque enfant
      },
    },
  };

  // L'animation pour chaque "enfant" (le titre et le carrousel)
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
      ref={ref} // Attache la référence pour la détection
      className="w-full"
      variants={containerVariants} // Applique les variantes du conteneur
      initial="hidden" // Commence caché
      animate={controls} // L'animation est gérée par 'controls'
    >
      {/* Titre de la section (1er enfant) */}
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        variants={itemVariants} // Applique l'animation "item"
      >
        {t("projects.sectionTitle")}
      </motion.h2>

      {/* Le Carrousel (2ème enfant) */}
      {/* On enveloppe le carrousel dans une motion.div */}
      <motion.div 
        variants={itemVariants} // Applique l'animation "item"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project) => (
              // Chaque item du carrousel
              <CarouselItem 
                key={project.id} 
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  {/* Une Card pour chaque projet */}
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      {/* Placeholder pour une image de projet */}
                      <div className="w-full h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">
                          {t("projects.imagePlaceholder")}
                        </span>
                      </div>
                      <CardTitle>{t(project.titleKey)}</CardTitle>
                      <CardDescription className="h-24">
                        {t(project.descriptionKey)}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        {t("projects.seeMoreButton")}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
