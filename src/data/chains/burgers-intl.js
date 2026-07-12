// International burger chains operating in Riyadh.
// Tier 1 (published nutrition): McDonald's KSA, Burger King, Hardee's, Five Guys.
// Tier 2 (partial data / estimates): Black Tap.
// Johnny Rockets removed 2026-07-12 — not on HungerStation Malqa (user-approved).

export default [
  // ── McDonald's KSA ─────────────────────────────────────────────
  // Rebuilt 2026-07 from HS Malqa /3882 — old block had wrong prices (Big Mac
  // 24 vs actual 19) and items with no à la carte HS listing (Hamburger,
  // small/medium fries split, Side Salad) — removed. Calories are HS labels;
  // macros back-computed (estimated:true). Skipped: all Meals/Double-Up Meals
  // (drink included), What's New / Jujutsu Kaisen / FIFA / Offers (LTO),
  // Sharebox (sharing), Altasketa (duplicates of main menu), Happy Meals
  // (kids bundles), unlabeled items (Grand Jalapeno Chicken, Spicy Chicken
  // Tenders, Tasty/Samurai burgers, most Double Ups, donut variants),
  // McCafe drinks/frappes/smoothies + Beverages (drink ban), tumblers, sauces.
  { id: 'mcd-big-mac', chain: "McDonald's KSA", name: 'Big Mac', category: 'main', calories: 603, protein: 27, carbs: 48, fats: 33, price_sar: 19, estimated: true },
  { id: 'mcd-chickenmac', chain: "McDonald's KSA", name: 'Chickenmac', category: 'main', calories: 579, protein: 25, carbs: 52, fats: 29, price_sar: 21, estimated: true },
  { id: 'mcd-mccrispy-deluxe', chain: "McDonald's KSA", name: 'Mc Crispy Chicken Deluxe', category: 'main', calories: 551, protein: 24, carbs: 48, fats: 28, price_sar: 25, estimated: true },
  { id: 'mcd-mccrispy', chain: "McDonald's KSA", name: 'Mc Crispy Chicken', category: 'main', calories: 491, protein: 23, carbs: 45, fats: 24, price_sar: 24, estimated: true },
  { id: 'mcd-big-tasty', chain: "McDonald's KSA", name: 'Big Tasty', category: 'main', calories: 870, protein: 45, carbs: 50, fats: 52, price_sar: 25, estimated: true, family: 'mcd-big-tasty', units: 1 },
  { id: 'mcd-big-tasty-double-up', chain: "McDonald's KSA", name: 'Big Tasty Double Up', category: 'main', calories: 1165, protein: 63, carbs: 55, fats: 74, price_sar: 31, estimated: true, family: 'mcd-big-tasty', units: 1.34 },
  { id: 'mcd-grand-chicken-special', chain: "McDonald's KSA", name: 'Grand Chicken Special', category: 'main', calories: 858, protein: 38, carbs: 70, fats: 45, price_sar: 26, estimated: true },
  { id: 'mcd-spicy-grand-chicken', chain: "McDonald's KSA", name: 'Spicy Grand Chicken', category: 'main', calories: 751, protein: 35, carbs: 65, fats: 37, price_sar: 26, estimated: true },
  { id: 'mcd-grand-chicken-deluxe', chain: "McDonald's KSA", name: 'Grand Chicken Deluxe', category: 'main', calories: 812, protein: 37, carbs: 68, fats: 42, price_sar: 25, estimated: true },
  { id: 'mcd-mcchicken-spicy', chain: "McDonald's KSA", name: 'Mc Chicken Spicy', category: 'main', calories: 494, protein: 17, carbs: 48, fats: 25, price_sar: 20, estimated: true, family: 'mcd-mcchicken-spicy', units: 1 },
  { id: 'mcd-mcchicken-spicy-double-up', chain: "McDonald's KSA", name: 'Spicy Mc Chicken Double Up', category: 'main', calories: 675, protein: 26, carbs: 55, fats: 38, price_sar: 25, estimated: true, family: 'mcd-mcchicken-spicy', units: 1.37 },
  { id: 'mcd-mcchicken', chain: "McDonald's KSA", name: 'Mc Chicken', category: 'main', calories: 453, protein: 16, carbs: 44, fats: 23, price_sar: 19, estimated: true, family: 'mcd-mcchicken', units: 1 },
  { id: 'mcd-mcchicken-double-up', chain: "McDonald's KSA", name: 'Mc Chicken Double Up', category: 'main', calories: 647, protein: 25, carbs: 56, fats: 35, price_sar: 24, estimated: true, family: 'mcd-mcchicken', units: 1.43 },
  { id: 'mcd-mcarabia', chain: "McDonald's KSA", name: 'Mc Arabia', category: 'main', calories: 551, protein: 31, carbs: 48, fats: 26, price_sar: 22, estimated: true },
  { id: 'mcd-mcroyale', chain: "McDonald's KSA", name: 'Mc Royale', category: 'main', calories: 516, protein: 28, carbs: 40, fats: 26, price_sar: 21, estimated: true },
  { id: 'mcd-quarter-pounder', chain: "McDonald's KSA", name: 'Quarter Pounder With Cheese', category: 'main', calories: 523, protein: 30, carbs: 42, fats: 27, price_sar: 20, estimated: true },
  { id: 'mcd-little-tasty-chicken', chain: "McDonald's KSA", name: 'Little Tasty Chicken', category: 'main', calories: 489, protein: 20, carbs: 45, fats: 24, price_sar: 14, estimated: true },
  { id: 'mcd-triple-cheeseburger', chain: "McDonald's KSA", name: 'Triple Cheeseburger', category: 'main', calories: 674, protein: 39, carbs: 36, fats: 40, price_sar: 17, estimated: true },
  { id: 'mcd-double-cheeseburger', chain: "McDonald's KSA", name: 'Double Cheeseburger', category: 'main', calories: 495, protein: 28, carbs: 34, fats: 26, price_sar: 13, estimated: true },
  { id: 'mcd-mcwrap-chicken', chain: "McDonald's KSA", name: 'Mc Wrap Chicken', category: 'main', calories: 481, protein: 22, carbs: 48, fats: 22, price_sar: 13, estimated: true },
  { id: 'mcd-mcwrap-peri-peri', chain: "McDonald's KSA", name: 'Mc Wrap Peri Peri', category: 'main', calories: 432, protein: 20, carbs: 46, fats: 18, price_sar: 13, estimated: true },
  { id: 'mcd-chicken-burger', chain: "McDonald's KSA", name: 'Chicken Burger', category: 'main', calories: 310, protein: 13, carbs: 36, fats: 12, price_sar: 7, estimated: true },
  { id: 'mcd-cheeseburger', chain: "McDonald's KSA", name: 'Cheeseburger', category: 'main', calories: 338, protein: 16, carbs: 32, fats: 16, price_sar: 8, estimated: true },
  { id: 'mcd-beefburger', chain: "McDonald's KSA", name: 'Beefburger', category: 'main', calories: 284, protein: 13, carbs: 31, fats: 11, price_sar: 7, estimated: true },
  { id: 'mcd-9pc-nuggets', chain: "McDonald's KSA", name: '9 Piece Chicken Mc Nuggets', category: 'main', calories: 355, protein: 21, carbs: 22, fats: 21, price_sar: 20, estimated: true, family: 'mcd-nuggets', units: 3 },
  { id: 'mcd-6pc-nuggets', chain: "McDonald's KSA", name: '6 Piece Chicken Mc Nuggets', category: 'side', calories: 237, protein: 14, carbs: 15, fats: 14, price_sar: 11, estimated: true, family: 'mcd-nuggets', units: 2 },
  { id: 'mcd-sausage-egg', chain: "McDonald's KSA", name: 'Sausage With Egg', category: 'main', calories: 307, protein: 17, carbs: 26, fats: 15, price_sar: 13, estimated: true, family: 'mcd-sausage-egg', units: 1 },
  { id: 'mcd-double-up-sausage-egg', chain: "McDonald's KSA", name: 'Double Up Sausage With Egg', category: 'main', calories: 519, protein: 29, carbs: 28, fats: 30, price_sar: 15, estimated: true, family: 'mcd-sausage-egg', units: 1.7 },
  { id: 'mcd-egg-mcmuffin', chain: "McDonald's KSA", name: 'Egg Mc Muffin', category: 'main', calories: 257, protein: 16, carbs: 27, fats: 10, price_sar: 12, estimated: true },
  { id: 'mcd-hash-brown', chain: "McDonald's KSA", name: 'Hash Brown', category: 'side', calories: 173, protein: 2, carbs: 17, fats: 11, price_sar: 9, estimated: true },
  { id: 'mcd-fries', chain: "McDonald's KSA", name: 'Fries', category: 'side', calories: 203, protein: 3, carbs: 26, fats: 10, price_sar: 9, estimated: true },
  { id: 'mcd-jalapeno-cheese-bites', chain: "McDonald's KSA", name: 'Jalapeno Cheese Bites', category: 'side', calories: 226, protein: 7, carbs: 22, fats: 12, price_sar: 9, estimated: true },
  { id: 'mcd-chicken-strips', chain: "McDonald's KSA", name: 'Chicken Strips', category: 'side', calories: 160, protein: 11, carbs: 10, fats: 8, price_sar: 9, estimated: true },
  { id: 'mcd-caesar-salad', chain: "McDonald's KSA", name: 'Chicken Caesar Salad', category: 'side', calories: 196, protein: 18, carbs: 8, fats: 10, price_sar: 26, estimated: true },
  { id: 'mcd-apple-bites', chain: "McDonald's KSA", name: 'Apple Bites', category: 'side', calories: 23, protein: 0, carbs: 6, fats: 0, price_sar: 8, estimated: true },
  { id: 'mcd-pineapple-stick', chain: "McDonald's KSA", name: 'Pineapple Stick', category: 'side', calories: 38, protein: 0, carbs: 9, fats: 0, price_sar: 8, estimated: true },
  { id: 'mcd-mcflurry-kitkat', chain: "McDonald's KSA", name: 'Mc Flurry Kit Kat', category: 'dessert', calories: 501, protein: 10, carbs: 70, fats: 19, price_sar: 13, estimated: true },
  { id: 'mcd-mcflurry-oreo', chain: "McDonald's KSA", name: 'Mc Flurry Oreo', category: 'dessert', calories: 399, protein: 9, carbs: 61, fats: 13, price_sar: 12, estimated: true },
  { id: 'mcd-sundae-caramel', chain: "McDonald's KSA", name: 'Caramel Sundae', category: 'dessert', calories: 346, protein: 7, carbs: 60, fats: 9, price_sar: 9, estimated: true },
  { id: 'mcd-sundae-chocolate', chain: "McDonald's KSA", name: 'Chocolate Sundae', category: 'dessert', calories: 331, protein: 7, carbs: 56, fats: 9, price_sar: 9, estimated: true },
  { id: 'mcd-classic-donut', chain: "McDonald's KSA", name: 'Classic Donut', category: 'dessert', calories: 378, protein: 6, carbs: 45, fats: 19, price_sar: 6, estimated: true },
  { id: 'mcd-lotus-mcbites', chain: "McDonald's KSA", name: 'Lotus Mc Bites', category: 'dessert', calories: 408, protein: 6, carbs: 48, fats: 21, price_sar: 9, estimated: true },
  { id: 'mcd-donut-mcbites', chain: "McDonald's KSA", name: 'Donut Mc Bites', category: 'dessert', calories: 361, protein: 6, carbs: 44, fats: 17, price_sar: 9, estimated: true },
  { id: 'mcd-mini-oreo-donut', chain: "McDonald's KSA", name: 'Mini Oreo Donut', category: 'dessert', calories: 118, protein: 2, carbs: 15, fats: 5, price_sar: 5, estimated: true },
  { id: 'mcd-double-choc-cookie', chain: "McDonald's KSA", name: 'Double Chocolate Cookie', category: 'dessert', calories: 389, protein: 5, carbs: 48, fats: 19, price_sar: 10, estimated: true },
  { id: 'mcd-croissant-chocolate', chain: "McDonald's KSA", name: 'Croissant Chocolate', category: 'dessert', calories: 287, protein: 5, carbs: 31, fats: 16, price_sar: 10, estimated: true },

  // ── Burger King ────────────────────────────────────────────────
  // À la carte reconciled to HungerStation SFDA labels (2026-07), which match
  // BK published values (Whopper 670, Big King 589, Big King XL 1045) and
  // self-verify on sides (nuggets exactly 46/pc across 6/9/12pc, chicken
  // fries 33.4/pc across 7/10pc). Meals (drinks included), Cheese Storm
  // "What's New" promo, sharing boxes, kids meals, unlabeled wings skipped.
  // Whopper Jr. and Caramel Sundae have no à la carte HS listing — left as-is.
  { id: 'bk-whopper', chain: 'Burger King', name: 'Whopper', category: 'main', calories: 670, protein: 28, carbs: 50, fats: 41, price_sar: 30, estimated: false },
  { id: 'bk-whopper-jr', chain: 'Burger King', name: 'Whopper Jr.', category: 'main', calories: 330, protein: 14, carbs: 27, fats: 18, price_sar: 15, estimated: false },
  { id: 'bk-big-king', chain: 'Burger King', name: 'Big King', category: 'main', calories: 589, protein: 27, carbs: 42, fats: 36, price_sar: 23, estimated: false },
  { id: 'bk-cheeseburger', chain: 'Burger King', name: 'Cheeseburger', category: 'main', calories: 337, protein: 16, carbs: 28, fats: 18, price_sar: 8, estimated: false },
  { id: 'bk-hamburger', chain: 'Burger King', name: 'Hamburger', category: 'main', calories: 252, protein: 13, carbs: 30, fats: 9, price_sar: 7, estimated: true },
  { id: 'bk-double-cheeseburger', chain: 'Burger King', name: 'Double Cheeseburger', category: 'main', calories: 392, protein: 24, carbs: 30, fats: 20, price_sar: 12, estimated: true },
  { id: 'bk-chicken-royale', chain: 'Burger King', name: 'Chicken Royale', category: 'main', calories: 479, protein: 22, carbs: 44, fats: 24, price_sar: 31, estimated: true },
  { id: 'bk-double-chicken-royale', chain: 'Burger King', name: 'Double Chicken Royale', category: 'main', calories: 760, protein: 42, carbs: 58, fats: 40, price_sar: 39, estimated: true },
  { id: 'bk-chicken-burger', chain: 'Burger King', name: 'Chicken Burger', category: 'main', calories: 314, protein: 15, carbs: 34, fats: 13, price_sar: 8, estimated: true },
  { id: 'bk-chicken-burger-cheese', chain: 'Burger King', name: 'Chicken Burger with Cheese', category: 'main', calories: 356, protein: 16, carbs: 36, fats: 16, price_sar: 9, estimated: true },
  { id: 'bk-double-king-chicken-tasty', chain: 'Burger King', name: 'Double King Chicken Tasty', category: 'main', calories: 838, protein: 38, carbs: 70, fats: 45, price_sar: 17, estimated: true },
  { id: 'bk-double-whopper', chain: 'Burger King', name: 'Double Whopper', category: 'main', calories: 919, protein: 52, carbs: 50, fats: 56, price_sar: 37, estimated: true },
  { id: 'bk-steakhouse', chain: 'Burger King', name: 'Steakhouse', category: 'main', calories: 865, protein: 42, carbs: 58, fats: 52, price_sar: 37, estimated: true },
  { id: 'bk-steakhouse-xl', chain: 'Burger King', name: 'Steakhouse XL', category: 'main', calories: 1127, protein: 60, carbs: 60, fats: 72, price_sar: 43, estimated: true },
  { id: 'bk-big-king-xl', chain: 'Burger King', name: 'Big King XL', category: 'main', calories: 1045, protein: 52, carbs: 52, fats: 70, price_sar: 37, estimated: true },
  { id: 'bk-big-king-chicken', chain: 'Burger King', name: 'Big King Chicken', category: 'main', calories: 875, protein: 36, carbs: 74, fats: 48, price_sar: 23, estimated: true },
  { id: 'bk-spicy-chicken-deluxe', chain: 'Burger King', name: 'Spicy Chicken Deluxe', category: 'main', calories: 617, protein: 26, carbs: 52, fats: 34, price_sar: 27, estimated: true },
  { id: 'bk-chicken-crispy', chain: 'Burger King', name: 'Chicken Crispy', category: 'main', calories: 432, protein: 17, carbs: 44, fats: 21, price_sar: 24, estimated: true },
  { id: 'bk-grilled-chicken', chain: 'Burger King', name: 'Grilled Chicken Sandwich', category: 'main', calories: 486, protein: 32, carbs: 40, fats: 22, price_sar: 33, estimated: true },
  { id: 'bk-king-chicken-fillet', chain: 'Burger King', name: 'King Chicken Fillet', category: 'main', calories: 780, protein: 32, carbs: 64, fats: 44, price_sar: 36, estimated: true },
  { id: 'bk-garden-salad', chain: 'Burger King', name: 'King Garden Salad', category: 'side', calories: 170, protein: 5, carbs: 12, fats: 11, price_sar: 24, estimated: true },
  { id: 'bk-grilled-chicken-salad', chain: 'Burger King', name: 'King Grilled Chicken Salad', category: 'main', calories: 320, protein: 28, carbs: 14, fats: 17, price_sar: 29, estimated: true },
  { id: 'bk-crunchy-chicken-salad', chain: 'Burger King', name: 'Crunchy Chicken Salad', category: 'main', calories: 610, protein: 30, carbs: 32, fats: 40, price_sar: 29, estimated: true },
  { id: 'bk-tex-mex-fries', chain: 'Burger King', name: 'Tex Mex Loaded Fries', category: 'side', calories: 750, protein: 18, carbs: 80, fats: 40, price_sar: 17, estimated: true },
  { id: 'bk-chili-cheese-bites-5', chain: 'Burger King', name: 'Chili Cheese Bites (5 pc)', category: 'side', calories: 520, protein: 14, carbs: 42, fats: 32, price_sar: 14, estimated: true, family: 'bk-chili-cheese-bites', units: 5 },
  { id: 'bk-chili-cheese-bites-8', chain: 'Burger King', name: 'Chili Cheese Bites (8 pc)', category: 'side', calories: 832, protein: 22, carbs: 67, fats: 53, price_sar: 19, estimated: true, family: 'bk-chili-cheese-bites', units: 8 },
  { id: 'bk-mozzarella-sticks', chain: 'Burger King', name: 'Mozzarella Cheese Sticks (3 pc)', category: 'side', calories: 308, protein: 14, carbs: 22, fats: 18, price_sar: 15, estimated: true },
  { id: 'bk-chicken-fries-7', chain: 'Burger King', name: 'Chicken Fries (7 pc)', category: 'side', calories: 234, protein: 15, carbs: 18, fats: 11, price_sar: 15, estimated: true, family: 'bk-chicken-fries', units: 7 },
  { id: 'bk-chicken-fries-10', chain: 'Burger King', name: 'Chicken Fries (10 pc)', category: 'side', calories: 334, protein: 21, carbs: 26, fats: 16, price_sar: 19, estimated: true, family: 'bk-chicken-fries', units: 10 },
  { id: 'bk-nuggets-6pc', chain: 'Burger King', name: 'Chicken Nuggets (6 pc)', category: 'side', calories: 276, protein: 15, carbs: 16, fats: 16, price_sar: 12, estimated: true, family: 'bk-nuggets', units: 6 },
  { id: 'bk-nuggets-12pc', chain: 'Burger King', name: 'Chicken Nuggets (12 pc)', category: 'side', calories: 552, protein: 30, carbs: 32, fats: 34, price_sar: 20, estimated: true, family: 'bk-nuggets', units: 12 },
  { id: 'bk-crispy-tenders', chain: 'Burger King', name: 'Crispy Chicken Tenders', category: 'side', calories: 292, protein: 22, carbs: 22, fats: 13, price_sar: 16, estimated: true },
  { id: 'bk-onion-rings', chain: 'Burger King', name: 'Onion Rings (12 pc)', category: 'side', calories: 405, protein: 5, carbs: 50, fats: 20, price_sar: 15, estimated: true },
  { id: 'bk-fries-regular', chain: 'Burger King', name: 'French Fries (Regular)', category: 'side', calories: 259, protein: 3, carbs: 33, fats: 12, price_sar: 10, estimated: true },
  { id: 'bk-fries-medium', chain: 'Burger King', name: 'French Fries (Medium)', category: 'side', calories: 411, protein: 5, carbs: 52, fats: 20, price_sar: 11, estimated: true },
  { id: 'bk-fries-large', chain: 'Burger King', name: 'French Fries (Large)', category: 'side', calories: 569, protein: 7, carbs: 70, fats: 29, price_sar: 12, estimated: true },
  { id: 'bk-apple-pie', chain: 'Burger King', name: 'Apple Pie', category: 'dessert', calories: 242, protein: 2, carbs: 34, fats: 11, price_sar: 7, estimated: true },
  { id: 'bk-hanini-lava-cake', chain: 'Burger King', name: 'Hanini Lava Cake', category: 'dessert', calories: 280, protein: 4, carbs: 40, fats: 12, price_sar: 7, estimated: true },
  { id: 'bk-caramel-sundae', chain: 'Burger King', name: 'Caramel Sundae', category: 'dessert', calories: 280, protein: 5, carbs: 48, fats: 7, price_sar: 8, estimated: false },

  // ── Hardee's ───────────────────────────────────────────────────
  // Rebuilt 2026-07 from real HS menu (Malqa, /5147) — old block was the US menu
  // (Famous Star / Thickburger don't exist in KSA). HS labels anchored, macros
  // back-computed (estimated:true). Skipped: every Combo/Box (all include a
  // drink), HS Offers / World Cup / One Piece LTO sections, kids meals, sauces,
  // drinks, Overloader Chicken & Spicy (1880/1886 labels are combo copy-paste),
  // Mighty Tenders (only sold as drink combos).
  { id: 'hardees-super-star-beef', chain: "Hardee's", name: 'Super Star Beef Sandwich', category: 'main', calories: 1062, protein: 50, carbs: 75, fats: 62, price_sar: 31, estimated: true },
  { id: 'hardees-super-star-chicken', chain: "Hardee's", name: 'Super Star Chicken Sandwich', category: 'main', calories: 1481, protein: 70, carbs: 127, fats: 76, price_sar: 31, estimated: true },
  { id: 'hardees-super-star-chicken-spicy', chain: "Hardee's", name: 'Super Star Chicken Spicy Sandwich', category: 'main', calories: 1334, protein: 65, carbs: 115, fats: 68, price_sar: 32, estimated: true },
  { id: 'hardees-tornado-jalapeno', chain: "Hardee's", name: 'Tornado Chicken Jalapeno Ranch', category: 'main', calories: 1293, protein: 60, carbs: 125, fats: 61, price_sar: 28, estimated: true },
  { id: 'hardees-chicken-fillet', chain: "Hardee's", name: 'Chicken Fillet Sandwich', category: 'main', calories: 699, protein: 30, carbs: 60, fats: 37, price_sar: 26, estimated: true },
  { id: 'hardees-chicken-santafe', chain: "Hardee's", name: 'Chicken Santafe Sandwich', category: 'main', calories: 697, protein: 30, carbs: 60, fats: 37, price_sar: 27, estimated: true },
  { id: 'hardees-big-deluxe', chain: "Hardee's", name: 'Big Deluxe Sandwich', category: 'main', calories: 715, protein: 30, carbs: 58, fats: 40, price_sar: 25, estimated: true },
  { id: 'hardees-mushroom-swiss', chain: "Hardee's", name: "Mushroom N' Swiss Sandwich", category: 'main', calories: 616, protein: 32, carbs: 54, fats: 30, price_sar: 27, estimated: true },
  { id: 'hardees-wraptor', chain: "Hardee's", name: 'Wraptor', category: 'main', calories: 683, protein: 35, carbs: 68, fats: 30, price_sar: 12, estimated: true },
  { id: 'hardees-spicy-wraptor', chain: "Hardee's", name: 'Spicy Wraptor', category: 'main', calories: 683, protein: 35, carbs: 68, fats: 30, price_sar: 13, estimated: true },
  { id: 'hardees-roast-beef', chain: "Hardee's", name: 'Roast Beef Sandwich', category: 'main', calories: 422, protein: 28, carbs: 40, fats: 16, price_sar: 29, estimated: true },
  { id: 'hardees-overloader-beef', chain: "Hardee's", name: 'Overloader Beef', category: 'main', calories: 652, protein: 35, carbs: 53, fats: 33, price_sar: 32, estimated: true },
  { id: 'hardees-double-hardee-beef', chain: "Hardee's", name: 'Double Hardee Beef Sandwich', category: 'main', calories: 700, protein: 35, carbs: 60, fats: 35, price_sar: 11, estimated: true },
  { id: 'hardees-double-hardee-chicken', chain: "Hardee's", name: 'Double Hardee Chicken Sandwich', category: 'main', calories: 893, protein: 40, carbs: 85, fats: 43, price_sar: 11, estimated: true },
  { id: 'hardees-double-hardee-santafe', chain: "Hardee's", name: 'Double Hardee Santa Fe Chicken Sandwich', category: 'main', calories: 747, protein: 38, carbs: 70, fats: 35, price_sar: 11, estimated: true },
  { id: 'hardees-curly-cheeseburger', chain: "Hardee's", name: 'Curly Cheeseburger Sandwich', category: 'main', calories: 499, protein: 22, carbs: 50, fats: 23, price_sar: 8, estimated: true },
  { id: 'hardees-curly-santafe-chicken', chain: "Hardee's", name: 'Curly Santa Fe Chicken Sandwich', category: 'main', calories: 494, protein: 20, carbs: 54, fats: 22, price_sar: 8, estimated: true },
  { id: 'hardees-curly-chicken', chain: "Hardee's", name: 'Curly Chicken Sandwich', category: 'main', calories: 607, protein: 24, carbs: 63, fats: 29, price_sar: 8, estimated: true },
  { id: 'hardees-nacho-cheese-bites', chain: "Hardee's", name: 'Nacho Cheese Bites (6 pc)', category: 'side', calories: 861, protein: 22, carbs: 80, fats: 50, price_sar: 15, estimated: true },
  { id: 'hardees-philly-steak-fries', chain: "Hardee's", name: 'Philly Steak Fries', category: 'side', calories: 1028, protein: 40, carbs: 85, fats: 58, price_sar: 18, estimated: true },
  { id: 'hardees-loaded-fries', chain: "Hardee's", name: 'Loaded Fries', category: 'side', calories: 837, protein: 20, carbs: 85, fats: 46, price_sar: 16, estimated: true },
  { id: 'hardees-crispy-curls', chain: "Hardee's", name: 'Large Crispy Curls', category: 'side', calories: 741, protein: 8, carbs: 90, fats: 38, price_sar: 13, estimated: true },
  { id: 'hardees-churros-caramel', chain: "Hardee's", name: 'Churros with Caramel', category: 'dessert', calories: 382, protein: 4, carbs: 55, fats: 16, price_sar: 10, estimated: true },
  { id: 'hardees-churros-cream', chain: "Hardee's", name: 'Churros with Sweet Cream', category: 'dessert', calories: 388, protein: 4, carbs: 56, fats: 16, price_sar: 10, estimated: true },
  { id: 'hardees-hersheys-cookie', chain: "Hardee's", name: "Classic Hershey's Chocolate Cookie", category: 'dessert', calories: 271, protein: 3, carbs: 36, fats: 13, price_sar: 6, estimated: true },

  // ── Five Guys ──────────────────────────────────────────────────
  // Price audit 2026-07 vs HS Malqa (/105632): all prices realigned; burgers/dogs/
  // sandwiches re-anchored to HS SFDA labels (include standard toppings, higher than
  // plain published values). Fries keep Five Guys published nutrition (no HS labels).
  // Removed Bacon Burger (not on KSA menu). Skipped: Patty Melt (no label),
  // milkshake + drinks (beverages).
  { id: 'fiveguys-cheeseburger', chain: 'Five Guys', name: 'Cheeseburger', category: 'main', calories: 1003, protein: 47, carbs: 68, fats: 60, price_sar: 55, family: 'fiveguys-cheeseburger', units: 2, estimated: true },
  { id: 'fiveguys-little-cheeseburger', chain: 'Five Guys', name: 'Little Cheeseburger', category: 'main', calories: 634, protein: 27, carbs: 50, fats: 36, price_sar: 44, family: 'fiveguys-cheeseburger', units: 1, estimated: true },
  { id: 'fiveguys-hamburger', chain: 'Five Guys', name: 'Hamburger', category: 'main', calories: 852, protein: 40, carbs: 63, fats: 49, price_sar: 48, family: 'fiveguys-hamburger', units: 2, estimated: true },
  { id: 'fiveguys-little-hamburger', chain: 'Five Guys', name: 'Little Hamburger', category: 'main', calories: 559, protein: 23, carbs: 48, fats: 30, price_sar: 37, family: 'fiveguys-hamburger', units: 1, estimated: true },
  { id: 'fiveguys-cheese-dog', chain: 'Five Guys', name: 'Cheese Dog', category: 'main', calories: 580, protein: 20, carbs: 42, fats: 36, price_sar: 35, estimated: true },
  { id: 'fiveguys-hot-dog', chain: 'Five Guys', name: 'Hotdog', category: 'main', calories: 505, protein: 18, carbs: 40, fats: 30, price_sar: 32, estimated: true },
  { id: 'fiveguys-veggie-sandwich', chain: 'Five Guys', name: 'Veggie Sandwich', category: 'main', calories: 314, protein: 8, carbs: 45, fats: 11, price_sar: 29, estimated: true },
  { id: 'fiveguys-cheese-veggie-sandwich', chain: 'Five Guys', name: 'Cheese Veggie Sandwich', category: 'main', calories: 465, protein: 15, carbs: 48, fats: 23, price_sar: 33, estimated: true },
  { id: 'fiveguys-grilled-cheese', chain: 'Five Guys', name: 'Grilled Cheese Sandwich', category: 'main', calories: 427, protein: 11, carbs: 41, fats: 24, price_sar: 29, estimated: true },
  { id: 'fiveguys-fries-little', chain: 'Five Guys', name: 'Little Fries', category: 'side', calories: 530, protein: 8, carbs: 72, fats: 23, price_sar: 22, family: 'fiveguys-fries', units: 1, estimated: false },
  { id: 'fiveguys-fries-regular', chain: 'Five Guys', name: 'Regular Fries', category: 'side', calories: 950, protein: 15, carbs: 131, fats: 41, price_sar: 29, family: 'fiveguys-fries', units: 1.8, estimated: false },
  { id: 'fiveguys-fries-large', chain: 'Five Guys', name: 'Large Fries', category: 'side', calories: 1310, protein: 23, carbs: 181, fats: 57, price_sar: 34, family: 'fiveguys-fries', units: 2.5, estimated: false },

  // ── Black Tap ──────────────────────────────────────────────────
  // Rebuilt 2026-07 from HungerStation (Malqa) labels — craft burgers are
  // credible whole-item (780–950). Rejected junk labels: all cakes "139",
  // 4 pc buttermilk tenders "155", corn ribs "150", sweet potato fries
  // "29", kids Mini "39", NY hot dog + fries "320", Idaho fries "120/190".
  // Skipped: kids meals, unlabeled Truffle Smash, drinks.
  { id: 'blacktap-old-fashioned', chain: 'Black Tap', name: 'The Old Fashioned Burger', category: 'main', calories: 880, protein: 48, carbs: 58, fats: 50, price_sar: 81, estimated: true },
  { id: 'blacktap-all-american', chain: 'Black Tap', name: 'All American Burger', category: 'main', calories: 780, protein: 42, carbs: 54, fats: 44, price_sar: 74, estimated: true },
  { id: 'blacktap-philly-cheesesteak-burger', chain: 'Black Tap', name: 'Philly Cheese Steak Burger', category: 'main', calories: 950, protein: 56, carbs: 58, fats: 54, price_sar: 93, estimated: true },
  { id: 'blacktap-truffle-burger', chain: 'Black Tap', name: 'Truffle Burger (Wagyu)', category: 'main', calories: 930, protein: 50, carbs: 60, fats: 54, price_sar: 97, estimated: true },
  { id: 'blacktap-greg-norman', chain: 'Black Tap', name: 'Greg Norman Burger (Wagyu)', category: 'main', calories: 780, protein: 46, carbs: 48, fats: 44, price_sar: 97, estimated: true },
  { id: 'blacktap-crispy-chicken', chain: 'Black Tap', name: 'Crispy Chicken Sandwich', category: 'main', calories: 850, protein: 44, carbs: 72, fats: 43, price_sar: 81, estimated: true },
  { id: 'blacktap-classic-smash', chain: 'Black Tap', name: 'The Classic Smash', category: 'main', calories: 780, protein: 42, carbs: 52, fats: 44, price_sar: 48, estimated: true },
  { id: 'blacktap-steakhouse-burger', chain: 'Black Tap', name: 'The Steakhouse Burger', category: 'main', calories: 890, protein: 50, carbs: 56, fats: 52, price_sar: 93, estimated: true },
  { id: 'blacktap-chicken-quesadilla', chain: 'Black Tap', name: 'Chicken Quesadilla', category: 'main', calories: 580, protein: 32, carbs: 44, fats: 30, price_sar: 75, estimated: true },
  { id: 'blacktap-korean-bbq-wings-12', chain: 'Black Tap', name: 'Korean BBQ Wings (12 pc)', category: 'main', calories: 766, protein: 58, carbs: 40, fats: 42, price_sar: 83, estimated: true },
  { id: 'blacktap-korean-bbq-tenders-4', chain: 'Black Tap', name: 'Korean BBQ Tenders (4 pc)', category: 'main', calories: 278, protein: 22, carbs: 24, fats: 10, price_sar: 54, estimated: true },
  { id: 'blacktap-caesar-salad', chain: 'Black Tap', name: 'Chicken Caesar Salad', category: 'main', calories: 420, protein: 34, carbs: 18, fats: 24, price_sar: 67, estimated: true },
  { id: 'blacktap-korean-bbq-salad', chain: 'Black Tap', name: 'Korean BBQ Chopped Salad', category: 'main', calories: 790, protein: 42, carbs: 56, fats: 44, price_sar: 70, estimated: true },
  { id: 'blacktap-onion-rings', chain: 'Black Tap', name: 'Onion Rings', category: 'side', calories: 780, protein: 10, carbs: 84, fats: 44, price_sar: 43, estimated: true },
  { id: 'blacktap-cheese-fries', chain: 'Black Tap', name: 'Black Tap Cheese Fries', category: 'side', calories: 610, protein: 18, carbs: 60, fats: 34, price_sar: 45, estimated: true },

  // ── Wendy's ────────────────────────────────────────────────────
  // Rebuilt 2026-07 from HS Malqa /138596 — old block used US menu names
  // (Dave's Single/Double, Jr. Cheeseburger) that KSA HS doesn't sell à la
  // carte; local line is Wendy's Single/Double/Triple + Beefanator. Calories
  // are HS labels; macros back-computed (estimated:true). Skipped: LTO boxes
  // (Falcons/Almazaj etc.), New Stackers + New Rizee + Mushroom Collection
  // (unlabeled "New" promos), all Combos/Meals/Biggie Boxes (drink included;
  // Single Burger Combo's 1747 label spans the whole tray), Sharing Deals,
  // Kids Meals, unlabeled items (Cheesy Potatoes, Beef Chili, Kit Kat Frosty,
  // plain Frosty S/M, 20pc nuggets), junk labels (Spicy Nuggets "10 cal",
  // spicy fries M/L copying Regular's 263), sauces, drinks.
  { id: 'wendys-classic-chicken', chain: "Wendy's", name: 'Classic Chicken Sandwich', category: 'main', calories: 390, protein: 28, carbs: 38, fats: 14, price_sar: 30, estimated: true },
  { id: 'wendys-spicy-chicken', chain: "Wendy's", name: 'Spicy Chicken Sandwich', category: 'main', calories: 389, protein: 28, carbs: 38, fats: 14, price_sar: 31, estimated: true },
  { id: 'wendys-grilled-chicken', chain: "Wendy's", name: 'Grilled Chicken Sandwich', category: 'main', calories: 410, protein: 34, carbs: 36, fats: 14, price_sar: 31, estimated: true },
  { id: 'wendys-single', chain: "Wendy's", name: "Wendy's Single Burger", category: 'main', calories: 640, protein: 30, carbs: 42, fats: 38, price_sar: 31, estimated: true, family: 'wendys-burger', units: 1 },
  { id: 'wendys-double', chain: "Wendy's", name: "Wendy's Double Burger", category: 'main', calories: 986, protein: 52, carbs: 44, fats: 66, price_sar: 38, estimated: true, family: 'wendys-burger', units: 1.54 },
  { id: 'wendys-triple', chain: "Wendy's", name: "Wendy's Triple Burger", category: 'main', calories: 1366, protein: 75, carbs: 46, fats: 96, price_sar: 45, estimated: true, family: 'wendys-burger', units: 2.13 },
  { id: 'wendys-beefanator', chain: "Wendy's", name: 'Beefanator Burger', category: 'main', calories: 1166, protein: 60, carbs: 42, fats: 82, price_sar: 46, estimated: true },
  { id: 'wendys-cheese-fries', chain: "Wendy's", name: 'Cheese Fries', category: 'side', calories: 516, protein: 9, carbs: 56, fats: 28, price_sar: 18, estimated: true },
  { id: 'wendys-onion-rings', chain: "Wendy's", name: 'Onion Rings', category: 'side', calories: 248, protein: 3, carbs: 29, fats: 13, price_sar: 12, estimated: true },
  { id: 'wendys-chili-cheese-nuggets', chain: "Wendy's", name: 'Chili Cheese Nuggets (5 pc)', category: 'side', calories: 310, protein: 10, carbs: 24, fats: 19, price_sar: 14, estimated: true },
  { id: 'wendys-chicken-tender', chain: "Wendy's", name: 'Chicken Tender (3 pc)', category: 'side', calories: 414, protein: 24, carbs: 28, fats: 22, price_sar: 17, estimated: true },
  { id: 'wendys-nuggets-4pc', chain: "Wendy's", name: 'Chicken Nuggets - 4 Pieces', category: 'side', calories: 137, protein: 8, carbs: 8, fats: 8, price_sar: 12, estimated: true, family: 'wendys-nuggets', units: 4 },
  { id: 'wendys-nuggets-6pc', chain: "Wendy's", name: 'Chicken Nuggets - 6 Pieces', category: 'side', calories: 262, protein: 14, carbs: 15, fats: 16, price_sar: 14, estimated: true, family: 'wendys-nuggets', units: 6 },
  { id: 'wendys-nuggets-10pc', chain: "Wendy's", name: 'Chicken Nuggets - 10 Pieces', category: 'main', calories: 390, protein: 22, carbs: 23, fats: 23, price_sar: 20, estimated: true, family: 'wendys-nuggets', units: 10 },
  { id: 'wendys-fries-small', chain: "Wendy's", name: 'Natural Cut Fries - Small', category: 'side', calories: 264, protein: 4, carbs: 33, fats: 13, price_sar: 11, estimated: true, family: 'wendys-fries', units: 1 },
  { id: 'wendys-fries-medium', chain: "Wendy's", name: 'Natural Cut Fries - Medium', category: 'side', calories: 348, protein: 5, carbs: 44, fats: 17, price_sar: 13, estimated: true, family: 'wendys-fries', units: 1.32 },
  { id: 'wendys-fries-large', chain: "Wendy's", name: 'Natural Cut Fries - Large', category: 'side', calories: 432, protein: 6, carbs: 54, fats: 21, price_sar: 14, estimated: true, family: 'wendys-fries', units: 1.64 },
  { id: 'wendys-spicy-fries', chain: "Wendy's", name: 'Natural Cut Fries (Spicy) - Regular', category: 'side', calories: 263, protein: 4, carbs: 33, fats: 13, price_sar: 13, estimated: true },
  { id: 'wendys-mms-frosty', chain: "Wendy's", name: "M&M's Frosty Ice Cream", category: 'dessert', calories: 563, protein: 12, carbs: 90, fats: 17, price_sar: 16, estimated: true },

  // ── New York Fries ─────────────────────────────────────────────
  // Rebuilt 2026-07 from HungerStation "New York Fries" (Malqa, renamed from
  // NYF to match the listing). Loaded-fries labels are copy-paste junk
  // ("525" across flavors/sizes, small > regular) → regular-size loaded
  // fries use composition estimates with HS prices. Hotdogs, crispy burger
  // and Premium Fries labels are credible. Skipped: all combos/value meals
  // (include drinks), Premium Hotdog ("970" junk), unlabeled strips/loaded
  // hotdogs, sauces, drinks.
  { id: 'nyf-nacho-fries', chain: 'New York Fries', name: 'Nacho Loaded Fries (Regular)', category: 'main', calories: 750, protein: 22, carbs: 80, fats: 38, price_sar: 28, estimated: true },
  { id: 'nyf-chili-chicken-fries', chain: 'New York Fries', name: 'Chili Chicken Loaded Fries (Regular)', category: 'main', calories: 780, protein: 30, carbs: 82, fats: 37, price_sar: 28, estimated: true },
  { id: 'nyf-chili-beef-fries', chain: 'New York Fries', name: 'Chili Beef Loaded Fries (Regular)', category: 'main', calories: 800, protein: 30, carbs: 82, fats: 39, price_sar: 28, estimated: true },
  { id: 'nyf-bacon-double-cheese-fries', chain: 'New York Fries', name: 'Bacon Double Cheese Fries (Regular)', category: 'main', calories: 850, protein: 26, carbs: 84, fats: 46, price_sar: 35, estimated: true },
  { id: 'nyf-truffle-fries', chain: 'New York Fries', name: 'Truffle Fries (Regular)', category: 'main', calories: 720, protein: 14, carbs: 74, fats: 40, price_sar: 33, estimated: true },
  { id: 'nyf-butter-chicken-fries', chain: 'New York Fries', name: 'Butter Chicken Loaded Fries (Regular)', category: 'main', calories: 760, protein: 28, carbs: 78, fats: 38, price_sar: 28, estimated: true },
  { id: 'nyf-chilli-cheese-beef-hotdog', chain: 'New York Fries', name: 'Chilli Cheese Beef Hotdog', category: 'main', calories: 330, protein: 14, carbs: 30, fats: 17, price_sar: 22, estimated: true },
  { id: 'nyf-chilli-cheese-chicken-hotdog', chain: 'New York Fries', name: 'Chilli Cheese Chicken Hotdog', category: 'main', calories: 350, protein: 15, carbs: 32, fats: 18, price_sar: 22, estimated: true },
  { id: 'nyf-flamin-bacon-hotdog', chain: 'New York Fries', name: 'Flamin Bacon Hotdog', category: 'main', calories: 690, protein: 24, carbs: 48, fats: 44, price_sar: 22, estimated: true },
  { id: 'nyf-bacon-double-cheese-hotdog', chain: 'New York Fries', name: 'Bacon Double Cheese Hotdog', category: 'main', calories: 460, protein: 19, carbs: 36, fats: 26, price_sar: 22, estimated: true },
  { id: 'nyf-crispy-chicken-burger', chain: 'New York Fries', name: 'Crispy Chicken Burger', category: 'main', calories: 620, protein: 28, carbs: 56, fats: 31, price_sar: 23, estimated: true },
  { id: 'nyf-premium-fries-small', chain: 'New York Fries', name: 'Premium Fries (Small)', category: 'side', calories: 180, protein: 2, carbs: 24, fats: 8, price_sar: 16, estimated: true, family: 'nyf-premium-fries', units: 1 },
  { id: 'nyf-premium-fries-regular', chain: 'New York Fries', name: 'Premium Fries (Regular)', category: 'side', calories: 530, protein: 7, carbs: 66, fats: 26, price_sar: 18, estimated: true, family: 'nyf-premium-fries', units: 3 },
  { id: 'nyf-premium-fries-large', chain: 'New York Fries', name: 'Premium Fries (Large)', category: 'side', calories: 810, protein: 10, carbs: 100, fats: 40, price_sar: 21, estimated: true, family: 'nyf-premium-fries', units: 4.5 },
];
