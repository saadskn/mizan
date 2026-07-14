// Daily macro needs from body stats. Pure functions, zero React imports —
// same discipline as matching.js. Formula: Mifflin-St Jeor BMR × activity
// multiplier = maintenance calories, shifted by the goal (fat loss −300 to
// −500 kcal, weight gain +300 to +500 kcal), then protein 1.6-2.2 g/kg, fat
// 20-25% of calories for men / 25-30% for women, carbs = the calories left over.

export const ACTIVITY_LEVELS = ['sedentary', 'light', 'moderate', 'hard', 'athlete'];

export const GOALS = ['cut', 'maintain', 'gain'];

// [lo, hi] kcal added on top of maintenance.
const GOAL_DELTA = {
  cut: [-500, -300],
  maintain: [0, 0],
  gain: [300, 500],
};

const MULTIPLIER = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  hard: 1.725,
  athlete: 1.9,
};

const FAT_SHARE = {
  male: [0.2, 0.25],
  female: [0.25, 0.3],
};

export const LIMITS = { age: [10, 100], height: [100, 250], weight: [30, 300] };

export function validateNeeds({ gender, age, height, weight, activity, goal = 'maintain' }) {
  if (!(gender in FAT_SHARE) || !(activity in MULTIPLIER) || !(goal in GOAL_DELTA)) return false;
  const inRange = (v, [lo, hi]) => Number.isFinite(v) && v >= lo && v <= hi;
  return inRange(age, LIMITS.age) && inRange(height, LIMITS.height) && inRange(weight, LIMITS.weight);
}

export function dailyNeeds({ gender, age, height, weight, activity, goal = 'maintain' }) {
  const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161);
  const tdee = Math.round(bmr * MULTIPLIER[activity]);
  const [dLo, dHi] = GOAL_DELTA[goal];
  const calories = { min: tdee + dLo, max: tdee + dHi };

  const protein = { min: Math.round(1.6 * weight), max: Math.round(2.2 * weight) };
  const [fatLo, fatHi] = FAT_SHARE[gender];
  const fats = {
    min: Math.round((calories.min * fatLo) / 9),
    max: Math.round((calories.max * fatHi) / 9),
  };
  // Pair the ends so each carb bound is what actually fits alongside the
  // opposite protein/fat bound (min carbs ↔ fewest calories with everything
  // else at max).
  const carbs = {
    min: Math.max(0, Math.round((calories.min - protein.max * 4 - fats.max * 9) / 4)),
    max: Math.round((calories.max - protein.min * 4 - fats.min * 9) / 4),
  };
  return { calories, protein, carbs, fats };
}
