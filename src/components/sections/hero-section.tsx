"use client";

import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-element-gradient">
        <div className="absolute inset-0 bg-water-flow opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main heading with staggered animation */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fluid-rise" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-text-primary">Goodluck</span>
            <br />
            <span className="text-primary-blue animate-element-flow">
              Lawani
            </span>
          </h1>
        </div>

        {/* Subtitle with delay */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl md:text-2xl text-text-secondary mb-2">
            Fullstack Next.js Developer
          </p>
          <p className="text-lg text-text-muted mb-8">
            3+ years crafting digital experiences with{" "}
            <span className="text-primary-blue font-semibold">
              precision & focus
            </span>
          </p>
        </div>

        {/* CTA buttons with more delay */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="bg-primary-blue text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 precision-focus"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-primary-blue text-primary-blue px-8 py-3 rounded-lg font-semibold hover:bg-primary-blue hover:text-primary-dark transition-all duration-300 precision-focus"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Social links with individual delays */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="flex justify-center space-x-6">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-text-secondary hover:text-primary-blue transition-all duration-300 transform hover:scale-110 precision-focus animate-element-flow`}
                style={{ animationDelay: `${index * 0.2}s` }}
                aria-label={social.label}
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-muted rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// Simple icon components for social links
function SocialIcon({ icon }: { icon: string }) {
  const iconMap = {
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    mail: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  };

  return iconMap[icon as keyof typeof iconMap] || null;
}
