import MealCard from './MealCard.jsx';

export default function ResultsGrid({ t, results, goals }) {
  if (!results) return null;
  return (
    <section className="max-w-6xl mx-auto px-5 py-10">
      <h2 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-5">
        {t.resultsTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((r, idx) => (
          <MealCard key={idx} t={t} result={r} goals={goals} />
        ))}
      </div>
    </section>
  );
}
