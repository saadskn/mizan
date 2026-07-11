// Sandwich & sub chains operating in Riyadh.
// Tier 1: Subway, Kudu. Tier 2: Charleys Philly Steaks.
// Tier 3 (estimates): Shwkat, The Sandwich Company, MAQSAF, Lolivo.

export default [
  // ── Subway ─────────────────────────────────────────────────────
  { id: 'subway-chicken-teriyaki-6', chain: 'Subway', name: 'Chicken Teriyaki (6-inch)', category: 'main', calories: 370, protein: 26, carbs: 46, fats: 9, price_sar: 17, family: 'sub-teriyaki', units: 1, estimated: false },
  { id: 'subway-roasted-chicken-6', chain: 'Subway', name: 'Roasted Chicken Breast (6-inch)', category: 'main', calories: 320, protein: 24, carbs: 44, fats: 6, price_sar: 16, family: 'sub-roasted', units: 1, estimated: false },
  { id: 'subway-turkey-6', chain: 'Subway', name: 'Turkey Breast (6-inch)', category: 'main', calories: 280, protein: 18, carbs: 44, fats: 4, price_sar: 15, family: 'sub-turkey', units: 1, estimated: false },
  { id: 'subway-tuna-6', chain: 'Subway', name: 'Tuna (6-inch)', category: 'main', calories: 480, protein: 20, carbs: 42, fats: 25, price_sar: 16, family: 'sub-tuna', units: 1, estimated: false },
  { id: 'subway-steak-cheese-6', chain: 'Subway', name: 'Steak & Cheese (6-inch)', category: 'main', calories: 380, protein: 26, carbs: 44, fats: 10, price_sar: 19, family: 'sub-steak', units: 1, estimated: false },
  { id: 'subway-meatball-6', chain: 'Subway', name: 'Meatball Marinara (6-inch)', category: 'main', calories: 460, protein: 20, carbs: 56, fats: 16, price_sar: 14, family: 'sub-meatball', units: 1, estimated: false },
  { id: 'subway-veggie-delite-6', chain: 'Subway', name: 'Veggie Delite (6-inch)', category: 'main', calories: 200, protein: 8, carbs: 40, fats: 2, price_sar: 11, family: 'sub-veggie', units: 1, estimated: false },
  { id: 'subway-chicken-teriyaki-footlong', chain: 'Subway', name: 'Chicken Teriyaki (Footlong)', category: 'main', calories: 740, protein: 52, carbs: 92, fats: 18, price_sar: 30, family: 'sub-teriyaki', units: 2, estimated: false },
  { id: 'subway-roasted-chicken-footlong', chain: 'Subway', name: 'Roasted Chicken Breast (Footlong)', category: 'main', calories: 640, protein: 48, carbs: 88, fats: 12, price_sar: 29, family: 'sub-roasted', units: 2, estimated: false },
  { id: 'subway-turkey-footlong', chain: 'Subway', name: 'Turkey Breast (Footlong)', category: 'main', calories: 560, protein: 36, carbs: 88, fats: 8, price_sar: 27, family: 'sub-turkey', units: 2, estimated: false },
  { id: 'subway-tuna-footlong', chain: 'Subway', name: 'Tuna (Footlong)', category: 'main', calories: 960, protein: 40, carbs: 84, fats: 50, price_sar: 29, family: 'sub-tuna', units: 2, estimated: false },
  { id: 'subway-steak-cheese-footlong', chain: 'Subway', name: 'Steak & Cheese (Footlong)', category: 'main', calories: 760, protein: 52, carbs: 88, fats: 20, price_sar: 34, family: 'sub-steak', units: 2, estimated: false },
  { id: 'subway-meatball-footlong', chain: 'Subway', name: 'Meatball Marinara (Footlong)', category: 'main', calories: 920, protein: 40, carbs: 112, fats: 32, price_sar: 25, family: 'sub-meatball', units: 2, estimated: false },
  { id: 'subway-veggie-delite-footlong', chain: 'Subway', name: 'Veggie Delite (Footlong)', category: 'main', calories: 400, protein: 16, carbs: 80, fats: 4, price_sar: 20, family: 'sub-veggie', units: 2, estimated: false },
  { id: 'subway-chicken-salad', chain: 'Subway', name: 'Rotisserie Chicken Salad', category: 'main', calories: 180, protein: 24, carbs: 10, fats: 5, price_sar: 20, estimated: false },
  { id: 'subway-cookie', chain: 'Subway', name: 'Chocolate Chip Cookie', category: 'dessert', calories: 220, protein: 2, carbs: 30, fats: 10, price_sar: 4, estimated: false },

  // ── Kudu ───────────────────────────────────────────────────────
  { id: 'kudu-chicken-fillet', chain: 'Kudu', name: 'Chicken Fillet Sandwich', category: 'main', calories: 450, protein: 24, carbs: 46, fats: 19, price_sar: 15, estimated: false },
  { id: 'kudu-chicken-bbq', chain: 'Kudu', name: 'Chicken BBQ Sandwich', category: 'main', calories: 430, protein: 24, carbs: 46, fats: 17, price_sar: 15, estimated: false },
  { id: 'kudu-burger', chain: 'Kudu', name: 'Kudu Burger', category: 'main', calories: 480, protein: 22, carbs: 42, fats: 25, price_sar: 14, estimated: false },
  { id: 'kudu-shish-tawook', chain: 'Kudu', name: 'Shish Tawook Sandwich', category: 'main', calories: 380, protein: 25, carbs: 42, fats: 12, price_sar: 14, estimated: false },
  { id: 'kudu-club', chain: 'Kudu', name: 'Club Sandwich (White Toast)', category: 'main', calories: 885, protein: 42, carbs: 62, fats: 52, price_sar: 29, estimated: true },
  { id: 'kudu-egg-cheese-breakfast', chain: 'Kudu', name: 'Egg & Cheese Breakfast Sandwich', category: 'main', calories: 350, protein: 16, carbs: 36, fats: 16, price_sar: 9, estimated: false },
  { id: 'kudu-fries', chain: 'Kudu', name: 'French Fries', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 8, estimated: false },
  { id: 'kudu-loaded-fries', chain: 'Kudu', name: 'Loaded Fries', category: 'side', calories: 450, protein: 10, carbs: 48, fats: 24, price_sar: 13, estimated: false },
  { id: 'kudu-corn-cup', chain: 'Kudu', name: 'Corn Cup', category: 'side', calories: 130, protein: 4, carbs: 24, fats: 2, price_sar: 7, estimated: false },
  { id: 'kudu-cookie', chain: 'Kudu', name: 'Kudu Cookie', category: 'dessert', calories: 230, protein: 3, carbs: 31, fats: 11, price_sar: 5, estimated: false },
  // HungerStation menu expansion (2026-07): SFDA calorie labels, estimated macros.
  { id: 'kudu-chicken-sandwich', chain: 'Kudu', name: 'Kudu Chicken Sandwich', category: 'main', calories: 609, protein: 32, carbs: 55, fats: 28, price_sar: 28, estimated: true },
  { id: 'kudu-spicy-chicken-sandwich', chain: 'Kudu', name: 'Spicy Chicken Sandwich', category: 'main', calories: 690, protein: 34, carbs: 58, fats: 35, price_sar: 29, estimated: true },
  { id: 'kudu-philly-steak', chain: 'Kudu', name: 'Philly Steak Sandwich', category: 'main', calories: 763, protein: 38, carbs: 56, fats: 42, price_sar: 29, estimated: true },
  { id: 'kudu-beef-sandwich', chain: 'Kudu', name: 'Kudu Beef Sandwich', category: 'main', calories: 715, protein: 34, carbs: 56, fats: 38, price_sar: 29, estimated: true },
  { id: 'kudu-quattro-chicken', chain: 'Kudu', name: 'Quattro Chicken Sandwich', category: 'main', calories: 697, protein: 30, carbs: 58, fats: 38, price_sar: 28, estimated: true },
  { id: 'kudu-lafino-chicken', chain: 'Kudu', name: 'Lafino Chicken Sandwich', category: 'main', calories: 575, protein: 30, carbs: 48, fats: 28, price_sar: 28, estimated: true },
  { id: 'kudu-muthalatha', chain: 'Kudu', name: 'Muthalatha Sandwich', category: 'main', calories: 798, protein: 36, carbs: 60, fats: 44, price_sar: 29, estimated: true },
  { id: 'kudu-caesar-salad', chain: 'Kudu', name: 'Chicken Caesar Salad', category: 'main', calories: 571, protein: 40, carbs: 25, fats: 35, price_sar: 27, estimated: true },
  { id: 'kudu-grilled-diet-meal', chain: 'Kudu', name: 'Grilled Chicken Diet Meal', category: 'main', calories: 333, protein: 34, carbs: 26, fats: 10, price_sar: 39, estimated: true },
  { id: 'kudu-chicken-salad', chain: 'Kudu', name: 'Kudu Chicken Salad', category: 'main', calories: 178, protein: 22, carbs: 10, fats: 6, price_sar: 26, estimated: true },
  { id: 'kudu-strips-bucket-10', chain: 'Kudu', name: 'Chicken Strips Bucket (10 pc)', category: 'main', calories: 1656, protein: 102, carbs: 115, fats: 88, price_sar: 49, estimated: true },
  { id: 'kudu-cheese-nachos-3', chain: 'Kudu', name: 'Cheese Nachos (3 pc)', category: 'side', calories: 283, protein: 8, carbs: 24, fats: 17, price_sar: 13, estimated: true },
  { id: 'kudu-chicken-bites-6', chain: 'Kudu', name: 'Kudu Chicken Bites (6 pc)', category: 'side', calories: 350, protein: 18, carbs: 28, fats: 17, price_sar: 14, estimated: true },
  { id: 'kudu-nuggets-6', chain: 'Kudu', name: 'Chicken Nuggets (6 pc)', category: 'side', calories: 294, protein: 15, carbs: 20, fats: 16, price_sar: 14, estimated: true },
  { id: 'kudu-potato-crisps', chain: 'Kudu', name: 'Potato Crisps (6 pc)', category: 'side', calories: 249, protein: 3, carbs: 30, fats: 13, price_sar: 11, estimated: true },
  { id: 'kudu-hash-brown', chain: 'Kudu', name: 'Hash Brown', category: 'side', calories: 107, protein: 1, carbs: 11, fats: 6, price_sar: 4, estimated: true },
  { id: 'kudu-san-sebastian', chain: 'Kudu', name: 'San Sebastian Cheesecake', category: 'dessert', calories: 299, protein: 6, carbs: 22, fats: 21, price_sar: 16, estimated: true },
  { id: 'kudu-brownies-cheesecake', chain: 'Kudu', name: 'Brownies Cheesecake', category: 'dessert', calories: 306, protein: 5, carbs: 28, fats: 19, price_sar: 18, estimated: true },

  // ── Charleys Philly Steaks ─────────────────────────────────────
  { id: 'charleys-philly-small', chain: 'Charleys Philly Steaks', name: 'Philly Cheesesteak (Small)', category: 'main', calories: 480, protein: 28, carbs: 44, fats: 22, price_sar: 25, estimated: false },
  { id: 'charleys-philly-regular', chain: 'Charleys Philly Steaks', name: 'Philly Cheesesteak (Regular)', category: 'main', calories: 700, protein: 41, carbs: 60, fats: 33, price_sar: 33, estimated: false },
  { id: 'charleys-chicken-philly', chain: 'Charleys Philly Steaks', name: 'Chicken Philly (Small)', category: 'main', calories: 450, protein: 29, carbs: 44, fats: 18, price_sar: 24, estimated: false },
  { id: 'charleys-buffalo-chicken', chain: 'Charleys Philly Steaks', name: 'Chicken Buffalo Philly (Small)', category: 'main', calories: 480, protein: 29, carbs: 46, fats: 20, price_sar: 25, estimated: false },
  { id: 'charleys-gourmet-fries', chain: 'Charleys Philly Steaks', name: 'Gourmet Fries', category: 'side', calories: 420, protein: 5, carbs: 54, fats: 20, price_sar: 13, estimated: false },
  { id: 'charleys-loaded-fries', chain: 'Charleys Philly Steaks', name: 'Loaded Fries', category: 'side', calories: 560, protein: 13, carbs: 58, fats: 30, price_sar: 19, estimated: false },

  // ── Shwkat ─────────────────────────────────────────────────────
  { id: 'shwkat-philly-sub', chain: 'Shwkat', name: 'Philly Cheesesteak Sub', category: 'main', calories: 620, protein: 34, carbs: 52, fats: 30, price_sar: 28, estimated: true },
  { id: 'shwkat-beef-sub', chain: 'Shwkat', name: 'Classic Beef Sub', category: 'main', calories: 580, protein: 32, carbs: 50, fats: 27, price_sar: 26, estimated: true },
  { id: 'shwkat-chicken-sub', chain: 'Shwkat', name: 'Chicken Sub', category: 'main', calories: 540, protein: 31, carbs: 50, fats: 22, price_sar: 24, estimated: true },
  { id: 'shwkat-mini-duo', chain: 'Shwkat', name: 'Mini Subs (2 pc)', category: 'main', calories: 520, protein: 26, carbs: 48, fats: 24, price_sar: 23, estimated: true },
  { id: 'shwkat-fries', chain: 'Shwkat', name: 'French Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 15, price_sar: 10, estimated: true },

  // ── The Sandwich Company ───────────────────────────────────────
  { id: 'sandwichco-grilled-chicken', chain: 'The Sandwich Company', name: 'Crispy Chicken Sandwich', category: 'main', calories: 520, protein: 30, carbs: 50, fats: 22, price_sar: 24, estimated: true },
  { id: 'sandwichco-roast-beef', chain: 'The Sandwich Company', name: 'Philly Steak Sandwich', category: 'main', calories: 600, protein: 32, carbs: 54, fats: 28, price_sar: 29, estimated: true },
  { id: 'sandwichco-halloumi-avocado', chain: 'The Sandwich Company', name: 'Halloumi Avocado Sandwich', category: 'main', calories: 510, protein: 18, carbs: 50, fats: 26, price_sar: 25, estimated: true },
  { id: 'sandwichco-turkey-melt', chain: 'The Sandwich Company', name: 'Smoked Turkey Sandwich', category: 'main', calories: 480, protein: 26, carbs: 48, fats: 20, price_sar: 22, estimated: true },
  { id: 'sandwichco-house-fries', chain: 'The Sandwich Company', name: 'House Fries', category: 'side', calories: 340, protein: 4, carbs: 44, fats: 16, price_sar: 12, estimated: true },

  // ── MAQSAF ─────────────────────────────────────────────────────
  { id: 'maqsaf-chicken', chain: 'MAQSAF', name: 'Chicken Sandwich (School-style)', category: 'main', calories: 380, protein: 18, carbs: 44, fats: 14, price_sar: 8, estimated: true },
  { id: 'maqsaf-beef', chain: 'MAQSAF', name: 'Beef Sandwich (School-style)', category: 'main', calories: 410, protein: 19, carbs: 46, fats: 16, price_sar: 9, estimated: true },
  { id: 'maqsaf-egg', chain: 'MAQSAF', name: 'Egg Sandwich (School-style)', category: 'main', calories: 340, protein: 14, carbs: 40, fats: 13, price_sar: 6, estimated: true },
  { id: 'maqsaf-fries', chain: 'MAQSAF', name: 'French Fries', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 10, estimated: true },
  { id: 'maqsaf-cookie', chain: 'MAQSAF', name: 'Butter Cookie', category: 'dessert', calories: 260, protein: 4, carbs: 34, fats: 12, price_sar: 9, estimated: true },

  // ── Lolivo ─────────────────────────────────────────────────────
  { id: 'lolivo-smoked-turkey', chain: 'Lolivo', name: 'Smoked Turkey Sandwich', category: 'main', calories: 430, protein: 26, carbs: 44, fats: 16, price_sar: 28, estimated: true },
  { id: 'lolivo-italian-tuna', chain: 'Lolivo', name: 'Italian Tuna Sandwich', category: 'main', calories: 470, protein: 25, carbs: 44, fats: 21, price_sar: 27, estimated: true },
  { id: 'lolivo-steak-truffle', chain: 'Lolivo', name: 'Steak Truffle Sandwich', category: 'main', calories: 540, protein: 32, carbs: 46, fats: 24, price_sar: 36, estimated: true },
  { id: 'lolivo-chicken-mortadella', chain: 'Lolivo', name: 'Chicken Mortadella Sandwich', category: 'main', calories: 460, protein: 27, carbs: 45, fats: 18, price_sar: 28, estimated: true },
  { id: 'lolivo-bresaola', chain: 'Lolivo', name: 'Bresaola Sandwich', category: 'main', calories: 410, protein: 28, carbs: 42, fats: 14, price_sar: 32, estimated: true },
  { id: 'lolivo-salad', chain: 'Lolivo', name: 'Lolivo Salad', category: 'main', calories: 280, protein: 12, carbs: 18, fats: 18, price_sar: 26, estimated: true },
];
