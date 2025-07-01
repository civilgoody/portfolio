export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export const PROJECTS: Project[] = [
  {
    id: "elemental-recs",
    title: "Elemental Recs",
    description: "AI-powered Avatar TLA movie recommender using Gemini AI",
    details:
      "A fullstack Next.js application that combines my passion for Avatar: The Last Airbender with modern AI technology. Users can discover movies based on elemental themes, with personalized recommendations powered by Google's Gemini AI and real-time data from TMDB API.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini AI",
      "TMDB API",
      "Tailwind CSS",
    ],
    liveUrl: "https://e-recs.vercel.app",
    metrics: [
      { label: "AI Model", value: "Gemini Pro" },
      { label: "Movie Database", value: "TMDB API" },
      { label: "Theme", value: "Avatar TLA" },
    ],
  },
  {
    id: "pq-library",
    title: "PQ Library PWA",
    description: "Engineering past questions archive with 5K+ views",
    details:
      "A Progressive Web App designed for engineering students to access past questions and study materials. Achieved 61% user engagement rate through strategic optimization, reducing file sizes from 300KB to 2MB while maintaining quality and performance.",
    technologies: [
      "Next.js",
      "PWA",
      "TypeScript",
      "Performance Optimization",
      "SEO",
    ],
    liveUrl: "https://pql.vercel.app",
    metrics: [
      { label: "Views", value: "5K+" },
      { label: "Engagement", value: "61%" },
      { label: "Optimization", value: "300KB-2MB" },
    ],
  },
  {
    id: "cyber-medical",
    title: "Cyber Medical Dashboard",
    description: "MFA-secured admin dashboard with AI threat analysis",
    details:
      "A comprehensive cybersecurity dashboard for medical institutions featuring multi-factor authentication, real-time threat monitoring, and AI-powered security analysis. Built with Supabase backend for secure data management and real-time updates.",
    technologies: [
      "Next.js",
      "Supabase",
      "MFA",
      "AI Analysis",
      "Real-time Monitoring",
    ],
    liveUrl: "https://cybermedical.vercel.app",
    metrics: [
      { label: "Security", value: "MFA Protected" },
      { label: "Analysis", value: "AI-Powered" },
      { label: "Updates", value: "Real-time" },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/goodluckurom",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/goodluck-lawani",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@goodlucklawani.dev",
    icon: "mail",
  },
];

export const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Supabase", "API Development", "Database Design"],
  tools: ["Git", "Vercel", "Performance Optimization", "AI Integration"],
};

export const EXPERIENCE = [
  {
    company: "CareSync Healthcare",
    role: "Junior Frontend Developer",
    period: "Current",
    description: "Building modern healthcare solutions with React and Next.js",
  },
  {
    company: "Recall AI",
    role: "Frontend Developer",
    period: "Previous",
    description: "Developed AI-powered user interfaces and experiences",
  },
  {
    company: "PQ Library",
    role: "Fullstack Developer",
    period: "Startup",
    description: "Built and optimized educational platform serving 5K+ users",
  },
];
