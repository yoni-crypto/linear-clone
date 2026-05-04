import Link from "next/link";

const ENTRIES = [
  {
    slug: "2026-04-30-releases",
    title: "Releases",
    description: "Plan and track your software releases directly from Linear.",
    date: "Apr 30, 2026",
    first: true,
  },
  {
    slug: "2026-04-23-linear-agent-mcp-support",
    title: "Linear Agent MCP support",
    description:
      "Linear Agent can now connect to your tools via MCP, giving it access to data and actions beyond your Linear workspace. Bring external context into your workflows to investigate issues, plan projects, write specs, and draft updates grounded in your full context.",
    date: "Apr 23, 2026",
    first: false,
  },
  {
    slug: "2026-04-16-linear-for-microsoft-teams",
    title: "Linear for Microsoft Teams",
    description:
      "Mention @Linear in any Microsoft Teams channel to turn your conversations into actionable work.",
    date: "Apr 15, 2026",
    first: false,
  },
  {
    slug: "2026-04-09-multi-level-sub-teams",
    title: "Multi-level sub-teams",
    description: "Structure your teams in Linear to match how your organization works.",
    date: "Apr 8, 2026",
    first: false,
  },
];

const IND = 32;

export default function ChangelogSection() {
  return (
    <div className="hidden lg:block">
      <div style={{ width: "100%" }}>
        <div style={{ height: 1, background: "#08090a" }} />
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div style={{ maxWidth: 1170, margin: "0 auto" }}>
      <div style={{ height: 160 }} />

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0, fontSize: "3rem", lineHeight: 1, letterSpacing: "-0.022em", fontWeight: 510, color: "#f7f8f8" }}>
          Changelog
        </h2>
      </div>

      <div style={{ height: 72 }} />

      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 64, position: "relative" }}>

          <div style={{
            position: "absolute",
            top: IND / 2,
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(255,255,255,0.08)",
            transform: "translateY(-50%)",
          }} />

          {ENTRIES.map((entry) => (
            <div key={entry.slug} style={{ minWidth: 0 }}>

              <div style={{
                height: IND,
                width: IND,
                background: "#08090a",
                position: "relative",
                transform: "translateX(-12px)",
                marginBottom: 48,
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: entry.first ? "#f34e52" : "#62666d",
                  opacity: entry.first ? 0.1 : 0.2,
                }} />
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: entry.first ? "#f34e52" : "#62666d",
                }} />
              </div>

              <Link href={`/changelog/${entry.slug}`} rel="noopener" style={{ display: "block", textDecoration: "none", borderRadius: 4 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.5,
                    letterSpacing: "-0.011em",
                    color: "#d0d6e0",
                    fontWeight: 510,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {entry.title}
                  </span>

                  <div style={{ height: 8 }} />

                  <span style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    letterSpacing: "-0.011em",
                    color: "#8a8f98",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    overflowWrap: "anywhere",
                  } as React.CSSProperties}>
                    {entry.description}
                  </span>

                  <div style={{ height: 20 }} />

                  <span style={{
                    fontSize: "0.6875rem",
                    lineHeight: 1.5,
                    letterSpacing: "0.04em",
                    color: "#62666d",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-monospace), monospace",
                  }}>
                    {entry.date}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 80 }} />

      <div>
        <Link href="/changelog" rel="noopener" style={{ textDecoration: "none", display: "inline-block" }}>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{ display: "inline-block", fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#8a8f98" }}>
              View all
            </span>
            <span style={{ display: "inline-block", marginLeft: 6, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#62666d" }}>
              →
            </span>
          </div>
        </Link>
      </div>

      <div style={{ height: 160 }} />
      </div>
    </div>
  );
}
