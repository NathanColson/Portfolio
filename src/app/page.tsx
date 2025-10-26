import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
      
      <section id="hero" className="w-full">
        {/* On remplace le placeholder par le vrai composant */}
        <HeroSection />
      </section>

      <section id="projects" className="w-full max-w-5xl mt-24">
        {/* <ProjectsSection /> */}
        <h2 className="text-3xl font-bold text-center">Section Projets</h2>
        <p className="mt-4 text-center">Tes projets viendront ici.</p>
      </section>

      <section id="skills" className="w-full max-w-5xl mt-24">
        {/* <SkillsSection /> */}
        <h2 className="text-3xl font-bold text-center">Section Compétences</h2>
        <p className="mt-4 text-center">Tes compétences viendront ici.</p>
      </section>

      <section id="contact" className="w-full max-w-5xl mt-24">
        {/* <ContactSection /> */}
        <h2 className="text-3xl font-bold text-center">Section Contact</h2>
        <p className="mt-4 text-center">Ton formulaire de contact viendra ici.</p>
      </section>

    </main>
  );
}

