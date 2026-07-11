import { FLOORS } from '../lib/matching.js';

// Visual reference widths for macros the user didn't set a goal for.
const INFO_REF = { protein: 60, carbs: 80, fats: 40, calories: 1000 };

export default function MacroBar({ t, macroKey, value, goal, delayMs = 300, start = true }) {
  const hasGoal = Number.isFinite(goal);
  let weave;
  let pct;
  if (hasGoal) {
    const dist = Math.abs(value - goal) / Math.max(goal, FLOORS[macroKey]);
    weave = dist <= 0.1 ? 'weave-green' : dist <= 0.3 ? 'weave-amber' : 'weave-clay';
    pct = goal > 0 ? Math.min(value / goal, 1) * 100 : value > 0 ? 100 : 0;
  } else {
    // No target — informational sand bar, scaled against a fixed reference.
    weave = 'bg-sand dark:bg-olive-edge';
    pct = Math.min(value / INFO_REF[macroKey], 1) * 100;
  }
  const unit = macroKey === 'calories' ? t.kcal : t.g;
  return (
    <div className="flex items-center gap-2.5 text-xs">
      <span className="w-20 shrink-0 whitespace-nowrap text-faint dark:text-cream-mut">
        {t[`${macroKey}Short`]}
      </span>
      <div className="flex-1 h-[9px] rounded-[3px] bg-sand-lt dark:bg-olive-track overflow-hidden">
        <div
          className={`h-full rounded-[3px] ${weave} ${start ? 'anim-weave' : ''}`}
          style={{ width: start ? `${pct}%` : 0, animationDelay: `${delayMs}ms` }}
        />
      </div>
      <span dir="ltr" className="w-20 shrink-0 text-end font-medium text-ink/80 dark:text-cream/85">
        {hasGoal ? `${Math.round(value)} ${t.of} ${Math.round(goal)}` : `${Math.round(value)} ${unit}`}
      </span>
    </div>
  );
}
