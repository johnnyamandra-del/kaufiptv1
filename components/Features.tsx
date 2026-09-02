import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { features } from "@/lib/content";

export function Features() {
  return (
    <Section
      id="funktionen"
      eyebrow="Funktionen"
      title="Was in jedem Paket steckt"
      intro="Der Leistungsumfang ist bei allen Laufzeiten identisch – die Angaben basieren auf dem aktuellen Angebot."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 70}>
            <article className="card h-full transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/20">
                  <Icon name={f.icon as never} size={20} />
                </span>
                <h3 className="text-base font-semibold text-ink">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {f.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
