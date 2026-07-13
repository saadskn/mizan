// Chain name → URL/filename slug. Used for #/spots/<slug> routes and
// public/logos/<slug>.png lookups; slug.test.js asserts uniqueness across
// the whole roster, so a new chain whose name collides fails CI.
export function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .normalize('NFKD')
    .replace(/['’.]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
