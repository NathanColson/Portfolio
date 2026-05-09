"use client";

import { useLanguage } from "@/context/language-context";
import { cvContent } from "@/lib/cv-content";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Briefcase, GraduationCap, Code, Globe } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  const { locale } = useLanguage();
  const content = cvContent[locale];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header de la page CV */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="font-bold hover:text-primary transition-colors">
            ← Nathan Colson
          </Link>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.print()}>
            <Download className="h-4 w-4" />
            {content.downloadBtn}
          </Button>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLONNE GAUCHE : Infos & Skills */}
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" /> {content.contactTitle}
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> colsonnathan03@gmail.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +32 471 289 613</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Belgique</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" /> {content.skillsTitle}
              </h2>
              <div className="space-y-4">
                {content.skillGroups.map((group, i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold text-primary mb-1">{group.name}</p>
                    <p className="text-sm text-muted-foreground">{group.skills}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" /> {content.languagesTitle}
              </h2>
              <div className="space-y-2">
                {content.languages.map((lang, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLONNE DROITE : Expérience & Education */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b pb-2">
                <Briefcase className="h-6 w-6 text-primary" /> {content.experienceTitle}
              </h2>
              <div className="space-y-8">
                {content.experiences.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <span className="text-sm font-mono bg-zinc-900 px-2 py-1 rounded text-primary">{exp.date}</span>
                    </div>
                    <p className="text-primary/80 font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b pb-2">
                <GraduationCap className="h-6 w-6 text-primary" /> {content.educationTitle}
              </h2>
              <div className="space-y-8">
                {content.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <span className="text-sm font-mono text-muted-foreground">{edu.date}</span>
                    </div>
                    <p className="text-primary/80 font-medium mb-2">{edu.school}</p>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
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