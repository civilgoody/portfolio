import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
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
        background: "#0F172A",
        foreground: "#F8FAFC",
        border: "#374151",
        input: "#2d3748",
        ring: "#0090F1",
        primary: {
          DEFAULT: "#0090F1",
          foreground: "#0F172A",
          dark: "#0a0e1a",
        },
        secondary: {
          DEFAULT: "#1a1f2e",
          foreground: "#F8FAFC",
          dark: "#1a1f2e",
        },
        muted: {
          DEFAULT: "#94a3b8",
          foreground: "#94a3b8",
        },
        card: {
          DEFAULT: "#1a1f2e",
          foreground: "#F8FAFC",
        },
        popover: {
          DEFAULT: "#1a1f2e",
          foreground: "#F8FAFC",
        },
        accent: {
          DEFAULT: "#374151",
          foreground: "#F8FAFC",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#F8FAFC",
        },
        success: "#10B981",
        warning: "#F59E0B",
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
        lg: "0.5rem", // 8px
        md: "0.375rem", // 6px  
        sm: "0.25rem", // 4px
      },
    },
  },
  plugins: [animate],
};

export default config;
