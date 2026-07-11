import ThemeToggle from './ThemeToggle.jsx';
import LangToggle from './LangToggle.jsx';

export default function TopBar({ t, theme, setTheme, lang, setLang }) {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
      <span dir="ltr" className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100">
        MacroMenu <span className="text-emerald-500 dark:text-emerald-400">Riyadh</span>
      </span>
      <div className="flex items-center gap-2">
        <ThemeToggle t={t} theme={theme} setTheme={setTheme} />
        <LangToggle t={t} lang={lang} setLang={setLang} />
      </div>
    </header>
  );
}
