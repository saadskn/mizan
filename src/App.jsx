import { useEffect, useRef, useState } from 'react';
import { STRINGS } from './i18n/strings.js';
import { usePersistedState } from './hooks/usePersistedState.js';
import { findMatches } from './lib/matching.js';
import { MENU } from './data/index.js';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';
import MacroForm, { parseGoals } from './components/MacroForm.jsx';
import ResultsGrid from './components/ResultsGrid.jsx';

function systemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = usePersistedState('mm_theme', systemTheme());
  const [lang, setLang] = usePersistedState('mm_lang', 'en');
  const [values, setValues] = useState({ protein: '', carbs: '', fats: '', calories: '' });
  const [error, setError] = useState(false);
  const [results, setResults] = useState(null);
  const [goals, setGoals] = useState(null);
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
  }, [results]);

  function handleSubmit() {
    const parsed = parseGoals(values);
    if (Object.keys(parsed).length === 0) {
      setError(true);
      setResults(null);
      return;
    }
    setError(false);
    setGoals(parsed);
    setResults(findMatches(MENU, parsed));
  }

  return (
    <div className="min-h-screen bg-page dark:bg-page-dark transition-colors pb-16">
      <TopBar t={t} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <MacroForm
        t={t}
        values={values}
        onChange={(k, v) => setValues((prev) => ({ ...prev, [k]: v }))}
        onSubmit={handleSubmit}
        error={error}
      />
      <div ref={resultsRef}>
        <ResultsGrid t={t} results={results} goals={goals ?? {}} />
      </div>
    </div>
  );
}
