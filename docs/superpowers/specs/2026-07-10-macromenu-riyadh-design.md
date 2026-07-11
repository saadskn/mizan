# MacroMenu Riyadh — Design Document

**Date:** 2026-07-10
**Status:** Approved by user (design + restaurant list)
**Repo:** `macromenu-riyadh` (public, github.com/saadskn) — deployment to Vercel/Netlify is out of scope; user will do it later using README instructions.

## 1. Concept

A single-page "reverse macro calculator" for fitness enthusiasts in Saudi Arabia. Instead of logging what they already ate, users enter the macros they have **left** for the day (protein, carbs, fats, calories) and the app instantly builds real fast-food orders from Riyadh's best-known chains that match those numbers as closely as mathematically possible.

- 100% client-side: no servers, no databases, no accounts. Deployable as static files.
- Bilingual (English / Arabic with full RTL), light and dark themes.
- No photos, no drinks anywhere in the app.

## 2. Tech Stack

| Choice | Value |
|---|---|
| Build tool | Vite |
| UI | React (plain JavaScript + JSX, no TypeScript) |
| Styling | Tailwind CSS |
| Tests | Vitest (matching engine unit tests) |
| Fonts | Inter (Latin) + IBM Plex Sans Arabic (Arabic), Google Fonts |
| Persistence | `localStorage` only (`mm_theme`, `mm_lang`) |
| Hosting target | Static build (`dist/`), host-agnostic; README documents Vercel & Netlify steps |

Node.js LTS will be installed on the development machine via winget (user approved).

## 3. File Structure

```
macromenu-riyadh/
├── docs/superpowers/specs/        # this document + implementation plan
├── index.html
├── package.json
├── vite.config.js
├── README.md                      # includes plain-English deploy steps
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx                    # page composition + search state
    ├── index.css                  # Tailwind + font imports + theme tokens
    ├── components/
    │   ├── TopBar.jsx             # app name + ThemeToggle + LangToggle
    │   ├── ThemeToggle.jsx        # sun/moon switch
    │   ├── LangToggle.jsx         # EN / العربية switch
    │   ├── Hero.jsx               # app name + one-line explanation
    │   ├── MacroForm.jsx          # 4 numeric text inputs + Find My Order button
    │   ├── ResultsGrid.jsx        # responsive card grid
    │   ├── MealCard.jsx           # one combo card
    │   └── MacroBar.jsx           # single color-coded progress bar
    ├── lib/
    │   ├── matching.js            # pure engine: generation, scoring, ranking
    │   └── matching.test.js       # Vitest unit tests
    ├── data/
    │   ├── index.js               # aggregates all chain files, validates shape
    │   └── chains/                # one file per category (burgers-intl.js, chicken.js, …)
    ├── i18n/
    │   └── strings.js             # all UI strings, EN + AR
    └── hooks/
        └── usePersistedState.js   # localStorage-backed state hook
```

Design principle: `lib/matching.js` and `data/` are pure JavaScript with zero React imports — fully testable in isolation. Components are small and single-purpose.

## 4. Data Model

Each menu item:

```js
{
  id: "albaik-nugget-sandwich",   // unique slug
  chain: "Albaik",                // English, never translated
  name: "Nugget Sandwich",        // English, never translated
  category: "main" | "side" | "dessert",
  calories: 340,                  // kcal
  protein: 16,                    // g
  carbs: 38,                      // g
  fats: 14,                       // g
  price_sar: 7,                   // SAR
  estimated: false                // true when macros are calculated guesses
}
```

- **No beverages in the dataset, ever.** Desserts are included but constrained (§6).
- The user's 7 seed items are incorporated (converted to this schema).

### Dataset scope — "The MacroMenu Riyadh 100" (user-approved list)

100 chains/spots verified (this session) to operate in Riyadh, tiered by data quality:

- **Tier 1** — flagship chains with published nutrition data: 10–15 items each.
- **Tier 2** — established chains with partial data: 6–8 items each.
- **Tier 3** — indie/trendy spots: 5–6 carefully estimated items each (`estimated: true`).

Target total: ~700–900 items.

**Burgers — International (10):** McDonald's KSA, Burger King, Hardee's, Five Guys, Shake Shack, Fatburger, Fuddruckers, Johnny Rockets, BurgerFuel, Black Tap
**Burgers — Saudi & Regional (13):** Herfy, Hamburgini, Burgerizzr, Jan Burger, Century Burger, Section-B, Grill It, The Real Burger, Taxi, Salt, Burger Boutique, Nevermind, GUNBUN
**Fried & Grilled Chicken (13):** Albaik, KFC, Texas Chicken, Popeyes, Raising Cane's, Dave's Hot Chicken, Wingstop, Jollibee, Al Tazaj, Buffalo Wild Wings, Buffalo Wings & Rings, ChicKing, Birdlot
**Pizza (6):** Domino's, Pizza Hut, Papa John's, Little Caesars, Maestro Pizza, Pizza Inn
**Sandwiches & Subs (9):** Subway, Kudu, Charleys Philly Steaks, Dank Sandwich, Shwkat, The Sandwich Company, PAO, MAQSAF, Crust Corner
**Shawarma, Saj & Levantine (20):** Shawarmer, Mama Noura, Shawarma House, Shawarma Classic, Shawarma Plus, Shawarmasters, Shawarmix, Shawarma Factory, Golden Saj, Shawarma Jalilah, Usta Asim, Mareez, Assaraya Turkish Restaurant, Alsaaj Alreefi, German Doner Kebab, Barbar, Malak Al Tawouk, Allo Beirut, Zaatar w Zeit, Operation Falafel
**Saudi Traditional & Grills (5):** Al Romansiah, Shawaya House, Hashi Basha, Meat Moot, Smokey Beards Q
**Seafood (4):** London Fish & Chips, Shrimp Nation, Shrimp Shack, Shrimplus
**Asian & Filipino (3):** Sushi Yoshi, Chowking, Mang Inasal
**Healthy (1):** Kcal
**Bakery & Breakfast (6):** Tim Hortons, PAUL, Wooden Bakery, Auntie Anne's, EGGSACTLY, Toastable
**Desserts (10):** Krispy Kreme, Dunkin', Cinnabon, Baskin Robbins, Cold Stone Creamery, House of Donuts, Munch Bakery, Saadeddin, Pinkberry, Häagen-Dazs

Flagged for re-verification during dataset build: Pinkberry, Häagen-Dazs, Mang Inasal. Bench of substitutes if any chain fails re-verification: Karam Elsham, Maki, Kababji, Man'oushe Street, Ayedh Shawarma. Known-closed / rejected during research: Steak 'n Shake (closed KSA ~2017), "Wahat Al Rabie", "Sandwicher" (could not be confirmed).

**Amendments during build:** Mang Inasal failed Riyadh re-verification (Philippines-only) and was replaced by Wakame (verified, wakame-ksa.com). **2026-07-11:** at the user's request, 19 chains were removed from the shipped roster — Shake Shack, Fatburger, BurgerFuel, Hamburgini, The Real Burger, Taxi, Salt, Nevermind, ChicKing, PAO, Crust Corner, Shawarma Plus, Shawarmasters, Shawarmix, Shawarma Factory, Assaraya Turkish Restaurant, Meat Moot, London Fish & Chips, Wakame — leaving **81 chains / ~540 items** (roster-lock tests updated accordingly).

### Sourcing methodology (per item)

1. Official Saudi nutrition data (chain's KSA site/app) — preferred.
2. Global published data for the exact same item.
3. Calculated estimate from the item's published calories and description (`estimated: true`).

Prices in SAR from KSA menus/delivery listings; approximate is acceptable, marked no differently.

## 5. Matching Engine (`lib/matching.js`)

### Combo generation

- For each chain independently, enumerate all **multisets** of its items of size 1–3.
  - Multisets ⇒ duplicates allowed (e.g., 2× Nugget Sandwich) and no order-permutation duplicates ({A,B} ≡ {B,A}).
- Constraint applied during generation: **at most 1 item with `category: "dessert"`** per combo.
  - Intended consequence: chains whose menu is entirely desserts (e.g., Krispy Kreme) only ever produce single-item combos. Dessert-leaning chains with savory items (e.g., Dunkin' breakfast sandwiches → `main`) are unaffected.
- Scale check: ~900 items across 100 chains ⇒ well under ~100k candidate combos; brute force scores all in a few ms. No workers, no heuristics.

### Scoring — Match %

Let the user's filled-in targets be a subset of {protein, carbs, fats, calories}; empty fields are ignored entirely (their weight redistributes automatically by taking the mean over filled fields only). At least one field is required.

For each filled target `t` with goal `g` and combo total `v`:

```
distance_t = |v − g| / max(g, floor_t)      floor = 10 for macros (g), 100 for calories
error_t    = min(distance_t, 1)             // cap: 100%+ off contributes fully
Match %    = round(100 × (1 − mean(error_t over filled targets)))
```

- Overshoot and undershoot are penalized identically (absolute distance).
- The floors keep tiny goals (e.g., "2 g fats left") from exploding the relative error.
- All filled targets weigh equally.

### Ranking & variety rules (applied in order)

1. Score all combos; sort by Match % descending.
2. **Near-duplicate collapse (per chain):** two combos from the same chain are near-duplicates when
   `|multiset intersection| / max(|A|, |B|) ≥ 2/3`, **or** when all four macro totals are within
   rounding-level tolerance (2 g / 20 kcal absolute, or 4% relative — price ignored); keep only the better-ranked one.
   (So {A,B,C} vs {A,B,D} collapse; {A,B} vs {A,C} both survive — "significantly diverse" orders from one chain may both appear.
   The totals rule catches size-variant duplicates that share no item ids, e.g. "Chickenjoy (2 pc)" vs 2× "Chickenjoy (1 pc)".)
3. **Chain cap:** at most **10** combos from any single chain.
4. Return the **top 25**.

Tie-break on equal Match %: lower total price first, then fewer items.

## 6. UI / UX

Single page, top to bottom:

1. **Top bar:** app name left; theme toggle (sun/moon) + language toggle (EN / العربية) top-right. Mirrored in RTL.
2. **Hero:** "MacroMenu Riyadh" elegantly rendered + one-line explanation in the active language.
3. **Input panel:** four labeled numeric **text boxes** (no sliders): Protein (g), Carbs (g), Fats (g), Calories (kcal). `inputmode="decimal"`, non-numeric input rejected, sane range 0–10,000. Prominent button: **"Find My Order" / "ابحث عن وجبتي"**.
4. **Results:** nothing renders until the button is clicked. On click: validate (≥1 field filled, else friendly inline message in active language), compute, smooth-scroll to the grid.

### Results grid

Responsive: 1 column (<640px), 2 (≥640px), 3 (≥1024px). 25 cards max.

### Meal card (strict vertical hierarchy, no photos)

1. **Restaurant name** — bold, prominent (English always). Match % badge on the opposite corner.
2. **Combo items** — English always, joined with "+", duplicates shown as "2× item".
3. **Macro bars** — all four rows always shown (amended 2026-07-11; originally only filled targets). Filled targets: color-coded bar with "total / goal" numbers. Unfilled targets: neutral slate bar with the combo's total only.
   - Fill width: `min(total/goal, 1) × 100%`.
   - Color by |distance| from goal: ≤10% → emerald/mint (on-target), 10–30% → amber, >30% → soft red. Applies to both over- and undershoot.
4. **Footer:** item count (left) and **total price in SAR** (right), e.g., "35 SAR".

### Theme (Tailwind design tokens)

| Token | Light | Dark |
|---|---|---|
| Page background | #FAFAF8 | #1A2332 |
| Card background | #FFFFFF | #232F42 |
| Primary text | #1E293B | #F1F5F9 |
| Muted text | #64748B | #94A3B8 |
| Accent / CTA | #10B981 (emerald) | #34D399 (radiant mint) |
| Soft accent | #D1FAE5 | #7DD3B0 (sage) |
| Bar amber / red | #F59E0B / #F87171 | same |

Dark mode is deep slate — never pitch black. Theme switching via a `dark` class on `<html>`; default follows `prefers-color-scheme`, user choice persisted in `localStorage.mm_theme`.

## 7. Internationalization

- All UI strings live in `i18n/strings.js` as `{ en: {…}, ar: {…} }`. No hard-coded UI text in components.
- Arabic mode sets `<html dir="rtl" lang="ar">` — the entire layout mirrors.
- Numbers always use Western digits (123) in both languages.
- **Exception (hard rule):** `chain` and `name` from the dataset are always rendered in English, wrapped in `dir="ltr"` spans inside RTL layout.
- Language persisted in `localStorage.mm_lang`; defaults: English + system theme on first visit.

## 8. Error Handling

- All four fields empty → inline localized message under the button; no results.
- Non-numeric characters filtered on input; values clamped to 0–10,000.
- Zero is a valid goal (floors in the formula handle it).
- Dataset validated at module load in dev: unique ids, positive macros, category ∈ {main, side, dessert} — a bad entry throws at build/test time, not silently at runtime.
- There is always at least one result if any field is filled (scoring is relative, never empty).

## 9. Testing

**Unit (Vitest, `lib/matching.test.js`):**
- Scoring: exact hit → 100%; known distances → expected %; overshoot == undershoot; floors for tiny/zero goals; cap at 100% error.
- Weight redistribution: only-filled-fields averaging.
- Generation: multiset counts for small fixtures; no permutation duplicates; ≤1 dessert enforced.
- Ranking: near-duplicate collapse rule (2/3 overlap); 10-per-chain cap; top-25 cut; tie-breaks.
- Dataset shape validation passes for the real data.

**Manual browser checklist:** light/dark toggle, EN↔AR full RTL flip, persistence across reload, mobile (375px) / tablet / desktop widths, real macro searches sanity-checked, no drinks anywhere, meal/chain names stay English in Arabic mode.

## 10. Delivery Plan

1. Install Node.js LTS (winget).
2. Scaffold Vite + React + Tailwind.
3. Build engine + tests first, then dataset (researched in tiers), then UI.
4. Verify with browser + full manual checklist.
5. Clean git history; README with local-run and Vercel/Netlify deploy steps in plain English.
6. User creates empty public GitHub repo `macromenu-riyadh` (exact link + settings provided at that moment); push over HTTPS with existing stored credentials.

## 11. Non-Goals

- No drinks, no photos, no backend, no accounts, no meal logging/history.
- No deployment by the assistant — user deploys later via README.
- No restaurant logos/trademarks beyond plain-text names.
