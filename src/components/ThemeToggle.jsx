export default function ThemeToggle({ t, theme, setTheme }) {
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      aria-label={t.themeToggle}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="w-9 h-9 rounded-full flex items-center justify-center text-base
                 bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
                 shadow-sm hover:scale-105 active:scale-95 transition-transform"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
