"use client";

import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary-dark/25 via-primary-dark to-secondary-dark/35" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary-blue/10 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-primary-blue/15 rounded-full animate-pulse delay-1200" />
        <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-primary-blue/20 rounded-full animate-pulse delay-800" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fluid-rise" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Let&apos;s <span className="text-primary-blue">Connect</span>
          </h2>
          <p className="text-text-secondary text-lg mb-6">
            Ready to collaborate on your next project? Let&apos;s build
            something amazing together.
          </p>
          <div className="w-24 h-1 bg-primary-blue mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="space-y-8">
              {/* Current Status */}
              <div className="bg-secondary-dark/50 border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <div className="w-3 h-3 bg-accent-success rounded-full mr-3 animate-precision-pulse" />
                  Current Status
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  <span className="text-primary-blue font-semibold">
                    Junior Frontend Developer
                  </span>{" "}
                  at CareSync Healthcare, building modern healthcare solutions
                  with Next.js and React.
                </p>
                <div className="mt-4 inline-flex items-center text-accent-success text-sm">
                  <div className="w-2 h-2 bg-accent-success rounded-full mr-2 animate-pulse" />
                  Open to freelance opportunities
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-text-primary mb-4">
                  Get In Touch
                </h3>

                <div className="space-y-3">
                  <a
                    href="mailto:hello@goodlucklawani.dev"
                    className="flex items-center space-x-4 p-4 bg-secondary-dark/30 border border-border rounded-lg hover:border-primary-blue/50 transition-all duration-300 element-bend group"
                  >
                    <div className="w-10 h-10 bg-primary-blue/10 border border-primary-blue/30 rounded-lg flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-primary-blue"
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
                      <div className="text-text-primary font-medium group-hover:text-primary-blue transition-colors duration-300">
                        Email
                      </div>
                      <div className="text-text-secondary text-sm">
                        hello@goodlucklawani.dev
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://cal.com/goodlucklawani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-secondary-dark/30 border border-border rounded-lg hover:border-primary-blue/50 transition-all duration-300 element-bend group"
                  >
                    <div className="w-10 h-10 bg-primary-blue/10 border border-primary-blue/30 rounded-lg flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-primary-blue"
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
                      <div className="text-text-primary font-medium group-hover:text-primary-blue transition-colors duration-300">
                        Schedule a Call
                      </div>
                      <div className="text-text-secondary text-sm">
                        Book a 30-minute consultation
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-text-primary">
                  Find Me Online
                </h3>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((social, index) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredSocial(social.id)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className={cn(
                        "w-12 h-12 bg-secondary-dark/50 border border-border rounded-lg flex items-center justify-center transition-all duration-300 element-bend precision-focus",
                        hoveredSocial === social.id
                          ? "border-primary-blue/50 bg-primary-blue/10 text-primary-blue scale-110"
                          : "text-text-secondary hover:text-primary-blue hover:border-primary-blue/30"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                      aria-label={social.label}
                    >
                      <SocialIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
            }`}
          >
            <ContactForm />
          </div>
        </div>

        {/* Bottom Message */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="bg-secondary-dark/30 border border-border rounded-xl p-6">
            <p className="text-text-secondary mb-2">
              <span className="text-primary-blue font-semibold">Fun fact:</span>{" "}
              I&apos;ve watched Avatar: The Last Airbender{" "}
              <span className="text-primary-blue">∞</span> times and my favorite
              number is <span className="text-primary-blue font-bold">3</span>.
            </p>
            <p className="text-text-muted text-sm">
              Let&apos;s discuss your project over some virtual tea! 🍵
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, you'd send this to your backend or email service
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className="bg-secondary-dark/50 border border-border rounded-xl p-6">
      <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
        <div className="w-2 h-2 bg-primary-blue rounded-full mr-3 animate-precision-pulse" />
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-text-secondary text-sm font-medium mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-text-primary placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors duration-200 precision-focus"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-text-secondary text-sm font-medium mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-text-primary placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors duration-200 precision-focus"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-text-secondary text-sm font-medium mb-2"
          >
            Project Type
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-text-primary focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors duration-200 precision-focus"
          >
            <option value="">Select project type</option>
            <option value="fullstack-web-app">Fullstack Web Application</option>
            <option value="frontend-project">Frontend Development</option>
            <option value="consulting">Technical Consulting</option>
            <option value="collaboration">Collaboration Opportunity</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-text-secondary text-sm font-medium mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-text-primary placeholder-text-muted focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors duration-200 resize-none precision-focus"
            placeholder="Tell me about your project, timeline, and any specific requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={
            isSubmitting ||
            !formData.name ||
            !formData.email ||
            !formData.message
          }
          className={cn(
            "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 precision-focus",
            isSubmitting ||
              !formData.name ||
              !formData.email ||
              !formData.message
              ? "bg-text-muted/20 text-text-muted cursor-not-allowed"
              : "bg-primary-blue text-primary-dark hover:bg-blue-400 transform hover:scale-[1.02] shadow-lg"
          )}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="text-center p-4 bg-accent-success/10 border border-accent-success/30 rounded-lg">
            <p className="text-accent-success font-medium">
              ✓ Message sent successfully! I&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 font-medium">
              ✗ Something went wrong. Please try again or reach out via email.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const iconMap = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    mail: (
      <svg
        className="w-5 h-5"
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
