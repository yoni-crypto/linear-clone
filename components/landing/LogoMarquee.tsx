"use client";

const LOGOS = [
  { src: "/logos/vercel.svg",  alt: "Vercel",   width: 67.5, height: 14 },
  { src: "/logos/cursor.svg",  alt: "Cursor",   width: 75.75, height: 18 },
  { src: "/logos/ramp.svg",    alt: "Ramp",     width: 52.5, height: 13 },
  { src: "/logos/openai.svg",  alt: "OpenAI",   width: 61.5, height: 13 },
  { src: "/logos/loom.svg",    alt: "Loom",     width: 75.75, height: 14 },
  { src: "/logos/cashapp.svg", alt: "Cash App", width: 85.5, height: 19 },
  { src: "/logos/brex.svg",    alt: "Brex",     width: 72.75, height: 16 },
  { src: "/logos/mercury.svg", alt: "Mercury",  width: 64.5, height: 17 },
];

export default function LogoMarquee() {
  return (
    <a
      href="/customers"
      style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}
    >
      <div style={{ paddingBlock: '52px', maxWidth: 1150, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 80 }}>
        {LOGOS.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            style={{ display: 'block', opacity: 0.7 }}
          />
        ))}
      </div>
    </a>
  );
}

/*
INLINE SVG FALLBACK — uncomment logos array and swap component body if needed

const logos = [
  <svg key="1" width="67.5" height="14" viewBox="32 16 116 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" overflow="visible">...</svg>,
  <svg key="2" width="75.75" height="18" viewBox="27 13 126 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" overflow="visible">...</svg>,
  <svg key="3" width="52.5" height="13" viewBox="46 15 88 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" overflow="visible">...</svg>,
  <svg key="4" width="61.5" height="13" viewBox="38 14 104 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" overflow="visible">...</svg>,
  <svg key="5" width="75.75" height="14" viewBox="34 19 112 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" overflow="visible">...</svg>,
  <svg key="6" width="85.5" height="19" viewBox="27 14 127 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" overflow="visible">...</svg>,
  <svg key="7" width="72.75" height="16" viewBox="25 14 120 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg" overflow="visible">...</svg>,
  <svg key="8" width="64.5" height="17" viewBox="38 14 105 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" overflow="visible">...</svg>,
];
*/
