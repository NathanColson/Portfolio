"use client"; // OBLIGATOIRE pour les hooks et animations

import * as React from "react";
// 1. Importer motion et les hooks
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
// 2. IMPORTER LE COMPOSANT IMAGE
import Image from "next/image";

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

// 3. METTRE À JOUR LE TYPE "Project"
type Project = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  imageUrl: string; // <-- La nouvelle propriété pour l'image
};

// 4. METTRE À JOUR LE TABLEAU "projects"
// J'ai deviné les noms d'images, tu devras les ajuster
const projects: Project[] = [
  {
    id: 1,
    titleKey: "projects.project1.title",
    descriptionKey: "projects.project1.description",
    imageUrl: "/images/Dbox-FM.png", // <-- NOUVEAU
  },
  {
    id: 2,
    titleKey: "projects.project2.title",
    descriptionKey: "projects.project2.description",
    imageUrl: "/images/TFE-Portfolio.svg", // <-- NOUVEAU
  },
  {
    id: 3,
    titleKey: "projects.project3.title",
    descriptionKey: "projects.project3.description",
    imageUrl: "/images/AI-Agent-Portfolio.png", // <-- NOUVEAU
  },
  {
    id: 4,
    titleKey: "projects.project4.title",
    descriptionKey: "projects.project4.description",
    imageUrl: "/images/thebeauty-Portfolio.png", // <-- NOUVEAU
  },
  {
    id: 5,
    titleKey: "projects.project5.title",
    descriptionKey: "projects.project5.description",
    imageUrl: "/images/LARES-Portfolio.svg", // <-- NOUVEAU
  },
  {
    id: 6,
    titleKey: "projects.project6.title",
    descriptionKey: "projects.project6.description",
    imageUrl: "/images/manager-csv-Portfolio.svg", // <-- NOUVEAU
  },
  {
    id: 7,
    titleKey: "projects.project7.title",
    descriptionKey: "projects.project7.description",
    imageUrl: "/images/VPS-Admin-Portfolio.svg", // <-- NOUVEAU
  },
  {
    id: 8,
    titleKey: "projects.project8.title",
    descriptionKey: "projects.project8.description",
    imageUrl: "/images/portfolio-Portfolio.svg", // <-- NOUVEAU
  },
  {
    id: 9,
    titleKey: "projects.project9.title",
    descriptionKey: "projects.project9.description",
    imageUrl: "/images/F1-Project-Portfolio.png", // <-- NOUVEAU
  },
  {
    id: 10,
    titleKey: "projects.project10.title",
    descriptionKey: "projects.project10.description",
    imageUrl: "/images/Noctren-image-portfolio.svg", // <-- NOUVEAU
  },
];


export function ProjectsSection() {
  const { t } = useLanguage();

  // ... (Toute la logique d'animation reste la même)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
  // ... (Fin de la logique d'animation)


  return (
    <motion.div 
      ref={ref}
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Titre de la section (1er enfant) */}
      <motion.h2 
        className="text-3xl font-bold text-center mb-12"
        variants={itemVariants}
      >
        {t("projects.sectionTitle")}
      </motion.h2>

      {/* Le Carrousel (2ème enfant) */}
      <motion.div 
        variants={itemVariants}
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
              <CarouselItem 
                key={project.id} 
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  {/* J'ajoute "group" pour un effet de zoom sur l'image au survol */}
                  <Card className="h-full flex flex-col group">
                    <CardHeader>
                      
                      {/* 5. REMPLACER LE PLACEHOLDER PAR L'IMAGE */}
                      {/* J'ajoute "relative overflow-hidden" pour le composant Image */}
                      <div className="w-full h-40 bg-muted rounded-md mb-4 relative overflow-hidden">
                        <Image
                          src={project.imageUrl} // <-- ON UTILISE L'URL DU PROJET
                          alt={t(project.titleKey)}
                          fill // "fill" remplit le conteneur
                          style={{ objectFit: "contain" }} // "cover" garde l'aspect ratio
                          className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Effet de zoom
                        />
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