import { describe, it, expect } from 'vitest';
import { validateMenu, MENU, CHAINS, CUISINES } from './index.js';

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

describe('final dataset', () => {
  it('covers exactly 99 chains (see roster amendments in the spec)', () => {
    expect(CHAINS).toHaveLength(99);
  });

  it('tags every item with a known cuisine', () => {
    const known = new Set(CUISINES);
    for (const i of MENU) expect(known.has(i.cuisine), `${i.id}: ${i.cuisine}`).toBe(true);
  });

  it('has at least 5 items per chain and 2500-3500 items total', () => {
    const counts = new Map();
    for (const i of MENU) counts.set(i.chain, (counts.get(i.chain) || 0) + 1);
    for (const [chain, n] of counts) expect(n, chain).toBeGreaterThanOrEqual(5);
    expect(MENU.length).toBeGreaterThanOrEqual(2500);
    expect(MENU.length).toBeLessThanOrEqual(3500);
  });
});
