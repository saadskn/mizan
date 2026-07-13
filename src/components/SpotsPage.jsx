import { SPOTS } from '../lib/spots.js';
import { LABEL_KEYS } from './CategoryFilter.jsx';
import SpotLogo from './SpotLogo.jsx';
import Disclaimer from './Disclaimer.jsx';
import { useInView } from '../hooks/useInView.js';

function SpotTile({ t, spot, index }) {
  const [ref, inView] = useInView(0.15);
  const col = index % 4;
  return (
    <a
      ref={ref}
      href={`#/spots/${spot.slug}`}
      className={`stitched rounded-2xl p-4 text-center bg-white dark:bg-olive-card
                  border border-edge dark:border-olive-edge
                  shadow-[0_10px_30px_rgba(107,63,42,0.07)] dark:shadow-none
                  hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(107,63,42,0.13)]
                  transition-all ${inView ? 'anim-rise' : 'opacity-0'}`}
      style={{ animationDelay: `${col * 90}ms` }}
    >
      <span className="flex justify-center">
        <SpotLogo chain={spot.chain} slug={spot.slug} />
      </span>
      <span dir="ltr" className="mt-3 block font-display font-bold text-[15px] leading-tight text-ink dark:text-cream">
        {spot.chain}
      </span>
      <span className="mt-1 block text-[11px] text-faint dark:text-cream-mut">
        {t[LABEL_KEYS[spot.cuisine]]} · {spot.items.length} {t.items}
      </span>
    </a>
  );
}

export default function SpotsPage({ t }) {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-2 pb-10">
      <h1 className="anim-rise font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink dark:text-cream">
        {t.navSpots}
      </h1>
      <p className="anim-rise mt-2 text-base text-mut dark:text-cream-mut" style={{ animationDelay: '0.15s' }}>
        {t.spotsTagline}
      </p>
      <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {SPOTS.map((spot, i) => (
          <SpotTile key={spot.slug} t={t} spot={spot} index={i} />
        ))}
      </div>
      <Disclaimer t={t} />
    </section>
  );
}
