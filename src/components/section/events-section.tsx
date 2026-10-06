import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section-header";
import { Timeline, TimelineConnectItem, TimelineItem } from "@/components/timeline";
import { EVENTS } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function EventsSection() {
  return (
    <section
      id="events"
      className="scroll-mt-24 pt-20 sm:pt-28"
      aria-label="Events and hackathons"
    >
      <SectionHeader
        eyebrow="Events & Hackathons"
        title="In the room, and running one."
        description="Not a list of dozens of hackathons — just the technology events I've actually been part of, plus the one I'm building myself."
        delay={BLUR_FADE_DELAY * 2}
      />

      <div className="mt-8 rounded-xl border border-border bg-card/40">
        <Timeline>
          {EVENTS.map((event, index) => (
            <TimelineItem
              key={event.title}
              className="w-full flex items-start justify-between gap-6 sm:gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                <span
                  className={cn(
                    "z-10 grid size-10 shrink-0 place-items-center rounded-full border bg-card shadow ring-2 ring-border transition-colors",
                    index === 0
                      ? "border-gold/50 text-gold"
                      : "border-border text-muted-foreground"
                  )}
                >
                  <event.icon className="size-4" aria-hidden />
                </span>
              </TimelineConnectItem>

              <div className="flex flex-1 flex-col gap-2 pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg leading-tight tracking-tight">
                    {event.title}
                  </h3>
                  <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {event.role}
                  </span>
                  {event.status && (
                    <span className="rounded-full border border-gold/40 bg-gold-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-gold">
                      {event.status}
                    </span>
                  )}
                </div>

                <p className="font-mono text-xs text-muted-foreground">
                  {event.when} · {event.location}
                </p>

                <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>

                {event.href && (
                  <a
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 font-mono text-xs text-foreground transition-colors hover:text-gold"
                  >
                    event site
                    <ArrowUpRight className="size-3.5" aria-hidden />
                    <span className="sr-only">
                      {" "}
                      for {event.title} (opens in a new tab)
                    </span>
                  </a>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          <span className="text-gold">→</span> GoldenHour is the one I run;
          the rest are rooms I showed up to and built in.
        </p>
      </BlurFade>
    </section>
  );
}
