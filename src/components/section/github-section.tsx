import BlurFade from "@/components/magicui/blur-fade";
import GithubActivity from "@/components/github-activity";
import SectionHeader from "@/components/section-header";
import { SITE } from "@/data/site";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const LANGUAGES = ["TypeScript", "JavaScript", "Python", "HTML", "CSS"];

export default function GithubSection() {
  return (
    <section
      id="github"
      className="pt-20 sm:pt-28"
      aria-label="Building in public on GitHub"
    >
      <SectionHeader
        eyebrow="Building in Public"
        title="Everything lands on GitHub."
        description="Repositories, half-finished experiments and the odd finished one. The account is real, the commits are mine, and the stars are whatever they are."
        delay={BLUR_FADE_DELAY * 2}
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="h-full min-w-0">
          <div className="flex h-full min-w-0 flex-col gap-4 rounded-xl border border-border bg-card/50 p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={SITE.githubAvatar}
                alt={`GitHub avatar of ${SITE.name}`}
                width={56}
                height={56}
                className="size-14 shrink-0 rounded-full border border-border"
              />
              <div className="min-w-0">
                <p className="truncate font-display text-lg leading-tight tracking-tight">
                  {SITE.name}
                </p>
                <p className="truncate font-mono text-xs text-muted-foreground">
                  @{SITE.githubUsername}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Web developer and founder of GoldenHour, currently building
              websites for organizations and experimenting with AI, agents and
              computer vision.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {LANGUAGES.map((language) => (
                <span
                  key={language}
                  className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {language}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-1">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90"
              >
                <Github className="size-3.5" aria-hidden />
                View profile
              </a>
              <a
                href={`${SITE.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-gold/50"
              >
                Repositories
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 5} className="h-full min-w-0">
          <div className="flex h-full min-w-0 flex-col justify-between gap-4 rounded-xl border border-border bg-card/50 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                contribution activity
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
              />
            </div>
            <GithubActivity />
            <p className="font-mono text-[11px] text-muted-foreground">
              <span className="text-gold">→</span> data fetched live from
              public GitHub endpoints — nothing on this page is a made-up
              number.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
