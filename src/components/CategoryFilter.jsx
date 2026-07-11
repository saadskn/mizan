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

// Hand-drawn style line icons, one per cuisine.
const ICONS = {
  burgers: <path d="M4 10c0-3 3.6-5 8-5s8 2 8 5H4zM4 13h16M4 16c0 2 2 3 4 3h8c2 0 4-1 4-3H4z" />,
  chicken: <path d="M15 4a5 5 0 0 1 1 9l-5 5-2-2 5-5a5 5 0 0 1 1-7zM7 18l-1 1M5.5 15.5l-1 1" />,
  pizza: <path d="M12 3L3 20h18L12 3zM12 11.5v.01M10 16v.01M14 16.5v.01" />,
  shawarma: <path d="M9 3h6l-1.5 17h-3L9 3zM8 7h8M8.5 11h7M9 15h6" />,
  sandwiches: <path d="M3 9h18v3H3zM5 12v4c0 1.5 1 2.5 2.5 2.5h9c1.5 0 2.5-1 2.5-2.5v-4M6 9c0-3 4-5 6-5s6 2 6 5" />,
  saudi: <path d="M4 12h16l-2 7H6l-2-7zM8 12c0-5 8-5 8 0M12 4v3" />,
  seafood: <path d="M6 14c2-6 10-6 12 0-2 4-10 4-12 0zM18 14c1 1 2 1 3 0M9 13v.01" />,
  asian: <path d="M4 11h16a8 8 0 0 1-16 0zM8 8l8-5M10 9l8-4" />,
  healthy: <path d="M12 21C7 17 4 13 4 9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4-5 8-10 12zM12 6v9" />,
  bakery: <path d="M12 5c5 0 9 3 9 6l-4 2-2-2-3 3-3-3-2 2-4-2c0-3 4-6 9-6z" />,
  desserts: <path d="M5 13a7 7 0 0 1 14 0zM5 13c1.5 2 3 2 4.5 0 1.5 2 3.5 2 5 0 1.5 2 3 2 4.5 0M12 6c0-2 1.5-3 3-3" />,
};

export default function CategoryFilter({ t, selected, onToggle }) {
  return (
    <fieldset className="mt-5">
      <legend className="text-sm font-semibold text-mut dark:text-cream-mut mb-2.5">
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
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm border
                transition-all hover:-translate-y-px active:scale-95
                ${on
                  ? 'chip-pop bg-oasis/10 dark:bg-mint2/10 border-oasis dark:border-mint2 text-oasis dark:text-mint2 font-semibold'
                  : 'bg-white dark:bg-olive-card border-edge dark:border-olive-edge text-faint dark:text-cream-mut'}`}
            >
              <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] shrink-0"
                   fill="none" stroke="currentColor" strokeWidth="1.7"
                   strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[c]}
              </svg>
              {t[LABEL_KEYS[c]]}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
