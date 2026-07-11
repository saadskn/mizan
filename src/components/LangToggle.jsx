export default function LangToggle({ t, lang, setLang }) {
  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="h-9 px-3.5 rounded-full text-sm font-semibold
                 bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
                 text-date dark:text-sand-dk shadow-sm hover:scale-105 active:scale-95 transition-transform"
    >
      {t.langToggle}
    </button>
  );
}
