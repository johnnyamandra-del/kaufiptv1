import { ImageResponse } from "next/og";

export const alt = "IPTVKauf – IPTV für Smart TV, Fire TV & Android";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#06070A",
          backgroundImage:
            "linear-gradient(135deg, #0C2033 0%, #06070A 55%, #06070A 100%)",
          color: "#F5F7FA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundImage: "linear-gradient(120deg,#22D3EE,#3B9EFF,#1E6BD6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
            }}
          >
            ▶
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>IPTVKauf</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Dein Entertainment. Einfach. Flexibel. Modern.
          </div>
          <div style={{ fontSize: 30, color: "#9BA6B4", maxWidth: 860 }}>
            Live-TV, Filme &amp; Serien über das Internet – für Smart TV, Fire TV,
            Android TV, Smartphone &amp; PC.
          </div>
        </div>

        <div
          style={{ display: "flex", gap: 40, fontSize: 24, color: "#9BA6B4" }}
        >
          <span>15.000+ Live-Kanäle</span>
          <span>40.000+ VOD</span>
          <span>4K &amp; HD</span>
          <span>iptvkauf.com</span>
        </div>
      </div>
    ),
    size,
  );
}
