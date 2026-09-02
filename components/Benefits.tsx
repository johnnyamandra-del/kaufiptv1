import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <Section
      id="vorteile"
      eyebrow="Deine Vorteile"
      title="Alles, was den Einstieg leicht macht"
      intro="Kein Kabel, kein Techniktermin. IPTVKauf ist auf einen unkomplizierten Start ausgelegt."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 70}>
            <article className="card group h-full transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/20">
                <Icon name={b.icon as never} size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{b.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
