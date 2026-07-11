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

export default function MacroForm({ t, values, onChange, onSubmit, error }) {
  return (
    <form
      className="max-w-3xl mx-auto px-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {FIELDS.map((k) => (
          <label key={k} className="block">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{t[k]}</span>
            <input
              type="text"
              inputMode="decimal"
              dir="ltr"
              placeholder={t.placeholder}
              value={values[k]}
              onChange={(e) => onChange(k, sanitize(e.target.value))}
              className="mt-1 w-full rounded-xl px-3 py-2.5 text-base
                         bg-white dark:bg-card-dark
                         border border-slate-200 dark:border-edge-dark
                         text-slate-800 dark:text-slate-100
                         placeholder:text-slate-400 dark:placeholder:text-slate-500
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
            />
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-3 text-sm font-medium text-red-500 dark:text-red-400">{t.errNoInput}</p>
      )}
      <button
        type="submit"
        className="mt-5 w-full sm:w-auto sm:mx-auto sm:px-12 block rounded-xl px-6 py-3
                   text-base font-bold text-white
                   bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-300
                   dark:text-slate-900 shadow-lg shadow-emerald-500/25 transition-colors"
      >
        {t.find}
      </button>
    </form>
  );
}
