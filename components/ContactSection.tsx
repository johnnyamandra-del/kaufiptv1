import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { contactChannels, socialLinks } from "@/lib/content";

export function ContactSection() {
  return (
    <Section
      id="kontakt"
      eyebrow="Kontakt"
      title={
        <>
          Noch Fragen? <span className="text-gradient">Schreib uns</span>
        </>
      }
      intro="Unser Chat-Support ist rund um die Uhr erreichbar – meist antworten wir innerhalb weniger Minuten."
    >
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {contactChannels.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <a
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="card group flex h-full flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/20">
                  <Icon name={c.icon as never} size={24} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{c.desc}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan">
                {c.value}
                <Icon name="arrow" size={15} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 flex items-center justify-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-surface-border bg-surface-raised/60 text-ink-muted transition-colors hover:border-brand/50 hover:text-ink"
            >
              <Icon name={s.icon as never} size={18} />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
