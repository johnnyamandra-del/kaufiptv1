"use client";

import { useCallback, useRef, useState } from "react";
import { Icon } from "./Icon";
import { DOWNLOADER_CODE } from "@/lib/downloader";

/**
 * Große, prominente Karte mit dem IPTVKauf Downloader-Code und einem
 * „Code kopieren“-Button. Client-Komponente wegen Clipboard-Zugriff.
 */
export function DownloaderCodeCard() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const legacyCopy = () => {
    try {
      const ta = document.createElement("textarea");
      ta.value = DOWNLOADER_CODE;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "0";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  };

  const copyCode = useCallback(async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(DOWNLOADER_CODE);
      } else {
        legacyCopy();
      }
    } catch {
      legacyCopy();
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  }, []);

  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-brand/30 bg-surface p-6 text-center shadow-lift sm:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-[0.08]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-24 -top-28 h-64 bg-hero-glow"
      />

      <div className="relative">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand/12 text-brand-cyan ring-1 ring-inset ring-brand/20">
          <Icon name="bolt" size={26} />
        </span>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan sm:text-sm">
          IPTVKauf Downloader Code
        </p>

        <p className="mt-4 whitespace-nowrap font-mono text-[2.75rem] font-extrabold leading-none tracking-[0.08em] text-ink sm:text-[5.25rem] sm:tracking-[0.12em]">
          {DOWNLOADER_CODE}
        </p>

        <button
          type="button"
          onClick={copyCode}
          aria-label="Downloader-Code kopieren"
          className="btn-primary mt-7 w-full px-8 py-4 text-base sm:w-auto"
        >
          <Icon name={copied ? "check" : "grid"} size={18} />
          Code kopieren
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`mt-3 min-h-[1.25rem] text-sm font-semibold text-brand-cyan transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          Code kopiert!
        </p>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
          Öffne die Downloader-App und gib diesen Code ein, um die
          IPTVKauf-Installation zu starten.
        </p>
      </div>
    </div>
  );
}
