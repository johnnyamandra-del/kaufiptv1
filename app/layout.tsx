import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, organizationLd, websiteLd } from "@/lib/seo";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "IPTVKauf – IPTV kaufen für Smart TV, Fire TV & Android",
    template: "%s | IPTVKauf",
  },
  description:
    "IPTV kaufen bei IPTVKauf: Live-TV, Filme & Serien über das Internet – für Smart TV, Fire TV, Android TV, Smartphone & PC. Flexible Laufzeiten, schnelle Einrichtung, deutschsprachiger Support.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: site.url },
  keywords: [
    "IPTV kaufen",
    "IPTV Deutschland",
    "IPTV Anbieter",
    "IPTV Paket",
    "IPTV Smart TV",
    "IPTV Fire TV",
    "IPTV Samsung",
    "IPTV LG",
    "IPTV Android TV",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "IPTVKauf – IPTV kaufen für Smart TV, Fire TV & Android",
    description:
      "Live-TV, Filme & Serien über das Internet – für Smart TV, Fire TV, Android TV, Smartphone & PC. Flexible Laufzeiten, schnelle Einrichtung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTVKauf – IPTV kaufen für Smart TV, Fire TV & Android",
    description:
      "Live-TV, Filme & Serien über das Internet – für Smart TV, Fire TV, Android TV, Smartphone & PC.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#05070A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
