import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  align = "center",
}: Props) {
  const centered = align === "center";
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <Reveal
            className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
          >
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && (
              <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
