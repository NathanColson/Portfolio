"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Trophy, ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- TYPES (Basés sur les consignes de ton école) ---
type ActivityType = 'Hackathon' | 'Formation' | 'Conférence' | 'Visite' | 'Job Day' | 'Salon' | 'Projet';

interface Activity {
  id: string;
  title: string;
  type: ActivityType;
  hours: number;
  date: string;
  proof: string;
  context: string;
  learnings: string;
}

interface Theme {
  id: string;
  title: string;
  description: string;
  activities: Activity[];
}

// --- DONNÉES FICTIVES (Respectant les 6 thèmes minimum) ---
const mockThemes: Theme[] = [
  {
    id: "t1",
    title: "Intelligence Artificielle & Data",
    description: "Comprendre et appliquer l'IA dans des projets web modernes.",
    activities: [
      {
        id: "a1", title: "Formation en ligne : IA pour les développeurs", type: "Formation", hours: 8, date: "Octobre 2023", proof: "Certificat Udemy",
        context: "Formation e-learning de 8h pour comprendre l'intégration d'API comme OpenAI dans des applications Next.js.",
        learnings: "J'ai appris à structurer des requêtes LLM, gérer le streaming de réponses et optimiser les coûts d'API. Cela m'a permis d'ajouter un chatbot à mon projet de fin d'année."
      },
      {
        id: "a2", title: "Conférence AI & Web3", type: "Conférence", hours: 4, date: "Novembre 2023", proof: "Ticket d'entrée",
        context: "Conférence d'une demi-journée organisée à Bruxelles sur l'avenir du web.",
        learnings: "Découverte des architectures décentralisées et des agents autonomes. J'ai compris l'importance de la sécurité dans les prompts (Prompt Injection)."
      }
    ]
  },
  {
    id: "t2",
    title: "Développement Web Avancé",
    description: "Amélioration de mes compétences techniques sur des frameworks modernes.",
    activities: [
      {
        id: "a3", title: "Hackathon React Native", type: "Hackathon", hours: 12, date: "Février 2024", proof: "Attestation de participation",
        context: "Hackathon de 24h (12h de code effectif) en équipe de 4. Objectif : créer une app mobile pour l'écologie.",
        learnings: "Travail sous pression, gestion des conflits Git en temps réel et découverte du framework React Native. J'ai grandement amélioré ma communication technique."
      }
    ]
  },
  {
    id: "t3",
    title: "Cybersécurité & Réseaux",
    description: "Sécurisation des applications web et compréhension des failles.",
    activities: [
      {
        id: "a4", title: "Salon CyberSec 2024", type: "Salon", hours: 6, date: "Mars 2024", proof: "Badge visiteur",
        context: "Salon professionnel réunissant les experts européens en cybersécurité.",
        learnings: "Sensibilisation aux failles OWASP (XSS, CSRF). J'ai pu assister à une démonstration de pentesting en direct."
      },
      {
        id: "a5", title: "Projet de sécurisation serveur VPS", type: "Projet", hours: 5, date: "Avril 2024", proof: "Dépôt GitHub privé",
        context: "Configuration complète d'un VPS Linux pour héberger mes projets persos.",
        learnings: "Mise en place d'un pare-feu UFW, sécurisation SSH par clé RSA, et installation d'un reverse proxy Nginx avec certificats SSL/TLS."
      }
    ]
  },
  {
    id: "t4",
    title: "Soft Skills & Management",
    description: "Développement personnel et préparation au monde professionnel.",
    activities: [
      {
        id: "a6", title: "Job Day IT Bruxelles", type: "Job Day", hours: 5, date: "Janvier 2024", proof: "Emails de confirmation d'entretiens",
        context: "Rencontre avec une dizaine d'entreprises IT pour des opportunités de stage.",
        learnings: "J'ai appris à présenter mon profil en 3 minutes (Elevator Pitch), à adapter mon CV en fonction de l'interlocuteur et à poser les bonnes questions aux recruteurs."
      }
    ]
  },
  {
    id: "t5",
    title: "UX/UI Design & Accessibilité",
    description: "Création d'interfaces centrées sur l'utilisateur et inclusives.",
    activities: [
      {
        id: "a7", title: "Formation Figma Avancée", type: "Formation", hours: 6, date: "Décembre 2023", proof: "Attestation de complétion",
        context: "Atelier pratique sur les Design Systems et les composants interactifs.",
        learnings: "Maîtrise des Auto-Layouts, création de variables de design (Design Tokens) et prototypage interactif complexe."
      },
      {
        id: "a8", title: "Visite d'agence de Design Web", type: "Visite", hours: 3, date: "Mai 2024", proof: "Photo sur place avec l'équipe",
        context: "Visite des locaux d'une agence digitale réputée et échange avec les Lead Designers.",
        learnings: "Compréhension du workflow réel entre les designers et les développeurs (handoff). Importance des critères d'accessibilité WCAG."
      }
    ]
  },
  {
    id: "t6",
    title: "DevOps & CI/CD",
    description: "Automatisation des déploiements et gestion d'infrastructure.",
    activities: [
      {
        id: "a9", title: "Projet personnel : Pipeline CI/CD GitHub Actions", type: "Projet", hours: 10, date: "Juin 2024", proof: "Lien vers l'historique des actions GitHub",
        context: "Création d'un workflow automatisé pour tester et déployer mon portfolio.",
        learnings: "Écriture de fichiers YAML, intégration de tests automatisés avant le merge, et déploiement automatique sur Vercel. J'ai gagné un temps précieux sur mes mises en production."
      }
    ]
  }
];

const TARGET_HOURS = 60;
const MAX_HOURS_PER_THEME = 10;

export default function PortfolioActivitiesPage() {
  // Par défaut, on sélectionne toutes les activités
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(mockThemes.flatMap(t => t.activities.map(a => a.id)))
  );
  
  // État pour gérer l'ouverture des accordéons (Analyse réflexive)
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  // Fonction pour cocher/décocher une activité
  const toggleActivity = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  // --- LOGIQUE DE CALCUL GAMIFIÉE ---
  const stats = useMemo(() => {
    let totalValidHours = 0;
    const themeStats = mockThemes.map(theme => {
      // Calcule le total des heures sélectionnées pour ce thème
      const rawHours = theme.activities
        .filter(a => selectedIds.has(a.id))
        .reduce((sum, a) => sum + a.hours, 0);
      
      // Applique la règle de l'école : Max 10h par thème
      const validHours = Math.min(rawHours, MAX_HOURS_PER_THEME);
      totalValidHours += validHours;

      return { id: theme.id, rawHours, validHours };
    });

    return {
      totalValidHours,
      progressPercentage: Math.min((totalValidHours / TARGET_HOURS) * 100, 100),
      themeStats
    };
  }, [selectedIds]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-32">
      
      {/* Header simple avec bouton retour */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur z-50 sticky top-0">
        <div className="container max-w-6xl mx-auto flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
            ← Retour au site principal
          </Link>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 md:px-6 pt-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Portfolio d'Acquisition de Compétences
          </h1>
          <p className="text-lg text-muted-foreground">
            Explorez mes activités extrascolaires. Cochez ou décochez les activités pour voir l'impact sur ma barre d'expérience (Règle appliquée : <strong className="text-primary">Max 10h validables par thème</strong>).
          </p>
        </div>

        {/* --- LISTE DES THÈMES ET ACTIVITÉS --- */}
        <div className="space-y-12">
          {mockThemes.map((theme) => {
            const tStat = stats.themeStats.find(t => t.id === theme.id);
            const isThemeCapped = tStat && tStat.rawHours > MAX_HOURS_PER_THEME;

            return (
              <div key={theme.id} className="relative">
                {/* Ligne visuelle de connexion sur la gauche */}
                <div className="absolute left-6 top-14 bottom-0 w-px bg-border/50 hidden md:block" />

                <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 z-10 relative">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      {theme.title}
                    </h2>
                    <p className="text-muted-foreground mt-1 md:ml-16">{theme.description}</p>
                  </div>
                  
                  {/* Badge de compteur d'heures par thème */}
                  <div className={`shrink-0 px-4 py-2 rounded-lg border font-mono text-sm flex items-center gap-2 transition-colors ${isThemeCapped ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' : 'bg-zinc-900 border-white/10'}`}>
                    <span>{tStat?.rawHours}h réalisées</span>
                    <span className="text-muted-foreground">→</span>
                    <strong className={isThemeCapped ? 'text-orange-400' : 'text-primary'}>
                      {tStat?.validHours}h validées
                    </strong>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:ml-16">
                  {theme.activities.map((activity) => {
                    const isSelected = selectedIds.has(activity.id);
                    const isExpanded = expandedActivity === activity.id;

                    return (
                      <motion.div 
                        key={activity.id}
                        layout
                        className={`border rounded-xl transition-colors duration-300 overflow-hidden ${isSelected ? 'bg-zinc-950/50 border-primary/30 shadow-[0_0_15px_rgba(var(--primary),0.05)]' : 'bg-zinc-950/20 border-white/5 opacity-60'}`}
                      >
                        {/* En-tête de l'activité (Cliquable pour sélectionner) */}
                        <div 
                          className="p-4 md:p-5 flex items-center gap-4 cursor-pointer"
                          onClick={() => toggleActivity(activity.id)}
                        >
                          {/* Checkbox custom */}
                          <div className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground/50'}`}>
                            {isSelected && <Check className="w-4 h-4" />}
                          </div>

                          <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <Badge variant="secondary" className="bg-zinc-800 text-xs font-normal">
                                {activity.type}
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                {activity.date} • {activity.hours} heures
                              </span>
                            </div>
                            <h3 className={`font-semibold text-lg transition-colors ${!isSelected && 'text-muted-foreground'}`}>
                              {activity.title}
                            </h3>
                          </div>

                          {/* Bouton pour ouvrir l'analyse */}
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="shrink-0"
                            onClick={(e) => {
                              e.stopPropagation(); // Évite de décocher l'activité
                              setExpandedActivity(isExpanded ? null : activity.id);
                            }}
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                          </Button>
                        </div>

                        {/* Contenu déroulant (Analyse réflexive) */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="border-t border-border/50 bg-zinc-900/30"
                            >
                              <div className="p-4 md:p-6 space-y-6">
                                <div>
                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Cadre de l'activité</h4>
                                  <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                                    {activity.context}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Analyse Réflexive & Apprentissages</h4>
                                  <p className="text-sm md:text-base leading-relaxed text-zinc-300 italic border-l-2 border-primary/50 pl-4">
                                    "{activity.learnings}"
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 pt-2">
                                  <span className="text-sm text-muted-foreground">Preuve :</span>
                                  <Badge variant="outline" className="flex items-center gap-1 bg-zinc-950">
                                    <ExternalLink className="w-3 h-3" />
                                    {activity.proof}
                                  </Badge>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* --- BARRE DE PROGRESSION DYNAMIQUE (Sticky en bas) --- */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-t border-white/10 p-4 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
          
          <div className="flex items-center gap-4 shrink-0">
            <div className={`p-3 rounded-full transition-colors duration-500 ${stats.totalValidHours >= TARGET_HOURS ? 'bg-emerald-500/20 text-emerald-400' : 'bg-primary/20 text-primary'}`}>
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Objectif Scolaire</p>
              <p className="text-2xl font-bold font-mono">
                {stats.totalValidHours} <span className="text-muted-foreground text-lg">/ {TARGET_HOURS}h</span>
              </p>
            </div>
          </div>

          <div className="flex-grow w-full relative">
            {/* Jauge de fond */}
            <div className="h-4 w-full bg-zinc-800 rounded-full overflow-hidden relative">
              {/* Jauge de remplissage animée */}
              <motion.div 
                className={`absolute top-0 left-0 h-full rounded-full ${stats.totalValidHours >= TARGET_HOURS ? 'bg-emerald-500' : 'bg-primary'}`}
                initial={{ width: 0 }}
                animate={{ width: `${stats.progressPercentage}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
              />
            </div>
            
            {/* Messages de validation */}
            <div className="flex justify-between items-center mt-2 text-xs font-medium">
              <span className="text-muted-foreground">Progression validée</span>
              {stats.totalValidHours >= TARGET_HOURS ? (
                <span className="text-emerald-400 animate-pulse">Objectif atteint ! 🎉</span>
              ) : (
                <span className="text-primary">Encore {TARGET_HOURS - stats.totalValidHours}h à valider</span>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}