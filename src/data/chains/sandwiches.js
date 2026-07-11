// Sandwich & sub chains operating in Riyadh.
// Tier 1: Subway, Kudu. Tier 2: Charleys Philly Steaks.
// Tier 3 (estimates): Dank Sandwich, Shwkat, The Sandwich Company, MAQSAF.

export default [
  // ── Subway ─────────────────────────────────────────────────────
  { id: 'subway-chicken-teriyaki-6', chain: 'Subway', name: 'Chicken Teriyaki (6-inch)', category: 'main', calories: 370, protein: 26, carbs: 46, fats: 9, price_sar: 17, estimated: false },
  { id: 'subway-roasted-chicken-6', chain: 'Subway', name: 'Roasted Chicken Breast (6-inch)', category: 'main', calories: 320, protein: 24, carbs: 44, fats: 6, price_sar: 16, estimated: false },
  { id: 'subway-turkey-6', chain: 'Subway', name: 'Turkey Breast (6-inch)', category: 'main', calories: 280, protein: 18, carbs: 44, fats: 4, price_sar: 15, estimated: false },
  { id: 'subway-tuna-6', chain: 'Subway', name: 'Tuna (6-inch)', category: 'main', calories: 480, protein: 20, carbs: 42, fats: 25, price_sar: 16, estimated: false },
  { id: 'subway-steak-cheese-6', chain: 'Subway', name: 'Steak & Cheese (6-inch)', category: 'main', calories: 380, protein: 26, carbs: 44, fats: 10, price_sar: 19, estimated: false },
  { id: 'subway-meatball-6', chain: 'Subway', name: 'Meatball Marinara (6-inch)', category: 'main', calories: 460, protein: 20, carbs: 56, fats: 16, price_sar: 14, estimated: false },
  { id: 'subway-veggie-delite-6', chain: 'Subway', name: 'Veggie Delite (6-inch)', category: 'main', calories: 200, protein: 8, carbs: 40, fats: 2, price_sar: 11, estimated: false },
  { id: 'subway-chicken-teriyaki-footlong', chain: 'Subway', name: 'Chicken Teriyaki (Footlong)', category: 'main', calories: 740, protein: 52, carbs: 92, fats: 18, price_sar: 30, estimated: false },
  { id: 'subway-chicken-salad', chain: 'Subway', name: 'Rotisserie Chicken Salad', category: 'main', calories: 180, protein: 24, carbs: 10, fats: 5, price_sar: 20, estimated: false },
  { id: 'subway-cookie', chain: 'Subway', name: 'Chocolate Chip Cookie', category: 'dessert', calories: 220, protein: 2, carbs: 30, fats: 10, price_sar: 4, estimated: false },

  // ── Kudu ───────────────────────────────────────────────────────
  { id: 'kudu-chicken-fillet', chain: 'Kudu', name: 'Chicken Fillet Sandwich', category: 'main', calories: 450, protein: 24, carbs: 46, fats: 19, price_sar: 15, estimated: false },
  { id: 'kudu-chicken-bbq', chain: 'Kudu', name: 'Chicken BBQ Sandwich', category: 'main', calories: 430, protein: 24, carbs: 46, fats: 17, price_sar: 15, estimated: false },
  { id: 'kudu-burger', chain: 'Kudu', name: 'Kudu Burger', category: 'main', calories: 480, protein: 22, carbs: 42, fats: 25, price_sar: 14, estimated: false },
  { id: 'kudu-shish-tawook', chain: 'Kudu', name: 'Shish Tawook Sandwich', category: 'main', calories: 380, protein: 25, carbs: 42, fats: 12, price_sar: 14, estimated: false },
  { id: 'kudu-club', chain: 'Kudu', name: 'Kudu Club Sandwich', category: 'main', calories: 520, protein: 27, carbs: 48, fats: 24, price_sar: 17, estimated: false },
  { id: 'kudu-egg-cheese-breakfast', chain: 'Kudu', name: 'Egg & Cheese Breakfast Sandwich', category: 'main', calories: 350, protein: 16, carbs: 36, fats: 16, price_sar: 9, estimated: false },
  { id: 'kudu-fries', chain: 'Kudu', name: 'French Fries', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 8, estimated: false },
  { id: 'kudu-loaded-fries', chain: 'Kudu', name: 'Loaded Fries', category: 'side', calories: 450, protein: 10, carbs: 48, fats: 24, price_sar: 13, estimated: false },
  { id: 'kudu-corn-cup', chain: 'Kudu', name: 'Corn Cup', category: 'side', calories: 130, protein: 4, carbs: 24, fats: 2, price_sar: 7, estimated: false },
  { id: 'kudu-cookie', chain: 'Kudu', name: 'Kudu Cookie', category: 'dessert', calories: 230, protein: 3, carbs: 31, fats: 11, price_sar: 5, estimated: false },

  // ── Charleys Philly Steaks ─────────────────────────────────────
  { id: 'charleys-philly-small', chain: 'Charleys Philly Steaks', name: 'Philly Cheesesteak (Small)', category: 'main', calories: 480, protein: 28, carbs: 44, fats: 22, price_sar: 25, estimated: false },
  { id: 'charleys-philly-regular', chain: 'Charleys Philly Steaks', name: 'Philly Cheesesteak (Regular)', category: 'main', calories: 700, protein: 41, carbs: 60, fats: 33, price_sar: 33, estimated: false },
  { id: 'charleys-chicken-philly', chain: 'Charleys Philly Steaks', name: 'Chicken Philly (Small)', category: 'main', calories: 450, protein: 29, carbs: 44, fats: 18, price_sar: 24, estimated: false },
  { id: 'charleys-buffalo-chicken', chain: 'Charleys Philly Steaks', name: 'Chicken Buffalo Philly (Small)', category: 'main', calories: 480, protein: 29, carbs: 46, fats: 20, price_sar: 25, estimated: false },
  { id: 'charleys-gourmet-fries', chain: 'Charleys Philly Steaks', name: 'Gourmet Fries', category: 'side', calories: 420, protein: 5, carbs: 54, fats: 20, price_sar: 13, estimated: false },
  { id: 'charleys-loaded-fries', chain: 'Charleys Philly Steaks', name: 'Loaded Fries', category: 'side', calories: 560, protein: 13, carbs: 58, fats: 30, price_sar: 19, estimated: false },

  // ── Dank Sandwich ──────────────────────────────────────────────
  { id: 'dank-philly-steak', chain: 'Dank Sandwich', name: 'Philly Steak Sandwich', category: 'main', calories: 560, protein: 30, carbs: 50, fats: 26, price_sar: 29, estimated: true },
  { id: 'dank-smoky-chicken', chain: 'Dank Sandwich', name: 'Smoky Chicken Sandwich', category: 'main', calories: 520, protein: 30, carbs: 48, fats: 22, price_sar: 27, estimated: true },
  { id: 'dank-club', chain: 'Dank Sandwich', name: 'Dank Club', category: 'main', calories: 590, protein: 32, carbs: 52, fats: 28, price_sar: 31, estimated: true },
  { id: 'dank-halloumi', chain: 'Dank Sandwich', name: 'Halloumi Sandwich', category: 'main', calories: 470, protein: 18, carbs: 48, fats: 23, price_sar: 24, estimated: true },
  { id: 'dank-paprika-fries', chain: 'Dank Sandwich', name: 'Paprika Fries', category: 'side', calories: 360, protein: 5, carbs: 46, fats: 17, price_sar: 12, estimated: true },

  // ── Shwkat ─────────────────────────────────────────────────────
  { id: 'shwkat-philly-sub', chain: 'Shwkat', name: 'Philly Cheesesteak Sub', category: 'main', calories: 620, protein: 34, carbs: 52, fats: 30, price_sar: 28, estimated: true },
  { id: 'shwkat-beef-sub', chain: 'Shwkat', name: 'Classic Beef Sub', category: 'main', calories: 580, protein: 32, carbs: 50, fats: 27, price_sar: 26, estimated: true },
  { id: 'shwkat-chicken-sub', chain: 'Shwkat', name: 'Chicken Sub', category: 'main', calories: 540, protein: 31, carbs: 50, fats: 22, price_sar: 24, estimated: true },
  { id: 'shwkat-mini-duo', chain: 'Shwkat', name: 'Mini Subs (2 pc)', category: 'main', calories: 520, protein: 26, carbs: 48, fats: 24, price_sar: 23, estimated: true },
  { id: 'shwkat-fries', chain: 'Shwkat', name: 'French Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 15, price_sar: 10, estimated: true },

  // ── The Sandwich Company ───────────────────────────────────────
  { id: 'sandwichco-grilled-chicken', chain: 'The Sandwich Company', name: 'Grilled Chicken Sandwich', category: 'main', calories: 480, protein: 28, carbs: 46, fats: 19, price_sar: 26, estimated: true },
  { id: 'sandwichco-roast-beef', chain: 'The Sandwich Company', name: 'Roast Beef Sandwich', category: 'main', calories: 520, protein: 30, carbs: 46, fats: 23, price_sar: 29, estimated: true },
  { id: 'sandwichco-halloumi-avocado', chain: 'The Sandwich Company', name: 'Halloumi Avocado Sandwich', category: 'main', calories: 510, protein: 18, carbs: 50, fats: 26, price_sar: 25, estimated: true },
  { id: 'sandwichco-turkey-melt', chain: 'The Sandwich Company', name: 'Turkey Melt', category: 'main', calories: 470, protein: 26, carbs: 44, fats: 20, price_sar: 27, estimated: true },
  { id: 'sandwichco-house-fries', chain: 'The Sandwich Company', name: 'House Fries', category: 'side', calories: 340, protein: 4, carbs: 44, fats: 16, price_sar: 12, estimated: true },

  // ── MAQSAF ─────────────────────────────────────────────────────
  { id: 'maqsaf-chicken', chain: 'MAQSAF', name: 'Maqsaf Chicken Sandwich', category: 'main', calories: 470, protein: 26, carbs: 46, fats: 19, price_sar: 22, estimated: true },
  { id: 'maqsaf-beef', chain: 'MAQSAF', name: 'Maqsaf Beef Sandwich', category: 'main', calories: 510, protein: 28, carbs: 46, fats: 23, price_sar: 25, estimated: true },
  { id: 'maqsaf-egg', chain: 'MAQSAF', name: 'Egg Sandwich', category: 'main', calories: 380, protein: 17, carbs: 40, fats: 17, price_sar: 16, estimated: true },
  { id: 'maqsaf-fries', chain: 'MAQSAF', name: 'French Fries', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 10, estimated: true },
  { id: 'maqsaf-cookie', chain: 'MAQSAF', name: 'Butter Cookie', category: 'dessert', calories: 260, protein: 4, carbs: 34, fats: 12, price_sar: 9, estimated: true },

];
