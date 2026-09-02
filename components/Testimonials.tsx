"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { testimonials, rating } from "@/lib/content";

export function Testimonials() {
  const [i, setI] = useState(0);
  const count = testimonials.length;
  const t = testimonials[i];
  const go = (dir: number) => setI((prev) => (prev + dir + count) % count);

  return (
    <section id="kunden" className="section">
      <div className="container-x">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-4">Kundenstimmen</p>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            Das sagen unsere <span className="text-gradient">Kunden</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Echte Erfahrungen aus Deutschland, Österreich und der Schweiz.
          </p>
        </Reveal>

        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-6 flex flex-col items-center gap-2 rounded-2xl border border-surface-border bg-surface p-6 text-center">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-ink">{rating.score}</span>
              <span className="text-sm text-ink-faint">/ {rating.outOf}</span>
            </div>
            <div className="flex text-brand-cyan">
              {Array.from({ length: 5 }).map((_, s) => (
                <Icon key={s} name="star" size={16} />
              ))}
            </div>
            <p className="text-xs text-ink-muted">
              Basierend auf {rating.basis}
            </p>
          </Reveal>

          <Reveal>
            <figure className="rounded-2xl border border-surface-border bg-surface-raised/60 p-7 sm:p-9">
              <Icon name="quote" size={28} className="text-brand" />
              <blockquote className="mt-4 text-lg leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.location}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Vorherige Bewertung"
                    className="grid h-9 w-9 place-items-center rounded-full border border-surface-border text-ink-muted transition-colors hover:border-brand/50 hover:text-ink"
                  >
                    <Icon name="arrow" size={15} className="rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Nächste Bewertung"
                    className="grid h-9 w-9 place-items-center rounded-full border border-surface-border text-ink-muted transition-colors hover:border-brand/50 hover:text-ink"
                  >
                    <Icon name="arrow" size={15} />
                  </button>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-5 flex items-center justify-center gap-2">
            {testimonials.map((_, d) => (
              <button
                key={d}
                type="button"
                onClick={() => setI(d)}
                aria-label={`Bewertung ${d + 1}`}
                aria-current={d === i}
                className={`h-1.5 rounded-full transition-all ${
                  d === i ? "w-6 bg-brand" : "w-2 bg-surface-border"
                }`}
              />
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-ink-faint">
            Platzhalter-Bereich – bitte durch echte, belegbare Bewertungen ersetzen
            (z.&nbsp;B. Trustpilot oder Google) oder entfernen.
          </p>
        </div>
      </div>
    </section>
  );
}
