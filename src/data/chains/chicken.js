// Fried & grilled chicken chains operating in Riyadh.
// Tier 1 (published nutrition): Albaik, KFC, Texas Chicken, Popeyes,
// Raising Cane's, Dave's Hot Chicken, Wingstop, Jollibee, Al Tazaj.
// Tier 2: Buffalo Wild Wings. Tier 3: Birdlot.

export default [
  // ── Albaik ─────────────────────────────────────────────────────
  { id: 'albaik-4pc-nuggets', chain: 'Albaik', name: '4-Piece Chicken Nuggets (No Fries)', category: 'side', calories: 220, protein: 18, carbs: 12, fats: 11, price_sar: 9, estimated: false },
  { id: 'albaik-nugget-sandwich', chain: 'Albaik', name: 'Nugget Sandwich', category: 'main', calories: 340, protein: 16, carbs: 38, fats: 14, price_sar: 7, estimated: false },
  { id: 'albaik-big-baik-spicy', chain: 'Albaik', name: 'Big Baik Sandwich (Spicy)', category: 'main', calories: 450, protein: 22, carbs: 42, fats: 22, price_sar: 10, estimated: false },
  { id: 'albaik-4pc-broasted-meal', chain: 'Albaik', name: '4-Piece Broasted Chicken Meal', category: 'main', calories: 950, protein: 52, carbs: 72, fats: 48, price_sar: 19, estimated: false },
  { id: 'albaik-2pc-broasted', chain: 'Albaik', name: '2-Piece Broasted Chicken (No Fries)', category: 'main', calories: 480, protein: 38, carbs: 18, fats: 28, price_sar: 12, estimated: false },
  { id: 'albaik-10pc-nuggets', chain: 'Albaik', name: '10-Piece Chicken Nuggets', category: 'main', calories: 550, protein: 45, carbs: 30, fats: 28, price_sar: 14, estimated: false },
  { id: 'albaik-fish-fillet-sandwich', chain: 'Albaik', name: 'Fish Fillet Sandwich', category: 'main', calories: 380, protein: 18, carbs: 40, fats: 16, price_sar: 8, estimated: false },
  { id: 'albaik-big-baik-fillet', chain: 'Albaik', name: 'Big Baik Fillet Sandwich', category: 'main', calories: 430, protein: 24, carbs: 44, fats: 18, price_sar: 10, estimated: false },
  { id: 'albaik-jumbo-shrimp-meal', chain: 'Albaik', name: 'Jumbo Shrimp Meal (10 pc)', category: 'main', calories: 720, protein: 34, carbs: 62, fats: 38, price_sar: 25, estimated: false },
  { id: 'albaik-fries', chain: 'Albaik', name: 'French Fries', category: 'side', calories: 290, protein: 4, carbs: 38, fats: 13, price_sar: 4, estimated: false },
  { id: 'albaik-coleslaw', chain: 'Albaik', name: 'Coleslaw', category: 'side', calories: 150, protein: 1, carbs: 12, fats: 11, price_sar: 3, estimated: false },
  { id: 'albaik-muhalabia', chain: 'Albaik', name: 'Muhalabia', category: 'dessert', calories: 190, protein: 5, carbs: 32, fats: 5, price_sar: 4, estimated: false },

  // ── KFC ────────────────────────────────────────────────────────
  { id: 'kfc-zinger', chain: 'KFC', name: 'Zinger Sandwich', category: 'main', calories: 450, protein: 22, carbs: 44, fats: 21, price_sar: 17, estimated: false },
  { id: 'kfc-mighty-zinger', chain: 'KFC', name: 'Mighty Zinger', category: 'main', calories: 660, protein: 34, carbs: 54, fats: 34, price_sar: 24, estimated: false },
  { id: 'kfc-twister', chain: 'KFC', name: 'Twister Wrap', category: 'main', calories: 480, protein: 21, carbs: 48, fats: 23, price_sar: 17, estimated: false },
  { id: 'kfc-2pc-original', chain: 'KFC', name: '2-Piece Chicken (Original Recipe)', category: 'main', calories: 480, protein: 36, carbs: 16, fats: 30, price_sar: 15, estimated: false },
  { id: 'kfc-3pc-spicy', chain: 'KFC', name: '3-Piece Chicken (Spicy)', category: 'main', calories: 720, protein: 54, carbs: 24, fats: 45, price_sar: 21, estimated: false },
  { id: 'kfc-strips-3pc', chain: 'KFC', name: 'Chicken Strips (3 pc)', category: 'side', calories: 330, protein: 27, carbs: 20, fats: 15, price_sar: 15, estimated: false },
  { id: 'kfc-rizo', chain: 'KFC', name: 'Rizo (Chicken Rice Bowl)', category: 'main', calories: 460, protein: 22, carbs: 60, fats: 14, price_sar: 14, estimated: false },
  { id: 'kfc-fries-medium', chain: 'KFC', name: 'French Fries (Medium)', category: 'side', calories: 310, protein: 4, carbs: 41, fats: 14, price_sar: 9, estimated: false },
  { id: 'kfc-coleslaw', chain: 'KFC', name: 'Coleslaw', category: 'side', calories: 130, protein: 1, carbs: 14, fats: 8, price_sar: 6, estimated: false },
  { id: 'kfc-cookie', chain: 'KFC', name: 'Chocolate Chip Cookie', category: 'dessert', calories: 200, protein: 2, carbs: 28, fats: 9, price_sar: 5, estimated: false },

  // ── Texas Chicken ──────────────────────────────────────────────
  { id: 'texas-spicy-sandwich', chain: 'Texas Chicken', name: 'Spicy Chicken Sandwich', category: 'main', calories: 480, protein: 24, carbs: 46, fats: 22, price_sar: 16, estimated: false },
  { id: 'texas-2pc-chicken', chain: 'Texas Chicken', name: '2-Piece Fried Chicken', category: 'main', calories: 470, protein: 35, carbs: 17, fats: 29, price_sar: 14, estimated: false },
  { id: 'texas-tenders-3pc', chain: 'Texas Chicken', name: 'Chicken Tenders (3 pc)', category: 'side', calories: 300, protein: 24, carbs: 19, fats: 14, price_sar: 14, estimated: false },
  { id: 'texas-mexicana-burger', chain: 'Texas Chicken', name: 'Mexicana Burger', category: 'main', calories: 520, protein: 25, carbs: 48, fats: 26, price_sar: 18, estimated: true },
  { id: 'texas-honey-butter-biscuit', chain: 'Texas Chicken', name: 'Honey Butter Biscuit', category: 'side', calories: 240, protein: 3, carbs: 29, fats: 12, price_sar: 4, estimated: false },
  { id: 'texas-fries-medium', chain: 'Texas Chicken', name: 'French Fries (Medium)', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 8, estimated: false },
  { id: 'texas-mashed-potatoes', chain: 'Texas Chicken', name: 'Mashed Potatoes with Gravy', category: 'side', calories: 120, protein: 2, carbs: 18, fats: 4, price_sar: 6, estimated: false },
  { id: 'texas-apple-pie', chain: 'Texas Chicken', name: 'Apple Pie', category: 'dessert', calories: 250, protein: 2, carbs: 35, fats: 11, price_sar: 6, estimated: false },

  // ── Popeyes ────────────────────────────────────────────────────
  { id: 'popeyes-chicken-sandwich', chain: 'Popeyes', name: 'Chicken Sandwich (Classic)', category: 'main', calories: 700, protein: 28, carbs: 50, fats: 42, price_sar: 19, estimated: false },
  { id: 'popeyes-chicken-sandwich-spicy', chain: 'Popeyes', name: 'Chicken Sandwich (Spicy)', category: 'main', calories: 700, protein: 28, carbs: 50, fats: 42, price_sar: 19, estimated: false },
  { id: 'popeyes-2pc-signature', chain: 'Popeyes', name: '2-Piece Signature Chicken', category: 'main', calories: 500, protein: 38, carbs: 17, fats: 31, price_sar: 15, estimated: false },
  { id: 'popeyes-tenders-3pc', chain: 'Popeyes', name: 'Handcrafted Tenders (3 pc)', category: 'side', calories: 340, protein: 26, carbs: 22, fats: 16, price_sar: 16, estimated: false },
  { id: 'popeyes-cajun-fries', chain: 'Popeyes', name: 'Cajun Fries (Regular)', category: 'side', calories: 270, protein: 4, carbs: 33, fats: 14, price_sar: 8, estimated: false },
  { id: 'popeyes-biscuit', chain: 'Popeyes', name: 'Buttermilk Biscuit', category: 'side', calories: 210, protein: 3, carbs: 22, fats: 12, price_sar: 4, estimated: false },
  { id: 'popeyes-mashed-potatoes', chain: 'Popeyes', name: 'Mashed Potatoes with Cajun Gravy', category: 'side', calories: 110, protein: 2, carbs: 16, fats: 4, price_sar: 6, estimated: false },
  { id: 'popeyes-coleslaw', chain: 'Popeyes', name: 'Coleslaw', category: 'side', calories: 130, protein: 1, carbs: 13, fats: 8, price_sar: 6, estimated: false },
  { id: 'popeyes-apple-pie', chain: 'Popeyes', name: 'Cinnamon Apple Pie', category: 'dessert', calories: 230, protein: 2, carbs: 33, fats: 10, price_sar: 6, estimated: false },

  // ── Raising Cane's ─────────────────────────────────────────────
  { id: 'canes-3-fingers', chain: "Raising Cane's", name: 'Chicken Fingers (3 pc)', category: 'main', calories: 390, protein: 39, carbs: 24, fats: 15, price_sar: 19, family: 'canes-fingers', units: 3, estimated: false },
  { id: 'canes-4-fingers', chain: "Raising Cane's", name: 'Chicken Fingers (4 pc)', category: 'main', calories: 520, protein: 52, carbs: 32, fats: 20, price_sar: 24, family: 'canes-fingers', units: 4, estimated: false },
  { id: 'canes-6-fingers', chain: "Raising Cane's", name: 'Chicken Fingers (6 pc)', category: 'main', calories: 780, protein: 78, carbs: 48, fats: 30, price_sar: 33, family: 'canes-fingers', units: 6, estimated: false },
  { id: 'canes-sandwich', chain: "Raising Cane's", name: "Cane's Chicken Sandwich", category: 'main', calories: 640, protein: 39, carbs: 50, fats: 31, price_sar: 26, estimated: false },
  { id: 'canes-crinkle-fries', chain: "Raising Cane's", name: 'Crinkle-Cut Fries', category: 'side', calories: 390, protein: 5, carbs: 51, fats: 17, price_sar: 10, estimated: false },
  { id: 'canes-texas-toast', chain: "Raising Cane's", name: 'Texas Toast', category: 'side', calories: 150, protein: 4, carbs: 25, fats: 4, price_sar: 5, estimated: false },
  { id: 'canes-coleslaw', chain: "Raising Cane's", name: 'Coleslaw', category: 'side', calories: 190, protein: 1, carbs: 15, fats: 14, price_sar: 7, estimated: false },

  // ── Dave's Hot Chicken ─────────────────────────────────────────
  { id: 'daves-slider', chain: "Dave's Hot Chicken", name: 'Hot Chicken Slider', category: 'main', calories: 620, protein: 31, carbs: 51, fats: 32, price_sar: 26, estimated: false },
  { id: 'daves-slider-cheese', chain: "Dave's Hot Chicken", name: 'Hot Chicken Slider with Cheese', category: 'main', calories: 690, protein: 34, carbs: 52, fats: 38, price_sar: 29, estimated: false },
  { id: 'daves-2-tenders', chain: "Dave's Hot Chicken", name: 'Hot Chicken Tenders (2 pc)', category: 'main', calories: 500, protein: 44, carbs: 30, fats: 22, price_sar: 29, estimated: false },
  { id: 'daves-fries', chain: "Dave's Hot Chicken", name: 'French Fries', category: 'side', calories: 430, protein: 5, carbs: 55, fats: 21, price_sar: 12, estimated: false },
  { id: 'daves-cheese-fries', chain: "Dave's Hot Chicken", name: 'Cheese Fries', category: 'side', calories: 570, protein: 12, carbs: 58, fats: 31, price_sar: 17, estimated: false },
  { id: 'daves-mac-cheese', chain: "Dave's Hot Chicken", name: 'Mac & Cheese', category: 'side', calories: 380, protein: 13, carbs: 42, fats: 17, price_sar: 15, estimated: false },
  { id: 'daves-kale-slaw', chain: "Dave's Hot Chicken", name: 'Kale Slaw', category: 'side', calories: 170, protein: 2, carbs: 12, fats: 13, price_sar: 9, estimated: false },

  // ── Wingstop ───────────────────────────────────────────────────
  { id: 'wingstop-6-classic', chain: 'Wingstop', name: 'Classic Wings (6 pc)', category: 'main', calories: 430, protein: 38, carbs: 2, fats: 30, price_sar: 24, estimated: false },
  { id: 'wingstop-6-lemon-pepper', chain: 'Wingstop', name: 'Lemon Pepper Wings (6 pc)', category: 'main', calories: 490, protein: 38, carbs: 2, fats: 36, price_sar: 24, estimated: false },
  { id: 'wingstop-8-boneless', chain: 'Wingstop', name: 'Boneless Wings (8 pc)', category: 'main', calories: 570, protein: 34, carbs: 42, fats: 28, price_sar: 26, estimated: false },
  { id: 'wingstop-3-tenders', chain: 'Wingstop', name: 'Crispy Tenders (3 pc)', category: 'main', calories: 380, protein: 28, carbs: 26, fats: 17, price_sar: 19, estimated: false },
  { id: 'wingstop-seasoned-fries', chain: 'Wingstop', name: 'Seasoned Fries', category: 'side', calories: 420, protein: 5, carbs: 54, fats: 20, price_sar: 11, estimated: false },
  { id: 'wingstop-cheese-fries', chain: 'Wingstop', name: 'Cheese Fries', category: 'side', calories: 550, protein: 11, carbs: 56, fats: 30, price_sar: 16, estimated: false },
  { id: 'wingstop-veggie-sticks', chain: 'Wingstop', name: 'Veggie Sticks', category: 'side', calories: 35, protein: 1, carbs: 7, fats: 0, price_sar: 5, estimated: false },

  // ── Jollibee ───────────────────────────────────────────────────
  { id: 'jollibee-chickenjoy-1pc', chain: 'Jollibee', name: 'Chickenjoy (1 pc)', category: 'main', calories: 260, protein: 17, carbs: 11, fats: 17, price_sar: 12, family: 'chickenjoy', units: 1, estimated: false },
  { id: 'jollibee-chickenjoy-2pc', chain: 'Jollibee', name: 'Chickenjoy (2 pc)', category: 'main', calories: 520, protein: 34, carbs: 22, fats: 34, price_sar: 20, family: 'chickenjoy', units: 2, estimated: false },
  { id: 'jollibee-spicy-chickenjoy', chain: 'Jollibee', name: 'Spicy Chickenjoy (1 pc)', category: 'main', calories: 270, protein: 17, carbs: 12, fats: 18, price_sar: 12, estimated: false },
  { id: 'jollibee-yumburger', chain: 'Jollibee', name: 'Yumburger', category: 'main', calories: 320, protein: 14, carbs: 34, fats: 14, price_sar: 8, estimated: false },
  { id: 'jollibee-spaghetti', chain: 'Jollibee', name: 'Jolly Spaghetti', category: 'main', calories: 550, protein: 20, carbs: 74, fats: 19, price_sar: 14, estimated: false },
  { id: 'jollibee-burger-steak', chain: 'Jollibee', name: 'Burger Steak with Rice', category: 'main', calories: 430, protein: 17, carbs: 52, fats: 17, price_sar: 14, estimated: false },
  { id: 'jollibee-crispy-fries', chain: 'Jollibee', name: 'Jolly Crispy Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 16, price_sar: 9, estimated: false },
  { id: 'jollibee-peach-mango-pie', chain: 'Jollibee', name: 'Peach Mango Pie', category: 'dessert', calories: 240, protein: 2, carbs: 35, fats: 10, price_sar: 5, estimated: false },

  // ── Al Tazaj ───────────────────────────────────────────────────
  { id: 'altazaj-bbq-half', chain: 'Al Tazaj', name: 'BBQ Grilled Chicken (Half)', category: 'main', calories: 390, protein: 46, carbs: 2, fats: 22, price_sar: 21, family: 'tazaj-bbq', units: 1, estimated: false },
  { id: 'altazaj-bbq-full', chain: 'Al Tazaj', name: 'BBQ Grilled Chicken (Full)', category: 'main', calories: 780, protein: 92, carbs: 4, fats: 44, price_sar: 36, family: 'tazaj-bbq', units: 2, estimated: false },
  { id: 'altazaj-quarter-rice', chain: 'Al Tazaj', name: 'Quarter Chicken with Rice', category: 'main', calories: 560, protein: 33, carbs: 58, fats: 21, price_sar: 19, family: 'tazaj-rice', units: 1, estimated: true },
  { id: 'altazaj-half-rice', chain: 'Al Tazaj', name: 'Half Chicken with Rice', category: 'main', calories: 690, protein: 50, carbs: 48, fats: 30, price_sar: 27, family: 'tazaj-rice', units: 2, estimated: true },
  { id: 'altazaj-chicken-sandwich', chain: 'Al Tazaj', name: 'Tazaj Chicken Sandwich', category: 'main', calories: 380, protein: 26, carbs: 40, fats: 12, price_sar: 13, estimated: true },
  { id: 'altazaj-kabab-skewer', chain: 'Al Tazaj', name: 'Chicken Kabab Skewer', category: 'main', calories: 220, protein: 28, carbs: 6, fats: 9, price_sar: 14, estimated: true },
  { id: 'altazaj-hummus', chain: 'Al Tazaj', name: 'Hummus', category: 'side', calories: 180, protein: 6, carbs: 16, fats: 10, price_sar: 6, estimated: false },
  { id: 'altazaj-green-salad', chain: 'Al Tazaj', name: 'Green Salad', category: 'side', calories: 60, protein: 2, carbs: 10, fats: 1, price_sar: 6, estimated: false },
  { id: 'altazaj-rice-side', chain: 'Al Tazaj', name: 'Rice (Side)', category: 'side', calories: 310, protein: 6, carbs: 58, fats: 5, price_sar: 7, estimated: true },

  // ── Buffalo Wild Wings ─────────────────────────────────────────
  { id: 'bww-6-traditional', chain: 'Buffalo Wild Wings', name: 'Traditional Wings (6 pc)', category: 'main', calories: 430, protein: 36, carbs: 2, fats: 30, price_sar: 29, family: 'bww-traditional', units: 3, estimated: false },
  { id: 'bww-10-traditional', chain: 'Buffalo Wild Wings', name: 'Traditional Wings (10 pc)', category: 'main', calories: 720, protein: 60, carbs: 3, fats: 50, price_sar: 42, family: 'bww-traditional', units: 5, estimated: false },
  { id: 'bww-6-boneless', chain: 'Buffalo Wild Wings', name: 'Boneless Wings (6 pc)', category: 'main', calories: 490, protein: 29, carbs: 36, fats: 25, price_sar: 27, estimated: false },
  { id: 'bww-crispy-chicken-sandwich', chain: 'Buffalo Wild Wings', name: 'Crispy Chicken Sandwich', category: 'main', calories: 600, protein: 30, carbs: 54, fats: 29, price_sar: 32, estimated: false },
  { id: 'bww-fries', chain: 'Buffalo Wild Wings', name: 'French Fries', category: 'side', calories: 380, protein: 5, carbs: 49, fats: 18, price_sar: 13, estimated: false },
  { id: 'bww-carrots-celery', chain: 'Buffalo Wild Wings', name: 'Carrots & Celery', category: 'side', calories: 30, protein: 1, carbs: 6, fats: 0, price_sar: 6, estimated: false },

  // ── Birdlot ────────────────────────────────────────────────────
  { id: 'birdlot-classic-burger', chain: 'Birdlot', name: 'Classic Fried Chicken Burger', category: 'main', calories: 560, protein: 28, carbs: 48, fats: 28, price_sar: 26, estimated: true },
  { id: 'birdlot-spicy-burger', chain: 'Birdlot', name: 'Spicy Fried Chicken Burger', category: 'main', calories: 580, protein: 28, carbs: 49, fats: 30, price_sar: 27, estimated: true },
  { id: 'birdlot-tenders-3pc', chain: 'Birdlot', name: 'Chicken Tenders (3 pc)', category: 'main', calories: 400, protein: 30, carbs: 26, fats: 19, price_sar: 24, estimated: true },
  { id: 'birdlot-loaded-fries', chain: 'Birdlot', name: 'Loaded Fries', category: 'side', calories: 520, protein: 14, carbs: 56, fats: 26, price_sar: 19, estimated: true },
  { id: 'birdlot-fries', chain: 'Birdlot', name: 'French Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 15, price_sar: 11, estimated: true },

  // ── BROASTEDkey ────────────────────────────────────────────────
  { id: 'broastedkey-nashville-meal', chain: 'BROASTEDkey', name: 'Nashville Broasted Meal (3 pc with Fries)', category: 'main', calories: 780, protein: 42, carbs: 64, fats: 40, price_sar: 27, estimated: true },
  { id: 'broastedkey-nashville-sandwich', chain: 'BROASTEDkey', name: 'Nashville Broasted Sandwich', category: 'main', calories: 560, protein: 28, carbs: 50, fats: 27, price_sar: 19, estimated: true },
  { id: 'broastedkey-spicy-2pc', chain: 'BROASTEDkey', name: 'Spicy Broasted (2 pc)', category: 'main', calories: 490, protein: 34, carbs: 20, fats: 30, price_sar: 16, estimated: true },
  { id: 'broastedkey-strips-4pc', chain: 'BROASTEDkey', name: 'Chicken Strips (4 pc)', category: 'main', calories: 400, protein: 30, carbs: 26, fats: 19, price_sar: 18, estimated: true },
  { id: 'broastedkey-loaded-fries', chain: 'BROASTEDkey', name: 'Loaded Fries', category: 'side', calories: 480, protein: 12, carbs: 52, fats: 24, price_sar: 15, estimated: true },

  // ── Kantaka ────────────────────────────────────────────────────
  { id: 'kantaka-combo', chain: 'Kantaka', name: 'Kantaka Combo (3 pc Broast + 3 Strips + Fries + Bread)', category: 'main', calories: 1050, protein: 58, carbs: 92, fats: 48, price_sar: 23, estimated: true },
  { id: 'kantaka-broast-meal-2pc', chain: 'Kantaka', name: 'Broast Meal (2 pc with Fries)', category: 'main', calories: 650, protein: 36, carbs: 56, fats: 32, price_sar: 15, estimated: true },
  { id: 'kantaka-broast-sandwich', chain: 'Kantaka', name: 'Broast Sandwich', category: 'main', calories: 520, protein: 26, carbs: 48, fats: 25, price_sar: 12, estimated: true },
  { id: 'kantaka-strips-5pc', chain: 'Kantaka', name: 'Chicken Strips (5 pc)', category: 'main', calories: 480, protein: 36, carbs: 30, fats: 23, price_sar: 14, estimated: true },
  { id: 'kantaka-fries', chain: 'Kantaka', name: 'French Fries', category: 'side', calories: 300, protein: 4, carbs: 40, fats: 14, price_sar: 6, estimated: true },

  // ── Broast Line ────────────────────────────────────────────────
  { id: 'broastline-regular-meal', chain: 'Broast Line', name: 'Regular Broast Meal (2 pc with Fries + Bread)', category: 'main', calories: 700, protein: 38, carbs: 60, fats: 34, price_sar: 16, estimated: true },
  { id: 'broastline-spicy-meal', chain: 'Broast Line', name: 'Spicy Broast Meal (2 pc with Fries + Bread)', category: 'main', calories: 710, protein: 38, carbs: 60, fats: 35, price_sar: 16, estimated: true },
  { id: 'broastline-fish-steak', chain: 'Broast Line', name: 'Fish Steak Meal', category: 'main', calories: 560, protein: 30, carbs: 52, fats: 24, price_sar: 18, estimated: true },
  { id: 'broastline-sandwich', chain: 'Broast Line', name: 'Broast Sandwich', category: 'main', calories: 500, protein: 25, carbs: 46, fats: 24, price_sar: 11, estimated: true },
  { id: 'broastline-family-8pc', chain: 'Broast Line', name: 'Family Broast (8 pc, Chicken Only)', category: 'main', calories: 1400, protein: 104, carbs: 56, fats: 84, price_sar: 42, estimated: true },
  { id: 'broastline-coleslaw', chain: 'Broast Line', name: 'Coleslaw', category: 'side', calories: 130, protein: 1, carbs: 13, fats: 8, price_sar: 4, estimated: true },
];
