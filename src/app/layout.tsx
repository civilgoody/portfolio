import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goodluck Lawani | Fullstack Next.js Developer",
  description:
    "Precision-focused fullstack Next.js developer with 3+ years of experience building modern web applications. Currently at CareSync Healthcare, crafting digital solutions with React, TypeScript, and AI integration.",
  keywords: [
    "Goodluck Lawani",
    "Frontend Developer",
    "Fullstack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "CareSync Healthcare",
    "Web Developer Nigeria",
    "JavaScript Developer",
  ],
  authors: [{ name: "Goodluck Lawani" }],
  creator: "Goodluck Lawani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goodlucklawani.dev",
    title: "Goodluck Lawani | Fullstack Next.js Developer",
    description:
      "Precision-focused fullstack developer building modern web experiences with Next.js, React, and AI integration. 3+ years of professional experience.",
    siteName: "Goodluck Lawani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodluck Lawani | Fullstack Next.js Developer",
    description:
      "Precision-focused fullstack developer building modern web experiences with Next.js, React, and AI integration.",
    creator: "@goodlucklawani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
