import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { heroStats } from "@/lib/content";

/** Kennzahlen-Band direkt unter dem Hero. */
export function StatsBand() {
  return (
    <section className="relative z-10 border-y border-surface-border bg-surface/30">
      <div className="container-x py-6">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-2 sm:divide-x sm:divide-surface-border">
            {heroStats.map((s) => (
              <div key={s.label} className="flex items-center gap-3 sm:justify-center sm:px-2">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/20">
                  <Icon name={s.icon as never} size={18} />
                </span>
                <div>
                  <dt className="text-lg font-semibold leading-tight text-ink">{s.value}</dt>
                  <dd className="text-xs text-ink-muted">{s.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
