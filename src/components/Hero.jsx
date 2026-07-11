export default function Hero({ t }) {
  return (
    <section className="max-w-2xl mx-auto text-center px-5 pt-10 pb-6">
      <h1 dir="ltr" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
        MacroMenu <span className="text-emerald-500 dark:text-emerald-400">Riyadh</span>
      </h1>
      <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">{t.tagline}</p>
    </section>
  );
}
