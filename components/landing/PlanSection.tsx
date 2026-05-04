import Link from "next/link";


const MONTHS = [
  { name: "FEB", stripes: 4 },
  { name: "MAR", stripes: 5 },
  { name: "APR", stripes: 4 },
  { name: "MAY", stripes: 4 },
  { name: "JUN", stripes: 5 },
  { name: "JUL", stripes: 4 },
  { name: "AUG", stripes: 5 },
  { name: "SEP", stripes: 4 },
];

const DATES = [
  2,9,16,23,
  2,9,16,23,30,
  6,13,20,27,
  4,11,18,25,
  1,8,15,22,29,
  6,13,20,27,
  3,10,17,24,31,
  7,14,21,28,
];


function Diamond({ stroke }: { stroke: string }) {
  return (
    <div style={{ position: "relative" }}>
      <svg width={10} height={10} viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"
          stroke={stroke} strokeLinejoin="round" strokeWidth={2}
        />
      </svg>
    </div>
  );
}


type ProjectBarProps = {
  color: string;
  solidWidth: number;
  milestones: { stroke: string; label: string; paddingLeft?: number; paddingRight?: number }[];
  marginLeft: number;
  marginTop: number;
  icon: React.ReactNode;
  title: string;
  statusIcon: React.ReactNode;
};

function ProjectBar({ color, solidWidth, milestones, marginLeft, marginTop, icon, title, statusIcon }: ProjectBarProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "relative", marginLeft, marginTop }}>
      <div style={{ display: "flex", alignItems: "center", gap: 5, marginLeft: 4 }}>
        {icon}
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "-0.011em" }}>{title}</span>
        {statusIcon}
      </div>
      <div style={{ display: "flex", position: "relative", color }}>
        <div style={{
          width: solidWidth,
          borderRadius: "4px 0 0 4px", border: "0.5px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.03)", height: 24,
          boxShadow: "inset 0 0 12px 0 rgba(0,0,0,0.2)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingLeft: milestones[0]?.paddingLeft ?? 156,
          paddingRight: milestones[0]?.paddingRight ?? 36,
        }}>
          {milestones.map((m) => <Diamond key={m.label} stroke={m.stroke} />)}
        </div>
        <div style={{
          flex: 1, height: 24, borderRadius: "0 4px 4px 0",
          background: `linear-gradient(90deg, color-mix(in srgb, ${color} 0%, transparent) 0%, color-mix(in srgb, ${color} 20%, transparent) 100%), rgba(255,255,255,0.03)`,
          boxShadow: "inset 0 0 12px 0 rgba(0,0,0,0.2)",
          position: "relative", overflow: "hidden",
        }}>
          <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 24">
            <defs>
              <linearGradient id={`fg-${title.replace(/\s/g,"")}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity={0.05} />
                <stop offset="15%" stopColor="white" stopOpacity={1} />
                <stop offset="100%" stopColor="white" stopOpacity={1} />
              </linearGradient>
              <mask id={`fm-${title.replace(/\s/g,"")}`}>
                <rect x={0} y={0} width={100} height={24} fill={`url(#fg-${title.replace(/\s/g,"")})`} />
              </mask>
            </defs>
            <path
              d="M 0,0.25 L 96,0.25 Q 99.75,0.25 99.75,4 L 99.75,20 Q 99.75,23.75 96,23.75 L 0,23.75"
              fill="none" stroke={color} strokeWidth={0.5}
              vectorEffect="non-scaling-stroke"
              strokeDasharray="3 3.5"
              mask={`url(#fm-${title.replace(/\s/g,"")})`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}


const UpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 14 14">
    <g fill="#008D2C" clipPath="url(#up)">
      <rect width={14} height={14} x={14} y={14} opacity={0.2} rx={7} transform="rotate(180 14 14)" />
      <path fillRule="evenodd" d="M2.904 9.01a.656.656 0 0 1-.061-.926l2.652-3.032a.656.656 0 0 1 1.04.068L8.081 7.44l2.089-2.387a.656.656 0 1 1 .987.864L8.504 8.948a.656.656 0 0 1-1.04-.068L5.92 6.561 3.83 8.948a.656.656 0 0 1-.926.062" clipRule="evenodd" />
    </g>
    <defs><clipPath id="up"><path fill="#fff" d="M14 0H0v14h14z" /></clipPath></defs>
  </svg>
);

const WarnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 14 14">
    <g fill="#D4A600" clipPath="url(#warn)">
      <rect width={14} height={14} x={14} y={14} opacity={0.2} rx={7} transform="rotate(180 14 14)" />
      <path fillRule="evenodd" d="M5.578 10.648a.66.66 0 0 1-.558-.186L2.999 8.441a.656.656 0 0 1 .928-.928l1.4 1.4L7.94 4.126a.656.656 0 0 1 1.04-.15L11 5.997a.656.656 0 0 1-.928.928L8.672 5.524 6.06 10.312a.66.66 0 0 1-.482.336" clipRule="evenodd" />
    </g>
    <defs><clipPath id="warn"><path fill="#fff" d="M14 0H0v14h14z" /></clipPath></defs>
  </svg>
);


const LaneSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} fill="none" viewBox="0 0 9 9" style={{ position: "absolute", top: 3, left: 12 }}>
    <path stroke="rgba(255,255,255,0.08)" strokeLinecap="round" d="M.5.5v2.764a2 2 0 0 0 1.106 1.789L8.5 8.5" />
  </svg>
);


type InitiativeItem = { icon: React.ReactNode; label: string; count: number; sub?: { icon: React.ReactNode; label: string; count: number }[] };

const INITIATIVES: InitiativeItem[] = [
  {
    icon: <div style={{ height: 24, width: 24, borderRadius: "50%", background: "#0F3338", display: "grid", placeItems: "center" }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="#02B8CC">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.4145 8.3381C7.68162 7.8873 8.31838 7.8873 8.5855 8.3381L11.896 13.925C12.2589 14.5374 11.6035 15.2506 10.9879 14.9132L8.10753 13.3343C8.04032 13.2975 7.95967 13.2975 7.89247 13.3343L5.0121 14.9132C4.39652 15.2506 3.74112 14.5374 4.10401 13.925L7.4145 8.3381Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 8.96927 2.75037 9.87822 3.18945 10.668L3.38867 10.999L3.42773 11.0654C3.60231 11.4033 3.4953 11.825 3.16992 12.0371C2.84468 12.249 2.41642 12.1766 2.17773 11.8809L2.13281 11.8184L2.00195 11.6104C1.36597 10.5558 1 9.31963 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 9.40749 14.5834 10.7198 13.8672 11.8184L13.8223 11.8809C13.5836 12.1766 13.1553 12.249 12.8301 12.0371C12.4831 11.8109 12.3851 11.346 12.6113 10.999L12.8105 10.668C13.2496 9.87822 13.5 8.96927 13.5 8Z" />
      </svg>
    </div>,
    label: "Core Product", count: 99,
    sub: [
      { icon: <svg width={16} height={16} viewBox="0 0 16 16" fill="#02B8CC"><rect x={2} y={3} width={12} height={10} rx={1.5} stroke="#02B8CC" strokeWidth={1.2} fill="none" /><path d="M5 7h6M5 9.5h4" stroke="#02B8CC" strokeWidth={1} strokeLinecap="round" /></svg>, label: "Infra stability", count: 28 },
      { icon: <svg width={16} height={16} viewBox="0 0 16 16" fill="#02B8CC"><path fillRule="evenodd" d="M6.5 1a.5.5 0 0 1 .49.402l.938 4.69 3.693.923A.5.5 0 0 1 12 7.5a.5.5 0 0 1-.379.485l-3.693.923-.938 4.69A.5.5 0 0 1 6.5 14a.5.5 0 0 1-.49-.402l-.938-4.69-3.693-.923A.5.5 0 0 1 1 7.5a.5.5 0 0 1 .379-.485l3.693-.923.938-4.69A.5.5 0 0 1 6.5 1Z" /><path fillRule="evenodd" d="M12.5 10a.5.5 0 0 1 .474.342l.405 1.263 1.263.405a.5.5 0 0 1 0 .948l-1.263.405-.405 1.263a.5.5 0 0 1-.948 0l-.405-1.263-1.263-.405a.5.5 0 0 1 0-.948l1.263-.405.405-1.263A.5.5 0 0 1 12.5 10Z" /></svg>, label: "Autonomous systems", count: 16 },
      { icon: <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="#02B8CC" strokeWidth={1.2}><rect x={3} y={2} width={7} height={9} rx={1} /><path d="M6 13h7M6 11h7" strokeLinecap="round" /></svg>, label: "Mobile apps", count: 8 },
    ],
  },
  {
    icon: <div style={{ height: 24, width: 24, borderRadius: "50%", background: "#422222", display: "grid", placeItems: "center" }}>
      <svg width={16} height={16} viewBox="0 0 16 16" fill="#EB5757">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.4145 8.3381C7.68162 7.8873 8.31838 7.8873 8.5855 8.3381L11.896 13.925C12.2589 14.5374 11.6035 15.2506 10.9879 14.9132L8.10753 13.3343C8.04032 13.2975 7.95967 13.2975 7.89247 13.3343L5.0121 14.9132C4.39652 15.2506 3.74112 14.5374 4.10401 13.925L7.4145 8.3381Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 8.96927 2.75037 9.87822 3.18945 10.668L3.38867 10.999C3.60231 11.4033 3.4953 11.825 3.16992 12.0371C2.84468 12.249 2.41642 12.1766 2.17773 11.8809L2.00195 11.6104C1.36597 10.5558 1 9.31963 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 9.40749 14.5834 10.7198 13.8672 11.8184C13.5836 12.1766 13.1553 12.249 12.8301 12.0371C12.4831 11.8109 12.3851 11.346 12.6113 10.999L12.8105 10.668C13.2496 9.87822 13.5 8.96927 13.5 8Z" />
      </svg>
    </div>,
    label: "APAC Expansion", count: 21,
    sub: [
      { icon: <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="#EB5757" strokeWidth={1.2}><circle cx={8} cy={8} r={6} /><path d="M8 2c0 0-3 2-3 6s3 6 3 6M8 2c0 0 3 2 3 6s-3 6-3 6M2 8h12" strokeLinecap="round" /></svg>, label: "Japan Launch", count: 12 },
      { icon: <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="#EB5757" strokeWidth={1.2}><path d="M2 12l3-4 3 2 3-5 3 3" strokeLinecap="round" strokeLinejoin="round" /></svg>, label: "Customer-driven priorities", count: 9 },
    ],
  },
];

function InitiativesCard() {
  return (
    <div style={{
      position: "absolute", top: 88, left: 0, zIndex: 3,
      width: 400, borderRadius: 12, overflow: "hidden",
      background: "linear-gradient(0deg,rgba(255,255,255,.02),rgba(255,255,255,.02)),#0f1011",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 4px 32px 0 rgba(8,9,10,0.6)",
      userSelect: "none",
    }}>
      <header style={{
        paddingInline: 24, height: 60,
        display: "flex", alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <span style={{ fontSize: 13, color: "#d0d6e0", fontWeight: 510, letterSpacing: "-0.011em" }}>Initiatives</span>
      </header>

      {INITIATIVES.map((group, gi) => (
        <div key={group.label} style={{
          padding: "22px 22px 26px",
          display: "flex", flexDirection: "column", gap: 32,
          borderBottom: gi === 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
          position: "relative",
        }}>
          <button style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0, position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {group.icon}
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "-0.011em" }}>{group.label}</span>
              <span style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{group.count}</span>
            </div>
          </button>

          {group.sub?.map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8, position: "relative", paddingLeft: 26 }}>
              <LaneSvg />
              {s.icon}
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "-0.011em" }}>{s.label}</span>
              <span style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{s.count}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function TimelinePanel() {
  return (
    <div style={{ paddingInline: 24, paddingBlock: 16, display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>
      <div style={{ display: "flex" }}>
        {MONTHS.map((m, i) => (
          <div key={m.name} style={{ width: 160, display: "flex", alignItems: "center", position: "relative" }}>
            {i > 0 && (
              <div style={{ position: "absolute", left: 0, top: 4, height: 8, width: 1, background: "rgba(255,255,255,0.08)" }} />
            )}
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontVariantNumeric: "tabular-nums", letterSpacing: "0.04em" }}>{m.name}</span>
            <div style={{ display: "flex", justifyContent: "space-between", flex: 1, gap: 8, paddingInline: 8 }}>
              {Array.from({ length: m.stripes }).map((_, j) => (
                <div key={j} style={{ width: 1, height: 8, background: "rgba(255,255,255,0.05)" }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        {DATES.map((d, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center", width: 20 }}>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontVariantNumeric: "tabular-nums" }}>{d}</span>
          </div>
        ))}
      </div>

      <div style={{ width: 300, gap: 8, display: "flex", flexDirection: "column", alignItems: "flex-end", position: "relative", marginLeft: 375, marginTop: 28 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width={153} height={109} fill="none" viewBox="0 0 153 109"
          style={{ position: "absolute", bottom: 14, left: "100%" }}>
          <path stroke="url(#gagrad)" d="M153 .5a84.21 84.21 0 0 0-70.032 37.443L55.754 78.691A67.05 67.05 0 0 1 0 108.5" />
          <defs>
            <linearGradient id="gagrad" x1={0} x2={153} y1={54.5} y2={54.5} gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" stopOpacity={0.1} />
              <stop offset={1} stopColor="#fff" stopOpacity={0.3} />
            </linearGradient>
          </defs>
        </svg>
        <div style={{
          height: 24, width: "100%", marginTop: 58,
          borderRadius: 4, border: "0.5px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.05)",
          boxShadow: "inset 0 0 12px 0 rgba(0,0,0,0.2)",
          display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: 64,
        }}>
          <Diamond stroke="rgba(255,255,255,0.3)" />
          <span style={{ fontSize: 10, position: "absolute", top: "calc(100% + 8px)", right: 64, transform: "translateX(50%)", whiteSpace: "nowrap", color: "rgba(255,255,255,0.3)" }}>GA</span>
        </div>
      </div>

      <ProjectBar
        title="UI Refresh"
        color="#993B3B"
        solidWidth={320}
        marginLeft={578}
        marginTop={43}
        icon={<svg width={14} height={14} viewBox="0 0 16 16" fill="#02B8CC"><use href="#DesignTools" /></svg>}
        statusIcon={<WarnIcon />}
        milestones={[
          { stroke: "#5B5C5A", label: "Core screens", paddingLeft: 156, paddingRight: 36 },
          { stroke: "#E3484E", label: "Polish",       paddingLeft: 0,   paddingRight: 0  },
        ]}
      />
      <ProjectBar
        title="Split fares"
        color="#21b3ff"
        solidWidth={519}
        marginLeft={450}
        marginTop={56}
        icon={<svg width={14} height={14} viewBox="0 0 16 16" fill="#4CAF50"><use href="#DollarBill" /></svg>}
        statusIcon={<UpIcon />}
        milestones={[
          { stroke: "#5B5C5A", label: "Internal",    paddingLeft: 156, paddingRight: 36 },
          { stroke: "#5B5C5A", label: "Public Beta", paddingLeft: 0,   paddingRight: 0  },
        ]}
      />
      <ProjectBar
        title="Autonomy status clarity"
        color="#21b3ff"
        solidWidth={400}
        marginLeft={828}
        marginTop={56}
        icon={<svg width={14} height={14} viewBox="0 0 16 16" fill="#4B9EFF"><use href="#Robot" /></svg>}
        statusIcon={<UpIcon />}
        milestones={[
          { stroke: "#5B5C5A", label: "Alpha", paddingLeft: 212, paddingRight: 0 },
        ]}
      />
    </div>
  );
}

export default function PlanSection() {
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
              Define the{"\n"}product direction
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
              Plan and navigate from idea to launch. Align your team with product initiatives, strategic roadmaps, and clear, up-to-date PRDs.
            </p>

            <div style={{ marginTop: 48 }}>
              <Link href="/plan" style={{ display: "inline-block", textDecoration: "none" }}>
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{
                    fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em",
                    color: "#62666d", fontVariantNumeric: "tabular-nums",
                  }}>2.0</span>
                  <span style={{
                    display: "inline-block", marginLeft: 12,
                    fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em",
                    color: "#8a8f98",
                  }}>Plan</span>
                  <span style={{
                    display: "inline-block", marginLeft: 6,
                    fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em",
                    color: "#62666d",
                  }}>→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{
            background: "#0f1011",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            height: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            overflow: "hidden",
            width: "100%",
          }}>
            <TimelinePanel />
          </div>

          <div style={{
            position: "absolute", top: 0, left: 0,
            width: 70, height: "100%",
            background: "linear-gradient(to right, #08090a 20%, transparent 100%)",
            pointerEvents: "none", zIndex: 2,
          }} />

          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 300, height: "100%",
            background: "linear-gradient(to left, #08090a 20%, transparent 100%)",
            pointerEvents: "none", zIndex: 2,
          }} />

          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 200,
            background: "linear-gradient(to top, #08090a 30%, transparent 100%)",
            pointerEvents: "none", zIndex: 2,
          }} />

          <InitiativesCard />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ gridColumn: 2, paddingLeft: 32, paddingRight: 32 }}>
            <div style={{ height: 36 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {[
                { num: "2.1", label: "Projects",       uneven: false },
                { num: "2.2", label: "Documents",      uneven: true  },
                { num: "2.3", label: "Initiatives",    uneven: false },
                { num: "2.4", label: "Visual planning", uneven: true  },
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
