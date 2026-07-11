// Healthy fast food operating in Riyadh.
// Tier 1: Kcal — publishes full per-item macros; values follow its published style.
// Tier 3: Saldwich — Saudi salads & sandwiches brand (est. 2014, 16 Riyadh branches).

export default [
  { id: 'kcal-protein-power-bowl', chain: 'Kcal', name: 'Protein Power Bowl', category: 'main', calories: 420, protein: 38, carbs: 40, fats: 12, price_sar: 34, estimated: false },
  { id: 'kcal-grilled-chicken-sweet-potato', chain: 'Kcal', name: 'Grilled Chicken & Sweet Potato', category: 'main', calories: 380, protein: 34, carbs: 38, fats: 9, price_sar: 32, estimated: false },
  { id: 'kcal-lean-beef-burger', chain: 'Kcal', name: 'Lean Beef Burger', category: 'main', calories: 450, protein: 32, carbs: 42, fats: 16, price_sar: 33, estimated: false },
  { id: 'kcal-chicken-quesadilla', chain: 'Kcal', name: 'Chicken Quesadilla (Light)', category: 'main', calories: 410, protein: 30, carbs: 40, fats: 14, price_sar: 29, estimated: false },
  { id: 'kcal-zaatar-chicken-wrap', chain: 'Kcal', name: 'Zaatar Chicken Wrap', category: 'main', calories: 360, protein: 28, carbs: 38, fats: 10, price_sar: 27, estimated: false },
  { id: 'kcal-salmon-quinoa', chain: 'Kcal', name: 'Salmon & Quinoa Bowl', category: 'main', calories: 470, protein: 32, carbs: 42, fats: 18, price_sar: 42, estimated: false },
  { id: 'kcal-turkey-meatballs', chain: 'Kcal', name: 'Turkey Meatballs & Pasta', category: 'main', calories: 430, protein: 32, carbs: 48, fats: 11, price_sar: 34, estimated: false },
  { id: 'kcal-protein-pancakes', chain: 'Kcal', name: 'Protein Pancakes', category: 'main', calories: 340, protein: 24, carbs: 42, fats: 8, price_sar: 26, estimated: false },
  { id: 'kcal-sweet-potato-fries', chain: 'Kcal', name: 'Sweet Potato Fries', category: 'side', calories: 220, protein: 3, carbs: 36, fats: 7, price_sar: 14, estimated: false },
  { id: 'kcal-protein-brownie', chain: 'Kcal', name: 'Protein Brownie', category: 'dessert', calories: 240, protein: 14, carbs: 26, fats: 9, price_sar: 16, estimated: false },

  // ── Saldwich ───────────────────────────────────────────────────
  { id: 'saldwich-caesar-salad', chain: 'Saldwich', name: 'Chicken Caesar Salad', category: 'main', calories: 340, protein: 28, carbs: 14, fats: 19, price_sar: 24, estimated: true },
  { id: 'saldwich-beetroot-salad', chain: 'Saldwich', name: 'Beetroot Salad', category: 'main', calories: 240, protein: 6, carbs: 28, fats: 11, price_sar: 21, estimated: true },
  { id: 'saldwich-gym-meal', chain: 'Saldwich', name: 'Gym Meal (Rice & Beef)', category: 'main', calories: 520, protein: 38, carbs: 54, fats: 14, price_sar: 29, estimated: true },
  { id: 'saldwich-grilled-chicken', chain: 'Saldwich', name: 'Grilled Chicken Sandwich', category: 'main', calories: 450, protein: 30, carbs: 44, fats: 15, price_sar: 21, estimated: true },
  { id: 'saldwich-chicken-mozzarella', chain: 'Saldwich', name: 'Marinated Chicken & Mozzarella Sandwich', category: 'main', calories: 490, protein: 31, carbs: 46, fats: 18, price_sar: 23, estimated: true },
  { id: 'saldwich-daily-chips', chain: 'Saldwich', name: 'Daily Potato Chips', category: 'side', calories: 220, protein: 3, carbs: 28, fats: 11, price_sar: 8, estimated: true },
];
