"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Trophy, ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/language-context"; //
import { activitiesContent } from "@/lib/activities-content"; // Nouveau fichier

const TARGET_HOURS = 60;
const MAX_HOURS_PER_THEME = 10;

export default function PortfolioActivitiesPage() {
  const { locale } = useLanguage(); // Récupère la langue actuelle
  const content = activitiesContent[locale]; // Charge le contenu correspondant

  // On initialise avec toutes les activités du contenu actuel
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(content.themes.flatMap(t => t.activities.map(a => a.id)))
  );
  
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  const toggleActivity = (id: string) => {
    const newSelected = new Set(selectedIds);
    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
    setSelectedIds(newSelected);
  };

  // Calculs basés sur le contenu traduit
  const stats = useMemo(() => {
    let totalValidHours = 0;
    const themeStats = content.themes.map(theme => {
      const rawHours = theme.activities
        .filter(a => selectedIds.has(a.id))
        .reduce((sum, a) => sum + a.hours, 0);
      
      const validHours = Math.min(rawHours, MAX_HOURS_PER_THEME);
      totalValidHours += validHours;
      return { id: theme.id, rawHours, validHours };
    });

    return {
      totalValidHours,
      progressPercentage: Math.min((totalValidHours / TARGET_HOURS) * 100, 100),
      themeStats
    };
  }, [selectedIds, content.themes]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-32">
      <header className="border-b bg-background/95 backdrop-blur z-50 sticky top-0">
        <div className="container max-w-6xl mx-auto flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
            {content.backToHub}
          </Link>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 md:px-6 pt-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{content.pageTitle}</h1>
          <p className="text-lg text-muted-foreground">{content.pageDescription}</p>
        </div>

        <div className="space-y-12">
          {content.themes.map((theme) => {
            const tStat = stats.themeStats.find(t => t.id === theme.id);
            const isThemeCapped = tStat && tStat.rawHours > MAX_HOURS_PER_THEME;

            return (
              <div key={theme.id} className="relative">
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
                  
                  <div className={`shrink-0 px-4 py-2 rounded-lg border font-mono text-sm flex items-center gap-2 ${isThemeCapped ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' : 'bg-zinc-900 border-white/10'}`}>
                    <span>{tStat?.rawHours}{content.realizedHours.split(' ')[0]} réalisé(s)</span>
                    <span className="text-muted-foreground">→</span>
                    <strong className={isThemeCapped ? 'text-orange-400' : 'text-primary'}>
                      {tStat?.validHours}h validées
                    </strong>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:ml-16">
                  {theme.activities.map((activity) => (
                    <motion.div key={activity.id} layout className={`border rounded-xl transition-all ${selectedIds.has(activity.id) ? 'bg-zinc-950/50 border-primary/30' : 'bg-zinc-950/20 border-white/5 opacity-60'}`}>
                      <div className="p-4 md:p-5 flex items-center gap-4 cursor-pointer" onClick={() => toggleActivity(activity.id)}>
                        <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${selectedIds.has(activity.id) ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground/50'}`}>
                          {selectedIds.has(activity.id) && <Check className="w-4 h-4" />}
                        </div>
                        <div className="flex-grow">
                          <Badge variant="secondary" className="mb-1">{activity.type}</Badge>
                          <h3 className="font-semibold text-lg">{activity.title}</h3>
                        </div>
                        <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); setExpandedActivity(expandedActivity === activity.id ? null : activity.id); }}>
                          <ChevronDown className={`transition-transform ${expandedActivity === activity.id ? 'rotate-180' : ''}`} />
                        </Button>
                      </div>

                      <AnimatePresence>
                        {expandedActivity === activity.id && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="border-t border-border/50 bg-zinc-900/30 overflow-hidden">
                            <div className="p-6 space-y-4">
                              <div><h4 className="text-xs font-bold uppercase text-muted-foreground mb-1">{content.frameworkTitle}</h4><p>{activity.context}</p></div>
                              <div><h4 className="text-xs font-bold uppercase text-muted-foreground mb-1">{content.analysisTitle}</h4><p className="italic border-l-2 border-primary/30 pl-4">{activity.learnings}</p></div>
                              <div className="text-sm font-medium">{content.proofLabel} <Badge variant="outline">{activity.proof}</Badge></div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Barre d'XP dynamique */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <Trophy className={`w-10 h-10 ${stats.totalValidHours >= TARGET_HOURS ? 'text-emerald-400' : 'text-primary'}`} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{content.targetHoursLabel}</p>
              <p className="text-2xl font-bold font-mono">{stats.totalValidHours} / {TARGET_HOURS}h</p>
            </div>
          </div>
          <div className="flex-grow w-full">
            <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
              <motion.div className={`h-full ${stats.totalValidHours >= TARGET_HOURS ? 'bg-emerald-500' : 'bg-primary'}`} animate={{ width: `${stats.progressPercentage}%` }} />
            </div>
            <div className="flex justify-between mt-2 text-xs font-bold">
              <span className="text-muted-foreground">{content.progressValidated}</span>
              {stats.totalValidHours >= TARGET_HOURS ? <span className="text-emerald-400">{content.objectiveReached}</span> : <span className="text-primary">{TARGET_HOURS - stats.totalValidHours} {content.remainingLabel}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}