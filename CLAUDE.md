# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm install          # install dependencies (requires Node.js LTS)
npm run dev          # Vite dev server
npm test             # run all tests once (vitest run)
npx vitest run src/lib/matching.test.js   # run a single test file
npm run build        # production build to dist/
npm run preview      # serve the production build
```

There is no lint setup. Tests use Vitest via the `test` key in `vite.config.js` (environment: node). On this machine Node was installed via winget; if a fresh shell can't find `node`, refresh PATH first:
`$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')`

The engine and dataset are plain ES modules with no React imports, so real search scenarios can be exercised headlessly in Node (useful for sanity-checking data changes). On Windows, absolute imports in an ad-hoc `.mjs` script must be `file:///C:/...` URLs — bare `C:/...` paths throw `ERR_UNSUPPORTED_ESM_URL_SCHEME`.

Deployment: GitHub Pages at https://saadskn.github.io/mizan/ via `.github/workflows/deploy.yml` (runs tests, builds with `DEPLOY_TARGET=gh-pages` to get the `/mizan/` base path, publishes on every push to main). Root-hosted deploys (Vercel/Netlify) still work because the base path is env-gated in `vite.config.js`.

## What this app is

**Mizan · ميزان** (tagline: كل بميزان) — a fully client-side "reverse macro calculator": the user enters remaining daily macros (protein/carbs/fats/calories) and the app brute-forces real 1–3 item combos from Riyadh fast-food chains, ranked by closeness to those targets. No backend, no router, no state library. Repo, package, and URL are all `mizan` (renamed from the working name `macromenu-riyadh` on 2026-07-11 — old Pages links are dead, git redirects still work). Roster and item counts are locked by tests in `src/data/index.test.js` — treat those assertions as the source of truth, and update them deliberately with any roster change.

Authoritative design docs: `docs/superpowers/specs/2026-07-10-macromenu-riyadh-design.md` (approved spec) and `docs/superpowers/plans/2026-07-10-macromenu-riyadh.md` (implementation plan). When behavior questions arise, the spec wins.

## Architecture

Three layers with strict boundaries:

1. **Engine — `src/lib/matching.js`.** Pure functions, deliberately zero React imports (this is asserted by convention and relied on by tests). `findMatches(menu, goals, opts)` is the single entry point: groups items by chain → `generateCombos` (all multisets of size 1–3, duplicates allowed, no permutation duplicates, max ONE `dessert`-category item per combo) → scores each with `scoreCombo` → sorts (score desc, then cheaper, then fewer items) → collapses same-chain near-duplicates (`overlapRatio ≥ 2/3` computed on **family-unit multisets** — items may carry optional `family` + `units` tags so size variants normalize, e.g. quarter=1/half=2/whole=4 chicken, 6-inch=1/footlong=2 — OR `totalsSimilar`: all four macro totals within 2 g / 20 kcal / 4%, OR shares-an-item + identical scored outcome) → caps 10 results per chain → returns top 25. When adding size variants of an existing item, tag both with the same `family` and proportional `units` or the dedup can't see them. Scoring: per filled goal, `error = min(|total − goal| / max(goal, floor), 1)` with floors 10 g for macros / 100 kcal for calories; Match % = `100 × (1 − mean(errors))`. Empty/unfilled goals are excluded from the mean (weight redistributes automatically). Overshoot and undershoot are penalized identically.

2. **Data — `src/data/chains/*.js` aggregated by `src/data/index.js`.** One file per cuisine category; each default-exports an item array. `validateMenu` enforces the schema (`id, chain, name, category: main|side|dessert, calories, protein, carbs, fats, price_sar, estimated`) plus a beverage-name regex ban — **no drinks may ever enter the dataset**. `estimated: true` marks calculated macros vs. published nutrition data. Tests in `src/data/index.test.js` lock the roster: exactly 96 chains (see the spec amendments through 2026-07-12 — every block is reconciled against its live HungerStation Malqa menu), ≥5 items per chain, 2500–3500 items total — adding/removing a chain means updating those assertions deliberately. Items may carry a per-item `cuisine` override (and `src/data/index.js` has a per-chain override map for the Levantine restaurants); resolution is item > chain > file default. Item ids are kebab-case `<chain-slug>-<item-slug>` and must be globally unique.

3. **UI — `src/App.jsx` + `src/components/`.** App owns all state: theme/lang via `usePersistedState` (localStorage keys `mm_theme`, `mm_lang`; defaults: system color scheme + English), raw input strings, parsed goals, the cuisine checklist (`CategoryFilter` — multi-select chips, all on by default; the aggregator stamps a `cuisine` field on every item and the menu is filtered before `findMatches`), and results. Results only render after the user clicks Find My Order — never automatically. Components receive `t = STRINGS[lang]` and render no hard-coded UI text.

## Design language ("sadu heritage" — user-approved, don't drift from it)

- **Tokens live in `@theme` in `src/index.css`** and are the only source of color. Light: `oat` page, white cards, `ink`/`mut`/`faint` text, `oasis`(+`oasis-2`) green, `sand`/`sand-lt`/`edge` neutrals, `date` brown, `warm`/`clay` for misses. Dark: iOS-grey surfaces (`olive*` tokens, #1C1C1E family) with `cream*` text and `mint2`/`sand-dk`/`date-lt` accents.
- **Type:** `font-display` (Fraunces) for the logo, restaurant names, prices, dial %, and section headings; Inter/IBM Plex Sans Arabic for everything else.
- **Signature elements:** the Najdi roofline SVG in the Hero (draws in via `.najdi-line`), woven textures (`.weave-*` utilities) for macro bars and the results divider, `.stitched` dotted card top edges, and the Mizan dial in `MealCard.jsx` — a semicircular gauge whose needle swings to the match % with a JS count-up.
- **Backgrounds:** two fixed layers behind everything — `.bg-lattice` (faint sadu diamond grid) and `.bg-wash` (drifting warm radial gradients; the drift is intentionally disabled in dark mode because low-alpha gradients band/shimmer when animated on dark surfaces — don't re-enable).
- **Motion rules:** primitives are `.anim-rise/.anim-word/.anim-weave/.anim-grow-x` plus hover-only loops (logo tilt, dial sway, button sheen). Pacing: 0.6–1.2s, springy ease-outs, nothing loops unless hovered. Entrance animations and count-ups must start **when the element scrolls into view** (`useInView` hook), never on mount timers — users miss timer-based fills during the post-search scroll. The `prefers-reduced-motion` guard freezes all animations (the user's own Windows machine had reduced motion enabled once — if "animations stopped working", check that before debugging).
- The results grid remounts per search (`key={searchId}` in `App.jsx`) so the sequence replays on every search.

## Non-negotiable product rules (from the approved spec)

- Restaurant `chain` and item `name` values are always English and never translated; in Arabic (RTL) mode they are wrapped in `dir="ltr"` spans.
- Arabic mode flips the whole layout (`<html dir="rtl" lang="ar">`); numbers stay Western digits (123) in both languages — no locale digit conversion.
- All UI strings live in `src/i18n/strings.js` with identical `en`/`ar` key sets (enforced by a parity test). The trigger button copy is pinned by test: "Find My Order" / "ابحث عن وجبتي".
- Dark mode is class-based (`.dark` on `<html>`; Tailwind v4 `@custom-variant` in `src/index.css`) using iOS-style neutral grey tokens confusingly still named `olive`/`olive-card`/`olive-edge`/`olive-track` (#1C1C1E family — renaming them would churn every component; values live in `@theme` in `src/index.css`). Warm accents (mint2, sand-dk, date-lt) stay.
- Macro bar colors key off distance from goal: ≤10% emerald, ≤30% amber, >30% soft red (same floors as the engine).
- Dessert-only chains (e.g., Krispy Kreme) intentionally produce single-item results — max-one-dessert is a feature, not a bug.
