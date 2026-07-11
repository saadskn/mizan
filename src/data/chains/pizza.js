// Pizza chains operating in Riyadh. Units are stated in each item name
// (personal/small pizzas or slice counts) per the plan's pizza rule.
// Tier 1: Domino's, Pizza Hut, Papa John's, Little Caesars, Maestro Pizza.
// Tier 2: Pizza Inn.

export default [
  // ── Domino's ───────────────────────────────────────────────────
  { id: 'dominos-personal-pepperoni', chain: "Domino's", name: 'Personal Pepperoni Pizza', category: 'main', calories: 620, protein: 26, carbs: 68, fats: 27, price_sar: 19, estimated: true },
  { id: 'dominos-personal-margherita', chain: "Domino's", name: 'Personal Margherita Pizza', category: 'main', calories: 560, protein: 22, carbs: 70, fats: 21, price_sar: 15, estimated: true },
  { id: 'dominos-personal-chicken-ranch', chain: "Domino's", name: 'Personal Chicken Ranch Pizza', category: 'main', calories: 640, protein: 30, carbs: 66, fats: 28, price_sar: 21, estimated: true },
  { id: 'dominos-chicken-kickers', chain: "Domino's", name: 'Chicken Kickers (8 pc)', category: 'side', calories: 380, protein: 30, carbs: 20, fats: 19, price_sar: 18, estimated: false },
  { id: 'dominos-potato-wedges', chain: "Domino's", name: 'Potato Wedges', category: 'side', calories: 260, protein: 4, carbs: 36, fats: 11, price_sar: 9, estimated: false },
  { id: 'dominos-bread-twists', chain: "Domino's", name: 'Garlic Bread Twists (4 pc)', category: 'side', calories: 340, protein: 9, carbs: 46, fats: 13, price_sar: 11, estimated: false },
  { id: 'dominos-lava-cake', chain: "Domino's", name: 'Chocolate Lava Cake', category: 'dessert', calories: 350, protein: 4, carbs: 46, fats: 17, price_sar: 9, estimated: false },

  // ── Pizza Hut ──────────────────────────────────────────────────
  { id: 'pizzahut-personal-pepperoni', chain: 'Pizza Hut', name: 'Personal Pan Pepperoni', category: 'main', calories: 610, protein: 25, carbs: 64, fats: 28, price_sar: 20, estimated: true },
  { id: 'pizzahut-personal-margherita', chain: 'Pizza Hut', name: 'Personal Pan Margherita', category: 'main', calories: 550, protein: 22, carbs: 66, fats: 22, price_sar: 17, estimated: true },
  { id: 'pizzahut-personal-chicken-supreme', chain: 'Pizza Hut', name: 'Personal Pan Chicken Supreme', category: 'main', calories: 630, protein: 30, carbs: 64, fats: 28, price_sar: 22, estimated: true },
  { id: 'pizzahut-breadsticks', chain: 'Pizza Hut', name: 'Breadsticks (5 pc)', category: 'side', calories: 350, protein: 10, carbs: 55, fats: 10, price_sar: 11, estimated: false },
  { id: 'pizzahut-wings-6pc', chain: 'Pizza Hut', name: 'Chicken Wings (6 pc)', category: 'side', calories: 400, protein: 30, carbs: 8, fats: 27, price_sar: 19, estimated: false },
  { id: 'pizzahut-cinnamon-sticks', chain: 'Pizza Hut', name: 'Cinnamon Sticks', category: 'dessert', calories: 380, protein: 6, carbs: 60, fats: 13, price_sar: 11, estimated: false },

  // ── Papa John's ────────────────────────────────────────────────
  { id: 'papajohns-small-pepperoni', chain: "Papa John's", name: 'Small Pepperoni Pizza', category: 'main', calories: 720, protein: 30, carbs: 80, fats: 31, price_sar: 25, estimated: true },
  { id: 'papajohns-small-margherita', chain: "Papa John's", name: 'Small Margherita Pizza', category: 'main', calories: 640, protein: 26, carbs: 82, fats: 23, price_sar: 21, estimated: true },
  { id: 'papajohns-small-bbq-chicken', chain: "Papa John's", name: 'Small BBQ Chicken Pizza', category: 'main', calories: 740, protein: 34, carbs: 86, fats: 28, price_sar: 27, estimated: true },
  { id: 'papajohns-chicken-poppers', chain: "Papa John's", name: 'Chicken Poppers', category: 'side', calories: 390, protein: 30, carbs: 22, fats: 19, price_sar: 18, estimated: false },
  { id: 'papajohns-garlic-knots', chain: "Papa John's", name: 'Garlic Knots (5 pc)', category: 'side', calories: 350, protein: 9, carbs: 50, fats: 12, price_sar: 11, estimated: false },
  { id: 'papajohns-cookie-slice', chain: "Papa John's", name: 'Chocolate Chip Cookie Slice', category: 'dessert', calories: 240, protein: 3, carbs: 33, fats: 11, price_sar: 7, estimated: false },

  // ── Little Caesars ─────────────────────────────────────────────
  { id: 'littlecaesars-pepperoni-2slices', chain: 'Little Caesars', name: 'Classic Pepperoni (2 slices)', category: 'main', calories: 560, protein: 26, carbs: 60, fats: 24, price_sar: 12, estimated: true },
  { id: 'littlecaesars-cheese-2slices', chain: 'Little Caesars', name: 'Classic Cheese (2 slices)', category: 'main', calories: 480, protein: 24, carbs: 60, fats: 16, price_sar: 10, estimated: true },
  { id: 'littlecaesars-crazy-bread', chain: 'Little Caesars', name: 'Crazy Bread (4 sticks)', category: 'side', calories: 400, protein: 12, carbs: 60, fats: 12, price_sar: 9, estimated: false },
  { id: 'littlecaesars-caesar-wings', chain: 'Little Caesars', name: 'Caesar Wings (6 pc)', category: 'side', calories: 420, protein: 32, carbs: 2, fats: 31, price_sar: 19, estimated: false },
  { id: 'littlecaesars-italian-cheese-bread', chain: 'Little Caesars', name: 'Italian Cheese Bread (4 pc)', category: 'side', calories: 520, protein: 22, carbs: 52, fats: 25, price_sar: 14, estimated: false },

  // ── Maestro Pizza ──────────────────────────────────────────────
  { id: 'maestro-cheese-sticks', chain: 'Maestro Pizza', name: 'Cheese Sticks', category: 'side', calories: 430, protein: 16, carbs: 48, fats: 19, price_sar: 13, estimated: true },
  { id: 'maestro-margherita-medium', chain: 'Maestro Pizza', name: 'Margherita (Medium)', category: 'main', calories: 571, protein: 26, carbs: 78, fats: 18, price_sar: 37, estimated: true },
  { id: 'maestro-pepperoni-medium', chain: 'Maestro Pizza', name: 'Pepperoni (Medium)', category: 'main', calories: 830, protein: 34, carbs: 90, fats: 36, price_sar: 37, estimated: true },
  { id: 'maestro-three-cheese-medium', chain: 'Maestro Pizza', name: 'Three Cheese (Medium)', category: 'main', calories: 1081, protein: 44, carbs: 108, fats: 52, price_sar: 37, estimated: true },
  { id: 'maestro-hot-honey-large', chain: 'Maestro Pizza', name: 'Hot Honey Pepperoni (Large)', category: 'main', calories: 1638, protein: 62, carbs: 190, fats: 70, price_sar: 49, estimated: true },
  { id: 'maestro-ranchy-large', chain: 'Maestro Pizza', name: 'Original Ranchy (Large)', category: 'main', calories: 1136, protein: 48, carbs: 136, fats: 44, price_sar: 46, estimated: true },
  { id: 'maestro-garlic-bread-pc', chain: 'Maestro Pizza', name: 'Garlic Bread with Cheese (1 pc)', category: 'side', calories: 90, protein: 3, carbs: 12, fats: 3, price_sar: 4, estimated: true },
  { id: 'maestro-potato-dippers', chain: 'Maestro Pizza', name: 'Potato Dippers', category: 'side', calories: 290, protein: 4, carbs: 38, fats: 13, price_sar: 9, estimated: true },
  { id: 'maestro-chocolate-roll', chain: 'Maestro Pizza', name: 'Chocolate Roll', category: 'dessert', calories: 320, protein: 5, carbs: 44, fats: 14, price_sar: 9, estimated: true },

  // ── Pizza Inn ──────────────────────────────────────────────────
  { id: 'pizzainn-garlic-bread', chain: 'Pizza Inn', name: 'Garlic Bread', category: 'side', calories: 300, protein: 8, carbs: 42, fats: 11, price_sar: 8, estimated: true },
  { id: 'pizzainn-pepperoni-medium', chain: 'Pizza Inn', name: 'Pepperoni Pizza (Medium)', category: 'main', calories: 1440, protein: 58, carbs: 166, fats: 60, price_sar: 38, estimated: true },
  { id: 'pizzainn-cheese-medium', chain: 'Pizza Inn', name: 'Cheese Pizza (Medium)', category: 'main', calories: 1320, protein: 54, carbs: 162, fats: 50, price_sar: 35, estimated: true },
  { id: 'pizzainn-chicken-tikka-medium', chain: 'Pizza Inn', name: 'Chicken Tikka Pizza (Medium)', category: 'main', calories: 1500, protein: 66, carbs: 174, fats: 58, price_sar: 40, estimated: true },
  { id: 'pizzainn-wedges', chain: 'Pizza Inn', name: 'Potato Wedges', category: 'side', calories: 270, protein: 4, carbs: 36, fats: 12, price_sar: 8, estimated: true },

  // ── CasaPasta ──────────────────────────────────────────────────
  { id: 'casapasta-chicken-alfredo', chain: 'CasaPasta', name: 'Fettuccine Chicken Alfredo', category: 'main', calories: 790, protein: 34, carbs: 82, fats: 36, price_sar: 34, estimated: true },
  { id: 'casapasta-makrona-hamra', chain: 'CasaPasta', name: 'Makrona Hamra (Saudi Red Pasta)', category: 'main', calories: 650, protein: 28, carbs: 78, fats: 24, price_sar: 23, estimated: true },
  { id: 'casapasta-bolognese', chain: 'CasaPasta', name: 'Spaghetti Bolognese', category: 'main', calories: 640, protein: 30, carbs: 76, fats: 24, price_sar: 32, estimated: true },
  { id: 'casapasta-shrimp-pasta', chain: 'CasaPasta', name: 'Pink Sauce Pasta with Shrimp', category: 'main', calories: 720, protein: 30, carbs: 80, fats: 30, price_sar: 38, estimated: true },
  { id: 'casapasta-garlic-bread', chain: 'CasaPasta', name: 'Garlic Bread', category: 'side', calories: 300, protein: 8, carbs: 42, fats: 11, price_sar: 8, estimated: true },

  // ── Pizzaratti ─────────────────────────────────────────────────
  { id: 'pizzaratti-margherita', chain: 'Pizzaratti', name: 'Margherita Neapolitan Pizza', category: 'main', calories: 760, protein: 30, carbs: 92, fats: 28, price_sar: 36, estimated: true },
  { id: 'pizzaratti-pepperoni', chain: 'Pizzaratti', name: 'Pepperoni Neapolitan Pizza', category: 'main', calories: 840, protein: 34, carbs: 90, fats: 36, price_sar: 40, estimated: true },
  { id: 'pizzaratti-chicken-bbq', chain: 'Pizzaratti', name: 'Chicken BBQ Neapolitan Pizza', category: 'main', calories: 820, protein: 38, carbs: 92, fats: 32, price_sar: 36, estimated: true },
  { id: 'pizzaratti-fettuccine-alfredo', chain: 'Pizzaratti', name: 'Fettuccine Alfredo', category: 'main', calories: 690, protein: 26, carbs: 70, fats: 34, price_sar: 29, estimated: true },
  { id: 'pizzaratti-tiramisu', chain: 'Pizzaratti', name: 'Tiramisu', category: 'dessert', calories: 420, protein: 7, carbs: 44, fats: 23, price_sar: 18, estimated: true },

  // ── Let's Pizza ────────────────────────────────────────────────
  { id: 'letspizza-margherita', chain: "Let's Pizza", name: 'Margherita (Wood-Fired)', category: 'main', calories: 700, protein: 28, carbs: 86, fats: 26, price_sar: 42, estimated: true },
  { id: 'letspizza-lets-special', chain: "Let's Pizza", name: 'Lets Pizza (Chicken, Potato & Ranch)', category: 'main', calories: 820, protein: 34, carbs: 88, fats: 36, price_sar: 42, estimated: true },
  { id: 'letspizza-pepperoni', chain: "Let's Pizza", name: 'Pepperoni (Wood-Fired)', category: 'main', calories: 780, protein: 32, carbs: 84, fats: 33, price_sar: 46, estimated: true },
  { id: 'letspizza-arrabiata', chain: "Let's Pizza", name: 'Pasta Arrabiata', category: 'main', calories: 560, protein: 18, carbs: 74, fats: 20, price_sar: 34, estimated: true },
  { id: 'letspizza-caesar-salad', chain: "Let's Pizza", name: 'Chicken Caesar Salad', category: 'main', calories: 330, protein: 26, carbs: 12, fats: 19, price_sar: 28, estimated: true },
];
