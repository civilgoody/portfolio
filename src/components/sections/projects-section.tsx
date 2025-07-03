"use client";

import { useState, useEffect } from "react";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark via-secondary-dark/40 to-primary-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-700" />
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-primary/10 rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fluid-rise" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg mb-6">
            Fullstack applications built with precision and purpose
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
              isHovered={hoveredProject === project.id}
              onHover={setHoveredProject}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <p className="text-text-secondary mb-6">
            Want to see more projects or collaborate?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 precision-focus shadow-lg"
          >
            Get In Touch
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  isVisible: boolean;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

function ProjectCard({
  project,
  index,
  isVisible,
  isHovered,
  onHover,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-secondary-dark/50 border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 element-bend",
        isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
      )}
      style={{ animationDelay: `${300 + index * 200}ms` }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex space-x-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all duration-200 precision-focus"
              aria-label="View live project"
            >
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted/10 border border-muted/30 rounded-lg text-muted hover:bg-muted/20 hover:text-text-primary transition-all duration-200 precision-focus"
                aria-label="View source code"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Primary Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 border border-primary/30 rounded-md text-xs text-primary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted/10 border border-muted/30 rounded-md text-xs text-muted">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-1 gap-2">
            {project.metrics.slice(0, 2).map((metric) => (
              <div
                key={metric.label}
                className="flex justify-between items-center text-xs"
              >
                <span className="text-muted">{metric.label}:</span>
                <span className="text-success font-medium">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Expandable Details */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isHovered ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 border-t border-border/50 pt-4">
          <h4 className="text-sm font-semibold text-text-primary mb-3">
            Project Details
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {project.details}
          </p>

          {/* Full Tech Stack */}
          <div className="mb-4">
            <h5 className="text-xs font-medium text-muted mb-2">
              Technologies Used:
            </h5>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/5 border border-primary/20 rounded-md text-xs text-primary/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* All Metrics */}
          {project.metrics && project.metrics.length > 2 && (
            <div className="grid grid-cols-1 gap-1">
              {project.metrics.slice(2).map((metric) => (
                <div
                  key={metric.label}
                  className="flex justify-between items-center text-xs"
                >
                  <span className="text-muted">{metric.label}:</span>
                  <span className="text-success font-medium">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary text-primary-dark text-center py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-400 transition-all duration-300 precision-focus"
            >
              View Live
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-muted/30 text-muted text-center py-2 px-4 rounded-lg text-sm font-semibold hover:bg-muted/10 hover:text-text-primary transition-all duration-300 precision-focus"
              >
                Source
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover indicator */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1 bg-primary transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
