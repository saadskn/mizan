import ThemeToggle from './ThemeToggle.jsx';
import LangToggle from './LangToggle.jsx';
import NavMenu from './NavMenu.jsx';

export default function TopBar({ t, theme, setTheme, lang, setLang, route }) {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between px-5 py-5">
      <a href="#/" className="logo-tilt items-baseline gap-2.5 select-none">
        <span dir="ltr" className="anim-rise font-display font-bold text-2xl tracking-tight text-ink dark:text-cream" style={{ animationDelay: '0.1s' }}>
          Mizan
        </span>
        <span dir="rtl" className="anim-rise font-bold text-lg text-oasis dark:text-mint2 ms-2.5" style={{ animationDelay: '0.3s' }}>
          ميزان
        </span>
      </a>
      <div className="flex items-center gap-2">
        <ThemeToggle t={t} theme={theme} setTheme={setTheme} />
        <LangToggle t={t} lang={lang} setLang={setLang} />
        <NavMenu t={t} route={route} />
      </div>
    </header>
  );
}
