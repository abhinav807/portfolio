import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  delay?: number;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  delay = 0,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <BlurFade delay={delay} className="w-full">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-gold"
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </span>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-border to-transparent"
          />
        </div>
      </BlurFade>
      <div className="flex flex-col gap-3">
        <BlurFade delay={delay + 0.05}>
          <h2 className="font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl">
            {title}
          </h2>
        </BlurFade>
        {description && (
          <BlurFade delay={delay + 0.1}>
            <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
