export default function ThemeToggle({ t, theme, setTheme }) {
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      aria-label={t.themeToggle}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="w-9 h-9 rounded-full flex items-center justify-center text-lg
                 bg-white dark:bg-card-dark border border-slate-200 dark:border-edge-dark
                 shadow-sm hover:scale-105 transition-transform"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
