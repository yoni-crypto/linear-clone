import Link from "next/link";


const DASHED = "repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 3px, transparent 3px, transparent 7px)";
const DASHED_V = "repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 3px, transparent 3px, transparent 7px)";

const BARS = [
  { top: 24,  bottom: 222 },
  { top: 65,  bottom: 228 },
  { top: 45,  bottom: 160 },
];
const Y_LABELS = [18, 16, 14, 12, 10, 8, 6, 4, 2, 0];
const X_LABELS = ["Feb 2025", "May 2025", "Aug 2025", "Nov 2025"];

function IssueCountCell() {
  return (
    <div style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 13, color: "#d0d6e0", fontWeight: 510, letterSpacing: "-0.011em" }}>Issue count by created date</span>
      </header>
      <div style={{ paddingRight: 30, position: "relative", paddingTop: 10 }}>
        <div style={{ position: "absolute", bottom: 9, right: 75, display: "flex", gap: 12, height: "100%", alignItems: "flex-end", justifyContent: "space-around", pointerEvents: "none", filter: "brightness(75%)" }}>
          {BARS.map((b, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 2, width: 12 }}>
              <div style={{ height: b.top,    background: "#55ccff" }} />
              <div style={{ height: b.bottom, background: "#02b8cc" }} />
            </div>
          ))}
        </div>
        {Y_LABELS.map((label, i) => (
          <div key={label} style={{ display: "flex", gap: 12, alignItems: "center", marginBlock: i === 0 ? 0 : 22, marginBottom: i === Y_LABELS.length - 1 ? 0 : undefined }}>
            <div style={{ flex: 1, height: 1, background: i === Y_LABELS.length - 1 ? "rgba(255,255,255,0.08)" : DASHED }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>{label}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 512, width: "100%", margin: "0 auto", height: 55, alignItems: "center" }}>
          {X_LABELS.map((l) => (
            <span key={l} style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", transform: "translateY(-4px)" }}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}


const CURSOR_DOTS: [number,number][] = [[51,358],[8,332],[25,251],[31,273],[18,263],[41,143],[46,265],[25,279],[21,295],[27,250],[17,268],[5,212],[31,315],[35,331],[46,317],[52,260],[45,249],[45,224],[31,211],[35,309],[10,283],[17,212],[22,281],[25,299],[28,346],[39,159],[12,331],[36,295],[27,323],[33,377],[34,334],[46,334],[11,218],[31,376],[25,364],[36,242],[14,358],[41,351],[34,296],[31,341],[20,264],[27,261],[32,338],[6,340],[42,288],[35,318],[22,274],[36,285],[27,295],[20,252],[26,284],[33,291],[44,188],[42,202],[37,184],[37,166],[39,202],[48,179],[32,192],[11,185],[34,170],[32,166],[34,187],[25,188],[18,184],[7,173],[50,183],[32,168],[33,194],[23,163],[26,188],[14,199],[22,69],[40,212],[29,87],[31,132],[17,53],[19,177],[17,87],[30,126],[28,116],[4,203],[45,168],[21,121],[24,116],[28,12],[21,128],[29,190],[39,153],[27,185],[25,104],[54,56],[39,142],[31,115],[10,174],[40,85],[42,40],[40,22],[39,52],[33,134],[43,210],[31,119],[25,83],[21,100],[34,180],[40,156],[37,142],[40,130],[35,146],[15,175],[18,23],[27,198],[28,183],[22,140],[33,166],[36,41],[33,191],[31,154],[14,173],[29,4],[23,61],[29,91],[29,140],[43,213]];
const CODEX_DOTS: [number,number][] = [[5,209],[12,257],[32,310],[23,193],[14,284],[20,211],[21,214],[13,219],[32,190],[29,200],[26,195],[11,205],[16,135],[42,239],[11,122],[25,247],[16,285],[14,323],[6,239],[16,210],[38,170],[31,293],[6,229],[4,251],[31,226],[45,219],[12,353],[21,244],[31,246],[26,239],[28,124],[50,325],[6,312],[27,223],[27,296],[25,219],[33,268],[27,280],[44,179],[20,263],[20,74],[29,170],[25,352],[46,267],[12,198],[54,249],[5,255],[42,254],[35,211],[4,222],[12,222],[10,98],[32,68],[37,49],[31,106],[52,88],[24,99],[19,101],[8,112],[14,126],[9,105],[31,110],[26,115],[32,138],[38,133],[44,148],[9,84],[6,57],[10,44],[20,4],[29,15],[16,76],[28,88],[25,82],[22,66],[35,66]];
const HUMAN_DOTS: [number,number][] = [[21,214],[11,213],[37,170],[34,226],[26,294],[31,227],[26,258],[39,323],[24,205],[26,303],[31,148],[13,103],[16,334],[17,189],[53,166],[29,232],[20,157],[10,293],[14,290]];

function AgentDots({ dots, fill }: { dots: [number,number][]; fill: string }) {
  const maxY = Math.max(...dots.map(d => d[1]));
  return (
    <div style={{ marginTop: "auto", display: "flex", justifyContent: "center", marginBottom: 4 }}>
      <svg width={59} height={maxY + 4} fill="none" viewBox={`0 0 59 ${maxY + 4}`}>
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3.5} fill={fill} stroke="#08090A" />
        ))}
      </svg>
    </div>
  );
}

function CycleTimeCell() {
  return (
    <div style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 13, color: "#d0d6e0", fontWeight: 510, letterSpacing: "-0.011em" }}>Cycle time by agent</span>
      </header>
      <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ position: "absolute", bottom: 66, top: 0, left: 0, right: 0, display: "flex", flexDirection: "column", justifyContent: "space-evenly", pointerEvents: "none" }}>
          {[0,1,2,3].map(i => <div key={i} style={{ height: 1, background: DASHED }} />)}
        </div>
        <div style={{ position: "absolute", bottom: 0, top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-evenly", pointerEvents: "none" }}>
          {[0,1].map(i => <div key={i} style={{ width: 1, background: DASHED_V }} />)}
        </div>
        <div style={{ position: "absolute", bottom: 134, left: 0, right: 0 }}>
          <svg width="100%" height={75} viewBox="0 0 676 75" fill="none" preserveAspectRatio="none">
            <path stroke="#FF7236" strokeWidth={0.5} d="M0 .25h212.038a8 8 0 0 1 6.363 3.152l19.198 25.196a8 8 0 0 0 6.363 3.152H435.33a8 8 0 0 1 6.966 4.066l19.408 34.368a8 8 0 0 0 6.966 4.066H676" />
          </svg>
        </div>
        <div style={{ position: "absolute", bottom: 261, left: 0, right: 0 }}>
          <svg width="100%" height={43} viewBox="0 0 676 43" fill="none" preserveAspectRatio="none">
            <path stroke="#5E6AD2" strokeWidth={0.5} d="M0 28.75h212.32c2.359 0 4.557-1.042 6.077-2.847l19.206-22.806A8 8 0 0 1 243.722.25H435.33a8 8 0 0 1 6.966 4.066l19.408 34.368a8 8 0 0 0 6.966 4.066H676" />
          </svg>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", flex: 1, position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AgentDots dots={CURSOR_DOTS} fill="#4354B8" />
            <div style={{ display: "grid", placeItems: "center", height: 65, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Cursor</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AgentDots dots={CODEX_DOTS} fill="#E5591D" />
            <div style={{ display: "grid", placeItems: "center", height: 65, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Codex</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AgentDots dots={HUMAN_DOTS} fill="#8A8F98" />
            <div style={{ display: "grid", placeItems: "center", height: 65, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Human</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



const PlayIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="#9c9da1">
    <path d="m5.604 2.41 7.23 4.502a1.375 1.375 0 0 1-.02 2.345L5.585 13.6a1.375 1.375 0 0 1-2.083-1.18V3.576A1.375 1.375 0 0 1 5.604 2.41Z" />
  </svg>
);

const AtRiskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
    <g fill="#F34E52" clipPath="url(#ar)">
      <rect width={16} height={16} opacity={0.25} rx={8} />
      <path fillRule="evenodd" d="M9.626 3.832a.75.75 0 0 1 .637.212l2.31 2.31a.75.75 0 0 1-1.06 1.06l-1.602-1.6-2.985 5.472a.75.75 0 0 1-1.189.171l-2.31-2.31a.75.75 0 0 1 1.06-1.06l1.602 1.6 2.985-5.472a.75.75 0 0 1 .552-.383" clipRule="evenodd" />
    </g>
    <defs><clipPath id="ar"><path fill="#fff" d="M0 16h16V0H0z" /></clipPath></defs>
  </svg>
);

const OnTrackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
    <g fill="#008D2C" clipPath="url(#ot)">
      <rect width={16} height={16} opacity={0.25} rx={8} />
      <path fillRule="evenodd" d="M12.68 5.703a.75.75 0 0 1 .071 1.058L9.72 10.226a.75.75 0 0 1-1.188-.077l-1.767-2.65-2.387 2.728a.75.75 0 1 1-1.128-.988L6.28 5.774a.75.75 0 0 1 1.188.078l1.767 2.65 2.386-2.728a.75.75 0 0 1 1.059-.07" clipRule="evenodd" />
    </g>
    <defs><clipPath id="ot"><path fill="#fff" d="M0 16h16V0H0z" /></clipPath></defs>
  </svg>
);

const PULSE_PROJECTS = [
  {
    name: "UI refresh",
    status: "At risk",
    statusColor: "#F34E52",
    icon: <AtRiskIcon />,
    author: "romain",
    ago: "1 day ago",
    bullets: [
      "iOS implementation is mostly complete, but Android updates are still work in progress",
      "Risk of timeline slip if remaining design decisions aren't finalized soon",
    ],
  },
  {
    name: "Tokyo launch",
    status: "On track",
    statusColor: "#008D2C",
    icon: <OnTrackIcon />,
    author: "julian",
    ago: "3 hours ago",
    bullets: [
      "Localization efforts have been completed",
      "Everything else on track for launch in early September",
    ],
  },
];

function PulseCard() {
  return (
    <div style={{
      position: "absolute", top: 20, left: 6,
      width: 480,
      borderRadius: 12,
      overflow: "hidden",
      background: "linear-gradient(0deg,rgba(255,255,255,.02),rgba(255,255,255,.02)),#0f1011",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 4px 32px 0 rgba(8,9,10,0.6)",
      padding: "28px 24px 20px",
      userSelect: "none",
      zIndex: 3,
    }}>
      <div style={{ paddingBottom: 32, position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 16, color: "#d0d6e0", fontWeight: 510, letterSpacing: "-0.011em" }}>Weekly Pulse for May 2</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button style={{
            borderRadius: 5, border: "0.5px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.33)",
            padding: "6px 8px 6px 6px",
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 510, color: "#8a8f98", cursor: "pointer",
          }}>
            <PlayIcon /> Listen
          </button>
          <button style={{
            background: "none", border: "none",
            fontSize: 12, color: "#8a8f98", cursor: "pointer",
          }}>1.0×</button>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 11, color: "#8a8f98", fontWeight: 510, letterSpacing: "-0.011em" }}>Projects</span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
        </div>

        <div style={{ height: 32 }} />

        {PULSE_PROJECTS.map((p, i) => (
          <div key={p.name}>
            {i > 0 && <div style={{ height: 28 }} />}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 14, color: "#f7f8f8", fontWeight: 510, letterSpacing: "-0.011em" }}>{p.name}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {p.icon}
                <span style={{ fontSize: 11, color: p.statusColor }}>{p.status}</span>
                <div style={{ paddingLeft: 4 }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>By {p.author} · {p.ago}</span>
                </div>
              </div>
            </div>
            <div style={{ height: 12 }} />
            <ul style={{ display: "flex", flexDirection: "column", gap: 8, margin: 0, padding: 0 }}>
              {p.bullets.map((b) => (
                <li key={b} style={{
                  listStyle: "none", marginLeft: 22, position: "relative",
                  fontSize: 14, lineHeight: 1.6, color: "#8a8f98", maxWidth: 400,
                }}>
                  <span style={{ position: "absolute", left: -22, color: "#d0d6e0" }}>·</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonitorGrid() {
  return (
    <div style={{
      marginInline: 0,
      userSelect: "none",
      position: "relative",
    }}>
      <div style={{
        position: "relative", overflow: "hidden",
        borderRadius: 12,
        background: "#0f1011",
        border: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2,1fr)",
          gap: 16, padding: "24px 32px",
        }}>
          <IssueCountCell />
          <CycleTimeCell />
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
        background: "linear-gradient(to top, #08090a 20%, transparent 100%)",
        pointerEvents: "none", zIndex: 2,
      }} />

      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: 180,
        background: "linear-gradient(to right, #08090a 20%, transparent 100%)",
        pointerEvents: "none", zIndex: 2,
      }} />

      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 200,
        background: "linear-gradient(to left, #08090a 20%, transparent 100%)",
        pointerEvents: "none", zIndex: 2,
      }} />
    </div>
  );
}

export default function MonitorSection() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ height: 1, background: "#08090a" }} />
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div style={{ height: 40 }} />

      <section style={{ display: "flex", flexDirection: "column", paddingTop: 96, paddingBottom: 128, maxWidth: 1250, margin: "0 auto" }}>

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
              Understand progress at scale
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
              Take the guesswork out of product development with project updates, analytics, and dashboards that surface what needs your attention.
            </p>

            <div style={{ marginTop: 48 }}>
              <Link href="/monitor" style={{ display: "inline-block", textDecoration: "none" }}>
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{ fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#62666d", fontVariantNumeric: "tabular-nums" }}>5.0</span>
                  <span style={{ display: "inline-block", marginLeft: 12, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#8a8f98" }}>Monitor</span>
                  <span style={{ display: "inline-block", marginLeft: 6, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#62666d" }}>→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <MonitorGrid />
          <PulseCard />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ gridColumn: 2, paddingLeft: 32, paddingRight: 32 }}>
            <div style={{ height: 36 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {[
                { num: "5.1", label: "Pulse",      uneven: false },
                { num: "5.2", label: "Insights",   uneven: true  },
                { num: "5.3", label: "Dashboards", uneven: false },
              ].map((item) => (
                <button key={item.num} style={{
                  height: 28, display: "flex", alignItems: "center",
                  padding: 0, background: "transparent", border: "none", cursor: "pointer",
                  position: "relative",
                  ...(item.uneven ? { paddingLeft: 32, marginLeft: 24 } : {}),
                }}>
                  {item.uneven && (
                    <span style={{ position: "absolute", left: 0, bottom: -2, width: 1, height: 28, background: "rgba(255,255,255,0.08)" }} />
                  )}
                  <span style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <span style={{ fontSize: "0.9375rem", color: "#62666d", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.011em" }}>{item.num}</span>
                    <span style={{ fontSize: "0.9375rem", color: "#8a8f98", letterSpacing: "-0.011em" }}>{item.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
