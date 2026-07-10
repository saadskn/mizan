import { describe, it, expect } from 'vitest';
import {
  FLOORS, comboTotals, scoreCombo, generateCombos, overlapRatio, findMatches,
} from './matching.js';

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
