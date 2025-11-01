"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

// Définit les statuts du formulaire
type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Se déclenche à 10%
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch(`https://formspree.io/f/manllave`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-4"
        variants={itemVariants}
      >
        {t("contact.sectionTitle")}
      </motion.h2>

      <motion.p 
        className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        variants={itemVariants}
      >
        {t("contact.description")}
      </motion.p>

      {/* Grille (3ème enfant) */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-16"
        variants={itemVariants}
      >
        
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Nom */}
            <div className="space-y-2">
              <Label htmlFor="name">{t("contact.form.name")}</Label>
              <Input 
                id="name" 
                placeholder={t("contact.form.namePlaceholder")}
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.form.email")}</Label>
              <Input 
                id="email" 
                type="email"
                placeholder={t("contact.form.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.form.message")}</Label>
            <Textarea 
              id="message" 
              placeholder={t("contact.form.messagePlaceholder")}
              className="min-h-[150px]"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          {/* Bouton d'envoi */}
          <div>
            <Button 
              type="submit" 
              className="w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" 
                ? t("contact.form.sendingButton") 
                : t("contact.form.sendButton")
              }
            </Button>
          </div>

          {/* Messages de statut */}
          {status === "success" && (
            <p className="text-green-600">{t("contact.successMessage")}</p>
          )}
          {status === "error" && (
            <p className="text-red-600">{t("contact.errorMessage")}</p>
          )}
        </form>

        {/* Partie Droite: Infos & Liens */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">
            {t("contact.socialTitle")}
          </h3>
          <div className="space-y-4">
            {/* --- MODIFICATIONS ICI --- */}
            <a 
              href="mailto:colsonnathan03@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <span>colsonnathan03@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/nathan-colson-89193832a/"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/NathanColson"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            {/* --- FIN DES MODIFICATIONS --- */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

