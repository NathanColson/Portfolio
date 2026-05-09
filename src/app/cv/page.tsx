"use client";

import { useLanguage } from "@/context/language-context";
import { cvContent } from "@/lib/cv-content";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Briefcase, GraduationCap, Code, Globe } from "lucide-react";

export default function CVPage() {
  const { locale } = useLanguage();
  const content = cvContent[locale];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <main className="container max-w-5xl mx-auto px-4 pt-20 md:pt-24">
        
        {/* Barre d'action pour le CV - Adaptée aux deux thèmes */}
        <div className="flex justify-between items-center mb-10 border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tighter text-foreground">{content.title}</h1>
          
          <a 
            href={content.cvFile} 
            download={`CV_Nathan_Colson_${locale.toUpperCase()}.pdf`}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 border-border hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Download className="h-4 w-4" />
              {content.downloadBtn}
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
          
          {/* COLONNE GAUCHE : Infos & Skills */}
          <div className="space-y-10">
            <section>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-primary">
                <Mail className="h-4 w-4" /> {content.contactTitle}
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p className="flex items-center gap-3 hover:text-foreground transition-colors cursor-default">
                  <Mail className="h-4 w-4 text-primary" /> colsonnathan03@gmail.com
                </p>
                <p className="flex items-center gap-3 hover:text-foreground transition-colors cursor-default">
                  <Phone className="h-4 w-4 text-primary" /> +32 471 289 613
                </p>
                <p className="flex items-center gap-3 hover:text-foreground transition-colors cursor-default">
                  <MapPin className="h-4 w-4 text-primary" /> Belgique
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-primary">
                <Code className="h-4 w-4" /> {content.skillsTitle}
              </h2>
              <div className="space-y-5">
                {content.skillGroups.map((group, i) => (
                  <div key={i} className="group">
                    <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{group.name}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {group.skills}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-primary">
                <Globe className="h-4 w-4" /> {content.languagesTitle}
              </h2>
              <div className="space-y-3">
                {content.languages.map((lang, i) => (
                  <div key={i} className="flex justify-between text-sm group border-b border-border/50 pb-1">
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{lang.name}</span>
                    <span className="text-muted-foreground font-mono">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLONNE DROITE : Expérience & Education */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3 border-l-4 border-primary pl-4 text-foreground">
                <Briefcase className="h-5 w-5 text-primary" /> {content.experienceTitle}
              </h2>
              <div className="space-y-10">
                {content.experiences.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l border-border">
                    {/* Le point lumineux de la timeline */}
                    <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg leading-tight text-foreground">{exp.role}</h3>
                      <span className="text-[10px] font-mono bg-muted border border-border px-2 py-1 rounded text-primary uppercase tracking-tighter">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-sm mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-8 flex items-center gap-3 border-l-4 border-primary pl-4 text-foreground">
                <GraduationCap className="h-5 w-5 text-primary" /> {content.educationTitle}
              </h2>
              <div className="space-y-10">
                {content.education.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l border-border">
                    <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted-foreground/30 border border-border" />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-lg leading-tight text-foreground">{edu.degree}</h3>
                      <span className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded uppercase tracking-tighter">{edu.date}</span>
                    </div>
                    <p className="text-primary font-semibold text-sm mb-3">{edu.school}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}