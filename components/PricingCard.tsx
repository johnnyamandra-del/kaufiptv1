import Link from "next/link";
import { Icon } from "./Icon";
import { packageFeatures, type Package } from "@/lib/content";

type Props = { pkg: Package; ctaLabel?: string };

export function PricingCard({ pkg, ctaLabel = "Jetzt bestellen" }: Props) {
  const highlight = pkg.popular;
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-6 pt-8 transition-transform duration-300 hover:-translate-y-1 sm:p-7 sm:pt-9 ${
        highlight
          ? "border-brand/55 bg-gradient-to-b from-surface-raised to-surface shadow-glow"
          : "border-surface-border bg-surface shadow-card hover:border-brand/30"
      }`}
    >
      {highlight && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow">
          Beliebteste Wahl
        </span>
      )}

      <header>
        <p className="text-sm font-medium text-ink-muted">{pkg.name}</p>
        <h3 className="mt-1 text-xl font-semibold text-ink">{pkg.duration}</h3>
      </header>

      <div className="mt-5 flex items-end gap-2">
        <span className="text-4xl font-semibold tracking-tight text-ink">
          {pkg.price}&nbsp;€
        </span>
        <span className="mb-1 text-sm text-ink-faint line-through">
          {pkg.oldPrice}&nbsp;€
        </span>
      </div>
      <p className="mt-1 text-xs text-ink-muted">
        einmalig · rechnerisch ca. {pkg.perMonth}&nbsp;€/Monat
      </p>
      <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/12 px-2.5 py-1 text-xs font-semibold text-brand-cyan">
        <Icon name="bolt" size={13} />
        Du sparst {pkg.save}&nbsp;€
      </p>

      <ul className="mt-6 space-y-2.5 text-sm">
        {packageFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-ink-muted">
            <Icon name="check" size={15} className="mt-0.5 shrink-0 text-brand-cyan" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/bestellen/${pkg.id}`}
        className={`mt-7 w-full ${highlight ? "btn-primary" : "btn-secondary"}`}
      >
        {ctaLabel}
        <Icon name="arrow" size={16} />
      </Link>
    </article>
  );
}
