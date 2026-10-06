"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { NAV, SOCIALS } from "@/data/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((item) => item.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        const menu = document.getElementById("mobile-menu");
        const focusInMenu =
          menu !== null &&
          document.activeElement !== null &&
          menu.contains(document.activeElement);
        setOpen(false);
        if (focusInMenu) menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-3 px-5 sm:h-16 sm:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 rounded-md"
          aria-label="Abhinav Goyal — back to top"
        >
          <span className="grid size-7 shrink-0 place-items-center rounded-md border border-border bg-card font-mono text-xs font-semibold tracking-tight transition-colors group-hover:border-gold/60 group-hover:text-gold">
            AG
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Abhinav Goyal
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              className={cn(
                "rounded-md px-2.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                active === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ModeToggle />
          <a
            href="#contact"
            className="hidden items-center rounded-lg border border-border bg-foreground px-3.5 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Contact
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-5xl flex-col px-5 py-3 sm:px-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={active === item.href ? "location" : undefined}
              className={cn(
                "border-b border-border/60 py-3 font-mono text-xs uppercase tracking-[0.16em] transition-colors last:border-b-0",
                active === item.href
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-wrap gap-2 py-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="size-3.5" aria-hidden />
                {social.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
