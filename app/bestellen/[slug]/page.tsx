import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { packages, getPackage, whatsappPhone } from "@/lib/content";

type Params = { params: { slug: string } };

const WA_DOWNLOAD = "https://www.whatsapp.com/download";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const pkg = getPackage(params.slug);
  const title = pkg
    ? `Bestellung: ${pkg.name} (${pkg.duration})`
    : "Bestellung";
  return {
    title,
    description:
      "Bestätige deine Paketauswahl und schließe die Bestellung bequem per WhatsApp ab.",
    robots: { index: false, follow: true },
    alternates: { canonical: `/bestellen/${params.slug}` },
  };
}

function buildMessage(name: string, duration: string, price: string): string {
  return [
    "Hallo, ich möchte ein IPTV-Abonnement bestellen.",
    "",
    `Gewähltes Paket: ${name} (${duration})`,
    `Preis: ${price} €`,
    "",
    "Bitte senden Sie mir weitere Informationen zur Bestellung.",
  ].join("\n");
}

export default function OrderPage({ params }: Params) {
  const pkg = getPackage(params.slug);
  if (!pkg) notFound();

  const message = buildMessage(pkg.name, pkg.duration, pkg.price);
  const encoded = encodeURIComponent(message);
  const waApp = `https://wa.me/${whatsappPhone}?text=${encoded}`;
  const waWeb = `https://web.whatsapp.com/send?phone=${whatsappPhone}&text=${encoded}`;

  return (
    <section className="section flex min-h-[80vh] items-center pt-28 sm:pt-32">
      <div className="container-x">
        <div className="mx-auto w-full max-w-[600px]">
          <Reveal>
            <Link href="/pakete" className="link-arrow mb-5 inline-flex">
              <Icon name="arrow" size={15} className="rotate-180" />
              Zurück zu den Paketen
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="rounded-3xl border border-surface-border bg-surface p-6 text-center shadow-lift sm:p-10">
              {/* Kopf */}
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] ring-1 ring-white/15">
                <Icon name="whatsapp" size={32} className="h-8 w-8" />
              </div>
              <p className="mt-4 text-lg font-semibold text-ink">IPTVKauf</p>
              <p className="mt-1 text-sm text-ink-muted">
                Bestellung per WhatsApp bestätigen
              </p>

              {/* Zusammenfassung */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="rounded-full border border-surface-border bg-surface-raised/70 px-3 py-1 text-xs font-medium text-ink">
                  Paket: {pkg.name} · {pkg.duration}
                </span>
                <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-cyan">
                  Preis: {pkg.price} €
                </span>
              </div>

              {/* Nachrichten-Vorschau (WhatsApp-inspiriert, IPTVKauf-Stil) */}
              <div className="mt-5 rounded-2xl border border-[#25D366]/25 bg-[#0c2a20]/50 p-5 text-left">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-[#4fdc8a]">
                  Deine Nachricht
                </p>
                <p className="whitespace-pre-line text-sm leading-relaxed text-ink">
                  {message}
                </p>
              </div>

              {/* Buttons */}
              <a
                href={waApp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Icon name="whatsapp" size={20} className="h-5 w-5" />
                WhatsApp öffnen
              </a>
              <a
                href={waWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-3 w-full py-3.5"
              >
                Weiter zu WhatsApp Web
              </a>

              {/* Hinweis Download */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-ink-muted">
                <Icon name="whatsapp" size={14} className="text-[#4fdc8a]" />
                <span>Kein WhatsApp installiert?</span>
                <a
                  href={WA_DOWNLOAD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-cyan hover:underline"
                >
                  Jetzt herunterladen
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-md text-center text-xs text-ink-faint">
              Kein Zahlungsformular, keine Kontodaten nötig. Du schließt die
              Bestellung direkt im Chat mit unserem Team ab.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
