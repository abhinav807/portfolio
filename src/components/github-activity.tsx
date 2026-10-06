"use client";

import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Contribution = { date: string; count: number; level: number };
type Payload = {
  total?: { lastYear?: number };
  contributions?: Contribution[];
};

const LEVEL_CLASSES = [
  "bg-foreground/10",
  "bg-gold/25",
  "bg-gold/45",
  "bg-gold/70",
  "bg-gold",
];

export default function GithubActivity() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://github-contributions-api.jogruber.de/v4/${SITE.githubUsername}?y=last`,
      { signal: controller.signal }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
      })
      .then((json: Payload) => {
        if (!Array.isArray(json.contributions)) throw new Error("Bad payload");
        setPayload(json);
        setStatus("ready");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setStatus("error");
      });

    return () => controller.abort();
  }, []);

  if (status === "error") {
    return (
      <p className="font-mono text-xs text-muted-foreground">
        Live contribution data is unavailable right now —{" "}
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline underline-offset-4"
        >
          view the profile directly
        </a>
        .
      </p>
    );
  }

  const contributions = payload?.contributions ?? [];
  const total = payload?.total?.lastYear;

  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-xs text-muted-foreground">
          {status === "loading" || total === undefined
            ? "loading activity…"
            : `${total} contributions in the last year`}
        </p>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
          less
          {LEVEL_CLASSES.map((level, index) => (
            <span
              key={index}
              className={cn("size-2.5 rounded-[3px]", level)}
              aria-hidden="true"
            />
          ))}
          more
        </span>
      </div>

      {status === "loading" ? (
        <div className="min-w-0 w-full overflow-hidden">
          <div
            className="grid w-max animate-pulse grid-flow-col grid-rows-7 gap-[3px]"
            aria-hidden="true"
          >
            {Array.from({ length: 52 * 7 }).map((_, index) => (
              <span
                key={index}
                className="size-[10px] rounded-[3px] bg-foreground/10"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="min-w-0 w-full overflow-x-auto pb-1">
          <div
            role="img"
            aria-label={`GitHub contribution activity over the last year: ${total ?? 0} contributions`}
            className="grid w-max grid-flow-col grid-rows-7 gap-[3px]"
          >
            {contributions.map((contribution) => (
              <span
                key={contribution.date}
                title={`${contribution.count} contributions on ${contribution.date}`}
                className={cn(
                  "size-[10px] rounded-[3px]",
                  LEVEL_CLASSES[contribution.level] ?? LEVEL_CLASSES[0]
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
