# feranmi.dev

My portfolio. Built to look like a page torn out of a notebook, because every other developer portfolio looks like the same dark dashboard.

**Design direction:** ruled paper, ink, and margin notes.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with a semantic token layer (`--paper`, `--ink`, `--accent`, `--rule`)
- **Fraunces** for display, **DM Sans** for body, **Caveat** for margin annotations
- **framer-motion** for the footer reveal, everything else is CSS
- All doodles, the mascot, the splash and the pencil cursor are hand-drawn SVG

## Notes to future me

- Design tokens and every keyframe live in `app/globals.css`. Components never reference a raw hex.
- `bg-ink` / `text-paper` self-invert in dark mode because the tokens swap. That is why the nav needs no `dark:` variants.
- The nav's gooey pinch is an SVG blur plus alpha-threshold filter, not a border radius. Tuning knobs are `stdDeviation` and the `feColorMatrix` alpha row.
- The body carries a 32px ruled-line background. Body copy uses `leading-8` so text sits **on** the rules.
- The pencil cursor is a pure CSS `data:` URI with hotspot `4 28` at the graphite tip. No JS, no lag.
- `dev` runs with `NODE_OPTIONS='--max-old-space-size=3072'` because the Turbopack dev server once leaked past 6GB. `dev:webpack` is the fallback bundler.
- Never run `next build` while `next dev` is running. They share `.next` and it corrupts the dev manifest. Use `npx tsc --noEmit` to verify instead.

## Scripts

```bash
npm run dev          # dev server, heap capped
npm run dev:webpack  # fallback bundler if Turbopack misbehaves
npm run build
npx tsc --noEmit     # type-check without touching .next
```
