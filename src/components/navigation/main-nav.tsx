"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { NAV_LINKS } from "@/lib/constants";

export function MainNav() {
  const [activeSection, setActiveSection] = useState("hero");
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
  };

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className="hidden md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:flex md:justify-center md:p-4">
        <div className="bg-primary-dark/90 backdrop-blur-md border border-border rounded-full px-6 py-3">
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

      {/* Mobile Navigation - Bottom */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-primary-dark/95 backdrop-blur-md border-t border-border">
          <ul className="flex items-center justify-around py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "flex flex-col items-center space-y-1 px-3 py-2 text-xs font-medium transition-colors duration-200",
                    activeSection === link.id
                      ? "text-primary-blue"
                      : "text-text-secondary"
                  )}
                >
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-200",
                      activeSection === link.id
                        ? "bg-primary-blue animate-precision-pulse"
                        : "bg-text-muted"
                    )}
                  />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
