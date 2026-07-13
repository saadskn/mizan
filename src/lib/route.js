// Hash-based routes: #/ home (finder), #/needs calculator, #/spots directory,
// #/spots/<slug> chain detail. Pure parser here; the React hook that
// subscribes to hashchange lives in src/hooks/useHashRoute.js.
export function parseHash(hash) {
  const parts = (hash ?? '')
    .replace(/^#\/?/, '')
    .split('/')
    .filter(Boolean)
    .map(decodeURIComponent);
  if (parts.length === 0) return { page: 'home' };
  if (parts[0] === 'needs' && parts.length === 1) return { page: 'needs' };
  if (parts[0] === 'build' && parts.length === 1) return { page: 'build' };
  if (parts[0] === 'spots') {
    if (parts.length === 1) return { page: 'spots' };
    if (parts.length === 2) return { page: 'spot', slug: parts[1] };
  }
  return { page: 'home' }; // unknown hashes fall back to the finder
}
