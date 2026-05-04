import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://linear.yonasaddisu.me";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Linear Clone",
  "description": "A purpose-built product development system for planning and building products. Designed for the AI era.",
  "url": siteUrl,
  "applicationCategory": "ProductivitySoftware",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Yonas Addisu",
    "url": "https://yonasaddisu.me"
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Linear Clone — Product Development System for Teams & Agents",
    template: "%s | Linear Clone",
  },
  description:
    "A pixel-perfect clone of Linear.app — the purpose-built product development system for planning and building products. Designed for the AI era. Built by Yonas Addisu.",
  keywords: [
    "linear",
    "linear clone",
    "linear app",
    "linear.app clone",
    "project management",
    "issue tracker",
    "product development",
    "team collaboration",
    "AI era",
    "yonas addisu",
    "linear-clone",
  ],
  authors: [{ name: "Yonas Addisu", url: siteUrl }],
  creator: "Yonas Addisu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Linear Clone",
    title: "Linear Clone — Product Development System for Teams & Agents",
    description:
      "A pixel-perfect clone of Linear.app — the purpose-built product development system for planning and building products. Designed for the AI era.",
    images: [
      {
        url: "/images/og-screenshot.png",
        width: 1920,
        height: 1080,
        alt: "Linear Clone — app screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linear Clone — Product Development System for Teams & Agents",
    description:
      "A pixel-perfect clone of Linear.app built by Yonas Addisu. Purpose-built for planning and building products. Designed for the AI era.",
    images: ["/images/og-screenshot.png"],
    creator: "@yonasaddisu",
  },
  alternates: {
    canonical: siteUrl,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
