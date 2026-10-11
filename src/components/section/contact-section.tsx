import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import BlurFade from "@/components/magicui/blur-fade";
import { CONTACT } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-20 sm:pt-28"
      aria-label="Contact"
    >
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,black,transparent)]"
          >
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-5 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </span>
            <h2 className="max-w-2xl font-display text-3xl leading-[1.05] tracking-tight sm:text-5xl">
              {CONTACT.heading}
            </h2>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {CONTACT.body}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {CONTACT.links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={
                    index === 0
                      ? "inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                      : "inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-gold/50"
                  }
                >
                  <link.icon className="size-4" aria-hidden />
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center gap-1">
              <a
                href={`mailto:${CONTACT.email}`}
                className="py-2 font-mono text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-gold"
              >
                {CONTACT.email}
              </a>
              <a
                href={`mailto:${CONTACT.goldenHourEmail}`}
                className="py-2 font-mono text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-gold"
              >
                <span className="no-underline">GoldenHour — </span>
                {CONTACT.goldenHourEmail}
              </a>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
