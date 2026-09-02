"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { primaryNav, primaryCta } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-surface-border bg-bg/80 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="container-x relative z-20 flex items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-ink"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {primaryCta.label}
            <Icon name="arrow" size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-xl border border-surface-border bg-surface-raised/70 text-ink lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`fixed inset-0 z-10 bg-bg/97 backdrop-blur-xl transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile Navigation"
            className="container-x flex h-[100dvh] flex-col gap-1 overflow-y-auto pb-10 pt-24"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-surface-border bg-surface px-5 py-4 text-lg font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full py-4 text-base"
            >
              {primaryCta.label}
              <Icon name="arrow" size={18} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
