import { FLOORS } from '../lib/matching.js';

export default function MacroBar({ t, macroKey, value, goal }) {
  const hasGoal = Number.isFinite(goal);
  let color;
  let pct;
  if (hasGoal) {
    const dist = Math.abs(value - goal) / Math.max(goal, FLOORS[macroKey]);
    color =
      dist <= 0.1
        ? 'bg-emerald-500 dark:bg-emerald-400'
        : dist <= 0.3
          ? 'bg-amber-500'
          : 'bg-red-400';
    pct = goal > 0 ? Math.min(value / goal, 1) * 100 : value > 0 ? 100 : 0;
  } else {
    // No target for this macro — informational row with a neutral bar.
    color = 'bg-slate-300/70 dark:bg-slate-600/70';
    pct = 100;
  }
  return (
    <div className="flex items-center gap-2.5 text-xs">
      <span className="w-16 shrink-0 text-slate-500 dark:text-slate-400">{t[macroKey]}</span>
      <div className="flex-1 h-1.5 rounded-full bg-slate-100 dark:bg-page-dark overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span dir="ltr" className="w-20 shrink-0 text-end text-slate-600 dark:text-slate-300">
        {hasGoal ? `${Math.round(value)} ${t.of} ${Math.round(goal)}` : Math.round(value)}
      </span>
    </div>
  );
}
