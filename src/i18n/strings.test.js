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
