import { CUISINES } from '../data/index.js';

const LABEL_KEYS = {
  burgers: 'catBurgers',
  chicken: 'catChicken',
  pizza: 'catPizza',
  shawarma: 'catShawarma',
  sandwiches: 'catSandwiches',
  saudi: 'catSaudi',
  seafood: 'catSeafood',
  asian: 'catAsian',
  healthy: 'catHealthy',
  bakery: 'catBakery',
  desserts: 'catDesserts',
};

export default function CategoryFilter({ t, selected, onToggle }) {
  return (
    <fieldset className="mt-4">
      <legend className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
        {t.categories}
      </legend>
      <div className="flex flex-wrap gap-2">
        {CUISINES.map((c) => {
          const on = selected.has(c);
          return (
            <button
              key={c}
              type="button"
              role="checkbox"
              aria-checked={on}
              onClick={() => onToggle(c)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors
                ${on
                  ? 'bg-emerald-500/15 dark:bg-emerald-400/15 border-emerald-500 dark:border-emerald-400 text-emerald-700 dark:text-emerald-300'
                  : 'bg-white dark:bg-card-dark border-slate-200 dark:border-edge-dark text-slate-400 dark:text-slate-500'}`}
            >
              {on ? '✓ ' : ''}
              {t[LABEL_KEYS[c]]}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
