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

// Items that are size variants of the same food carry `family` + `units` tags
// (e.g. quarter=1 / half=2 / whole=4 chicken). Combos are compared on their
// family-unit composition, so "2x half" and "1x whole" read as identical.
function unitMap(items) {
  const m = new Map();
  for (const i of items) {
    const key = i.family ?? i.id;
    m.set(key, (m.get(key) || 0) + (i.units ?? 1));
  }
  return m;
}

export function overlapRatio(a, b) {
  const ca = unitMap(a);
  const cb = unitMap(b);
  let inter = 0;
  let ta = 0;
  let tb = 0;
  for (const v of ca.values()) ta += v;
  for (const v of cb.values()) tb += v;
  for (const [key, n] of ca) inter += Math.min(n, cb.get(key) || 0);
  return inter / Math.max(ta, tb);
}

// Two combos from the same chain can be the "same order" without sharing any
// item ids (e.g. one "2 pc" item vs. the "1 pc" item twice). Such duplicates
// are only visible in the totals: all four macro totals within rounding-level
// tolerance (2 g / 20 kcal absolute, or 4% relative). Price is ignored.
const SIMILARITY = { protein: 2, carbs: 2, fats: 2, calories: 20 };

function macrosWithin(a, b, keys) {
  return keys.every((k) => {
    const tol = Math.max(SIMILARITY[k], 0.04 * Math.max(a[k], b[k]));
    return Math.abs(a[k] - b[k]) <= tol;
  });
}

export function totalsSimilar(a, b) {
  return macrosWithin(a, b, Object.keys(SIMILARITY));
}

function sharesAnyItem(a, b) {
  const ids = new Set(a.map((i) => i.id));
  return b.some((i) => ids.has(i.id));
}

export function findMatches(menu, goals, opts = {}) {
  const { limit = 25, perChainCap = 10, dupThreshold = 2 / 3 } = opts;
  const scoredKeys = filledGoalKeys(goals);
  if (scoredKeys.length === 0) return [];

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
      if (
        r.chain === cand.chain &&
        (overlapRatio(r.items, cand.items) >= dupThreshold ||
          totalsSimilar(r.totals, cand.totals) ||
          (sharesAnyItem(r.items, cand.items) &&
            macrosWithin(r.totals, cand.totals, scoredKeys)))
      ) {
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
