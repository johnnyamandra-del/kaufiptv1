import Link from "next/link";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { HeroImage } from "./HeroImage";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-bg lg:h-[820px]">
      {/* Full-Bleed-Foto: EIN durchgehendes Hintergrundbild über den ganzen Hero */}
      <HeroImage
        src={hero.image}
        alt={hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-[68%_32%] sm:object-[60%_35%] lg:object-[50%_40%]"
      />

      {/* Weicher Dunkel-Verlauf für Lesbarkeit:
          links am kräftigsten, zur Mitte/rechts transparent – ohne harte Kante */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/25
                   sm:from-bg/92 sm:via-bg/50 sm:to-transparent lg:via-bg/40"
      />
      {/* sehr dezenter vertikaler Kontrast, damit Badge/Buttons sitzen */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-bg/45 via-transparent to-bg/20"
      />

      {/* Text – ca. 8 % vom linken Rand, vertikal zentriert, direkt auf dem Foto */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full px-6 sm:px-10 lg:pl-[8%] lg:pr-10">
          <div className="max-w-[560px]">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan backdrop-blur-sm sm:text-xs">
                {hero.badge}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 text-[2.3rem] font-extrabold leading-[1.06] tracking-tight drop-shadow-[0_2px_24px_rgba(5,7,10,0.6)] sm:text-5xl lg:text-[3.5rem]">
                <span className="block">{hero.h1.l1}</span>
                <span className="block">{hero.h1.l2}</span>
                <span className="mt-1 block text-brand">{hero.h1.l3}</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted drop-shadow-[0_1px_12px_rgba(5,7,10,0.7)] sm:text-lg">
                {hero.sub}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={hero.ctaPrimary.href}
                  className="btn-primary w-full px-7 py-3.5 text-base sm:w-auto"
                >
                  {hero.ctaPrimary.label}
                  <Icon name="arrow" size={18} />
                </Link>
                <Link
                  href={hero.ctaSecondary.href}
                  className="btn-secondary w-full bg-surface-raised/50 px-7 py-3.5 text-base backdrop-blur-sm sm:w-auto"
                >
                  {hero.ctaSecondary.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-ink drop-shadow-[0_1px_10px_rgba(5,7,10,0.8)]">
                {hero.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/20 text-brand-cyan">
                      <Icon name="check" size={13} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
