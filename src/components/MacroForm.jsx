const FIELDS = ['protein', 'carbs', 'fats', 'calories'];

export function parseGoals(values) {
  const goals = {};
  for (const k of FIELDS) {
    const raw = values[k].trim();
    if (raw === '') continue;
    const n = Number(raw);
    if (Number.isFinite(n)) goals[k] = Math.min(Math.max(n, 0), 10000);
  }
  return goals;
}

function sanitize(raw) {
  let s = raw.replace(/[^\d.]/g, '');
  const firstDot = s.indexOf('.');
  if (firstDot !== -1) s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, '');
  return s;
}

export default function MacroForm({ t, values, onChange, onSubmit, error, children }) {
  return (
    <form
      className="anim-rise max-w-3xl mx-auto px-5"
      style={{ animationDelay: '1.3s' }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {FIELDS.map((k) => (
          <label key={k} className="block">
            <span className="text-sm font-semibold text-mut dark:text-cream-mut">{t[k]}</span>
            <input
              type="text"
              inputMode="decimal"
              dir="ltr"
              placeholder={t.placeholder}
              value={values[k]}
              onChange={(e) => onChange(k, sanitize(e.target.value))}
              className="mt-1 w-full rounded-2xl px-3.5 py-2.5 text-lg font-semibold
                         bg-white dark:bg-olive-card
                         border border-edge dark:border-olive-edge
                         text-ink dark:text-cream
                         placeholder:font-normal placeholder:text-faint dark:placeholder:text-cream-mut/60
                         focus:outline-none focus:ring-2 focus:ring-oasis dark:focus:ring-mint2 focus:border-transparent
                         transition-shadow"
            />
          </label>
        ))}
      </div>
      {children}
      {error && (
        <p className="mt-3 text-sm font-medium text-clay dark:text-date-lt">{t[error]}</p>
      )}
      <button
        type="submit"
        className="mt-6 w-full sm:w-auto sm:mx-auto sm:px-14 block rounded-2xl px-6 py-3.5
                   text-base font-bold text-oat
                   bg-oasis hover:bg-date dark:bg-mint2 dark:hover:bg-date-lt dark:text-olive
                   shadow-lg shadow-oasis/25 dark:shadow-mint2/20
                   hover:-translate-y-0.5 active:translate-y-0 active:scale-[.98] transition-all"
      >
        {t.find}
      </button>
    </form>
  );
}
