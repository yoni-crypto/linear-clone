import Link from "next/link";

const T = {
  keyword:   "#F79CE0",
  string:    "#ffdf9f",
  constant:  "#8FA6FF",
  variable:  "#f7bf8b",
  entity:    "#83dcdc",
  text:      "#E2E4E7",
  comment:   "#8B93A1",
  lineNum:   "#62666d",
  oldColor:  "#F34E52",
  oldBg:     "rgba(243,78,82,0.1)",
  newColor:  "#27A644",
  newBg:     "rgba(39,166,68,0.07)",
};


type Token = { t: string; c?: string; removed?: boolean; added?: boolean };
type Line  = { tokens: Token[]; diff?: "old" | "new" };

const kw  = (t: string): Token => ({ t, c: T.keyword });
const tx  = (t: string, added?: boolean): Token => ({ t, c: T.text, added });
const va  = (t: string, added?: boolean, removed?: boolean): Token => ({ t, c: T.variable, added, removed });
const st  = (t: string, added?: boolean): Token => ({ t, c: T.string, added });
const cn  = (t: string): Token => ({ t, c: T.constant });
const en  = (t: string): Token => ({ t, c: T.entity });


const OLD_LINES: Line[] = [
  { tokens: [kw("import"), tx(" "), va("React"), tx(" "), kw("from"), tx(" '"), st("react"), tx("'")] },
  { tokens: [kw("import"), tx(" { "), va("View"), tx(", "), va("ActivityIndicator"), tx(" } "), kw("from"), tx(" '"), st("react-native"), tx("'")] },
  { diff: "old", tokens: [kw("import"), tx(" { "), va("useVehicleState"), tx(" } "), kw("from"), tx(" '"), st("@hooks/useVehicleState"), tx("'")] },
  { tokens: [kw("import"), tx(" { "), va("Dashboard"), tx(" } "), kw("from"), tx(" '"), st("@components/Dashboard"), tx("'")] },
  { tokens: [] },
  { tokens: [kw("export"), tx(" "), kw("const"), tx(" "), en("HomeScreen"), tx(" "), kw("="), tx(" () "), kw("=>"), tx(" {")] },
  { diff: "old", tokens: [tx("  "), kw("const"), tx(" { "), va("vehicleState"), tx(", "), va("isFullySynced", false, true), tx(" } "), kw("="), tx(" "), en("useVehicleState"), tx("()")] },
  { tokens: [] },
  { diff: "old", tokens: [tx("  "), kw("if"), tx(" ("), tx("!"), va("isFullySynced", false, true), tx(") {")] },
  { tokens: [tx("    "), kw("return"), tx(" <"), cn("ActivityIndicator"), tx(" "), en("size"), kw("="), tx('"'), st("large"), tx('" />')] },
  { tokens: [tx("  }")] },
  { tokens: [] },
  { tokens: [tx("  "), kw("return"), tx(" (")] },
  { tokens: [tx("    <"), cn("View"), tx(">")] },
  { diff: "old", tokens: [tx("      <"), cn("Dashboard"), tx(" "), en("state"), kw("="), tx("{"), va("vehicleState"), tx("} />")] },
  { tokens: [tx("    </"), cn("View"), tx(">")] },
  { tokens: [tx("  )")] },
  { tokens: [tx("}")] },
];

const NEW_LINES: Line[] = [
  { tokens: [kw("import"), tx(" "), va("React"), tx(" "), kw("from"), tx(" '"), st("react"), tx("'")] },
  { tokens: [kw("import"), tx(" { "), va("View"), tx(", "), va("ActivityIndicator"), tx(" } "), kw("from"), tx(" '"), st("react-native"), tx("'")] },
  { diff: "new", tokens: [kw("import"), tx(" { "), va("useVehicleState"), tx(", "), va("SyncStatus", true), tx(" } "), kw("from"), tx(" '"), st("@hooks/useVehicleState"), tx("'")] },
  { tokens: [kw("import"), tx(" { "), va("Dashboard"), tx(" } "), kw("from"), tx(" '"), st("@components/Dashboard"), tx("'")] },
  { tokens: [] },
  { tokens: [kw("export"), tx(" "), kw("const"), tx(" "), en("HomeScreen"), tx(" "), kw("="), tx(" () "), kw("=>"), tx(" {")] },
  { diff: "new", tokens: [tx("  "), kw("const"), tx(" { "), va("vehicleState"), tx(", "), va("syncStatus", true), tx(" } "), kw("="), tx(" "), en("useVehicleState"), tx("()")] },
  { tokens: [] },
  { diff: "new", tokens: [tx("  "), kw("if"), tx(" ("), va("syncStatus", true), tx(" ", true), tx("==="), tx(" ", true), va("SyncStatus", true), tx(".", true), va("PENDING", true), tx(") {")] },
  { tokens: [tx("    "), kw("return"), tx(" <"), cn("ActivityIndicator"), tx(" "), en("size"), kw("="), tx('"'), st("large"), tx('" />')] },
  { tokens: [tx("  }")] },
  { tokens: [] },
  { tokens: [tx("  "), kw("return"), tx(" (")] },
  { tokens: [tx("    <"), cn("View"), tx(">")] },
  { tokens: [tx("      <"), cn("Dashboard"), tx(" "), en("state"), kw("="), tx("{"), va("vehicleState"), tx("} />")] },
  { tokens: [tx("    </"), cn("View"), tx(">")] },
  { tokens: [tx("  )")] },
  { tokens: [tx("}")] },
];


function CodeColumn({ lines, borderLeft }: { lines: Line[]; borderLeft?: boolean }) {
  return (
    <div style={{
      flex: 1, padding: "32px 0",
      boxShadow: borderLeft ? "inset 1px 0 0 0 rgba(255,255,255,0.06)" : undefined,
      minWidth: 0,
    }}>
      <pre style={{ fontFamily: "monospace", fontSize: 14, lineHeight: "24px", margin: 0, padding: 0, background: "transparent", counterReset: "line" }}>
        <code style={{ background: "transparent", padding: 0, display: "flex", flexDirection: "column" }}>
          {lines.map((line, i) => (
            <span key={i} style={{
              display: "block", lineHeight: "24px", height: 24,
              padding: "0 32px 0 24px",
              borderLeft: `1px solid ${
                line.diff === "old" ? T.oldColor
                : line.diff === "new" ? T.newColor
                : "transparent"
              }`,
              background: line.diff === "old" ? T.oldBg : line.diff === "new" ? T.newBg : "transparent",
              counterIncrement: "line",
            } as React.CSSProperties}>
              <span style={{
                marginRight: "1em",
                color: line.diff === "old" ? T.oldColor : line.diff === "new" ? T.newColor : T.lineNum,
                userSelect: "none",
                fontSize: 14,
              }}>{String(i + 1).padStart(2, "0")}</span>
              {line.tokens.map((tok, j) => (
                <span key={j} style={{
                  color: tok.c ?? T.text,
                  background: tok.added ? "rgba(39,166,68,0.2)" : tok.removed ? "rgba(243,78,82,0.2)" : undefined,
                  borderRadius: tok.added || tok.removed ? 2 : undefined,
                }}>{tok.t}</span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}


const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
    <path fill={T.lineNum} fillRule="evenodd" d="M8.212.413a2.5 2.5 0 0 1 1.52.72l3.536 3.534A2.5 2.5 0 0 1 14 6.435V11.9l-.013.256a2.5 2.5 0 0 1-2.231 2.231l-.256.013h-7l-.256-.013a2.5 2.5 0 0 1-2.231-2.231L2 11.9v-9A2.5 2.5 0 0 1 4.244.413L4.5.4h3.465zM4.5 1.9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6.435q0-.017-.003-.035H8.75A1.75 1.75 0 0 1 7 4.65V1.9zm4 2.75c0 .138.112.25.25.25h2.629L8.672 2.193a1 1 0 0 0-.172-.137z" clipRule="evenodd" />
  </svg>
);

function DiffPanel() {
  return (
    <div style={{
      padding: 8,
      borderRadius: 22,
      border: "1px solid rgba(255,255,255,0.08)",
      maskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
      marginLeft: 0, marginRight: 0,
      userSelect: "none",
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px 12px 0 0",
        background: "#0f1011",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}>
        <div style={{
          position: "relative", zIndex: 1,
          display: "flex", alignItems: "center", gap: 15,
          padding: 24,
        }}>
          <FileIcon />
          <span style={{ fontSize: 12, color: T.lineNum, fontFamily: "monospace", letterSpacing: "normal" }}>
            kinetic-ios/src/screens/Home/HomeScreen.tsx
          </span>
          <div style={{ marginLeft: "auto" }}>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              height: 28, paddingInline: 10, borderRadius: 6,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#8a8f98", fontSize: 12, cursor: "pointer",
            }}>
              <span>Linear</span>
              <svg width={12} height={12} viewBox="0 0 16 16" fill="#9c9da1">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.354 4.56a.5.5 0 0 0-.708 0L5.354 6.853a.5.5 0 0 1-.708-.707l2.293-2.293a1.5 1.5 0 0 1 2.122 0l2.293 2.293a.5.5 0 0 1-.708.707L8.354 4.56ZM7.646 11.44a.5.5 0 0 0 .708 0l2.292-2.293a.5.5 0 0 1 .708.707l-2.293 2.293a1.5 1.5 0 0 1-2.122 0L4.646 9.854a.5.5 0 0 1 .708-.707l2.292 2.293Z" />
              </svg>
            </button>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <CodeColumn lines={OLD_LINES} />
          <CodeColumn lines={NEW_LINES} borderLeft />
        </div>
      </div>
    </div>
  );
}

export default function DiffsSection() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ height: 1, background: "#08090a" }} />
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div style={{ height: 40 }} />

      <section style={{ display: "flex", flexDirection: "column", paddingTop: 96, paddingBottom: 128, maxWidth: 1170, margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", paddingBottom: 96 }}>
          <div style={{ paddingLeft: 32, paddingRight: 32, marginLeft: -2 }}>
            <h2 style={{
              maxWidth: "18ch",
              fontSize: "3rem",
              lineHeight: 1,
              letterSpacing: "-0.022em",
              fontWeight: 510,
              color: "#f7f8f8",
              margin: 0,
              textWrap: "balance" as const,
            }}>
              Review PRs and agent output
            </h2>
          </div>

          <div style={{ paddingLeft: 32, paddingRight: 32 }}>
            <p style={{
              margin: 0,
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              letterSpacing: "-0.011em",
              color: "#d0d6e0",
              textWrap: "balance" as const,
            }}>
              Understand code changes at a glance with structural diffs for human and agent output. Review, discuss, and merge — all within Linear.
            </p>

            <div style={{ marginTop: 48 }}>
              <Link href="/diffs" style={{ display: "inline-block", textDecoration: "none" }}>
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{ fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#62666d", fontVariantNumeric: "tabular-nums" }}>4.0</span>
                  <span style={{ display: "inline-block", marginLeft: 12, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#8a8f98" }}>Diffs</span>
                  <span style={{ display: "inline-block", marginLeft: 6, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#62666d" }}>→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", overflow: "hidden" }}>
          <DiffPanel />
        </div>

      </section>
    </>
  );
}
