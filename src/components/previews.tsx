import { cn } from "@/lib/utils";
import { Check, ShieldCheck, TriangleAlert } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared chrome                                                      */
/* ------------------------------------------------------------------ */

function Dots() {
  return (
    <span className="flex shrink-0 gap-1.5" aria-hidden="true">
      <span className="size-2 rounded-full bg-border" />
      <span className="size-2 rounded-full bg-border" />
      <span className="size-2 rounded-full bg-border" />
    </span>
  );
}

function Chrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-card/70 px-3 py-2">
      <Dots />
      <span className="min-w-0 flex-1 truncate rounded-md border border-border bg-background/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "preview-grid relative flex aspect-[16/10] w-full flex-col overflow-hidden rounded-t-xl border-b border-border bg-background/50",
        className
      )}
    >
      {children}
    </div>
  );
}

function Lines({ count, className }: { count: number; className?: string }) {
  return (
    <span className={cn("flex flex-col gap-1.5", className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "block h-1.5 rounded-full bg-foreground/15",
            index % 3 === 2 ? "w-2/3" : index % 2 === 1 ? "w-5/6" : "w-full"
          )}
        />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Website previews                                                   */
/* ------------------------------------------------------------------ */

export function SitePreview({
  variant,
  label,
}: {
  variant: "legal" | "kms" | "hindi";
  label: string;
}) {
  if (variant === "hindi") {
    return (
      <Frame>
        <Chrome label={label} />
        <div className="flex flex-1 items-stretch justify-center gap-3 p-3">
          <div className="flex w-[42%] min-w-0 flex-col gap-2 rounded-lg border border-border bg-card/70 p-2">
            <span className="rounded-md bg-gold/80 px-2 py-1 text-center text-[9px] font-semibold text-background">
              बनिया समाज दिल्ली
            </span>
            <Lines count={4} />
            <span className="mt-auto rounded-md border border-border px-2 py-1 text-center font-mono text-[9px] text-muted-foreground">
              हिंदी · मोबाइल
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="rounded-lg border border-border bg-card/60 p-2">
              <span className="font-mono text-[9px] text-muted-foreground">
                एकता में शक्ति, सेवा में पहचान
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <span className="h-10 rounded-lg border border-border bg-card/60" />
              <span className="h-10 rounded-lg border border-border bg-card/60" />
            </div>
            <Lines count={3} />
          </div>
        </div>
      </Frame>
    );
  }

  if (variant === "kms") {
    return (
      <Frame>
        <Chrome label={label} />
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="flex flex-col gap-2">
            <span className="font-display text-sm tracking-tight">
              KMS Law Firm
            </span>
            <span className="h-1.5 w-2/3 rounded-full bg-foreground/20" />
            <span className="h-1.5 w-1/2 rounded-full bg-foreground/10" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Civil", "Criminal", "Matrimonial"].map((item) => (
              <span
                key={item}
                className="flex h-14 flex-col justify-between rounded-lg border border-border bg-card/60 p-2"
              >
                <span className="size-3.5 rounded border border-gold/50" />
                <span className="font-mono text-[9px] text-muted-foreground">
                  {item}
                </span>
              </span>
            ))}
          </div>
          <Lines count={2} className="mt-auto" />
        </div>
      </Frame>
    );
  }

  return (
    <Frame>
      <Chrome label={label} />
      <div className="flex flex-1 gap-3 p-3">
        <div className="flex w-1/3 min-w-0 flex-col gap-2 rounded-lg border border-border bg-card/60 p-2">
          <span className="font-display text-[11px] leading-tight tracking-tight">
            VKG Law Firm
          </span>
          <Lines count={5} className="mt-1" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <span className="flex items-center gap-1.5 rounded-md border border-border bg-card/60 px-2 py-1 font-mono text-[9px] text-muted-foreground">
            <ShieldCheck className="size-3 text-gold" aria-hidden />
            A.O.R. · Supreme Court of India
          </span>
          <Lines count={3} />
          <span className="mt-auto rounded-md border border-gold/40 bg-gold-soft px-2 py-1.5 font-mono text-[9px] text-foreground/80">
            Disclaimer · legal information, not advice
          </span>
        </div>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/*  Project previews                                                   */
/* ------------------------------------------------------------------ */

export type VisualVariant = "shield";

function ShieldVisual({ label }: { label: string }) {
  return (
    <Frame>
      <Chrome label={label} />
      <div className="relative flex flex-1 flex-col gap-2 p-2.5">
        <div className="flex items-center gap-1.5 rounded-md border border-border bg-card/70 px-2 py-1.5">
          <ShieldCheck className="size-3.5 shrink-0 text-gold" aria-hidden />
          <span className="min-w-0 flex-1 truncate font-mono text-[9px] text-muted-foreground">
            hxxp://account-verify-login.secure-check.example
          </span>
        </div>

        <div className="flex items-start gap-2 rounded-lg border border-red-400/40 bg-red-400/10 p-2">
          <TriangleAlert
            className="size-3.5 shrink-0 text-red-400"
            aria-hidden
          />
          <span className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold text-red-400">
              Suspicious link detected
            </span>
            <span className="font-mono text-[9px] leading-relaxed text-muted-foreground">
              look-alike domain · urgent login wording · no https trust signal
            </span>
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          {["Domain reputation", "Known phishing pattern", "Page behaviour"].map(
            (check) => (
              <span
                key={check}
                className="flex items-center justify-between gap-2 rounded border border-border bg-card/60 px-2 py-1 font-mono text-[9px] text-muted-foreground"
              >
                {check}
                <Check className="size-3 shrink-0 text-gold" aria-hidden />
              </span>
            )
          )}
        </div>
      </div>
    </Frame>
  );
}

export function ProjectVisual({
  variant,
  label,
}: {
  variant: VisualVariant;
  label: string;
}) {
  switch (variant) {
    case "shield":
      return <ShieldVisual label={label} />;
    default:
      return null;
  }
}
