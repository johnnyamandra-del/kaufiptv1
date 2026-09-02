import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, productLd, breadcrumbLd } from "@/lib/seo";
import { packages, packageFeatures, guarantee, paymentMethods, faqs } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "IPTV Pakete & Preise",
  description:
    "Alle IPTV-Pakete von IPTVKauf im Überblick: Laufzeiten von 1 Monat bis 12 Monate, transparente Preise, 15.000+ Live-Kanäle und 40.000+ VOD-Titel. Jetzt Paket auswählen.",
  path: "/pakete",
  keywords: ["IPTV Paket", "IPTV Preise", "IPTV kaufen", "IPTV Abo Deutschland"],
});

const PRICE_FAQ_QUESTIONS = [
  "Welche Zahlungsmethoden gibt es?",
  "Gibt es eine Geld-zurück-Garantie?",
  "Wie schnell erhalte ich meine Zugangsdaten?",
  "Kann ich IPTV auf mehreren Geräten nutzen?",
  "Welche Internetgeschwindigkeit brauche ich?",
];

const priceFaqs = faqs.filter((f) => PRICE_FAQ_QUESTIONS.includes(f.q));

export default function PaketePage() {
  return (
    <>
      <JsonLd
        data={[
          productLd(),
          breadcrumbLd([
            { name: "Startseite", path: "/" },
            { name: "IPTV Pakete", path: "/pakete" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="IPTV Pakete"
        title={
          <>
            Wähle deine <span className="text-gradient">Laufzeit</span>
          </>
        }
        intro="Der Leistungsumfang ist bei allen Paketen identisch. Du entscheidest nur, wie lange du dabei bist – längere Laufzeiten senken den Monatspreis deutlich."
      />

      <section className="section pt-8">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 70} className="h-full">
                <PricingCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 grid gap-4 rounded-2xl border border-surface-border bg-surface p-6 sm:grid-cols-3 sm:p-8">
              <InfoRow icon="check" title="Enthalten in jedem Paket">
                {packageFeatures.slice(0, 4).join(" · ")}
              </InfoRow>
              <InfoRow icon="shield" title="Sicherheit">
                {guarantee}. Bestellung ohne Abo-Zwang und ohne automatische
                Verlängerung.
              </InfoRow>
              <InfoRow icon="bolt" title="Zahlung & Aktivierung">
                {paymentMethods.join(", ")}. Zugangsdaten meist innerhalb weniger
                Minuten per WhatsApp oder Telegram.
              </InfoRow>
            </div>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-faint">
              Preisangaben inklusive ggf. anfallender Steuern. Kanal- und
              VOD-Zahlen sind Circa-Angaben und können sich ändern. Für die
              Nutzung ist eine stabile Internetverbindung erforderlich
              (Empfehlung: ab 10&nbsp;Mbit/s für HD, ab 20&nbsp;Mbit/s für 4K).
            </p>
          </Reveal>
        </div>
      </section>

      <FAQ
        items={priceFaqs}
        eyebrow="Rund um die Bestellung"
        title="Fragen zu Paketen & Zahlung"
        intro="Die wichtigsten Punkte vor dem Kauf – ausführlicher in unserem FAQ."
      />

      <CTA />
    </>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: "check" | "shield" | "bolt";
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Icon name={icon} size={16} className="text-brand-cyan" />
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{children}</p>
    </div>
  );
}
