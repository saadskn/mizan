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

export default function MealCard({ t, result, goals }) {
  const { chain, items, totals, score } = result;
  const filled = ORDER.filter((k) => Number.isFinite(goals[k]));
  return (
    <article
      className="rounded-2xl p-5 bg-white dark:bg-card-dark
                 border border-slate-200 dark:border-edge-dark
                 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 dir="ltr" className="font-bold text-slate-800 dark:text-slate-100">{chain}</h3>
        <span className="shrink-0 text-sm font-bold text-emerald-600 dark:text-emerald-400">
          {score}% {t.match}
        </span>
      </div>
      <p dir="ltr" className="mt-1 mb-4 text-sm text-slate-500 dark:text-slate-400">
        {comboLabel(items)}
      </p>
      <div className="space-y-2">
        {filled.map((k) => (
          <MacroBar key={k} t={t} macroKey={k} value={totals[k]} goal={goals[k]} />
        ))}
      </div>
      <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100 dark:border-edge-dark">
        <span className="text-xs text-slate-400 dark:text-slate-500">
          {items.length} {items.length === 1 ? t.item : t.items}
          {' · '}
          {Math.round(totals.calories)} {t.kcal}
        </span>
        <span dir="ltr" className="font-bold text-emerald-700 dark:text-emerald-400">
          {totals.price_sar} {t.sar}
        </span>
      </div>
    </article>
  );
}
