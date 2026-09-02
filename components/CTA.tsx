import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { guarantee } from "@/lib/content";

type Props = {
  headline?: string;
  sub?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTA({
  headline = "Bereit für dein Streaming-Erlebnis?",
  sub = "Wähle deine Laufzeit, schließe die Bestellung ab und erhalte deine Zugangsdaten meist innerhalb weniger Minuten.",
  primaryLabel = "Jetzt IPTV auswählen",
  primaryHref = "/pakete",
}: Props) {
  return (
    <section className="section">
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
                {headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted sm:text-lg">
                {sub}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={primaryHref} className="btn-primary px-8 py-4 text-base">
                  {primaryLabel}
                  <Icon name="arrow" size={18} />
                </Link>
                <Link href="/kontakt" className="btn-secondary px-8 py-4 text-base">
                  Frage stellen
                </Link>
              </div>
              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-ink-faint">
                <Icon name="shield" size={14} className="text-brand-cyan" />
                {guarantee} · kein Abo-Zwang
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
