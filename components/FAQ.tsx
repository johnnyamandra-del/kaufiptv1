"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { faqs as allFaqs, type Faq } from "@/lib/content";

type Props = {
  items?: Faq[];
  limit?: number;
  moreHref?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  className?: string;
};

export function FAQ({
  items = allFaqs,
  limit,
  moreHref,
  eyebrow = "FAQ",
  title = (
    <>
      Du hast Fragen? Wir haben <span className="text-gradient">Antworten</span>
    </>
  ),
  intro = "Die häufigsten Fragen rund um IPTV, Einrichtung, Geräte, Zahlung und Support.",
  className = "",
}: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const shown = limit ? items.slice(0, limit) : items;

  return (
    <section id="faq" className={`section ${className}`}>
      <div className="container-x">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            {intro}
          </p>
        </Reveal>

        <div className="mx-auto max-w-3xl divide-y divide-surface-border overflow-hidden rounded-2xl border border-surface-border bg-surface">
          {shown.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span className="text-[15px] font-medium text-ink sm:text-base">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-surface-border text-brand-cyan transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-brand/12" : ""
                      }`}
                    >
                      <Icon name={isOpen ? "minus" : "plus"} size={15} />
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6 sm:pb-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {moreHref && (
          <Reveal>
            <div className="mt-8 text-center">
              <Link href={moreHref} className="link-arrow">
                Alle Fragen ansehen
                <Icon name="arrow" size={15} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
