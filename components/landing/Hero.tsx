import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div style={{ paddingTop: 200 }}>

      <div style={{ maxWidth: 1150, margin: "0 auto" }}>

        <div>
          <h1
            className="m-0 font-medium leading-none tracking-[-0.022em]"
            style={{ fontSize: "4rem" }}
          >
            <span aria-hidden="true" className="text-[#f7f8f8]">
              The product development<br />
              system for teams and agents
            </span>
            <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
              style={{ clip: "rect(0,0,0,0)" }}>
              The product development system for teams and agents
            </span>
          </h1>
        </div>

        <div style={{ marginTop: 32 }} />

        <div className="flex justify-between min-w-0">
          <div className="flex flex-col gap-6">
            <p
              className="m-0 text-[#8a8f98]"
              style={{ fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em" }}
            >
              Purpose-built for planning and building products. Designed for the AI era.
            </p>
          </div>

          <Link
            href="/next"
            className="hidden md:flex items-center gap-3 no-underline self-start"
            style={{ transition: "filter 0.16s cubic-bezier(0.25,0.46,0.45,0.94)" }}
          >
            <div
              className="relative shrink-0 rounded-full"
              style={{
                height: 16,
                width: 16,
                background: "rgba(94,106,210,0.15)",
                boxShadow: "0 0 0 0 rgba(94,106,210,0.1)",
                animation: "heroPulse 1.75s cubic-bezier(0.66,0,0,1) infinite",
              }}
            >
              <span
                className="absolute rounded-full"
                style={{
                  height: 6, width: 6,
                  background: "#5e6ad2",
                  top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
            </div>
            <span
              className="text-[#d0d6e0]"
              style={{ fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", fontWeight: 510 }}
            >
              Issue tracking is dead
            </span>
            <span
              className="text-[#8a8f98]"
              style={{ fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em" }}
            >
              linear.app/next<span className="text-[#62666d]"> →</span>
            </span>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: 70 }} />

      <div className="relative" style={{ marginLeft: "-46px", marginRight: "-46px", width: "calc(100% + 92px)" }}>

        <div
          className="relative w-full mx-auto overflow-hidden rounded-md"
          style={{ paddingBottom: 112 }}
        >
          <div
            className="absolute overflow-hidden rounded-[inherit]"
            aria-hidden="true"
            style={{
              maxWidth: "calc(min(100vw, 1920px) - 24px)",
              width: "100%",
              margin: "0 auto",
              inset: "0 12px",
              background:
                "radial-gradient(52.53% 57.5% at 50% 100%, rgba(8,9,10,0) 0%, rgba(8,9,10,0.5) 100%), linear-gradient(180deg, #08090a 10%, #d0d6e0 100%)",
            }}
          >
            <Image
              alt=""
              loading="eager"
              width={1920}
              height={1080}
              className="h-full"
              style={{ opacity: 0.08, color: "transparent", width: "100%", height: "auto" }}
              src="/images/hero/bg-texture.png"
            />
          </div>

          <div
            className="absolute hidden lg:flex"
            style={{
              bottom: -9,
              left: "50%",
              width: 1920,
              transform: "translateX(calc(-50% - 5px))",
              maskImage: "linear-gradient(to right, transparent 0, black 80px, black calc(100% - 80px), transparent 100%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              loading="lazy"
              width={1920}
              height={1080}
              style={{ color: "transparent", width: "100%", height: "auto" }}
              src="/images/hero/app-screenshot.png"
            />
          </div>

          <div className="relative mx-auto overflow-hidden px-[60px]">

            <div
              className="relative mx-auto select-none flex items-stretch"
              style={{
                height: 720,
                width: "100%",
                maxWidth: 1320,
                minWidth: 1200,
                borderRadius: 12,
                background: "#101112",
                border: "1px solid rgba(255,255,255,0.08)",
                overflow: "hidden",
              }}
            >
              {/* <div className="absolute pointer-events-none" style={{ inset: 0, backgroundImage: "url(/static/grain-default.png)", backgroundSize: "256px 256px", opacity: 0.15, zIndex: 0 }} /> */}

              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.015) 0%, transparent 40%)", zIndex: 20 }} />

              <div className="relative shrink-0 h-full" style={{ width: 220, zIndex: 1 }}>
                <AppSidebar />
              </div>

              <div className="relative flex-1" style={{ margin: "8px 8px 8px 0", borderRadius: 8, overflow: "hidden", background: "#0c0d0e", zIndex: 1, border: "1px solid rgba(255,255,255,0.1)", alignSelf: "stretch" }}>
                <IssueView />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          to { box-shadow: 0 0 0 10px rgba(243,79,82,0); }
        }
      `}</style>
    </div>
  );
}

const InboxIcon = () => <svg width={14} height={14} viewBox="0 0 16 16" fill="#9c9da1"><path fillRule="evenodd" clipRule="evenodd" d="M11.007 1.009c1.017.083 1.89.78 2.187 1.771l1.697 5.649c.112.375.135.772.066 1.158l-.45 2.527-.07.308a3.5 3.5 0 0 1-3.059 2.564l-.316.014H4.93l-.315-.014a3.5 3.5 0 0 1-3.06-2.564l-.069-.308-.45-2.527a2.5 2.5 0 0 1 .029-1.017l.038-.141L2.797 2.78a2.5 2.5 0 0 1 2.188-1.77L5.19 1h5.612zM2.96 11.852A2 2 0 0 0 4.929 13.5h6.134a2 2 0 0 0 1.968-1.648l.24-1.352h-1.65c-.396 0-.77.174-1.025.47l-.103.133A2.01 2.01 0 0 1 8.82 12H7.172a2.01 2.01 0 0 1-1.6-.794l-.074-.102a1.36 1.36 0 0 0-1.127-.604H2.72zM5.191 2.5a1 1 0 0 0-.899.56l-.06.152L2.537 8.86a1 1 0 0 0-.03.14H4.37c.954 0 1.846.477 2.375 1.271l.038.051a.51.51 0 0 0 .388.178h1.647a.51.51 0 0 0 .427-.229l.104-.145A2.85 2.85 0 0 1 11.62 9h1.864a1 1 0 0 0-.03-.14L11.76 3.212a1 1 0 0 0-.957-.712z"/></svg>;

const MyIssuesIcon = () => <svg width={14} height={14} viewBox="0 0 16 16" fill="#9c9da1"><path fillRule="evenodd" clipRule="evenodd" d="M1 4.75v-.5A3.25 3.25 0 0 1 4.25 1h.5a.75.75 0 0 1 0 1.5h-.5A1.75 1.75 0 0 0 2.5 4.25v.5a.75.75 0 0 1-1.5 0M11.25 1h.5A3.25 3.25 0 0 1 15 4.25v.5l-.004.077a.75.75 0 0 1-1.492 0L13.5 4.75v-.5a1.75 1.75 0 0 0-1.75-1.75h-.5a.75.75 0 0 1 0-1.5m-6.5 13.995h-.5A3.25 3.25 0 0 1 1 11.745v-.5l.004-.077a.75.75 0 0 1 1.492 0l.004.077v.5c0 .967.784 1.75 1.75 1.75h.5a.75.75 0 0 1 0 1.5m6.5.005h.5A3.25 3.25 0 0 0 15 11.75v-.5l-.004-.077a.75.75 0 0 0-1.492 0l-.004.077v.5a1.75 1.75 0 0 1-1.75 1.75h-.5a.75.75 0 0 0 0 1.5M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>;

const ReviewsIcon = () => <svg width={14} height={14} viewBox="0 0 16 16" fill="#9c9da1"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 10C13.8807 10 15 11.1193 15 12.5C15 13.8807 13.8807 15 12.5 15C11.1193 15 10 13.8807 10 12.5C10 11.1193 11.1193 10 12.5 10ZM12.5 11.5C11.9477 11.5 11.5 11.9477 11.5 12.5C11.5 13.0523 11.9477 13.5 12.5 13.5C13.0523 13.5 13.5 13.0523 13.5 12.5C13.5 11.9477 13.0523 11.5 12.5 11.5Z"/><path fillRule="evenodd" clipRule="evenodd" d="M3.5 4.5C3.91414 4.50009 4.25 4.83584 4.25 5.25V14.249C4.24982 14.663 3.91403 14.9989 3.5 14.999C3.0859 14.999 2.75018 14.6631 2.75 14.249V5.25C2.75 4.83579 3.08579 4.5 3.5 4.5Z"/><path fillRule="evenodd" clipRule="evenodd" d="M10 2.75C11.7949 2.75 13.25 4.20507 13.25 6V10.75C13.25 11.1642 12.9142 11.5 12.5 11.5C12.0858 11.5 11.75 11.1642 11.75 10.75V6C11.75 5.0335 10.9665 4.25 10 4.25H8C7.58579 4.25 7.25 3.91421 7.25 3.5C7.25 3.08579 7.58579 2.75 8 2.75H10Z"/><path fillRule="evenodd" clipRule="evenodd" d="M3.5 1C4.88071 1 6 2.11929 6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5C1 2.11929 2.11929 1 3.5 1ZM3.5 2.5C2.94772 2.5 2.5 2.94772 2.5 3.5C2.5 4.05228 2.94772 4.5 3.5 4.5C4.05228 4.5 4.5 4.05228 4.5 3.5C4.5 2.94772 4.05228 2.5 3.5 2.5Z"/></svg>;

const PulseIcon = () => <svg width={14} height={14} viewBox="0 0 16 16" fill="#9c9da1"><path fillRule="evenodd" clipRule="evenodd" d="M11.3354 1.08228C11.7059 1.27438 11.8561 1.74156 11.6708 2.12576L9.5593 6.50508C9.39923 6.83707 9.64113 7.22224 10.0097 7.22224H14C14 7.22224 14.2275 7.22219 14.25 7.22219C14.6642 7.22219 15 7.57041 15 7.99996C15 8.4295 14.6642 8.77772 14.25 8.77772C10.4465 8.77772 7.32888 11.131 5.67083 14.5699C5.48559 14.9541 5.03507 15.1098 4.66459 14.9177C4.29411 14.7256 4.14394 14.2584 4.32918 13.8742L6.44081 9.49467C6.60085 9.16275 6.35907 8.77764 5.99059 8.77759C4.57706 8.7774 3.16352 8.77781 1.75 8.77781C1.33579 8.77781 1 8.42959 1 8.00004C1 7.5705 1.33579 7.22228 1.75 7.22228C5.55362 7.22228 8.67116 4.86885 10.3292 1.43003C10.5145 1.04588 10.965 0.890196 11.3354 1.08228Z"/></svg>;

const ChevronIcon = () => <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor"><path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"/></svg>;

const CollapseArrow = () => <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor"><path d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.80802C6.25 5.42212 6.66861 5.18169 7.00194 5.37613L10.7596 7.56811C11.0904 7.76105 11.0904 8.23895 10.7596 8.43189L7.00194 10.6239Z"/></svg>;

const InProgressIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14">
    <rect x="1" y="1" width="12" height="12" rx="6" stroke="#F2C94C" strokeWidth="1.5" fill="none"/>
    <path fill="#F2C94C" stroke="none" d="M 3.5,3.5 L3.5,0 A3.5,3.5 0 0,1 3.5, 7 z" transform="translate(3.5,3.5)"/>
  </svg>
);

function IssueView() {
  return (
    <div className="relative overflow-hidden h-full">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(120,119,198,0.15) 0%, transparent 60%)" }} />
      {/* <div className="absolute pointer-events-none" style={{ inset: 1, backgroundImage: "url(/static/grain-default.png)", backgroundSize: "256px 256px", opacity: 0.12, zIndex: 1 }} /> */}

      <div className="relative h-full flex flex-col" style={{ zIndex: 2 }}>

        <div className="flex shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", height: 44 }}>
          <div className="flex items-center justify-between flex-1" style={{ padding: "0 16px" }}>
            <div className="flex items-center gap-2">
              <span className="text-[#d0d6e0]" style={{ fontSize: "0.8125rem", fontWeight: 510 }}>Faster app launch</span>
              <button className="flex items-center justify-center" style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }} tabIndex={-1}>
                <svg width={14} height={14} viewBox="0 0 16 16" fill="#F2C94C"><path d="M14.9441 6.05256C14.8798 5.88159 14.7646 5.73411 14.6136 5.6298C14.4626 5.52549 14.2832 5.46931 14.0992 5.46877H10.4417C10.3795 5.46881 10.3187 5.44969 10.2679 5.41405C10.2171 5.37841 10.1787 5.32801 10.1581 5.2698L8.84514 1.58061C8.78083 1.4101 8.66552 1.26313 8.51465 1.15936C8.36377 1.0556 8.18453 1 8.00091 1C7.81728 1 7.63804 1.0556 7.48717 1.15936C7.33629 1.26313 7.22098 1.4101 7.15667 1.58061L5.84375 5.2698C5.82313 5.32791 5.78483 5.37825 5.73415 5.41388C5.68346 5.44951 5.62288 5.46869 5.56075 5.46877H1.902C1.71682 5.46863 1.53608 5.52504 1.38439 5.63033C1.23269 5.73562 1.11739 5.88468 1.05416 6.05724C0.990937 6.22979 0.982856 6.41746 1.03102 6.59473C1.07919 6.772 1.18126 6.93025 1.32335 7.04798L4.4383 9.6095C4.4849 9.64784 4.51872 9.69923 4.53534 9.75695C4.55196 9.81467 4.5506 9.87603 4.53143 9.93297L3.22272 13.8235C3.16224 14.0034 3.16105 14.1977 3.21932 14.3783C3.27758 14.5589 3.39229 14.7164 3.54684 14.8281C3.70139 14.9398 3.88777 15 4.07903 14.9996C4.27029 14.9994 4.45652 14.9388 4.61076 14.8267L7.82305 12.4915C7.87456 12.4541 7.93675 12.4339 8.00061 12.4339C8.06446 12.4339 8.12665 12.4541 8.17817 12.4915L11.3893 14.8261C11.5434 14.9386 11.7297 14.9995 11.9212 15C12.1126 15.0005 12.2992 14.9406 12.454 14.8289C12.6087 14.7172 12.7236 14.5595 12.782 14.3788C12.8403 14.198 12.8391 14.0035 12.7785 13.8235L11.4698 9.93059C11.4506 9.87364 11.4493 9.81229 11.4659 9.75457C11.4825 9.69685 11.5163 9.64545 11.5629 9.60712L14.6839 7.04202C14.8242 6.9233 14.9243 6.76477 14.9708 6.58783C15.0174 6.41089 15.0081 6.22406 14.9441 6.05256Z"/></svg>
              </button>
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "#62666d", padding: 0, display: "flex" }} tabIndex={-1}>
                <svg width={14} height={14} viewBox="0 0 16 16" fill="currentColor"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#62666d]" style={{ fontSize: "0.6875rem" }}>
                <span className="text-[#3d4147]">02</span> / 145
              </span>
              <div className="flex">
                <button className="flex items-center justify-center" style={{ background: "none", border: "none", cursor: "pointer", color: "#62666d", padding: 2 }} tabIndex={-1}>
                  <svg width={14} height={14} viewBox="0 0 16 16" fill="currentColor"><path d="M11.2197 10.7803C11.5126 11.0732 11.9874 11.0732 12.2803 10.7803C12.5732 10.4874 12.5732 10.0126 12.2803 9.71967L8.28033 5.71967C7.98999 5.42933 7.52014 5.42643 7.22624 5.71318L3.22624 9.61581C2.92976 9.90508 2.92391 10.3799 3.21318 10.6764C3.50244 10.9729 3.97728 10.9787 4.27376 10.6895L7.74351 7.30417L11.2197 10.7803Z"/></svg>
                </button>
                <button className="flex items-center justify-center" style={{ background: "none", border: "none", cursor: "pointer", color: "#62666d", padding: 2 }} tabIndex={-1}>
                  <ChevronIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between shrink-0" style={{ width: 240, padding: "0 12px", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
            <span className="text-[#3d4147] font-mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.02em" }}>ENG-2703</span>
            <div className="flex items-center gap-1">
              <button className="flex items-center justify-center" style={{ background: "none", border: "none", cursor: "pointer", color: "#62666d", padding: 3 }} tabIndex={-1}>
                <svg width={13} height={13} viewBox="0 0 16 16" fill="currentColor"><path d="M9.306 10.206a.75.75 0 0 1 0 1.053l-2.458 2.459a3.75 3.75 0 0 1-5.303-5.303l2.458-2.458a.75.75 0 1 1 1.06 1.06L2.605 9.476a2.25 2.25 0 1 0 3.182 3.182l2.458-2.458a.75.75 0 0 1 1.06 0Zm-.636-4.242a.75.75 0 0 1 1.06-1.06l2.459 2.458a3.75 3.75 0 0 1-5.304 5.304L4.427 10.207a.75.75 0 1 1 1.06-1.06l2.459 2.457a2.25 2.25 0 1 0 3.182-3.182L8.67 5.964Z"/></svg>
              </button>
              <button className="flex items-center justify-center" style={{ background: "none", border: "none", cursor: "pointer", color: "#62666d", padding: 3 }} tabIndex={-1}>
                <svg width={13} height={13} viewBox="0 0 16 16" fill="currentColor"><path d="M9.5 3.25a2.25 2.25 0 0 1 4.315-.894c.164.378.22.795.164 1.203A2.25 2.25 0 0 1 12.5 5.371V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.25 2.25 0 1 1-1.5 0V5.37a2.25 2.25 0 1 1 1.5 0v1.836a2.492 2.492 0 0 1 1-.208h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.499.75.75 0 0 0 0-1.5Zm-7.5 9.499a.75.75 0 1 0 0 1.499.75.75 0 0 0 0-1.5Z"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 min-h-0">

        <div className="overflow-y-auto flex-1" style={{ padding: "32px 48px 32px 64px" }}>
          <h3 className="m-0 text-[#d0d6e0]" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>Faster app launch</h3>
          <div style={{ height: 10 }} />
          <p className="m-0 text-[#8a8f98]" style={{ fontSize: "0.8125rem", lineHeight: 1.6, maxWidth: 520 }}>
            Render UI before <code className="font-mono text-[#62666d]" style={{ fontSize: "0.75rem" }}>vehicle_state</code> sync when minimum required state is present, instead of blocking on full refresh during iOS startup.
          </p>
          <div style={{ height: 28 }} />

          <h4 className="m-0 text-[#8a8f98]" style={{ fontSize: "0.8125rem", fontWeight: 600 }}>Activity</h4>
          <div style={{ height: 22 }} />

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Image src="/images/avatars/karri.png" width={14} height={14} alt="Karri" className="rounded-full" />
              <span className="text-[#62666d]" style={{ fontSize: "0.6875rem" }}>
                <span className="text-[#8a8f98] font-medium">Linear</span> created the issue via <span className="text-[#8a8f98] font-medium">Slack</span> on behalf of <span className="text-[#8a8f98] font-medium">karri</span> · 2min ago
              </span>
            </div>
            <div style={{ height: 1, background: "rgba(255,255,255,0.04)", margin: "8px 0" }} />
            <div className="flex items-center gap-2">
              <svg width={14} height={14} viewBox="0 0 16 16" fill="#62666d"><path fillRule="evenodd" clipRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 3.5A.75.75 0 0 1 2.75 7.5h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 2 8.25Zm0 3.5A.75.75 0 0 1 2.75 11h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 2 11.75Z"/></svg>
              <span className="text-[#62666d]" style={{ fontSize: "0.6875rem" }}>
                <span className="text-[#8a8f98] font-medium">Triage Intelligence</span> added the label <span className="text-[#8a8f98] font-medium">Performance</span> and <span className="text-[#8a8f98] font-medium">iOS</span> · 2min ago
              </span>
            </div>
          </div>

          <div style={{ height: 20 }} />

          <div className="rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "10px 12px" }}>
            <div className="flex items-center gap-2 mb-2">
              <Image src="/images/avatars/karri.png" width={14} height={14} alt="karri" className="rounded-full" />
              <span className="text-[#8a8f98] font-medium" style={{ fontSize: "0.6875rem" }}>karri</span>
              <span className="text-[#3d4147]" style={{ fontSize: "0.6875rem" }}>· 4 min ago</span>
            </div>
            <p className="m-0 text-[#8a8f98]" style={{ fontSize: "0.75rem", lineHeight: 1.5 }}>Right now we show a spinner forever, which makes it look like the car disappeared...</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "8px 0" }} />
            <div className="flex items-center gap-2 mb-2">
              <Image src="/images/avatars/jori.png" width={14} height={14} alt="jori" className="rounded-full" />
              <span className="text-[#8a8f98] font-medium" style={{ fontSize: "0.6875rem" }}>jori</span>
              <span className="text-[#3d4147]" style={{ fontSize: "0.6875rem" }}>· just now</span>
            </div>
            <div className="flex gap-2">
              <div style={{ width: 22, flexShrink: 0 }} />
              <div className="flex flex-col gap-2">
                <p className="m-0 text-[#8a8f98]" style={{ fontSize: "0.75rem" }}><strong className="text-[#d0d6e0] font-medium">@Codex</strong> can you take a stab at this?</p>
                <div className="flex items-center gap-2">
                  <svg width={13} height={13} fill="none" viewBox="0 0 15 15"><path stroke="#62666d" strokeLinecap="round" strokeLinejoin="round" d="M9.375 6.25 12.5 9.375 9.375 12.5"/><path stroke="#62666d" strokeLinecap="round" strokeLinejoin="round" d="M2.5 2.5v4.375a2.5 2.5 0 0 0 2.5 2.5h7.5"/></svg>
                  <span className="text-[#8a8f98]" style={{ fontSize: "0.75rem" }}>jori <span className="text-[#62666d]">connected</span> Codex <span className="text-[#62666d]">· just now</span></span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 20 }} />

          <div className="rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "10px 12px 14px" }}>
            <div className="flex items-center gap-2 mb-2">
              <Image src="/images/avatars/codex.png" width={14} height={14} alt="Codex" className="rounded-full" />
              <span className="text-[#8a8f98] font-medium" style={{ fontSize: "0.6875rem" }}>Codex</span>
            </div>
            <p className="m-0 text-[#8a8f98]" style={{ fontSize: "0.75rem" }}>
              Examining issue <span className="font-mono text-[#62666d]" style={{ fontSize: "0.6875rem" }}>ENG-2703</span>
            </p>
          </div>

          <div style={{ height: 20 }} />

          <div className="flex items-center gap-2">
            <InProgressIcon />
            <span className="text-[#62666d]" style={{ fontSize: "0.6875rem" }}>
              <span className="text-[#8a8f98] font-medium">Codex</span> moved from <span className="text-[#8a8f98] font-medium">Todo</span> to <span className="text-[#8a8f98] font-medium">In Progress</span> · just now
            </span>
          </div>

          <div style={{ height: 16 }} />

        </div>

        <IssueProperties />

        </div>

        <div className="absolute" style={{
          top: 280,
          bottom: 8,
          right: 8,
          width: 370,
          background: "#161718",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 10,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          overflow: "hidden",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
        }}>
          <div className="flex items-center justify-between shrink-0" style={{ padding: "10px 14px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2">
              <Image src="/images/avatars/codex.png" width={16} height={16} alt="Codex" className="rounded-full" />
              <span className="text-[#d0d6e0]" style={{ fontSize: "0.8125rem", fontWeight: 510 }}>GitHub Copilot</span>
            </div>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "#62666d", padding: 0, display: "flex" }} tabIndex={-1}>
              <svg width={14} height={14} viewBox="0 0 16 16" fill="currentColor"><path d="M2.97 2.97a.75.75 0 0 1 1.06 0L8 6.94l3.97-3.97a.75.75 0 1 1 1.06 1.06L9.06 8l3.97 3.97a.75.75 0 1 1-1.06 1.06L8 9.06l-3.97 3.97a.75.75 0 0 1-1.06-1.06L6.94 8 2.97 4.03a.75.75 0 0 1 0-1.06Z"/></svg>
            </button>
          </div>
          <div className="flex flex-col overflow-y-auto flex-1" style={{ padding: "12px 14px", gap: 6 }}>
            <span className="text-[#8a8f98]" style={{ fontSize: "0.75rem", lineHeight: 1.6 }}>I&apos;ll start by exploring the repository structure to understand the codebase and then implement the necessary changes to render UI before <code className="font-mono text-[#62666d]" style={{ fontSize: "0.6875rem" }}>vehicle_state</code> sync</span>
            <div style={{ height: 4 }} />
            <span className="text-[#d0d6e0]" style={{ fontSize: "0.75rem", fontWeight: 510 }}>Bash: <span className="text-[#8a8f98] font-normal">Check current directory and list repository contents</span></span>
            <span className="text-[#8a8f98]" style={{ fontSize: "0.75rem" }}>View <span className="font-mono text-[#62666d]" style={{ fontSize: "0.6875rem" }}>/home/runner/kinetic/kinetic-ios</span></span>
            <span className="text-[#8a8f98]" style={{ fontSize: "0.75rem" }}>Worked for 2min</span>
            <span className="text-[#d0d6e0]" style={{ fontSize: "0.75rem" }}>Copilot has completed the issue!</span>
            <span className="text-[#8a8f98]" style={{ fontSize: "0.75rem" }}>See the pull request at:</span>
            <span className="text-[#5e6ad2]" style={{ fontSize: "0.75rem", cursor: "pointer" }}>https://github.com/KineticCorp/kinetic/pull/3279</span>
            <div style={{ height: 4 }} />
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "8px 10px", background: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center gap-2 mb-1">
                <svg width={12} height={12} viewBox="0 0 16 16" fill="#62666d"><path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"/></svg>
                <span className="text-[#62666d]" style={{ fontSize: "0.6875rem" }}>Draft</span>
                <span className="text-[#8a8f98]" style={{ fontSize: "0.6875rem" }}>Render UI before vehicle state sync (ENG-2703)</span>
              </div>
              <span className="font-mono text-[#3d4147]" style={{ fontSize: "0.625rem" }}>master ← copilot/ENG-2703-render-sync-9214</span>
            </div>
          </div>
          <div className="shrink-0" style={{ padding: "8px 10px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "6px 10px", background: "rgba(255,255,255,0.02)" }}>
              <span className="text-[#3d4147]" style={{ fontSize: "0.75rem" }}>Message GitHub Copilot...</span>
              <div className="flex items-center gap-2">
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#3d4147", padding: 0, display: "flex" }} tabIndex={-1}>
                  <svg width={14} height={14} viewBox="0 0 16 16" fill="currentColor"><path d="M12.643 7.69 8.93 11.404C7.482 12.852 5.343 13.01 4.167 11.833c-1.18-1.179-1.022-3.311.426-4.759l3.41-3.41c.933-.932 2.295-1.032 3.031-.268.735.735.633 2.101-.296 3.031L7.324 9.81c-.422.421-1.002.464-1.3.166-.298-.298-.255-.88.175-1.31L9.29 5.576a.75.75 0 1 0-1.06-1.06L5.199 7.668c-.952.951-1.06 2.423-.176 3.308.887.886 2.357.777 3.3-.161l3.414-3.413c1.452-1.452 1.62-3.648.297-4.971C10.71 1.107 8.458 1.273 7.002 2.729L3.592 6.139C1.622 8.108 1.4 11.13 3.167 12.897c1.765 1.765 4.793 1.54 6.763-.43l3.713-3.714a.75.75 0 0 0-1.06-1.06Z"/></svg>
                </button>
                <button style={{ background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", color: "#8a8f98", padding: 3, display: "flex", borderRadius: 4 }} tabIndex={-1}>
                  <svg width={12} height={12} viewBox="0 0 16 16" fill="currentColor"><path d="M11.48 5.674a.75.75 0 1 1-.96 1.152L8.75 5.351v6.899a.75.75 0 0 1-1.5 0V5.351L5.48 6.826a.75.75 0 0 1-.96-1.152l3-2.5a.75.75 0 0 1 .96 0l3 2.5Z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IssueProperties() {
  return (
    <aside style={{ width: 240, flexShrink: 0, borderLeft: "1px solid rgba(255,255,255,0.06)", overflowY: "auto" }}>

      <div className="flex flex-col" style={{ padding: "16px 14px", gap: 8 }}>

        <div className="flex items-center gap-2" style={{ height: 24 }}>
          <InProgressIcon />
          <span className="text-[#d0d6e0]" style={{ fontSize: "0.6875rem" }}>In Progress</span>
        </div>

        <div className="flex items-center gap-2" style={{ height: 24 }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="#9c9da1" style={{ opacity: 0.5 }}><rect x="1.5" y="8" width="3" height="6" rx="1"/><rect x="6.5" y="5" width="3" height="9" rx="1"/><rect x="11.5" y="2" width="3" height="12" rx="1"/></svg>
          <span className="text-[#d0d6e0]" style={{ fontSize: "0.6875rem" }}>High</span>
        </div>

        <div className="flex flex-col" style={{ position: "relative", gap: 12 }}>
          <div className="flex items-center gap-2" style={{ height: 24 }}>
            <Image src="/images/avatars/jori.png" width={16} height={16} alt="jori" className="rounded-full" />
            <span className="text-[#d0d6e0]" style={{ fontSize: "0.6875rem" }}>jori</span>
          </div>
          <svg style={{ position: "absolute", left: 7, top: 20 }} width={9} height={21} fill="none" viewBox="0 0 9 21">
            <path stroke="#2E2E32" strokeLinecap="round" d="M.5.5v9.37a8 8 0 0 0 2.732 6.02L8.5 20.5"/>
          </svg>
          <div className="flex items-center gap-2" style={{ height: 24, marginLeft: 20 }}>
            <Image src="/images/avatars/codex.png" width={16} height={16} alt="Codex" className="rounded-full" />
            <span className="text-[#d0d6e0]" style={{ fontSize: "0.6875rem" }}>Codex</span>
          </div>
        </div>

        <div style={{ height: 20 }} />

        <span className="text-[#3d4147]" style={{ fontSize: 11 }}>Labels</span>
        <div className="flex flex-wrap gap-1" style={{ marginLeft: -4 }}>
          <button className="flex items-center gap-1" style={{ background: "rgba(255,255,255,0.04)", border: "none", cursor: "pointer", padding: "3px 8px 3px 6px", borderRadius: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4bae8a", flexShrink: 0 }} />
            <span className="text-[#8a8f98]" style={{ fontSize: "0.6875rem" }}>Performance</span>
          </button>
          <button className="flex items-center gap-1" style={{ background: "rgba(255,255,255,0.04)", border: "none", cursor: "pointer", padding: "3px 8px 3px 6px", borderRadius: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F2C94C", flexShrink: 0 }} />
            <span className="text-[#8a8f98]" style={{ fontSize: "0.6875rem" }}>iOS</span>
          </button>
        </div>

        <div style={{ height: 8 }} />

        <span className="text-[#3d4147]" style={{ fontSize: 11 }}>Cycle</span>
        <div className="flex items-center gap-2" style={{ height: 24 }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="#8a8f98"><path d="M8 1C8.41421 1 8.75 1.33579 8.75 1.75C8.75 2.16421 8.41421 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 6.23619 12.6701 4.66687 11.377 3.65918C11.0503 3.40457 10.9925 2.93313 11.2471 2.60645C11.5017 2.27972 11.9731 2.22098 12.2998 2.47559C13.9418 3.75527 15 5.75433 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1Z"/><path d="M6.85547 6.1123C7.07646 5.97571 7.35255 5.96305 7.58496 6.0791L10.085 7.3291C10.3769 7.52151 10.5 7.75131 10.5 8C10.5 8.24869 10.3769 8.47849 10.1758 8.61719L7.58496 9.9209C7.35255 10.0369 7.07646 10.0243 6.85547 9.8877C6.63458 9.75099 6.5 9.50981 6.5 9.25V6.75C6.5 6.43131 6.66226 6.23188 6.85547 6.1123Z"/></svg>
          <span className="text-[#d0d6e0]" style={{ fontSize: "0.6875rem" }}>Cycle 144</span>
        </div>

        <div style={{ height: 8 }} />

        <span className="text-[#3d4147]" style={{ fontSize: 11 }}>Project</span>
        <div className="flex items-center gap-2" style={{ height: 24 }}>
          <svg width={16} height={16} viewBox="0 0 16 16" fill="#02B8CC"><path fillRule="evenodd" clipRule="evenodd" d="M8 1.5a.75.75 0 0 1 .648.372l5.5 9.5A.75.75 0 0 1 13.5 12.5h-11a.75.75 0 0 1-.648-1.128l5.5-9.5A.75.75 0 0 1 8 1.5Z"/></svg>
          <span className="text-[#8a8f98]" style={{ fontSize: "0.6875rem" }}>Core Performance</span>
        </div>

      </div>
    </aside>
  );
}

function AppSidebar() {
  return (
    <nav style={{ padding: "8px 8px 14px 14px", width: "100%", height: "100%", position: "relative", overflowY: "auto" }}>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button style={{ paddingInline: 4, height: 28, display: "flex", alignItems: "center", gap: 6, borderRadius: 4, background: "transparent", border: "none", cursor: "pointer" }}>
          <span style={{ height: 20, width: 20, borderRadius: 2, background: "#121414", display: "grid", placeItems: "center", flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 100 100" fill="#E2E4E6">
              <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/>
            </svg>
          </span>
          <span style={{ fontSize: "0.875rem", fontWeight: 590, color: "#d0d6e0" }}>Linear</span>
          <span style={{ color: "rgba(255,255,255,0.2)" }}><ChevronIcon /></span>
        </button>
        <div style={{ display: "flex", gap: 6 }}>
          <button style={{ height: 28, width: 28, borderRadius: 6, display: "grid", placeItems: "center", background: "transparent", border: "none", color: "#62666d", cursor: "pointer" }}>
            <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7 2C9.76142 2 12 4.23858 12 7C12 8.11012 11.6375 9.13519 11.0254 9.96484L13.7803 12.7197L13.832 12.7764C14.0723 13.0709 14.0549 13.5057 13.7803 13.7803C13.5057 14.0549 13.0709 14.0723 12.7764 13.832L12.7197 13.7803L9.96484 11.0254C9.13519 11.6375 8.11012 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5Z"/></svg>
          </button>
          <button style={{ height: 28, width: 28, borderRadius: 6, display: "grid", placeItems: "center", background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.08)", color: "#d0d6e0", cursor: "pointer" }}>
            <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M7.25 1C7.66414 1 7.99988 1.33589 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H4.75C3.50745 2.5 2.50012 3.50744 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V8.75C13.5001 8.33589 13.8359 8 14.25 8C14.6641 8 14.9999 8.33589 15 8.75V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75C1.00012 2.67905 2.67899 1 4.75 1H7.25Z"/><path fillRule="evenodd" clipRule="evenodd" d="M13.4326 1.26953C13.7913 0.910937 14.3728 0.910883 14.7314 1.26953C15.0897 1.6282 15.0899 2.20981 14.7314 2.56836L9.2373 8.06152C8.68101 8.6177 7.94043 8.95161 7.15527 9C7.06754 9.0052 6.99468 8.93248 7 8.84473C7.04847 8.05961 7.38232 7.31897 7.93848 6.7627L13.4326 1.26953Z"/></svg>
          </button>
        </div>
      </div>

      <div style={{ height: 12 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 2, opacity: 0.8 }}>
        {([
          { icon: <InboxIcon />, label: "Inbox" },
          { icon: <MyIssuesIcon />, label: "My issues" },
          { icon: <ReviewsIcon />, label: "Reviews" },
          { icon: <PulseIcon />, label: "Pulse" },
        ] as const).map((item) => (
          <button key={item.label} style={{ paddingInline: 6, height: 28, display: "flex", alignItems: "center", gap: 8, borderRadius: 6, fontSize: "0.8125rem", color: "#8a8f98", fontWeight: 510, width: "100%", background: "transparent", border: "none", cursor: "pointer" }}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div style={{ height: 12 }} />

      <button style={{ color: "rgba(255,255,255,0.3)", gap: 0, paddingLeft: 4, height: 28, display: "flex", alignItems: "center", fontSize: "0.8125rem", fontWeight: 510, width: "100%", background: "transparent", border: "none", cursor: "pointer" }}>
        Workspace <CollapseArrow />
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {([
          { label: "Initiatives", icon: <svg width={14} height={14} viewBox="0 0 16 16" fill="#9c9da1"><path fillRule="evenodd" clipRule="evenodd" d="M7.4145 8.3381C7.68162 7.8873 8.31838 7.8873 8.5855 8.3381L11.896 13.925C12.2589 14.5374 11.6035 15.2506 10.9879 14.9132L8.10753 13.3343C8.04032 13.2975 7.95967 13.2975 7.89247 13.3343L5.0121 14.9132C4.39652 15.2506 3.74112 14.5374 4.10401 13.925L7.4145 8.3381Z"/><path fillRule="evenodd" clipRule="evenodd" d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 8.96927 2.75037 9.87822 3.18945 10.668L3.38867 10.999L3.42773 11.0654C3.60231 11.4033 3.4953 11.825 3.16992 12.0371C2.84468 12.249 2.41642 12.1766 2.17773 11.8809L2.13281 11.8184L2.00195 11.6104C1.36597 10.5558 1 9.31963 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 9.40749 14.5834 10.7198 13.8672 11.8184L13.8223 11.8809C13.5836 12.1766 13.1553 12.249 12.8301 12.0371C12.4831 11.8109 12.3851 11.346 12.6113 10.999L12.8105 10.668C13.2496 9.87822 13.5 8.96927 13.5 8Z"/></svg> },
          { label: "Projects", icon: <svg width={14} height={14} viewBox="0 0 16 16" fill="#9c9da1"><path d="m11.927 13.232-1.354.78c-.937.54-1.406.811-1.904.917a3.22 3.22 0 0 1-1.338 0c-.498-.106-.967-.376-1.904-.917l-1.354-.78c-.937-.541-1.406-.811-1.747-1.19a3.212 3.212 0 0 1-.669-1.157C1.5 10.401 1.5 9.861 1.5 8.78V7.22c0-1.082 0-1.622.157-2.106.14-.429.368-.823.67-1.157.34-.379.809-.649 1.746-1.19l1.354-.78c.937-.54 1.406-.811 1.904-.917a3.22 3.22 0 0 1 1.338 0c.498.106.967.376 1.904.917l1.354.78c.937.541 1.406.811 1.747 1.19.301.334.53.728.669 1.157.157.484.157 1.024.157 2.106v1.56c0 1.082 0 1.622-.157 2.106-.14.429-.368.823-.67 1.157-.34.379-.809.649-1.746 1.19Z"/></svg> },
          { label: "More", icon: <svg width={14} height={14} viewBox="0 0 16 16" fill="#9c9da1"><path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg> },
        ] as const).map((item) => (
          <button key={item.label} style={{ paddingInline: 6, height: 28, display: "flex", alignItems: "center", gap: 8, borderRadius: 6, fontSize: "0.8125rem", color: "#8a8f98", fontWeight: 510, width: "100%", background: "transparent", border: "none", cursor: "pointer" }}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div style={{ height: 12 }} />

      <button style={{ color: "rgba(255,255,255,0.3)", gap: 0, paddingLeft: 4, height: 28, display: "flex", alignItems: "center", fontSize: "0.8125rem", fontWeight: 510, width: "100%", background: "transparent", border: "none", cursor: "pointer" }}>
        Favorites <CollapseArrow />
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <button style={{ paddingInline: 6, height: 28, display: "flex", alignItems: "center", gap: 8, borderRadius: 6, fontSize: "0.8125rem", color: "#d0d6e0", fontWeight: 510, width: "100%", background: "rgba(255,255,255,0.04)", border: "none", cursor: "pointer" }}>
          <InProgressIcon />
          <span>Faster app launch</span>
        </button>
        {(["Agent tasks", "UI Refresh", "Agents Insights"] as const).map((label) => (
          <button key={label} style={{ paddingInline: 6, height: 28, display: "flex", alignItems: "center", gap: 8, borderRadius: 6, fontSize: "0.8125rem", color: "#8a8f98", fontWeight: 510, width: "100%", background: "transparent", border: "none", cursor: "pointer" }}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
