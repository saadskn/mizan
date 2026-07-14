// Aggregates all chain category files. Each file in ./chains default-exports
// an array of items in the schema below. Category imports are appended here
// as dataset tasks land.
//
// Item schema: { id, chain, name, category: 'main'|'side'|'dessert',
//                calories, protein, carbs, fats, price_sar, estimated }

import burgersIntl from './chains/burgers-intl.js';
import burgersSaudi from './chains/burgers-saudi.js';
import chicken from './chains/chicken.js';
import pizza from './chains/pizza.js';
import sandwiches from './chains/sandwiches.js';
import shawarmaLevant from './chains/shawarma-levant.js';
import saudiTraditional from './chains/saudi-traditional.js';
import seafood from './chains/seafood.js';
import asian from './chains/asian.js';
import healthy from './chains/healthy.js';
import bakeryBreakfast from './chains/bakery-breakfast.js';
import desserts from './chains/desserts.js';

// Each file is tagged with a cuisine so the UI can filter by category.
const TAGGED_FILES = [
  [burgersIntl, 'burgers'],
  [burgersSaudi, 'burgers'],
  [chicken, 'chicken'],
  [pizza, 'pizza'],
  [sandwiches, 'sandwiches'],
  [shawarmaLevant, 'shawarma'],
  [saudiTraditional, 'saudi'],
  [seafood, 'seafood'],
  [asian, 'asian'],
  [healthy, 'healthy'],
  [bakeryBreakfast, 'bakery'],
  [desserts, 'desserts'],
];

// Display order for the category checklist.
export const CUISINES = [
  'burgers', 'chicken', 'pizza', 'pasta', 'shawarma', 'lebanese', 'sandwiches',
  'saudi', 'seafood', 'asian', 'healthy', 'bakery', 'desserts',
];

// Chain-level cuisine overrides. The full-menu Lebanese restaurants live in
// the shawarma file but deserve their own filter — their menus are mostly
// mezze/manaeesh/wraps, not shawarma (their actual shawarma items carry
// per-item `cuisine: 'shawarma'` overrides). CasaPasta lives in the pizza
// file but is a pasta restaurant top to bottom.
const CHAIN_CUISINE = {
  'Barbar': 'lebanese',
  'Zaatar w Zeit': 'lebanese',
  'Allo Beirut': 'lebanese',
  'Operation Falafel': 'lebanese',
  'Bayt Alfatirah Aldimashqia': 'lebanese',
  'Alkhafeef': 'lebanese',
  'CasaPasta': 'pasta',
};

// Cuisine resolution: per-item override > per-chain override > file default.
// A pizza sold at a shawarma chain should surface under the pizza filter.
export const MENU = TAGGED_FILES.flatMap(([items, cuisine]) =>
  items.map((i) => ({ ...i, cuisine: i.cuisine ?? CHAIN_CUISINE[i.chain] ?? cuisine }))
);
export const CHAINS = [...new Set(MENU.map((i) => i.chain))];

const CATEGORIES = new Set(['main', 'side', 'dessert']);
const BEVERAGE_RE = /\b(cola|pepsi|7\s?up|juice|water|coffee|latte|tea|karak|smoothie|milkshake|soda|frappe|mojito)\b/i;

export function validateMenu(items) {
  const errors = [];
  const seen = new Set();
  items.forEach((it, idx) => {
    const where = `item[${idx}] (${it?.id ?? '?'})`;
    if (!it.id || typeof it.id !== 'string') errors.push(`${where}: missing id`);
    else if (seen.has(it.id)) errors.push(`${where}: duplicate id`);
    else seen.add(it.id);
    if (!it.chain) errors.push(`${where}: missing chain`);
    if (!it.name) errors.push(`${where}: missing name`);
    if (!CATEGORIES.has(it.category)) errors.push(`${where}: bad category "${it.category}"`);
    for (const k of ['protein', 'carbs', 'fats']) {
      if (!Number.isFinite(it[k]) || it[k] < 0) errors.push(`${where}: bad ${k}`);
    }
    if (!Number.isFinite(it.calories) || it.calories <= 0) errors.push(`${where}: bad calories`);
    if (!Number.isFinite(it.price_sar) || it.price_sar <= 0) errors.push(`${where}: bad price_sar`);
    if (typeof it.estimated !== 'boolean') errors.push(`${where}: estimated must be boolean`);
    // "Karak Ice Cream" and similar dessert names may contain a drink word.
    if (typeof it.name === 'string' && BEVERAGE_RE.test(it.name) && !/ice\s?cream/i.test(it.name)) {
      errors.push(`${where}: beverage-like name "${it.name}" — drinks are banned`);
    }
  });
  return errors;
}
