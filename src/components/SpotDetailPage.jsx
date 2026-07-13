import { SPOT_BY_SLUG } from '../lib/spots.js';
import { LABEL_KEYS } from './CategoryFilter.jsx';
import SpotLogo from './SpotLogo.jsx';
import Disclaimer from './Disclaimer.jsx';

const GROUPS = [
  ['main', 'groupMains'],
  ['side', 'groupSides'],
  ['dessert', 'groupDesserts'],
];

function MacroCell({ children }) {
  return <td dir="ltr" className="px-3 py-2.5 text-end tabular-nums whitespace-nowrap">{children}</td>;
}

export default function SpotDetailPage({ t, slug }) {
  const spot = SPOT_BY_SLUG.get(slug);
  if (!spot) {
    return (
      <section className="max-w-3xl mx-auto px-5 pt-10 pb-16 text-center">
        <p className="text-lg text-mut dark:text-cream-mut">{t.spotNotFound}</p>
        <a href="#/spots" className="mt-4 inline-block font-semibold text-oasis dark:text-mint2 hover:underline">
          {t.backToSpots}
        </a>
      </section>
    );
  }

  const hasEstimated = spot.items.some((it) => it.estimated);

  return (
    <section className="max-w-4xl mx-auto px-5 pt-2 pb-10">
      <a href="#/spots"
         className="anim-rise inline-flex items-center gap-1.5 text-sm font-semibold text-oasis dark:text-mint2 hover:underline">
        <svg viewBox="0 0 24 24" className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor"
             strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        {t.backToSpots}
      </a>

      <div className="anim-rise mt-5 flex items-center gap-4" style={{ animationDelay: '0.1s' }}>
        <SpotLogo key={slug} chain={spot.chain} slug={spot.slug} size="w-14 h-14" />
        <div>
          <h1 dir="ltr" className="font-display font-bold text-3xl tracking-tight text-ink dark:text-cream">
            {spot.chain}
          </h1>
          <p className="mt-0.5 text-sm text-mut dark:text-cream-mut">
            {t[LABEL_KEYS[spot.cuisine]]} · {spot.items.length} {t.items}
          </p>
        </div>
      </div>

      {GROUPS.map(([cat, labelKey]) => {
        const rows = spot.items.filter((it) => it.category === cat);
        if (rows.length === 0) return null;
        return (
          <div key={cat} className="anim-rise mt-8" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-3">
              <h2 className="font-display font-bold text-xl text-ink dark:text-cream">{t[labelKey]}</h2>
              <div className="weave-band flex-1 h-1.5 rounded-sm opacity-50" />
            </div>
            <div className="stitched rounded-2xl overflow-x-auto bg-white dark:bg-olive-card
                            border border-edge dark:border-olive-edge">
              <table className="w-full text-sm text-ink dark:text-cream">
                <thead>
                  <tr className="text-xs text-faint dark:text-cream-mut border-b border-sand-lt dark:border-olive-edge">
                    <th className="px-4 py-2.5 text-start font-semibold">{t.thItem}</th>
                    <th className="px-3 py-2.5 text-end font-semibold">{t.kcal}</th>
                    <th className="px-3 py-2.5 text-end font-semibold">{t.proteinShort}</th>
                    <th className="px-3 py-2.5 text-end font-semibold">{t.carbsShort}</th>
                    <th className="px-3 py-2.5 text-end font-semibold">{t.fatsShort}</th>
                    <th className="px-3 py-2.5 text-end font-semibold">{t.sar}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((it) => (
                    <tr key={it.id}
                        className="border-b border-sand-lt/60 dark:border-olive-edge/60 last:border-0
                                   odd:bg-sand-lt/30 dark:odd:bg-olive-edge/15">
                      <td dir="ltr" className="px-4 py-2.5 text-start">{it.name}</td>
                      <MacroCell>{it.estimated ? '~' : ''}{it.calories}</MacroCell>
                      <MacroCell>{it.protein}</MacroCell>
                      <MacroCell>{it.carbs}</MacroCell>
                      <MacroCell>{it.fats}</MacroCell>
                      <MacroCell>{it.price_sar}</MacroCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {hasEstimated && (
        <p className="mt-4 text-xs text-faint dark:text-cream-mut">{t.estimatedNote}</p>
      )}
      <Disclaimer t={t} />
    </section>
  );
}
