import MealCard from './MealCard.jsx';
import Disclaimer from './Disclaimer.jsx';

export default function ResultsGrid({ t, results, goals }) {
  if (!results) return null;
  return (
    <section className="max-w-6xl mx-auto px-5 py-12">
      <div className="anim-rise flex items-center gap-4 mb-6">
        <h2 className="font-display font-bold text-2xl text-ink dark:text-cream">
          {t.resultsTitle}
        </h2>
        <div className="weave-band anim-grow-x flex-1 h-1.5 rounded-sm opacity-70" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {results.map((r, idx) => (
          <MealCard key={idx} t={t} result={r} goals={goals} index={idx} />
        ))}
      </div>
      <Disclaimer t={t} />
    </section>
  );
}
