import { cn } from "@/lib/utils";
import { Check, Search, ShieldCheck, TriangleAlert } from "lucide-react";

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

function FaceVisual({ label }: { label: string }) {
  const rows = ["08:58 · present", "08:59 · present", "09:01 · present"];
  return (
    <Frame>
      <Chrome label={label} />
      <div className="flex flex-1 gap-2 p-2.5">
        <div className="relative flex-1 overflow-hidden rounded-lg border border-border bg-foreground/[0.06]">
          {/* viewfinder corners */}
          <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-gold/70" />
          <span className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-gold/70" />
          <span className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-gold/70" />
          <span className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-gold/70" />

          {/* detection boxes */}
          <span className="absolute left-[22%] top-[26%] h-14 w-12 border border-gold/80">
            <span className="absolute -top-4 left-0 whitespace-nowrap bg-gold px-1 font-mono text-[8px] text-background">
              face_01
            </span>
          </span>
          <span className="absolute bottom-[22%] right-[24%] h-12 w-11 border border-gold/60">
            <span className="absolute -top-4 left-0 whitespace-nowrap bg-gold/80 px-1 font-mono text-[8px] text-background">
              face_02
            </span>
          </span>

          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] text-muted-foreground">
            camera_01 · opencv · scanning
          </span>
        </div>

        <div className="flex w-[38%] min-w-0 flex-col gap-1.5 rounded-lg border border-border bg-card/70 p-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            attendance
          </span>
          {rows.map((row) => (
            <span
              key={row}
              className="flex items-center justify-between gap-1 rounded border border-border bg-background/70 px-1.5 py-1 font-mono text-[9px] text-muted-foreground"
            >
              {row}
              <Check className="size-3 shrink-0 text-gold" aria-hidden />
            </span>
          ))}
          <span className="mt-auto rounded border border-gold/40 bg-gold-soft px-1.5 py-1 text-center font-mono text-[9px]">
            marking…
          </span>
        </div>
      </div>
    </Frame>
  );
}

function MeetingVisual({ label }: { label: string }) {
  return (
    <Frame>
      <Chrome label={label} />
      <div className="flex flex-1 gap-2 p-2.5">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="grid flex-1 grid-cols-2 gap-2">
            {[
              { initials: "AG", active: true },
              { initials: "RS", active: false },
              { initials: "PM", active: false },
              { initials: "+2", active: false },
            ].map((person) => (
              <span
                key={person.initials}
                className={cn(
                  "relative grid place-items-center rounded-lg border bg-card/60 font-display text-sm",
                  person.active ? "border-gold/60" : "border-border"
                )}
              >
                {person.initials}
                {person.active && (
                  <span className="absolute bottom-1.5 left-1.5 flex gap-0.5" aria-hidden="true">
                    <span className="h-2 w-0.5 animate-pulse rounded bg-gold" />
                    <span className="h-3 w-0.5 animate-pulse rounded bg-gold/70" />
                    <span className="h-1.5 w-0.5 animate-pulse rounded bg-gold/50" />
                  </span>
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/70 py-1.5">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={cn(
                  "grid size-6 place-items-center rounded-full border text-muted-foreground",
                  index === 2 ? "border-red-400/50 text-red-400/80" : "border-border"
                )}
              >
                <span className="size-2 rounded-sm bg-current" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-[40%] min-w-0 flex-col gap-2 rounded-lg border border-border bg-card/70 p-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            ai notes
          </span>
          <Lines count={5} />
          <span className="mt-auto flex items-end gap-1" aria-hidden="true">
            {[6, 10, 4, 12, 8, 5, 11, 7, 9, 4, 8, 6].map((height, index) => (
              <span
                key={index}
                className="w-1 rounded-sm bg-gold/60"
                style={{ height: `${height}px` }}
              />
            ))}
          </span>
        </div>
      </div>
    </Frame>
  );
}

export type VisualVariant =
  | "face"
  | "meeting"
  | "legal"
  | "shield"
  | "commerce";

function LegalVisual({ label }: { label: string }) {
  return (
    <Frame>
      <Chrome label={label} />
      <div className="flex flex-1 gap-2 p-2.5">
        <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-lg border border-border bg-card/70 p-2.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            document
          </span>
          <span className="font-display text-[11px] tracking-tight">
            Agreement · Clause 7.2
          </span>
          <Lines count={3} />
          <span className="rounded-md border border-gold/40 bg-gold-soft px-2 py-1.5 text-[9px] leading-relaxed text-foreground/80">
            highlighted in plain English — what this clause actually means
          </span>
          <Lines count={2} />
          <span className="mt-auto flex items-center gap-1.5 rounded-md border border-border bg-background/80 px-2 py-1.5">
            <Search className="size-3 shrink-0 text-muted-foreground" aria-hidden />
            <span className="font-mono text-[9px] text-muted-foreground">
              ask about this document…
            </span>
          </span>
        </div>
        <div className="flex w-[34%] min-w-0 flex-col gap-1.5 rounded-lg border border-border bg-card/60 p-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            summary
          </span>
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="rounded border border-border bg-background/70 px-1.5 py-1 font-mono text-[9px] text-muted-foreground"
            >
              {index + 1}. key point
            </span>
          ))}
          <span className="mt-auto rounded border border-red-400/40 bg-red-400/10 px-1.5 py-1 text-center font-mono text-[9px] text-red-400/90">
            not legal advice
          </span>
        </div>
      </div>
    </Frame>
  );
}

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

function CommerceVisual({ label }: { label: string }) {
  const rows = [
    { item: "Cotton Tee · M", qty: "42", tag: "in stock" },
    { item: "Canvas Bag", qty: "17", tag: "low" },
    { item: "Mug · 350ml", qty: "88", tag: "in stock" },
  ];
  return (
    <Frame>
      <Chrome label={label} />
      <div className="flex flex-1 flex-col gap-2 p-2.5">
        <div className="flex items-center justify-between rounded-md border border-border bg-card/70 px-2 py-1.5 font-mono text-[9px] text-muted-foreground">
          <span>inventory</span>
          <span className="text-gold">synced</span>
        </div>
        <div className="flex flex-col gap-1.5 rounded-lg border border-border bg-card/60 p-1.5">
          <span className="grid grid-cols-[1fr_auto_auto] gap-2 px-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70">
            <span>product</span>
            <span>qty</span>
            <span>status</span>
          </span>
          {rows.map((row) => (
            <span
              key={row.item}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-2 rounded border border-border bg-background/70 px-1.5 py-1 text-[9px]"
            >
              <span className="truncate text-muted-foreground">{row.item}</span>
              <span className="font-mono text-foreground/80">{row.qty}</span>
              <span
                className={cn(
                  "rounded px-1 font-mono",
                  row.tag === "low"
                    ? "bg-gold-soft text-gold"
                    : "text-muted-foreground"
                )}
              >
                {row.tag}
              </span>
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col items-end gap-1">
          <span className="max-w-[75%] rounded-lg rounded-br-sm border border-border bg-card/80 px-2 py-1 text-[9px] text-muted-foreground">
            how many canvas bags are left this week?
          </span>
          <span className="max-w-[75%] rounded-lg rounded-bl-sm border border-gold/40 bg-gold-soft px-2 py-1 text-[9px]">
            17 in stock · 4 sold in the last 7 days
          </span>
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
    case "face":
      return <FaceVisual label={label} />;
    case "meeting":
      return <MeetingVisual label={label} />;
    case "legal":
      return <LegalVisual label={label} />;
    case "shield":
      return <ShieldVisual label={label} />;
    case "commerce":
      return <CommerceVisual label={label} />;
    default:
      return null;
  }
}
