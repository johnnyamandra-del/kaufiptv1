import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-6 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-noise opacity-50 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]"
      />
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-4xl leading-[1.1] sm:text-5xl">{title}</h1>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {intro}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
