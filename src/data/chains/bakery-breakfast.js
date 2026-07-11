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
];
