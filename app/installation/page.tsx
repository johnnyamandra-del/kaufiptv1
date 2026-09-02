import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { DownloaderCodeCard } from "@/components/DownloaderCodeCard";
import { InstallIllustration } from "@/components/InstallIllustration";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/content";
import { DOWNLOADER_CODE } from "@/lib/downloader";

export const metadata: Metadata = pageMeta({
  title: "IPTVKauf installieren",
  description:
    "IPTVKauf schnell und einfach auf Fernseher oder Streaming-Gerät installieren: Downloader-App einrichten, vorbereiten und IPTVKauf mit dem Downloader-Code laden. Für Fire TV Stick, Fire TV, Android TV, Google TV und Android TV Box.",
  path: "/installation",
  keywords: [
    "IPTV Installation",
    "IPTVKauf installieren",
    "Downloader Code",
    "IPTV Fire TV Stick",
    "IPTV Android TV",
    "IPTV Anleitung",
  ],
});

type Step = {
  no: string;
  title: string;
  icon: IconName;
  text: string;
  note?: string;
};

const STEPS: Step[] = [
  {
    no: "01",
    title: "Downloader installieren",
    icon: "search",
    text: "Suche im App Store deines Fire TV oder Android TV Geräts nach der App Downloader und installiere sie.",
  },
  {
    no: "02",
    title: "Downloader vorbereiten",
    icon: "gear",
    text: "Je nach Gerät musst du in den Einstellungen zuerst die Installation von Apps aus unbekannten Quellen erlauben, damit Downloader die IPTVKauf-App einrichten darf.",
    note: "Die genaue Bezeichnung dieser Option unterscheidet sich je nach Hersteller, Modell und Software-Version – suche nach einem Menü wie „Entwickleroptionen“ oder „Apps aus unbekannten Quellen“.",
  },
  {
    no: "03",
    title: "IPTVKauf installieren",
    icon: "rocket",
    text: `Öffne Downloader und gib den IPTVKauf Code ${DOWNLOADER_CODE} ein. Starte anschließend den Download und installiere die App.`,
  },
];

const DEVICES: { name: string; icon: IconName }[] = [
  { name: "Amazon Fire TV Stick", icon: "stick" },
  { name: "Fire TV", icon: "tv" },
  { name: "Android TV", icon: "tv" },
  { name: "Google TV", icon: "tv" },
  { name: "Android TV Box", icon: "box" },
];

export default function InstallationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Startseite", path: "/" },
          { name: "IPTVKauf installieren", path: "/installation" },
        ])}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-noise opacity-50 [mask-image:radial-gradient(65%_55%_at_50%_0%,black,transparent)]"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-5">IPTVKauf Installation</p>
            <h1 className="text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem]">
              IPTVKauf <span className="text-gradient">installieren</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
              Installiere IPTVKauf schnell und einfach auf deinem Fernseher oder
              Streaming-Gerät.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#downloader-code"
                className="btn-primary w-full px-7 py-4 text-base sm:w-auto"
              >
                Zum Downloader-Code
                <Icon name="arrow" size={18} />
              </a>
              <a
                href="#schritte"
                className="btn-secondary w-full px-7 py-4 text-base sm:w-auto"
              >
                Schritte ansehen
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <InstallIllustration />
          </Reveal>
        </div>
      </section>

      {/* ── DOWNLOADER CODE ──────────────────────────────────── */}
      <section id="downloader-code" className="section pt-6">
        <div className="container-x">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="eyebrow mb-4">Downloader Code</p>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              Dein Schlüssel zur <span className="text-gradient">Installation</span>
            </h2>
          </Reveal>
          <Reveal>
            <DownloaderCodeCard />
          </Reveal>
        </div>
      </section>

      {/* ── 3 SCHRITTE ───────────────────────────────────────── */}
      <section id="schritte" className="section pt-6">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow mb-4">In 3 Schritten</p>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              So installierst du IPTVKauf
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              Folge diesen drei Schritten – die Einrichtung dauert meist nur
              wenige Minuten.
            </p>
          </Reveal>

          <ol className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-3">
            {STEPS.map((step, i) => {
              const parts = step.text.split(DOWNLOADER_CODE);
              return (
                <Reveal key={step.no} delay={i * 80} as="li">
                  <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-surface-border bg-surface p-7 sm:p-8">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-2 -top-4 text-[6rem] font-extrabold leading-none text-white/[0.04] sm:text-[7rem]"
                    >
                      {step.no}
                    </span>

                    <div className="relative flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/20">
                        <Icon name={step.icon} size={24} />
                      </span>
                      <span className="text-2xl font-extrabold text-gradient">
                        {step.no}
                      </span>
                    </div>

                    <h3 className="relative mt-5 text-xl font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {parts.length > 1 ? (
                        <>
                          {parts[0]}
                          <span className="font-mono font-semibold tracking-wide text-brand-cyan">
                            {DOWNLOADER_CODE}
                          </span>
                          {parts[1]}
                        </>
                      ) : (
                        step.text
                      )}
                    </p>

                    {step.note && (
                      <p className="relative mt-4 rounded-xl border border-dashed border-surface-border bg-surface-raised/50 p-3.5 text-xs leading-relaxed text-ink-faint">
                        <span className="font-semibold text-ink-muted">
                          Hinweis:{" "}
                        </span>
                        {step.note}
                      </p>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── KOMPATIBLE GERÄTE ────────────────────────────────── */}
      <Section
        eyebrow="Geräte"
        title={
          <>
            Kompatible <span className="text-gradient">Geräte</span>
          </>
        }
        intro="IPTVKauf lässt sich per Downloader-App auf diesen Geräten einrichten."
      >
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {DEVICES.map((d, i) => (
            <Reveal key={d.name} delay={i * 55}>
              <article className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-surface-border bg-surface p-5 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40 sm:p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-raised text-brand-cyan ring-1 ring-inset ring-white/5 transition-colors group-hover:bg-brand/12">
                  <Icon name={d.icon} size={24} />
                </span>
                <span className="text-sm font-medium text-ink sm:text-base">
                  {d.name}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── HILFE / SUPPORT ──────────────────────────────────── */}
      <Section
        id="hilfe"
        eyebrow="Support"
        title={
          <>
            Du brauchst <span className="text-gradient">Hilfe</span> bei der
            Installation?
          </>
        }
        intro="Unser Support hilft dir gerne bei der Einrichtung von IPTVKauf."
      >
        <Reveal>
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:max-w-xl sm:flex-row sm:justify-center">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full px-7 py-4 text-base sm:w-auto"
            >
              <Icon name="whatsapp" size={20} />
              WhatsApp Support
            </a>
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full px-7 py-4 text-base sm:w-auto"
            >
              <Icon name="telegram" size={20} />
              Telegram Support
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="section pt-0">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand/30 p-8 text-center sm:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-[0.14]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-20 -top-24 h-64 bg-hero-glow"
              />
              <div className="relative">
                <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
                  Bereit für IPTVKauf?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted sm:text-lg">
                  Jetzt IPTV-Paket auswählen
                </p>
                <div className="mt-8">
                  <Link
                    href="/pakete"
                    className="btn-primary px-8 py-4 text-base"
                  >
                    Pakete ansehen
                    <Icon name="arrow" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
