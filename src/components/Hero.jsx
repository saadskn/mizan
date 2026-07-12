export default function Hero({ t }) {
  const words = [...t.heroPlain.split(' '), null]; // null marks the accent word
  return (
    <section className="max-w-3xl mx-auto text-center px-5 pt-4 pb-6">
      <svg className="mx-auto mb-5" width="300" height="16" viewBox="0 0 360 18" aria-hidden="true">
        <polyline
          className="najdi-line"
          points="0,16 15,3 30,16 45,3 60,16 75,3 90,16 105,3 120,16 135,3 150,16 165,3 180,16 195,3 210,16 225,3 240,16 255,3 270,16 285,3 300,16 315,3 330,16 345,3 360,16"
        />
      </svg>
      <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[3.4rem] tracking-tight text-ink dark:text-cream leading-tight">
        {words.map((w, i) => (
          <span key={i} className="anim-word" style={{ animationDelay: `${0.55 + i * 0.14}s` }}>
            {w === null ? (
              <em className="italic text-oasis dark:text-mint2">{t.heroAccent}</em>
            ) : (
              w
            )}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </h1>
      <p className="anim-rise mt-4 text-base sm:text-lg text-mut dark:text-cream-mut" style={{ animationDelay: '1.15s' }}>
        {t.tagline}
      </p>
    </section>
  );
}
