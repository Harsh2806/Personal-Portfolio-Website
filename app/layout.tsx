import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Suryawanshi's Portfolio",
  description:
    "Personal portfolio of Harsh Suryawanshi, a passionate AI/ML and frontend developer creating digital experiences that blend creativity with functionality.",
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "react",
    "typescript",
    "full-stack",
  ],
  authors: [{ name: "Harhs Suryawanshi" }],
  creator: "Harsh Suryawanshi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Harsh.dev",
    title: "Harsh Suryawanshi's Portfolio",
    description:
      "Personal portfolio showcasing creative web development projects and digital experiences.",
    siteName: "Harsh Suryawanshi's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Suryawanshi's Portfolio",
    description:
      "Personal portfolio showcasing creative web development projects and digital experiences.",
    creator: "@harshsuryawanshi",
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
    google: "your-google-verification-code",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
