"use client";

import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SocialIcon } from "@/lib/icons";
import Link from "next/link";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

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
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary/10 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse delay-1200" />
        <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-800" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fluid-rise" : "opacity-0 translate-y-8"
          }`}
        >
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
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
            }`}
          >
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
      <h3 className="text-xl font-bold text-secondary-foreground mb-6 flex items-center">
        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-precision-pulse" />
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-secondary-foreground text-sm font-medium mb-2"
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
              className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-primary placeholder-muted focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 precision-focus"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-secondary-foreground text-sm font-medium mb-2"
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
              className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-primary placeholder-muted focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 precision-focus"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-secondary-foreground text-sm font-medium mb-2"
          >
            Project Type
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-secondary-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 precision-focus"
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
            className="block text-secondary-foreground text-sm font-medium mb-2"
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
            className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-primary placeholder-muted focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 resize-none precision-focus"
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
              ? "bg-muted/20 text-muted cursor-not-allowed"
              : "bg-primary primary-dark hover:bg-blue-400 transform hover:scale-[1.02] shadow-lg"
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
          <div className="text-center p-4 bg-success/10 border border-success/30 rounded-lg">
            <p className="text-success font-medium">
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
