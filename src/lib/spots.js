// Per-chain aggregates for the Food Spots directory. Computed once at module
// load from the same MENU the finder uses — no separate data to maintain.
import { MENU } from '../data/index.js';
import { slugify } from './slug.js';

export const SPOTS = (() => {
  const byChain = new Map();
  for (const it of MENU) {
    let s = byChain.get(it.chain);
    if (!s) {
      s = { chain: it.chain, slug: slugify(it.chain), items: [], cuisineCounts: new Map() };
      byChain.set(it.chain, s);
    }
    s.items.push(it);
    s.cuisineCounts.set(it.cuisine, (s.cuisineCounts.get(it.cuisine) ?? 0) + 1);
  }
  const spots = [...byChain.values()].map(({ chain, slug, items, cuisineCounts }) => ({
    chain,
    slug,
    items,
    // a chain's badge cuisine is whatever most of its items are
    cuisine: [...cuisineCounts.entries()].sort((a, b) => b[1] - a[1])[0][0],
  }));
  spots.sort((a, b) => a.chain.localeCompare(b.chain, 'en', { sensitivity: 'base' }));
  return spots;
})();

export const SPOT_BY_SLUG = new Map(SPOTS.map((s) => [s.slug, s]));
