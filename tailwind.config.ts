import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#05070A",
          soft: "#080B12",
        },
        surface: {
          DEFAULT: "#0E1A3D",
          raised: "#152449",
          border: "rgba(122,151,255,0.14)",
        },
        ink: {
          DEFAULT: "#F4F7FF",
          muted: "#A9B6D4",
          faint: "#6B7BA3",
        },
        brand: {
          DEFAULT: "#3B82F6",
          cyan: "#38BDF8",
          deep: "#1D4ED8",
        },
        // Downloader / Installation – professionelles Orange (nicht grell)
        downloader: {
          DEFAULT: "#F97316",
          deep: "#C2410C",
          soft: "#FDBA74",
        },
        // WhatsApp – Markengrün
        whatsapp: {
          DEFAULT: "#25D366",
          deep: "#1BA94E",
        },
        // Telegram – Markenblau
        telegram: {
          DEFAULT: "#229ED9",
          deep: "#1B82B4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,0.28), 0 24px 60px -20px rgba(56,189,248,0.30)",
        card: "0 14px 44px -20px rgba(3,7,26,0.85)",
        lift: "0 28px 70px -26px rgba(3,7,26,0.9)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #38BDF8 0%, #3B82F6 48%, #1D4ED8 100%)",
        "hero-glow":
          "radial-gradient(58% 55% at 78% 18%, rgba(56,189,248,0.24) 0%, rgba(59,130,246,0.14) 34%, rgba(7,12,28,0) 70%)",
        "downloader-glow":
          "radial-gradient(58% 55% at 50% 12%, rgba(249,115,22,0.22) 0%, rgba(234,88,12,0.12) 34%, rgba(7,12,28,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-pan": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.03)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "pulse-ring": "pulse-ring 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
