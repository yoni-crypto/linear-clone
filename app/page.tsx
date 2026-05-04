import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import CustomerQuotes from "@/components/landing/CustomerQuotes";
import Footer from "@/components/landing/Footer";
import LogoMarquee from "@/components/landing/LogoMarquee";
import Benefits from "@/components/landing/Benefits";
import IntakeSection from "@/components/landing/IntakeSections";
import PlanSection from "@/components/landing/PlanSection";
import BuildSection from "@/components/landing/BuildSection";
import DiffsSection from "@/components/landing/DiffsSection";
import MonitorSection from "@/components/landing/MonitorScreen";
import ChangelogSection from "@/components/landing/changelogSection";



export const metadata: Metadata = {
  title: "Linear – The system for product development",
  description: "Purpose-built for planning and building products with AI agents.",
  openGraph: {
    title: "Linear – The system for product development",
    description: "Purpose-built for planning and building products with AI agents.",
    images: [{ url: "https://linear.app/static/og/homepage.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@linear",
    creator: "@linear",
    title: "Linear – The system for product development",
    description: "Purpose-built for planning and building products with AI agents.",
    images: ["https://linear.app/static/og/homepage.jpg"],
  },
};

function CTASection() {
  return (
    <section style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 40,
      width: "100%",
      marginBlock: "224px",
    }}>
      <h2 style={{
        fontSize: "4.5rem",
        lineHeight: 1,
        letterSpacing: "-0.022em",
        fontWeight: 510,
        textWrap: "balance" as const,
        textAlign: "center" as const,
        color: "#f7f8f8",
        margin: 0,
        maxWidth: "16ch",
      }}>Built for the future. Available today.</h2>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Link href="/signup" style={{
          appearance: "none" as const,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap" as const,
          userSelect: "none" as const,
          height: 44,
          fontSize: 16,
          fontWeight: 510,
          padding: "0 20px",
          gap: 6,
          borderRadius: 9999,
          background: "#e5e5e6",
          border: "1px solid #e5e5e6",
          color: "#08090a",
          textDecoration: "none",
          transition: "0.16s cubic-bezier(0.25,0.46,0.45,0.94)",
          transitionProperty: "border,background-color,color,box-shadow,opacity,filter,transform",
        }}>Get started</Link>

        <Link href="/contact/sales" style={{
          appearance: "none" as const,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap" as const,
          userSelect: "none" as const,
          height: 44,
          fontSize: 16,
          fontWeight: 510,
          padding: "0 20px",
          gap: 6,
          borderRadius: 9999,
          background: "rgba(255,255,255,0.05)",
          border: "none",
          color: "#f7f8f8",
          textDecoration: "none",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03),inset 0 1px 0 0 rgba(255,255,255,0.04),0 0 0 1px rgba(0,0,0,0.6),0 4px 4px 0 rgba(0,0,0,0.1)",
          transition: "0.16s cubic-bezier(0.25,0.46,0.45,0.94)",
          transitionProperty: "border,background-color,color,box-shadow,opacity,filter,transform",
        }}>Contact sales</Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", background: "#08090a", color: "#f7f8f8", fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif", overflowX: "hidden" }}>
      <a
        href="#skip-nav"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      >
        Skip to content →
      </a>

      <Navbar />

      <main style={{ display: "flex", flexDirection: "column", flex: "1 1", minHeight: "100vh" }}>
        <div id="skip-nav" />
        <div style={{ width: "100%" }}>
          <Hero />
          <LogoMarquee />
          <Benefits />
          <IntakeSection />
          <PlanSection />
          <BuildSection />
          <DiffsSection />
          <MonitorSection />
          <ChangelogSection />
          <CustomerQuotes/>
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
