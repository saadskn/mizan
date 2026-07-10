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
