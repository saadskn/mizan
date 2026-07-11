import ThemeToggle from './ThemeToggle.jsx';
import LangToggle from './LangToggle.jsx';

export default function TopBar({ t, theme, setTheme, lang, setLang }) {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between px-5 py-5">
      <span className="logo-tilt items-baseline gap-2.5 cursor-default select-none">
        <span dir="ltr" className="anim-rise font-display font-bold text-2xl tracking-tight text-ink dark:text-cream" style={{ animationDelay: '0.1s' }}>
          Mizan
        </span>
        <span dir="rtl" className="anim-rise font-bold text-lg text-oasis dark:text-mint2 ms-2.5" style={{ animationDelay: '0.3s' }}>
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
