import { useEffect, useRef, useState } from 'react';

const ENTRIES = [
  { hash: '#/', page: 'home', labelKey: 'find' },
  { hash: '#/needs', page: 'needs', labelKey: 'navNeeds' },
  { hash: '#/spots', page: 'spots', labelKey: 'navSpots' },
];

export default function NavMenu({ t, route }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = route.page === 'spot' ? 'spots' : route.page;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={t.navMenu}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="w-9 h-9 rounded-full flex items-center justify-center
                   bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
                   shadow-sm hover:scale-105 active:scale-95 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
      {open && (
        <nav
          className="anim-rise absolute end-0 top-11 z-30 min-w-48 p-1.5 rounded-2xl
                     bg-white dark:bg-olive-card border border-edge dark:border-olive-edge
                     shadow-xl shadow-ink/10 dark:shadow-black/40"
          style={{ animationDuration: '0.35s' }}
        >
          {ENTRIES.map(({ hash, page, labelKey }) => (
            <a
              key={page}
              href={hash}
              onClick={() => setOpen(false)}
              aria-current={current === page ? 'page' : undefined}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors
                ${current === page
                  ? 'bg-oasis/10 dark:bg-mint2/10 text-oasis dark:text-mint2'
                  : 'text-mut dark:text-cream-mut hover:bg-sand-lt dark:hover:bg-olive-edge/40'}`}
            >
              {t[labelKey]}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
