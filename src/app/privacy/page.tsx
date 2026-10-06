import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How this portfolio site handles data: no tracking cookies, no forms, theme preference stored locally, cookieless analytics, and live public GitHub data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl pb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        legal
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 font-mono text-xs text-muted-foreground">
        Last updated 7 October 2026
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <p>
          This is the personal portfolio website of Abhinav Goyal, based in
          Delhi, India. It is a static site: there are no user accounts, no
          login, and no contact forms. This policy explains exactly what
          happens when you visit.
        </p>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Information you choose to send me
          </h2>
          <p className="mt-2">
            The only way to reach me through this site is by email. If you send
            me an email, I receive whatever you choose to include in it — your
            email address and message content. I use it only to reply, and you
            can ask me to delete the conversation at any time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Information stored on your device
          </h2>
          <p className="mt-2">
            The site stores one item in your browser&apos;s local storage: your
            theme preference (dark or light). It never leaves your device and
            is not a cookie. The site does not set any cookies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Analytics
          </h2>
          <p className="mt-2">
            The site uses Vercel Analytics, which measures aggregate page views
            without cookies and without cross-site tracking. No advertising or
            profiling identifiers are created.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Third-party requests
          </h2>
          <p className="mt-2">
            Some content is fetched live from public third-party endpoints: the
            GitHub contributions API (jogruber.de) and GitHub&apos;s avatar
            CDN (avatars.githubusercontent.com). Like any web request, your
            browser&apos;s IP address is seen by those services when they
            respond; their own privacy policies apply. External links
            (GitHub, LinkedIn, event pages) take you to other sites I do not
            control.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Hosting logs
          </h2>
          <p className="mt-2">
            The hosting provider processes standard server logs (IP address,
            time, requested page) for security and reliability. I do not
            receive or store these logs myself.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Changes and contact
          </h2>
          <p className="mt-2">
            If this policy changes, this page is updated. Questions about your
            data can be sent to{" "}
            <a
              href="mailto:goldenhourdelhi@gmail.com"
              className="text-foreground underline underline-offset-4 hover:text-gold"
            >
              goldenhourdelhi@gmail.com
            </a>
            .
          </p>
        </section>
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
