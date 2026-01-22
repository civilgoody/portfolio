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
  imageUrl: string;
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

export interface ContactMethod {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: string;
}

export interface ProjectType {
  value: string;
  label: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ezzfpl",
    title: "EzzFpl",
    description: "Fantasy Premier League Team Planner",
    details:
      "As a huge FPL fan, I built an app to plan my team and shared with the fpl community on X.",
    technologies: ["Next.js", "TypeScript"],
    liveUrl: "https://ezzfpl.vercel.app",
    githubUrl: "",
    metrics: [
      // { label: "Views", value: "5K+" },
      // { label: "Engagement", value: "61%" },
      // { label: "Optimization", value: "300KB-2MB" },
    ],
    imageUrl: "/images/ezzfpl.png",
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
    githubUrl: "https://github.com/civilgoody/q",
    metrics: [
      { label: "Views", value: "5K+" },
      { label: "Engagement", value: "61%" },
      { label: "Optimization", value: "300KB-2MB" },
    ],
    imageUrl: "/images/pqlibrary.png",
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
    githubUrl: "https://github.com/civilgoody/cybermedical",
    metrics: [
      { label: "Security", value: "MFA Protected" },
      { label: "Analysis", value: "AI-Powered" },
      { label: "Updates", value: "Real-time" },
    ],
    imageUrl: "/images/cybermedical.png",
  },
  // {
  //   id: "elemental-recs",
  //   title: "Elemental Recs",
  //   description:
  //     "AI-powered Avatar: The Last Airbender inspired movie/tv show recommender using Gemini AI",
  //   details:
  //     "A fullstack Next.js application that combines my passion for Avatar: The Last Airbender with modern AI technology. Users can discover movies based on elemental themes, with personalized recommendations powered by Google's Gemini AI and real-time data from TMDB API.",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "Gemini AI",
  //     "TMDB API",
  //     "Tailwind CSS",
  //   ],
  //   liveUrl: "https://e-recs.vercel.app",
  //   githubUrl: "https://github.com/civilgoody/elemental-recs",
  //   metrics: [
  //     { label: "AI Model", value: "Gemini AI" },
  //     { label: "Movie Database", value: "TMDB API" },
  //     { label: "Theme", value: "Avatar TLA" },
  //   ],
  //   imageUrl: "/images/e-recs.jpeg",
  // },
];

export const NAV_LINKS: NavLink[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const EMAIL = "civilgoody@gmail.com";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/civilgoody",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/civilgoody",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: "mail",
  },
];

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    description: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: "mail",
  },
  {
    id: "calendar",
    label: "Schedule a Call",
    description: "Book a 30-minute consultation",
    href: "https://cal.com/civilgoody",
    icon: "calendar",
  },
];

export const PROJECT_TYPES: ProjectType[] = [
  { value: "", label: "Select project type" },
  { value: "fullstack-web-app", label: "Fullstack Web Application" },
  { value: "frontend-project", label: "Frontend Development" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "collaboration", label: "Collaboration Opportunity" },
  { value: "other", label: "Other" },
];

export const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Supabase", "API Development", "Database Design"],
  tools: ["Git", "Vercel", "Performance Optimization", "AI Integration"],
};

export const EXPERIENCE = [
  {
    company: "Rokswood",
    role: "Frontend Developer - Contract",
    period: "Current",
    description: "Building ecommerce farming web app",
  },
  {
    company: "CareSync Healthcare",
    role: "Junior Frontend Developer",
    period: "Previous",
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

export const CONTACT_INFO = {
  currentStatus: {
    role: "Junior Frontend Developer",
    company: "CareSync Healthcare",
    description: "building modern healthcare solutions with Next.js and React",
    isOpenToFreelance: true,
  },
  funFacts: {
    avatarRewatches: "∞",
    favoriteNumber: 3,
    favoriteColor: "#0090F1",
  },
};
