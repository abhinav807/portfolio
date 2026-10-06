import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import MobileCTA from "@/components/mobile-cta";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "variable",
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-clash",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Abhinav Goyal — Student Builder, Developer & Founder",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Abhinav Goyal",
    "student builder",
    "web developer",
    "portfolio",
    "GoldenHour",
    "Delhi",
    "AI projects",
    "hackathons",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abhinav Goyal — Student Builder, Developer & Founder",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Abhinav Goyal — Student Builder, Developer & Founder",
    description: SITE.description,
    card: "summary_large_image",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Abhinav Goyal — Student Builder, Developer & Founder",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geist.variable,
          geistMono.variable,
          clashDisplay.variable
        )}
      >
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
        <link
          rel="preconnect"
          href="https://github-contributions-api.jogruber.de"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a href="#main" className="skip-link">
            Skip to content
          </a>
            <SiteHeader />
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[240px] overflow-hidden opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]"
              >
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={2}
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black, transparent)",
                  }}
                />
              </div>
              <main
                id="main"
                tabIndex={-1}
                className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16"
              >
                {children}
              </main>
            </div>
            <SiteFooter />
            <MobileCTA />
            <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
