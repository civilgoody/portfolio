"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SocialIcon } from "@/lib/icons";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export function ContactSection() {

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary-dark/25 via-primary-dark to-secondary-dark/35" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary/10 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse delay-1200" />
        <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-800" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-secondary-foreground text-lg mb-6">
            Ready to collaborate on your next project? Let&apos;s build
            something amazing together.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="transition-all duration-1000 delay-300">
            <div className="space-y-8">
              {/* Current Status */}
              <div className="bg-secondary-dark/50 border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-secondary-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-3 animate-precision-pulse" />
                  Current Status
                </h3>
                <p className="text-secondary-foreground leading-relaxed">
                  <span className="text-primary font-semibold">
                    Junior Frontend Developer
                  </span>{" "}
                  at CareSync Healthcare, building modern healthcare solutions
                  with Next.js and React.
                </p>
                <div className="mt-4 inline-flex items-center text-success text-sm">
                  <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                  Open to freelance opportunities
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-secondary-foreground mb-4">
                  Get In Touch
                </h3>

                <div className="space-y-3">
                  <a
                    href="mailto:hello@goodlucklawani.dev"
                    className="flex items-center space-x-4 p-4 bg-secondary-dark/30 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 element-bend group"
                  >
                    <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-primary"
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
                    </div>
                    <div>
                      <div className="text-primary font-medium group-hover:text-primary transition-colors duration-300">
                        Email
                      </div>
                      <div className="text-secondary-foreground text-sm">
                        hello@goodlucklawani.dev
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://cal.com/goodlucklawani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-secondary-dark/30 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 element-bend group"
                  >
                    <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-primary font-medium group-hover:text-primary transition-colors duration-300">
                        Schedule a Call
                      </div>
                      <div className="text-secondary-foreground text-sm">
                        Book a 30-minute consultation
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-secondary-foreground">
                  Find Me Online
                </h3>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((social, index) => (
                    <Link
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-12 h-12 bg-secondary-dark/50 border border-border rounded-lg flex items-center justify-center transition-all duration-300 element-bend precision-focus",
                        "text-secondary-foreground hover:text-primary hover:border-primary/50"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                      aria-label={social.label}
                    >
                      <SocialIcon icon={social.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="transition-all duration-1000 delay-500">
            <ContactForm />
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 transition-all duration-1000 delay-700">
          <div className="bg-secondary-dark/30 border border-border rounded-xl p-6">
            <p className="text-secondary-foreground mb-2">
              <span className="text-primary font-semibold">Fun fact:</span>{" "}
              I&apos;ve watched Avatar: The Last Airbender{" "}
              <span className="text-primary">∞</span> times and my favorite
              number is <span className="text-primary font-bold">3</span>.
            </p>
            <p className="text-muted text-sm">
              Let&apos;s discuss your project over some virtual tea! 🍵
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

