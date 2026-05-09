"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Trophy, BookOpen, ExternalLink, Github, Image as ImageIcon, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context"; 
import { activitiesContent } from "@/lib/activities-content"; 
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const TARGET_HOURS = 60;
const MAX_HOURS_PER_THEME = 10;

export default function PortfolioActivitiesPage() {
  const { locale } = useLanguage(); 
  const content = activitiesContent[locale]; 

  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(content.themes.flatMap(t => t.activities.map(a => a.id)))
  );
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);
  const [proofModalActivity, setProofModalActivity] = useState<any | null>(null);

  const toggleActivity = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

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
    return { totalValidHours, progressPercentage: Math.min((totalValidHours / TARGET_HOURS) * 100, 100), themeStats };
  }, [selectedIds, content.themes]);

  const getProofIcon = (type: string) => {
    switch (type) {
      case "github": return <Github className="h-4 w-4" />;
      case "image": return <ImageIcon className="h-4 w-4" />;
      case "link": return <ExternalLink className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-32">
      <main className="container max-w-5xl mx-auto px-4 md:px-6 pt-20 md:pt-24">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{content.pageTitle}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{content.pageDescription}</p>
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
                    <span>{tStat?.rawHours}h réalisé(s)</span>
                    <span className="text-muted-foreground">→</span>
                    <strong className={isThemeCapped ? 'text-orange-400' : 'text-primary'}>{tStat?.validHours}h validées</strong>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:ml-16">
                  {theme.activities.map((activity) => (
                    <motion.div key={activity.id} layout className={`border rounded-xl transition-all overflow-hidden ${selectedIds.has(activity.id) ? 'bg-zinc-950/50 border-primary/30' : 'bg-zinc-950/20 border-white/5 opacity-60'}`}>
                      <div className="flex items-stretch">
                        <div className="flex items-center px-4 md:px-5 cursor-pointer hover:bg-white/5 transition-colors border-r border-white/5" onClick={(e) => { e.stopPropagation(); toggleActivity(activity.id); }}>
                          <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${selectedIds.has(activity.id) ? 'bg-primary border-primary text-primary-foreground' : 'border-muted-foreground/50'}`}>
                            {selectedIds.has(activity.id) && <Check className="w-4 h-4" />}
                          </div>
                        </div>
                        <div className="flex-grow p-4 md:p-5 flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors" onClick={() => setExpandedActivity(expandedActivity === activity.id ? null : activity.id)}>
                          <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <Badge variant="secondary" className="text-[10px] uppercase font-bold">{activity.type}</Badge>
                              <span className="text-xs font-mono text-muted-foreground">{activity.hours}h • {activity.date}</span>
                            </div>
                            <h3 className="font-semibold text-lg">{activity.title}</h3>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expandedActivity === activity.id ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedActivity === activity.id && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-white/5 bg-zinc-900/30">
                            <div className="p-6 space-y-6 text-left">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">{content.frameworkTitle}</h4>
                                  <p className="text-sm text-zinc-300 leading-relaxed">{activity.context}</p>
                                </div>
                                <div className="space-y-2">
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">{content.analysisTitle}</h4>
                                  <p className="text-sm italic text-zinc-400 border-l-2 border-primary/20 pl-4 leading-relaxed">{activity.learnings}</p>
                                </div>
                              </div>
                              <div className="pt-4 border-t border-white/5 text-left">
                                <Button variant="outline" size="sm" className="gap-2 border-primary/20 hover:bg-primary/10 transition-all" onClick={() => setProofModalActivity(activity)}>
                                  <ExternalLink className="h-4 w-4" />
                                  {content.proofLabel}
                                </Button>
                              </div>
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

      {/* POPUP DES PREUVES (FIXED STRUCTURE) */}
      <Dialog open={!!proofModalActivity} onOpenChange={() => setProofModalActivity(null)}>
        <DialogContent className="max-w-3xl bg-zinc-950 border-white/10 text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          <DialogHeader className="p-6 pb-2 text-left">
            <DialogTitle className="text-2xl font-bold">{proofModalActivity?.title}</DialogTitle>
            <DialogDescription className="text-zinc-400">Pièces justificatives et documents officiels.</DialogDescription>
          </DialogHeader>

          <div className="flex-grow overflow-y-auto p-6 pt-2 space-y-8 custom-scrollbar">
            {proofModalActivity?.proofs?.map((proof: any, index: number) => (
              <div key={index} className="flex flex-col gap-5 p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2.5 text-primary shrink-0 border border-primary/20">{getProofIcon(proof.type)}</div>
                    <div className="text-left">
                      <p className="font-bold text-sm tracking-tight">{proof.label}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[9px] h-4 px-1.5 py-0 uppercase tracking-tighter">Vérifié</Badge>
                        <span className="text-[10px] text-muted-foreground uppercase font-medium">
                          {proof.type === 'image' ? 'Fichier Image' : proof.type === 'github' ? 'Dépôt Code' : 'Document PDF'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="h-9 gap-2 text-xs border-white/10 hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                    <a href={proof.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3.5 w-3.5" />Ouvrir</a>
                  </Button>
                </div>
                {proof.type === "image" && (
                  <div className="relative mt-2 rounded-lg border border-white/10 bg-zinc-950 overflow-hidden shadow-inner flex justify-center">
                    <img src={proof.url} alt={proof.label} className="w-full h-auto object-contain bg-zinc-900/50" style={{ maxHeight: "450px" }} />
                  </div>
                )}
                <p className="text-[10px] text-center text-muted-foreground/60 italic">Document officiel servant de preuve de réalisation.</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Barre d'XP dynamique */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <Trophy className={`w-10 h-10 ${stats.totalValidHours >= TARGET_HOURS ? 'text-emerald-400' : 'text-primary'}`} />
            <div className="text-left">
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