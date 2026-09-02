import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import { devices, appSection, faqs } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Unterstützte Geräte & Installation",
  description:
    "IPTVKauf läuft auf Samsung & LG Smart TV, Fire TV Stick, Android TV, Android-Box, Smartphone, Tablet, Windows-PC und Mac. So richtest du IPTV Schritt für Schritt ein.",
  path: "/geraete",
  keywords: [
    "IPTV Smart TV",
    "IPTV Fire TV",
    "IPTV Samsung",
    "IPTV LG",
    "IPTV Android TV",
    "IPTV Installation",
  ],
});

const DEVICE_FAQ = [
  "Welche Geräte werden unterstützt?",
  "Welche App benötige ich?",
  "Wie richte ich IPTV ein?",
  "Kann ich IPTV auf mehreren Geräten nutzen?",
];

export default function GeraetePage() {
  const deviceFaqs = faqs.filter((f) => DEVICE_FAQ.includes(f.q));

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Startseite", path: "/" },
          { name: "Geräte", path: "/geraete" },
        ])}
      />

      <PageHero
        eyebrow="Geräte"
        title={
          <>
            Kompatibel mit deinem{" "}
            <span className="text-gradient">Bildschirm</span>
          </>
        }
        intro="Diese Geräte werden laut aktuellem Angebot unterstützt. Bist du unsicher, ob dein Modell passt? Frag uns kurz vor der Bestellung."
      />

      <section className="section pt-8">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {devices.map((d, i) => (
              <Reveal key={d.name} delay={i * 45}>
                <article className="flex items-center gap-4 rounded-2xl border border-surface-border bg-surface p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-raised text-brand-cyan ring-1 ring-inset ring-white/5">
                    <Icon name={d.icon as never} size={24} />
                  </span>
                  <span className="text-sm font-medium text-ink">{d.name}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="installation" className="section pt-4">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-surface-border bg-surface p-7 sm:p-10">
            <Reveal>
              <p className="eyebrow mb-4">Installation</p>
              <h2 className="text-3xl leading-tight sm:text-4xl">
                IPTV in wenigen Schritten einrichten
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
                {appSection.intro}
              </p>
            </Reveal>

            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {appSection.steps.map((step, i) => (
                <Reveal key={step} delay={i * 80} as="li">
                  <div className="card h-full">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="mt-4 text-sm text-ink">{step}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal>
              <p className="mt-6 rounded-xl border border-dashed border-surface-border bg-surface-raised/50 p-4 text-xs text-ink-faint">
                {appSection.playerNote}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ
        items={deviceFaqs}
        eyebrow="Geräte & Einrichtung"
        title="Fragen zu Geräten"
        intro="Kurz und knapp – mehr Antworten findest du im vollständigen FAQ."
      />

      <CTA
        headline="Dein Gerät ist dabei?"
        sub="Dann wähle jetzt deine Laufzeit. Die Einrichtung dauert meist nur wenige Minuten."
      />
    </>
  );
}
