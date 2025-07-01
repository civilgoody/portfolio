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
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            About Section
          </h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Projects Section
          </h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Contact Section
          </h2>
          <p className="text-text-secondary">Coming soon...</p>
        </div>
      </section>

      {/* Mobile navigation padding */}
      <div className="h-20 md:h-0" />
    </main>
  );
}
