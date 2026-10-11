import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms of use for this personal portfolio: informational content as-is, no warranties, external links not endorsed, and content ownership.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl pb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        legal
      </p>
      <h1 className="mt-2 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
        Terms and Conditions
      </h1>
      <p className="mt-3 font-mono text-xs text-muted-foreground">
        Last updated 7 October 2026
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <p>
          By using this website you agree to these terms. If you do not agree,
          please do not use the site.
        </p>

        <section>
          <h2 className="font-display text-lg text-foreground">
            About this site
          </h2>
          <p className="mt-2">
            This is the personal portfolio of Abhinav Goyal. It is provided
            for informational purposes — to present my work, experience and
            contact details. There are no accounts, purchases, or services
            offered through this site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Content provided as-is
          </h2>
          <p className="mt-2">
            The site is provided &quot;as is&quot; without warranties of any
            kind, express or implied. While I keep the content accurate, I make
            no guarantee that everything is complete, current, or error-free.
            Nothing on this site constitutes professional, legal, financial, or
            career advice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            External links
          </h2>
          <p className="mt-2">
            The site links to third-party pages (GitHub, LinkedIn, events,
            client sites). Those sites are not under my control, and I am not
            responsible for their content, policies, or availability. A link
            does not mean I endorse everything on that site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Intellectual property
          </h2>
          <p className="mt-2">
            Unless a page states otherwise, the text and design of this site
            are © 2026 Abhinav Goyal. Code I publish on GitHub is covered by
            the license stated in each repository. Names and trademarks of
            organizations I have worked with belong to their respective owners
            and are used for identification only.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Limitation of liability
          </h2>
          <p className="mt-2">
            To the maximum extent permitted by law, I am not liable for any
            loss or damage arising from your use of this site or of any
            external site it links to.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg text-foreground">
            Changes and contact
          </h2>
          <p className="mt-2">
            These terms may be updated on this page. Questions can be sent to{" "}
            <a
              href="mailto:abhinavgoyal300@gmail.com"
              className="text-foreground underline underline-offset-4 hover:text-gold"
            >
              abhinavgoyal300@gmail.com
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
