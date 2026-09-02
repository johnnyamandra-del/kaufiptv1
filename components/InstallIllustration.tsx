/**
 * Dekorative Installations-/Geräte-Illustration für den Hero der
 * Installationsseite. Reines Inline-SVG in IPTVKauf-Farben, kein Client-JS.
 */
export function InstallIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
      />
      <svg
        viewBox="0 0 420 320"
        role="img"
        aria-label="Fernseher mit Streaming-App"
        className="mx-auto w-full max-w-md drop-shadow-[0_30px_60px_-25px_rgba(56,189,248,0.45)]"
      >
        <defs>
          <linearGradient id="ii-screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38BDF8" stopOpacity="0.28" />
            <stop offset="0.5" stopColor="#3B82F6" stopOpacity="0.16" />
            <stop offset="1" stopColor="#1D4ED8" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="ii-play" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>

        {/* Signal-Bögen */}
        <g
          fill="none"
          stroke="#38BDF8"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        >
          <path d="M330 70a46 46 0 0 1 42 42" />
          <path d="M330 44a72 72 0 0 1 68 68" />
        </g>

        {/* TV-Rahmen */}
        <rect
          x="46"
          y="40"
          width="300"
          height="188"
          rx="18"
          fill="#0E1A3D"
          stroke="rgba(122,151,255,0.28)"
          strokeWidth="2"
        />
        {/* Bildschirm */}
        <rect x="62" y="56" width="268" height="156" rx="10" fill="url(#ii-screen)" />

        {/* Play-Button */}
        <circle cx="196" cy="134" r="34" fill="url(#ii-play)" />
        <path d="M188 118l24 16-24 16z" fill="#F4F7FF" />

        {/* App-Kacheln unten im Screen */}
        <g fill="#38BDF8" opacity="0.5">
          <rect x="80" y="188" width="34" height="10" rx="5" />
          <rect x="122" y="188" width="52" height="10" rx="5" opacity="0.7" />
          <rect x="182" y="188" width="24" height="10" rx="5" opacity="0.55" />
        </g>

        {/* Standfuß */}
        <rect x="180" y="228" width="32" height="26" rx="4" fill="#152449" />
        <rect
          x="140"
          y="252"
          width="112"
          height="12"
          rx="6"
          fill="#152449"
          stroke="rgba(122,151,255,0.22)"
          strokeWidth="1.5"
        />

        {/* Schwebende Code-Karte */}
        <g transform="translate(250 176)">
          <rect
            x="0"
            y="0"
            width="150"
            height="86"
            rx="14"
            fill="#152449"
            stroke="rgba(122,151,255,0.35)"
            strokeWidth="2"
          />
          <rect x="16" y="16" width="70" height="8" rx="4" fill="#38BDF8" opacity="0.7" />
          <text
            x="16"
            y="58"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="26"
            fontWeight="700"
            fill="#F4F7FF"
            letterSpacing="2"
          >
            6768998
          </text>
        </g>
      </svg>
    </div>
  );
}
