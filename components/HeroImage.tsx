"use client";

import { useState } from "react";

type Props = { src: string; alt: string; className?: string };

/**
 * Hintergrundfoto für den Hero. Plain <img> (kein next/image), damit ein noch
 * fehlendes File keinen Build-Fehler auslöst. Fällt bei Ladefehler unsichtbar
 * aus – dahinter liegt der dunkle Fallback (siehe Hero.tsx).
 */
export function HeroImage({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      decoding="async"
      loading="eager"
      // @ts-expect-error – fetchpriority ist gültiges HTML, in RDOM-Typen noch nicht überall
      fetchpriority="high"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
