import Link from "next/link";
import Image from "next/image";


const DotsIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor">
    <path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
  </svg>
);

const PlusIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.75 4C8.75 3.586 8.414 3.25 8 3.25S7.25 3.586 7.25 4v3.25H4C3.586 7.25 3.25 7.586 3.25 8s.336.75.75.75h3.25V12c0 .414.336.75.75.75s.75-.336.75-.75V8.75H12c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H8.75V4Z" />
  </svg>
);

const UnassignedIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <path fill="#62666d" d="M8 4a2 2 0 0 0-2 2v.5a2 2 0 0 0 4 0V6a2 2 0 0 0-2-2" />
    <path fill="#62666d" fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-2.879-4.121-1.01 1.01a5.5 5.5 0 1 1 7.778 0l-1.01-1.01A3 3 0 0 0 8.757 10H7.243a3 3 0 0 0-2.122.879" clipRule="evenodd" />
  </svg>
);

const BacklogIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="#9c9da1">
    <path d="M13.9408 7.91426L11.9576 7.65557C11.9855 7.4419 12 7.22314 12 7C12 6.77686 11.9855 6.5581 11.9576 6.34443L13.9408 6.08573C13.9799 6.38496 14 6.69013 14 7C14 7.30987 13.9799 7.61504 13.9408 7.91426ZM13.4688 4.32049C13.2328 3.7514 12.9239 3.22019 12.5538 2.73851L10.968 3.95716C11.2328 4.30185 11.4533 4.68119 11.6214 5.08659L13.4688 4.32049ZM11.2615 1.4462L10.0428 3.03204C9.69815 2.76716 9.31881 2.54673 8.91341 2.37862L9.67951 0.531163C10.2486 0.767153 10.7798 1.07605 11.2615 1.4462ZM7.91426 0.0591659L7.65557 2.04237C7.4419 2.01449 7.22314 2 7 2C6.77686 2 6.5581 2.01449 6.34443 2.04237L6.08574 0.059166C6.38496 0.0201343 6.69013 0 7 0C7.30987 0 7.61504 0.0201343 7.91426 0.0591659ZM4.32049 0.531164L5.08659 2.37862C4.68119 2.54673 4.30185 2.76716 3.95716 3.03204L2.73851 1.4462C3.22019 1.07605 3.7514 0.767153 4.32049 0.531164ZM1.4462 2.73851L3.03204 3.95716C2.76716 4.30185 2.54673 4.68119 2.37862 5.08659L0.531164 4.32049C0.767153 3.7514 1.07605 3.22019 1.4462 2.73851ZM0.0591659 6.08574C0.0201343 6.38496 0 6.69013 0 7C0 7.30987 0.0201343 7.61504 0.059166 7.91426L2.04237 7.65557C2.01449 7.4419 2 7.22314 2 7C2 6.77686 2.01449 6.5581 2.04237 6.34443L0.0591659 6.08574ZM0.531164 9.67951L2.37862 8.91341C2.54673 9.31881 2.76716 9.69815 3.03204 10.0428L1.4462 11.2615C1.07605 10.7798 0.767153 10.2486 0.531164 9.67951ZM2.73851 12.5538L3.95716 10.968C4.30185 11.2328 4.68119 11.4533 5.08659 11.6214L4.32049 13.4688C3.7514 13.2328 3.22019 12.9239 2.73851 12.5538ZM6.08574 13.9408L6.34443 11.9576C6.5581 11.9855 6.77686 12 7 12C7.22314 12 7.4419 11.9855 7.65557 11.9576L7.91427 13.9408C7.61504 13.9799 7.30987 14 7 14C6.69013 14 6.38496 13.9799 6.08574 13.9408ZM9.67951 13.4688L8.91341 11.6214C9.31881 11.4533 9.69815 11.2328 10.0428 10.968L11.2615 12.5538C10.7798 12.9239 10.2486 13.2328 9.67951 13.4688ZM12.5538 11.2615L10.968 10.0428C11.2328 9.69815 11.4533 9.31881 11.6214 8.91341L13.4688 9.67951C13.2328 10.2486 12.924 10.7798 12.5538 11.2615Z" />
  </svg>
);

const TodoIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14">
    <rect x="1" y="1" width="12" height="12" rx="6" stroke="#62666d" strokeWidth="1.5" fill="none" />
  </svg>
);

const InProgressIcon = () => (
  <svg width={14} height={14} viewBox="0 0 16 16" fill="none">
    <g fill="#F2C94C" opacity=".9">
      <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-2A5 5 0 1 1 8 3a5 5 0 0 1 0 10Z" />
      <path d="M11.571 8A3.571 3.571 0 0 1 8 11.571V4.43A3.572 3.572 0 0 1 11.57 8Z" />
    </g>
  </svg>
);

const DoneIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="#5e6ad2">
    <path fillRule="evenodd" clipRule="evenodd" d="M7 0C3.134 0 0 3.134 0 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7Zm4.101 5.101a1 1 0 0 0-1.414-1.414L5.5 7.879 4.101 6.48A1 1 0 0 0 2.687 7.894l1.899 1.899a1 1 0 0 0 1.414 0l4.1-4.692Z" />
  </svg>
);

const SlackIcon = () => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <path d="M3.951 9.85a1.469 1.469 0 1 1-2.94 0v-1.47h1.47a1.469 1.469 0 0 1 1.47 1.47Zm.735 0a1.469 1.469 0 0 1 1.47-1.47 1.469 1.469 0 0 1 1.47 1.47v3.68a1.469 1.469 0 0 1-2.94 0V9.85Z" fill="#E01E5A" />
    <path d="M6.156 3.942a1.469 1.469 0 1 1 0-2.94h1.47v1.47a1.469 1.469 0 0 1-1.47 1.47Zm0 .748a1.469 1.469 0 0 1 1.47 1.47 1.469 1.469 0 0 1-1.47 1.47H2.47a1.469 1.469 0 0 1 0-2.94h3.686Z" fill="#36C5F0" />
    <path d="M12.048 6.16a1.469 1.469 0 1 1 2.94 0v1.47h-1.47a1.469 1.469 0 0 1-1.47-1.47Zm-.735 0a1.469 1.469 0 0 1-1.47 1.47 1.469 1.469 0 0 1-1.47-1.47V2.471a1.469 1.469 0 0 1 2.94 0V6.16Z" fill="#2EB67D" />
    <path d="M9.843 12.057a1.469 1.469 0 1 1 0 2.94h-1.47v-1.47a1.469 1.469 0 0 1 1.47-1.47Zm0-.735a1.469 1.469 0 0 1-1.47-1.47 1.469 1.469 0 0 1 1.47-1.47h3.686a1.469 1.469 0 0 1 0 2.94H9.843Z" fill="#ECB22E" />
  </svg>
);


function Label({ color, text }: { color: string; text: string }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 500, height: 20,
      paddingInline: "2px 8px", display: "inline-flex", alignItems: "center",
      color: "#8a8f98", borderRadius: 2,
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.04)",
      boxShadow: "0 1.2px 0 0 rgba(0,0,0,0.03)",
    }}>
      <span style={{ height: 4, width: 4, borderRadius: "50%", background: color, marginInline: 5, flexShrink: 0 }} />
      {text}
    </span>
  );
}


type IssueProps = {
  id: string;
  title: string;
  avatar?: string;
  labels?: { color: string; text: string }[];
};

function Issue({ id, title, avatar, labels }: IssueProps) {
  return (
    <div style={{
      borderRadius: 6,
      border: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.02)",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.4)",
      width: 300, height: 96, padding: 8,
      display: "flex", flexDirection: "column", gap: 3,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 11, color: "#62666d", fontWeight: 510 }}>{id}</span>
        <div style={{ color: "#62666d" }}>
          {avatar
            ? <Image src={avatar} alt="" width={16} height={16} style={{ borderRadius: "50%" }} />
            : <UnassignedIcon />}
        </div>
      </div>
      <span style={{ fontSize: 13, lineHeight: 1.4, letterSpacing: "-0.011em", color: "#d0d6e0" }}>{title}</span>
      {labels && (
        <div style={{ display: "flex", gap: 4, marginTop: "auto", flexWrap: "wrap" }}>
          {labels.map((l) => <Label key={l.text} {...l} />)}
        </div>
      )}
    </div>
  );
}


function Col({ icon, label, count, issues }: {
  icon: React.ReactNode; label: string; count: number; issues: IssueProps[];
}) {
  return (
    <div style={{ width: 300, flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, paddingInline: 8, marginBottom: 24 }}>
        {icon}
        <span style={{ fontSize: 13, color: "#d0d6e0", fontWeight: 510 }}>{label}</span>
        <span style={{ fontSize: 13, color: "#62666d" }}>{count}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 2, color: "#62666d" }}>
          <button style={{ height: 20, width: 20, display: "grid", placeItems: "center", border: "none", background: "transparent", color: "inherit", padding: 0, pointerEvents: "none" }}><PlusIcon /></button>
          <button style={{ height: 20, width: 20, display: "grid", placeItems: "center", border: "none", background: "transparent", color: "inherit", padding: 0, pointerEvents: "none" }}><DotsIcon /></button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {issues.map((i) => <Issue key={i.id} {...i} />)}
      </div>
    </div>
  );
}


function IssueBoardPanel() {
  const backlog: IssueProps[] = [
    { id: "ENG-2085", title: "Reduce UI flicker during autonomy..." },
    { id: "ENG-2094", title: "Add buffering for autonomy event streams" },
    { id: "ENG-2092", title: "Reduce startup delay caused by vehicle sync" },
    { id: "ENG-2200", title: "Fix delayed route updates during rerouting" },
  ];
  const todo: IssueProps[] = [
    { id: "ENG-926",  title: "Remove UI inconsistencies",             avatar: "/images/avatars/avatar1.png", labels: [{ color: "#EB5757", text: "Bug" }, { color: "#8B5CF6", text: "Design" }] },
    { id: "ENG-2088", title: "TypeError: Cannot read properties",     avatar: "/images/avatars/avatar2.png", labels: [{ color: "#EB5757", text: "Bug" }] },
    { id: "ENG-924",  title: "Upgrade to Claude Opus 4.5",            avatar: "/images/avatars/avatar3.png", labels: [{ color: "#6366F1", text: "AI" }] },
    { id: "ENG-1882", title: "Optimize load times",                   labels: [{ color: "#10B981", text: "Performance" }] },
  ];
  const inProgress: IssueProps[] = [
    { id: "ENG-1487", title: "Remove contentData from GraphQL API",   avatar: "/images/avatars/avatar4.png" },
    { id: "MKT-1028", title: "Launch page assets",                    avatar: "/images/avatars/avatar5.png", labels: [{ color: "#8B5CF6", text: "Design" }] },
    { id: "ENG-2187", title: "Prevent duplicate ride requests on poor...", avatar: "/images/avatars/avatar6.png", labels: [{ color: "#EB5757", text: "Bug" }] },
  ];
  const done: IssueProps[] = [
    { id: "ENG-2074", title: "Clean up deprecated APIs...",            labels: [{ color: "#06B6D4", text: "API" }] },
    { id: "ENG-1912", title: "Reduce latency in autonomy st...",       labels: [{ color: "#6366F1", text: "61005" }] },
    { id: "ENG-1951", title: "Reduce ETA fluctuations durin...",       labels: [{ color: "#6366F1", text: "61202" }] },
    { id: "ENG-1960", title: "Improve fallback messaging",             labels: [{ color: "#8B5CF6", text: "UI" }] },
    { id: "ENG-1991", title: "Improve rider visibility into veh..." },
  ];

  return (
    <div style={{
      background: "#0f1011",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 4px 32px 0 rgba(8,9,10,0.6)",
      borderRadius: 12,
      height: 608,
      padding: "24px 0 24px 385px",
      opacity: 0.8,
      overflow: "hidden",
      position: "relative",
    }}>
      <div style={{ display: "flex", gap: 16 }}>
        <Col icon={<BacklogIcon />}    label="Backlog"     count={8}  issues={backlog} />
        <Col icon={<TodoIcon />}       label="Todo"        count={71} issues={todo} />
        <Col icon={<InProgressIcon />} label="In Progress" count={3}  issues={inProgress} />
        <Col icon={<DoneIcon />}       label="Done"        count={53} issues={done} />
      </div>
    </div>
  );
}


const MSGS = [
  { name: "lena",    src: "/images/avatars/lena.png",    text: "Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?" },
  { name: "didier",  src: "/images/avatars/didier.png",  text: "Yea, we're still blocking initial render on a full vehicle_state sync every time..." },
  { name: "andreas", src: "/images/avatars/andreas.png", text: "Feels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing!" },
];

function SlackThread() {
  return (
    <div style={{
      maxWidth: 480, width: "100%",
      borderRadius: 16, paddingBottom: 12,
      overflow: "hidden", position: "relative",
      background: "linear-gradient(0deg,rgba(255,255,255,.02),rgba(255,255,255,.02)),#0f1011",
      boxShadow: "0 4px 32px 0 rgba(8,9,10,.6)",
      border: "1px solid rgba(255,255,255,.08)",
    }}>
      <div style={{ padding: "17px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <SlackIcon />
          <span style={{ fontSize: 15, color: "#8a8f98" }}>Thread in </span>
          <span style={{ fontSize: 15, color: "#d0d6e0", fontWeight: 510 }}>#feedback</span>
        </div>
        <div style={{ color: "#62666d" }}><DotsIcon /></div>
      </div>
      <div style={{ padding: "26px 24px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 24, height: 342, overflow: "hidden" }}>
        {MSGS.map((m) => (
          <div key={m.name} style={{ display: "flex", gap: 15 }}>
            <div style={{ width: 36, height: 36, borderRadius: 6, flexShrink: 0, overflow: "hidden", position: "relative" }}>
              <Image src={m.src} alt={m.name} fill sizes="36px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, height: 22, marginTop: -4 }}>
                <span style={{ fontSize: 12, color: "#d0d6e0", fontWeight: 590, lineHeight: 1.6 }}>{m.name}</span>
              </div>
              <span style={{ fontSize: 12, lineHeight: 1.6, color: "#8a8f98", opacity: 0.8 }}>{m.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ gap: 12, padding: 16, borderRadius: 8, border: "1px solid rgba(255,255,255,.06)", background: "rgba(255,255,255,.02)", height: 160, marginInline: 12, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#6d78d5", background: "#232534", height: 24, paddingInline: 3, borderRadius: 4, display: "inline-flex", alignItems: "center", marginRight: 4, fontSize: 15 }}>@Linear</span>
          <span style={{ fontSize: 15, color: "#d0d6e0" }}>create urgent issues and assign to me</span>
          <span style={{ height: 19, width: 1, borderRadius: 1, display: "inline-block", background: "#8a8f98", marginLeft: 4, animation: "cursorBlink 1.25s infinite" }} />
        </div>
      </div>
      <style>{`@keyframes cursorBlink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}


export default function IntakeSection() {
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ height: 1, background: "#08090a" }} />
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
      </div>

      <div style={{ height: 40 }} />

      <section style={{ display: "flex", flexDirection: "column", paddingTop: 96, paddingBottom: 128, maxWidth: 1180, margin: "0 auto" }}>

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
              Make product operations self-driving
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
              Turn conversations and customer feedback into actionable issues that are routed, labeled, and prioritized for the right team.
            </p>

            <div style={{ marginTop: 48 }}>
              <Link href="/intake" style={{ display: "inline-block", textDecoration: "none" }}>
                <div style={{ display: "inline-flex", alignItems: "center", transition: "filter 0.16s cubic-bezier(0.25,0.46,0.45,0.94)" }}>
                  <span style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    letterSpacing: "-0.011em",
                    color: "#62666d",
                    fontVariantNumeric: "tabular-nums",
                  }}>1.0</span>
                  <span style={{
                    display: "inline-block",
                    marginLeft: 12,
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    letterSpacing: "-0.011em",
                    color: "#8a8f98",
                  }}>Intake</span>
                  <span style={{
                    display: "inline-block",
                    marginLeft: 6,
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    letterSpacing: "-0.011em",
                    color: "#62666d",
                  }}>→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", overflowX: "hidden", paddingTop: 28 }}>
          <div style={{ marginLeft: 0, marginRight: 0 }}>
            <IssueBoardPanel />
          </div>

          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "100%",
            background: "linear-gradient(to left, #08090a 20%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "240px",
            background: "linear-gradient(to top, #08090a 30%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 3,
          }}>
            <SlackThread />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ gridColumn: 2, paddingLeft: 32, paddingRight: 32 }}>
            <div style={{ height: 36 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {[
                { num: "1.1", label: "Linear Agent",       uneven: false },
                { num: "1.2", label: "Triage",             uneven: true },
                { num: "1.3", label: "Customer Requests",  uneven: false },
                { num: "1.4", label: "Linear Asks",        uneven: true },
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
