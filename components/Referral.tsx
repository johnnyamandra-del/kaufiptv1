import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { referral, site } from "@/lib/content";

export function Referral() {
  return (
    <section id="freunde-werben" className="section">
      <div className="container-x">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-surface-border bg-surface p-7 sm:p-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="eyebrow mb-4">{referral.eyebrow}</p>
              <h2 className="text-3xl leading-tight sm:text-4xl">
                Freunde empfehlen &amp; 1 Monat{" "}
                <span className="text-gradient">gratis</span> sichern
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {referral.sub}
              </p>
              <ol className="mt-6 space-y-3">
                {referral.points.map((p, idx) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-[11px] font-bold text-white">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{p}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface-raised/60 p-6">
              <h3 className="text-sm font-semibold text-ink">
                Empfehlungslink teilen
              </h3>
              <p className="mt-1 text-xs text-ink-faint">
                Platzhalter-Formular – an ein Empfehlungssystem anbinden.
              </p>
              <div className="mt-4 space-y-3">
                <label className="block text-sm">
                  <span className="mb-1.5 block text-ink-muted">Dein Name</span>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-ink outline-none focus:border-brand/60"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block text-ink-muted">
                    Name des Freundes (optional)
                  </span>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-ink outline-none focus:border-brand/60"
                  />
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1"
                  >
                    <Icon name="whatsapp" size={15} />
                    Per WhatsApp
                  </a>
                  <a
                    href={site.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1"
                  >
                    <Icon name="telegram" size={15} />
                    Per Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
