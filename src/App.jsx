import { useEffect } from 'react';
import { STRINGS } from './i18n/strings.js';
import { usePersistedState } from './hooks/usePersistedState.js';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';

function systemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = usePersistedState('mm_theme', systemTheme());
  const [lang, setLang] = usePersistedState('mm_lang', 'en');
  const t = STRINGS[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-page dark:bg-page-dark transition-colors">
      <TopBar t={t} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <Hero t={t} />
    </div>
  );
}
