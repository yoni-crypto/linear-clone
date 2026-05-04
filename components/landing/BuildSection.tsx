import Link from "next/link";
import Image from "next/image";

const TERMINAL_LINES = [
  { type: "text", content: "On it! I've received your request." },
  { type: "split", text: "Kicked off a task in ", mono: "kinetic/kinetic-iOS environment." },
  { type: "text", content: "Searching for root AGENTS file" },
  { type: "mono", content: "kinetic/kinetic-iOS$ /bin/bash -lc rg --files -g 'AGENTS.md'\nAGENTS.md" },
  { type: "split", text: "Locating initialization logic for ", mono: "vehicle_state" },
  { type: "thinking", content: "Thought", dim: "for 5s" },
];

const ASSIGN_ITEMS = [
  { name: "Codex",          img: "/images/avatars/codex.png",         agent: true,  selected: true  },
  { name: "Steven",         img: "/images/avatars/steven.png",        agent: false, selected: false },
  { name: "Ema",            img: "/images/avatars/ema.png",           agent: false, selected: false },
  { name: "GitHub Copilot", img: "/images/avatars/copilot.png",       agent: true,  selected: false },
  { name: "Cursor",         img: "/images/avatars/cursor-avatar.png", agent: true,  selected: false },
  { name: "Meg",            img: "/images/avatars/meg.png",           agent: false, selected: false },
];

const DotsIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor">
    <path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
  </svg>
);

const CheckIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor" style={{ position: "absolute", right: 16, color: "#62666d" }}>
    <path d="M14.672 3.27a1.25 1.25 0 0 1-.028 1.768l-7.778 8a1.25 1.25 0 0 1-1.788.012L1.304 9.293a1.25 1.25 0 0 1 1.768-1.768l3.161 3.27 6.671-6.856a1.25 1.25 0 0 1 1.768.332Z" />
  </svg>
);


export default function BuildSection() {
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
              Move work forward across teams and agents
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
              Build and deploy AI agents that work alongside your team. Work on complex tasks together or delegate entire issues end-to-end.
            </p>

            <div style={{ marginTop: 48 }}>
              <Link href="/build" style={{ display: "inline-block", textDecoration: "none" }}>
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{ fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#62666d", fontVariantNumeric: "tabular-nums" }}>3.0</span>
                  <span style={{ display: "inline-block", marginLeft: 12, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#8a8f98" }}>Build</span>
                  <span style={{ display: "inline-block", marginLeft: 6, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#62666d" }}>→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", height: 460 }}>
          <div style={{
            position: "absolute",
            top: 24, left: 0, right: 0,
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0f1011",
            boxShadow: "0 4px 32px 0 rgba(8,9,10,0.6)",
            overflow: "hidden",
            display: "flex",
            height: 400,
          }}>
            <div style={{ flex: "0 0 45%", borderRight: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column" }}>
              <header style={{
                height: 52, paddingLeft: 20, paddingRight: 16,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexShrink: 0,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Image
                    src="/images/avatars/codex.png"
                    alt="Codex" width={20} height={20}
                    style={{ borderRadius: "50%" }}
                  />
                  <span style={{ fontSize: 13, color: "#d0d6e0", fontWeight: 510, letterSpacing: "-0.011em" }}>Codex</span>
                </div>
              </header>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "20px 24px", overflow: "hidden" }}>
                {TERMINAL_LINES.map((line, i) => (
                  <div key={i}>
                    {line.type === "text" && (
                      <span style={{ fontSize: 13, color: "#8a8f98", letterSpacing: "-0.011em" }}>{line.content}</span>
                    )}
                    {line.type === "split" && (
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 13, color: "#8a8f98", letterSpacing: "-0.011em" }}>{line.text}</span>
                        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>{line.mono}</span>
                      </div>
                    )}
                    {line.type === "mono" && (
                      <pre style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "monospace", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{line.content}</pre>
                    )}
                    {line.type === "thinking" && (
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg width={14} height={14} viewBox="0 0 16 16" fill="none">
                          <style>{`
                            @keyframes dp{0%,100%{opacity:.15}50%{opacity:.9}}
                            ${[1,4.5,8,11.5,15].flatMap((cx,ci)=>
                              [1,4.5,8,11.5,15].map((_,ri)=>
                                `.d${ci}${ri}{animation:dp 2s ease-in-out infinite;animation-delay:${(ci*5+ri)*80}ms}`
                              )
                            ).join('')}
                          `}</style>
                          {[1,4.5,8,11.5,15].map((cx,ci)=>
                            [1,4.5,8,11.5,15].map((cy,ri)=>(
                              <circle key={`${ci}${ri}`} cx={cx} cy={cy} r={1} fill="#e4e5e9" className={`d${ci}${ri}`}/>
                            ))
                          )}
                        </svg>
                        <span style={{ fontSize: 13, color: "#8a8f98", letterSpacing: "-0.011em", fontWeight: 510 }}>
                          {line.content}{" "}
                          <span style={{ color: "#62666d", fontWeight: 400 }}>{line.dim}</span>
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <header style={{
                height: 52, paddingLeft: 20, paddingRight: 16,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 13, color: "#8a8f98", letterSpacing: "-0.011em" }}>Assign to…</span>
                <span style={{ color: "#62666d" }}><DotsIcon /></span>
              </header>
              <div style={{ padding: "8px 12px", display: "flex", flexDirection: "column" }}>
                {ASSIGN_ITEMS.map((item) => (
                  <div key={item.name} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    height: 52, paddingInline: 12,
                    borderRadius: 8,
                    background: item.selected ? "rgba(255,255,255,0.03)" : "transparent",
                    position: "relative",
                  }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", overflow: "hidden", flexShrink: 0, position: "relative" }}>
                      <Image
                        src={item.img}
                        alt={item.name} fill sizes="28px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <span style={{ fontSize: 14, letterSpacing: "-0.011em", color: item.selected ? "#f7f8f8" : "#8a8f98" }}>{item.name}</span>
                    {item.agent && (
                      <span style={{
                        borderRadius: 4, background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        paddingInline: 6, height: 20,
                        display: "flex", alignItems: "center",
                        fontSize: 10, color: "#62666d",
                      }}>Agent</span>
                    )}
                    {item.selected && <CheckIcon />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 160,
            background: "linear-gradient(to top, #08090a 20%, transparent 100%)",
            pointerEvents: "none", zIndex: 3,
          }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ gridColumn: 2, paddingLeft: 32, paddingRight: 32 }}>
            <div style={{ height: 36 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {[
                { num: "3.1", label: "Issues",          uneven: false },
                { num: "3.2", label: "Agents",          uneven: true  },
                { num: "3.3", label: "Linear MCP",      uneven: false },
                { num: "3.4", label: "Git automations", uneven: true  },
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
