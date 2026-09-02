import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, faqLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "FAQ – Häufige Fragen zu IPTV",
  description:
    "Antworten zu IPTVKauf: Was ist IPTV, welche Geräte werden unterstützt, wie schnell kommen die Zugangsdaten, welche Zahlungsmethoden gibt es und wie funktioniert der Support?",
  path: "/faq",
  keywords: ["IPTV FAQ", "Was ist IPTV", "IPTV einrichten", "IPTV Fragen"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqLd(),
          breadcrumbLd([
            { name: "Startseite", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Häufig gestellte <span className="text-gradient">Fragen</span>
          </>
        }
        intro="Alles Wichtige zu IPTV, Einrichtung, Geräten, Zahlung und Support an einem Ort."
      />
      <FAQ eyebrow="Übersicht" title="Alle Antworten" intro="Tippe auf eine Frage, um die Antwort zu öffnen." />
      <CTA />
    </>
  );
}
