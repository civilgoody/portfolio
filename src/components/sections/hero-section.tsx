import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";
import { SocialIcon } from "@/lib/icons";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden md:pt-8 bg-gradient-to-br from-primary-dark via-secondary-dark/50 to-primary-dark"
    >
      {/* Subtle background dots */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex justify-between items-end">
        {/* Name */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">
            <span className="text-foreground">Goodluck </span>
            <span className="text-primary">Lawani</span>
          </h1>
          <p className="text-muted mt-1">Fullstack Next.js Developer</p>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-4">
          {SOCIAL_LINKS.map((social, index) => (
            <Link
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-secondary-foreground hover:cursor-pointer hover:text-primary transition-all duration-300 transform hover:scale-110`}
              // style={{ animationDelay: `${index * 0.2}s` }}
              aria-label={social.label}
            >
              <SocialIcon icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
