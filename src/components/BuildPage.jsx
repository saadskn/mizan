import { useState } from 'react';
import { usePersistedState } from '../hooks/usePersistedState.js';
import { SPOTS, SPOT_BY_SLUG } from '../lib/spots.js';
import SpotLogo from './SpotLogo.jsx';
import Disclaimer from './Disclaimer.jsx';

const GROUPS = [
  ['main', 'groupMains'],
  ['side', 'groupSides'],
  ['dessert', 'groupDesserts'],
];

const MAX_PER_ITEM = 9;

function Stepper({ n, onAdd, onSub, addLabel }) {
  if (n === 0) {
    return (
      <button type="button" aria-label={addLabel} onClick={onAdd}
              className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-lg font-bold
                         bg-oasis/10 dark:bg-mint2/10 text-oasis dark:text-mint2
                         border border-oasis dark:border-mint2 hover:scale-110 active:scale-95 transition-transform">
        +
      </button>
    );
  }
  return (
    <span dir="ltr" className="flex items-center gap-2 shrink-0">
      <button type="button" onClick={onSub}
              className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
                         bg-white dark:bg-olive-card text-mut dark:text-cream-mut
                         border border-edge dark:border-olive-edge hover:scale-110 active:scale-95 transition-transform">
        −
      </button>
      <span className="font-display font-bold text-lg w-5 text-center text-ink dark:text-cream">{n}</span>
      <button type="button" onClick={onAdd} disabled={n >= MAX_PER_ITEM}
              className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
                         bg-oasis/10 dark:bg-mint2/10 text-oasis dark:text-mint2
                         border border-oasis dark:border-mint2 hover:scale-110 active:scale-95
                         disabled:opacity-40 disabled:hover:scale-100 transition-transform">
        +
      </button>
    </span>
  );
}

export default function BuildPage({ t }) {
  const [build, setBuild] = usePersistedState('mm_build', { slug: null, counts: {} });
  const [query, setQuery] = useState('');

  // a persisted slug can go stale when a chain leaves the roster
  const spot = build.slug ? SPOT_BY_SLUG.get(build.slug) : null;

  const setCount = (id, n) =>
    setBuild((prev) => {
      const counts = { ...prev.counts };
      if (n <= 0) delete counts[id];
      else counts[id] = Math.min(n, MAX_PER_ITEM);
      return { ...prev, counts };
    });

  const totals = { calories: 0, protein: 0, carbs: 0, fats: 0, price: 0, count: 0, est: false };
  if (spot) {
    for (const it of spot.items) {
      const n = build.counts[it.id] ?? 0;
      if (n === 0) continue;
      totals.calories += n * it.calories;
      totals.protein += n * it.protein;
      totals.carbs += n * it.carbs;
      totals.fats += n * it.fats;
      totals.price += n * it.price_sar;
      totals.count += n;
      if (it.estimated) totals.est = true;
    }
    totals.price = Math.round(totals.price * 100) / 100;
  }
  const tilde = totals.est ? '~' : '';

  const q = query.trim().toLowerCase();
  const filtered = q ? SPOTS.filter((s) => s.chain.toLowerCase().includes(q)) : SPOTS;

  return (
    <section className="max-w-3xl mx-auto px-5 pt-2 pb-10">
      <h1 className="anim-rise font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink dark:text-cream">
        {t.navBuild}
      </h1>
      <p className="anim-rise mt-2 text-base text-mut dark:text-cream-mut" style={{ animationDelay: '0.15s' }}>
        {t.buildTagline}
      </p>

      {!spot && (
        <div className="anim-rise mt-6" style={{ animationDelay: '0.3s' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.buildSearch}
            className="w-full rounded-2xl px-4 py-3 text-base font-semibold
                       bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
                       text-ink dark:text-cream
                       placeholder:font-normal placeholder:text-faint dark:placeholder:text-cream-mut/60
                       focus:outline-none focus:ring-2 focus:ring-oasis dark:focus:ring-mint2 focus:border-transparent"
          />
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filtered.map((s) => (
              <button key={s.slug} type="button"
                      onClick={() => setBuild({ slug: s.slug, counts: {} })}
                      className="flex items-center gap-3 p-2.5 rounded-2xl text-start
                                 bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
                                 hover:-translate-y-px hover:border-oasis dark:hover:border-mint2 transition-all">
                <SpotLogo chain={s.chain} slug={s.slug} size="w-10 h-10" />
                <span className="min-w-0">
                  <span dir="ltr" className="block font-display font-bold text-[15px] leading-tight text-ink dark:text-cream truncate">
                    {s.chain}
                  </span>
                  <span className="block text-[11px] text-faint dark:text-cream-mut">
                    {s.items.length} {t.items}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {spot && (
        <>
          <div className="anim-rise mt-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <SpotLogo key={spot.slug} chain={spot.chain} slug={spot.slug} size="w-12 h-12" />
              <div className="min-w-0">
                <h2 dir="ltr" className="font-display font-bold text-2xl leading-tight text-ink dark:text-cream truncate">
                  {spot.chain}
                </h2>
                <p className="text-xs text-faint dark:text-cream-mut">{spot.items.length} {t.items}</p>
              </div>
            </div>
            <button type="button"
                    onClick={() => setBuild({ slug: null, counts: {} })}
                    className="shrink-0 px-3.5 py-2 rounded-full text-sm font-semibold
                               bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
                               text-mut dark:text-cream-mut hover:border-oasis dark:hover:border-mint2 transition-colors">
              {t.buildChange}
            </button>
          </div>

          {totals.count === 0 && (
            <p className="mt-4 text-sm text-faint dark:text-cream-mut">{t.buildEmpty}</p>
          )}

          {GROUPS.map(([cat, labelKey]) => {
            const rows = spot.items.filter((it) => it.category === cat);
            if (rows.length === 0) return null;
            return (
              <div key={cat} className="mt-7">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-display font-bold text-lg text-ink dark:text-cream">{t[labelKey]}</h3>
                  <div className="weave-band flex-1 h-1.5 rounded-sm opacity-50" />
                </div>
                <div className="space-y-2">
                  {rows.map((it) => {
                    const n = build.counts[it.id] ?? 0;
                    return (
                      <div key={it.id}
                           className={`flex items-center justify-between gap-3 p-3 rounded-2xl border transition-colors
                             ${n > 0
                               ? 'bg-oasis/5 dark:bg-mint2/5 border-oasis/60 dark:border-mint2/60'
                               : 'bg-white dark:bg-olive-card border-edge dark:border-olive-edge'}`}>
                        <div className="min-w-0">
                          <div dir="ltr" className="text-sm font-semibold text-ink dark:text-cream leading-snug">
                            {it.name}
                          </div>
                          <div dir="ltr" className="mt-0.5 text-[11px] text-faint dark:text-cream-mut">
                            {it.estimated ? '~' : ''}{it.calories} {t.kcal} · {t.proteinShort} {it.protein}{t.g} · {t.carbsShort} {it.carbs}{t.g} · {t.fatsShort} {it.fats}{t.g} · {it.price_sar} {t.sar}
                          </div>
                        </div>
                        <Stepper n={n} addLabel={`${t.buildMeal}: ${it.name}`}
                                 onAdd={() => setCount(it.id, n + 1)}
                                 onSub={() => setCount(it.id, n - 1)} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {totals.count > 0 && (
            <div className="sticky bottom-3 z-20 mt-8">
              <div className="stitched rounded-2xl p-4 bg-white dark:bg-olive-card
                              border border-oasis dark:border-mint2
                              shadow-[0_10px_35px_rgba(107,63,42,0.2)] dark:shadow-black/50 dark:shadow-xl
                              flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <div className="text-[11px] font-semibold text-faint dark:text-cream-mut">
                    {t.buildMeal} · {totals.count} {totals.count === 1 ? t.item : t.items}
                  </div>
                  <div dir="ltr" className="font-display font-bold text-lg text-ink dark:text-cream">
                    {tilde}{totals.calories} {t.kcal}
                    <span className="ms-3 text-sm font-semibold text-mut dark:text-cream-mut">
                      {t.proteinShort} {tilde}{totals.protein}{t.g} · {t.carbsShort} {tilde}{totals.carbs}{t.g} · {t.fatsShort} {tilde}{totals.fats}{t.g}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span dir="ltr" className="font-display font-bold text-lg text-date dark:text-date-lt">
                    {totals.price} {t.sar}
                  </span>
                  <button type="button" onClick={() => setBuild((prev) => ({ ...prev, counts: {} }))}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold
                                     bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
                                     text-mut dark:text-cream-mut hover:border-clay dark:hover:border-date-lt transition-colors">
                    {t.buildClear}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Disclaimer t={t} />
    </section>
  );
}
