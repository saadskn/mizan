import { useInView } from '../hooks/useInView.js';

// The "numbers are close estimates" footing — every page ends with it.
export default function Disclaimer({ t }) {
  const [ref, inView] = useInView(0.4);
  return (
    <p ref={ref}
       className={`mt-8 text-center text-xs text-faint dark:text-cream-mut max-w-xl mx-auto ${inView ? 'anim-rise' : 'opacity-0'}`}
       style={{ animationDelay: '250ms' }}>
      ⚖ {t.disclaimer}
    </p>
  );
}
