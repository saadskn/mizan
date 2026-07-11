import { useEffect, useRef, useState } from 'react';
import { STRINGS } from './i18n/strings.js';
import { usePersistedState } from './hooks/usePersistedState.js';
import { findMatches } from './lib/matching.js';
import { MENU, CUISINES } from './data/index.js';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';
import MacroForm, { parseGoals } from './components/MacroForm.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ResultsGrid from './components/ResultsGrid.jsx';

function systemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = usePersistedState('mm_theme', systemTheme());
  const [lang, setLang] = usePersistedState('mm_lang', 'en');
  const [values, setValues] = useState({ protein: '', carbs: '', fats: '', calories: '' });
  const [cats, setCats] = useState(() => new Set(CUISINES));
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [goals, setGoals] = useState(null);
  const [searchId, setSearchId] = useState(0);
  const resultsRef = useRef(null);
  const t = STRINGS[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (results) resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [results, searchId]);

  function toggleCat(c) {
    setCats((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  }

  function handleSubmit() {
    const parsed = parseGoals(values);
    if (Object.keys(parsed).length === 0) {
      setError('errNoInput');
      setResults(null);
      return;
    }
    if (cats.size === 0) {
      setError('errNoCategory');
      setResults(null);
      return;
    }
    setError(null);
    setGoals(parsed);
    setResults(findMatches(MENU.filter((i) => cats.has(i.cuisine)), parsed));
    setSearchId((s) => s + 1); // remounts the grid so the entrance animations replay
  }

  return (
    <div className="min-h-screen bg-oat dark:bg-olive text-ink dark:text-cream transition-colors duration-500">
      <div aria-hidden="true" className="bg-lattice" />
      <div aria-hidden="true" className="bg-wash" />
      {/* keyed by lang: switching language lets the whole page rise back in */}
      <div key={lang} className="relative z-10 pb-16">
        <TopBar t={t} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
        <Hero t={t} />
        <MacroForm
          t={t}
          values={values}
          onChange={(k, v) => setValues((prev) => ({ ...prev, [k]: v }))}
          onSubmit={handleSubmit}
          error={error}
        >
          <CategoryFilter t={t} selected={cats} onToggle={toggleCat} />
        </MacroForm>
        <div ref={resultsRef}>
          <ResultsGrid key={searchId} t={t} results={results} goals={goals ?? {}} />
        </div>
      </div>
    </div>
  );
}
