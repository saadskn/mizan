# MacroMenu Riyadh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a client-side React SPA that reverse-matches remaining daily macros to real fast-food combos from 100 Riyadh chains, bilingual EN/AR with RTL, light/dark themes, pushed to GitHub.

**Architecture:** Pure-function matching engine (`src/lib/matching.js`) with zero React imports, a static tiered dataset (`src/data/chains/*.js`, ~700–900 items), and small single-purpose React components. Brute-force multiset enumeration (1–3 items per chain) scored by an equal-weight distance formula; results deduplicated, chain-capped, top-25.

**Tech Stack:** Vite, React 19 (plain JS + JSX), Tailwind CSS v4 (`@tailwindcss/vite`), Vitest, Google Fonts (Inter + IBM Plex Sans Arabic).

**Spec:** `docs/superpowers/specs/2026-07-10-macromenu-riyadh-design.md` (approved). The spec is the source of truth; this plan implements it.

## Global Constraints

- Project root: `C:\Users\saads\macromenu-riyadh` (git repo on branch `main`, spec already committed).
- Environment: Windows 11, PowerShell. No Node.js installed until Task 1.
- Restaurant `chain` and item `name` values are **always English**, never translated, wrapped in `dir="ltr"` when rendered in RTL.
- **No beverages in the dataset, ever** (no colas, juices, coffees, teas, shakes, smoothies, water).
- Max 1 `category: "dessert"` item per combo (engine-enforced).
- Numbers render with Western digits (123) in both languages — plain JS number formatting, no locale digit conversion.
- localStorage keys: `mm_theme`, `mm_lang`. Defaults: system color scheme + English.
- All UI strings come from `src/i18n/strings.js`; no hard-coded UI text in components.
- Item schema (exact keys): `{ id, chain, name, category: "main"|"side"|"dessert", calories, protein, carbs, fats, price_sar, estimated }`.
- Every git commit message ends with the trailer line: `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.
- Commands below are PowerShell unless noted. Working directory is the project root.

---

### Task 1: Install Node.js LTS and verify toolchain

**Files:** none (system setup).

**Interfaces:**
- Produces: working `node` / `npm` on PATH for all later tasks.

- [ ] **Step 1: Install Node.js LTS via winget**

Run:
```powershell
winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements
```
Expected: "Successfully installed".

- [ ] **Step 2: Refresh PATH in the current session and verify**

New PowerShell processes may not see the updated PATH yet. Run:
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')
node --version; npm --version
```
Expected: `v22.x.x` (or newer LTS) and a `10.x`+ npm version. If `node` is still not found, use the absolute path `& "$env:ProgramFiles\nodejs\node.exe" --version` to confirm installation, and prepend `$env:ProgramFiles\nodejs` to `$env:Path` in each later session.

---

### Task 2: Scaffold Vite + React + Tailwind v4 + Vitest

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `.gitignore`, `src/main.jsx`, `src/App.jsx` (placeholder), `src/index.css`

**Interfaces:**
- Produces: `npm run dev|build|test` all working; Tailwind v4 with class-based dark mode (`.dark` on `<html>`); custom theme colors `page`, `page-dark`, `card-dark`, `edge-dark`, `sage`.

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "macromenu-riyadh",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.0",
    "@vitejs/plugin-react": "^4.5.0",
    "tailwindcss": "^4.1.0",
    "vite": "^7.0.0",
    "vitest": "^3.2.0"
  }
}
```

- [ ] **Step 2: Write `vite.config.js`**

```js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'node',
  },
});
```

- [ ] **Step 3: Write `.gitignore`**

```
node_modules/
dist/
.superpowers/
```

- [ ] **Step 4: Write `index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MacroMenu Riyadh</title>
    <meta name="description" content="Reverse macro calculator: turn your remaining daily macros into a real Riyadh fast-food order." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Write `src/index.css`**

```css
@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-page: #fafaf8;
  --color-page-dark: #1a2332;
  --color-card-dark: #232f42;
  --color-edge-dark: #324158;
  --color-sage: #7dd3b0;
  --font-sans: 'Inter', 'IBM Plex Sans Arabic', ui-sans-serif, system-ui, sans-serif;
}

html[lang='ar'] body {
  font-family: 'IBM Plex Sans Arabic', 'Inter', ui-sans-serif, system-ui, sans-serif;
}
```

- [ ] **Step 6: Write `src/main.jsx`**

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 7: Write placeholder `src/App.jsx`**

```jsx
export default function App() {
  return (
    <div className="min-h-screen bg-page dark:bg-page-dark text-slate-800 dark:text-slate-100 p-8">
      MacroMenu Riyadh — scaffold OK
    </div>
  );
}
```

- [ ] **Step 8: Install dependencies and verify build**

Run: `npm install` then `npm run build`
Expected: `vite build` completes with `dist/` output, no errors.

- [ ] **Step 9: Verify test runner works (no tests yet)**

Run: `npx vitest run --passWithNoTests`
Expected: exits 0, "No test files found".

- [ ] **Step 10: Commit**

```powershell
git add -A
git commit -m @'
chore: scaffold Vite + React + Tailwind v4 + Vitest

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
'@
```

---

### Task 3: Matching engine — totals and scoring (TDD)

**Files:**
- Create: `src/lib/matching.js`, `src/lib/matching.test.js`

**Interfaces:**
- Produces:
  - `FLOORS = { protein: 10, carbs: 10, fats: 10, calories: 100 }`
  - `comboTotals(items) -> { protein, carbs, fats, calories, price_sar }` (sums; items = array of dataset items)
  - `scoreCombo(totals, goals) -> integer 0–100`. `goals` may contain any subset of `{protein, carbs, fats, calories}` as finite numbers; missing/`null`/`undefined` keys are ignored. Formula per spec §5: `error = min(|v−g| / max(g, floor), 1)`, `score = round(100 × (1 − mean(errors over filled goals)))`.

- [ ] **Step 1: Write failing tests in `src/lib/matching.test.js`**

```js
import { describe, it, expect } from 'vitest';
import { FLOORS, comboTotals, scoreCombo } from './matching.js';

const item = (over = {}) => ({
  id: 'x', chain: 'X', name: 'X', category: 'main',
  calories: 100, protein: 10, carbs: 10, fats: 5, price_sar: 10, estimated: false,
  ...over,
});

describe('comboTotals', () => {
  it('sums macros and price across items', () => {
    const t = comboTotals([
      item({ calories: 340, protein: 16, carbs: 38, fats: 14, price_sar: 7 }),
      item({ calories: 220, protein: 18, carbs: 12, fats: 11, price_sar: 9 }),
    ]);
    expect(t).toEqual({ calories: 560, protein: 34, carbs: 50, fats: 25, price_sar: 16 });
  });
});

describe('scoreCombo', () => {
  it('returns 100 for an exact hit on all four targets', () => {
    const totals = { protein: 30, carbs: 40, fats: 15, calories: 430, price_sar: 20 };
    expect(scoreCombo(totals, { protein: 30, carbs: 40, fats: 15, calories: 430 })).toBe(100);
  });

  it('scores a single filled target by relative distance', () => {
    // |30-40| / 40 = 0.25 -> 75
    expect(scoreCombo({ protein: 30, carbs: 0, fats: 0, calories: 0 }, { protein: 40 })).toBe(75);
  });

  it('penalizes overshoot and undershoot identically', () => {
    const under = scoreCombo({ protein: 30, carbs: 0, fats: 0, calories: 0 }, { protein: 40 });
    const over = scoreCombo({ protein: 50, carbs: 0, fats: 0, calories: 0 }, { protein: 40 });
    expect(under).toBe(over);
  });

  it('ignores unfilled targets and averages only filled ones', () => {
    // protein exact (err 0), calories |250-500|/500 = 0.5 -> mean 0.25 -> 75
    const totals = { protein: 40, carbs: 999, fats: 999, calories: 250 };
    expect(scoreCombo(totals, { protein: 40, calories: 500 })).toBe(75);
  });

  it('applies the 10 g floor to tiny macro goals', () => {
    // |7-2| / max(2,10) = 0.5 -> 50
    expect(scoreCombo({ protein: 0, carbs: 0, fats: 7, calories: 0 }, { fats: 2 })).toBe(50);
  });

  it('handles a zero goal via the floor', () => {
    // |5-0| / max(0,10) = 0.5 -> 50
    expect(scoreCombo({ protein: 0, carbs: 5, fats: 0, calories: 0 }, { carbs: 0 })).toBe(50);
  });

  it('applies the 100 kcal floor to calories', () => {
    // |100-50| / max(50,100) = 0.5 -> 50
    expect(scoreCombo({ protein: 0, carbs: 0, fats: 0, calories: 100 }, { calories: 50 })).toBe(50);
  });

  it('caps a single error at 100%', () => {
    // |100-10| / 10 = 9 -> capped at 1 -> 0
    expect(scoreCombo({ protein: 100, carbs: 0, fats: 0, calories: 0 }, { protein: 10 })).toBe(0);
  });

  it('exports the exact floors from the spec', () => {
    expect(FLOORS).toEqual({ protein: 10, carbs: 10, fats: 10, calories: 100 });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `matching.js` does not exist / exports undefined.

- [ ] **Step 3: Implement in `src/lib/matching.js`**

```js
// Pure matching engine — no React imports allowed in this file.

export const FLOORS = { protein: 10, carbs: 10, fats: 10, calories: 100 };

const MACRO_KEYS = ['protein', 'carbs', 'fats', 'calories'];

export function comboTotals(items) {
  const t = { protein: 0, carbs: 0, fats: 0, calories: 0, price_sar: 0 };
  for (const it of items) {
    t.protein += it.protein;
    t.carbs += it.carbs;
    t.fats += it.fats;
    t.calories += it.calories;
    t.price_sar += it.price_sar;
  }
  return t;
}

export function filledGoalKeys(goals) {
  return MACRO_KEYS.filter((k) => Number.isFinite(goals?.[k]));
}

export function scoreCombo(totals, goals) {
  const keys = filledGoalKeys(goals);
  if (keys.length === 0) return 0;
  let errSum = 0;
  for (const k of keys) {
    const g = goals[k];
    const dist = Math.abs(totals[k] - g) / Math.max(g, FLOORS[k]);
    errSum += Math.min(dist, 1);
  }
  return Math.round(100 * (1 - errSum / keys.length));
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS (all `comboTotals` and `scoreCombo` tests green).

- [ ] **Step 5: Commit**

```powershell
git add src/lib/matching.js src/lib/matching.test.js
git commit -m @'
feat: matching engine scoring with floors and equal-weight redistribution

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
'@
```

---

### Task 4: Matching engine — combo generation (TDD)

**Files:**
- Modify: `src/lib/matching.js`
- Modify: `src/lib/matching.test.js`

**Interfaces:**
- Consumes: item objects with `category`.
- Produces: `generateCombos(items) -> Item[][]` — all multisets of size 1–3 (duplicates allowed, no permutation duplicates), skipping any combo containing more than one `dessert` item.

- [ ] **Step 1: Add failing tests to `src/lib/matching.test.js`**

```js
import { generateCombos } from './matching.js';

describe('generateCombos', () => {
  const A = item({ id: 'a', category: 'main' });
  const B = item({ id: 'b', category: 'side' });
  const C = item({ id: 'c', category: 'dessert' });

  it('generates all multisets of size 1-3 minus multi-dessert combos', () => {
    // 3 singles + 6 pairs-with-repetition + 10 triples-with-repetition = 19
    // minus {C,C}, {C,C,A}, {C,C,B}, {C,C,C} = 15
    expect(generateCombos([A, B, C])).toHaveLength(15);
  });

  it('never includes more than one dessert item in a combo', () => {
    for (const combo of generateCombos([A, B, C])) {
      const desserts = combo.filter((i) => i.category === 'dessert').length;
      expect(desserts).toBeLessThanOrEqual(1);
    }
  });

  it('allows the same non-dessert item twice or three times', () => {
    const keys = generateCombos([A, B]).map((c) => c.map((i) => i.id).sort().join('+'));
    expect(keys).toContain('a+a');
    expect(keys).toContain('a+a+a');
    expect(keys).toContain('a+a+b');
  });

  it('has no permutation duplicates', () => {
    const keys = generateCombos([A, B, C]).map((c) => c.map((i) => i.id).sort().join('+'));
    expect(new Set(keys).size).toBe(keys.length);
  });
});
```

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `npm test`
Expected: FAIL — `generateCombos` not exported.

- [ ] **Step 3: Implement `generateCombos` in `src/lib/matching.js`**

```js
export function generateCombos(items) {
  const combos = [];
  const isDessert = (i) => i.category === 'dessert';
  const push = (combo) => {
    let desserts = 0;
    for (const i of combo) if (isDessert(i)) desserts++;
    if (desserts <= 1) combos.push(combo);
  };
  const n = items.length;
  for (let i = 0; i < n; i++) {
    push([items[i]]);
    for (let j = i; j < n; j++) {
      push([items[i], items[j]]);
      for (let k = j; k < n; k++) {
        push([items[i], items[j], items[k]]);
      }
    }
  }
  return combos;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/lib/matching.js src/lib/matching.test.js
git commit -m @'
feat: multiset combo generation with max-one-dessert rule

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
'@
```

---

### Task 5: Matching engine — ranking, dedup, caps (TDD)

**Files:**
- Modify: `src/lib/matching.js`
- Modify: `src/lib/matching.test.js`

**Interfaces:**
- Consumes: `generateCombos`, `comboTotals`, `scoreCombo`, `filledGoalKeys`.
- Produces:
  - `overlapRatio(a, b) -> number` — multiset intersection size (by item `id`, counting multiplicity) divided by `max(a.length, b.length)`.
  - `findMatches(menu, goals, opts?) -> Result[]` where `Result = { chain, items, totals, score }`, `opts = { limit = 25, perChainCap = 10, dupThreshold = 2/3 }`. Sorted by score desc, tie-break lower `totals.price_sar`, then fewer items. Same-chain near-duplicates (overlap ≥ threshold) collapsed keeping the better one. Returns `[]` when no goals are filled.

- [ ] **Step 1: Add failing tests to `src/lib/matching.test.js`**

```js
import { overlapRatio, findMatches } from './matching.js';

describe('overlapRatio', () => {
  const A = item({ id: 'a' });
  const B = item({ id: 'b' });
  const C = item({ id: 'c' });
  const D = item({ id: 'd' });

  it('is 2/3 for triples sharing two items', () => {
    expect(overlapRatio([A, B, C], [A, B, D])).toBeCloseTo(2 / 3);
  });

  it('counts multiplicity', () => {
    // {a,a,b} vs {a,b}: intersection = a(1) + b(1) = 2, max size 3
    expect(overlapRatio([A, A, B], [A, B])).toBeCloseTo(2 / 3);
  });

  it('is 1/2 for pairs sharing one item', () => {
    expect(overlapRatio([A, B], [A, C])).toBeCloseTo(1 / 2);
  });
});

describe('findMatches', () => {
  const mk = (chain, id, macros, price = 10, category = 'main') =>
    item({ chain, id: `${chain}-${id}`, name: id, category, price_sar: price, ...macros });

  it('returns [] when no goals are filled', () => {
    const menu = [mk('X', 'a', { protein: 20 })];
    expect(findMatches(menu, {})).toEqual([]);
    expect(findMatches(menu, { protein: null })).toEqual([]);
  });

  it('ranks by score descending and respects the result limit', () => {
    const menu = [];
    for (let c = 0; c < 8; c++) {
      for (let i = 0; i < 4; i++) {
        menu.push(mk(`C${c}`, `i${i}`, { protein: 10 + c + i, carbs: 5, fats: 5, calories: 200 }));
      }
    }
    const res = findMatches(menu, { protein: 40 }, { limit: 5 });
    expect(res).toHaveLength(5);
    for (let i = 1; i < res.length; i++) {
      expect(res[i - 1].score).toBeGreaterThanOrEqual(res[i].score);
    }
  });

  it('never exceeds the per-chain cap', () => {
    const menu = [];
    for (let i = 0; i < 8; i++) menu.push(mk('ONLY', `i${i}`, { protein: 10 + i }));
    const res = findMatches(menu, { protein: 30 }, { perChainCap: 3, limit: 25 });
    expect(res.length).toBeLessThanOrEqual(3);
    expect(res.every((r) => r.chain === 'ONLY')).toBe(true);
  });

  it('collapses same-chain near-duplicates (overlap >= 2/3)', () => {
    const menu = [
      mk('T', 'a', { protein: 10 }), mk('T', 'b', { protein: 11 }),
      mk('T', 'c', { protein: 12 }), mk('T', 'd', { protein: 13 }),
    ];
    const res = findMatches(menu, { protein: 33 }, { limit: 25 });
    for (let i = 0; i < res.length; i++) {
      for (let j = i + 1; j < res.length; j++) {
        if (res[i].chain === res[j].chain) {
          expect(overlapRatio(res[i].items, res[j].items)).toBeLessThan(2 / 3);
        }
      }
    }
  });

  it('tie-breaks equal scores by lower price', () => {
    const menu = [
      mk('A', 'exp', { protein: 25, carbs: 0, fats: 0, calories: 0 }, 20),
      mk('B', 'chp', { protein: 15, carbs: 0, fats: 0, calories: 0 }, 5),
    ];
    // both: |v-20|/20 = 0.25 -> 75
    const res = findMatches(menu, { protein: 20 });
    expect(res[0].score).toBe(res[1].score);
    expect(res[0].totals.price_sar).toBeLessThan(res[1].totals.price_sar);
  });

  it('handles a realistic dataset size in under 1.5 seconds', () => {
    const menu = [];
    for (let c = 0; c < 100; c++) {
      for (let i = 0; i < 9; i++) {
        menu.push(mk(`CH${c}`, `it${i}`, {
          protein: (i * 7 + c) % 45, carbs: (i * 11 + c) % 60,
          fats: (i * 5 + c) % 30, calories: 150 + ((i * 97 + c * 13) % 500),
        }, 5 + (i % 20)));
      }
    }
    const t0 = performance.now();
    const res = findMatches(menu, { protein: 40, carbs: 50, fats: 20, calories: 600 });
    expect(performance.now() - t0).toBeLessThan(1500);
    expect(res).toHaveLength(25);
  });
});
```

- [ ] **Step 2: Run tests to verify the new ones fail**

Run: `npm test`
Expected: FAIL — `overlapRatio` / `findMatches` not exported.

- [ ] **Step 3: Implement in `src/lib/matching.js`**

```js
export function overlapRatio(a, b) {
  const count = (arr) => {
    const m = new Map();
    for (const i of arr) m.set(i.id, (m.get(i.id) || 0) + 1);
    return m;
  };
  const ca = count(a);
  const cb = count(b);
  let inter = 0;
  for (const [id, n] of ca) inter += Math.min(n, cb.get(id) || 0);
  return inter / Math.max(a.length, b.length);
}

export function findMatches(menu, goals, opts = {}) {
  const { limit = 25, perChainCap = 10, dupThreshold = 2 / 3 } = opts;
  if (filledGoalKeys(goals).length === 0) return [];

  const byChain = new Map();
  for (const it of menu) {
    if (!byChain.has(it.chain)) byChain.set(it.chain, []);
    byChain.get(it.chain).push(it);
  }

  const scored = [];
  for (const [chain, items] of byChain) {
    for (const combo of generateCombos(items)) {
      const totals = comboTotals(combo);
      scored.push({ chain, items: combo, totals, score: scoreCombo(totals, goals) });
    }
  }

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      a.totals.price_sar - b.totals.price_sar ||
      a.items.length - b.items.length
  );

  const results = [];
  const perChain = new Map();
  for (const cand of scored) {
    if ((perChain.get(cand.chain) || 0) >= perChainCap) continue;
    let dup = false;
    for (const r of results) {
      if (r.chain === cand.chain && overlapRatio(r.items, cand.items) >= dupThreshold) {
        dup = true;
        break;
      }
    }
    if (dup) continue;
    results.push(cand);
    perChain.set(cand.chain, (perChain.get(cand.chain) || 0) + 1);
    if (results.length === limit) break;
  }
  return results;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS (all engine tests green).

- [ ] **Step 5: Commit**

```powershell
git add src/lib/matching.js src/lib/matching.test.js
git commit -m @'
feat: ranking with near-duplicate collapse, chain cap, and top-25 cut

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
'@
```

---

### Task 6: i18n strings + persisted-state hook

**Files:**
- Create: `src/i18n/strings.js`, `src/i18n/strings.test.js`, `src/hooks/usePersistedState.js`

**Interfaces:**
- Produces:
  - `STRINGS = { en: {...}, ar: {...} }` — flat key/value maps with identical key sets.
  - `usePersistedState(key, initialValue) -> [value, setValue]` — React state mirrored to `localStorage` as JSON.

- [ ] **Step 1: Write failing parity test in `src/i18n/strings.test.js`**

```js
import { describe, it, expect } from 'vitest';
import { STRINGS } from './strings.js';

describe('STRINGS', () => {
  it('has identical key sets for en and ar', () => {
    expect(Object.keys(STRINGS.ar).sort()).toEqual(Object.keys(STRINGS.en).sort());
  });

  it('has no empty values', () => {
    for (const lang of ['en', 'ar']) {
      for (const [k, v] of Object.entries(STRINGS[lang])) {
        expect(v, `${lang}.${k}`).toBeTruthy();
      }
    }
  });

  it('keeps the trigger button copy exactly per spec', () => {
    expect(STRINGS.en.find).toBe('Find My Order');
    expect(STRINGS.ar.find).toBe('ابحث عن وجبتي');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL — `strings.js` missing.

- [ ] **Step 3: Write `src/i18n/strings.js`**

```js
export const STRINGS = {
  en: {
    tagline: 'Type the macros you have left today — we build the perfect Riyadh fast-food order for them.',
    protein: 'Protein (g)',
    carbs: 'Carbs (g)',
    fats: 'Fats (g)',
    calories: 'Calories (kcal)',
    find: 'Find My Order',
    errNoInput: 'Enter at least one target to search.',
    resultsTitle: 'Your best orders',
    match: 'match',
    item: 'item',
    items: 'items',
    sar: 'SAR',
    of: '/',
    themeToggle: 'Toggle dark mode',
    langToggle: 'العربية',
    placeholder: 'e.g. 40',
  },
  ar: {
    tagline: 'اكتب الماكروز المتبقية لك اليوم — ونبني لك طلب الوجبات السريعة المثالي في الرياض.',
    protein: 'بروتين (غ)',
    carbs: 'كربوهيدرات (غ)',
    fats: 'دهون (غ)',
    calories: 'سعرات (كالوري)',
    find: 'ابحث عن وجبتي',
    errNoInput: 'أدخل هدفًا واحدًا على الأقل للبحث.',
    resultsTitle: 'أفضل طلباتك',
    match: 'تطابق',
    item: 'صنف',
    items: 'أصناف',
    sar: 'ريال',
    of: '/',
    themeToggle: 'تبديل الوضع الليلي',
    langToggle: 'English',
    placeholder: 'مثال: 40',
  },
};
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Write `src/hooks/usePersistedState.js`** (no unit test — exercised manually in Task 13's checklist)

```js
import { useEffect, useState } from 'react';

export function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage unavailable (private mode) — state still works in-memory
    }
  }, [key, value]);

  return [value, setValue];
}
```

- [ ] **Step 6: Commit**

```powershell
git add src/i18n src/hooks
git commit -m @'
feat: bilingual string table with parity test and persisted-state hook

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
'@
```

---

### Task 7: Dataset infrastructure — aggregator + validation (TDD)

**Files:**
- Create: `src/data/index.js`, `src/data/index.test.js`, `src/data/chains/` (directory)

**Interfaces:**
- Produces:
  - `validateMenu(items) -> string[]` — list of human-readable problems; `[]` means valid. Checks: unique non-empty `id`; non-empty `chain` and `name`; `category` ∈ {main, side, dessert}; `calories/protein/carbs/fats` finite and ≥ 0; `calories > 0`; `price_sar > 0`; `estimated` boolean; item name contains no beverage words (`/\b(cola|pepsi|7\s?up|juice|water|coffee|latte|tea|karak|smoothie|milkshake|soda|frappe|mojito)\b/i`).
  - `MENU` — flat array concatenating every file in `src/data/chains/` (each chain file default-exports an item array). Starts empty; category files are appended in Tasks 8–12 by adding an import + spread.
  - `CHAINS` — `[...new Set(MENU.map(i => i.chain))]`.

- [ ] **Step 1: Write failing tests in `src/data/index.test.js`**

```js
import { describe, it, expect } from 'vitest';
import { validateMenu, MENU } from './index.js';

const good = {
  id: 'x-1', chain: 'X', name: 'Grilled Thing', category: 'main',
  calories: 300, protein: 20, carbs: 30, fats: 10, price_sar: 15, estimated: false,
};

describe('validateMenu', () => {
  it('accepts a valid item', () => {
    expect(validateMenu([good])).toEqual([]);
  });

  it('rejects duplicate ids', () => {
    expect(validateMenu([good, { ...good }]).join(' ')).toMatch(/duplicate id/i);
  });

  it('rejects bad categories', () => {
    expect(validateMenu([{ ...good, category: 'drink' }]).join(' ')).toMatch(/category/i);
  });

  it('rejects negative macros and non-positive price/calories', () => {
    expect(validateMenu([{ ...good, protein: -1 }])).not.toEqual([]);
    expect(validateMenu([{ ...good, price_sar: 0 }])).not.toEqual([]);
    expect(validateMenu([{ ...good, calories: 0 }])).not.toEqual([]);
  });

  it('rejects beverage-like item names', () => {
    expect(validateMenu([{ ...good, id: 'x-2', name: 'Iced Latte' }]).join(' ')).toMatch(/beverage/i);
  });

  it('rejects non-boolean estimated', () => {
    expect(validateMenu([{ ...good, estimated: 'yes' }])).not.toEqual([]);
  });
});

describe('MENU', () => {
  it('is always valid', () => {
    expect(validateMenu(MENU)).toEqual([]);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test`
Expected: FAIL — `index.js` missing.

- [ ] **Step 3: Implement `src/data/index.js`**

```js
// Aggregates all chain category files. Each file in ./chains default-exports
// an array of items in the schema below. Category imports are appended here
// as dataset tasks land.
//
// Item schema: { id, chain, name, category: 'main'|'side'|'dessert',
//                calories, protein, carbs, fats, price_sar, estimated }

const CATEGORY_FILES = [
  // appended by Tasks 8-12: burgers-intl, burgers-saudi, chicken, pizza,
  // sandwiches, shawarma-levant, saudi-traditional, seafood, asian, healthy,
  // bakery-breakfast, desserts
];

export const MENU = CATEGORY_FILES.flat();
export const CHAINS = [...new Set(MENU.map((i) => i.chain))];

const CATEGORIES = new Set(['main', 'side', 'dessert']);
const BEVERAGE_RE = /\b(cola|pepsi|7\s?up|juice|water|coffee|latte|tea|karak|smoothie|milkshake|soda|frappe|mojito)\b/i;

export function validateMenu(items) {
  const errors = [];
  const seen = new Set();
  items.forEach((it, idx) => {
    const where = `item[${idx}] (${it?.id ?? '?'})`;
    if (!it.id || typeof it.id !== 'string') errors.push(`${where}: missing id`);
    else if (seen.has(it.id)) errors.push(`${where}: duplicate id`);
    else seen.add(it.id);
    if (!it.chain) errors.push(`${where}: missing chain`);
    if (!it.name) errors.push(`${where}: missing name`);
    if (!CATEGORIES.has(it.category)) errors.push(`${where}: bad category "${it.category}"`);
    for (const k of ['protein', 'carbs', 'fats']) {
      if (!Number.isFinite(it[k]) || it[k] < 0) errors.push(`${where}: bad ${k}`);
    }
    if (!Number.isFinite(it.calories) || it.calories <= 0) errors.push(`${where}: bad calories`);
    if (!Number.isFinite(it.price_sar) || it.price_sar <= 0) errors.push(`${where}: bad price_sar`);
    if (typeof it.estimated !== 'boolean') errors.push(`${where}: estimated must be boolean`);
    if (typeof it.name === 'string' && BEVERAGE_RE.test(it.name)) {
      errors.push(`${where}: beverage-like name "${it.name}" — drinks are banned`);
    }
  });
  return errors;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test`
Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/data
git commit -m @'
feat: dataset aggregator with strict validation incl. beverage ban

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
'@
```

---

## Dataset research tasks (8–12) — shared methodology

Tasks 8–12 populate `src/data/chains/*.js`. They are research + data-entry tasks; the numbers are produced at execution time using this exact methodology (spec §4), in priority order per item:

1. **Official KSA nutrition data** — e.g., `mcdonalds.com.sa` nutrition calculator, `albaik.com` nutrition page, KFC Arabia app, Herfy/Kudu published tables. → `estimated: false`
2. **Global published data for the same exact item** (e.g., US/UAE nutrition PDFs). → `estimated: false`
3. **Calculated estimate** from the item's published calorie count and description (derive macros with 4/4/9 kcal-per-gram splits typical of the dish type). → `estimated: true`

Prices in SAR from KSA menus/delivery listings (HungerStation/Jahez/ToYou web pages or official menus); reasonable approximation acceptable.

**Rules for every dataset task:**
- No beverages of any kind. Desserts get `category: "dessert"`; fries/nuggets/salads/sides get `"side"`; everything else `"main"`.
- `id` format: `<chain-slug>-<item-slug>` (kebab-case, unique).
- Tier item counts — Tier 1: 10–15 items; Tier 2: 6–8; Tier 3: 5–6.
- After writing each file: register it in `CATEGORY_FILES` in `src/data/index.js` (import + entry), run `npm test` (the `MENU is always valid` test must pass), then commit.
- File shape (every chain file):

```js
// src/data/chains/<category>.js
export default [
  {
    id: 'albaik-nugget-sandwich',
    chain: 'Albaik',
    name: 'Nugget Sandwich',
    category: 'main',
    calories: 340, protein: 16, carbs: 38, fats: 14,
    price_sar: 7, estimated: false,
  },
  // ... more items
];
```

The user's 7 approved seed items must appear verbatim (macros/prices as given) in their chains' files: Shawarmer "Arbo Chicken Shawarma (Bite-sized)" & "Tawook Sandwich"; Albaik "4-Piece Chicken Nuggets (No Fries)" & "Nugget Sandwich"; McDonald's KSA "McChicken Sandwich" & "6-Piece Chicken McNuggets"; Al Tazaj "BBQ Grilled Chicken (Half)".

---

### Task 8: Dataset — international + Saudi burgers

**Files:**
- Create: `src/data/chains/burgers-intl.js`, `src/data/chains/burgers-saudi.js`
- Modify: `src/data/index.js` (register both files)

**Interfaces:**
- Consumes: schema + methodology above.
- Produces: ~170–200 items.

- [ ] **Step 1: Research and write `burgers-intl.js`** — chains (tier): McDonald's KSA (1), Burger King (1), Hardee's (1), Five Guys (1), Shake Shack (1), Fatburger (2), Fuddruckers (2), Johnny Rockets (2), BurgerFuel (2), Black Tap (2). Include the two McDonald's seed items.
- [ ] **Step 2: Research and write `burgers-saudi.js`** — chains: Herfy (1), Hamburgini (2), Burgerizzr (2), Jan Burger (2), Century Burger (2), Section-B (2), Salt (2), Grill It (3), The Real Burger (3), Taxi (3), Burger Boutique (3), Nevermind (3), GUNBUN (3).
- [ ] **Step 3: Register both files in `src/data/index.js`**

```js
import burgersIntl from './chains/burgers-intl.js';
import burgersSaudi from './chains/burgers-saudi.js';

const CATEGORY_FILES = [burgersIntl, burgersSaudi];
```

- [ ] **Step 4: Run `npm test`** — Expected: PASS, including `MENU is always valid`.
- [ ] **Step 5: Commit**

```powershell
git add src/data
git commit -m @'
data: burger chains (international + Saudi), researched macros and SAR prices

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
'@
```

---

### Task 9: Dataset — chicken + pizza

**Files:**
- Create: `src/data/chains/chicken.js`, `src/data/chains/pizza.js`
- Modify: `src/data/index.js`

**Interfaces:** as Task 8. Produces ~150–180 items.

- [ ] **Step 1: Research and write `chicken.js`** — Albaik (1, incl. both seed items), KFC (1), Texas Chicken (1), Popeyes (1), Raising Cane's (1), Dave's Hot Chicken (1), Wingstop (1), Jollibee (1), Al Tazaj (1, incl. seed item), Buffalo Wild Wings (2), Buffalo Wings & Rings (2), ChicKing (2), Birdlot (3).
- [ ] **Step 2: Research and write `pizza.js`** — Domino's (1), Pizza Hut (1), Papa John's (1), Little Caesars (1), Maestro Pizza (1), Pizza Inn (2). Pizza items are per-slice or per-small-pizza units as officially published — state the unit in the item name (e.g., "Pepperoni Slice (Large)", "Small Chicken Ranch Pizza").
- [ ] **Step 3: Register both files in `CATEGORY_FILES`** (same pattern as Task 8 Step 3).
- [ ] **Step 4: Run `npm test`** — Expected: PASS.
- [ ] **Step 5: Commit** (message: `data: chicken and pizza chains` + trailer).

---

### Task 10: Dataset — sandwiches + shawarma/Levantine

**Files:**
- Create: `src/data/chains/sandwiches.js`, `src/data/chains/shawarma-levant.js`
- Modify: `src/data/index.js`

**Interfaces:** as Task 8. Produces ~190–220 items.

- [ ] **Step 1: Research and write `sandwiches.js`** — Subway (1), Kudu (1), Charleys Philly Steaks (2), Dank Sandwich (3), Shwkat (3), The Sandwich Company (3), PAO (3), MAQSAF (3), Crust Corner (3).
- [ ] **Step 2: Research and write `shawarma-levant.js`** — Shawarmer (1, incl. both seed items), Mama Noura (2), Shawarma House (2), German Doner Kebab (2), Barbar (2), Malak Al Tawouk (2), Allo Beirut (2), Zaatar w Zeit (2), Operation Falafel (2), Shawarma Classic (3), Shawarma Plus (3), Shawarmasters (3), Shawarmix (3), Shawarma Factory (3), Golden Saj (3), Shawarma Jalilah (3), Usta Asim (3), Mareez (3), Assaraya Turkish Restaurant (3), Alsaaj Alreefi (3).
- [ ] **Step 3: Register both files in `CATEGORY_FILES`.**
- [ ] **Step 4: Run `npm test`** — Expected: PASS.
- [ ] **Step 5: Commit** (message: `data: sandwich and shawarma/Levantine chains` + trailer).

---

### Task 11: Dataset — Saudi traditional, seafood, Asian, healthy

**Files:**
- Create: `src/data/chains/saudi-traditional.js`, `src/data/chains/seafood.js`, `src/data/chains/asian.js`, `src/data/chains/healthy.js`
- Modify: `src/data/index.js`

**Interfaces:** as Task 8. Produces ~90–110 items.

- [ ] **Step 1: `saudi-traditional.js`** — Al Romansiah (2), Shawaya House (2), Hashi Basha (2), Meat Moot (2), Smokey Beards Q (3). Rice+meat plates are `main`; use published portion sizes where available (e.g., quarter chicken + rice).
- [ ] **Step 2: `seafood.js`** — London Fish & Chips (2), Shrimp Nation (2), Shrimp Shack (2), Shrimplus (2).
- [ ] **Step 3: `asian.js`** — Sushi Yoshi (2), Chowking (2), Mang Inasal (2 — **re-verify Riyadh presence first**; if closed, replace with a bench chain: Karam Elsham, Maki, Kababji, Man'oushe Street, or Ayedh Shawarma, updating the spec list note in the commit message).
- [ ] **Step 4: `healthy.js`** — Kcal (1 — publishes full macros per item; use them exactly).
- [ ] **Step 5: Register all four files in `CATEGORY_FILES`.**
- [ ] **Step 6: Run `npm test`** — Expected: PASS.
- [ ] **Step 7: Commit** (message: `data: Saudi traditional, seafood, Asian, healthy chains` + trailer).

---

### Task 12: Dataset — bakery/breakfast + desserts, full-dataset assertions

**Files:**
- Create: `src/data/chains/bakery-breakfast.js`, `src/data/chains/desserts.js`
- Modify: `src/data/index.js`, `src/data/index.test.js`

**Interfaces:** as Task 8. Produces ~90–110 items and locks the final 100-chain roster.

- [ ] **Step 1: `bakery-breakfast.js`** — Tim Hortons (1, food items only — no drinks), PAUL (2), Wooden Bakery (2), Auntie Anne's (2), EGGSACTLY (3), Toastable (3).
- [ ] **Step 2: `desserts.js`** — Krispy Kreme (1), Dunkin' (1, donuts/munchkins only), Cinnabon (1), Baskin Robbins (1), Cold Stone Creamery (2), House of Donuts (2), Munch Bakery (2), Saadeddin (2), Pinkberry (2 — **re-verify Riyadh presence first**), Häagen-Dazs (2 — **re-verify first**). All items `category: "dessert"`. Replace any failed re-verification from the bench list and note it in the commit message.
- [ ] **Step 3: Register both files; `CATEGORY_FILES` now holds all 12 imports.**
- [ ] **Step 4: Add final roster assertions to `src/data/index.test.js`**

```js
import { CHAINS } from './index.js';

describe('final dataset', () => {
  it('covers exactly 100 chains', () => {
    expect(CHAINS).toHaveLength(100);
  });

  it('has at least 5 items per chain and 600-1000 items total', () => {
    const counts = new Map();
    for (const i of MENU) counts.set(i.chain, (counts.get(i.chain) || 0) + 1);
    for (const [chain, n] of counts) expect(n, chain).toBeGreaterThanOrEqual(5);
    expect(MENU.length).toBeGreaterThanOrEqual(600);
    expect(MENU.length).toBeLessThanOrEqual(1000);
  });
});
```

- [ ] **Step 5: Run `npm test`** — Expected: PASS (fix data, not thresholds, if it fails).
- [ ] **Step 6: Commit** (message: `data: bakery and dessert chains; final 100-chain roster locked` + trailer).

---

### Task 13: UI shell — top bar, toggles, hero, theme/lang wiring

**Files:**
- Create: `src/components/TopBar.jsx`, `src/components/ThemeToggle.jsx`, `src/components/LangToggle.jsx`, `src/components/Hero.jsx`
- Modify: `src/App.jsx` (replace placeholder)

**Interfaces:**
- Consumes: `STRINGS`, `usePersistedState`.
- Produces: `App` owns `theme` (`'light'|'dark'`), `lang` (`'en'|'ar'`), applies `.dark` class + `dir`/`lang` attributes on `<html>`; passes `t = STRINGS[lang]` down. Component props: `TopBar({ t, theme, setTheme, lang, setLang })`, `Hero({ t })`.

- [ ] **Step 1: Write `src/components/ThemeToggle.jsx`**

```jsx
export default function ThemeToggle({ t, theme, setTheme }) {
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      aria-label={t.themeToggle}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="w-9 h-9 rounded-full flex items-center justify-center text-lg
                 bg-white dark:bg-card-dark border border-slate-200 dark:border-edge-dark
                 shadow-sm hover:scale-105 transition-transform"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
```

- [ ] **Step 2: Write `src/components/LangToggle.jsx`**

```jsx
export default function LangToggle({ t, lang, setLang }) {
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="h-9 px-3 rounded-full text-sm font-semibold
                 bg-white dark:bg-card-dark border border-slate-200 dark:border-edge-dark
                 text-slate-700 dark:text-slate-200 shadow-sm hover:scale-105 transition-transform"
    >
      {t.langToggle}
    </button>
  );
}
```

- [ ] **Step 3: Write `src/components/TopBar.jsx`**

```jsx
import ThemeToggle from './ThemeToggle.jsx';
import LangToggle from './LangToggle.jsx';

export default function TopBar({ t, theme, setTheme, lang, setLang }) {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
      <span dir="ltr" className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100">
        MacroMenu <span className="text-emerald-500 dark:text-emerald-400">Riyadh</span>
      </span>
      <div className="flex items-center gap-2">
        <ThemeToggle t={t} theme={theme} setTheme={setTheme} />
        <LangToggle t={t} lang={lang} setLang={setLang} />
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Write `src/components/Hero.jsx`**

```jsx
export default function Hero({ t }) {
  return (
    <section className="max-w-2xl mx-auto text-center px-5 pt-10 pb-6">
      <h1 dir="ltr" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
        MacroMenu <span className="text-emerald-500 dark:text-emerald-400">Riyadh</span>
      </h1>
      <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">{t.tagline}</p>
    </section>
  );
}
```

- [ ] **Step 5: Rewrite `src/App.jsx`**

```jsx
import { useEffect } from 'react';
import { STRINGS } from './i18n/strings.js';
import { usePersistedState } from './hooks/usePersistedState.js';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';

function systemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = usePersistedState('mm_theme', systemTheme());
  const [lang, setLang] = usePersistedState('mm_lang', 'en');
  const t = STRINGS[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-page dark:bg-page-dark transition-colors">
      <TopBar t={t} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <Hero t={t} />
    </div>
  );
}
```

- [ ] **Step 6: Manual verification**

Run: `npm run dev`, open the printed localhost URL.
Check: hero renders; sun/moon toggles dark palette (deep slate, not black); language toggle flips layout to RTL with Arabic tagline while "MacroMenu Riyadh" stays English LTR; both choices survive a page reload (localStorage).

- [ ] **Step 7: Commit** (message: `feat: app shell with theme, language, and RTL wiring` + trailer).

---

### Task 14: MacroForm — inputs, validation, trigger button

**Files:**
- Create: `src/components/MacroForm.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `t`.
- Produces: `MacroForm({ t, values, onChange, onSubmit, error })` — `values = { protein, carbs, fats, calories }` as **strings**; `onChange(key, string)`; `onSubmit()` on button click/Enter; `error` boolean shows `t.errNoInput`. Also `parseGoals(values) -> goals object` exported from `MacroForm.jsx`: empty string → key omitted; otherwise `Number`, clamped 0–10000.

- [ ] **Step 1: Write `src/components/MacroForm.jsx`**

```jsx
const FIELDS = ['protein', 'carbs', 'fats', 'calories'];

export function parseGoals(values) {
  const goals = {};
  for (const k of FIELDS) {
    const raw = values[k].trim();
    if (raw === '') continue;
    const n = Number(raw);
    if (Number.isFinite(n)) goals[k] = Math.min(Math.max(n, 0), 10000);
  }
  return goals;
}

function sanitize(raw) {
  let s = raw.replace(/[^\d.]/g, '');
  const firstDot = s.indexOf('.');
  if (firstDot !== -1) s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, '');
  return s;
}

export default function MacroForm({ t, values, onChange, onSubmit, error }) {
  return (
    <form
      className="max-w-3xl mx-auto px-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {FIELDS.map((k) => (
          <label key={k} className="block">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{t[k]}</span>
            <input
              type="text"
              inputMode="decimal"
              dir="ltr"
              placeholder={t.placeholder}
              value={values[k]}
              onChange={(e) => onChange(k, sanitize(e.target.value))}
              className="mt-1 w-full rounded-xl px-3 py-2.5 text-base
                         bg-white dark:bg-card-dark
                         border border-slate-200 dark:border-edge-dark
                         text-slate-800 dark:text-slate-100
                         placeholder:text-slate-400 dark:placeholder:text-slate-500
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
            />
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-3 text-sm font-medium text-red-500 dark:text-red-400">{t.errNoInput}</p>
      )}
      <button
        type="submit"
        className="mt-5 w-full sm:w-auto sm:mx-auto sm:px-12 block rounded-xl px-6 py-3
                   text-base font-bold text-white
                   bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-300
                   dark:text-slate-900 shadow-lg shadow-emerald-500/25 transition-colors"
      >
        {t.find}
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Wire into `src/App.jsx`** — add below `<Hero />`:

```jsx
import { useState } from 'react';
import MacroForm, { parseGoals } from './components/MacroForm.jsx';

// inside App():
const [values, setValues] = useState({ protein: '', carbs: '', fats: '', calories: '' });
const [error, setError] = useState(false);

function handleSubmit() {
  const goals = parseGoals(values);
  if (Object.keys(goals).length === 0) {
    setError(true);
    return;
  }
  setError(false);
  // Task 16 runs the search here.
}

// in JSX, below <Hero t={t} />:
<MacroForm
  t={t}
  values={values}
  onChange={(k, v) => setValues((prev) => ({ ...prev, [k]: v }))}
  onSubmit={handleSubmit}
  error={error}
/>
```

- [ ] **Step 3: Manual verification** — `npm run dev`: four text boxes (no sliders); letters are rejected while typing; clicking with all boxes empty shows the localized error (in both languages); no results appear automatically.
- [ ] **Step 4: Commit** (message: `feat: macro input form with sanitization and empty-input error` + trailer).

---

### Task 15: MacroBar + MealCard

**Files:**
- Create: `src/components/MacroBar.jsx`, `src/components/MealCard.jsx`

**Interfaces:**
- Consumes: `FLOORS` from `src/lib/matching.js`; `Result = { chain, items, totals, score }` from `findMatches`.
- Produces: `MacroBar({ t, macroKey, value, goal })`; `MealCard({ t, result, goals })` — renders bars only for keys present in `goals`.

- [ ] **Step 1: Write `src/components/MacroBar.jsx`**

```jsx
import { FLOORS } from '../lib/matching.js';

export default function MacroBar({ t, macroKey, value, goal }) {
  const dist = Math.abs(value - goal) / Math.max(goal, FLOORS[macroKey]);
  const color =
    dist <= 0.1
      ? 'bg-emerald-500 dark:bg-emerald-400'
      : dist <= 0.3
        ? 'bg-amber-500'
        : 'bg-red-400';
  const pct = goal > 0 ? Math.min(value / goal, 1) * 100 : value > 0 ? 100 : 0;
  return (
    <div className="flex items-center gap-2.5 text-xs">
      <span className="w-16 shrink-0 text-slate-500 dark:text-slate-400">{t[macroKey]}</span>
      <div className="flex-1 h-1.5 rounded-full bg-slate-100 dark:bg-page-dark overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span dir="ltr" className="w-20 shrink-0 text-end text-slate-600 dark:text-slate-300">
        {Math.round(value)} {t.of} {Math.round(goal)}
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Write `src/components/MealCard.jsx`**

```jsx
import MacroBar from './MacroBar.jsx';

const ORDER = ['protein', 'carbs', 'fats', 'calories'];

function comboLabel(items) {
  const counts = new Map();
  for (const it of items) {
    const e = counts.get(it.id) || { item: it, n: 0 };
    e.n += 1;
    counts.set(it.id, e);
  }
  return [...counts.values()]
    .map(({ item, n }) => (n > 1 ? `${n}× ${item.name}` : item.name))
    .join(' + ');
}

export default function MealCard({ t, result, goals }) {
  const { chain, items, totals, score } = result;
  const filled = ORDER.filter((k) => Number.isFinite(goals[k]));
  return (
    <article
      className="rounded-2xl p-5 bg-white dark:bg-card-dark
                 border border-slate-200 dark:border-edge-dark
                 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 dir="ltr" className="font-bold text-slate-800 dark:text-slate-100">{chain}</h3>
        <span className="shrink-0 text-sm font-bold text-emerald-600 dark:text-emerald-400">
          {score}% {t.match}
        </span>
      </div>
      <p dir="ltr" className="mt-1 mb-4 text-sm text-slate-500 dark:text-slate-400">
        {comboLabel(items)}
      </p>
      <div className="space-y-2">
        {filled.map((k) => (
          <MacroBar key={k} t={t} macroKey={k} value={totals[k]} goal={goals[k]} />
        ))}
      </div>
      <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100 dark:border-edge-dark">
        <span className="text-xs text-slate-400 dark:text-slate-500">
          {items.length} {items.length === 1 ? t.item : t.items}
        </span>
        <span dir="ltr" className="font-bold text-emerald-700 dark:text-emerald-400">
          {totals.price_sar} {t.sar}
        </span>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Commit** (message: `feat: meal card with color-coded macro bars and SAR price` + trailer).

---

### Task 16: ResultsGrid + search integration

**Files:**
- Create: `src/components/ResultsGrid.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `findMatches`, `MENU`, `MealCard`, `parseGoals`.
- Produces: complete search flow — button click → validate → `findMatches(MENU, goals)` → grid renders top 25 → smooth scroll to results.

- [ ] **Step 1: Write `src/components/ResultsGrid.jsx`**

```jsx
import MealCard from './MealCard.jsx';

export default function ResultsGrid({ t, results, goals }) {
  if (!results) return null;
  return (
    <section className="max-w-6xl mx-auto px-5 py-10">
      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-5">
        {t.resultsTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((r, idx) => (
          <MealCard key={idx} t={t} result={r} goals={goals} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Complete `src/App.jsx`** (final version)

```jsx
import { useEffect, useRef, useState } from 'react';
import { STRINGS } from './i18n/strings.js';
import { usePersistedState } from './hooks/usePersistedState.js';
import { findMatches } from './lib/matching.js';
import { MENU } from './data/index.js';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';
import MacroForm, { parseGoals } from './components/MacroForm.jsx';
import ResultsGrid from './components/ResultsGrid.jsx';

function systemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = usePersistedState('mm_theme', systemTheme());
  const [lang, setLang] = usePersistedState('mm_lang', 'en');
  const [values, setValues] = useState({ protein: '', carbs: '', fats: '', calories: '' });
  const [error, setError] = useState(false);
  const [results, setResults] = useState(null);
  const [goals, setGoals] = useState(null);
  const resultsRef = useRef(null);
  const t = STRINGS[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (results) resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [results]);

  function handleSubmit() {
    const parsed = parseGoals(values);
    if (Object.keys(parsed).length === 0) {
      setError(true);
      setResults(null);
      return;
    }
    setError(false);
    setGoals(parsed);
    setResults(findMatches(MENU, parsed));
  }

  return (
    <div className="min-h-screen bg-page dark:bg-page-dark transition-colors pb-16">
      <TopBar t={t} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <MacroForm
        t={t}
        values={values}
        onChange={(k, v) => setValues((prev) => ({ ...prev, [k]: v }))}
        onSubmit={handleSubmit}
        error={error}
      />
      <div ref={resultsRef}>
        <ResultsGrid t={t} results={results} goals={goals ?? {}} />
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Run the full test suite** — `npm test` — Expected: PASS.
- [ ] **Step 4: Manual verification** — `npm run dev`: enter e.g. protein 45 / calories 800 → click → ≤25 cards, sorted by match %, mixed chains, ≤10 per chain, bars colored sensibly, prices in SAR, smooth scroll; leave fields blank → they vanish from cards; Arabic mode → full RTL but chain/item names stay English LTR.
- [ ] **Step 5: Commit** (message: `feat: results grid wired to matching engine` + trailer).

---

### Task 17: README + production build + final checklist

**Files:**
- Create: `README.md`

**Interfaces:** none — documentation and final QA gate.

- [ ] **Step 1: Write `README.md`**

````markdown
# MacroMenu Riyadh 🥗

A reverse macro calculator for Riyadh. Type the protein, carbs, fats, and
calories you have **left** for the day — get real fast-food orders from 100
Riyadh chains that match them as closely as mathematically possible.

- 100% client-side. No server, no database, no accounts.
- English / العربية with full RTL. Light & dark themes.
- ~800 menu items across 100 chains; macros from official nutrition data
  where published, careful estimates elsewhere (flagged `estimated` in the data).

## Run locally

```
npm install
npm run dev
```

## Tests

```
npm test
```

## Deploy (free)

**Vercel:** vercel.com → Add New Project → Import `macromenu-riyadh` from
GitHub → framework auto-detects Vite → Deploy. Done.

**Netlify:** app.netlify.com → Add new site → Import from GitHub →
Build command `npm run build`, publish directory `dist` → Deploy.

Every push to `main` re-deploys automatically on both platforms.

## Disclaimer

Macros and prices are best-effort approximations and drift as menus change.
Not medical advice.
````

- [ ] **Step 2: Production build** — Run: `npm run build` — Expected: success; note the gzipped bundle size in the task report.
- [ ] **Step 3: Full manual checklist on `npm run preview`:** light/dark toggle; EN↔AR full flip + persistence across reload; 375px/768px/1280px widths; searches: protein-only, calories-only, all four, absurd values (9999), tiny values (fats 2); no drinks anywhere in results; dessert appears at most once per card; chain/meal names English in Arabic mode.
- [ ] **Step 4: Commit** (message: `docs: README with run and deploy instructions` + trailer).

---

### Task 18: GitHub push (requires user action)

**Files:** none.

**Interfaces:** consumes the finished repo; produces `https://github.com/saadskn/macromenu-riyadh`.

- [ ] **Step 1: Ask the user to create the empty repo** — exact instructions: open https://github.com/new → Repository name `macromenu-riyadh` → Public → **do not** add README/.gitignore/license → Create repository. Wait for user confirmation. **This is a user gate — do not proceed without it.**
- [ ] **Step 2: Add remote and push**

```powershell
git remote add origin https://github.com/saadskn/macromenu-riyadh.git
git push -u origin main
```
Expected: push succeeds using the stored HTTPS credentials (same account as subway-macro-matcher). If auth fails, ask the user to run the push themselves via `! git push -u origin main` so the credential prompt reaches them.

- [ ] **Step 3: Verify** — `git ls-remote origin main` returns the local HEAD hash. Report the repo URL to the user.

---

## Self-Review Notes

- Spec coverage: §2 stack → Tasks 1–2; §3 structure → Tasks 2–16 file-for-file; §4 data model/roster/sourcing → Tasks 7–12 (roster locked by test in Task 12); §5 engine → Tasks 3–5 (formula, floors, multisets, dessert rule, dedup 2/3, cap 10, top 25, tie-breaks, perf); §6 UI/card/theme → Tasks 13–16 (exact palette via Tailwind tokens); §7 i18n → Tasks 6, 13 (RTL, Western digits, English-name exception via `dir="ltr"`); §8 errors → Tasks 7 (data validation), 14 (input validation); §9 testing → every engine task TDD + manual checklists in 13, 14, 16, 17; §10 delivery → Tasks 1, 17, 18.
- Signature consistency: `findMatches(menu, goals, opts)`, `Result {chain, items, totals, score}`, `parseGoals`, `usePersistedState`, `STRINGS`, `FLOORS` used identically across tasks.
- Deliberate scope: no component unit tests (spec §9 specifies engine unit tests + manual browser checklist); dataset numbers are produced at execution time by the documented methodology — the tests in Tasks 7 and 12 are the acceptance gate.
