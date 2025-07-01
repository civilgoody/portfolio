import { MainNav } from "@/components/navigation/main-nav";
import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <main className="relative">
      <MainNav />
      <HeroSection />

      {/* Placeholder sections - we'll build these next */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-dark/30 via-primary-dark to-secondary-dark/20" />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            About Section
          </h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark via-secondary-dark/40 to-primary-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary-blue/15 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary-blue/20 rounded-full animate-pulse delay-700" />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Projects Section
          </h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-secondary-dark/25 via-primary-dark to-secondary-dark/35" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary-blue/10 rounded-full animate-pulse delay-500" />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Contact Section
          </h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>
    </main>
  );
}
