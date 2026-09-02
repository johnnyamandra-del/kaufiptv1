import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { devices, howItWorks, setupSection } from "@/lib/content";

export function SetupSection() {
  return (
    <Section
      id="installation"
      eyebrow={setupSection.eyebrow}
      title={
        <>
          In wenigen <span className="text-gradient">Minuten</span> startklar
        </>
      }
      intro={setupSection.sub}
    >
      <ol className="mb-10 grid gap-4 md:grid-cols-3">
        {howItWorks.map((s, i) => (
          <Reveal key={s.step} delay={i * 80} as="li">
            <div className="card relative h-full overflow-hidden">
              <span className="pointer-events-none absolute -right-3 -top-5 text-[5.5rem] font-bold leading-none text-white/[0.04]">
                {i + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                {s.step}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {devices.map((d, i) => (
          <Reveal key={d.name} delay={i * 45}>
            <article className="group flex items-center gap-4 rounded-2xl border border-surface-border bg-surface p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-raised text-brand-cyan ring-1 ring-inset ring-white/5 transition-colors group-hover:bg-brand/12">
                <Icon name={d.icon as never} size={24} />
              </span>
              <span className="text-sm font-medium text-ink">{d.name}</span>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 text-center">
          <Link href="/geraete" className="link-arrow">
            Alle Anleitungen ansehen
            <Icon name="arrow" size={15} />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
