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
  metadataBase: new URL("https://goodydev.vercel.app"),
  title: "Goodluck Lawani | Fullstack Next.js Developer",
  description:
    "Fullstack Next.js developer with 3+ years of experience building modern web applications. Currently at CareSync Healthcare, crafting digital solutions with Nextjs, TypeScript, and AI integration.",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goodydev.vercel.app",
    title: "Goodluck Lawani | Fullstack Next.js Developer",
    description:
      "Fullstack developer building modern web experiences with Next.js, React, and AI integration. 3+ years of professional experience.",
    siteName: "Goodluck Lawani Portfolio",
    images: [
      {
        url: "/images/portfolio-shot.png",
        width: 1200,
        height: 630,
        alt: "Goodluck Lawani - Fullstack Next.js Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodluck Lawani | Fullstack Next.js Developer",
    description:
      "Precision-focused fullstack developer building modern web experiences with Next.js, React, and AI integration.",
    creator: "@civilgoody",
    images: ["/images/portfolio-shot.png"],
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
