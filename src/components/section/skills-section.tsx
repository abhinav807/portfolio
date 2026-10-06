import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section-header";
import { EDUCATION, EXPLORING, SKILL_GROUPS } from "@/data/site";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="pt-20 sm:pt-28"
      aria-label="Skills and education"
    >
      <SectionHeader
        eyebrow="Skills"
        title="Tools I actually use."
        description="No fake percentages — just the technologies I build with, grouped by where they fit in my workflow."
        delay={BLUR_FADE_DELAY * 2}
      />

      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card/40">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <BlurFade
            key={group.label}
            delay={BLUR_FADE_DELAY * 4 + groupIndex * 0.05}
          >
            <div className="flex flex-col gap-3 border-b border-border px-4 py-4 last:border-b-0 sm:flex-row sm:gap-6 sm:px-5">
              <h3 className="w-full shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:w-40 sm:pt-1.5">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1.5 text-[13px] text-foreground/90 transition-colors hover:border-gold/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Currently exploring
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
              />
            </div>
            <ul className="flex flex-wrap gap-2">
              {EXPLORING.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[13px] text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-1 font-mono text-xs text-muted-foreground">
              learning in public — these are things I&apos;m in the middle of,
              not things I&apos;ll claim mastery over.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Education
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
              />
            </div>
            {EDUCATION.map((entry) => (
              <div key={entry.school} className="flex flex-col gap-1.5">
                <p className="font-display text-lg leading-tight tracking-tight">
                  {entry.school}
                </p>
                <p className="text-sm text-muted-foreground">{entry.detail}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {entry.location}
                </p>
              </div>
            ))}
            <span className="mt-auto w-fit rounded-full border border-gold/40 bg-gold-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
              {EDUCATION[0].status}
            </span>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
