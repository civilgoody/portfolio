"use client";

import { useEffect, useState } from "react";
import { SKILLS, EXPERIENCE } from "@/lib/constants";

export function AboutSection() {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary-dark/30 via-primary-dark to-secondary-dark/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fluid-rise" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            About <span className="text-primary-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-blue mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Personal Story */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Crafting Digital Experiences with{" "}
                <span className="text-primary-blue">Precision & Focus</span>
              </h3>

              <p className="text-text-secondary leading-relaxed">
                I&apos;m a fullstack Next.js developer with{" "}
                <strong className="text-primary-blue">3+ years</strong> of
                experience building modern web applications. Currently serving
                as a Junior Frontend Developer at{" "}
                <span className="text-primary-blue font-semibold">
                  CareSync Healthcare
                </span>
                , where I craft digital solutions that impact real lives.
              </p>

              <p className="text-text-secondary leading-relaxed">
                My journey began with a Civil Engineering background from the{" "}
                <span className="text-primary-blue">University of Lagos</span>{" "}
                and specialized training at{" "}
                <span className="text-primary-blue">
                  Holberton School/ALX Africa
                </span>
                . This unique blend gives me a structural approach to code and
                an eye for detail that rivals a sniper&apos;s precision.
              </p>

              <p className="text-text-secondary leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me immersed in the
                world of{" "}
                <span className="text-primary-blue">
                  Avatar: The Last Airbender
                </span>{" "}
                or perfecting my aim in{" "}
                <span className="text-primary-blue">Call of Duty Mobile</span>.
                Both passions influence my work - the fluid adaptability of
                element bending and the focused precision of a perfect shot.
              </p>

              {/* Fun Facts */}
              <div className="grid grid-cols-3 gap-4 mt-8 p-6 bg-secondary-dark/50 rounded-lg border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">3</div>
                  <div className="text-sm text-text-muted">Favorite Number</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">
                    #0090F1
                  </div>
                  <div className="text-sm text-text-muted">Favorite Color</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue">∞</div>
                  <div className="text-sm text-text-muted">
                    Avatar Rewatches
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills & Experience */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {/* Skills Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                <div className="w-2 h-2 bg-primary-blue rounded-full mr-3 animate-precision-pulse" />
                Technical Arsenal
              </h3>

              <div className="space-y-6">
                {Object.entries(SKILLS).map(([category, skills], index) => (
                  <div
                    key={category}
                    className={`transition-all duration-500 ${
                      isVisible ? "animate-slide-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${600 + index * 200}ms` }}
                  >
                    <h4 className="text-text-secondary font-medium mb-3 capitalize">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-blue/10 border border-primary-blue/30 rounded-full text-sm text-primary-blue hover:bg-primary-blue/20 transition-colors duration-200 element-bend"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                <div className="w-2 h-2 bg-primary-blue rounded-full mr-3 animate-precision-pulse" />
                Experience Journey
              </h3>

              <div className="space-y-4">
                {EXPERIENCE.map((exp, index) => (
                  <div
                    key={exp.company}
                    className={`relative pl-8 pb-6 transition-all duration-500 ${
                      isVisible ? "animate-slide-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${800 + index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-3 h-3 bg-primary-blue rounded-full border-2 border-secondary-dark" />
                    {/* Timeline line */}
                    {index < EXPERIENCE.length - 1 && (
                      <div className="absolute left-[5px] top-4 w-0.5 h-12 bg-border" />
                    )}

                    <div className="bg-secondary-dark/30 rounded-lg p-4 border border-border/50 hover:border-primary-blue/30 transition-colors duration-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-text-primary">
                          {exp.role}
                        </h4>
                        <span className="text-xs text-primary-blue bg-primary-blue/10 px-2 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary-blue font-medium text-sm mb-2">
                        {exp.company}
                      </p>
                      <p className="text-text-muted text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
