import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section-header";
import { GOLDENHOUR } from "@/data/site";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const ROLES = [
  "Founder & Organiser",
  "Hackathon",
  "Student-focused",
  "Beginner-friendly",
  "Technology exposure",
  "Partnerships",
  "Community",
];

export default function GoldenHourSection() {
  return (
    <section
      id="goldenhour"
      className="pt-20 sm:pt-28"
      aria-label="GoldenHour"
    >
      <SectionHeader
        eyebrow="Featured initiative"
        title="GOLDENHOUR"
        description={GOLDENHOUR.subheading}
        delay={BLUR_FADE_DELAY * 2}
      />

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-gold/30 bg-card/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_0%_0%,var(--gold-soft),transparent_55%)]"
          />

          <div className="relative flex flex-col gap-8 p-5 sm:p-7 lg:p-9">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-3xl tracking-tight text-gold sm:text-4xl">
                  GoldenHour
                </span>
                <span className="rounded-full border border-gold/40 bg-gold-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
                  {GOLDENHOUR.role}
                </span>
              </div>

              <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {GOLDENHOUR.body}
              </p>

              <ul className="flex flex-wrap gap-1.5">
                {ROLES.map((role) => (
                  <li
                    key={role}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {GOLDENHOUR.points.map((point) => (
                <div
                  key={point.label}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-background/50 p-3.5 transition-colors hover:border-gold/40"
                >
                  <p className="text-sm font-semibold tracking-tight">
                    {point.label}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-gold/30 bg-background/60 p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-gold"
                  />
                  {GOLDENHOUR.event.status}
                </span>
                <span className="font-display text-lg tracking-tight sm:text-xl">
                  {GOLDENHOUR.event.name}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5 text-gold" aria-hidden />
                  {GOLDENHOUR.event.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-gold" aria-hidden />
                  {GOLDENHOUR.event.place}
                </span>
                <span className="inline-flex items-center gap-1.5 opacity-70">
                  {GOLDENHOUR.event.note}
                </span>
              </div>

              <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {GOLDENHOUR.event.description}
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href={GOLDENHOUR.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Visit the event site
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
                <a
                  href={GOLDENHOUR.eventPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-gold/50"
                >
                  Registration page
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
