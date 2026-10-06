import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { HERO } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <section id="home" aria-label="Introduction">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="flex flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-gold" />
              </span>
              {HERO.eyebrow}
            </p>
          </BlurFade>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[clamp(2.6rem,9vw,4.5rem)] leading-[0.95] tracking-tight">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                yOffset={12}
                text={HERO.heading}
              />
            </h1>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="max-w-xl text-balance text-base leading-relaxed text-foreground/90 sm:text-lg">
                {HERO.lead}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {HERO.body}
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-wrap gap-2.5">
              {HERO.ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    cta.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                    cta.variant === "primary"
                      ? "bg-foreground text-background hover:opacity-90"
                      : "border border-border bg-card/60 text-foreground hover:border-gold/50 hover:bg-card"
                  )}
                >
                  {cta.label}
                  {cta.variant === "primary" && (
                    <ArrowRight className="size-4" aria-hidden />
                  )}
                </a>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-gold" aria-hidden />
              {HERO.location}
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="rounded-xl border border-border bg-card/70 p-4 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-5">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-[11px] text-muted-foreground">
                abhinav@portfolio
              </span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-gold/70" />
              </span>
            </div>
            <dl className="flex flex-col gap-2.5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
              {HERO.terminal.map((line) => (
                <div key={line.key} className="flex flex-wrap gap-x-2">
                  <dt className="text-gold">$ {line.key}</dt>
                  <dd className="text-muted-foreground">
                    <span aria-hidden="true" className="mr-2 text-border">
                      →
                    </span>
                    {line.value}
                  </dd>
                </div>
              ))}
              <div className="flex gap-2" aria-hidden="true">
                <span className="text-gold">$</span>
                <span className="inline-block h-4 w-2 animate-pulse bg-foreground/70" />
              </div>
            </dl>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
