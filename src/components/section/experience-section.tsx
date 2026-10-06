"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section-header";
import { EXPERIENCE } from "@/data/site";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 pt-20 sm:pt-28"
      aria-label="Building and experience"
    >
      <SectionHeader
        eyebrow="Building & Experience"
        title="What I'm building"
        description="No fake résumé entries — this is the actual work: client websites, my own initiative, and a long-running stream of projects and experiments."
        delay={BLUR_FADE_DELAY * 2}
      />

      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card/40">
        <Accordion type="single" collapsible defaultValue="item-0">
          {EXPERIENCE.map((entry, index) => (
            <AccordionItem
              key={entry.org}
              value={`item-${index}`}
              className="border-b border-border last:border-b-0"
            >
              <AccordionTrigger className="group px-4 py-4 text-left transition-colors hover:bg-muted/40 hover:no-underline sm:px-5">
                <div className="flex w-full items-center gap-3 sm:gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-gold/50 group-hover:text-gold">
                    <entry.icon className="size-4" aria-hidden />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-sm font-semibold tracking-tight sm:text-base">
                        {entry.org}
                      </span>
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {entry.role}
                      </span>
                    </span>
                    <span className="truncate font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80">
                      {entry.meta}
                    </span>
                  </span>
                  <ChevronDown
                    className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 pt-1 sm:px-5">
                <div className="flex flex-col gap-4 sm:pl-13">
                  <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {entry.points.map((point) => (
                      <li
                        key={point}
                        className={cn(
                          "rounded-md border border-border bg-background px-2 py-1",
                          "font-mono text-[11px] text-muted-foreground"
                        )}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          <span className="text-gold">→</span> all of this is work I&apos;ve
          done on my own — client sites, GoldenHour and a lot of experiments.
        </p>
      </BlurFade>
    </section>
  );
}
