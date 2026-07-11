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

Deployment is user-managed (Vercel/Netlify import the GitHub repo; Vite auto-detected, build `npm run build`, publish dir `dist`). Don't set up CI or deploy config unless asked.

## What this app is

A fully client-side "reverse macro calculator": the user enters remaining daily macros (protein/carbs/fats/calories) and the app brute-forces real 1–3 item combos from 100 Riyadh fast-food chains, ranked by closeness to those targets. No backend, no router, no state library.

Authoritative design docs: `docs/superpowers/specs/2026-07-10-macromenu-riyadh-design.md` (approved spec) and `docs/superpowers/plans/2026-07-10-macromenu-riyadh.md` (implementation plan). When behavior questions arise, the spec wins.

## Architecture

Three layers with strict boundaries:

1. **Engine — `src/lib/matching.js`.** Pure functions, deliberately zero React imports (this is asserted by convention and relied on by tests). `findMatches(menu, goals, opts)` is the single entry point: groups items by chain → `generateCombos` (all multisets of size 1–3, duplicates allowed, no permutation duplicates, max ONE `dessert`-category item per combo) → scores each with `scoreCombo` → sorts (score desc, then cheaper, then fewer items) → collapses same-chain near-duplicates (`overlapRatio ≥ 2/3` on item multisets, OR `totalsSimilar` — all four macro totals within 2 g / 20 kcal / 4%, which catches size-variant duplicates like "2 pc" vs 2× "1 pc" that share no item ids) → caps 10 results per chain → returns top 25. Scoring: per filled goal, `error = min(|total − goal| / max(goal, floor), 1)` with floors 10 g for macros / 100 kcal for calories; Match % = `100 × (1 − mean(errors))`. Empty/unfilled goals are excluded from the mean (weight redistributes automatically). Overshoot and undershoot are penalized identically.

2. **Data — `src/data/chains/*.js` aggregated by `src/data/index.js`.** One file per cuisine category; each default-exports an item array. `validateMenu` enforces the schema (`id, chain, name, category: main|side|dessert, calories, protein, carbs, fats, price_sar, estimated`) plus a beverage-name regex ban — **no drinks may ever enter the dataset**. `estimated: true` marks calculated macros vs. published nutrition data. Tests in `src/data/index.test.js` lock the roster: exactly 91 chains (originally 100; user-directed removals and additions on 2026-07-11 — see the spec amendments), ≥5 items per chain, 450–1000 items total — adding/removing a chain means updating those assertions deliberately, and swaps should come from the bench list in the spec (§4). Item ids are kebab-case `<chain-slug>-<item-slug>` and must be globally unique.

3. **UI — `src/App.jsx` + `src/components/`.** App owns all state: theme/lang via `usePersistedState` (localStorage keys `mm_theme`, `mm_lang`; defaults: system color scheme + English), raw input strings, parsed goals, and results. Results only render after the user clicks Find My Order — never automatically. Components receive `t = STRINGS[lang]` and render no hard-coded UI text.

## Non-negotiable product rules (from the approved spec)

- Restaurant `chain` and item `name` values are always English and never translated; in Arabic (RTL) mode they are wrapped in `dir="ltr"` spans.
- Arabic mode flips the whole layout (`<html dir="rtl" lang="ar">`); numbers stay Western digits (123) in both languages — no locale digit conversion.
- All UI strings live in `src/i18n/strings.js` with identical `en`/`ar` key sets (enforced by a parity test). The trigger button copy is pinned by test: "Find My Order" / "ابحث عن وجبتي".
- Dark mode is class-based (`.dark` on `<html>`; Tailwind v4 `@custom-variant` in `src/index.css`) using deep slate tokens (`page-dark`, `card-dark`, `edge-dark`) — never pitch black. Custom theme colors are defined in `@theme` in `src/index.css`.
- Macro bar colors key off distance from goal: ≤10% emerald, ≤30% amber, >30% soft red (same floors as the engine).
- Dessert-only chains (e.g., Krispy Kreme) intentionally produce single-item results — max-one-dessert is a feature, not a bug.
