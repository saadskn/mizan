import { useState } from 'react';

// Logo image from public/logos/<slug>.png with a monogram fallback: chains
// we haven't sourced a logo for yet get initials on a token-colored disc,
// so local spots look intentional rather than broken.
const DISC_CLASSES = [
  'bg-oasis', 'bg-date', 'bg-clay', 'bg-oasis-2', 'bg-warm', 'bg-sand-dk',
];

function initials(chain) {
  const words = chain.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean);
  return words.slice(0, 2).map((w) => w[0].toUpperCase()).join('') || '?';
}

function hue(chain) {
  let h = 0;
  for (const ch of chain) h = (h * 31 + ch.charCodeAt(0)) % 997;
  return DISC_CLASSES[h % DISC_CLASSES.length];
}

export default function SpotLogo({ chain, slug, size = 'w-16 h-16' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span aria-hidden="true"
            className={`${size} ${hue(chain)} rounded-full flex items-center justify-center
                        font-display font-bold text-xl text-oat select-none`}>
        {initials(chain)}
      </span>
    );
  }
  return (
    <img
      src={`${import.meta.env.BASE_URL}logos/${slug}.png`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${size} object-contain rounded-2xl`}
    />
  );
}
