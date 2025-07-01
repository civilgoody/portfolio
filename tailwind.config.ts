import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom blue theme colors
        "primary-blue": "#0090F1",
        "primary-dark": "#0F172A",
        "text-primary": "#F8FAFC",
        "text-secondary": "#64748B",
        "text-muted": "#475569",
        "accent-success": "#10B981",
        "accent-warning": "#F59E0B",

        // Shadcn/ui color system
        background: "#0F172A",
        foreground: "#F8FAFC",
        border: "hsl(217.2 32.6% 17.5%)",
        input: "hsl(217.2 32.6% 17.5%)",
        ring: "#0090F1",
        card: {
          DEFAULT: "hsl(222.2 84% 4.9%)",
          foreground: "#F8FAFC",
        },
        popover: {
          DEFAULT: "hsl(222.2 84% 4.9%)",
          foreground: "#F8FAFC",
        },
        primary: {
          DEFAULT: "#0090F1",
          foreground: "#F8FAFC",
        },
        secondary: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "#F8FAFC",
        },
        muted: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "hsl(215 20.2% 65.1%)",
        },
        accent: {
          DEFAULT: "hsl(217.2 32.6% 17.5%)",
          foreground: "#F8FAFC",
        },
        destructive: {
          DEFAULT: "hsl(0 62.8% 30.6%)",
          foreground: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fluid-rise": "fluid-rise 0.6s ease-out",
        "element-flow": "element-flow 2s ease-in-out infinite",
        "precision-pulse": "precision-pulse 1.5s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
      keyframes: {
        "fluid-rise": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "element-flow": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "precision-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.8",
          },
        },
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
