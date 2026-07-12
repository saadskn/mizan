// Saudi & regional burger chains operating in Riyadh.
// Tier 1: Herfy (published nutrition). Tier 2: Burgerizzr, Jan Burger,
// Century Burger, Section-B. Tier 3 (estimates): Grill It, Burger Boutique, GUNBUN.

export default [
  // ── Herfy ──────────────────────────────────────────────────────
  // Rebuilt 2026-07 from real HS menu (Malqa, /21067) — old block had years-stale
  // prices (9-17 SR) and item names that no longer exist. HS carries almost no
  // labels (only Super Herfy 754) — composition estimates anchored to that.
  // Skipped: all Combos/Boxes/Value Meals (include a drink), World Cup + Powerpuff
  // LTO sections, kiddie meals, Snack For Two, milkshakes, sauces, beverages.
  { id: 'herfy-super-herfy', chain: 'Herfy', name: 'Super Herfy', category: 'main', calories: 754, protein: 35, carbs: 58, fats: 42, price_sar: 31, family: 'herfy-super-herfy', units: 1, estimated: true },
  { id: 'herfy-double-super-herfy', chain: 'Herfy', name: 'Double Super Herfy', category: 'main', calories: 1040, protein: 55, carbs: 65, fats: 62, price_sar: 35, family: 'herfy-super-herfy', units: 1.7, estimated: true },
  { id: 'herfy-double-herfy', chain: 'Herfy', name: 'Double Herfy Sandwich', category: 'main', calories: 950, protein: 48, carbs: 62, fats: 57, price_sar: 31, estimated: true },
  { id: 'herfy-big-herfy-cheese', chain: 'Herfy', name: 'Big Herfy with Cheese', category: 'main', calories: 560, protein: 27, carbs: 44, fats: 30, price_sar: 25, estimated: true },
  { id: 'herfy-super-chicken', chain: 'Herfy', name: 'Super Chicken', category: 'main', calories: 700, protein: 32, carbs: 60, fats: 36, price_sar: 33, family: 'herfy-super-chicken', units: 1, estimated: true },
  { id: 'herfy-double-super-chicken', chain: 'Herfy', name: 'Double Super Chicken', category: 'main', calories: 980, protein: 50, carbs: 85, fats: 48, price_sar: 38, family: 'herfy-super-chicken', units: 1.7, estimated: true },
  { id: 'herfy-super-chili-chicken', chain: 'Herfy', name: 'Super Chili Chicken', category: 'main', calories: 720, protein: 32, carbs: 65, fats: 37, price_sar: 33, family: 'herfy-chili-chicken', units: 1.5, estimated: true },
  { id: 'herfy-double-super-chili', chain: 'Herfy', name: 'Double Super Chili', category: 'main', calories: 1000, protein: 50, carbs: 85, fats: 50, price_sar: 38, family: 'herfy-chili-chicken', units: 2, estimated: true },
  { id: 'herfy-chicken-burger', chain: 'Herfy', name: 'Chicken Burger', category: 'main', calories: 470, protein: 21, carbs: 46, fats: 22, price_sar: 28, family: 'herfy-chicken-burger', units: 1, estimated: true },
  { id: 'herfy-double-chicken-burger', chain: 'Herfy', name: 'Double Chicken Burger', category: 'main', calories: 680, protein: 32, carbs: 65, fats: 32, price_sar: 32, family: 'herfy-chicken-burger', units: 1.5, estimated: true },
  { id: 'herfy-chili-chicken', chain: 'Herfy', name: 'Chili Chicken', category: 'main', calories: 490, protein: 22, carbs: 47, fats: 24, price_sar: 28, family: 'herfy-chili-chicken', units: 1, estimated: true },
  { id: 'herfy-double-chili-chicken', chain: 'Herfy', name: 'Double Chili Chicken', category: 'main', calories: 700, protein: 33, carbs: 65, fats: 34, price_sar: 32, family: 'herfy-chili-chicken', units: 1.5, estimated: true },
  { id: 'herfy-grilled-chicken', chain: 'Herfy', name: 'Grilled Chicken', category: 'main', calories: 380, protein: 24, carbs: 38, fats: 14, price_sar: 24, family: 'herfy-grilled-chicken', units: 1, estimated: true },
  { id: 'herfy-double-grilled-chicken', chain: 'Herfy', name: 'Double Grilled Chicken', category: 'main', calories: 560, protein: 40, carbs: 46, fats: 24, price_sar: 28, family: 'herfy-grilled-chicken', units: 1.5, estimated: true },
  { id: 'herfy-chicken-tortilla', chain: 'Herfy', name: 'Chicken Tortilla', category: 'main', calories: 600, protein: 30, carbs: 60, fats: 26, price_sar: 34, estimated: true },
  { id: 'herfy-bbq-chicken-tortilla', chain: 'Herfy', name: 'BBQ Chicken Tortilla', category: 'main', calories: 560, protein: 32, carbs: 58, fats: 22, price_sar: 34, estimated: true },
  { id: 'herfy-crunchy-tortilla', chain: 'Herfy', name: 'Crunchy Tortilla Sandwich', category: 'main', calories: 650, protein: 28, carbs: 65, fats: 30, price_sar: 34, estimated: true },
  { id: 'herfy-super-nachos', chain: 'Herfy', name: 'Super Nachos Sandwich', category: 'main', calories: 680, protein: 28, carbs: 68, fats: 33, price_sar: 30, estimated: true },
  { id: 'herfy-jumbo-musahab', chain: 'Herfy', name: 'Jumbo Musahab Sandwich', category: 'main', calories: 520, protein: 26, carbs: 50, fats: 24, price_sar: 13, estimated: true },
  { id: 'herfy-spicy-jumbo-musahab', chain: 'Herfy', name: 'Spicy Jumbo Musahab Sandwich', category: 'main', calories: 520, protein: 26, carbs: 50, fats: 24, price_sar: 13, estimated: true },
  { id: 'herfy-cheese-burger-value', chain: 'Herfy', name: 'Cheese Burger', category: 'main', calories: 300, protein: 15, carbs: 28, fats: 14, price_sar: 12, estimated: true },
  { id: 'herfy-mini-chicken-burger', chain: 'Herfy', name: 'Mini Chicken Burger', category: 'main', calories: 350, protein: 14, carbs: 38, fats: 16, price_sar: 12, estimated: true },
  { id: 'herfy-fries-medium', chain: 'Herfy', name: 'Medium Fries', category: 'side', calories: 330, protein: 4, carbs: 42, fats: 16, price_sar: 13, family: 'herfy-fries', units: 1, estimated: true },
  { id: 'herfy-fries-large', chain: 'Herfy', name: 'Large Fries', category: 'side', calories: 430, protein: 5, carbs: 55, fats: 21, price_sar: 14, family: 'herfy-fries', units: 1.3, estimated: true },
  { id: 'herfy-onion-rings-8pc', chain: 'Herfy', name: 'Onion Rings (8 pc)', category: 'side', calories: 400, protein: 5, carbs: 48, fats: 20, price_sar: 16, estimated: true },
  { id: 'herfy-popcorn-15pc', chain: 'Herfy', name: 'Chicken Popcorn (15 pc)', category: 'side', calories: 380, protein: 18, carbs: 28, fats: 21, price_sar: 15, family: 'herfy-popcorn', units: 15, estimated: true },
  { id: 'herfy-popcorn-25pc', chain: 'Herfy', name: 'Chicken Popcorn (25 pc)', category: 'side', calories: 630, protein: 30, carbs: 47, fats: 35, price_sar: 22, family: 'herfy-popcorn', units: 25, estimated: true },
  { id: 'herfy-caesar-salad', chain: 'Herfy', name: 'Chicken Caesar Salad', category: 'side', calories: 320, protein: 28, carbs: 12, fats: 17, price_sar: 32, estimated: true },
  { id: 'herfy-green-salad', chain: 'Herfy', name: 'Green Salad', category: 'side', calories: 80, protein: 2, carbs: 12, fats: 2.5, price_sar: 23, estimated: true },
  { id: 'herfy-greek-salad', chain: 'Herfy', name: 'Greek Salad', category: 'side', calories: 180, protein: 5, carbs: 15, fats: 11, price_sar: 26, estimated: true },
  { id: 'herfy-chili-cheese-nuggets', chain: 'Herfy', name: 'Chili Cheese Nuggets (4 pc)', category: 'side', calories: 280, protein: 10, carbs: 24, fats: 16, price_sar: 12, estimated: true },
  { id: 'herfy-smoky-cheese-donuts', chain: 'Herfy', name: 'Mini Smoky Cheese Donuts (4 pc)', category: 'side', calories: 300, protein: 9, carbs: 30, fats: 16, price_sar: 12, estimated: true },
  { id: 'herfy-camembert-bites', chain: 'Herfy', name: 'Camembert Bites (4 pc)', category: 'side', calories: 290, protein: 11, carbs: 22, fats: 17, price_sar: 12, estimated: true },
  { id: 'herfy-jalapeno-bites', chain: 'Herfy', name: 'Jalapeno Bites with Cheese (4 pc)', category: 'side', calories: 270, protein: 9, carbs: 24, fats: 15, price_sar: 12, estimated: true },
  { id: 'herfy-wings-5pc', chain: 'Herfy', name: 'Chicken Wings (5 pc)', category: 'side', calories: 420, protein: 28, carbs: 10, fats: 30, price_sar: 16, family: 'herfy-wings', units: 5, estimated: true },
  { id: 'herfy-wings-3pc', chain: 'Herfy', name: 'Chicken Wings (3 pc)', category: 'side', calories: 252, protein: 17, carbs: 6, fats: 18, price_sar: 12, family: 'herfy-wings', units: 3, estimated: true },
  { id: 'herfy-mozzarella-sticks', chain: 'Herfy', name: 'Mozzarella Sticks (3 pc)', category: 'side', calories: 260, protein: 11, carbs: 20, fats: 15, price_sar: 12, estimated: true },
  { id: 'herfy-strips-3pc', chain: 'Herfy', name: 'Chicken Strips Regular (3 pc)', category: 'side', calories: 330, protein: 24, carbs: 20, fats: 16, price_sar: 16, estimated: true },
  { id: 'herfy-strips-spicy-3pc', chain: 'Herfy', name: 'Chicken Strips Spicy (3 pc)', category: 'side', calories: 330, protein: 24, carbs: 20, fats: 16, price_sar: 16, estimated: true },
  { id: 'herfy-nacho-triangles', chain: 'Herfy', name: 'Nacho Cheese Triangles (3 pc)', category: 'side', calories: 320, protein: 8, carbs: 30, fats: 18, price_sar: 12, estimated: true },
  { id: 'herfy-apple-pie', chain: 'Herfy', name: 'Apple Pie', category: 'dessert', calories: 250, protein: 3, carbs: 34, fats: 11, price_sar: 12, estimated: true },
  { id: 'herfy-churros-3pc', chain: 'Herfy', name: 'Chocolate Churros (3 pc)', category: 'dessert', calories: 280, protein: 3, carbs: 38, fats: 13, price_sar: 8, family: 'herfy-churros', units: 3, estimated: true },
  { id: 'herfy-churros-4pc', chain: 'Herfy', name: 'Chocolate Churros (4 pc)', category: 'dessert', calories: 375, protein: 4, carbs: 50, fats: 17, price_sar: 10, family: 'herfy-churros', units: 4, estimated: true },
  { id: 'herfy-churros-8pc', chain: 'Herfy', name: 'Chocolate Churros (8 pc)', category: 'dessert', calories: 750, protein: 8, carbs: 100, fats: 35, price_sar: 18, family: 'herfy-churros', units: 8, estimated: true },

  // ── Burgerizzr ─────────────────────────────────────────────────
  // Audited 2026-07 vs HS Malqa (/55271). HS carries no calorie labels — all
  // composition estimates. Old too-low burger calories corrected, fries price
  // fixed 9→11, Jalapeño Poppers removed (not on menu). Skipped: New Items /
  // Offers / Eid / Hibherizzr LTO line, Duo Cali (2-person), gathering boxes,
  // Wonderizzr kids meal (drink), sauces, playing cards, drinks.
  { id: 'burgerizzr-classizzr', chain: 'Burgerizzr', name: 'Classic Beef Burger', category: 'main', calories: 550, protein: 28, carbs: 40, fats: 30, price_sar: 30, estimated: true },
  { id: 'burgerizzr-classic-chicken', chain: 'Burgerizzr', name: 'Classic Chicken Burger', category: 'main', calories: 480, protein: 32, carbs: 42, fats: 20, price_sar: 30, estimated: true },
  { id: 'burgerizzr-classic-fried', chain: 'Burgerizzr', name: 'Classic Fried Burger', category: 'main', calories: 560, protein: 28, carbs: 50, fats: 28, price_sar: 31, estimated: true },
  { id: 'burgerizzr-zingerizzr', chain: 'Burgerizzr', name: 'Zingerizzr Sandwich', category: 'main', calories: 590, protein: 30, carbs: 55, fats: 28, price_sar: 34, estimated: true },
  { id: 'burgerizzr-classic-tortilla', chain: 'Burgerizzr', name: 'Classic Tortilla Sandwich', category: 'main', calories: 520, protein: 28, carbs: 48, fats: 24, price_sar: 31, estimated: true },
  { id: 'burgerizzr-meltizzr-beef', chain: 'Burgerizzr', name: 'Meltizzr Beef Burger', category: 'main', calories: 420, protein: 22, carbs: 35, fats: 21, price_sar: 25, estimated: true },
  { id: 'burgerizzr-meltizzr-grilled-chicken', chain: 'Burgerizzr', name: 'Meltizzr Chicken Burger', category: 'main', calories: 430, protein: 24, carbs: 35, fats: 22, price_sar: 25, estimated: true },
  { id: 'burgerizzr-meltizzr-chicken', chain: 'Burgerizzr', name: 'Meltizzr Fried Chicken Burger', category: 'main', calories: 450, protein: 22, carbs: 40, fats: 23, price_sar: 26, estimated: true },
  { id: 'burgerizzr-keto', chain: 'Burgerizzr', name: 'Classic Beef Keto (Lettuce Wrap)', category: 'main', calories: 300, protein: 22, carbs: 6, fats: 21, price_sar: 30, estimated: true },
  { id: 'burgerizzr-keto-chicken', chain: 'Burgerizzr', name: 'Classic Chicken Keto (Lettuce Wrap)', category: 'main', calories: 260, protein: 26, carbs: 5, fats: 15, price_sar: 30, estimated: true },
  { id: 'burgerizzr-dbl-dbl-box', chain: 'Burgerizzr', name: 'Dbl Dbl Solo Box (Burger + Curly Fries)', category: 'main', calories: 1230, protein: 60, carbs: 90, fats: 70, price_sar: 49, estimated: true },
  { id: 'burgerizzr-cali-burger', chain: 'Burgerizzr', name: 'Cali Burger Box (Burger + Fries)', category: 'main', calories: 900, protein: 35, carbs: 80, fats: 48, price_sar: 41, estimated: true },
  { id: 'burgerizzr-frizzr', chain: 'Burgerizzr', name: 'Dbl Dbl Frizzr (Loaded Fries)', category: 'side', calories: 1000, protein: 34, carbs: 96, fats: 52, price_sar: 26, estimated: true },
  { id: 'burgerizzr-chicken-strips', chain: 'Burgerizzr', name: 'Chicken Strips (2 pc)', category: 'side', calories: 280, protein: 16, carbs: 18, fats: 16, price_sar: 10, estimated: true },
  { id: 'burgerizzr-nuggets', chain: 'Burgerizzr', name: 'Nuggets', category: 'side', calories: 300, protein: 14, carbs: 22, fats: 17, price_sar: 12, estimated: true },
  { id: 'burgerizzr-wingers', chain: 'Burgerizzr', name: 'Wingers (Boneless Wings)', category: 'side', calories: 380, protein: 20, carbs: 24, fats: 22, price_sar: 17, estimated: true },
  { id: 'burgerizzr-curly-fries', chain: 'Burgerizzr', name: 'Curly Fries', category: 'side', calories: 420, protein: 5, carbs: 50, fats: 22, price_sar: 14, estimated: true },
  { id: 'burgerizzr-fries', chain: 'Burgerizzr', name: 'French Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 16, price_sar: 11, estimated: true },

  // ── Jan Burger ─────────────────────────────────────────────────
  // Rebuilt 2026-07 from real HS menu (Malqa, /35557) — old block was
  // fabricated (sliders/onion rings don't exist). HS calorie labels,
  // macros back-computed (estimated:true). Skipped: World Cup offers (LTO),
  // Jan Gatherings box (sharing), all Meals + Kids meals (fries + drink
  // included), sauces, 0-SR drinks.
  { id: 'janburger-flat-beef', chain: 'Jan Burger', name: 'Flat Burger Beef Sandwich', category: 'main', calories: 545, protein: 28, carbs: 40, fats: 30, price_sar: 39, estimated: true },
  { id: 'janburger-premium', chain: 'Jan Burger', name: 'Jan Premium Sandwich (Double Beef)', category: 'main', calories: 778, protein: 42, carbs: 48, fats: 45, price_sar: 32, estimated: true },
  { id: 'janburger-special', chain: 'Jan Burger', name: 'Jan Special Sandwich (Double Beef)', category: 'main', calories: 568, protein: 32, carbs: 42, fats: 30, price_sar: 23, estimated: true },
  { id: 'janburger-crunchy-chicken', chain: 'Jan Burger', name: 'Jan Crunchy Chicken Sandwich', category: 'main', calories: 621, protein: 28, carbs: 52, fats: 32, price_sar: 32, estimated: true },
  { id: 'janburger-fried-spicy-chicken', chain: 'Jan Burger', name: 'Fried Spicy Chicken Sandwich', category: 'main', calories: 552, protein: 26, carbs: 48, fats: 28, price_sar: 32, estimated: true },
  { id: 'janburger-classic-beef', chain: 'Jan Burger', name: 'Classic Beef Sandwich', category: 'main', calories: 342, protein: 21, carbs: 33, fats: 13, price_sar: 20, estimated: true },
  { id: 'janburger-classic-chicken', chain: 'Jan Burger', name: 'Classic Chicken Sandwich', category: 'main', calories: 378, protein: 24, carbs: 36, fats: 14, price_sar: 20, estimated: true },
  { id: 'janburger-strips-4pc', chain: 'Jan Burger', name: 'Jan Chicken Strips (4 pc)', category: 'side', calories: 860, protein: 48, carbs: 52, fats: 50, price_sar: 19, estimated: true, family: 'janburger-strips', units: 4 },
  { id: 'janburger-strips-6pc', chain: 'Jan Burger', name: 'Jan Chicken Strips (6 pc)', category: 'side', calories: 1067, protein: 60, carbs: 65, fats: 62, price_sar: 25, estimated: true, family: 'janburger-strips', units: 5 },
  { id: 'janburger-chicken-sticks', chain: 'Jan Burger', name: 'Jan Chicken Sticks', category: 'side', calories: 395, protein: 18, carbs: 32, fats: 21, price_sar: 18, estimated: true },
  { id: 'janburger-loaded-fries', chain: 'Jan Burger', name: 'Jan Fries (Loaded with Cheese)', category: 'side', calories: 718, protein: 20, carbs: 70, fats: 40, price_sar: 15, estimated: true },
  { id: 'janburger-fries-large', chain: 'Jan Burger', name: 'French Fries (Large)', category: 'side', calories: 399, protein: 5, carbs: 52, fats: 18, price_sar: 10, estimated: true },
  { id: 'janburger-curly-fries-large', chain: 'Jan Burger', name: 'Curly Fries (Large)', category: 'side', calories: 210, protein: 3, carbs: 27, fats: 10, price_sar: 11, estimated: true },

  // ── Century Burger ─────────────────────────────────────────────
  // Rebuilt 2026-07 from real HS menu (Malqa, /146806) — old block was fabricated.
  // HS calorie labels anchored; macros back-computed (estimated:true).
  // Skipped: gathering boxes (sharing; Fries Sharing Box label 319 is also junk),
  // Ranch Cheese Sticks + Sweet Potato fries (no labels), sauces, drinks.
  // C Box / Special C Box share one 1676 label — plausible for burger+fries+bites, kept.
  { id: 'century-original-cb', chain: 'Century Burger', name: 'The Original CB', category: 'main', calories: 1085, protein: 50, carbs: 80, fats: 63, price_sar: 39, estimated: true },
  { id: 'century-five-cheese', chain: 'Century Burger', name: 'Five Cheese Burger', category: 'main', calories: 615, protein: 35, carbs: 48, fats: 32, price_sar: 44, estimated: true },
  { id: 'century-black-umami', chain: 'Century Burger', name: 'Black Umami Burger', category: 'main', calories: 750, protein: 40, carbs: 65, fats: 37, price_sar: 41, estimated: true },
  { id: 'century-bacon-bbq', chain: 'Century Burger', name: 'Bacon BBQ Burger', category: 'main', calories: 975, protein: 48, carbs: 80, fats: 52, price_sar: 44, estimated: true },
  { id: 'century-c-box', chain: 'Century Burger', name: 'C Box (Burger + Fries + Chicken Bites)', category: 'main', calories: 1676, protein: 70, carbs: 155, fats: 86, price_sar: 39, estimated: true },
  { id: 'century-special-c-box', chain: 'Century Burger', name: 'Special C Box (Special Burger + Side + Fries)', category: 'main', calories: 1676, protein: 70, carbs: 155, fats: 86, price_sar: 49, estimated: true },
  { id: 'century-boneless-bbq-wings', chain: 'Century Burger', name: 'Boneless BBQ Wings', category: 'side', calories: 749, protein: 40, carbs: 65, fats: 37, price_sar: 29, estimated: true },
  { id: 'century-boneless-buffalo-wings', chain: 'Century Burger', name: 'Boneless Buffalo Wings', category: 'side', calories: 631, protein: 38, carbs: 55, fats: 29, price_sar: 29, estimated: true },
  { id: 'century-crispy-strips', chain: 'Century Burger', name: 'Crispy Chicken Strips', category: 'side', calories: 792, protein: 45, carbs: 65, fats: 39, price_sar: 28, estimated: true },
  { id: 'century-sweet-buffalo-wings', chain: 'Century Burger', name: 'Sweet Buffalo Wings', category: 'side', calories: 743, protein: 40, carbs: 45, fats: 45, price_sar: 33, estimated: true },
  { id: 'century-bang-bang-shrimp', chain: 'Century Burger', name: 'Bang Bang Shrimp', category: 'side', calories: 1181, protein: 40, carbs: 115, fats: 62, price_sar: 38, estimated: true },
  { id: 'century-maple-sriracha-shrimp', chain: 'Century Burger', name: 'Maple Sriracha Shrimp', category: 'side', calories: 533, protein: 28, carbs: 58, fats: 21, price_sar: 39, estimated: true },
  { id: 'century-mix-style-fries', chain: 'Century Burger', name: 'Mix Style Fries', category: 'side', calories: 509, protein: 8, carbs: 68, fats: 23, price_sar: 30, estimated: true },
  { id: 'century-cheesy-style-fries', chain: 'Century Burger', name: 'Cheesy Style Fries', category: 'side', calories: 878, protein: 25, carbs: 85, fats: 49, price_sar: 31, estimated: true },
  { id: 'century-sloppy-style-fries', chain: 'Century Burger', name: 'Sloppy Style Fries', category: 'side', calories: 811, protein: 30, carbs: 78, fats: 42, price_sar: 33, estimated: true },
  { id: 'century-classic-fries', chain: 'Century Burger', name: 'Classic Fries', category: 'side', calories: 319, protein: 4, carbs: 44, fats: 14, price_sar: 11, estimated: true },
  { id: 'century-cajun-fries', chain: 'Century Burger', name: 'Cajun Spicy Fries', category: 'side', calories: 341, protein: 4, carbs: 47, fats: 15, price_sar: 18, estimated: true },
  { id: 'century-parmesan-truffle-fries', chain: 'Century Burger', name: 'Parmesan Truffle Fries', category: 'side', calories: 424, protein: 8, carbs: 52, fats: 20, price_sar: 19, estimated: true },

  // ── Section-B ──────────────────────────────────────────────────
  // Rebuilt 2026-07 from HS Malqa /85407 — old block had fabricated items
  // (no cookie on menu) and wrong prices (fries 15 not 13). Calories are HS
  // labels; macros back-computed (estimated:true). B Tots and Bacon Ranch
  // Tots share a 750 label (distinct loaded tots — both kept, like Dbl
  // Cheese/Dbl T at 550). Skipped: Chopped Cheese box (4 per box, sharing),
  // unlabeled items (B, B Double, M, Chix, all plain fries, coleslaw),
  // sauces, drinks.
  { id: 'sectionb-big-b', chain: 'Section-B', name: 'Big B', category: 'main', calories: 840, protein: 45, carbs: 50, fats: 50, price_sar: 59, estimated: true },
  { id: 'sectionb-wagyu-flip', chain: 'Section-B', name: 'Wagyu Flip', category: 'main', calories: 680, protein: 35, carbs: 40, fats: 40, price_sar: 45, estimated: true },
  { id: 'sectionb-w', chain: 'Section-B', name: 'W (Wagyu, Gouda & Truffle)', category: 'main', calories: 720, protein: 38, carbs: 42, fats: 42, price_sar: 65, estimated: true },
  { id: 'sectionb-nashville-heat', chain: 'Section-B', name: 'Trpl S: Nashville Heat', category: 'main', calories: 850, protein: 38, carbs: 75, fats: 42, price_sar: 45, estimated: true },
  { id: 'sectionb-c', chain: 'Section-B', name: 'C (Crispy Chicken)', category: 'main', calories: 880, protein: 36, carbs: 80, fats: 44, price_sar: 39, estimated: true },
  { id: 'sectionb-l', chain: 'Section-B', name: 'L (Louisiana Crispy Chicken)', category: 'main', calories: 890, protein: 37, carbs: 80, fats: 45, price_sar: 44, estimated: true },
  { id: 'sectionb-dbl-cheese', chain: 'Section-B', name: 'Dbl Cheese Burger', category: 'main', calories: 550, protein: 30, carbs: 36, fats: 30, price_sar: 28, estimated: true },
  { id: 'sectionb-dbl-t', chain: 'Section-B', name: 'Dbl T', category: 'main', calories: 550, protein: 30, carbs: 36, fats: 30, price_sar: 28, estimated: true },
  { id: 'sectionb-classic-chicken', chain: 'Section-B', name: 'Classic Chicken', category: 'main', calories: 440, protein: 20, carbs: 42, fats: 20, price_sar: 27, estimated: true },
  { id: 'sectionb-b-mini', chain: 'Section-B', name: 'B Mini', category: 'main', calories: 300, protein: 15, carbs: 22, fats: 16, price_sar: 24, estimated: true, family: 'sectionb-b-mini', units: 1 },
  { id: 'sectionb-b-mini-double', chain: 'Section-B', name: 'B Mini Double', category: 'main', calories: 420, protein: 24, carbs: 24, fats: 24, price_sar: 36, estimated: true, family: 'sectionb-b-mini', units: 1.4 },
  { id: 'sectionb-c-mini', chain: 'Section-B', name: 'C Mini', category: 'main', calories: 440, protein: 18, carbs: 42, fats: 21, price_sar: 24, estimated: true },
  { id: 'sectionb-w-mini', chain: 'Section-B', name: 'W Mini', category: 'main', calories: 360, protein: 18, carbs: 24, fats: 20, price_sar: 34, estimated: true },
  { id: 'sectionb-chix-tenders', chain: 'Section-B', name: 'Chix Tenders (4 pc)', category: 'side', calories: 260, protein: 22, carbs: 18, fats: 10, price_sar: 25, estimated: true },
  { id: 'sectionb-hd', chain: 'Section-B', name: 'Hd (Hotdog)', category: 'main', calories: 440, protein: 15, carbs: 40, fats: 24, price_sar: 25, estimated: true },
  { id: 'sectionb-hd-extra', chain: 'Section-B', name: 'Hd Extra', category: 'main', calories: 520, protein: 20, carbs: 42, fats: 28, price_sar: 32, estimated: true },
  { id: 'sectionb-b-tots', chain: 'Section-B', name: 'B Tots', category: 'side', calories: 750, protein: 20, carbs: 70, fats: 42, price_sar: 32, estimated: true },
  { id: 'sectionb-bacon-ranch-tots', chain: 'Section-B', name: 'Bacon Ranch Tots', category: 'side', calories: 750, protein: 20, carbs: 70, fats: 42, price_sar: 32, estimated: true },
  { id: 'sectionb-broc-salad', chain: 'Section-B', name: 'Broc Salad', category: 'side', calories: 260, protein: 7, carbs: 18, fats: 17, price_sar: 24, estimated: true },
  { id: 'sectionb-berry-bskt', chain: 'Section-B', name: 'Berry Bskt', category: 'dessert', calories: 480, protein: 6, carbs: 60, fats: 23, price_sar: 25, estimated: true },
  { id: 'sectionb-banana-pudding', chain: 'Section-B', name: 'Banana Pudding', category: 'dessert', calories: 520, protein: 6, carbs: 65, fats: 25, price_sar: 27, estimated: true },

  // ── Grill It ───────────────────────────────────────────────────
  // Rebuilt from HS Malqa 2026-07 (old block was generic placeholders that
  // matched nothing on the real menu). SFDA labels, estimated macros.
  // Skipped: spicy tenders (macro-identical to regular), sauces/cheese add-ons.
  { id: 'grillit-oklahoma-wagyu-fries', chain: 'Grill It', name: 'Oklahoma Wagyu Burger & Parmesan Fries', category: 'main', calories: 1008, protein: 45, carbs: 80, fats: 55, price_sar: 76, estimated: true },
  { id: 'grillit-charcoal-chicken-steak', chain: 'Grill It', name: 'Charcoal Grill Chicken Steak Sandwich', category: 'main', calories: 582, protein: 38, carbs: 48, fats: 26, price_sar: 38.5, estimated: true },
  { id: 'grillit-charcoal-steak-fillet', chain: 'Grill It', name: 'Charcoal Grill Steak Fillet Sandwich', category: 'main', calories: 680, protein: 42, carbs: 50, fats: 35, price_sar: 49, estimated: true },
  { id: 'grillit-charcoal-angus-burger', chain: 'Grill It', name: 'Charcoal Grill Angus Burger', category: 'main', calories: 657, protein: 35, carbs: 45, fats: 37, price_sar: 38.5, estimated: true },
  { id: 'grillit-charcoal-wagyu-burger', chain: 'Grill It', name: 'Charcoal Grill Wagyu Burger', category: 'main', calories: 621, protein: 33, carbs: 45, fats: 34, price_sar: 46, estimated: true },
  { id: 'grillit-charcoal-shawarma', cuisine: 'shawarma', chain: 'Grill It', name: 'Charcoal Grilled Chicken Shawarma', category: 'main', calories: 447, protein: 25, carbs: 40, fats: 20, price_sar: 14, estimated: true },
  { id: 'grillit-smash-angus', chain: 'Grill It', name: 'Smash Angus Burger', category: 'main', calories: 698, protein: 37, carbs: 48, fats: 39, price_sar: 38.5, estimated: true },
  { id: 'grillit-double-smash-angus', chain: 'Grill It', name: 'Double Smash Angus Burger', category: 'main', calories: 1101, protein: 64, carbs: 52, fats: 70, price_sar: 50.5, estimated: true },
  { id: 'grillit-smash-wagyu', chain: 'Grill It', name: 'Smash Wagyu Burger', category: 'main', calories: 680, protein: 36, carbs: 46, fats: 39, price_sar: 46, estimated: true },
  { id: 'grillit-steak-sandwich', chain: 'Grill It', name: 'Steak Sandwich', category: 'main', calories: 376, protein: 30, carbs: 32, fats: 14, price_sar: 49, estimated: true },
  { id: 'grillit-fried-chicken-sandwich', chain: 'Grill It', name: 'Fried Chicken Sandwich', category: 'main', calories: 626, protein: 32, carbs: 55, fats: 31, price_sar: 37.5, estimated: true },
  { id: 'grillit-fries', chain: 'Grill It', name: 'French Fries', category: 'side', calories: 387, protein: 5, carbs: 48, fats: 19, price_sar: 15, estimated: true },
  { id: 'grillit-chicken-tenders', chain: 'Grill It', name: 'Chicken Tenders (Regular)', category: 'side', calories: 361, protein: 28, carbs: 24, fats: 17, price_sar: 32, estimated: true },
  { id: 'grillit-korean-popcorn', chain: 'Grill It', name: 'Korean Popcorn Chicken', category: 'side', calories: 420, protein: 24, carbs: 38, fats: 19, price_sar: 31.5, estimated: true },

  // ── Burger Boutique ────────────────────────────────────────────
  // Rebuilt from HS Malqa 2026-07 (old block was placeholders). SFDA labels,
  // estimated macros. Skipped: unlabeled items (Lolipops, Cheese/Commando/
  // Dynamite/Delta fries, La Burger, The B, Ginza), Combo Meals (bundles),
  // drinks/lemonades.
  { id: 'burgerboutique-mushroom-poppers', chain: 'Burger Boutique', name: 'Mushroom Poppers', category: 'side', calories: 406, protein: 12, carbs: 36, fats: 23, price_sar: 52, estimated: true },
  { id: 'burgerboutique-fried-chicken-bites', chain: 'Burger Boutique', name: 'Southern Fried Chicken Bites', category: 'side', calories: 453, protein: 28, carbs: 30, fats: 24, price_sar: 55, estimated: true },
  { id: 'burgerboutique-sriracha-honey-shrimp', chain: 'Burger Boutique', name: 'Sriracha Honey Shrimp', category: 'side', calories: 547, protein: 26, carbs: 48, fats: 27, price_sar: 65, estimated: true },
  { id: 'burgerboutique-maple-buffalo-shrimp', chain: 'Burger Boutique', name: 'Sticky Maple Buffalo Shrimp', category: 'side', calories: 845, protein: 30, carbs: 70, fats: 48, price_sar: 69, estimated: true },
  { id: 'burgerboutique-maple-buffalo-wings', chain: 'Burger Boutique', name: 'Sticky Maple Buffalo Wings', category: 'side', calories: 969, protein: 48, carbs: 40, fats: 68, price_sar: 49, estimated: true },
  { id: 'burgerboutique-truffle-arancini', chain: 'Burger Boutique', name: 'Crispy Truffle Arancini', category: 'side', calories: 629, protein: 14, carbs: 66, fats: 34, price_sar: 62, estimated: true },
  { id: 'burgerboutique-quinoa-halloumi-salad', chain: 'Burger Boutique', name: 'Quinoa & Grilled Halloumi Salad', category: 'main', calories: 955, protein: 28, carbs: 78, fats: 58, price_sar: 55, estimated: true },
  { id: 'burgerboutique-philly-fries', chain: 'Burger Boutique', name: 'Philly Fries', category: 'side', calories: 1173, protein: 30, carbs: 110, fats: 68, price_sar: 48, estimated: true },
  { id: 'burgerboutique-fresh-cut-fries', chain: 'Burger Boutique', name: 'Fresh Cut Fries', category: 'side', calories: 511, protein: 7, carbs: 64, fats: 25, price_sar: 23, estimated: true },
  { id: 'burgerboutique-ultimate-fries', chain: 'Burger Boutique', name: 'Ultimate Fries', category: 'side', calories: 1652, protein: 18, carbs: 190, fats: 90, price_sar: 49, estimated: true },
  { id: 'burgerboutique-rainbow-fries', chain: 'Burger Boutique', name: 'Rainbow Fries', category: 'side', calories: 1565, protein: 24, carbs: 168, fats: 88, price_sar: 45, estimated: true },
  { id: 'burgerboutique-classic-chicken-slider', chain: 'Burger Boutique', name: 'Classic Chicken Slider', category: 'main', calories: 315, protein: 18, carbs: 28, fats: 14, price_sar: 34, estimated: true },
  { id: 'burgerboutique-dangerous-slider', chain: 'Burger Boutique', name: 'Dangerous Slider', category: 'main', calories: 475, protein: 22, carbs: 34, fats: 27, price_sar: 36, estimated: true },
  { id: 'burgerboutique-machine-gun-slider', chain: 'Burger Boutique', name: 'Machine Gun Slider', category: 'main', calories: 481, protein: 24, carbs: 30, fats: 29, price_sar: 32, estimated: true },
  { id: 'burgerboutique-midnight-slider', chain: 'Burger Boutique', name: 'Midnight Slider', category: 'main', calories: 414, protein: 20, carbs: 32, fats: 22, price_sar: 30, estimated: true },
  { id: 'burgerboutique-roma-slider', chain: 'Burger Boutique', name: 'Roma Slider', category: 'main', calories: 530, protein: 26, carbs: 36, fats: 31, price_sar: 45, estimated: true },
  { id: 'burgerboutique-lunar-gravity-slider', chain: 'Burger Boutique', name: 'Lunar Gravity Slider', category: 'main', calories: 719, protein: 30, carbs: 46, fats: 46, price_sar: 34, estimated: true },
  { id: 'burgerboutique-b-and-f-cheese', chain: 'Burger Boutique', name: 'B and F Cheese Burger', category: 'main', calories: 578, protein: 32, carbs: 38, fats: 33, price_sar: 48, estimated: true },
  { id: 'burgerboutique-bl-wagyu', chain: 'Burger Boutique', name: 'B L Wagyu Burger', category: 'main', calories: 911, protein: 42, carbs: 54, fats: 58, price_sar: 98, estimated: true },
  { id: 'burgerboutique-classic', chain: 'Burger Boutique', name: 'Classic Smashed Burger', category: 'main', calories: 628, protein: 30, carbs: 44, fats: 37, price_sar: 48, estimated: true },
  { id: 'burgerboutique-manhattan', chain: 'Burger Boutique', name: 'Manhattan Burger', category: 'main', calories: 634, protein: 30, carbs: 45, fats: 37, price_sar: 48, estimated: true },
  { id: 'burgerboutique-mushroom-swiss', chain: 'Burger Boutique', name: 'Mushroom Swiss Burger', category: 'main', calories: 918, protein: 42, carbs: 56, fats: 58, price_sar: 65, estimated: true },
  { id: 'burgerboutique-solar-gravity', chain: 'Burger Boutique', name: 'Solar Gravity Burger', category: 'main', calories: 1257, protein: 58, carbs: 66, fats: 84, price_sar: 66, estimated: true },
  { id: 'burgerboutique-stinger', chain: 'Burger Boutique', name: 'The Stinger Burger', category: 'main', calories: 963, protein: 48, carbs: 54, fats: 62, price_sar: 58, estimated: true },
  { id: 'burgerboutique-west-coast', chain: 'Burger Boutique', name: 'West Coast Burger', category: 'main', calories: 707, protein: 32, carbs: 46, fats: 43, price_sar: 48, estimated: true },
  { id: 'burgerboutique-philly-steak', chain: 'Burger Boutique', name: 'Philly Steak Sandwich', category: 'main', calories: 790, protein: 40, carbs: 54, fats: 46, price_sar: 65, estimated: true },
  { id: 'burgerboutique-chicago', chain: 'Burger Boutique', name: 'Chicago Burger', category: 'main', calories: 762, protein: 42, carbs: 46, fats: 45, price_sar: 48, estimated: true },
  { id: 'burgerboutique-biggie-double', chain: 'Burger Boutique', name: 'Biggie Double Burger', category: 'main', calories: 787, protein: 42, carbs: 48, fats: 47, price_sar: 50, estimated: true },
  { id: 'burgerboutique-truff-n-swiss', chain: 'Burger Boutique', name: 'Truff N Swiss Burger', category: 'main', calories: 739, protein: 38, carbs: 46, fats: 44, price_sar: 62, estimated: true },
  { id: 'burgerboutique-honey-sriracha-chicken', chain: 'Burger Boutique', name: 'Honey Sriracha Chicken Burger', category: 'main', calories: 712, protein: 34, carbs: 62, fats: 36, price_sar: 52, estimated: true },
  { id: 'burgerboutique-southwestern-chicken', chain: 'Burger Boutique', name: 'Southwestern Chicken Burger', category: 'main', calories: 502, protein: 34, carbs: 36, fats: 24, price_sar: 48, estimated: true },
  { id: 'burgerboutique-crispy-chicken', chain: 'Burger Boutique', name: 'The Crispy Chicken Burger', category: 'main', calories: 725, protein: 34, carbs: 60, fats: 39, price_sar: 48, estimated: true },

  // ── GUNBUN ─────────────────────────────────────────────────────
  // Rebuilt from HS Malqa 2026-07 (real menu is two-piece sliders, not the
  // placeholder burgers we had). HS labels not credible (77-kcal fries,
  // ~125 kcal/slider) — macros are composition estimates; prices = HS.
  // Gathering Box skipped (bundle).
  { id: 'gunbun-spark-chicken-sliders', chain: 'GUNBUN', name: 'Crispy Chicken Spark Sliders (2 pc)', category: 'main', calories: 600, protein: 28, carbs: 52, fats: 30, price_sar: 28, estimated: true },
  { id: 'gunbun-swiss-mushroom-sliders', chain: 'GUNBUN', name: 'Swiss Mushroom Sliders (2 pc)', category: 'main', calories: 640, protein: 32, carbs: 50, fats: 34, price_sar: 36, estimated: true },
  { id: 'gunbun-cheesemelt-sliders', chain: 'GUNBUN', name: 'Cheesemelt Sliders (2 pc)', category: 'main', calories: 600, protein: 30, carbs: 48, fats: 31, price_sar: 32, estimated: true },
  { id: 'gunbun-wagyu-sliders', chain: 'GUNBUN', name: 'Wagyu Sliders (2 pc)', category: 'main', calories: 650, protein: 32, carbs: 48, fats: 36, price_sar: 39, estimated: true },
  { id: 'gunbun-fries', chain: 'GUNBUN', name: 'Fresh Hand Cut Fries', category: 'side', calories: 380, protein: 5, carbs: 48, fats: 18, price_sar: 13, estimated: true },
  { id: 'gunbun-gunfries', chain: 'GUNBUN', name: 'Gunfries (Loaded)', category: 'side', calories: 620, protein: 10, carbs: 60, fats: 36, price_sar: 26, estimated: true },
  { id: 'gunbun-crispy-kale', chain: 'GUNBUN', name: 'Crispy Kale', category: 'side', calories: 250, protein: 5, carbs: 18, fats: 17, price_sar: 28, estimated: true },
];
