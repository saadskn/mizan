// Sandwich & sub chains operating in Riyadh.
// Tier 1: Subway, Kudu. Tier 2: Charleys Philly Steaks.
// Tier 3 (estimates): Shwkat, MAQSAF, Lolivo.

export default [
  // ── Subway ─────────────────────────────────────────────────────
  // Re-audited 2026-07 vs HS Malqa /16399. HS lists no usable calorie labels
  // (lone "997" croissant label is junk), so classics keep Subway's published
  // per-6-inch nutrition (estimated:false, 12 Inch = 2×); KSA-only builds
  // (Tikka, Peri Peri, Fajita, Halloumi, Series subs, melts, croissants,
  // snacks) are composition estimates (estimated:true). Old prices were far
  // off (6-inch classics actually 22–30 SR, not 11–19) — all repriced.
  // Removed: Rotisserie Chicken Salad (only "Make It Your Own" salad exists —
  // variable build). Skipped: all Combos (drink+crispers), Red Bull/World Cup
  // offers, Gathering platters/boxes, Make-It-Your-Own salad/wrap (variable),
  // Kids Meal (juice+gift), drinks.
  { id: 'subway-steak-cheese-6', chain: 'Subway', name: 'Steak & Cheese (6 Inch)', category: 'main', calories: 380, protein: 26, carbs: 44, fats: 10, price_sar: 28, family: 'sub-steak', units: 1, estimated: false },
  { id: 'subway-steak-cheese-12', chain: 'Subway', name: 'Steak & Cheese (12 Inch)', category: 'main', calories: 760, protein: 52, carbs: 88, fats: 20, price_sar: 38, family: 'sub-steak', units: 2, estimated: false },
  { id: 'subway-italian-bmt-6', chain: 'Subway', name: 'Italian B.M.T (6 Inch)', category: 'main', calories: 410, protein: 19, carbs: 45, fats: 17, price_sar: 26, family: 'sub-bmt', units: 1, estimated: false },
  { id: 'subway-italian-bmt-12', chain: 'Subway', name: 'Italian B.M.T (12 Inch)', category: 'main', calories: 820, protein: 38, carbs: 90, fats: 34, price_sar: 36, family: 'sub-bmt', units: 2, estimated: false },
  { id: 'subway-oven-breaded-chicken-6', chain: 'Subway', name: 'Oven Breaded Chicken (6 Inch)', category: 'main', calories: 470, protein: 22, carbs: 52, fats: 20, price_sar: 28, family: 'sub-breaded', units: 1, estimated: true },
  { id: 'subway-oven-breaded-chicken-12', chain: 'Subway', name: 'Oven Breaded Chicken (12 Inch)', category: 'main', calories: 940, protein: 44, carbs: 104, fats: 40, price_sar: 38, family: 'sub-breaded', units: 2, estimated: true },
  { id: 'subway-rotisserie-chicken-6', chain: 'Subway', name: 'Rotisserie Chicken (6 Inch)', category: 'main', calories: 350, protein: 29, carbs: 43, fats: 7, price_sar: 28, family: 'sub-rotisserie', units: 1, estimated: false },
  { id: 'subway-rotisserie-chicken-12', chain: 'Subway', name: 'Rotisserie Chicken (12 Inch)', category: 'main', calories: 700, protein: 58, carbs: 86, fats: 14, price_sar: 38, family: 'sub-rotisserie', units: 2, estimated: false },
  { id: 'subway-turkey-6', chain: 'Subway', name: 'Turkey Breast (6 Inch)', category: 'main', calories: 280, protein: 18, carbs: 44, fats: 4, price_sar: 26, family: 'sub-turkey', units: 1, estimated: false },
  { id: 'subway-turkey-12', chain: 'Subway', name: 'Turkey Breast (12 Inch)', category: 'main', calories: 560, protein: 36, carbs: 88, fats: 8, price_sar: 36, family: 'sub-turkey', units: 2, estimated: false },
  { id: 'subway-chicken-fajita-6', chain: 'Subway', name: 'Chicken Fajita (6 Inch)', category: 'main', calories: 340, protein: 24, carbs: 45, fats: 8, price_sar: 26, family: 'sub-fajita', units: 1, estimated: true },
  { id: 'subway-chicken-fajita-12', chain: 'Subway', name: 'Chicken Fajita (12 Inch)', category: 'main', calories: 680, protein: 48, carbs: 90, fats: 16, price_sar: 36, family: 'sub-fajita', units: 2, estimated: true },
  { id: 'subway-halloumi-6', chain: 'Subway', name: 'Premium Halloumi Cheese (6 Inch)', category: 'main', calories: 420, protein: 18, carbs: 46, fats: 19, price_sar: 26, family: 'sub-halloumi', units: 1, estimated: true },
  { id: 'subway-halloumi-12', chain: 'Subway', name: 'Premium Halloumi Cheese (12 Inch)', category: 'main', calories: 840, protein: 36, carbs: 92, fats: 38, price_sar: 36, family: 'sub-halloumi', units: 2, estimated: true },
  { id: 'subway-chicken-teriyaki-6', chain: 'Subway', name: 'Chicken Teriyaki (6 Inch)', category: 'main', calories: 370, protein: 26, carbs: 46, fats: 9, price_sar: 26, family: 'sub-teriyaki', units: 1, estimated: false },
  { id: 'subway-chicken-teriyaki-12', chain: 'Subway', name: 'Chicken Teriyaki (12 Inch)', category: 'main', calories: 740, protein: 52, carbs: 92, fats: 18, price_sar: 36, family: 'sub-teriyaki', units: 2, estimated: false },
  { id: 'subway-veggie-delite-6', chain: 'Subway', name: 'Veggie Delight (6 Inch)', category: 'main', calories: 200, protein: 8, carbs: 40, fats: 2, price_sar: 22, family: 'sub-veggie', units: 1, estimated: false },
  { id: 'subway-veggie-delite-12', chain: 'Subway', name: 'Veggie Delight (12 Inch)', category: 'main', calories: 400, protein: 16, carbs: 80, fats: 4, price_sar: 32, family: 'sub-veggie', units: 2, estimated: false },
  { id: 'subway-tuna-6', chain: 'Subway', name: 'Tuna (6 Inch)', category: 'main', calories: 480, protein: 20, carbs: 42, fats: 25, price_sar: 26, family: 'sub-tuna', units: 1, estimated: false },
  { id: 'subway-tuna-12', chain: 'Subway', name: 'Tuna (12 Inch)', category: 'main', calories: 960, protein: 40, carbs: 84, fats: 50, price_sar: 36, family: 'sub-tuna', units: 2, estimated: false },
  { id: 'subway-chicken-tikka-6', chain: 'Subway', name: 'Chicken Tikka (6 Inch)', category: 'main', calories: 330, protein: 24, carbs: 44, fats: 7, price_sar: 26, family: 'sub-tikka', units: 1, estimated: true },
  { id: 'subway-chicken-tikka-12', chain: 'Subway', name: 'Chicken Tikka (12 Inch)', category: 'main', calories: 660, protein: 48, carbs: 88, fats: 14, price_sar: 36, family: 'sub-tikka', units: 2, estimated: true },
  { id: 'subway-peri-peri-6', chain: 'Subway', name: 'Peri Peri Chicken (6 Inch)', category: 'main', calories: 340, protein: 25, carbs: 45, fats: 8, price_sar: 26, family: 'sub-peri', units: 1, estimated: true },
  { id: 'subway-peri-peri-12', chain: 'Subway', name: 'Peri Peri Chicken (12 Inch)', category: 'main', calories: 680, protein: 50, carbs: 90, fats: 16, price_sar: 36, family: 'sub-peri', units: 2, estimated: true },
  { id: 'subway-roasted-chicken-6', chain: 'Subway', name: 'Oven Roasted Chicken (6 Inch)', category: 'main', calories: 320, protein: 24, carbs: 44, fats: 6, price_sar: 26, family: 'sub-roasted', units: 1, estimated: false },
  { id: 'subway-roasted-chicken-12', chain: 'Subway', name: 'Oven Roasted Chicken (12 Inch)', category: 'main', calories: 640, protein: 48, carbs: 88, fats: 12, price_sar: 36, family: 'sub-roasted', units: 2, estimated: false },
  { id: 'subway-meatball-6', chain: 'Subway', name: 'Meatball Marinara (6 Inch)', category: 'main', calories: 460, protein: 20, carbs: 56, fats: 16, price_sar: 23, family: 'sub-meatball', units: 1, estimated: false },
  { id: 'subway-meatball-12', chain: 'Subway', name: 'Meatball Marinara (12 Inch)', category: 'main', calories: 920, protein: 40, carbs: 112, fats: 32, price_sar: 33, family: 'sub-meatball', units: 2, estimated: false },
  { id: 'subway-great-caesar-6', chain: 'Subway', name: 'The Great Caesar (6 Inch)', category: 'main', calories: 450, protein: 26, carbs: 44, fats: 19, price_sar: 26, family: 'sub-caesar', units: 1, estimated: true },
  { id: 'subway-great-caesar-12', chain: 'Subway', name: 'The Great Caesar (12 Inch)', category: 'main', calories: 900, protein: 52, carbs: 88, fats: 38, price_sar: 40, family: 'sub-caesar', units: 2, estimated: true },
  { id: 'subway-spicy-mexican-6', chain: 'Subway', name: 'Spicy Mexican (6 Inch)', category: 'main', calories: 520, protein: 24, carbs: 50, fats: 25, price_sar: 26, family: 'sub-mexican', units: 1, estimated: true },
  { id: 'subway-spicy-mexican-12', chain: 'Subway', name: 'Spicy Mexican (12 Inch)', category: 'main', calories: 1040, protein: 48, carbs: 100, fats: 50, price_sar: 40, family: 'sub-mexican', units: 2, estimated: true },
  { id: 'subway-tuna-catch-6', chain: 'Subway', name: 'Tuna Catch (6 Inch)', category: 'main', calories: 500, protein: 21, carbs: 46, fats: 26, price_sar: 28, family: 'sub-tuna-catch', units: 1, estimated: true },
  { id: 'subway-tuna-catch-12', chain: 'Subway', name: 'Tuna Catch (12 Inch)', category: 'main', calories: 1000, protein: 42, carbs: 92, fats: 52, price_sar: 42, family: 'sub-tuna-catch', units: 2, estimated: true },
  { id: 'subway-sunshine-halloumi-6', chain: 'Subway', name: 'Sunshine Halloumi (6 Inch)', category: 'main', calories: 490, protein: 19, carbs: 46, fats: 26, price_sar: 28, family: 'sub-sunshine', units: 1, estimated: true },
  { id: 'subway-sunshine-halloumi-12', chain: 'Subway', name: 'Sunshine Halloumi (12 Inch)', category: 'main', calories: 980, protein: 38, carbs: 92, fats: 52, price_sar: 42, family: 'sub-sunshine', units: 2, estimated: true },
  { id: 'subway-big-supreme-6', chain: 'Subway', name: 'The Big Supreme (6 Inch)', category: 'main', calories: 540, protein: 28, carbs: 48, fats: 27, price_sar: 30, family: 'sub-supreme', units: 1, estimated: true },
  { id: 'subway-big-supreme-12', chain: 'Subway', name: 'The Big Supreme (12 Inch)', category: 'main', calories: 1080, protein: 56, carbs: 96, fats: 54, price_sar: 46, family: 'sub-supreme', units: 2, estimated: true },
  { id: 'subway-loaded-bmt-6', chain: 'Subway', name: 'Loaded B.M.T (6 Inch)', category: 'main', calories: 560, protein: 26, carbs: 46, fats: 30, price_sar: 30, family: 'sub-loaded-bmt', units: 1, estimated: true },
  { id: 'subway-loaded-bmt-12', chain: 'Subway', name: 'Loaded B.M.T (12 Inch)', category: 'main', calories: 1120, protein: 52, carbs: 92, fats: 60, price_sar: 46, family: 'sub-loaded-bmt', units: 2, estimated: true },
  { id: 'subway-bella-mozzarella-6', chain: 'Subway', name: 'Bella Mozzarella Melt (6 Inch)', category: 'main', calories: 420, protein: 18, carbs: 44, fats: 19, price_sar: 22, family: 'sub-bella', units: 1, estimated: true },
  { id: 'subway-bella-mozzarella-12', chain: 'Subway', name: 'Bella Mozzarella Melt (12 Inch)', category: 'main', calories: 840, protein: 36, carbs: 88, fats: 38, price_sar: 32, family: 'sub-bella', units: 2, estimated: true },
  { id: 'subway-chicken-mushroom-melt-6', chain: 'Subway', name: 'Chicken & Mushroom Supreme Melt (6 Inch)', category: 'main', calories: 470, protein: 28, carbs: 45, fats: 20, price_sar: 29, family: 'sub-mushroom-melt', units: 1, estimated: true },
  { id: 'subway-chicken-mushroom-melt-12', chain: 'Subway', name: 'Chicken & Mushroom Supreme Melt (12 Inch)', category: 'main', calories: 940, protein: 56, carbs: 90, fats: 40, price_sar: 41, family: 'sub-mushroom-melt', units: 2, estimated: true },
  { id: 'subway-dynamite-chicken-6', chain: 'Subway', name: 'Dynamite Chicken Melt (6 Inch)', category: 'main', calories: 480, protein: 27, carbs: 46, fats: 21, price_sar: 29, family: 'sub-dynamite', units: 1, estimated: true },
  { id: 'subway-dynamite-chicken-12', chain: 'Subway', name: 'Dynamite Chicken Melt (12 Inch)', category: 'main', calories: 960, protein: 54, carbs: 92, fats: 42, price_sar: 41, family: 'sub-dynamite', units: 2, estimated: true },
  { id: 'subway-big-cheese-steak-6', chain: 'Subway', name: 'The Big Cheese Steak Melt (6 Inch)', category: 'main', calories: 490, protein: 28, carbs: 46, fats: 22, price_sar: 29, family: 'sub-cheese-steak-melt', units: 1, estimated: true },
  { id: 'subway-big-cheese-steak-12', chain: 'Subway', name: 'The Big Cheese Steak Melt (12 Inch)', category: 'main', calories: 980, protein: 56, carbs: 92, fats: 44, price_sar: 41, family: 'sub-cheese-steak-melt', units: 2, estimated: true },
  { id: 'subway-rotisserie-wrap', chain: 'Subway', name: 'Rotisserie Style Chicken Wrap', category: 'main', calories: 440, protein: 30, carbs: 48, fats: 14, price_sar: 35, estimated: true },
  { id: 'subway-crumbed-chicken', chain: 'Subway', name: 'Crumbed Chicken Sandwich', category: 'main', calories: 380, protein: 18, carbs: 40, fats: 16, price_sar: 18, estimated: true },
  { id: 'subway-spicy-italian', chain: 'Subway', name: 'Spicy Italian Sub', category: 'main', calories: 480, protein: 18, carbs: 44, fats: 25, price_sar: 18, estimated: false },
  { id: 'subway-turkey-croissant', chain: 'Subway', name: 'Turkey And Cheese Croissant', category: 'main', calories: 430, protein: 18, carbs: 31, fats: 26, price_sar: 16, estimated: true },
  { id: 'subway-halloumi-croissant', chain: 'Subway', name: 'Halloumi Croissant', category: 'main', calories: 450, protein: 16, carbs: 31, fats: 29, price_sar: 16, estimated: true },
  { id: 'subway-egg-cheese-croissant', chain: 'Subway', name: 'Egg And Cheese Croissant', category: 'main', calories: 400, protein: 14, carbs: 30, fats: 25, price_sar: 14, estimated: true },
  { id: 'subway-crispers', chain: 'Subway', name: 'Crispers', category: 'side', calories: 250, protein: 3, carbs: 30, fats: 13, price_sar: 10, estimated: true },
  { id: 'subway-chicken-bites', chain: 'Subway', name: 'Chicken Bites', category: 'side', calories: 280, protein: 18, carbs: 18, fats: 14, price_sar: 15, estimated: true },
  { id: 'subway-pepperoni-toastie', chain: 'Subway', name: 'Pepperoni & Cheese Toastie', category: 'side', calories: 300, protein: 12, carbs: 28, fats: 15, price_sar: 6, estimated: true },
  { id: 'subway-chicken-toastie', chain: 'Subway', name: 'Chicken & Cheese Toastie', category: 'side', calories: 290, protein: 15, carbs: 28, fats: 12, price_sar: 8, estimated: true },
  { id: 'subway-veggie-toastie', chain: 'Subway', name: 'Veggies & Cheese Toastie', category: 'side', calories: 250, protein: 9, carbs: 28, fats: 11, price_sar: 6, estimated: true },
  { id: 'subway-cookie', chain: 'Subway', name: 'Cookie (One)', category: 'dessert', calories: 220, protein: 2, carbs: 30, fats: 10, price_sar: 7, family: 'sub-cookie', units: 1, estimated: false },
  { id: 'subway-cookies-3', chain: 'Subway', name: 'Cookies (Three)', category: 'dessert', calories: 660, protein: 6, carbs: 90, fats: 30, price_sar: 16, family: 'sub-cookie', units: 3, estimated: false },

  // ── Kudu ───────────────────────────────────────────────────────
  // Re-audited 2026-07 vs real HS menu (Malqa, /125995). Labels validated by
  // the combo delta: every Combo = Sandwich + exactly 391 kcal (fries+drink),
  // so sandwich labels (incl. Lafino Philly 1341) are systematic, not junk.
  // Removed fabricated rows (fillet/BBQ/burger/tawook/corn cup/cookie — not
  // sold), Grilled Chicken Diet Meal (drink included) and Strips Bucket
  // ("perfect for sharing" = gathering). Skipped: all Combos/Meals + kids
  // meals (drink), breakfast platters (coffee + juice included), World Cup +
  // Goooal bundles (LTO), gathering boxes/buckets, sauces, drinks. Multigrain
  // club (909), brown-bread omelet (756) and spicy bites (350) mirror their
  // white/mild twins — listed once. Unlabeled items composition-estimated;
  // Kudulicious derived from its combo label (814 − 391 = 423).
  { id: 'kudu-chicken-sandwich', chain: 'Kudu', name: 'Kudu Chicken Sandwich', category: 'main', calories: 609, protein: 32, carbs: 55, fats: 28, price_sar: 28, estimated: true },
  { id: 'kudu-spicy-chicken-sandwich', chain: 'Kudu', name: 'Spicy Chicken Sandwich', category: 'main', calories: 690, protein: 34, carbs: 58, fats: 35, price_sar: 29, estimated: true },
  { id: 'kudu-philly-steak', chain: 'Kudu', name: 'Philly Steak Sandwich', category: 'main', calories: 763, protein: 38, carbs: 56, fats: 42, price_sar: 29, estimated: true },
  { id: 'kudu-beef-sandwich', chain: 'Kudu', name: 'Kudu Beef Sandwich', category: 'main', calories: 715, protein: 34, carbs: 56, fats: 38, price_sar: 29, estimated: true },
  { id: 'kudu-quattro-chicken', chain: 'Kudu', name: 'Quattro Chicken Sandwich', category: 'main', calories: 697, protein: 30, carbs: 58, fats: 38, price_sar: 28, estimated: true },
  { id: 'kudu-quattro-extra-spicy', chain: 'Kudu', name: 'Quattro Extra Spicy Sandwich', category: 'main', calories: 710, protein: 28, carbs: 59, fats: 39, price_sar: 29, estimated: true },
  { id: 'kudu-lafino-chicken', chain: 'Kudu', name: 'Lafino Chicken Sandwich', category: 'main', calories: 575, protein: 30, carbs: 48, fats: 28, price_sar: 28, estimated: true },
  { id: 'kudu-lafino-philly', chain: 'Kudu', name: 'Lafino Philly Steak Sandwich', category: 'main', calories: 1341, protein: 52, carbs: 85, fats: 88, price_sar: 29, estimated: true },
  { id: 'kudu-muthalatha', chain: 'Kudu', name: 'Muthalatha Sandwich', category: 'main', calories: 798, protein: 36, carbs: 60, fats: 44, price_sar: 29, estimated: true },
  { id: 'kudu-muraba-sandwich', chain: 'Kudu', name: "Muraba'a Sandwich (Philly Beef Wrap)", category: 'main', calories: 700, protein: 32, carbs: 55, fats: 38, price_sar: 29, estimated: true },
  { id: 'kudu-chicken-wrap-plus', chain: 'Kudu', name: 'Chicken Wrap Plus', category: 'main', calories: 635, protein: 26, carbs: 58, fats: 32, price_sar: 26, estimated: true },
  { id: 'kudu-chicken-burger', cuisine: 'burgers', chain: 'Kudu', name: 'Chicken Burger Sandwich', category: 'main', calories: 480, protein: 22, carbs: 45, fats: 24, price_sar: 23, estimated: true },
  { id: 'kudu-club', chain: 'Kudu', name: 'Club Sandwich (White Toast)', category: 'main', calories: 885, protein: 42, carbs: 62, fats: 52, price_sar: 29, estimated: true },
  { id: 'kudu-kudulicious', chain: 'Kudu', name: 'Kudulicious Chicken Sandwich', category: 'main', calories: 423, protein: 24, carbs: 42, fats: 17, price_sar: 15, estimated: true },
  { id: 'kudu-veggie-sandwich', chain: 'Kudu', name: 'Veggie Sandwich', category: 'main', calories: 430, protein: 10, carbs: 48, fats: 21, price_sar: 15, estimated: true },
  { id: 'kudu-tortilla-sandwich', chain: 'Kudu', name: 'Tortilla Kudu Sandwich', category: 'main', calories: 460, protein: 20, carbs: 45, fats: 22, price_sar: 17, estimated: true },
  { id: 'kudu-junior-burger', cuisine: 'burgers', chain: 'Kudu', name: 'Junior Burger', category: 'main', calories: 295, protein: 12, carbs: 32, fats: 13, price_sar: 6, estimated: true },
  { id: 'kudu-egg-wrap', chain: 'Kudu', name: 'Egg Wrap (Breakfast)', category: 'main', calories: 340, protein: 13, carbs: 30, fats: 18, price_sar: 8, estimated: true },
  { id: 'kudu-egg-chicken-wrap', chain: 'Kudu', name: 'Egg & Chicken Wrap (Breakfast)', category: 'main', calories: 445, protein: 22, carbs: 38, fats: 22, price_sar: 13, estimated: true },
  { id: 'kudu-cheese-omelet-sandwich', chain: 'Kudu', name: 'Cheese Omelet Sandwich', category: 'main', calories: 756, protein: 30, carbs: 56, fats: 46, price_sar: 18, estimated: true },
  { id: 'kudu-egg-hotdog-wrap', chain: 'Kudu', name: 'Egg & Hotdog Wrap', category: 'main', calories: 660, protein: 24, carbs: 48, fats: 40, price_sar: 14, estimated: true },
  { id: 'kudu-pancake', chain: 'Kudu', name: 'Pancakes with Maple Syrup (3 pc)', category: 'main', calories: 646, protein: 10, carbs: 95, fats: 24, price_sar: 18, estimated: true },
  { id: 'kudu-waffles-maple', chain: 'Kudu', name: 'Waffle with Maple Syrup', category: 'main', calories: 269, protein: 5, carbs: 38, fats: 11, price_sar: 15, estimated: true },
  { id: 'kudu-caesar-salad', chain: 'Kudu', name: 'Chicken Caesar Salad', category: 'main', calories: 571, protein: 36, carbs: 20, fats: 39, price_sar: 27, estimated: true },
  { id: 'kudu-chicken-salad', chain: 'Kudu', name: 'Kudu Chicken Salad', category: 'main', calories: 178, protein: 22, carbs: 10, fats: 6, price_sar: 26, estimated: true },
  { id: 'kudu-salad', chain: 'Kudu', name: 'Kudu Salad', category: 'side', calories: 50, protein: 2, carbs: 8, fats: 1.5, price_sar: 20, estimated: true },
  { id: 'kudu-strips-duo', chain: 'Kudu', name: 'Chicken Strips Duo (2 pc)', category: 'side', calories: 330, protein: 22, carbs: 22, fats: 16, price_sar: 10, estimated: true },
  { id: 'kudu-nachos-platter', chain: 'Kudu', name: 'Kudu Nachos Platter', category: 'side', calories: 600, protein: 20, carbs: 50, fats: 35, price_sar: 17, estimated: true, family: 'kudu-nachos-platter', units: 1 },
  { id: 'kudu-nachos-platter-large', chain: 'Kudu', name: 'Kudu Nachos Platter (Large)', category: 'side', calories: 900, protein: 30, carbs: 75, fats: 52, price_sar: 26, estimated: true, family: 'kudu-nachos-platter', units: 1.5 },
  { id: 'kudu-creamy-cheese-bites', chain: 'Kudu', name: 'Creamy Cheese Bites', category: 'side', calories: 400, protein: 8, carbs: 40, fats: 23, price_sar: 13, estimated: true },
  { id: 'kudu-cheese-nachos-3', chain: 'Kudu', name: 'Cheese Nachos (3 pc)', category: 'side', calories: 283, protein: 8, carbs: 24, fats: 17, price_sar: 13, estimated: true },
  { id: 'kudu-chicken-bites-6', chain: 'Kudu', name: 'Kudu Chicken Bites (6 pc)', category: 'side', calories: 350, protein: 18, carbs: 28, fats: 17, price_sar: 14, estimated: true },
  { id: 'kudu-nuggets-6', chain: 'Kudu', name: 'Chicken Nuggets (6 pc)', category: 'side', calories: 294, protein: 15, carbs: 20, fats: 16, price_sar: 14, estimated: true },
  { id: 'kudu-potato-crisps', chain: 'Kudu', name: 'Potato Crisps (6 pc)', category: 'side', calories: 249, protein: 3, carbs: 30, fats: 13, price_sar: 11, estimated: true },
  { id: 'kudu-cheese-fries', chain: 'Kudu', name: 'Cheese Fries', category: 'side', calories: 350, protein: 6, carbs: 40, fats: 18, price_sar: 14, estimated: true },
  { id: 'kudu-fries-small', chain: 'Kudu', name: 'French Fries (Small)', category: 'side', calories: 253, protein: 3, carbs: 33, fats: 12, price_sar: 8, estimated: true, family: 'kudu-fries', units: 1 },
  { id: 'kudu-fries-medium', chain: 'Kudu', name: 'French Fries (Medium)', category: 'side', calories: 355, protein: 4, carbs: 46, fats: 17, price_sar: 9, estimated: true, family: 'kudu-fries', units: 1.4 },
  { id: 'kudu-hash-brown', chain: 'Kudu', name: 'Hash Brown', category: 'side', calories: 107, protein: 1, carbs: 11, fats: 6, price_sar: 4, estimated: true },
  { id: 'kudu-san-sebastian', chain: 'Kudu', name: 'San Sebastian Cheesecake', category: 'dessert', calories: 299, protein: 6, carbs: 22, fats: 21, price_sar: 16, estimated: true },
  { id: 'kudu-brownies-cheesecake', chain: 'Kudu', name: 'Brownies Cheesecake', category: 'dessert', calories: 306, protein: 5, carbs: 28, fats: 19, price_sar: 18, estimated: true },

  // ── Charleys Philly Steaks ─────────────────────────────────────
  // Rebuilt from HungerStation Malqa labels (2026-07); all sandwich
  // sizes scale monotonically (credible), macros back-computed. Skipped:
  // all combos + Burger Meal (include drink), lemonades/soft drinks
  // (beverage ban). Veggie Delight uses the Deli-section labels (the
  // chicken-section copy of the same name is a listing duplicate).
  { id: 'charleys-philly-s', chain: 'Charleys Philly Steaks', name: 'Philly Cheesesteak (Small)', category: 'main', calories: 490, protein: 28, carbs: 42, fats: 24, price_sar: 25, family: 'charleys-philly', units: 2, estimated: true },
  { id: 'charleys-philly-r', chain: 'Charleys Philly Steaks', name: 'Philly Cheesesteak (Regular)', category: 'main', calories: 780, protein: 45, carbs: 68, fats: 36, price_sar: 33, family: 'charleys-philly', units: 3, estimated: true },
  { id: 'charleys-philly-l', chain: 'Charleys Philly Steaks', name: 'Philly Cheesesteak (Large)', category: 'main', calories: 1100, protein: 63, carbs: 95, fats: 51, price_sar: 42, family: 'charleys-philly', units: 4, estimated: true },
  { id: 'charleys-chicken-california-s', chain: 'Charleys Philly Steaks', name: 'Chicken California (Small)', category: 'main', calories: 530, protein: 30, carbs: 44, fats: 27, price_sar: 25, family: 'charleys-chicken-california', units: 2, estimated: true },
  { id: 'charleys-chicken-california-r', chain: 'Charleys Philly Steaks', name: 'Chicken California (Regular)', category: 'main', calories: 800, protein: 46, carbs: 68, fats: 38, price_sar: 33, family: 'charleys-chicken-california', units: 3, estimated: true },
  { id: 'charleys-chicken-california-l', chain: 'Charleys Philly Steaks', name: 'Chicken California (Large)', category: 'main', calories: 1120, protein: 64, carbs: 96, fats: 53, price_sar: 42, family: 'charleys-chicken-california', units: 4, estimated: true },
  { id: 'charleys-chicken-philly-s', chain: 'Charleys Philly Steaks', name: 'Chicken Philly (Small)', category: 'main', calories: 480, protein: 29, carbs: 42, fats: 22, price_sar: 25, family: 'charleys-chicken-philly', units: 2, estimated: true },
  { id: 'charleys-chicken-philly-r', chain: 'Charleys Philly Steaks', name: 'Chicken Philly (Regular)', category: 'main', calories: 600, protein: 36, carbs: 52, fats: 27, price_sar: 33, family: 'charleys-chicken-philly', units: 3, estimated: true },
  { id: 'charleys-chicken-philly-l', chain: 'Charleys Philly Steaks', name: 'Chicken Philly (Large)', category: 'main', calories: 800, protein: 48, carbs: 70, fats: 36, price_sar: 42, family: 'charleys-chicken-philly', units: 4, estimated: true },
  { id: 'charleys-chicken-buffalo-s', chain: 'Charleys Philly Steaks', name: 'Chicken Buffalo (Small)', category: 'main', calories: 370, protein: 24, carbs: 34, fats: 15, price_sar: 25, family: 'charleys-chicken-buffalo', units: 2, estimated: true },
  { id: 'charleys-chicken-buffalo-r', chain: 'Charleys Philly Steaks', name: 'Chicken Buffalo (Regular)', category: 'main', calories: 730, protein: 44, carbs: 62, fats: 33, price_sar: 33, family: 'charleys-chicken-buffalo', units: 3, estimated: true },
  { id: 'charleys-chicken-buffalo-l', chain: 'Charleys Philly Steaks', name: 'Chicken Buffalo (Large)', category: 'main', calories: 1030, protein: 62, carbs: 88, fats: 48, price_sar: 42, family: 'charleys-chicken-buffalo', units: 4, estimated: true },
  { id: 'charleys-bacon-three-s', chain: 'Charleys Philly Steaks', name: 'Bacon Three Cheesesteak (Small)', category: 'main', calories: 460, protein: 26, carbs: 38, fats: 22, price_sar: 25, family: 'charleys-bacon-three', units: 2, estimated: true },
  { id: 'charleys-bacon-three-r', chain: 'Charleys Philly Steaks', name: 'Bacon Three Cheesesteak (Regular)', category: 'main', calories: 840, protein: 48, carbs: 70, fats: 40, price_sar: 33, family: 'charleys-bacon-three', units: 3, estimated: true },
  { id: 'charleys-bacon-three-l', chain: 'Charleys Philly Steaks', name: 'Bacon Three Cheesesteak (Large)', category: 'main', calories: 1200, protein: 68, carbs: 100, fats: 59, price_sar: 42, family: 'charleys-bacon-three', units: 4, estimated: true },
  { id: 'charleys-chicken-teriyaki-s', chain: 'Charleys Philly Steaks', name: 'Chicken Teriyaki (Small)', category: 'main', calories: 450, protein: 28, carbs: 44, fats: 17, price_sar: 25, family: 'charleys-chicken-teriyaki', units: 2, estimated: true },
  { id: 'charleys-chicken-teriyaki-r', chain: 'Charleys Philly Steaks', name: 'Chicken Teriyaki (Regular)', category: 'main', calories: 740, protein: 44, carbs: 70, fats: 32, price_sar: 33, family: 'charleys-chicken-teriyaki', units: 3, estimated: true },
  { id: 'charleys-chicken-teriyaki-l', chain: 'Charleys Philly Steaks', name: 'Chicken Teriyaki (Large)', category: 'main', calories: 1040, protein: 62, carbs: 98, fats: 44, price_sar: 42, family: 'charleys-chicken-teriyaki', units: 4, estimated: true },
  { id: 'charleys-ultimate-club-s', chain: 'Charleys Philly Steaks', name: 'The Ultimate Club (Small)', category: 'main', calories: 500, protein: 30, carbs: 42, fats: 24, price_sar: 25, family: 'charleys-ultimate-club', units: 2, estimated: true },
  { id: 'charleys-ultimate-club-r', chain: 'Charleys Philly Steaks', name: 'The Ultimate Club (Regular)', category: 'main', calories: 700, protein: 42, carbs: 58, fats: 33, price_sar: 33, family: 'charleys-ultimate-club', units: 3, estimated: true },
  { id: 'charleys-ultimate-club-l', chain: 'Charleys Philly Steaks', name: 'The Ultimate Club (Large)', category: 'main', calories: 1000, protein: 60, carbs: 84, fats: 47, price_sar: 42, family: 'charleys-ultimate-club', units: 4, estimated: true },
  { id: 'charleys-italian-deli-s', chain: 'Charleys Philly Steaks', name: 'Italian Deli Deluxe (Small)', category: 'main', calories: 500, protein: 29, carbs: 42, fats: 24, price_sar: 25, family: 'charleys-italian-deli', units: 2, estimated: true },
  { id: 'charleys-italian-deli-r', chain: 'Charleys Philly Steaks', name: 'Italian Deli Deluxe (Regular)', category: 'main', calories: 700, protein: 41, carbs: 58, fats: 33, price_sar: 33, family: 'charleys-italian-deli', units: 3, estimated: true },
  { id: 'charleys-italian-deli-l', chain: 'Charleys Philly Steaks', name: 'Italian Deli Deluxe (Large)', category: 'main', calories: 1000, protein: 59, carbs: 84, fats: 47, price_sar: 42, family: 'charleys-italian-deli', units: 4, estimated: true },
  { id: 'charleys-pepperoni-s', chain: 'Charleys Philly Steaks', name: 'Pepperoni Cheese Steak (Small)', category: 'main', calories: 580, protein: 32, carbs: 44, fats: 30, price_sar: 25, family: 'charleys-pepperoni', units: 2, estimated: true },
  { id: 'charleys-pepperoni-r', chain: 'Charleys Philly Steaks', name: 'Pepperoni Cheese Steak (Regular)', category: 'main', calories: 830, protein: 46, carbs: 64, fats: 43, price_sar: 33, family: 'charleys-pepperoni', units: 3, estimated: true },
  { id: 'charleys-pepperoni-l', chain: 'Charleys Philly Steaks', name: 'Pepperoni Cheese Steak (Large)', category: 'main', calories: 1250, protein: 70, carbs: 96, fats: 64, price_sar: 42, family: 'charleys-pepperoni', units: 4, estimated: true },
  { id: 'charleys-jalapeno-s', chain: 'Charleys Philly Steaks', name: 'Jalapeno Cheese Steak (Small)', category: 'main', calories: 520, protein: 30, carbs: 44, fats: 25, price_sar: 25, family: 'charleys-jalapeno', units: 2, estimated: true },
  { id: 'charleys-jalapeno-r', chain: 'Charleys Philly Steaks', name: 'Jalapeno Cheese Steak (Regular)', category: 'main', calories: 760, protein: 44, carbs: 64, fats: 36, price_sar: 33, family: 'charleys-jalapeno', units: 3, estimated: true },
  { id: 'charleys-jalapeno-l', chain: 'Charleys Philly Steaks', name: 'Jalapeno Cheese Steak (Large)', category: 'main', calories: 1080, protein: 62, carbs: 90, fats: 52, price_sar: 42, family: 'charleys-jalapeno', units: 4, estimated: true },
  { id: 'charleys-prime-bbq-s', chain: 'Charleys Philly Steaks', name: 'The Prime BBQ Steak (Small)', category: 'main', calories: 520, protein: 30, carbs: 44, fats: 25, price_sar: 25, family: 'charleys-prime-bbq', units: 2, estimated: true },
  { id: 'charleys-prime-bbq-r', chain: 'Charleys Philly Steaks', name: 'The Prime BBQ Steak (Regular)', category: 'main', calories: 760, protein: 44, carbs: 64, fats: 36, price_sar: 33, family: 'charleys-prime-bbq', units: 3, estimated: true },
  { id: 'charleys-prime-bbq-l', chain: 'Charleys Philly Steaks', name: 'The Prime BBQ Steak (Large)', category: 'main', calories: 1080, protein: 62, carbs: 90, fats: 52, price_sar: 42, family: 'charleys-prime-bbq', units: 4, estimated: true },
  { id: 'charleys-veggie-delight-s', chain: 'Charleys Philly Steaks', name: 'Veggie Delight (Small)', category: 'main', calories: 420, protein: 18, carbs: 40, fats: 20, price_sar: 25, family: 'charleys-veggie-delight', units: 2, estimated: true },
  { id: 'charleys-veggie-delight-r', chain: 'Charleys Philly Steaks', name: 'Veggie Delight (Regular)', category: 'main', calories: 500, protein: 22, carbs: 48, fats: 24, price_sar: 33, family: 'charleys-veggie-delight', units: 3, estimated: true },
  { id: 'charleys-veggie-delight-l', chain: 'Charleys Philly Steaks', name: 'Veggie Delight (Large)', category: 'main', calories: 680, protein: 30, carbs: 64, fats: 34, price_sar: 42, family: 'charleys-veggie-delight', units: 4, estimated: true },
  { id: 'charleys-original-fries', chain: 'Charleys Philly Steaks', name: 'Original Fries', category: 'side', calories: 400, protein: 5, carbs: 50, fats: 20, price_sar: 12, estimated: true },
  { id: 'charleys-cheese-fries', chain: 'Charleys Philly Steaks', name: 'Cheese Fries', category: 'side', calories: 550, protein: 12, carbs: 55, fats: 31, price_sar: 14, estimated: true },
  { id: 'charleys-cheese-bacon-fries', chain: 'Charleys Philly Steaks', name: 'Cheese and Beef Bacon Fries', category: 'side', calories: 690, protein: 20, carbs: 55, fats: 43, price_sar: 17, estimated: true },
  { id: 'charleys-ultimate-fries', chain: 'Charleys Philly Steaks', name: 'Ultimate Fries', category: 'side', calories: 790, protein: 22, carbs: 58, fats: 52, price_sar: 18, estimated: true },

  // ── Shwkat ─────────────────────────────────────────────────────
  // Rebuilt 2026-07 from HungerStation (Malqa) labels. Big-fries labels
  // repeat the small-fries value (195/190) — not credible, big sizes
  // estimated at ~1.4× small. Skipped: Gathering Boxes, sauces, drinks.
  { id: 'shwkat-chicken-sandwich', chain: 'Shwkat', name: 'Shwkat Chicken Sandwich', category: 'main', calories: 365, protein: 26, carbs: 38, fats: 12, price_sar: 27, estimated: true },
  { id: 'shwkat-spicy-chicken-sandwich', chain: 'Shwkat', name: 'Shwkat Spicy Chicken Sandwich', category: 'main', calories: 365, protein: 26, carbs: 38, fats: 12, price_sar: 27, estimated: true },
  { id: 'shwkat-beef-sandwich-mild', chain: 'Shwkat', name: 'Shwkat Beef Sandwich Mild', category: 'main', calories: 445, protein: 30, carbs: 40, fats: 18, price_sar: 27, estimated: true },
  { id: 'shwkat-beef-sandwich-spicy', chain: 'Shwkat', name: 'Shwkat Beef Sandwich Spicy', category: 'main', calories: 445, protein: 30, carbs: 40, fats: 18, price_sar: 27, estimated: true },
  { id: 'shwkat-fries-small', chain: 'Shwkat', name: 'Shwkat Fries (Small)', category: 'side', calories: 195, protein: 3, carbs: 27, fats: 8, price_sar: 11, estimated: true, family: 'shwkat-style-fries', units: 2 },
  { id: 'shwkat-fries-big', chain: 'Shwkat', name: 'Shwkat Fries (Big)', category: 'side', calories: 270, protein: 4, carbs: 38, fats: 11, price_sar: 13, estimated: true, family: 'shwkat-style-fries', units: 3 },
  { id: 'shwkat-plain-fries-small', chain: 'Shwkat', name: 'French Fries (Small)', category: 'side', calories: 190, protein: 3, carbs: 26, fats: 8, price_sar: 9, estimated: true, family: 'shwkat-plain-fries', units: 2 },
  { id: 'shwkat-plain-fries-big', chain: 'Shwkat', name: 'French Fries (Big)', category: 'side', calories: 260, protein: 4, carbs: 36, fats: 11, price_sar: 11, estimated: true, family: 'shwkat-plain-fries', units: 3 },

  // The Sandwich Company removed 2026-07: not on HungerStation (searched
  // Malqa, EN + AR spellings) — prices unverifiable under the audit mandate.

  // ── MAQSAF ─────────────────────────────────────────────────────
  // Rebuilt 2026-07 from HungerStation "Maqsaf" (Malqa). Only 3 credible
  // labels (Super Potato 307, Super Halawa 346, Maqsaf Fries 399) — rest are
  // composition estimates with HS prices (Club Sandwich Box "9 Calories" =
  // junk label). Skipped: boxes/gathering, sauce, drinks, hot beverages.
  { id: 'maqsaf-egg-sandwich', chain: 'MAQSAF', name: 'Egg Sandwich (Kaak)', category: 'main', calories: 335, protein: 16, carbs: 36, fats: 14, price_sar: 14, estimated: true },
  { id: 'maqsaf-egg-sausage-sandwich', chain: 'MAQSAF', name: 'Egg & Sausage Sandwich', category: 'main', calories: 430, protein: 20, carbs: 40, fats: 21, price_sar: 16, estimated: true },
  { id: 'maqsaf-halloumi-sandwich', chain: 'MAQSAF', name: 'Halloumi Sandwich (Kaak)', category: 'main', calories: 420, protein: 18, carbs: 42, fats: 20, price_sar: 16, estimated: true },
  { id: 'maqsaf-super-falafel', chain: 'MAQSAF', name: 'Super Falafel Sandwich', category: 'main', calories: 450, protein: 14, carbs: 58, fats: 18, price_sar: 12, estimated: true },
  { id: 'maqsaf-super-potato', chain: 'MAQSAF', name: 'Super Potato Sandwich', category: 'main', calories: 307, protein: 8, carbs: 44, fats: 11, price_sar: 12, estimated: true },
  { id: 'maqsaf-super-halawa', chain: 'MAQSAF', name: 'Super Halawa Sandwich', category: 'main', calories: 346, protein: 8, carbs: 49, fats: 13, price_sar: 15, estimated: true },
  { id: 'maqsaf-tuna-sandwich', chain: 'MAQSAF', name: 'Tuna Pesto Sandwich', category: 'main', calories: 395, protein: 22, carbs: 36, fats: 18, price_sar: 16, estimated: true },
  { id: 'maqsaf-makhloot', chain: 'MAQSAF', name: 'Makhloot Falafel Sandwich', category: 'main', calories: 470, protein: 14, carbs: 60, fats: 19, price_sar: 15, estimated: true },
  { id: 'maqsaf-shakshuka', chain: 'MAQSAF', name: 'Shakshuka Sandwich', category: 'main', calories: 380, protein: 16, carbs: 38, fats: 18, price_sar: 12, estimated: true },
  { id: 'maqsaf-chicken-burger', cuisine: 'burgers', chain: 'MAQSAF', name: 'Chicken Burger with Fries', category: 'main', calories: 700, protein: 32, carbs: 70, fats: 32, price_sar: 19, estimated: true },
  { id: 'maqsaf-beef-burger', cuisine: 'burgers', chain: 'MAQSAF', name: 'Beef Burger with Fries', category: 'main', calories: 750, protein: 34, carbs: 72, fats: 36, price_sar: 19, estimated: true },
  { id: 'maqsaf-super-cheese-manakish', chain: 'MAQSAF', name: 'Super Cheese Manakeesh', category: 'main', calories: 620, protein: 26, carbs: 60, fats: 30, price_sar: 19, estimated: true },
  { id: 'maqsaf-cheese-sausage-manakish', chain: 'MAQSAF', name: 'Cheese Manakish Cups & Sausages', category: 'main', calories: 520, protein: 22, carbs: 50, fats: 26, price_sar: 16, estimated: true },
  { id: 'maqsaf-cheese-jam-manakish', chain: 'MAQSAF', name: 'Cheese & Jam Manakish', category: 'main', calories: 560, protein: 16, carbs: 74, fats: 22, price_sar: 16, estimated: true },
  { id: 'maqsaf-falafel-manakish', chain: 'MAQSAF', name: 'Super Falafel Manakish', category: 'main', calories: 535, protein: 16, carbs: 70, fats: 21, price_sar: 16, estimated: true },
  { id: 'maqsaf-labneh-honey-manakish', chain: 'MAQSAF', name: 'Labneh with Honey Manakish', category: 'main', calories: 515, protein: 14, carbs: 72, fats: 19, price_sar: 18, estimated: true },
  { id: 'maqsaf-labneh-thyme-manakish', chain: 'MAQSAF', name: 'Labneh & Thyme Manakish', category: 'main', calories: 495, protein: 14, carbs: 58, fats: 23, price_sar: 18, estimated: true },
  { id: 'maqsaf-shish-tawook', chain: 'MAQSAF', name: 'Shish Tawook Sandwich', category: 'main', calories: 520, protein: 30, carbs: 50, fats: 22, price_sar: 19, estimated: true },
  { id: 'maqsaf-club-sandwich', chain: 'MAQSAF', name: 'Club Sandwich with Chips', category: 'main', calories: 650, protein: 30, carbs: 55, fats: 34, price_sar: 33, estimated: true },
  { id: 'maqsaf-zinger-tortilla', chain: 'MAQSAF', name: 'Large Zinger Tortilla', category: 'main', calories: 680, protein: 30, carbs: 68, fats: 32, price_sar: 19, estimated: true },
  { id: 'maqsaf-cheps', chain: 'MAQSAF', name: 'Maqsaf Cheps (Seasoned Crisps)', category: 'side', calories: 350, protein: 5, carbs: 45, fats: 17, price_sar: 10, estimated: true },
  { id: 'maqsaf-fries', chain: 'MAQSAF', name: 'Maqsaf Fries (Garlic & Cumin)', category: 'side', calories: 399, protein: 6, carbs: 50, fats: 19, price_sar: 12, estimated: true },
  { id: 'maqsaf-chicken-fries', chain: 'MAQSAF', name: 'Chicken Fries', category: 'side', calories: 520, protein: 22, carbs: 52, fats: 25, price_sar: 15, estimated: true },

  // ── Lolivo ─────────────────────────────────────────────────────
  // Rebuilt from HungerStation Malqa labels (2026-07). Caesar salad and
  // truffle chips use kcal printed in their descriptions (482/445) over
  // the junk field labels. Skipped: gathering/CYO boxes, meals (drinks),
  // sharing/signature platters, unlabeled items (Bresaola, Mozzarella
  // Bresaola, Quinoa Salad, plain baguette/sourdough), beverages.
  { id: 'lolivo-chicken-pesto', chain: 'Lolivo', name: 'Grilled Chicken Pesto', category: 'main', calories: 717, protein: 42, carbs: 50, fats: 38, price_sar: 41, estimated: true },
  { id: 'lolivo-chicken-polo', chain: 'Lolivo', name: 'Grilled Chicken Polo', category: 'main', calories: 519, protein: 38, carbs: 48, fats: 20, price_sar: 41, estimated: true },
  { id: 'lolivo-grilled-halloumi', chain: 'Lolivo', name: 'Grilled Halloumi', category: 'main', calories: 679, protein: 28, carbs: 50, fats: 41, price_sar: 35, estimated: true },
  { id: 'lolivo-manzo-beef', chain: 'Lolivo', name: 'Manzo Beef', category: 'main', calories: 611, protein: 40, carbs: 48, fats: 28, price_sar: 56, estimated: true },
  { id: 'lolivo-steak-frites', chain: 'Lolivo', name: 'Steak Frites', category: 'main', calories: 906, protein: 42, carbs: 70, fats: 50, price_sar: 56, estimated: true },
  { id: 'lolivo-special', chain: 'Lolivo', name: "L'olivo Special", category: 'main', calories: 645, protein: 28, carbs: 52, fats: 36, price_sar: 35, estimated: true },
  { id: 'lolivo-roast-beef', chain: 'Lolivo', name: 'Roast Beef', category: 'main', calories: 619, protein: 38, carbs: 50, fats: 29, price_sar: 38, estimated: true },
  { id: 'lolivo-italian-tuna', chain: 'Lolivo', name: 'Italian Tuna', category: 'main', calories: 642, protein: 34, carbs: 52, fats: 33, price_sar: 38, estimated: true },
  { id: 'lolivo-turkey-royal', chain: 'Lolivo', name: 'Turkey Royal', category: 'main', calories: 658, protein: 36, carbs: 52, fats: 34, price_sar: 38, estimated: true },
  { id: 'lolivo-tuscan-turkey', chain: 'Lolivo', name: 'Tuscan Turkey', category: 'main', calories: 650, protein: 36, carbs: 52, fats: 33, price_sar: 38, estimated: true },
  { id: 'lolivo-smoked-salmon', chain: 'Lolivo', name: 'Smoked Salmon', category: 'main', calories: 341, protein: 22, carbs: 34, fats: 13, price_sar: 49, estimated: true },
  { id: 'lolivo-chicken-caesar', chain: 'Lolivo', name: 'Chicken Caesar Salad', category: 'main', calories: 482, protein: 32, carbs: 18, fats: 31, price_sar: 36, estimated: true },
  { id: 'lolivo-chicken-feta-salad', chain: 'Lolivo', name: 'Chicken & Feta Salad', category: 'main', calories: 380, protein: 28, carbs: 12, fats: 24, price_sar: 36, estimated: true },
  { id: 'lolivo-meat-cheese-platter', chain: 'Lolivo', name: 'Meat and Cheese Platter (Single)', category: 'main', calories: 600, protein: 30, carbs: 30, fats: 40, price_sar: 85, estimated: true },
  { id: 'lolivo-salt-pepper-chips', chain: 'Lolivo', name: 'Salt and Pepper Potato Chips', category: 'side', calories: 158, protein: 2, carbs: 18, fats: 9, price_sar: 17, estimated: true },
  { id: 'lolivo-truffle-chips', chain: 'Lolivo', name: 'Truffle Chips', category: 'side', calories: 445, protein: 5, carbs: 48, fats: 26, price_sar: 18, estimated: true },
  { id: 'lolivo-mozzarella-sticks', chain: 'Lolivo', name: 'Mozzarella Sticks', category: 'side', calories: 329, protein: 14, carbs: 24, fats: 19, price_sar: 19, estimated: true },
  { id: 'lolivo-focaccia-parmegiano', chain: 'Lolivo', name: 'Focaccia Parmegiano Bread', category: 'side', calories: 350, protein: 10, carbs: 58, fats: 9, price_sar: 8, estimated: true },
  { id: 'lolivo-focaccia-olive-thyme', chain: 'Lolivo', name: 'Focaccia Olive & Thyme Bread', category: 'side', calories: 350, protein: 10, carbs: 58, fats: 9, price_sar: 8, estimated: true },
];
