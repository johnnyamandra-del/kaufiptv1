import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

type Props = {
  title: string;
  updated?: string;
  children: ReactNode;
};

/**
 * Rahmen für rechtliche Seiten. Der Inhalt ist ein Gerüst mit klar
 * markierten PLATZHALTERN – bitte durch anwaltlich geprüfte Texte ersetzen.
 */
export function LegalPage({ title, updated = "Platzhalter – Datum ergänzen", children }: Props) {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={title} />
      <section className="section pt-10">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/[0.06] p-4 text-sm text-amber-200/90">
              <strong>Hinweis für den Betreiber:</strong> Dieser Text ist ein
              unverbindliches Gerüst und <strong>keine Rechtsberatung</strong>.
              Bitte alle mit <code>PLATZHALTER</code> markierten Stellen ausfüllen
              und den vollständigen Text vor Veröffentlichung juristisch prüfen
              lassen.
            </div>
            <p className="mb-8 text-xs text-ink-faint">Stand: {updated}</p>
            <div className="space-y-6 text-sm leading-relaxed text-ink-muted [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-ink [&_a]:text-brand-cyan [&_a:hover]:underline [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
