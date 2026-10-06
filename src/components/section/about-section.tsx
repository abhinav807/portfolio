import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section-header";
import { ABOUT, AREAS } from "@/data/site";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 sm:pt-28" aria-label="About">
      <SectionHeader
        eyebrow="About"
        title="I like building things."
        delay={BLUR_FADE_DELAY * 2}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex flex-col gap-4">
          {ABOUT.paragraphs.map((paragraph, index) => (
            <BlurFade key={index} delay={BLUR_FADE_DELAY * 4 + index * 0.05}>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {paragraph}
              </p>
            </BlurFade>
          ))}
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-gold">→</span> currently: class 10, Delhi ·
              building after school hours
            </p>
          </BlurFade>
        </div>

        <div className="flex flex-col gap-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              What I work on
            </h3>
          </BlurFade>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {AREAS.map((area, index) => (
              <BlurFade
                key={area.title}
                delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                className="h-full"
              >
                <li className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-card/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-card">
                  <div className="flex items-center gap-2.5">
                    <area.icon
                      className="size-4 text-muted-foreground transition-colors group-hover:text-gold"
                      aria-hidden
                    />
                    <h4 className="text-sm font-semibold tracking-tight">
                      {area.title}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </li>
              </BlurFade>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
