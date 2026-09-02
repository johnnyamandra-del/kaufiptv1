import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Kontakt & Support",
  description:
    "Kontaktiere IPTVKauf per WhatsApp oder Telegram. Der Chat-Support ist rund um die Uhr erreichbar und hilft bei Bestellung, Einrichtung und technischen Fragen.",
  path: "/kontakt",
  keywords: ["IPTV Support", "IPTV Kontakt", "IPTVKauf Hilfe"],
});

const channels = [
  {
    icon: "whatsapp" as const,
    name: "WhatsApp",
    desc: "Schnellster Weg für Bestellung, Testzugang und Support.",
    value: site.whatsappNumber,
    href: site.whatsappUrl,
  },
  {
    icon: "telegram" as const,
    name: "Telegram",
    desc: "Schnelle Hilfe und Updates direkt im Telegram-Chat.",
    value: "@FlixProTvService",
    href: site.telegramUrl,
  },
];

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Startseite", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />

      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Wir sind für dich <span className="text-gradient">da</span>
          </>
        }
        intro="Fragen vor dem Kauf, Hilfe bei der Einrichtung oder ein technisches Anliegen? Schreib uns per WhatsApp oder Telegram – unser Chat-Support ist rund um die Uhr erreichbar."
      />

      <section className="section pt-8">
        <div className="container-x">
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
            {channels.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex h-full flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40"
                >
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/20">
                      <Icon name={c.icon} size={24} />
                    </span>
                    <h2 className="mt-5 text-xl font-semibold text-ink">{c.name}</h2>
                    <p className="mt-2 text-sm text-ink-muted">{c.desc}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan">
                    {c.value}
                    <Icon name="arrow" size={15} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-muted">
              Der gesamte Ablauf – von der Frage bis zur Bestellung – läuft direkt
              im Chat. Meist antworten wir innerhalb weniger Minuten.
            </p>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-ink-faint">
              Hinweis: WhatsApp-Kontakt aus dem bestehenden Angebot des Betreibers.
              Bei Bedarf durch dedizierte iptvkauf.com-Kanäle ersetzen.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
