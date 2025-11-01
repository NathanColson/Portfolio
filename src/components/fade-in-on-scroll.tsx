"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number; // Permet d'ajouter un délai optionnel
}

export function FadeInOnScroll({ children, delay = 0 }: FadeInOnScrollProps) {
  // ref: Pour suivre l'élément dans le DOM
  const ref = useRef(null);
  
  // useInView: Le "détecteur" d'IntersectionObserver
  // triggerOnce: true = L'animation ne se joue qu'une fois
  const isInView = useInView(ref, { once: true });

  // useAnimation: Pour contrôler l'animation manuellement
  const controls = useAnimation();

  // Les "variantes" de l'animation
  const variants = {
    hidden: { opacity: 0, y: 30 }, // État initial (caché, décalé vers le bas)
    visible: { opacity: 1, y: 0 },  // État final (visible, à sa place)
  };

  // useEffect: Se déclenche quand 'isInView' change
  useEffect(() => {
    if (isInView) {
      // Si l'élément est visible, on lance l'animation "visible"
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"  // Commence à "hidden"
      animate={controls} // L'animation est contrôlée par 'controls'
      transition={{ 
        duration: 0.5, 
        ease: "easeOut",
        delay: delay // Applique le délai
      }}
    >
      {children}
    </motion.div>
  );
}
