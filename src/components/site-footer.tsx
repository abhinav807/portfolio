import { NAV, SITE, SOCIALS } from "@/data/site";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 pt-10 pb-28 sm:px-8 md:flex-row md:items-start md:justify-between lg:pb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-md border border-border bg-card font-mono text-xs font-semibold">
              AG
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {SITE.name}
            </span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            {SITE.tagline}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
            {SITE.locationShort}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 md:items-end">
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.url.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="inline-flex items-center gap-1.5 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="size-3.5" aria-hidden />
                {social.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 md:justify-end">
            <Link
              href="/privacy"
              className="py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Support
            </Link>
          </div>
          <p className="pt-2 text-xs text-muted-foreground md:text-right">
            Copyright © 2026 {SITE.name}
          </p>
        </nav>
      </div>
    </footer>
  );
}
