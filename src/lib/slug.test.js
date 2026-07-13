import { describe, it, expect } from 'vitest';
import { slugify } from './slug.js';
import { CHAINS } from '../data/index.js';

describe('slugify', () => {
  it('strips apostrophes and punctuation', () => {
    expect(slugify("McDonald's")).toBe('mcdonalds');
    expect(slugify("Dunkin'")).toBe('dunkin');
  });
  it('joins words with hyphens', () => {
    expect(slugify('Zaatar w Zeit')).toBe('zaatar-w-zeit');
    expect(slugify('Buffalo Wild Wings')).toBe('buffalo-wild-wings');
  });
  it('lowercases', () => expect(slugify('PAUL')).toBe('paul'));

  it('every chain slug is unique and url-safe', () => {
    const slugs = CHAINS.map(slugify);
    expect(new Set(slugs).size).toBe(CHAINS.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
});
