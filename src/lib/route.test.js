import { describe, it, expect } from 'vitest';
import { parseHash } from './route.js';

describe('parseHash', () => {
  it.each([
    ['', { page: 'home' }],
    ['#', { page: 'home' }],
    ['#/', { page: 'home' }],
    ['#/needs', { page: 'needs' }],
    ['#/spots', { page: 'spots' }],
    ['#/spots/', { page: 'spots' }],
    ['#/spots/mcdonalds', { page: 'spot', slug: 'mcdonalds' }],
    ['#/spots/zaatar-w-zeit', { page: 'spot', slug: 'zaatar-w-zeit' }],
    ['#/nonsense', { page: 'home' }],
    ['#/needs/extra', { page: 'home' }],
  ])('%s → %o', (hash, expected) => {
    expect(parseHash(hash)).toEqual(expected);
  });
});
