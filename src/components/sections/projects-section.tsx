import { PROJECTS } from "@/lib/constants";
import { ArrowRightIcon } from "lucide-react";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export function ProjectsSection() {

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
        <div className="text-center mb-16 transition-all duration-1000">
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
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              // index={index}
              // isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 transition-all duration-1000 delay-1000">
          <p className="text-text-secondary mb-6">
            Want to see more projects or collaborate?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary text-primary-dark px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 precision-focus shadow-lg"
          >
            Get In Touch
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-secondary-dark/50 border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 element-bend"
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
              <LuExternalLink className="w-4 h-4" />
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted/10 border border-muted/30 rounded-lg text-muted hover:bg-muted/20 hover:text-text-primary transition-all duration-200 precision-focus"
                aria-label="View source code"
              >
                <FaGithub className="w-4 h-4" />
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
    </div>
  );
}
