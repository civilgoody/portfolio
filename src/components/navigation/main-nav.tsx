"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export function MainNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isFabOpen, setIsFabOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.id);
      const scrollY = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsFabOpen(false); // Close FAB after navigation
  };

  const toggleFab = () => {
    setIsFabOpen(!isFabOpen);
  };

  // Close FAB when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const fabContainer = document.getElementById("fab-container");
      if (fabContainer && !fabContainer.contains(event.target as Node)) {
        setIsFabOpen(false);
      }
    };

    if (isFabOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFabOpen]);

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className="hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:flex md:justify-center md:p-4">
        <div className="bg-secondary-dark/95 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-xl">
          <ul className="flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 link-underline",
                    activeSection === link.id
                      ? "text-primary-blue"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile FAB Navigation */}
      <div className="md:hidden fixed bottom-6 right-6 z-50" id="fab-container">
        {/* Navigation Menu Items */}
        <div
          className={cn(
            "absolute bottom-16 right-0 flex flex-col space-y-3 transition-all duration-300 ease-out",
            isFabOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          )}
        >
          {NAV_LINKS.slice()
            .reverse()
            .map((link, index) => (
              <div
                key={link.id}
                className={cn(
                  "transform transition-all duration-300 ease-out",
                  isFabOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                )}
                style={{
                  transitionDelay: isFabOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "flex items-center space-x-3 bg-secondary-dark/95 backdrop-blur-md border border-border rounded-full px-4 py-3 text-sm font-medium transition-all duration-200 hover:scale-105 element-bend shadow-lg",
                    activeSection === link.id
                      ? "text-primary-blue border-primary-blue bg-primary-blue/20"
                      : "text-text-secondary hover:text-text-primary hover:border-primary-blue/50"
                  )}
                >
                  <SectionIcon sectionId={link.id} />
                  <span className="whitespace-nowrap">{link.label}</span>
                  {activeSection === link.id && (
                    <div className="w-2 h-2 bg-primary-blue rounded-full animate-precision-pulse" />
                  )}
                </button>
              </div>
            ))}
        </div>

        {/* FAB Button - Professional Crosshair Design */}
        <button
          onClick={toggleFab}
          className={cn(
            "relative w-16 h-16 bg-secondary-dark/90 hover:bg-secondary-dark rounded-full shadow-xl transition-all duration-300 flex items-center justify-center group backdrop-blur-sm border-2 border-text-muted/30 hover:border-primary-blue/50",
            isFabOpen
              ? "rotate-180 scale-110 border-primary-blue/70"
              : "rotate-0 scale-100"
          )}
          aria-label="Navigation Menu"
        >
          {/* Professional Crosshair Image */}
          <div
            className={cn(
              "relative w-12 h-12 transition-all duration-300",
              isFabOpen ? "opacity-30" : "opacity-100"
            )}
          >
            <Image
              src="/images/sniper-cyber-blue-tone.png"
              alt="Crosshair"
              width={60}
              height={60}
              className="w-full h-full object-contain brightness-125 contrast-125"
            />
          </div>

          {/* X when open - overlay on crosshair */}
          {isFabOpen && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-8 h-8">
                <div className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-text-primary transform -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-200 shadow-sm" />
                <div className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-text-primary transform -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-200 shadow-sm" />
              </div>
            </div>
          )}

          {/* Pulse ring when active section changes */}
          <div
            className={cn(
              "absolute inset-0 rounded-full border-2 border-primary-blue transition-all duration-500",
              "animate-ping opacity-0"
              // Show ping when section changes
            )}
          />

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary-blue/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Current section indicator */}
        <div className="absolute -top-1 -left-1 w-5 h-5 bg-primary-blue rounded-full flex items-center justify-center shadow-lg border-2 border-secondary-dark">
          <div className="w-2 h-2 bg-text-primary rounded-full animate-precision-pulse" />
        </div>
      </div>
    </>
  );
}

// Icons for each section
function SectionIcon({ sectionId }: { sectionId: string }) {
  const iconMap = {
    hero: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    about: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    projects: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    contact: (
      <svg
        className="w-4 h-4"
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

  return iconMap[sectionId as keyof typeof iconMap] || null;
}
