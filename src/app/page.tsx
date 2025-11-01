import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/project-section";
import { JourneySection } from "@/components/journey-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
      
      <section id="hero" className="w-full">
        <HeroSection />
      </section>

      <section id="projects" className="w-full max-w-6xl mt-24">
        <ProjectsSection />
      </section>

      <section id="journey" className="w-full max-w-6xl mt-24">
        <JourneySection />
      </section>

      <section id="skills" className="w-full max-w-6xl mt-24">
        <SkillsSection />
      </section>

      <section id="contact" className="w-full max-w-6xl mt-24">
        <ContactSection />
      </section>

    </main>
  );
}

