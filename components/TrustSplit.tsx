import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { trustSplit } from "@/lib/content";

export function TrustSplit() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <p className="eyebrow mb-4">{trustSplit.eyebrow}</p>
              <h2 className="text-3xl leading-tight sm:text-4xl">
                {trustSplit.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {trustSplit.body}
              </p>
              <Link href="/pakete" className="btn-primary mt-8">
                Pakete ansehen
                <Icon name="arrow" size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="space-y-3 rounded-3xl border border-surface-border bg-surface p-6 sm:p-8">
              {trustSplit.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 rounded-2xl bg-surface-raised/50 p-4"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand/15 text-brand-cyan">
                    <Icon name="check" size={15} />
                  </span>
                  <span className="pt-0.5 text-sm text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
