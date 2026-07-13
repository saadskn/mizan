# Mizan three-section navigation — design

**Date:** 2026-07-13 · **Status:** approved by Saad ("you are good to go", minus the
prefill button, plus the disclaimer footer on every page)

Adds hamburger-menu navigation and two new pages to the existing single-page app.
The matching engine, dataset, and every existing product rule (bilingual parity,
RTL, English item names, no drinks, roster lock) are unchanged.

## 1. Navigation

- A hamburger (☰) button joins the header controls next to the theme and language
  toggles. Tapping it opens a small dropdown/slide-in menu (from the right in LTR,
  from the left in RTL) with three entries: **Find My Order**, **Daily Needs**,
  **Food Spots**. The current page is highlighted; selecting an entry closes the menu.
- Routing is a hand-rolled hash router (no new dependency): `#/` Find My Order
  (home, unchanged), `#/needs` calculator, `#/spots` directory,
  `#/spots/<chain-slug>` chain detail. Back button and deep links work. Unknown
  hashes fall back to `#/`.
- Finder state (inputs, categories, results) lives in `App.jsx` already and is not
  reset by navigating away and back.
- The existing disclaimer footer ("numbers are not accurate…", `disclaimer` string)
  renders on **every** page, not just search results.

## 2. Daily Needs calculator (`#/needs`)

Inputs: gender (male/female), age (years), height (cm), weight (kg), weekly strain
(5 activity levels). Validation: age 10–100, height 100–250, weight 30–300; the
compute button disables until all inputs are valid.

Math — pure functions in `src/lib/needs.js`, unit-tested, zero React imports
(same discipline as `matching.js`):

- BMR (Mifflin-St Jeor): men `10w + 6.25h − 5a + 5`; women `10w + 6.25h − 5a − 161`.
- TDEE = BMR × multiplier: sedentary 1.2, light (1–3×/wk) 1.375,
  moderate (3–5×/wk) 1.55, hard (4–6×/wk) 1.725, athlete (daily/2×daily) 1.9.
- Protein range: 1.6–2.2 g × weight kg.
- Fat range: 20–25% of TDEE for men, 25–30% for women (÷9 for grams).
- Carb range: remaining calories ÷4, paired so ends are consistent
  (min carbs = TDEE − max protein·4 − max fat·9; max carbs = TDEE − min protein·4 − min fat·9).

Output: daily calories plus three range cards ("Protein 128–176 g") in the sadu
design language. Ranges only — no single prescriptive number. No prefill/handoff
button to the finder (explicitly cut by Saad). Inputs persist in localStorage
(`mm_needs`) via the existing `usePersistedState`.

## 3. Food Spots directory (`#/spots` and `#/spots/<slug>`)

- Grid of all 96 chains: **logo on top, chain name below**, plus cuisine label
  (the chain's most common item cuisine — chains span cuisines via per-item
  overrides) and item count. Sorted alphabetically.
- Logos are static files at `public/logos/<chain-slug>.png` (served under the
  app's base path). Recognizable international chains get real logos now; any
  chain without a file falls back automatically (img `onError`) to a monogram
  tile — initials in a circle, background color hashed from the chain name — so
  local spots look intentional until their logos are added.
- `slugify(chain)` lives with the data layer; a test asserts all 96 slugs are unique.
- Chain detail page: chain name header, back link to the grid, menu as a table
  grouped Mains / Sides / Desserts with columns item · calories · protein · carbs ·
  fat · price (SAR). Estimated items keep the `~` marker convention. Item names
  render LTR inside RTL layout per the existing spec rule.

## 4. Meal Builder (`#/build`) — amendment, approved 2026-07-13

Fourth ☰ entry. One page, two steps: a search box filters the 96 chains
(compact rows: logo · name · item count; tap to lock in), then the chain's menu
renders grouped Mains/Sides/Desserts with a [− n +] stepper per item (cap 9).
A sticky bottom bar shows live totals — calories, protein, carbs, fats, SAR —
recomputed on every tap, no submit button. One restaurant per meal ("Change
spot" clears the tray); the in-progress meal persists in localStorage
(`mm_build`). Estimated items keep the `~` marker; the totals get `~` when any
counted item is estimated. Same bilingual/RTL and disclaimer-footing rules.

Also approved: the ×1.725 activity label reads "Hard · 6–7×/wk" (was 4–6),
removing the numeric overlap with Moderate · 3–5; multipliers unchanged.

## Cross-cutting

- All new UI strings live in `src/i18n/strings.js` with en/ar key parity
  (existing parity test covers them).
- New tests: `needs.test.js` (formula cases for both genders, multiplier table,
  range pairing), slug uniqueness, router hash parsing.
- No changes to `matching.js`, chain data files, or the roster-lock assertions.
