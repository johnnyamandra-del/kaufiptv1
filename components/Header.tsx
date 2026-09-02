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

  // Sperrt das Scrollen der Seite hinter dem offenen Mobile-Menü und
  // blendet die schwebenden Kontakt-Buttons aus (siehe globals.css: body.nav-open).
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("nav-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[10000] transition-all duration-300 ${
          open ? "max-lg:pointer-events-none max-lg:opacity-0" : ""
        } ${
          scrolled
            ? "border-b border-surface-border bg-bg/80 py-2.5 backdrop-blur-xl"
            : "border-b border-transparent py-4"
        }`}
      >
        <div className="container-x flex max-w-full items-center justify-between gap-3 sm:gap-4">
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
                        active ? "text-ink" : "text-ink-muted hover:text-ink"
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
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-surface-border bg-surface-raised/70 text-ink lg:hidden"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </header>

      {/* Vollbild-Mobilnavigation – deckendes Overlay, eigener Kopfbereich, CTA unten */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-0 z-[9999] bg-bg transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex h-[100dvh] flex-col">
          <div className="container-x flex max-w-full items-center justify-between gap-3 py-4">
            <Logo onClick={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-surface-border bg-surface-raised/70 text-ink"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <nav
            aria-label="Mobile Navigation"
            className="container-x flex min-h-0 flex-1 flex-col overflow-y-auto pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-1"
          >
            <ul className="flex flex-col gap-2">
              {primaryNav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-[58px] items-center rounded-xl border px-5 text-[1.3rem] font-medium transition-colors ${
                        active
                          ? "border-brand/40 bg-brand/10 text-ink"
                          : "border-surface-border bg-surface text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-auto w-full py-3.5 text-[1.05rem] max-[360px]:py-3 max-[360px]:text-base"
            >
              {primaryCta.label}
              <Icon name="arrow" size={18} />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
