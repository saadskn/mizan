import { useEffect, useState } from 'react';
import MacroBar from './MacroBar.jsx';

const ORDER = ['protein', 'carbs', 'fats', 'calories'];

function comboLabel(items) {
  const counts = new Map();
  for (const it of items) {
    const e = counts.get(it.id) || { item: it, n: 0 };
    e.n += 1;
    counts.set(it.id, e);
  }
  return [...counts.values()]
    .map(({ item, n }) => (n > 1 ? `${n}× ${item.name}` : item.name))
    .join(' + ');
}

const reducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

function useCountUp(target, delayMs) {
  const [val, setVal] = useState(() => (reducedMotion() ? target : 0));
  useEffect(() => {
    if (reducedMotion()) {
      setVal(target);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const el = t - t0;
      if (el < delayMs) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const k = Math.min((el - delayMs) / 700, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delayMs]);
  return val;
}

// The Mizan dial: a weighing-scale gauge whose needle swings to the match %.
function Dial({ score, delayMs }) {
  const shown = useCountUp(score, delayMs);
  const ARC = 126; // arc length of the semicircle path
  return (
    <div dir="ltr" className="w-[96px] shrink-0 text-center">
      <svg width="96" height="54" viewBox="0 0 96 54" className="overflow-visible" aria-hidden="true">
        <path d="M 8 50 A 40 40 0 0 1 88 50" fill="none" strokeWidth="6"
              className="stroke-sand-lt dark:stroke-olive-track" />
        <path d="M 8 50 A 40 40 0 0 1 88 50" fill="none" strokeWidth="6" strokeLinecap="round"
              className="stroke-oasis dark:stroke-mint2 transition-[stroke-dashoffset]"
              strokeDasharray={ARC}
              strokeDashoffset={ARC * (1 - shown / 100)} />
        <line x1="48" y1="50" x2="48" y2="17" strokeWidth="2.2" strokeLinecap="round"
              className="stroke-date dark:stroke-date-lt"
              style={{ transformOrigin: '48px 50px', transform: `rotate(${(shown / 100) * 180 - 90}deg)` }} />
        <circle cx="48" cy="50" r="4" className="fill-date dark:fill-date-lt" />
      </svg>
      <div className="font-display font-bold text-[17px] -mt-0.5 text-oasis dark:text-mint2">
        {shown}%
      </div>
    </div>
  );
}

export default function MealCard({ t, result, goals, index = 0 }) {
  const { chain, items, totals, score } = result;
  const baseDelay = 250 + index * 90;
  return (
    <article
      className="stitched anim-rise rounded-2xl p-5 bg-white dark:bg-olive-card
                 border border-edge dark:border-olive-edge
                 shadow-[0_10px_30px_rgba(107,63,42,0.07)] dark:shadow-none
                 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(107,63,42,0.13)]
                 transition-all"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 dir="ltr" className="font-display font-bold text-xl text-ink dark:text-cream">
            {chain}
          </h3>
          <p dir="ltr" className="mt-0.5 text-[13px] leading-snug text-mut dark:text-cream-mut">
            {comboLabel(items)}
          </p>
        </div>
        <Dial score={score} delayMs={baseDelay + 150} />
      </div>
      <div className="space-y-2 mt-4">
        {ORDER.map((k) => (
          <MacroBar key={k} t={t} macroKey={k} value={totals[k]} goal={goals[k]} delayMs={baseDelay} />
        ))}
      </div>
      <div className="mt-4 pt-3 flex items-center justify-between border-t border-sand-lt dark:border-olive-edge">
        <span className="text-[11px] text-faint dark:text-cream-mut">
          {items.length} {items.length === 1 ? t.item : t.items}
        </span>
        <span dir="ltr" className="font-display font-bold text-lg text-date dark:text-date-lt">
          {totals.price_sar} {t.sar}
        </span>
      </div>
    </article>
  );
}
