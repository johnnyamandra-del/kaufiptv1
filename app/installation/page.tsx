import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { DownloaderCodeCard } from "@/components/DownloaderCodeCard";
import { pageMeta, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/content";
import { DOWNLOADER_CODE } from "@/lib/downloader";

export const metadata: Metadata = pageMeta({
  title: "IPTVKauf installieren",
  description:
    "IPTVKauf in drei Schritten installieren: Downloader-App einrichten, vorbereiten und IPTVKauf mit dem Downloader-Code laden. Für Fire TV Stick, Fire TV, Android TV und Google TV.",
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

type Accent = "downloader" | "brand";

type Step = {
  no: string;
  title: string;
  icon: IconName;
  /** Statt Icon-Glyphe das offizielle Downloader-App-Logo im Badge zeigen. */
  logo?: boolean;
  accent: Accent;
  items: string[];
};

const STEPS: Step[] = [
  {
    no: "01",
    title: "Downloader installieren",
    icon: "search",
    logo: true,
    accent: "downloader",
    items: [
      "Öffne den App Store bzw. Amazon Appstore auf deinem Gerät.",
      "Suche nach der App „Downloader“.",
      "Installiere die Downloader-App.",
      "Öffne anschließend Downloader.",
    ],
  },
  {
    no: "02",
    title: "Downloader vorbereiten",
    icon: "gear",
    accent: "brand",
    items: [
      "Öffne die Einstellungen deines Geräts.",
      "Öffne den Bereich „Entwickleroptionen“ bzw. „Geräteoptionen“.",
      "Erlaube die Installation von Apps aus unbekannten Quellen, falls dies erforderlich ist.",
      "Die Menü-Bezeichnungen können je nach Gerät und Software-Version abweichen.",
    ],
  },
  {
    no: "03",
    title: "IPTVKauf installieren",
    icon: "rocket",
    accent: "downloader",
    items: [
      `Öffne Downloader und gib den IPTVKauf Code ${DOWNLOADER_CODE} ein.`,
      "Bestätige mit „Los“ / „Go“.",
      "Warte, bis der Download abgeschlossen ist, und installiere die IPTVKauf-App.",
      "Öffne IPTVKauf nach der Installation.",
    ],
  },
];

const ACCENT: Record<
  Accent,
  { border: string; glow: string; iconWrap: string; eyebrow: string; bullet: string }
> = {
  downloader: {
    border: "border-downloader/30",
    glow: "bg-downloader/20",
    iconWrap: "bg-downloader/12 text-downloader ring-downloader/25",
    eyebrow: "text-downloader",
    bullet: "bg-downloader/15 text-downloader ring-downloader/25",
  },
  brand: {
    border: "border-brand/30",
    glow: "bg-brand/20",
    iconWrap: "bg-brand/12 text-brand-cyan ring-brand/25",
    eyebrow: "text-brand-cyan",
    bullet: "bg-brand/15 text-brand-cyan ring-brand/25",
  },
};

export default function InstallationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Startseite", path: "/" },
          { name: "IPTVKauf installieren", path: "/installation" },
        ])}
      />

      <div className="bg-bg">
        <div className="container-x">
          <div className="mx-auto max-w-[860px] pb-24 pt-32 sm:pb-32 sm:pt-40">
            {/* 1–3 · HERO ─────────────────────────────────────── */}
            <Reveal className="text-center">
              <p className="eyebrow">IPTVKauf Installation</p>
              <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                IPTVKauf <span className="text-gradient">installieren</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                Installiere IPTVKauf schnell und einfach auf deinem Gerät. Folge
                den drei Schritten und richte deine App in wenigen Minuten ein.
              </p>
            </Reveal>

            {/* 4 · DOWNLOADER CODE CARD ───────────────────────── */}
            <Reveal className="mt-14 block sm:mt-16">
              <DownloaderCodeCard />
            </Reveal>

            {/* 5–7 · SCHRITT-KARTEN ───────────────────────────── */}
            <div className="mt-14 space-y-6 sm:mt-20 sm:space-y-7">
              {STEPS.map((step, i) => {
                const a = ACCENT[step.accent];
                return (
                  <Reveal key={step.no} delay={i * 70} className="block">
                    <article
                      className={`relative overflow-hidden rounded-3xl border bg-surface p-6 sm:p-8 ${a.border}`}
                    >
                      <div
                        aria-hidden
                        className={`pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full opacity-40 blur-3xl ${a.glow}`}
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute right-4 top-2 text-[4.5rem] font-extrabold leading-none text-white/[0.04] sm:text-[6rem]"
                      >
                        {step.no}
                      </span>

                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <span
                            className={`grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl ring-1 ring-inset ${a.iconWrap}`}
                          >
                            {step.logo ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src="/downloader-logo.svg"
                                alt=""
                                width={48}
                                height={48}
                                className="h-full w-full"
                              />
                            ) : (
                              <Icon name={step.icon} size={24} />
                            )}
                          </span>
                          <div>
                            <p
                              className={`text-xs font-semibold uppercase tracking-[0.18em] ${a.eyebrow}`}
                            >
                              Schritt {step.no}
                            </p>
                            <h2 className="mt-1 text-xl font-semibold text-ink sm:text-2xl">
                              {step.title}
                            </h2>
                          </div>
                        </div>

                        <ol className="mt-6 space-y-3">
                          {step.items.map((item, n) => {
                            const parts = item.split(DOWNLOADER_CODE);
                            return (
                              <li
                                key={n}
                                className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]"
                              >
                                <span
                                  className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ring-1 ring-inset ${a.bullet}`}
                                >
                                  {n + 1}
                                </span>
                                <span>
                                  {parts.length > 1 ? (
                                    <>
                                      {parts[0]}
                                      <span className="font-mono font-semibold tracking-wide text-downloader">
                                        {DOWNLOADER_CODE}
                                      </span>
                                      {parts[1]}
                                    </>
                                  ) : (
                                    item
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* 8 · HINWEIS-KARTE (gleiche Karten-Sprache wie die Schritte) ── */}
            <Reveal className="mt-6 block sm:mt-7">
              <article className="relative overflow-hidden rounded-3xl border border-brand/30 bg-surface p-6 sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-brand/20 opacity-40 blur-3xl"
                />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/25">
                      <Icon name="shield" size={24} />
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                        Hinweis
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                    Nach der Installation trägst du die Zugangsdaten ein, die du
                    von IPTVKauf über deine Bestellung oder unseren Support
                    erhalten hast. Ohne gültige Zugangsdaten kann die App keine
                    Inhalte laden.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 9 · SUPPORT-KARTE ──────────────────────────────── */}
            <Reveal className="mt-14 block sm:mt-20">
              <div className="relative overflow-hidden rounded-3xl border border-surface-border bg-surface p-8 text-center sm:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-24 -top-28 h-56 bg-hero-glow opacity-60"
                />
                <div className="relative">
                  <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                    Brauchst du Hilfe bei der Installation?
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted sm:text-base">
                    Unser IPTVKauf Support hilft dir gerne bei der Einrichtung.
                  </p>
                  <div className="mx-auto mt-7 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full px-8 py-3.5 text-base sm:w-auto"
                    >
                      <Icon name="whatsapp" size={19} />
                      WhatsApp
                    </a>
                    <a
                      href={site.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-telegram w-full px-8 py-3.5 text-base sm:w-auto"
                    >
                      <Icon name="telegram" size={19} />
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
