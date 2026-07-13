import { useState } from 'react';
import { usePersistedState } from '../hooks/usePersistedState.js';
import { ACTIVITY_LEVELS, dailyNeeds, validateNeeds } from '../lib/needs.js';

const ACTIVITY_KEYS = {
  sedentary: 'actSedentary',
  light: 'actLight',
  moderate: 'actModerate',
  hard: 'actHard',
  athlete: 'actAthlete',
};

const inputCls = `mt-1 w-full rounded-2xl px-3.5 py-2.5 text-lg font-semibold
  bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
  text-ink dark:text-cream
  placeholder:font-normal placeholder:text-faint dark:placeholder:text-cream-mut/60
  focus:outline-none focus:ring-2 focus:ring-oasis dark:focus:ring-mint2 focus:border-transparent
  transition-shadow`;

function sanitize(raw) {
  let s = raw.replace(/[^\d.]/g, '');
  const firstDot = s.indexOf('.');
  if (firstDot !== -1) s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, '');
  return s;
}

function Pill({ on, onClick, children }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={on}
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-sm border transition-all hover:-translate-y-px active:scale-95
        ${on
          ? 'chip-pop bg-oasis/10 dark:bg-mint2/10 border-oasis dark:border-mint2 text-oasis dark:text-mint2 font-semibold'
          : 'bg-white dark:bg-olive-card border-edge dark:border-olive-edge text-faint dark:text-cream-mut'}`}
    >
      {children}
    </button>
  );
}

function RangeCard({ label, min, max, unit, delayMs }) {
  return (
    <div className="stitched rounded-2xl p-5 text-center bg-white dark:bg-olive-card
                    border border-edge dark:border-olive-edge anim-rise"
         style={{ animationDelay: `${delayMs}ms` }}>
      <div className="text-sm font-semibold text-mut dark:text-cream-mut">{label}</div>
      <div dir="ltr" className="mt-1 font-display font-bold text-2xl text-ink dark:text-cream">
        {min === max ? min : `${min}–${max}`}
        <span className="text-base text-date dark:text-date-lt ms-1">{unit}</span>
      </div>
    </div>
  );
}

export default function NeedsPage({ t }) {
  const [form, setForm] = usePersistedState('mm_needs', {
    gender: 'male', age: '', height: '', weight: '', activity: 'moderate',
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [calcId, setCalcId] = useState(0);

  const set = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));

  function handleSubmit() {
    if (form.gender === 'nb') {
      // The photo already stands in for the results — nothing to calculate.
      setError(false);
      return;
    }
    const input = {
      gender: form.gender,
      activity: form.activity,
      age: Number(form.age),
      height: Number(form.height),
      weight: Number(form.weight),
    };
    if (form.age === '' || form.height === '' || form.weight === '' || !validateNeeds(input)) {
      setError(true);
      setResult(null);
      return;
    }
    setError(false);
    setResult(dailyNeeds(input));
    setCalcId((n) => n + 1); // remount the cards so the entrance replays
  }

  const fields = [
    ['age', t.age], ['height', t.heightCm], ['weight', t.weightKg],
  ];

  return (
    <section className="max-w-3xl mx-auto px-5 pt-2 pb-10">
      <h1 className="anim-rise font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink dark:text-cream">
        {t.needsTitle}
      </h1>
      <p className="anim-rise mt-2 text-base text-mut dark:text-cream-mut" style={{ animationDelay: '0.15s' }}>
        {t.needsTagline}
      </p>

      <form className="anim-rise mt-6" style={{ animationDelay: '0.3s' }}
            onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <fieldset>
          <legend className="text-sm font-semibold text-mut dark:text-cream-mut mb-2.5">{t.gender}</legend>
          <div className="flex gap-2" role="radiogroup" aria-label={t.gender}>
            <Pill on={form.gender === 'male'} onClick={() => set('gender', 'male')}>{t.genderMale}</Pill>
            <Pill on={form.gender === 'female'} onClick={() => set('gender', 'female')}>{t.genderFemale}</Pill>
            <Pill on={form.gender === 'nb'} onClick={() => set('gender', 'nb')}>{t.genderNb}</Pill>
          </div>
        </fieldset>

        {form.gender === 'nb' && (
          <div className="mt-8 flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}nonbinary.jpg`}
              alt=""
              className="anim-rise w-[540px] max-w-full rounded-3xl border border-edge dark:border-olive-edge
                         shadow-xl shadow-ink/10 dark:shadow-black/40"
            />
          </div>
        )}

        {form.gender !== 'nb' && (<>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {fields.map(([k, label]) => (
            <label key={k} className="block">
              <span className="text-sm font-semibold text-mut dark:text-cream-mut">{label}</span>
              <input type="text" inputMode="decimal" dir="ltr" placeholder={t.placeholder}
                     value={form[k]} onChange={(e) => set(k, sanitize(e.target.value))}
                     className={inputCls} />
            </label>
          ))}
        </div>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-mut dark:text-cream-mut mb-2.5">{t.activity}</legend>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={t.activity}>
            {ACTIVITY_LEVELS.map((a) => (
              <Pill key={a} on={form.activity === a} onClick={() => set('activity', a)}>
                {t[ACTIVITY_KEYS[a]]}
              </Pill>
            ))}
          </div>
        </fieldset>

        {error && (
          <p className="mt-3 text-sm font-medium text-clay dark:text-date-lt">{t.errNeeds}</p>
        )}

        <button type="submit"
                className="btn-sheen mt-6 w-full sm:w-auto sm:mx-auto sm:px-14 block rounded-2xl px-6 py-3.5
                           text-base font-bold text-oat
                           bg-oasis hover:bg-date dark:bg-mint2 dark:hover:bg-date-lt dark:text-olive
                           shadow-lg shadow-oasis/25 dark:shadow-mint2/20
                           hover:-translate-y-0.5 active:translate-y-0 active:scale-[.98] transition-all duration-300">
          {t.calcBtn}
        </button>
        </>)}
      </form>

      {form.gender !== 'nb' && result && (
        <div key={calcId} className="mt-10">
          <div className="anim-rise flex items-center gap-4 mb-5">
            <h2 className="font-display font-bold text-2xl text-ink dark:text-cream">{t.needsResultTitle}</h2>
            <div className="weave-band anim-grow-x flex-1 h-1.5 rounded-sm opacity-70" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <RangeCard label={t.caloriesShort} min={result.calories} max={result.calories} unit={t.kcal} delayMs={0} />
            <RangeCard label={t.proteinShort} min={result.protein.min} max={result.protein.max} unit={t.g} delayMs={120} />
            <RangeCard label={t.carbsShort} min={result.carbs.min} max={result.carbs.max} unit={t.g} delayMs={240} />
            <RangeCard label={t.fatsShort} min={result.fats.min} max={result.fats.max} unit={t.g} delayMs={360} />
          </div>
          <p className="anim-rise mt-4 text-sm text-mut dark:text-cream-mut" style={{ animationDelay: '450ms' }}>
            {t.needsHint}
          </p>
        </div>
      )}
    </section>
  );
}
