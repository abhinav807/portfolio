import BlurFade from "@/components/magicui/blur-fade";
import SectionHeader from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { EXPERIMENTS, PROJECTS } from "@/data/site";
import { ArrowUpRight, Github } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const [lead, ...rest] = PROJECTS;

  return (
    <section
      id="projects"
      className="scroll-mt-24 pt-20 sm:pt-28"
      aria-label="Things I have built"
    >
      <SectionHeader
        eyebrow="Selected work"
        title="Things I've Built"
        description="Projects, experiments and products I've worked on — from AI applications to web platforms and developer tools."
        delay={BLUR_FADE_DELAY * 2}
      />

      <div className="mt-8 flex flex-col gap-4">
        {lead && (
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <ProjectCard project={lead} layout="horizontal" />
          </BlurFade>
        )}
        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((project, index) => (
            <BlurFade
              key={project.name}
              delay={BLUR_FADE_DELAY * 5 + index * 0.05}
              className="h-full"
            >
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            More experiments
          </h3>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
          />
          <a
            href="https://github.com/abhinav807"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-gold"
          >
            all repos
            <ArrowUpRight className="size-3" aria-hidden />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIMENTS.map((experiment, index) => (
            <BlurFade
              key={experiment.name}
              delay={BLUR_FADE_DELAY * 6 + index * 0.05}
              className="h-full"
            >
              <article className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-card/70">
                <div className="flex items-center justify-between gap-2">
                  <Github
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-gold"
                    aria-hidden
                  />
                  <span className="rounded border border-border bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {experiment.language}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-mono text-sm font-semibold tracking-tight break-words">
                    {experiment.name}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {experiment.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80">
                    {experiment.status}
                  </span>
                  <span className="ml-auto flex gap-3">
                    <a
                      href={experiment.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-foreground transition-colors hover:text-gold"
                    >
                      repo
                      <span className="sr-only">
                        {" "}
                        for {experiment.name} (opens in a new tab)
                      </span>
                    </a>
                    {experiment.demo && (
                      <a
                        href={experiment.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] text-foreground transition-colors hover:text-gold"
                      >
                        live
                        <span className="sr-only">
                          {" "}
                          {experiment.name} demo (opens in a new tab)
                        </span>
                      </a>
                    )}
                  </span>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
