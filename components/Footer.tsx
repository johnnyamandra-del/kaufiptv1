import Link from "next/link";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { footerColumns, legalNav, socialLinks, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-surface-border bg-surface/30">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              IPTVKauf bringt Live-TV, Filme und Serien über das Internet auf
              Smart TV, Streaming-Geräte, Smartphone und Computer.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-surface-border bg-surface-raised/60 text-ink-muted transition-colors hover:border-brand/50 hover:text-ink"
                >
                  <Icon name={s.icon as never} size={16} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col.items.map((item) => {
                  const external = item.href.startsWith("http") || item.href.startsWith("mailto:");
                  return (
                    <li key={item.label}>
                      {external ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-ink-muted hover:text-ink"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className="text-ink-muted hover:text-ink">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-surface-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-muted">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs text-ink-faint">
            © {year} {site.name}. Alle Rechte vorbehalten.
          </p>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-ink-faint">
          IPTV überträgt Fernsehen über das Internet. Für Inhalte und deren
          rechtmäßige Nutzung ist die jeweilige Quelle verantwortlich.
        </p>
      </div>
    </footer>
  );
}
