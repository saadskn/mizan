import ThemeToggle from './ThemeToggle.jsx';
import LangToggle from './LangToggle.jsx';

export default function TopBar({ t, theme, setTheme, lang, setLang }) {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between px-5 py-5">
      <span className="flex items-baseline gap-2.5">
        <span dir="ltr" className="font-display font-bold text-2xl tracking-tight text-ink dark:text-cream">
          Mizan
        </span>
        <span dir="rtl" className="font-bold text-lg text-oasis dark:text-mint2">
          ميزان
        </span>
      </span>
      <div className="flex items-center gap-2">
        <ThemeToggle t={t} theme={theme} setTheme={setTheme} />
        <LangToggle t={t} lang={lang} setLang={setLang} />
      </div>
    </header>
  );
}
