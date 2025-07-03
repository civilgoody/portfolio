"use client";

import { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import { SocialIcon } from "@/lib/icons";

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
      {/* Subtle animated background - consistent with other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-secondary-dark/50 to-primary-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse delay-500" />
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
            <span className="text-foreground">Goodluck</span>
            <br />
            <span className="text-primary animate-element-flow">Lawani</span>
          </h1>
        </div>

        {/* Subtitle with delay */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl md:text-2xl text-secondary-foreground mb-2">
            Fullstack Next.js Developer
          </p>
          <p className="text-lg text-muted mb-8">
            3+ years crafting digital experiences with{" "}
            <span className="text-primary font-semibold">
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
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 precision-focus shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 precision-focus shadow-lg"
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
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-secondary-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 precision-focus animate-element-flow`}
                style={{ animationDelay: `${index * 0.2}s` }}
                aria-label={social.label}
              >
                <SocialIcon icon={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-foreground rounded-full flex justify-center bg-secondary-dark/50 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
