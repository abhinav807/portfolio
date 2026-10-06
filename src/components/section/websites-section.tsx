import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section-header";
import { SitePreview } from "@/components/previews";
import { WEBSITES } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function WebsitesSection() {
  return (
    <section
      id="websites"
      className="pt-20 sm:pt-28"
      aria-label="Websites I have built"
    >
      <SectionHeader
        eyebrow="Websites I've Built"
        title="Shipped for real organizations."
        description="Designed, built, deployed and maintained for actual businesses and organizations — the work that keeps me honest about what production really takes."
        delay={BLUR_FADE_DELAY * 2}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WEBSITES.map((site, index) => (
          <BlurFade
            key={site.name}
            delay={BLUR_FADE_DELAY * 4 + index * 0.06}
            className="h-full"
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
              <SitePreview variant={site.visual} label={site.domain} />
              <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg leading-tight tracking-tight">
                    {site.name}
                  </h3>
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]",
                      site.status === "Live"
                        ? "border-gold/40 bg-gold-soft text-gold"
                        : "border-border text-muted-foreground"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 rounded-full",
                        site.status === "Live"
                          ? "bg-gold"
                          : "bg-muted-foreground/60"
                      )}
                    />
                    {site.status}
                  </span>
                </div>

                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {site.description}
                </p>

                <div className="mt-auto flex flex-col gap-3 pt-1">
                  <ul className="flex flex-wrap gap-1.5">
                    {site.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 py-2 font-mono text-xs text-foreground transition-colors hover:text-gold"
                  >
                    {site.domain}
                    <ArrowUpRight
                      className="size-3.5"
                      aria-hidden
                    />
                    <span className="sr-only">
                      — visit {site.name} (opens in a new tab)
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
