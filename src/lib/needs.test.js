import { describe, it, expect } from 'vitest';
import { ACTIVITY_LEVELS, dailyNeeds, validateNeeds } from './needs.js';

// Hand-computed against Mifflin-St Jeor + the standard activity multipliers.
describe('dailyNeeds', () => {
  it('male 25y 180cm 80kg moderate', () => {
    const n = dailyNeeds({ gender: 'male', age: 25, height: 180, weight: 80, activity: 'moderate' });
    // BMR = 800 + 1125 - 125 + 5 = 1805; TDEE = 1805 * 1.55 = 2797.75
    expect(n.calories).toBe(2798);
    expect(n.protein).toEqual({ min: 128, max: 176 }); // 1.6-2.2 g/kg
    expect(n.fats).toEqual({ min: 62, max: 78 }); // 20-25% of kcal
    expect(n.carbs).toEqual({ min: 348, max: 432 }); // remainder, paired
  });

  it('female 27y 160cm 55kg sedentary', () => {
    const n = dailyNeeds({ gender: 'female', age: 27, height: 160, weight: 55, activity: 'sedentary' });
    // BMR = 550 + 1000 - 135 - 161 = 1254; TDEE = 1254 * 1.2 = 1504.8
    expect(n.calories).toBe(1505);
    expect(n.protein).toEqual({ min: 88, max: 121 });
    expect(n.fats).toEqual({ min: 42, max: 50 }); // women get 25-30%
    expect(n.carbs).toEqual({ min: 143, max: 194 });
  });

  it('more strain means more calories, in order', () => {
    const base = { gender: 'male', age: 30, height: 175, weight: 75 };
    const cals = ACTIVITY_LEVELS.map((activity) => dailyNeeds({ ...base, activity }).calories);
    for (let i = 1; i < cals.length; i++) expect(cals[i]).toBeGreaterThan(cals[i - 1]);
  });

  it('carb floor never goes negative', () => {
    const n = dailyNeeds({ gender: 'female', age: 100, height: 100, weight: 300, activity: 'sedentary' });
    expect(n.carbs.min).toBe(0);
    expect(n.carbs.max).toBeGreaterThan(0);
  });

  it('range ends are internally consistent', () => {
    const n = dailyNeeds({ gender: 'male', age: 40, height: 170, weight: 90, activity: 'hard' });
    expect(n.protein.min).toBeLessThan(n.protein.max);
    expect(n.fats.min).toBeLessThan(n.fats.max);
    expect(n.carbs.min).toBeLessThan(n.carbs.max);
    // min carbs pairs with everything-else-at-max (±rounding of 3 values ≈ ±8 kcal)
    const spent = n.protein.max * 4 + n.fats.max * 9 + n.carbs.min * 4;
    expect(Math.abs(spent - n.calories)).toBeLessThanOrEqual(8);
  });
});

describe('validateNeeds', () => {
  const ok = { gender: 'male', age: 25, height: 180, weight: 80, activity: 'moderate' };
  it('accepts sane inputs', () => expect(validateNeeds(ok)).toBe(true));
  it.each([
    ['age low', { ...ok, age: 9 }],
    ['age high', { ...ok, age: 101 }],
    ['height low', { ...ok, height: 99 }],
    ['height high', { ...ok, height: 251 }],
    ['weight low', { ...ok, weight: 29 }],
    ['weight high', { ...ok, weight: 301 }],
    ['bad gender', { ...ok, gender: 'other' }],
    ['bad activity', { ...ok, activity: 'ultra' }],
    ['NaN age', { ...ok, age: NaN }],
  ])('rejects %s', (_label, input) => expect(validateNeeds(input)).toBe(false));
});
