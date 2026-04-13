# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for **Arnie AI** — Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion, with Playwright e2e tests. Deployment target: Vercel.

## Commands

```bash
npm run dev           # start dev server on :3000
npm run build         # production build (must stay warning-free)
npm run start         # serve production build
npm run lint          # next lint
npm run test:e2e      # run Playwright e2e suite (auto-starts dev server)
npx playwright test e2e/landing-page.spec.ts -g "growth video"   # run one test by name
npx playwright test --headed --project=chromium                   # run headed
```

Playwright's `webServer` config auto-starts `npm run dev` and reuses an existing server locally, so you don't need to run it manually before tests.

## Architecture

### TDD contract via `lib/constants.ts`
This is the most important file in the repo. Tests in `e2e/landing-page.spec.ts` and components under `components/` both read the same URLs / mailto strings (Skool, YouTube, email, consultation mailto). **If you change a CTA destination, update `lib/constants.ts` — never hardcode these URLs in components or tests.** Drift between the two is exactly what the test suite exists to catch.

### Page composition
`app/page.tsx` composes the full landing page from section components in `components/`: `Navbar`, `Hero`, `Services`, `GrowthVideo`, `Community`, `Footer`. Each section owns its own layout and styling; there is no shared section wrapper. Section anchors (`#services`, `#community`, `#growth`, `#workshops`) are referenced by the Navbar and by Playwright's scroll assertions — don't rename them without updating both.

### Client vs server components
Everything is a server component by default. `components/GrowthVideo.tsx` is the only `"use client"` file because it uses Framer Motion's `whileInView`. Keep the client boundary tight — if you add more animated sections, prefer isolating `"use client"` to the animated subtree rather than promoting a parent.

### Styling system
Tailwind with a small extension in `tailwind.config.ts` (`neon.blue/purple/pink`). Reusable button classes (`btn-primary`, `btn-secondary`) and background utilities (`bg-streaks`, `glow-text`) live in `app/globals.css` as `@layer`-free custom classes — use these instead of re-creating gradient buttons inline. Visual baseline is `style.png` at the repo root: dark background with diagonal blue/purple neon streaks.

### Assets
Hero/community images and the growth video live in `/public`. The source asset `video (stock animation).mp4` at the repo root was copied to `/public/video-stock-animation.mp4` during scaffold — the Playwright spec asserts on the hyphenated filename, so keep the public copy in sync if the source is updated.

### Test structure
`e2e/landing-page.spec.ts` is organized as one `describe` with a `beforeEach` that navigates to `/`. The video test uses `video.evaluate(...)` to read the live DOM properties (`autoplay`, `loop`, `muted`) rather than HTML attributes, because React renders `autoPlay` as a property. When adding new CTAs, prefer `getByRole('link', { name: ... })` with a regex over CSS selectors — matches the existing pattern and survives copy tweaks.
