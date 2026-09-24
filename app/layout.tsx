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
  "@type": "SoftwareApplication",
  "name": "Linear Clone",
  "description": "A pixel-perfect clone of Linear.app - the purpose-built product development system for planning and building products. Designed for the AI era with seamless team collaboration and AI-powered workflows.",
  "url": siteUrl,
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "author": {
    "@type": "Person",
    "name": "Yonas Addisu",
    "url": "https://yonasaddisu.me",
    "sameAs": [
      "https://x.com/elyonox",
      "https://github.com/yoni-crypto",
      "https://linkedin.com/in/elyonox"
    ]
  },
  "dateCreated": "2026-05-27",
  "dateModified": "2026-05-27",
  "version": "1.0.0",
  "screenshot": [
    "/images/og-screenshot.png"
  ],
  "featureList": [
    "Issue tracking and project management",
    "Team collaboration and real-time updates",
    "AI-powered workflow automation",
    "Customizable workflows and views",
    "Seamless integrations with popular tools",
    "Advanced reporting and analytics"
  ],
  "keywords": [
    "linear",
    "linear clone",
    "project management software",
    "issue tracker",
    "product development",
    "team collaboration",
    "saas",
    "web application"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Linear Clone: Ultimate Product Development Platform",
    template: "%s | Linear Clone",
  },
  description:
    "Experience Linear Clone - a pixel-perfect implementation of Linear.app built for modern product teams. Features AI-powered workflows, seamless collaboration, and intuitive issue tracking. Built by Yonas Addisu.",
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
    "product management software",
    "issue tracking tool",
    "team collaboration platform",
    "workflow management",
    "agile project management",
    "software development tool",
    "saas product",
    "web application"
  ],
  authors: [{ name: "Yonas Addisu", url: siteUrl }],
  creator: "Yonas Addisu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Linear Clone",
    title: "Linear Clone: Ultimate Product Development Platform",
    description:
      "Experience Linear Clone - a pixel-perfect implementation of Linear.app built for modern product teams. Features AI-powered workflows, seamless collaboration, and intuitive issue tracking.",
    images: [
      {
        url: "/images/og-screenshot.png",
        width: 1920,
        height: 1080,
        alt: "Linear Clone app screenshot showing modern interface",
      },
      {
        url: "/images/og-features.png",
        width: 1200,
        height: 630,
        alt: "Linear Clone features overview",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linear Clone: Ultimate Product Development Platform",
    description:
      "Experience Linear Clone - a pixel-perfect implementation of Linear.app built for modern product teams. Features AI-powered workflows, seamless collaboration, and intuitive issue tracking.",
    images: ["/images/og-screenshot.png"],
    creator: "@yonasaddisu",
    site: "@linearclone",
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
