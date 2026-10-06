import { ProjectVisual, type VisualVariant } from "@/components/previews";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  className?: string;
  layout?: "vertical" | "horizontal";
}

type Project = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  tech: readonly string[];
  status: string;
  visual: VisualVariant;
  github?: string;
  demo?: string;
  note?: string;
};

function StatusBadge({ status }: { status: string }) {
  const isLive = status.toLowerCase() === "live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]",
        isLive
          ? "border-gold/40 bg-gold-soft text-gold"
          : "border-border bg-background/60 text-muted-foreground"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          isLive ? "bg-gold" : "bg-muted-foreground/60"
        )}
      />
      {status}
    </span>
  );
}

function Actions({
  github,
  demo,
  name,
}: {
  github?: string;
  demo?: string;
  name: string;
}) {
  if (!github && !demo) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-gold/50 hover:bg-card"
        >
          <Github className="size-3.5" aria-hidden />
          GitHub
          <span className="sr-only"> — source code for {name}</span>
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90"
        >
          <ArrowUpRight className="size-3.5" aria-hidden />
          Live demo
          <span className="sr-only"> — open {name} in a new tab</span>
        </a>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
  className,
  layout = "vertical",
}: ProjectCardProps) {
  const horizontal = layout === "horizontal";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)]",
        horizontal && "md:flex-row",
        className
      )}
    >
      <div
        className={cn(
          "shrink-0 overflow-hidden",
          horizontal ? "md:w-1/2" : "w-full"
        )}
      >
        <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <ProjectVisual variant={project.visual} label={project.name} />
        </div>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col gap-4 p-5 sm:p-6",
          horizontal && "md:justify-center"
        )}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {project.category}
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
          <StatusBadge status={project.status} />
        </div>

        <div className="flex flex-col gap-2">
          <h3
            className={
              horizontal
                ? "font-display text-2xl leading-tight tracking-tight sm:text-3xl"
                : "font-display text-xl leading-tight tracking-tight sm:text-2xl"
            }
          >
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed text-foreground/80">
            {project.tagline}
          </p>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        {project.note && (
          <p className="rounded-lg border border-gold/30 bg-gold-soft px-3 py-2 font-mono text-[11px] leading-relaxed text-foreground/80">
            {project.note}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-1">
          <Actions
            github={project.github}
            demo={project.demo}
            name={project.name}
          />
        </div>
      </div>
    </article>
  );
}
