import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support Abhinav Goyal's work — scan the QR code to contribute. Every bit keeps the projects, events and experiments going.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-2xl pb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        support
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
        Support my work
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        If anything here — the projects, GoldenHour, the experiments — has
        helped you or you&apos;d simply like to keep it going, you can
        contribute by scanning the code below. Thank you.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-border bg-card/50 p-6 sm:p-8">
        <Image
          src="/support-qr.png"
          alt="QR code to support Abhinav Goyal's work"
          width={320}
          height={320}
          className="h-auto w-full max-w-[320px] rounded-lg"
          priority
        />
        <p className="font-mono text-xs text-muted-foreground">
          Scan with your camera or any payments app
        </p>
      </div>

      <p className="mt-10">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back home
        </Link>
      </p>
    </div>
  );
}
