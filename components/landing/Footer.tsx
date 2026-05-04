import Link from "next/link";
import type { CSSProperties } from "react";

const s = {
  footer: {
    position: "relative" as const,
    maxWidth: "100%",
    zIndex: 50,
    background: "#08090a",
    borderTop: "1px solid #23252a",
  } satisfies CSSProperties,

  wrapper: {
    maxWidth: "calc(1344px + 46px * 2)",
    marginInline: "auto",
  } satisfies CSSProperties,

  inner: {
    padding: "56px 46px",
    display: "grid",
    placeItems: "start",
    columnGap: 0,
    rowGap: 0,
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
  } satisfies CSSProperties,

  logoCol: {
    width: "100%",
    paddingInline: 32,
  } satisfies CSSProperties,

  section: {
    width: "100%",
    fontSize: "0.8125rem",
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
    paddingInline: 32,
  } satisfies CSSProperties,

  sectionTitle: {
    fontWeight: 510,
    color: "#f7f8f8",
    marginBottom: 24,
    margin: "0 0 24px",
    fontSize: "inherit",
    letterSpacing: "inherit",
  } satisfies CSSProperties,

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: 2,
  } satisfies CSSProperties,

  listItem: {
    margin: 0,
  } satisfies CSSProperties,

  link: {
    minHeight: 28,
    display: "inline-flex",
    alignItems: "center",
    whiteSpace: "nowrap" as const,
    color: "#8a8f98",
    textDecoration: "none",
    fontSize: "0.8125rem",
    lineHeight: 1.5,
    letterSpacing: "-0.01em",
  } satisfies CSSProperties,

  legal: {
    gridColumn: "2",
    marginTop: 80,
    alignSelf: "center",
    paddingInline: 32,
  } satisfies CSSProperties,

  legalText: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
    color: "#62666d",
  } satisfies CSSProperties,
} as const;

const LinearLogo = () => (
  <svg height="18" viewBox="0 0 400 100" fill="currentColor" aria-label="Linear" style={{ color: "#f7f8f8" }}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.9266 16.3713c-.5283.5806-.4933 1.4714.0617 2.0265l68.5946 68.5946c.5551.555 1.4459.59 2.0265.0617 10.0579-9.1522 16.3713-22.3478 16.3713-37.0179C99.9807 22.402 77.5788 0 49.9445 0 35.2744 0 22.0788 6.31337 12.9266 16.3713ZM4.35334 29.3894c-.25348.5589-.12567 1.2142.30824 1.6481L68.9432 95.3191c.4339.4339 1.0892.5617 1.6481.3083 1.485-.6736 2.9312-1.4176 4.3344-2.2277.8341-.4815.9618-1.6195.2808-2.3005L8.88146 24.7742c-.68097-.681-1.81894-.5532-2.30045.2808-.81013 1.4032-1.55411 2.8494-2.22767 4.3344ZM.453579 47.796c-.300979-.301-.46112-.7158-.43279-1.1405.13271-1.9891.38164-3.9463.74008-5.865.21493-1.1505 1.62073-1.5497 2.44831-.7222L59.9124 96.7715c.8275.8276.4283 2.2334-.7222 2.4483-1.9187.3585-3.8759.6074-5.865.7401-.4247.0283-.8395-.1318-1.1405-.4328L.453579 47.796ZM3.93331 61.7589c-1.0331-1.0331-2.70028-.1429-2.32193 1.2683C6.22104 80.2203 19.7604 93.7597 36.9535 98.3693c1.4112.3784 2.3014-1.2888 1.2683-2.3219L3.93331 61.7589Z"
    />
  </svg>
);

const sections = [
  {
    title: "Product",
    links: [
      { label: "Intake", href: "/intake" },
      { label: "Plan", href: "/plan" },
      { label: "Build", href: "/build" },
      { label: "Diffs", href: "/diffs" },
      { label: "Monitor", href: "/monitor" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Asks", href: "/asks" },
      { label: "Agents", href: "/agents" },
      { label: "Customer Requests", href: "/customer-requests" },
      { label: "Insights", href: "/insights" },
      { label: "Mobile", href: "/mobile" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Method", href: "/method" },
      { label: "Quality", href: "/quality" },
      { label: "Brand", href: "/brand" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Switch", href: "/switch" },
      { label: "Download", href: "/download" },
      { label: "Developers", href: "/developers" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Startups", href: "/startups" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "DPA", href: "/dpa" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.wrapper}>
        <div style={s.inner}>
          <div style={s.logoCol}>
            <Link href="/" aria-label="Navigate to home">
              <LinearLogo />
            </Link>
          </div>

          {sections.map((section) => (
            <div key={section.title} style={s.section}>
              <h3 style={s.sectionTitle}>{section.title}</h3>
              <ul style={s.list}>
                {section.links.map((link) => (
                  <li key={link.href} style={s.listItem}>
                    <Link href={link.href} style={s.link}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div style={s.legal}>
            <span style={s.legalText}>
              © {new Date().getFullYear()} Linear Orbit, Inc.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
