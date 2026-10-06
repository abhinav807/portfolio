import BlurFade from "@/components/magicui/blur-fade";
import { HIGHLIGHTS } from "@/data/site";

const BLUR_FADE_DELAY = 0.04;

export default function HighlightsSection() {
  return (
    <section
      id="highlights"
      aria-label="Highlights"
      className="pt-14 sm:pt-20"
    >
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item, index) => (
          <BlurFade
            key={item.label}
            delay={BLUR_FADE_DELAY * 3 + index * 0.05}
            className="h-full"
          >
            <li className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-card/40 p-4 transition-colors duration-200 hover:border-gold/40 hover:bg-card/70">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <item.icon
                  className="size-4 text-muted-foreground transition-colors group-hover:text-gold"
                  aria-hidden
                />
              </div>
              <p className="text-sm font-semibold tracking-tight">{item.label}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          </BlurFade>
        ))}
      </ul>
    </section>
  );
}
