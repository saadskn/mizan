export default function LangToggle({ t, lang, setLang }) {
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="h-9 px-3 rounded-full text-sm font-semibold
                 bg-white dark:bg-card-dark border border-slate-200 dark:border-edge-dark
                 text-slate-700 dark:text-slate-200 shadow-sm hover:scale-105 transition-transform"
    >
      {t.langToggle}
    </button>
  );
}
