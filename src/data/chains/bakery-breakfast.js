// Bakery & breakfast chains operating in Riyadh (food items only — no drinks).
// Tier 1: Tim Hortons. Tier 2: PAUL, Wooden Bakery, Auntie Anne's.
// Tier 3 (estimates): EGGSACTLY, Toastable.

export default [
  // ── Tim Hortons ────────────────────────────────────────────────
  { id: 'timhortons-grilled-chicken-wrap', chain: 'Tim Hortons', name: 'Grilled Chicken Wrap', category: 'main', calories: 380, protein: 22, carbs: 40, fats: 15, price_sar: 17, estimated: false },
  { id: 'timhortons-turkey-cheese', chain: 'Tim Hortons', name: 'Turkey & Cheese Sandwich', category: 'main', calories: 420, protein: 24, carbs: 44, fats: 17, price_sar: 19, estimated: false },
  { id: 'timhortons-plain-croissant', chain: 'Tim Hortons', name: 'Plain Croissant', category: 'main', calories: 270, protein: 5, carbs: 31, fats: 14, price_sar: 8, estimated: false },
  { id: 'timhortons-cheese-croissant', chain: 'Tim Hortons', name: 'Cheese Croissant', category: 'main', calories: 340, protein: 10, carbs: 33, fats: 19, price_sar: 10, estimated: false },
  { id: 'timhortons-bagel-cream-cheese', chain: 'Tim Hortons', name: 'Bagel with Cream Cheese', category: 'main', calories: 380, protein: 11, carbs: 56, fats: 12, price_sar: 12, estimated: false },
  { id: 'timhortons-boston-cream', chain: 'Tim Hortons', name: 'Boston Cream Donut', category: 'dessert', calories: 250, protein: 4, carbs: 36, fats: 10, price_sar: 6, estimated: false },
  { id: 'timhortons-chocolate-dip', chain: 'Tim Hortons', name: 'Chocolate Dip Donut', category: 'dessert', calories: 260, protein: 4, carbs: 37, fats: 11, price_sar: 6, estimated: false },
  { id: 'timhortons-timbits-10', chain: 'Tim Hortons', name: 'Timbits (10 pc)', category: 'dessert', calories: 350, protein: 5, carbs: 50, fats: 15, price_sar: 12, estimated: false },

  // ── PAUL ───────────────────────────────────────────────────────
  { id: 'paul-chicken-club', chain: 'PAUL', name: 'Chicken Club Sandwich', category: 'main', calories: 520, protein: 28, carbs: 46, fats: 24, price_sar: 39, estimated: true },
  { id: 'paul-croque-monsieur', chain: 'PAUL', name: 'Croque Monsieur', category: 'main', calories: 560, protein: 28, carbs: 40, fats: 32, price_sar: 42, estimated: true },
  { id: 'paul-caesar-salad', chain: 'PAUL', name: 'Chicken Caesar Salad', category: 'main', calories: 380, protein: 30, carbs: 14, fats: 23, price_sar: 44, estimated: true },
  { id: 'paul-butter-croissant', chain: 'PAUL', name: 'Butter Croissant', category: 'main', calories: 280, protein: 5, carbs: 30, fats: 16, price_sar: 14, estimated: true },
  { id: 'paul-halloumi-baguette', chain: 'PAUL', name: 'Halloumi Tomato Baguette', category: 'main', calories: 610, protein: 26, carbs: 64, fats: 28, price_sar: 38, estimated: true },
  { id: 'paul-omelette-cheese', chain: 'PAUL', name: 'Cheese Omelette', category: 'main', calories: 350, protein: 21, carbs: 4, fats: 28, price_sar: 32, estimated: true },
  { id: 'paul-pain-au-chocolat', chain: 'PAUL', name: 'Pain au Chocolat', category: 'dessert', calories: 330, protein: 6, carbs: 36, fats: 18, price_sar: 14, estimated: true },

  // ── Wooden Bakery ──────────────────────────────────────────────
  { id: 'woodenbakery-zaatar-manoushe', chain: 'Wooden Bakery', name: 'Zaatar Manoushe', category: 'main', calories: 340, protein: 9, carbs: 48, fats: 12, price_sar: 7, estimated: true },
  { id: 'woodenbakery-cheese-manoushe', chain: 'Wooden Bakery', name: 'Cheese Manoushe', category: 'main', calories: 440, protein: 17, carbs: 46, fats: 21, price_sar: 11, estimated: true },
  { id: 'woodenbakery-chicken-sub', chain: 'Wooden Bakery', name: 'Chicken Sub Sandwich', category: 'main', calories: 470, protein: 26, carbs: 48, fats: 19, price_sar: 18, estimated: true },
  { id: 'woodenbakery-halloumi', chain: 'Wooden Bakery', name: 'Halloumi Sandwich', category: 'main', calories: 420, protein: 18, carbs: 44, fats: 19, price_sar: 14, estimated: true },
  { id: 'woodenbakery-spinach-fatayer', chain: 'Wooden Bakery', name: 'Spinach Fatayer (2 pc)', category: 'side', calories: 280, protein: 7, carbs: 40, fats: 10, price_sar: 8, estimated: true },
  { id: 'woodenbakery-maamoul', chain: 'Wooden Bakery', name: 'Maamoul (2 pc)', category: 'dessert', calories: 300, protein: 4, carbs: 40, fats: 14, price_sar: 9, estimated: true },

  // ── Auntie Anne's ──────────────────────────────────────────────
  { id: 'auntieannes-original', chain: "Auntie Anne's", name: 'Original Pretzel', category: 'main', calories: 340, protein: 8, carbs: 65, fats: 5, price_sar: 14, estimated: false },
  { id: 'auntieannes-pepperoni', chain: "Auntie Anne's", name: 'Pepperoni Pretzel', category: 'main', calories: 420, protein: 13, carbs: 58, fats: 15, price_sar: 19, estimated: false },
  { id: 'auntieannes-pretzel-dogs', chain: "Auntie Anne's", name: 'Pretzel Dogs', category: 'main', calories: 360, protein: 11, carbs: 38, fats: 18, price_sar: 17, estimated: false },
  { id: 'auntieannes-nuggets-cup', chain: "Auntie Anne's", name: 'Pretzel Nuggets (Cup)', category: 'main', calories: 350, protein: 8, carbs: 66, fats: 6, price_sar: 15, estimated: false },
  { id: 'auntieannes-cinnamon-sugar', chain: "Auntie Anne's", name: 'Cinnamon Sugar Pretzel', category: 'dessert', calories: 470, protein: 8, carbs: 84, fats: 12, price_sar: 16, estimated: false },

  // ── EGGSACTLY ──────────────────────────────────────────────────
  { id: 'eggsactly-classic-egg', chain: 'EGGSACTLY', name: 'Egg & Cheese Brioche Sandwich', category: 'main', calories: 480, protein: 20, carbs: 42, fats: 26, price_sar: 24, estimated: true },
  { id: 'eggsactly-truffle-egg', chain: 'EGGSACTLY', name: 'Truffle Egg Sandwich', category: 'main', calories: 450, protein: 19, carbs: 40, fats: 24, price_sar: 24, estimated: true },
  { id: 'eggsactly-shakshuka', chain: 'EGGSACTLY', name: 'Shakshuka Plate', category: 'main', calories: 380, protein: 19, carbs: 22, fats: 24, price_sar: 26, estimated: true },
  { id: 'eggsactly-egg-cheese-croissant', chain: 'EGGSACTLY', name: 'Egg & Cheese Croissant', category: 'main', calories: 430, protein: 17, carbs: 34, fats: 25, price_sar: 22, estimated: true },
  { id: 'eggsactly-halloumi-wrap', chain: 'EGGSACTLY', name: 'Halloumi Egg Wrap', category: 'main', calories: 410, protein: 22, carbs: 38, fats: 19, price_sar: 21, estimated: true },

  // ── Toastable ──────────────────────────────────────────────────
  { id: 'toastable-grilled-cheese', chain: 'Toastable', name: 'Grilled Cheese Classic', category: 'main', calories: 480, protein: 17, carbs: 44, fats: 26, price_sar: 22, estimated: true },
  { id: 'toastable-turkey-cheese', chain: 'Toastable', name: 'Turkey & Cheese Toast', category: 'main', calories: 470, protein: 25, carbs: 44, fats: 21, price_sar: 26, estimated: true },
  { id: 'toastable-chicken-zaatar', chain: 'Toastable', name: 'Chicken Zaatar Toast', category: 'main', calories: 460, protein: 26, carbs: 45, fats: 19, price_sar: 25, estimated: true },
  { id: 'toastable-shakshuka-toast', chain: 'Toastable', name: 'Spicy Shakshuka Toast', category: 'main', calories: 420, protein: 17, carbs: 46, fats: 19, price_sar: 23, estimated: true },
  { id: 'toastable-nutella-banana', chain: 'Toastable', name: 'Nutella Banana Toast', category: 'dessert', calories: 490, protein: 10, carbs: 64, fats: 21, price_sar: 21, estimated: true },

  // ── Dawar Alsaada ──────────────────────────────────────────────
  { id: 'dawaralsaada-egg-pastry', chain: 'Dawar Alsaada', name: 'Egg Pastry', category: 'main', calories: 380, protein: 14, carbs: 44, fats: 16, price_sar: 7, estimated: true },
  { id: 'dawaralsaada-cheese-thyme', chain: 'Dawar Alsaada', name: 'Cheese & Thyme Pastry', category: 'main', calories: 420, protein: 15, carbs: 48, fats: 18, price_sar: 8, estimated: true },
  { id: 'dawaralsaada-liquid-cheese', chain: 'Dawar Alsaada', name: 'Liquid Cheese Pastry', category: 'main', calories: 450, protein: 14, carbs: 50, fats: 21, price_sar: 9, estimated: true },
  { id: 'dawaralsaada-liver-cheese', chain: 'Dawar Alsaada', name: 'Liver with Cheese Pastry', category: 'main', calories: 460, protein: 22, carbs: 44, fats: 21, price_sar: 12, estimated: true },
  { id: 'dawaralsaada-chicken-pastry', chain: 'Dawar Alsaada', name: 'Chicken Pastry', category: 'main', calories: 430, protein: 20, carbs: 46, fats: 18, price_sar: 10, estimated: true },
  { id: 'dawaralsaada-honey-cheese', chain: 'Dawar Alsaada', name: 'Honey & Cheese Pastry', category: 'dessert', calories: 470, protein: 13, carbs: 56, fats: 20, price_sar: 10, estimated: true },

  // ── IHOP ───────────────────────────────────────────────────────
  // HungerStation SFDA calorie labels (2026-07), cross-checked against IHOP US
  // published nutrition (buttermilk full 540 = 5x108/pancake, chicken & waffles
  // 1030, Belgian waffle 620 all match). Rejected: Cupcake Pancakes (full/half
  // labels swapped: 400 vs 800), Labneh Zaatar Omelette (1466, out of family
  // with siblings at 960-1040), Country Fried Chicken & Eggs (850 too low for
  // battered chicken + gravy + hash browns + pancakes), kids meals, drinks.
  { id: 'ihop-buttermilk-half', chain: 'IHOP', name: 'Buttermilk Pancakes (Half Stack)', category: 'main', calories: 216, protein: 7, carbs: 40, fats: 3, price_sar: 35, estimated: true, family: 'ihop-buttermilk', units: 2 },
  { id: 'ihop-buttermilk-full', chain: 'IHOP', name: 'Buttermilk Pancakes (Full Stack)', category: 'main', calories: 540, protein: 16, carbs: 100, fats: 8, price_sar: 42, estimated: true, family: 'ihop-buttermilk', units: 5 },
  { id: 'ihop-chocolate-chip-full', chain: 'IHOP', name: 'Chocolate Chip Pancakes (Full Stack)', category: 'dessert', calories: 1054, protein: 18, carbs: 158, fats: 38, price_sar: 55, estimated: true },
  { id: 'ihop-cinnamon-half', chain: 'IHOP', name: 'Cinnamon Roll Pancakes (Half Stack)', category: 'dessert', calories: 536, protein: 9, carbs: 82, fats: 19, price_sar: 45, estimated: true, family: 'ihop-cinnamon', units: 2 },
  { id: 'ihop-cinnamon-full', chain: 'IHOP', name: 'Cinnamon Roll Pancakes (Full Stack)', category: 'dessert', calories: 1341, protein: 22, carbs: 205, fats: 48, price_sar: 55, estimated: true, family: 'ihop-cinnamon', units: 5 },
  { id: 'ihop-ny-cheesecake-half', chain: 'IHOP', name: 'New York Cheesecake Pancakes (Half Stack)', category: 'dessert', calories: 455, protein: 9, carbs: 70, fats: 15, price_sar: 45, estimated: true, family: 'ihop-ny-cheesecake', units: 2 },
  { id: 'ihop-ny-cheesecake-full', chain: 'IHOP', name: 'New York Cheesecake Pancakes (Full Stack)', category: 'dessert', calories: 890, protein: 17, carbs: 137, fats: 30, price_sar: 55, estimated: true, family: 'ihop-ny-cheesecake', units: 4 },
  { id: 'ihop-oreo-half', chain: 'IHOP', name: 'Oreo Oh My Goodness Pancakes (Half Stack)', category: 'dessert', calories: 335, protein: 6, carbs: 55, fats: 10, price_sar: 45, estimated: true, family: 'ihop-oreo', units: 2 },
  { id: 'ihop-oreo-full', chain: 'IHOP', name: 'Oreo Oh My Goodness Pancakes (Full Stack)', category: 'dessert', calories: 670, protein: 12, carbs: 110, fats: 20, price_sar: 55, estimated: true, family: 'ihop-oreo', units: 4 },
  { id: 'ihop-strawberry-banana-pancakes', chain: 'IHOP', name: 'Strawberry Banana Pancakes (Half Stack)', category: 'main', calories: 340, protein: 7, carbs: 62, fats: 7, price_sar: 45, estimated: true },
  { id: 'ihop-florentine-crepes', chain: 'IHOP', name: 'Chicken Florentine Crepes', category: 'main', calories: 820, protein: 45, carbs: 40, fats: 53, price_sar: 49, estimated: true },
  { id: 'ihop-strawberry-banana-french-toast', chain: 'IHOP', name: 'Strawberry Banana French Toast', category: 'main', calories: 650, protein: 16, carbs: 94, fats: 23, price_sar: 45, estimated: true },
  { id: 'ihop-chicken-waffles', chain: 'IHOP', name: 'Chicken & Waffles', category: 'main', calories: 1030, protein: 52, carbs: 88, fats: 52, price_sar: 55, estimated: true },
  { id: 'ihop-original-french-toast', chain: 'IHOP', name: 'Original French Toast', category: 'main', calories: 490, protein: 14, carbs: 62, fats: 21, price_sar: 37, estimated: true },
  { id: 'ihop-belgian-waffle', chain: 'IHOP', name: 'Belgian Waffle', category: 'main', calories: 620, protein: 12, carbs: 68, fats: 33, price_sar: 32, estimated: true },
  { id: 'ihop-garden-omelette', chain: 'IHOP', name: 'Garden Omelette', category: 'main', calories: 960, protein: 42, carbs: 25, fats: 76, price_sar: 52, estimated: true },
  { id: 'ihop-cheeseburger-omelette', chain: 'IHOP', name: 'Cheeseburger Omelette', category: 'main', calories: 1040, protein: 58, carbs: 30, fats: 76, price_sar: 57, estimated: true },
  { id: 'ihop-chicken-quesadilla', chain: 'IHOP', name: 'Chicken Quesadilla', category: 'main', calories: 1030, protein: 55, carbs: 68, fats: 60, price_sar: 65, estimated: true },
  { id: 'ihop-monster-chicken-burger', chain: 'IHOP', name: 'Monster Chicken Burger', category: 'main', calories: 1443, protein: 58, carbs: 120, fats: 80, price_sar: 64, estimated: true },
  { id: 'ihop-classic-cheeseburger', chain: 'IHOP', name: 'Classic Cheeseburger', category: 'main', calories: 1151, protein: 50, carbs: 80, fats: 70, price_sar: 59, estimated: true },
  { id: 'ihop-cowboy-burger', chain: 'IHOP', name: 'Cowboy Burger', category: 'main', calories: 1753, protein: 70, carbs: 118, fats: 110, price_sar: 79, estimated: true },
  { id: 'ihop-english-breakfast', chain: 'IHOP', name: 'English Breakfast', category: 'main', calories: 966, protein: 52, carbs: 58, fats: 58, price_sar: 65, estimated: true },
  { id: 'ihop-split-decision', chain: 'IHOP', name: 'Split Decision Breakfast', category: 'main', calories: 1120, protein: 42, carbs: 108, fats: 58, price_sar: 67, estimated: true },
  { id: 'ihop-pancake-combo', chain: 'IHOP', name: 'Pancake Combo', category: 'main', calories: 750, protein: 28, carbs: 82, fats: 35, price_sar: 57, estimated: true },
  { id: 'ihop-french-toast-combo', chain: 'IHOP', name: 'French Toast Combo', category: 'main', calories: 810, protein: 30, carbs: 80, fats: 41, price_sar: 55, estimated: true },
  { id: 'ihop-chicken-pancakes', chain: 'IHOP', name: 'Chicken & Pancakes', category: 'main', calories: 900, protein: 42, carbs: 102, fats: 36, price_sar: 59, estimated: true },
  { id: 'ihop-breakfast-sampler', chain: 'IHOP', name: 'Breakfast Sampler', category: 'main', calories: 910, protein: 45, carbs: 70, fats: 50, price_sar: 65, estimated: true },
  { id: 'ihop-belgian-waffle-combo', chain: 'IHOP', name: 'Belgian Waffle Combo', category: 'main', calories: 790, protein: 30, carbs: 68, fats: 44, price_sar: 59, estimated: true },
  { id: 'ihop-hash-browns', chain: 'IHOP', name: 'Hash Browns', category: 'side', calories: 326, protein: 3, carbs: 35, fats: 19, price_sar: 18, estimated: true },
  { id: 'ihop-french-fries', chain: 'IHOP', name: 'French Fries (8 oz)', category: 'side', calories: 435, protein: 5, carbs: 55, fats: 21, price_sar: 19, estimated: true },
  { id: 'ihop-grilled-chicken-breast', chain: 'IHOP', name: 'Grilled Chicken Breast (Side)', category: 'side', calories: 297, protein: 45, carbs: 2, fats: 12, price_sar: 24, estimated: true },
  { id: 'ihop-mashed-potatoes', chain: 'IHOP', name: 'Mashed Potatoes', category: 'side', calories: 267, protein: 4, carbs: 36, fats: 12, price_sar: 18, estimated: true },
  { id: 'ihop-steamed-broccoli', chain: 'IHOP', name: 'Steamed Broccoli', category: 'side', calories: 61, protein: 4, carbs: 9, fats: 1, price_sar: 15, estimated: true },

  // ── Half Million ───────────────────────────────────────────────
  // HungerStation SFDA calorie labels (2026-07). Coffee-first chain — all
  // drinks banned; salads and chocolate pudding carry no labels (skipped);
  // both ice cream entries rejected (Affogato at 550 kcal is not credible
  // for espresso + one scoop, which discredits its neighbor too).
  { id: 'halfmillion-chocolate-croissant', chain: 'Half Million', name: 'Chocolate Croissant', category: 'dessert', calories: 381, protein: 6, carbs: 42, fats: 21, price_sar: 13, estimated: true },
  { id: 'halfmillion-tuna-panini', chain: 'Half Million', name: 'Tuna Panini', category: 'main', calories: 380, protein: 22, carbs: 40, fats: 15, price_sar: 19, estimated: true },
  { id: 'halfmillion-halloumi-panini', chain: 'Half Million', name: 'Halloumi Panini', category: 'main', calories: 340, protein: 16, carbs: 38, fats: 14, price_sar: 19, estimated: true },
  { id: 'halfmillion-chicken-sandwich', chain: 'Half Million', name: 'Chicken Sandwich', category: 'main', calories: 330, protein: 20, carbs: 38, fats: 11, price_sar: 19, estimated: true },
  { id: 'halfmillion-brownies', chain: 'Half Million', name: 'Brownies', category: 'dessert', calories: 313, protein: 4, carbs: 40, fats: 15, price_sar: 15, estimated: true },
  { id: 'halfmillion-caramel-bites', chain: 'Half Million', name: 'Caramel Bites', category: 'dessert', calories: 260, protein: 3, carbs: 37, fats: 11, price_sar: 15, estimated: true },
  { id: 'halfmillion-cookies', chain: 'Half Million', name: 'Cookies', category: 'dessert', calories: 230, protein: 3, carbs: 29, fats: 11, price_sar: 13, estimated: true },
  { id: 'halfmillion-pecan-tiramisu', chain: 'Half Million', name: 'Pecan Tiramisu', category: 'dessert', calories: 480, protein: 7, carbs: 48, fats: 29, price_sar: 17, estimated: true },
];
