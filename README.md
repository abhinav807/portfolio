# Abhinav Goyal — Portfolio

Personal portfolio site for **Abhinav Goyal** — student builder, developer and founder of
[GoldenHour](https://goldenhourv1.vercel.app/), based in Delhi NCR, India.

## What's on the site

- Hero with contact CTAs and a terminal-style status card
- About + current focus areas
- Building & Experience (client websites, GoldenHour, independent projects)
- Websites I've Built — real deployed sites for organizations
- Things I've Built — featured project cards with generated UI previews
- Building in Public — GitHub profile with live contribution activity
- GoldenHour — featured initiative + current event (GoldenHour V1, 14 Nov 2026)
- Events & Hackathons
- Skills, Currently Exploring and education
- Contact CTA and footer

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4 + shadcn/ui primitives
- [Motion](https://motion.dev) for reveal animations (with reduced-motion support)
- Magic UI components (flickering grid, blur fade)
- Deployed on Vercel

## Getting started locally

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
pnpm build
pnpm start
```

## Editing content

All copy, projects, links, skills and events live in a single file:

```
src/data/site.ts
```

Change values there and the whole site updates — no other file needs editing for content
changes.

## Design notes

- Dark-first, monochrome palette with a single restrained gold accent tied to GoldenHour
- Project previews are generated with CSS/SVG — no stock images, no AI-generated faces
- All external links point at real, verified profiles and deployments
- Semantic HTML, keyboard focus states, skip link and reduced-motion support
