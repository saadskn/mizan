// Aggregates all chain category files. Each file in ./chains default-exports
// an array of items in the schema below. Category imports are appended here
// as dataset tasks land.
//
// Item schema: { id, chain, name, category: 'main'|'side'|'dessert',
//                calories, protein, carbs, fats, price_sar, estimated }

const CATEGORY_FILES = [
  // appended by dataset tasks: burgers-intl, burgers-saudi, chicken, pizza,
  // sandwiches, shawarma-levant, saudi-traditional, seafood, asian, healthy,
  // bakery-breakfast, desserts
];

export const MENU = CATEGORY_FILES.flat();
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
    if (typeof it.name === 'string' && BEVERAGE_RE.test(it.name)) {
      errors.push(`${where}: beverage-like name "${it.name}" — drinks are banned`);
    }
  });
  return errors;
}
