import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { streamingFeatures } from "@/lib/content";

export function StreamingFeatures() {
  return (
    <Section
      id="vorteile"
      eyebrow="Deine Vorteile"
      title={
        <>
          Alles für perfektes <span className="text-gradient">Streaming</span>
        </>
      }
      intro="Kein Kleingedrucktes, keine Kompromisse – nur die wichtigsten Punkte, damit Streaming einfach funktioniert."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {streamingFeatures.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 70}>
            <article className="card group h-full transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/20">
                <Icon name={f.icon as never} size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
