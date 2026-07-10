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
