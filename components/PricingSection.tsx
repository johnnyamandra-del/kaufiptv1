import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { PricingCard } from "./PricingCard";
import { packages, guarantee, paymentMethods, pricingFinePrint } from "@/lib/content";

export function PricingSection() {
  return (
    <Section
      id="preise"
      eyebrow="Preise"
      title={
        <>
          Ein Preis, <span className="text-gradient">keine Überraschungen</span>
        </>
      }
      intro="Alle Pakete enthalten denselben Leistungsumfang – du wählst nur die Laufzeit. Je länger die Laufzeit, desto günstiger der Monatspreis."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((pkg, i) => (
          <Reveal key={pkg.id} delay={i * 70} className="h-full">
            <PricingCard pkg={pkg} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-muted">
          <span className="flex items-center gap-2">
            <Icon name="shield" size={16} className="text-brand-cyan" />
            {guarantee}
          </span>
          <span className="flex items-center gap-2">
            <Icon name="bolt" size={16} className="text-brand-cyan" />
            Aktivierung meist in wenigen Minuten
          </span>
          <span className="flex items-center gap-2">
            <Icon name="check" size={16} className="text-brand-cyan" />
            Zahlung: {paymentMethods.join(" · ")}
          </span>
        </div>
      </Reveal>

      <Reveal>
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-ink-faint">
          {pricingFinePrint}
        </p>
      </Reveal>
    </Section>
  );
}
