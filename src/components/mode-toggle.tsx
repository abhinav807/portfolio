"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={
        resolvedTheme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      title={
        resolvedTheme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      suppressHydrationWarning
      className={cn(
        "size-9 rounded-lg border border-border text-foreground hover:bg-muted hover:text-foreground focus-visible:outline-ring",
        className
      )}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="size-4 dark:hidden" aria-hidden />
      <MoonIcon className="hidden size-4 dark:block" aria-hidden />
    </Button>
  );
}
