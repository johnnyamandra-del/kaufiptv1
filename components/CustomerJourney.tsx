import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { journey } from "@/lib/content";

export function CustomerJourney() {
  return (
    <Section
      eyebrow="Kundenerlebnis"
      title={journey.heading}
      intro="Ein klarer Weg – ohne Wartezeit beim Techniker, ohne Papierkram."
    >
      <ol className="relative mx-auto max-w-3xl">
        <span
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-cyan/60 via-surface-border to-transparent sm:left-1/2"
        />
        {journey.steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} as="li">
            <div
              className={`relative flex items-start gap-5 pb-8 sm:w-1/2 ${
                i % 2 === 0
                  ? "sm:ml-0 sm:pr-10 sm:text-right sm:flex-row-reverse"
                  : "sm:ml-auto sm:pl-10"
              }`}
            >
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-surface-border bg-surface text-brand-cyan">
                <Icon name="check" size={16} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {i + 1}. {s.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
