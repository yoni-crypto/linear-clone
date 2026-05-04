import Link from "next/link";


const OpenAILogo = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="var(--color-bg-primary, #08090a)" xmlns="http://www.w3.org/2000/svg">
    <path d="m24.404 23.821 7.684-4.469a1.025 1.025 0 0 1 1.102 0l6.061 3.551c.031-.245.031-.49.031-.704 0-3.03-2.327-5.878-6-5.878-.98 0-1.928.215-2.724.674l-5.848 3.367c-.214.123-.306.306-.306.551v2.908Zm13.653 11.327c2.174-.888 3.552-3.031 3.552-5.358 0-2.02-1.133-4.101-2.817-5.081l-5.847-3.367a.557.557 0 0 0-.612 0l-2.51 1.439 7.683 4.469c.368.214.551.52.551.949v6.95Zm-15.459-6.122v-8.878c0-.428.184-.735.551-.949l6.031-3.49c-1.01-.765-2.204-1.194-3.49-1.194-3.398 0-5.908 2.48-5.908 5.756v6.734c0 .245.092.429.306.551l2.51 1.47Zm5.403 3.122 3.597-2.02v-4.286l-3.597-2.02-3.597 2.02v4.286l3.597 2.02Zm2.312 9.306c3.397 0 5.938-2.48 5.938-5.755v-6.735c0-.245-.092-.429-.306-.55l-2.54-1.47v8.877c0 .43-.184.735-.552.95l-6.03 3.49c1.01.765 2.204 1.193 3.49 1.193Zm-7.256-6.826a.557.557 0 0 0 .613 0l2.51-1.44-7.654-4.438c-.367-.214-.55-.52-.55-.949v-6.98a5.769 5.769 0 0 0-3.582 5.358c0 2.02 1.132 4.102 2.816 5.081l5.847 3.368Zm-.336 5.02c.98 0 1.928-.214 2.724-.673l5.847-3.367c.214-.123.306-.306.306-.551v-2.909l-7.684 4.439a1.025 1.025 0 0 1-1.102 0l-6.03-3.49-.001.006c-.03.243-.06.486-.06.729 0 3.214 2.54 5.816 6 5.816Zm7.592 3.643h-.008a7.672 7.672 0 0 1-5.35-2.204 7.28 7.28 0 0 1-2.418.398c-4.102 0-7.653-3.276-7.653-7.654 0-.642.092-1.285.245-1.928-1.653-1.5-2.572-3.581-2.572-5.724 0-3.276 2.204-6.49 5.633-7.378a7.654 7.654 0 0 1 7.5-6.122c2.082 0 3.98.857 5.357 2.204a7.28 7.28 0 0 1 2.419-.398c4.102 0 7.653 3.275 7.653 7.653 0 .642-.092 1.285-.245 1.928 1.651 1.499 2.57 3.577 2.572 5.717v.015c-.004 3.273-2.207 6.483-5.633 7.37a7.654 7.654 0 0 1-7.493 6.123h-.007Z" />
    <path fillRule="evenodd" d="M43.446 29.783v.015c-.004 3.273-2.207 6.483-5.633 7.37a7.654 7.654 0 0 1-7.493 6.123h-.015a7.672 7.672 0 0 1-5.35-2.204 7.28 7.28 0 0 1-2.418.398c-4.102 0-7.653-3.276-7.653-7.654 0-.642.092-1.285.245-1.928-1.653-1.5-2.572-3.581-2.572-5.724 0-3.276 2.204-6.49 5.633-7.378a7.654 7.654 0 0 1 7.5-6.122c2.082 0 3.98.857 5.357 2.204a7.28 7.28 0 0 1 2.419-.398c4.102 0 7.653 3.275 7.653 7.653 0 .642-.092 1.285-.245 1.928 1.651 1.499 2.57 3.577 2.572 5.717Zm-20.389 4.845L17.21 31.26c-1.684-.98-2.816-3.06-2.816-5.081a5.769 5.769 0 0 1 3.581-5.357v6.98c0 .428.184.734.551.948l7.654 4.439-2.51 1.439a.557.557 0 0 1-.613 0Zm-2.97-7.072 2.511 1.47v-8.878c0-.428.184-.735.551-.949l6.031-3.49c-1.01-.765-2.204-1.194-3.49-1.194-3.398 0-5.908 2.48-5.908 5.756v6.734c0 .245.092.429.306.551Zm4.317-6.643v2.908l7.684-4.469a1.025 1.025 0 0 1 1.102 0l6.061 3.551c.031-.245.031-.49.031-.704 0-3.03-2.327-5.878-6-5.878-.98 0-1.928.215-2.724.674l-5.848 3.367c-.214.123-.306.306-.306.551Zm13.653 14.235v-6.95c0-.428-.183-.734-.55-.948l-7.684-4.47 2.51-1.438a.557.557 0 0 1 .612 0l5.847 3.367c1.684.98 2.817 3.061 2.817 5.082 0 2.326-1.378 4.47-3.552 5.357ZM26.823 40.26c1.01.766 2.204 1.194 3.49 1.194 3.397 0 5.938-2.48 5.938-5.755v-6.735c0-.245-.092-.429-.306-.55l-2.54-1.47v8.877c0 .43-.184.735-.552.95l-6.03 3.49ZM28 32.148l-3.597-2.02v-4.286l3.597-2.02 3.597 2.02v4.286l-3.597 2.02Zm-11.28 1.684c0 3.214 2.54 5.816 6 5.816.98 0 1.928-.214 2.724-.673l5.847-3.367c.214-.123.306-.306.306-.551v-2.909l-7.684 4.439a1.025 1.025 0 0 1-1.102 0l-6.03-3.49-.001.006c-.03.243-.06.486-.06.729Z" clipRule="evenodd" />
  </svg>
);

const RampLogo = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="var(--color-bg-primary, #08090a)" xmlns="http://www.w3.org/2000/svg">
    <path d="M43 40.8774V40.9922L26.6608 40.998V40.8774C29.017 39.5187 30.6433 38.1346 32.1066 36.6884H38.8158L43 40.8774ZM38.9515 19.1483L34.81 15H34.6896C34.6896 15 34.7595 22.731 27.806 29.7621C21.0017 36.6436 13 36.6591 13 36.6591V36.7797L17.2192 41C17.2192 41 25.1044 41.0796 32.0698 34.1029C39.0098 27.1495 38.9515 19.1483 38.9515 19.1483Z" />
  </svg>
);


function AuthorInfo({ name, role, desktop }: { name: string; role: string; desktop?: boolean }) {
  const ml = desktop ? 18 : 16;
  const pl = desktop ? 18 : 16;
  const border = desktop
    ? "1px solid color-mix(in srgb, #08090a 5%, transparent)"
    : "1px solid color-mix(in srgb, #08090a 10%, transparent)";
  return (
    <div style={{ marginLeft: ml, paddingLeft: pl, borderLeft: border, display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: "0.875rem", lineHeight: "calc(21 / 14)", letterSpacing: "-0.013em", color: "#08090a", fontWeight: 510 }}>
        {name}
      </span>
      <span style={{ fontSize: "0.875rem", lineHeight: "calc(21 / 14)", letterSpacing: "-0.013em", color: "#08090a", opacity: 0.6 }}>
        {role}
      </span>
    </div>
  );
}


export default function CustomerQuotes() {
  return (
    <section id="customers" style={{ width: "100%", maxWidth: 1170, margin: "0 auto" }}>

      <div style={{
        display: "flex",
        gap: 8,
        padding: "12px 12px 0",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          inset: -1,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20,
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%), linear-gradient(to right, black 0%, transparent 50%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%), linear-gradient(to right, black 0%, transparent 50%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in, xor",
          pointerEvents: "none",
        }} />

        <Link href="/customers/openai" rel="noopener" style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          borderRadius: 8,
          padding: "24px 32px",
          height: 480,
          flex: "1 1",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(0deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 100%), linear-gradient(180deg, #b2d5ff 0%, #dfd1ff 100%)",
          transition: "filter 0.16s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}>
          <div style={{
            position: "absolute",
            top: "50%",
            right: 0,
            height: "100%",
            aspectRatio: "1",
            transform: "translate(40%, -50%)",
            opacity: 0.2,
            pointerEvents: "none",
          }}>
            <div style={{ height: "100%", width: "100%", transform: "scale(2.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <OpenAILogo size={200} />
            </div>
          </div>

          <p style={{
            margin: 0,
            fontSize: "2rem",
            lineHeight: 1.125,
            letterSpacing: "-0.022em",
            color: "#08090a",
            textWrap: "pretty" as const,
            maxWidth: "20ch",
            textIndent: "-0.4em",
            quotes: `"\u201c" "\u201d" "\u2018" "\u2019"`,
          }}>
            &ldquo;You just have to use it and you will see, you will just feel it.&rdquo;
          </p>

          <div style={{ display: "flex", alignItems: "center", marginTop: "auto" }}>
            <span style={{ display: "flex", margin: -16 }}>
              <OpenAILogo size={64} />
            </span>
            <AuthorInfo name="Gabriel Peal" role="OpenAI" desktop />
          </div>
        </Link>

        <Link href="/customers/ramp" rel="noopener" style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          borderRadius: 8,
          padding: "24px 32px",
          height: 480,
          width: 432,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          background: "#e4f222",
          transition: "filter 0.16s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}>
          <p style={{
            margin: 0,
            fontSize: "2rem",
            lineHeight: 1.125,
            letterSpacing: "-0.022em",
            color: "#08090a",
            textWrap: "pretty" as const,
            maxWidth: "20ch",
            textIndent: "-0.4em",
            quotes: `"\u201c" "\u201d" "\u2018" "\u2019"`,
          }}>
            &ldquo;Our speed is intense and Linear helps us be action biased.&rdquo;
          </p>

          <div style={{ display: "flex", alignItems: "center", marginTop: "auto" }}>
            <span style={{ display: "flex", margin: -16 }}>
              <RampLogo size={64} />
            </span>
            <AuthorInfo name="Nik Koblov" role="Head of Engineering, Ramp" desktop />
          </div>
        </Link>
      </div>

      <div style={{ height: 48 }} />

      <div style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}>
        <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#8a8f98" }}>
          Linear powers over{" "}
          <strong style={{ fontWeight: 510, color: "#d0d6e0" }}>25,000</strong>
          {" "}product teams. From ambitious startups to major enterprises.
        </p>
        <a href="/customers" rel="noopener" style={{ textDecoration: "none", display: "inline-block", flexShrink: 0 }}>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={{ display: "inline-block", fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#8a8f98" }}>
              Customer stories
            </span>
            <span style={{ display: "inline-block", marginLeft: 6, fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.011em", color: "#62666d" }}>
              →
            </span>
          </div>
        </a>
      </div>

    </section>
  );
}
