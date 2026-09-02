import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { CustomerJourney } from "@/components/CustomerJourney";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Funktionen",
  description:
    "Alle Funktionen von IPTVKauf: 15.000+ Live-Kanäle, 40.000+ Filme & Serien, EPG TV-Guide, Anti-Freeze-Streaming, 4K & HD sowie Multi-Device-Nutzung.",
  path: "/funktionen",
  keywords: ["IPTV Funktionen", "IPTV EPG", "IPTV 4K", "IPTV VOD"],
});

export default function FunktionenPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Startseite", path: "/" },
          { name: "Funktionen", path: "/funktionen" },
        ])}
      />
      <PageHero
        eyebrow="Funktionen"
        title={
          <>
            Was IPTVKauf <span className="text-gradient">kann</span>
          </>
        }
        intro="Der Funktionsumfang basiert auf dem aktuellen Angebot und ist in allen Laufzeiten gleich. Kanal- und VOD-Zahlen sind Circa-Angaben."
      />
      <Features />
      <Benefits />
      <CustomerJourney />
      <CTA />
    </>
  );
}
