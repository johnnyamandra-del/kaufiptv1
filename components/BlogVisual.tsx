import type { ReactNode } from "react";
import type { BlogVisualType } from "@/lib/blog";

const W = "#E9EEFF"; // helle Linien
const B = "#3B9EFF"; // Markenblau
const C = "#38BDF8"; // Cyan-Akzent

/** Thema-spezifische Vektor-Illustrationen (viewBox 0 0 96 96, fill="none"). */
const ART: Record<BlogVisualType, ReactNode> = {
  "home-cinema": (
    <>
      <path d="M12 20 4 14M12 40 4 46" stroke={C} strokeWidth={2.5} opacity={0.7} />
      <rect x="14" y="14" width="60" height="38" rx="3" stroke={W} />
      <path d="M40 30l11 6-11 6z" fill={B} />
      <path d="M38 52v6M50 52v6M32 60h24" stroke={W} />
      <path d="M18 78c0-5 3-8 8-8h36c5 0 8 3 8 8v6H18z" stroke={C} />
      <path d="M26 70v-4M62 70v-4" stroke={C} />
    </>
  ),
  "screen-size": (
    <>
      <rect x="20" y="12" width="52" height="34" rx="3" stroke={W} />
      <path d="M30 40 62 18" stroke={B} />
      <path d="M30 40v-8M30 40h8" stroke={B} strokeWidth={2.5} />
      <path d="M62 18v8M62 18h-8" stroke={B} strokeWidth={2.5} />
      <path d="M40 46v6M52 46v6M34 52h24" stroke={W} />
      <path d="M16 72h64" stroke={C} />
      <path d="M16 66v12M48 68v8M80 66v12" stroke={C} />
      <path d="M22 72l6-4M22 72l6 4M74 72l-6-4M74 72l-6 4" stroke={C} strokeWidth={2.5} />
    </>
  ),
  hdmi: (
    <>
      <path d="M24 26h48v8l-6 12H30l-6-12z" stroke={W} />
      <rect x="32" y="30" width="32" height="7" rx="1.5" fill={B} />
      <path d="M48 46v8c0 8-10 8-10 18" stroke={W} strokeWidth={4} />
      <rect x="57" y="62" width="19" height="14" rx="2" stroke={C} strokeWidth={2.5} />
      <circle cx="66.5" cy="69" r="2.6" fill={C} />
      <path d="M57 69h-7" stroke={C} strokeWidth={2.5} />
    </>
  ),
  network: (
    <>
      <path d="M30 30a26 26 0 0 1 36 0" stroke={B} />
      <path d="M24 23a36 36 0 0 1 48 0" stroke={C} opacity={0.8} />
      <path d="M18 16a46 46 0 0 1 60 0" stroke={C} opacity={0.45} />
      <path d="M36 52V38M60 52V44" stroke={W} />
      <circle cx="36" cy="35" r="3" fill={W} />
      <circle cx="60" cy="41" r="3" fill={W} />
      <rect x="24" y="52" width="48" height="22" rx="3" stroke={W} />
      <circle cx="33" cy="63" r="2.4" fill={B} />
      <circle cx="42" cy="63" r="2.4" fill={C} />
      <path d="M60 58v10" stroke={B} strokeWidth={2.5} />
    </>
  ),
  display: (
    <>
      <rect x="16" y="14" width="64" height="42" rx="3" stroke={W} />
      <path
        d="M28 24h40M28 33h40M28 42h40M40 20v40M52 20v40M64 20v40"
        stroke={B}
        strokeWidth={1.4}
        opacity={0.55}
      />
      <rect x="41" y="34" width="7" height="7" fill={C} />
      <rect x="53" y="25" width="7" height="7" fill={B} />
      <path d="M40 56v6M56 56v6M34 62h28" stroke={W} />
      <path d="M82 12l6-6M78 16l4-4M82 20l8-4" stroke={C} strokeWidth={2.5} />
    </>
  ),
  audio: (
    <>
      <path
        d="M18 30v-6M26 30v-12M34 30v-4M42 30v-16M50 30v-8M58 30v-14M66 30v-5M74 30v-11"
        stroke={C}
      />
      <rect x="14" y="40" width="68" height="18" rx="5" stroke={W} />
      <circle cx="26" cy="49" r="2.2" fill={B} />
      <circle cx="34" cy="49" r="2.2" fill={B} />
      <circle cx="62" cy="49" r="2.2" fill={B} />
      <circle cx="70" cy="49" r="2.2" fill={B} />
      <circle cx="48" cy="49" r="7" stroke={C} strokeWidth={2.5} />
      <path d="M40 68h16M44 76h8" stroke={W} />
    </>
  ),
  calibration: (
    <>
      <rect x="18" y="12" width="60" height="40" rx="3" stroke={W} />
      <circle cx="48" cy="32" r="11" stroke={B} />
      <path d="M48 21a11 11 0 0 1 0 22z" fill={B} />
      <path d="M40 52v6M56 52v6M34 58h28" stroke={W} />
      <path d="M26 68h44M26 78h44" stroke={C} />
      <circle cx="44" cy="68" r="4.5" fill={C} />
      <circle cx="58" cy="78" r="4.5" fill={C} />
    </>
  ),
  "family-night": (
    <>
      <rect x="14" y="12" width="60" height="36" rx="3" stroke={W} />
      <path d="M38 25l12 7-12 7z" fill={B} />
      <path d="M28 58l4 24h14l4-24z" stroke={C} />
      <path d="M26 58h24" stroke={C} />
      <path d="M36 58l1 24M44 58l-1 24" stroke={C} strokeWidth={1.6} />
      <circle cx="32" cy="53" r="3.4" fill={W} />
      <circle cx="39" cy="50" r="3.4" fill={W} />
      <circle cx="45" cy="53" r="3.4" fill={W} />
      <path d="M56 74c0-5 3-8 7-8h18c4 0 7 3 7 8v8H56z" stroke={W} />
      <circle cx="66" cy="62" r="3.6" fill={C} />
      <circle cx="80" cy="62" r="3.6" fill={C} />
    </>
  ),
  energy: (
    <>
      <rect x="20" y="12" width="56" height="36" rx="3" stroke={W} />
      <path d="M50 18l-9 14h7l-4 12 13-17h-8z" fill={B} />
      <path d="M40 48v6M54 48v6M34 54h28" stroke={W} />
      <path d="M42 66v-6M54 66v-6" stroke={C} />
      <path d="M38 66h20v4a10 10 0 0 1-20 0z" stroke={C} />
      <path d="M48 80v8" stroke={C} />
      <path d="M66 82c9 0 13-4 13-13-9 0-13 4-13 13z" stroke={C} strokeWidth={2.5} />
    </>
  ),
  "eye-comfort": (
    <>
      <rect x="16" y="12" width="64" height="42" rx="7" fill={B} opacity={0.22} />
      <rect x="22" y="16" width="52" height="34" rx="3" stroke={W} />
      <path d="M30 33h36" stroke={C} strokeWidth={2.5} opacity={0.8} />
      <path d="M28 72c7-9 33-9 40 0-7 9-33 9-40 0z" stroke={W} />
      <circle cx="48" cy="72" r="5" fill={C} />
      <path d="M78 20a9 9 0 1 1-9-11 7 7 0 0 0 9 11z" fill={C} />
    </>
  ),
};

type Props = {
  type: BlogVisualType;
  category?: string;
  variant?: "card" | "banner";
  className?: string;
};

/**
 * Einheitliches, thema-spezifisches Vorschaubild für Blog-Artikel.
 * Gleiche Navy-Blau-Optik, zentrale Vektor-Illustration, dezenter Glow.
 */
export function BlogVisual({ type, category, variant = "card", className = "" }: Props) {
  const ratio = variant === "banner" ? "aspect-[16/7] sm:aspect-[16/5]" : "aspect-[16/9]";
  const iconH =
    variant === "banner" ? "h-[64%] max-h-[150px]" : "h-[46%] max-h-[124px]";

  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0c1c40] via-[#0d1a3b] to-[#0a1530] ${ratio} ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(60%_60%_at_50%_45%,rgba(59,158,255,0.22),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-noise opacity-40 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]"
      />
      <svg
        viewBox="0 0 96 96"
        role="img"
        aria-label={category ? `Illustration: ${category}` : "Illustration zum Artikel"}
        fill="none"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`relative w-auto ${iconH} drop-shadow-[0_6px_22px_rgba(56,189,248,0.28)]`}
      >
        {ART[type]}
      </svg>
      {category && (
        <span className="absolute left-4 top-4 rounded-full bg-bg/70 px-2.5 py-1 text-[11px] font-medium text-brand-cyan backdrop-blur">
          {category}
        </span>
      )}
    </div>
  );
}
