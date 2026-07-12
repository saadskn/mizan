// Fried & grilled chicken chains operating in Riyadh.
// Tier 1 (published nutrition): Albaik, KFC, Texas Chicken, Popeyes,
// Raising Cane's, Dave's Hot Chicken, Wingstop, Jollibee, Al Tazaj.
// Tier 2: Buffalo Wild Wings.

export default [
  // ── Albaik ─────────────────────────────────────────────────────
  // Rebuilt from HungerStation Malqa (2026-07). HS carries no calorie labels
  // for Albaik → composition estimates with real HS prices. Albaik meals
  // include fries/bun/sauce but NO drink, so they stay. Skipped: spicy
  // variants (identical composition to regular), sauces, all drinks.
  { id: 'albaik-big-baik', chain: 'Albaik', name: 'Big Baik Sandwich', category: 'main', calories: 690, protein: 38, carbs: 60, fats: 32, price_sar: 17.5, estimated: true },
  { id: 'albaik-bbq-baik', chain: 'Albaik', name: 'BBQ Baik Sandwich', category: 'main', calories: 520, protein: 25, carbs: 42, fats: 27, price_sar: 12.5, estimated: true },
  { id: 'albaik-chicken-fillet-burger', cuisine: 'burgers', chain: 'Albaik', name: 'Chicken Fillet Burger', category: 'main', calories: 400, protein: 20, carbs: 38, fats: 18, price_sar: 7, estimated: true },
  { id: 'albaik-chicken-fillet-sandwich', chain: 'Albaik', name: 'Chicken Fillet Sandwich (Wrap)', category: 'main', calories: 500, protein: 24, carbs: 50, fats: 23, price_sar: 10.5, estimated: true },
  { id: 'albaik-double-baik', chain: 'Albaik', name: 'Double Baik', category: 'main', calories: 615, protein: 34, carbs: 50, fats: 30, price_sar: 10.5, estimated: true },
  { id: 'albaik-saj-de-lite', chain: 'Albaik', name: 'Saj De Lite', category: 'main', calories: 430, protein: 28, carbs: 45, fats: 15, price_sar: 10.5, estimated: true },
  { id: 'albaik-shawerma', chain: 'Albaik', name: 'Albaik Shawerma', category: 'main', calories: 380, protein: 22, carbs: 42, fats: 14, price_sar: 8.5, estimated: true },
  { id: 'albaik-tawuk', chain: 'Albaik', name: 'Tawuk Sandwich', category: 'main', calories: 450, protein: 28, carbs: 46, fats: 16, price_sar: 10.5, estimated: true },
  { id: 'albaik-super-baik-grilled', chain: 'Albaik', name: 'Super Baik Grilled Chicken Roll', category: 'main', calories: 800, protein: 42, carbs: 75, fats: 36, price_sar: 19.5, estimated: true },
  { id: 'albaik-baikeez-burger', cuisine: 'burgers', chain: 'Albaik', name: 'Baikeez Burger with Lahaleebo Sauce', category: 'main', calories: 450, protein: 22, carbs: 44, fats: 20, price_sar: 10.5, estimated: true },
  { id: 'albaik-crispy-baik-fillet', chain: 'Albaik', name: 'Crispy Baik Fillet', category: 'main', calories: 430, protein: 20, carbs: 42, fats: 20, price_sar: 8, estimated: true },
  { id: 'albaik-double-crispy-baik', chain: 'Albaik', name: 'Double Crispy Baik', category: 'main', calories: 680, protein: 34, carbs: 58, fats: 34, price_sar: 15.5, estimated: true },
  { id: 'albaik-fish-fillet-burger', cuisine: 'burgers', chain: 'Albaik', name: 'Fish Fillet Burger', category: 'main', calories: 400, protein: 16, carbs: 42, fats: 18, price_sar: 8.5, estimated: true },
  { id: 'albaik-fish-fillet-sandwich', chain: 'Albaik', name: 'Fish Fillet Sandwich (Wrap)', category: 'main', calories: 480, protein: 20, carbs: 50, fats: 22, price_sar: 12, estimated: true },
  { id: 'albaik-shrimp-sandwich', chain: 'Albaik', name: 'Shrimp Sandwich', category: 'main', calories: 450, protein: 20, carbs: 48, fats: 19, price_sar: 16, estimated: true },
  { id: 'albaik-super-shrimp-sandwich', chain: 'Albaik', name: 'Super Shrimp Sandwich (8 pc Roll)', category: 'main', calories: 620, protein: 28, carbs: 65, fats: 27, price_sar: 24.5, estimated: true },
  { id: 'albaik-falafel-sandwich', chain: 'Albaik', name: 'Falafel Sandwich', category: 'main', calories: 480, protein: 12, carbs: 56, fats: 22, price_sar: 7.5, estimated: true },
  { id: 'albaik-egg-sandwich', chain: 'Albaik', name: 'Egg Sandwich', category: 'main', calories: 330, protein: 14, carbs: 34, fats: 15, price_sar: 7, estimated: true },
  { id: 'albaik-egg-cheese-sandwich', chain: 'Albaik', name: 'Egg Sandwich with Cheese', category: 'main', calories: 400, protein: 18, carbs: 35, fats: 20, price_sar: 8, estimated: true },
  { id: 'albaik-egg-chicken-cheese', chain: 'Albaik', name: 'Egg Sandwich with Chicken and Cheese', category: 'main', calories: 480, protein: 28, carbs: 36, fats: 24, price_sar: 9.5, estimated: true },
  { id: 'albaik-4pc-chicken-meal', chain: 'Albaik', name: '4 Piece Chicken Meal', category: 'main', calories: 1290, protein: 70, carbs: 95, fats: 70, price_sar: 22, family: 'albaik-chicken-meal', units: 4, estimated: true },
  { id: 'albaik-8pc-chicken-meal', chain: 'Albaik', name: '8 Piece Chicken Meal', category: 'main', calories: 2290, protein: 130, carbs: 150, fats: 130, price_sar: 42, family: 'albaik-chicken-meal', units: 8, estimated: true },
  { id: 'albaik-7pc-nuggets-meal', chain: 'Albaik', name: '7 Piece Chicken Nuggets Meal', category: 'main', calories: 800, protein: 35, carbs: 75, fats: 38, price_sar: 20, family: 'albaik-nuggets-meal', units: 7, estimated: true },
  { id: 'albaik-10pc-nuggets-meal', chain: 'Albaik', name: '10 Piece Chicken Nuggets Meal', category: 'main', calories: 950, protein: 45, carbs: 85, fats: 48, price_sar: 22, family: 'albaik-nuggets-meal', units: 10, estimated: true },
  { id: 'albaik-baikeez-breasts', chain: 'Albaik', name: 'Baikeez Chicken Breasts (5 pc with Chips)', category: 'main', calories: 750, protein: 45, carbs: 55, fats: 38, price_sar: 16.5, estimated: true },
  { id: 'albaik-fish-fillet-meal', chain: 'Albaik', name: 'Fish Fillet Meal (6 pc)', category: 'main', calories: 900, protein: 40, carbs: 90, fats: 42, price_sar: 30.5, estimated: true },
  { id: 'albaik-value-shrimp-meal', chain: 'Albaik', name: 'Value Shrimp Meal (10 pc)', category: 'main', calories: 850, protein: 35, carbs: 88, fats: 40, price_sar: 29.5, estimated: true },
  { id: 'albaik-jumbo-shrimp-meal', chain: 'Albaik', name: 'Jumbo Shrimp Meal (10 pc)', category: 'main', calories: 950, protein: 45, carbs: 90, fats: 44, price_sar: 38.5, estimated: true },
  { id: 'albaik-falafel-meal', chain: 'Albaik', name: 'Falafel Meal (10 pc with Fries)', category: 'main', calories: 800, protein: 20, carbs: 90, fats: 38, price_sar: 11, estimated: true },
  { id: 'albaik-falafel-nuggets', chain: 'Albaik', name: 'Falafel Nuggets (10 pc)', category: 'side', calories: 520, protein: 14, carbs: 50, fats: 28, price_sar: 8, estimated: true },
  { id: 'albaik-fillet-nugget-snacks', chain: 'Albaik', name: 'Fillet Nugget Snacks (5 pc)', category: 'side', calories: 330, protein: 20, carbs: 22, fats: 17, price_sar: 7, estimated: true },
  { id: 'albaik-corn-cup', chain: 'Albaik', name: 'Corn in a Cup', category: 'side', calories: 185, protein: 5, carbs: 30, fats: 5, price_sar: 8, estimated: true },
  { id: 'albaik-corn-cob', chain: 'Albaik', name: 'Corn on the Cob with Butter', category: 'side', calories: 220, protein: 5, carbs: 32, fats: 8, price_sar: 8, estimated: true },
  { id: 'albaik-fries-garlic', chain: 'Albaik', name: 'Fries with Garlic Sauce', category: 'side', calories: 430, protein: 4, carbs: 48, fats: 24, price_sar: 8, estimated: true },
  { id: 'albaik-chips', chain: 'Albaik', name: 'Albaik Chips', category: 'side', calories: 320, protein: 3, carbs: 36, fats: 18, price_sar: 7, estimated: true },
  { id: 'albaik-fries', chain: 'Albaik', name: 'French Fries', category: 'side', calories: 350, protein: 4, carbs: 45, fats: 17, price_sar: 7, estimated: true },
  { id: 'albaik-crunchy-fries', chain: 'Albaik', name: 'Crunchy Fries', category: 'side', calories: 380, protein: 4, carbs: 46, fats: 20, price_sar: 8, estimated: true },
  { id: 'albaik-coleslaw', chain: 'Albaik', name: 'Coleslaw Salad', category: 'side', calories: 150, protein: 1, carbs: 12, fats: 11, price_sar: 7, estimated: true },
  { id: 'albaik-hummus', chain: 'Albaik', name: 'Hummus with Bun', category: 'side', calories: 330, protein: 10, carbs: 36, fats: 17, price_sar: 7, estimated: true },
  { id: 'albaik-bread-buns', chain: 'Albaik', name: 'Bread Buns (2 pc)', category: 'side', calories: 220, protein: 7, carbs: 42, fats: 3, price_sar: 2, estimated: true },
  { id: 'albaik-maamoul', chain: 'Albaik', name: 'Albaik Maamoul (2 pc)', category: 'dessert', calories: 150, protein: 2, carbs: 24, fats: 5, price_sar: 1.5, estimated: true },

  // ── KFC ────────────────────────────────────────────────────────
  // KFC à la carte reconciled against HungerStation SFDA labels (2026-07),
  // which match KFC Arabia's published values (Zinger 613, Mighty Zinger 920,
  // Twister 683 — the old entries carried smaller US-recipe numbers). All
  // combos/boxes/buckets include drinks and are excluded; Captain Nacho line
  // is a "New!" promo; spicy fries med/large/family labels are blind-filled
  // (740/921/1711 vs plain 332/415/771); coleslaw "445" at both sizes rejected
  // (KFC published small ≈130 kept).
  { id: 'kfc-zinger', chain: 'KFC', name: 'Zinger Sandwich', category: 'main', calories: 613, protein: 30, carbs: 50, fats: 33, price_sar: 26, estimated: true },
  { id: 'kfc-mighty-zinger', chain: 'KFC', name: 'Mighty Zinger', category: 'main', calories: 920, protein: 45, carbs: 62, fats: 55, price_sar: 31, estimated: true },
  { id: 'kfc-twister', chain: 'KFC', name: 'Twister Wrap', category: 'main', calories: 683, protein: 26, carbs: 55, fats: 40, price_sar: 19, estimated: true },
  { id: 'kfc-loaded-twister', chain: 'KFC', name: 'Loaded Twister', category: 'main', calories: 905, protein: 32, carbs: 70, fats: 55, price_sar: 22, estimated: true },
  { id: 'kfc-mighty-cruncher', chain: 'KFC', name: 'Mighty Cruncher', category: 'main', calories: 642, protein: 28, carbs: 55, fats: 35, price_sar: 16, estimated: true },
  { id: 'kfc-raheeb-original', cuisine: 'burgers', chain: 'KFC', name: 'Burger Raheeb (Original)', category: 'main', calories: 342, protein: 16, carbs: 40, fats: 13, price_sar: 8, estimated: true },
  { id: 'kfc-raheeb-spicy', cuisine: 'burgers', chain: 'KFC', name: 'Burger Raheeb (Spicy)', category: 'main', calories: 411, protein: 16, carbs: 44, fats: 19, price_sar: 8, estimated: true },
  { id: 'kfc-2pc-original', chain: 'KFC', name: '2-Piece Chicken (Original Recipe)', category: 'main', calories: 480, protein: 36, carbs: 16, fats: 30, price_sar: 15, estimated: false },
  { id: 'kfc-3pc-spicy', chain: 'KFC', name: '3-Piece Chicken (Spicy)', category: 'main', calories: 720, protein: 54, carbs: 24, fats: 45, price_sar: 21, estimated: false },
  { id: 'kfc-strips-3pc', chain: 'KFC', name: 'Chicken Strips (3 pc)', category: 'side', calories: 330, protein: 27, carbs: 20, fats: 15, price_sar: 15, estimated: false },
  { id: 'kfc-rizo', chain: 'KFC', name: 'Rizo (Chicken Rice Bowl)', category: 'main', calories: 460, protein: 22, carbs: 60, fats: 14, price_sar: 14, estimated: false },
  { id: 'kfc-fries-medium', chain: 'KFC', name: 'French Fries (Medium)', category: 'side', calories: 332, protein: 4, carbs: 41, fats: 17, price_sar: 13, estimated: true },
  { id: 'kfc-fries-large', chain: 'KFC', name: 'French Fries (Large)', category: 'side', calories: 415, protein: 5, carbs: 51, fats: 21, price_sar: 15, estimated: true },
  { id: 'kfc-fries-family', chain: 'KFC', name: 'French Fries (Family)', category: 'side', calories: 771, protein: 9, carbs: 95, fats: 39, price_sar: 21, estimated: true },
  { id: 'kfc-spicy-fries-regular', chain: 'KFC', name: 'Spicy Fries (Regular)', category: 'side', calories: 271, protein: 3, carbs: 34, fats: 13, price_sar: 10, estimated: true },
  { id: 'kfc-coleslaw', chain: 'KFC', name: 'Coleslaw', category: 'side', calories: 130, protein: 1, carbs: 14, fats: 8, price_sar: 8, estimated: false },
  { id: 'kfc-cookie', chain: 'KFC', name: 'Chocolate Chip Cookie', category: 'dessert', calories: 200, protein: 2, carbs: 28, fats: 9, price_sar: 5, estimated: false },

  // ── Texas Chicken ──────────────────────────────────────────────
  // Price audit vs HS Malqa 2026-07: removed items not sold standalone on HS
  // (spicy sandwich, 2pc chicken, 3pc tenders, honey butter biscuit); fries and
  // mashed re-anchored to HS SFDA labels. Wings/Chili Cheese line under
  // "What's New"/"Promotion" = promo, skipped; cookies have no labels.
  { id: 'texas-mexicana-burger', chain: 'Texas Chicken', name: 'Mexicana Sandwich', category: 'main', calories: 580, protein: 28, carbs: 52, fats: 28, price_sar: 31, estimated: true },
  { id: 'texas-fries-medium', chain: 'Texas Chicken', name: 'French Fries (Medium)', category: 'side', calories: 370, protein: 5, carbs: 46, fats: 18, price_sar: 12, estimated: true },
  { id: 'texas-fries-large', chain: 'Texas Chicken', name: 'French Fries (Large)', category: 'side', calories: 530, protein: 7, carbs: 66, fats: 26, price_sar: 15, estimated: true },
  { id: 'texas-mashed-potatoes', chain: 'Texas Chicken', name: 'Mashed Potatoes with Gravy (Regular)', category: 'side', calories: 103, protein: 2, carbs: 16, fats: 3, price_sar: 9, estimated: true },
  { id: 'texas-mashed-potatoes-large', chain: 'Texas Chicken', name: 'Mashed Potatoes with Gravy (Large)', category: 'side', calories: 291, protein: 6, carbs: 45, fats: 9, price_sar: 17, estimated: true },
  { id: 'texas-apple-pie', chain: 'Texas Chicken', name: 'Apple Pie', category: 'dessert', calories: 263, protein: 2, carbs: 37, fats: 11, price_sar: 9, estimated: true },
  // HungerStation menu expansion (2026-07): SFDA calorie labels, estimated macros.
  { id: 'texas-texan-sandwich', chain: 'Texas Chicken', name: 'Texan Chicken Sandwich', category: 'main', calories: 620, protein: 30, carbs: 56, fats: 30, price_sar: 25, estimated: true },
  { id: 'texas-supreme-sandwich', chain: 'Texas Chicken', name: 'Tex Supreme Sandwich', category: 'main', calories: 680, protein: 32, carbs: 58, fats: 36, price_sar: 28, estimated: true },
  { id: 'texas-chicken-crunch', chain: 'Texas Chicken', name: 'Chicken Crunch Sandwich', category: 'main', calories: 480, protein: 22, carbs: 46, fats: 24, price_sar: 13, estimated: true },
  { id: 'texas-tex-wrap', chain: 'Texas Chicken', name: 'Tex Wrap Original', category: 'main', calories: 405, protein: 24, carbs: 38, fats: 17, price_sar: 21, estimated: true },
  { id: 'texas-jalapeno-wrap', chain: 'Texas Chicken', name: 'Crunchy Jalapeno Wrap', category: 'main', calories: 470, protein: 26, carbs: 42, fats: 22, price_sar: 26, estimated: true },
  { id: 'texas-garlic-flatbread', chain: 'Texas Chicken', name: 'Creamy Garlic Flatbread', category: 'main', calories: 420, protein: 24, carbs: 40, fats: 18, price_sar: 13, estimated: true },
  { id: 'texas-chicken-rice-deal', chain: 'Texas Chicken', name: 'Chicken Rice Deal (2 pc)', category: 'main', calories: 865, protein: 52, carbs: 90, fats: 32, price_sar: 37, estimated: true },
  { id: 'texas-tenders-rice-deal', chain: 'Texas Chicken', name: 'Tenders Rice Deal (3 pc)', category: 'main', calories: 953, protein: 50, carbs: 110, fats: 34, price_sar: 33, estimated: true },
  { id: 'texas-1pc-spicy', chain: 'Texas Chicken', name: '1-Piece Fried Chicken (Spicy)', category: 'side', calories: 320, protein: 24, carbs: 12, fats: 19, price_sar: 12, estimated: true },
  { id: 'texas-mega-bites', chain: 'Texas Chicken', name: 'Mega Bites (8 pc)', category: 'side', calories: 316, protein: 20, carbs: 22, fats: 16, price_sar: 14, estimated: true },
  { id: 'texas-jalapeno-bombers', chain: 'Texas Chicken', name: 'Jalapeno Cheese Bombers (5 pc)', category: 'side', calories: 252, protein: 8, carbs: 24, fats: 14, price_sar: 14, estimated: true },
  { id: 'texas-chili-fries', chain: 'Texas Chicken', name: 'Tex Chili Fries', category: 'side', calories: 490, protein: 12, carbs: 52, fats: 26, price_sar: 16, estimated: true },
  { id: 'texas-mozzarella-sticks', chain: 'Texas Chicken', name: 'Mozzarella Sticks (3 pc)', category: 'side', calories: 357, protein: 14, carbs: 30, fats: 20, price_sar: 14, estimated: true },
  { id: 'texas-coleslaw', chain: 'Texas Chicken', name: 'Coleslaw (Regular)', category: 'side', calories: 148, protein: 1, carbs: 12, fats: 10, price_sar: 9, estimated: true },
  { id: 'texas-tex-rice-chicken', chain: 'Texas Chicken', name: 'Chicken Tex Rice', category: 'side', calories: 398, protein: 18, carbs: 56, fats: 11, price_sar: 17, estimated: true },
  { id: 'texas-yellow-rice', chain: 'Texas Chicken', name: 'Tex Yellow Rice', category: 'side', calories: 250, protein: 5, carbs: 48, fats: 4, price_sar: 11, estimated: true },

  // ── Popeyes ────────────────────────────────────────────────────
  // Rebuilt 2026-07 from real HS menu (Malqa, /62318) — old block used US
  // nutrition with fabricated prices (apple pie not sold here). Only two HS
  // anchors: The Sandwich 551, Deluxe Sandwich 783; rest composition-estimated
  // around them (estimated:true). Skipped: World Cup boxes (LTO), every Meal/
  // Combo/Box (drink included), kids meals (juice), family & gathering
  // bundles, sauces, drinks. Spicy variants share the mild macros/price —
  // listed once. Chicken Saver Meal kept (2pc + fries + biscuit, no drink).
  { id: 'popeyes-the-sandwich', chain: 'Popeyes', name: 'The Sandwich (Chicken)', category: 'main', calories: 551, protein: 28, carbs: 48, fats: 28, price_sar: 27, estimated: true },
  { id: 'popeyes-deluxe-sandwich', chain: 'Popeyes', name: 'Deluxe Chicken Sandwich', category: 'main', calories: 783, protein: 32, carbs: 52, fats: 48, price_sar: 29, estimated: true },
  { id: 'popeyes-slaw-sandwich', chain: 'Popeyes', name: 'Chicken Slaw Sandwich', category: 'main', calories: 610, protein: 28, carbs: 50, fats: 32, price_sar: 29, estimated: true },
  { id: 'popeyes-tower-deluxe', chain: 'Popeyes', name: 'Cajun Crunchy Tower Deluxe', category: 'main', calories: 920, protein: 42, carbs: 60, fats: 55, price_sar: 36, estimated: true },
  { id: 'popeyes-tower-slaw', chain: 'Popeyes', name: 'Cajun Crunchy Tower Slaw', category: 'main', calories: 880, protein: 40, carbs: 58, fats: 52, price_sar: 35, estimated: true },
  { id: 'popeyes-mega-wrap', chain: 'Popeyes', name: 'Mega Chicken Wrap', category: 'main', calories: 560, protein: 30, carbs: 52, fats: 26, price_sar: 22, estimated: true, family: 'popeyes-mega-wrap', units: 1 },
  { id: 'popeyes-2-mega-wraps', chain: 'Popeyes', name: '2 Mega Chicken Wraps', category: 'main', calories: 1120, protein: 60, carbs: 104, fats: 52, price_sar: 36, estimated: true, family: 'popeyes-mega-wrap', units: 2 },
  { id: 'popeyes-mini-wrap', chain: 'Popeyes', name: 'Mini Wrap (Tender)', category: 'main', calories: 280, protein: 14, carbs: 30, fats: 12, price_sar: 11, estimated: true },
  { id: 'popeyes-shawarma-classic', cuisine: 'shawarma', chain: 'Popeyes', name: 'Cajun Shawarma Classic', category: 'main', calories: 450, protein: 24, carbs: 45, fats: 20, price_sar: 18, estimated: true },
  { id: 'popeyes-shawarma-deluxe', cuisine: 'shawarma', chain: 'Popeyes', name: 'Cajun Shawarma Deluxe', category: 'main', calories: 520, protein: 24, carbs: 50, fats: 25, price_sar: 19, estimated: true },
  { id: 'popeyes-chicken-saver', chain: 'Popeyes', name: 'Chicken Saver Meal (2 pc + Fries + Biscuit)', category: 'main', calories: 1150, protein: 52, carbs: 93, fats: 64, price_sar: 26, estimated: true },
  { id: 'popeyes-chicken-bites', chain: 'Popeyes', name: 'Chicken Bites', category: 'side', calories: 430, protein: 28, carbs: 28, fats: 22, price_sar: 19, estimated: true },
  { id: 'popeyes-kabsa-popcorn-reg', chain: 'Popeyes', name: 'Cajun Kabsa Rice with Popcorn Chicken (Regular)', category: 'main', calories: 540, protein: 22, carbs: 70, fats: 18, price_sar: 19, estimated: true, family: 'popeyes-kabsa-popcorn', units: 1 },
  { id: 'popeyes-kabsa-popcorn-lg', chain: 'Popeyes', name: 'Cajun Kabsa Rice with Popcorn Chicken (Large)', category: 'main', calories: 790, protein: 32, carbs: 102, fats: 27, price_sar: 25, estimated: true, family: 'popeyes-kabsa-popcorn', units: 1.5 },
  { id: 'popeyes-kabsa-rice-reg', chain: 'Popeyes', name: 'Cajun Kabsa Rice (Regular)', category: 'side', calories: 330, protein: 6, carbs: 60, fats: 7, price_sar: 8, estimated: true, family: 'popeyes-kabsa-rice', units: 1 },
  { id: 'popeyes-kabsa-rice-lg', chain: 'Popeyes', name: 'Cajun Kabsa Rice (Large)', category: 'side', calories: 490, protein: 9, carbs: 90, fats: 10, price_sar: 12, estimated: true, family: 'popeyes-kabsa-rice', units: 1.5 },
  { id: 'popeyes-cajun-fries', chain: 'Popeyes', name: 'Cajun Fries', category: 'side', calories: 350, protein: 4, carbs: 43, fats: 17, price_sar: 12, estimated: true },
  { id: 'popeyes-cheesy-fries', chain: 'Popeyes', name: 'Cheesy Cajun Fries', category: 'side', calories: 450, protein: 7, carbs: 48, fats: 24, price_sar: 15, estimated: true },
  { id: 'popeyes-mashed-potato', chain: 'Popeyes', name: 'Mashed Potato with Cajun Gravy', category: 'side', calories: 130, protein: 3, carbs: 18, fats: 5, price_sar: 12, estimated: true },
  { id: 'popeyes-coleslaw', chain: 'Popeyes', name: 'Coleslaw', category: 'side', calories: 220, protein: 2, carbs: 15, fats: 17, price_sar: 12, estimated: true },
  { id: 'popeyes-biscuit', chain: 'Popeyes', name: 'Buttermilk Biscuit', category: 'side', calories: 260, protein: 4, carbs: 26, fats: 15, price_sar: 4, estimated: true },
  { id: 'popeyes-beignets-chocolate', chain: 'Popeyes', name: 'French Beignets (Chocolate)', category: 'dessert', calories: 380, protein: 6, carbs: 48, fats: 18, price_sar: 15, estimated: true },

  // ── Raising Cane's ─────────────────────────────────────────────
  // Rebuilt 2026-07 from HS Malqa /85521 — old 3/4/6-finger à la carte items
  // were fabricated: HS only sells fingers per piece (7 SR) or inside drink
  // combos. Labels self-check (Sandwich 740 ≈ 3×130 fingers + bun + sauce;
  // Box Combo 1190 ≈ 4×130 + fries 360 + toast 120 + slaw 110 + sauce 150).
  // Skipped: all Combos incl. kids (drink included), Match Day Meal (LTO
  // sharing), Party Platters/pan (feeds 6-8), sauces, drinks.
  { id: 'canes-sandwich', chain: "Raising Cane's", name: "The Sandwich (3 fingers)", category: 'main', calories: 740, protein: 42, carbs: 55, fats: 40, price_sar: 33, estimated: true },
  { id: 'canes-chicken-finger', chain: "Raising Cane's", name: 'Chicken Finger (Per Piece)', category: 'side', calories: 130, protein: 12, carbs: 6, fats: 6, price_sar: 7, estimated: true },
  { id: 'canes-crinkle-fries', chain: "Raising Cane's", name: 'Crinkle Cut Fries', category: 'side', calories: 360, protein: 5, carbs: 45, fats: 17, price_sar: 16, estimated: true },
  { id: 'canes-texas-toast', chain: "Raising Cane's", name: 'Texas Toast', category: 'side', calories: 120, protein: 3, carbs: 15, fats: 5, price_sar: 7, estimated: true },
  { id: 'canes-coleslaw', chain: "Raising Cane's", name: 'Coleslaw', category: 'side', calories: 110, protein: 1, carbs: 8, fats: 8, price_sar: 7, estimated: true },

  // ── Dave's Hot Chicken ─────────────────────────────────────────
  // Rebuilt 2026-07 from real HS menu (Malqa, /106488) — old prices/portions were off.
  // HS calorie labels anchored; macros back-computed (estimated:true).
  // Skipped: Hot Boxes (10-40 pc + Box of Fries for 4 — sharing), sauces, drinks,
  // Hot Honey Teriyaki saucy bites (no label).
  { id: 'daves-1', chain: "Dave's Hot Chicken", name: "Dave's #1 (2 Tenders with Fries)", category: 'main', calories: 1230, protein: 70, carbs: 110, fats: 55, price_sar: 56, estimated: true },
  { id: 'daves-2', chain: "Dave's Hot Chicken", name: "Dave's #2 (2 Sliders with Fries)", category: 'main', calories: 1500, protein: 65, carbs: 140, fats: 75, price_sar: 63, estimated: true },
  { id: 'daves-3', chain: "Dave's Hot Chicken", name: "Dave's #3 (1 Slider + 1 Tender with Fries)", category: 'main', calories: 1370, protein: 60, carbs: 130, fats: 67, price_sar: 61, estimated: true },
  { id: 'daves-4', chain: "Dave's Hot Chicken", name: "Dave's #4 (1 Slider with Fries)", category: 'main', calories: 1060, protein: 45, carbs: 105, fats: 51, price_sar: 41, estimated: true },
  { id: 'daves-slider', chain: "Dave's Hot Chicken", name: 'Single Slider', category: 'main', calories: 620, protein: 31, carbs: 51, fats: 32, price_sar: 29, estimated: true },
  { id: 'daves-single-tender', chain: "Dave's Hot Chicken", name: 'Single Tender', category: 'main', calories: 490, protein: 28, carbs: 38, fats: 25, price_sar: 24, estimated: true },
  { id: 'daves-bites-10pc', chain: "Dave's Hot Chicken", name: "Dave's Bites (10 pc)", category: 'main', calories: 650, protein: 45, carbs: 54, fats: 28, price_sar: 38, estimated: true },
  { id: 'daves-saucy-buffalo', chain: "Dave's Hot Chicken", name: 'Saucy Bites Spicy Buffalo (10 pc)', category: 'main', calories: 670, protein: 42, carbs: 52, fats: 32, price_sar: 38, estimated: true },
  { id: 'daves-saucy-bbq', chain: "Dave's Hot Chicken", name: 'Saucy Bites Spicy BBQ (10 pc)', category: 'main', calories: 810, protein: 42, carbs: 75, fats: 38, price_sar: 38, estimated: true },
  { id: 'daves-saucy-hot-honey', chain: "Dave's Hot Chicken", name: "Saucy Bites Mike's Hot Honey (10 pc)", category: 'main', calories: 920, protein: 42, carbs: 95, fats: 41, price_sar: 38, estimated: true },
  { id: 'daves-hot-mozz-1pc', chain: "Dave's Hot Chicken", name: 'Hot Mozz (1 pc)', category: 'main', calories: 410, protein: 14, carbs: 35, fats: 24, price_sar: 12, family: 'daves-hot-mozz', units: 1, estimated: true },
  { id: 'daves-hot-mozz-3pc', chain: "Dave's Hot Chicken", name: 'Hot Mozz (3 pc)', category: 'main', calories: 1090, protein: 38, carbs: 95, fats: 62, price_sar: 30, family: 'daves-hot-mozz', units: 3, estimated: true },
  { id: 'daves-hot-mozz-5pc', chain: "Dave's Hot Chicken", name: 'Hot Mozz (5 pc)', category: 'main', calories: 1780, protein: 62, carbs: 155, fats: 102, price_sar: 50, family: 'daves-hot-mozz', units: 5, estimated: true },
  { id: 'daves-mozz-slider', chain: "Dave's Hot Chicken", name: 'Hot Mozz Single Slider', category: 'main', calories: 430, protein: 18, carbs: 40, fats: 22, price_sar: 25, estimated: true },
  { id: 'daves-buffalo-loaded-fries', chain: "Dave's Hot Chicken", name: 'Buffalo Mac & Cheese Top Loaded Fries', category: 'side', calories: 1720, protein: 60, carbs: 160, fats: 95, price_sar: 48, family: 'daves-buffalo-loaded-fries', units: 2, estimated: true },
  { id: 'daves-buffalo-loaded-fries-small', chain: "Dave's Hot Chicken", name: 'Buffalo Mac & Cheese Top Loaded Fries (Small)', category: 'side', calories: 900, protein: 32, carbs: 85, fats: 48, price_sar: 28, family: 'daves-buffalo-loaded-fries', units: 1, estimated: true },
  { id: 'daves-top-loaded-fries', chain: "Dave's Hot Chicken", name: 'Top Loaded Fries', category: 'side', calories: 980, protein: 35, carbs: 93, fats: 52, price_sar: 38, family: 'daves-top-loaded-fries', units: 1.4, estimated: true },
  { id: 'daves-top-loaded-fries-small', chain: "Dave's Hot Chicken", name: 'Top Loaded Fries (Small)', category: 'side', calories: 700, protein: 25, carbs: 65, fats: 38, price_sar: 23, family: 'daves-top-loaded-fries', units: 1, estimated: true },
  { id: 'daves-fries', chain: "Dave's Hot Chicken", name: 'Fries', category: 'side', calories: 440, protein: 5, carbs: 56, fats: 21, price_sar: 20, estimated: true },
  { id: 'daves-cheese-fries', chain: "Dave's Hot Chicken", name: 'Cheese Fries', category: 'side', calories: 450, protein: 10, carbs: 55, fats: 21, price_sar: 25, estimated: true },
  { id: 'daves-mac-cheese', chain: "Dave's Hot Chicken", name: 'Mac and Cheese', category: 'side', calories: 290, protein: 10, carbs: 30, fats: 14, price_sar: 19, estimated: true },
  { id: 'daves-kale-slaw', chain: "Dave's Hot Chicken", name: 'Kale Slaw', category: 'side', calories: 270, protein: 3, carbs: 17, fats: 21, price_sar: 20, estimated: true },

  // ── Wingstop ───────────────────────────────────────────────────
  // Rebuilt 2026-07 from HS Malqa /153374 — old block was US-menu based
  // (per-flavor wings, veggie sticks, plain cheese fries: none sold à la
  // carte here; KSA platters are flavour-choice with one shared label).
  // Boneless labels self-check at ~56 cal/pc across 6/8/10; wings ~56/pc.
  // 10pc wings platter shows junk "1 Calories" — 558 taken from its meal
  // label (meal labels count chicken only: boneless meal 338 ≈ platter 337).
  // Tenders derived at 116/pc from the consistent meal labels (3pc→348,
  // 5pc→580); the 3pc platter's 580 label is a copy of the 5pc figure.
  // Skipped: FIFA platters + 24/48/100pc platters (sharing), all Meals/
  // Little Champs (drink included), Make It A Feast (drink bundles),
  // Seasoned Fries (0-SR listing), dips, drinks.
  { id: 'wingstop-6-boneless', chain: 'Wingstop', name: '6 Pcs Boneless Chicken', category: 'main', calories: 337, protein: 30, carbs: 16, fats: 17, price_sar: 34, estimated: true, family: 'wingstop-boneless', units: 6 },
  { id: 'wingstop-8-boneless', chain: 'Wingstop', name: '8 Pcs Boneless Chicken', category: 'main', calories: 450, protein: 40, carbs: 21, fats: 23, price_sar: 39, estimated: true, family: 'wingstop-boneless', units: 8 },
  { id: 'wingstop-10-boneless', chain: 'Wingstop', name: '10 Pcs Boneless Chicken', category: 'main', calories: 563, protein: 50, carbs: 27, fats: 28, price_sar: 44, estimated: true, family: 'wingstop-boneless', units: 10 },
  { id: 'wingstop-6-wings', chain: 'Wingstop', name: '6 Pcs Wings', category: 'main', calories: 335, protein: 28, carbs: 6, fats: 22, price_sar: 34, estimated: true, family: 'wingstop-wings', units: 6 },
  { id: 'wingstop-8-wings', chain: 'Wingstop', name: '8 Pcs Wings', category: 'main', calories: 447, protein: 37, carbs: 8, fats: 29, price_sar: 39, estimated: true, family: 'wingstop-wings', units: 8 },
  { id: 'wingstop-10-wings', chain: 'Wingstop', name: '10 Pcs Wings', category: 'main', calories: 558, protein: 46, carbs: 10, fats: 37, price_sar: 44, estimated: true, family: 'wingstop-wings', units: 10 },
  { id: 'wingstop-3-tenders', chain: 'Wingstop', name: '3 Pcs Chicken Tenders', category: 'main', calories: 348, protein: 24, carbs: 20, fats: 19, price_sar: 34, estimated: true, family: 'wingstop-tenders', units: 3 },
  { id: 'wingstop-5-tenders', chain: 'Wingstop', name: '5 Pcs Chicken Tenders', category: 'main', calories: 580, protein: 40, carbs: 33, fats: 31, price_sar: 44, estimated: true, family: 'wingstop-tenders', units: 5 },
  { id: 'wingstop-loaded-cheese-fries', chain: 'Wingstop', name: 'Loaded Cheese Fries', category: 'side', calories: 857, protein: 18, carbs: 90, fats: 45, price_sar: 22, estimated: true },
  { id: 'wingstop-loaded-buffalo-fries', chain: 'Wingstop', name: 'Loaded Buffalo Fries', category: 'side', calories: 901, protein: 19, carbs: 92, fats: 51, price_sar: 24, estimated: true },
  { id: 'wingstop-loaded-voodoo-fries', chain: 'Wingstop', name: 'Loaded Voodoo Fries', category: 'side', calories: 994, protein: 20, carbs: 104, fats: 56, price_sar: 24, estimated: true },
  { id: 'wingstop-big-flavor-burger', cuisine: 'burgers', chain: 'Wingstop', name: 'Big Flavor Burger', category: 'main', calories: 720, protein: 35, carbs: 60, fats: 38, price_sar: 39, estimated: true },
  { id: 'wingstop-6-churros', chain: 'Wingstop', name: '6 Piece Churros', category: 'dessert', calories: 386, protein: 5, carbs: 52, fats: 17, price_sar: 21, estimated: true, family: 'wingstop-churros', units: 6 },
  { id: 'wingstop-10-churros', chain: 'Wingstop', name: '10 Piece Churros', category: 'dessert', calories: 643, protein: 8, carbs: 87, fats: 28, price_sar: 26, estimated: true, family: 'wingstop-churros', units: 10 },

  // ── Jollibee ───────────────────────────────────────────────────
  // Rebuilt 2026-07 from HS Malqa /52220 — old block was fabricated (no 1pc
  // Chickenjoy à la carte on HS; 2pc is 27 SR plated with rice+gravy, not 20).
  // Calories are HS labels; macros back-computed (estimated:true). Spicy/mix
  // variants share the mild label+price — listed once. Skipped: all "Meal"
  // rows (drink included; most carry junk "1 Calories" labels anyway), 6pc/8pc
  // buckets + Spg Pans + Burgersteak Pans + Family Fries (sharing sizes),
  // sauces/dips, drinks.
  { id: 'jollibee-2pc-chickenjoy', chain: 'Jollibee', name: '2 Pcs Chickenjoy (rice & gravy)', category: 'main', calories: 722, protein: 48, carbs: 60, fats: 32, price_sar: 27, estimated: true },
  { id: 'jollibee-2pc-chickenjoy-combo', chain: 'Jollibee', name: '2pcs Chickenjoy Combo (fries, bun & dip)', category: 'main', calories: 1023, protein: 52, carbs: 90, fats: 50, price_sar: 30, estimated: true },
  { id: 'jollibee-chickenjoy-spaghetti', chain: 'Jollibee', name: 'Chickenjoy Spaghetti (1 pc)', category: 'main', calories: 542, protein: 30, carbs: 50, fats: 24, price_sar: 30, estimated: true, family: 'jollibee-cj-spaghetti', units: 1 },
  { id: 'jollibee-2pc-chickenjoy-spaghetti', chain: 'Jollibee', name: '2 Pcs Chickenjoy Spaghetti', category: 'main', calories: 794, protein: 48, carbs: 60, fats: 40, price_sar: 37, estimated: true, family: 'jollibee-cj-spaghetti', units: 1.46 },
  { id: 'jollibee-jolliburger-classic', cuisine: 'burgers', chain: 'Jollibee', name: 'Jolliburger Classic Single Patty', category: 'main', calories: 469, protein: 24, carbs: 36, fats: 24, price_sar: 18, estimated: true, family: 'jollibee-jolliburger-classic', units: 1 },
  { id: 'jollibee-jolliburger-classic-double', cuisine: 'burgers', chain: 'Jollibee', name: 'Jolliburger Classic Double Patty', category: 'main', calories: 666, protein: 39, carbs: 38, fats: 38, price_sar: 21, estimated: true, family: 'jollibee-jolliburger-classic', units: 1.42 },
  { id: 'jollibee-jolliburger-deluxe', cuisine: 'burgers', chain: 'Jollibee', name: 'Jolliburger Deluxe Single Patty', category: 'main', calories: 513, protein: 25, carbs: 38, fats: 29, price_sar: 20, estimated: true, family: 'jollibee-jolliburger-deluxe', units: 1 },
  { id: 'jollibee-jolliburger-deluxe-double', cuisine: 'burgers', chain: 'Jollibee', name: 'Jolliburger Deluxe Double Patty', category: 'main', calories: 695, protein: 40, carbs: 40, fats: 41, price_sar: 24, estimated: true, family: 'jollibee-jolliburger-deluxe', units: 1.35 },
  { id: 'jollibee-regular-yum', chain: 'Jollibee', name: 'Regular Yum', category: 'main', calories: 322, protein: 14, carbs: 33, fats: 14, price_sar: 8, estimated: true, family: 'jollibee-yum', units: 1 },
  { id: 'jollibee-regular-yum-cheese', chain: 'Jollibee', name: 'Regular Yum W/ Cheese', category: 'main', calories: 343, protein: 16, carbs: 33, fats: 16, price_sar: 11, estimated: true, family: 'jollibee-yum', units: 1.07 },
  { id: 'jollibee-spaghetti', chain: 'Jollibee', name: 'Jolly Spaghetti', category: 'main', calories: 288, protein: 11, carbs: 45, fats: 7, price_sar: 15, estimated: true },
  { id: 'jollibee-4pc-nuggets', chain: 'Jollibee', name: '4 Pcs Chicken Nuggets', category: 'side', calories: 154, protein: 10, carbs: 9, fats: 8.5, price_sar: 9, estimated: true, family: 'jollibee-nuggets', units: 4 },
  { id: 'jollibee-6pc-nuggets', chain: 'Jollibee', name: '6 Pcs Chicken Nuggets', category: 'side', calories: 231, protein: 15, carbs: 14, fats: 13, price_sar: 13, estimated: true, family: 'jollibee-nuggets', units: 6 },
  { id: 'jollibee-9pc-nuggets', chain: 'Jollibee', name: '9 Pcs Chicken Nuggets', category: 'main', calories: 347, protein: 22, carbs: 21, fats: 19, price_sar: 19, estimated: true, family: 'jollibee-nuggets', units: 9 },
  { id: 'jollibee-15pc-nuggets', chain: 'Jollibee', name: '15 Pcs Chicken Nuggets', category: 'main', calories: 578, protein: 37, carbs: 35, fats: 32, price_sar: 30, estimated: true, family: 'jollibee-nuggets', units: 15 },
  { id: 'jollibee-4pc-nuggets-spicy', chain: 'Jollibee', name: '4 Pcs Chicken Nuggets Spicy', category: 'side', calories: 214, protein: 10, carbs: 11, fats: 14, price_sar: 9, estimated: true, family: 'jollibee-nuggets-spicy', units: 4 },
  { id: 'jollibee-6pc-nuggets-spicy', chain: 'Jollibee', name: '6 Pcs Chicken Nuggets Spicy', category: 'side', calories: 322, protein: 15, carbs: 16, fats: 21, price_sar: 13, estimated: true, family: 'jollibee-nuggets-spicy', units: 6 },
  { id: 'jollibee-9pc-nuggets-spicy', chain: 'Jollibee', name: '9 Pcs Chicken Nuggets Spicy', category: 'main', calories: 482, protein: 22, carbs: 24, fats: 33, price_sar: 22, estimated: true, family: 'jollibee-nuggets-spicy', units: 9 },
  { id: 'jollibee-15pc-nuggets-spicy', chain: 'Jollibee', name: '15 Pcs Chicken Nuggets Spicy', category: 'main', calories: 804, protein: 37, carbs: 40, fats: 55, price_sar: 30, estimated: true, family: 'jollibee-nuggets-spicy', units: 15 },
  { id: 'jollibee-jolly-hotdog', chain: 'Jollibee', name: 'Jolly Hotdog', category: 'main', calories: 446, protein: 15, carbs: 36, fats: 27, price_sar: 18, estimated: true },
  { id: 'jollibee-jolly-wrap', chain: 'Jollibee', name: 'Jolly Wrap', category: 'main', calories: 616, protein: 22, carbs: 55, fats: 33, price_sar: 18, estimated: true },
  { id: 'jollibee-chicken-sandwich', chain: 'Jollibee', name: 'Chicken Sandwich', category: 'main', calories: 481, protein: 24, carbs: 42, fats: 24, price_sar: 28, estimated: true },
  { id: 'jollibee-2pc-burgersteak', chain: 'Jollibee', name: '2pc Burgersteak (with rice)', category: 'main', calories: 570, protein: 28, carbs: 62, fats: 23, price_sar: 20, estimated: true, family: 'jollibee-burgersteak', units: 1 },
  { id: 'jollibee-3pc-burgersteak', chain: 'Jollibee', name: '3pc Burgersteak (with rice)', category: 'main', calories: 750, protein: 39, carbs: 68, fats: 35, price_sar: 24, estimated: true, family: 'jollibee-burgersteak', units: 1.32 },
  { id: 'jollibee-3pc-strips-spicy', chain: 'Jollibee', name: '3pc Chicken Strips Spicy (bun & fries)', category: 'main', calories: 935, protein: 35, carbs: 85, fats: 48, price_sar: 17, estimated: true },
  { id: 'jollibee-mashed-potato', chain: 'Jollibee', name: 'Mashed Potato', category: 'side', calories: 137, protein: 3, carbs: 20, fats: 5, price_sar: 6, estimated: true },
  { id: 'jollibee-fries-small', chain: 'Jollibee', name: 'Fries (S)', category: 'side', calories: 158, protein: 2, carbs: 20, fats: 8, price_sar: 9, estimated: true, family: 'jollibee-fries', units: 1 },
  { id: 'jollibee-fries-medium', chain: 'Jollibee', name: 'Fries (M)', category: 'side', calories: 291, protein: 4, carbs: 37, fats: 14, price_sar: 12, estimated: true, family: 'jollibee-fries', units: 1.84 },
  { id: 'jollibee-fries-large', chain: 'Jollibee', name: 'Fries (L)', category: 'side', calories: 418, protein: 5, carbs: 53, fats: 20, price_sar: 14, estimated: true, family: 'jollibee-fries', units: 2.65 },
  { id: 'jollibee-xtra-rice', chain: 'Jollibee', name: 'Xtra Rice', category: 'side', calories: 216, protein: 4, carbs: 48, fats: 1, price_sar: 5, estimated: true },
  { id: 'jollibee-xtra-bun', chain: 'Jollibee', name: 'Xtra Bun', category: 'side', calories: 156, protein: 4, carbs: 28, fats: 3, price_sar: 2, estimated: true },
  { id: 'jollibee-peach-mango-pie', chain: 'Jollibee', name: 'Peach Mango Pie', category: 'dessert', calories: 270, protein: 3, carbs: 36, fats: 13, price_sar: 9, estimated: true },
  { id: 'jollibee-choco-sundae', chain: 'Jollibee', name: 'Choco Sundae', category: 'dessert', calories: 234, protein: 4, carbs: 40, fats: 7, price_sar: 9, estimated: true },
  { id: 'jollibee-choco-overload-sundae', chain: 'Jollibee', name: 'Choco Overload Sundae', category: 'dessert', calories: 632, protein: 8, carbs: 90, fats: 26, price_sar: 10, estimated: true },
  { id: 'jollibee-pistachio-kunafa-sundae', chain: 'Jollibee', name: 'Pistachio Kunafa Sundae', category: 'dessert', calories: 441, protein: 7, carbs: 60, fats: 19, price_sar: 11, estimated: true },

  // ── Al Tazaj ───────────────────────────────────────────────────
  // Rebuilt from HungerStation Malqa labels (2026-07). Farouj's own "371"
  // label is implausible for a whole grilled chicken (half tandoori = 722) —
  // estimated ~620 from Farouj Meal math (1096 − fries − drink). Rashaqa
  // meals kept (include water, not soft drinks). Skipped: all "Meal"/"Combo"
  // variants with fries+drink, Our Offer gathering buckets, kids meals,
  // Burger Arabia brown-bread + brown-bread duplicates (identical labels),
  // sauces, drinks.
  { id: 'altazaj-farouj', chain: 'Al Tazaj', name: 'Farouj Charcoal Grilled Chicken', category: 'main', calories: 620, protein: 70, carbs: 8, fats: 35, price_sar: 29.8, estimated: true },
  { id: 'altazaj-broast', chain: 'Al Tazaj', name: 'Broast Chicken', category: 'main', calories: 989, protein: 60, carbs: 70, fats: 52, price_sar: 25, estimated: true },
  { id: 'altazaj-tandoori-360', chain: 'Al Tazaj', name: 'Tandoori 360 (Half Chicken with Saj & Corn)', category: 'main', calories: 722, protein: 58, carbs: 60, fats: 28, price_sar: 33.4, estimated: true },
  { id: 'altazaj-kabsa', chain: 'Al Tazaj', name: 'Kabsa with Chicken', category: 'main', calories: 1000, protein: 55, carbs: 120, fats: 32, price_sar: 35.7, estimated: true },
  { id: 'altazaj-kabab-rice', chain: 'Al Tazaj', name: 'Kabab with Rice', category: 'main', calories: 942, protein: 50, carbs: 115, fats: 31, price_sar: 24.6, estimated: true },
  { id: 'altazaj-mandi', chain: 'Al Tazaj', name: 'Mandi Altazaj', category: 'main', calories: 1523, protein: 70, carbs: 185, fats: 55, price_sar: 35.7, estimated: true },
  { id: 'altazaj-rashaqa-meal', chain: 'Al Tazaj', name: 'Rashaqa Meal (Farouj with Salad)', category: 'main', calories: 586, protein: 60, carbs: 15, fats: 32, price_sar: 36.95, estimated: true },
  { id: 'altazaj-tandoori-rashaqa', chain: 'Al Tazaj', name: 'Tandoori 360 Rashaqa Meal', category: 'main', calories: 685, protein: 62, carbs: 40, fats: 30, price_sar: 36.95, estimated: true },
  { id: 'altazaj-chicken-breast-salad', chain: 'Al Tazaj', name: 'Chicken Breast Salad', category: 'main', calories: 453, protein: 40, carbs: 35, fats: 16, price_sar: 29.8, estimated: true },
  { id: 'altazaj-classic-crunch-burger', cuisine: 'burgers', chain: 'Al Tazaj', name: 'Classic Crunch Burger', category: 'main', calories: 990, protein: 45, carbs: 85, fats: 52, price_sar: 23, estimated: true },
  { id: 'altazaj-dynamite-crunch-burger', cuisine: 'burgers', chain: 'Al Tazaj', name: 'Dynamite Crunch Burger', category: 'main', calories: 990, protein: 45, carbs: 85, fats: 52, price_sar: 23, estimated: true },
  { id: 'altazaj-tasty-bbq-burger', cuisine: 'burgers', chain: 'Al Tazaj', name: 'Tasty BBQ Burger', category: 'main', calories: 680, protein: 35, carbs: 60, fats: 33, price_sar: 21.6, estimated: true },
  { id: 'altazaj-crispy-burger', cuisine: 'burgers', chain: 'Al Tazaj', name: 'Crispy Burger', category: 'main', calories: 558, protein: 28, carbs: 52, fats: 26, price_sar: 16.4, estimated: true },
  { id: 'altazaj-burger-arabia', cuisine: 'burgers', chain: 'Al Tazaj', name: 'Burger Arabia (White Bread)', category: 'main', calories: 507, protein: 30, carbs: 48, fats: 21, price_sar: 20.6, estimated: true },
  { id: 'altazaj-taza-burger', cuisine: 'burgers', chain: 'Al Tazaj', name: 'Taza Burger', category: 'main', calories: 625, protein: 28, carbs: 58, fats: 31, price_sar: 17.4, estimated: true },
  { id: 'altazaj-spicy-arabi', chain: 'Al Tazaj', name: 'Spicy Arabi Sandwich', category: 'main', calories: 371, protein: 25, carbs: 35, fats: 14, price_sar: 22.5, estimated: true },
  { id: 'altazaj-dooojaj-roll', chain: 'Al Tazaj', name: 'Dooojaj Roll', category: 'main', calories: 788, protein: 32, carbs: 75, fats: 40, price_sar: 15.6, estimated: true },
  { id: 'altazaj-saj-muhammas', chain: 'Al Tazaj', name: 'Saj Muhammas Sandwich', category: 'main', calories: 513, protein: 30, carbs: 48, fats: 22, price_sar: 14.5, estimated: true },
  { id: 'altazaj-taka-tak', chain: 'Al Tazaj', name: 'Taka Tak Sandwich', category: 'main', calories: 818, protein: 35, carbs: 78, fats: 40, price_sar: 17.4, estimated: true },
  { id: 'altazaj-muhammas-classic', chain: 'Al Tazaj', name: 'Muhammas Classic Sandwich', category: 'main', calories: 426, protein: 25, carbs: 42, fats: 17, price_sar: 14.5, estimated: true },
  { id: 'altazaj-crispy-roll', chain: 'Al Tazaj', name: 'Crispy Roll Sandwich', category: 'main', calories: 664, protein: 28, carbs: 65, fats: 33, price_sar: 20.5, estimated: true },
  { id: 'altazaj-kabab-sandwich', chain: 'Al Tazaj', name: 'Kabab Sandwich', category: 'main', calories: 295, protein: 20, carbs: 30, fats: 10, price_sar: 14.7, estimated: true },
  { id: 'altazaj-chicken-sandwich', chain: 'Al Tazaj', name: 'Chicken Sandwich (Farouj Pulled)', category: 'main', calories: 294, protein: 20, carbs: 30, fats: 10, price_sar: 14.5, estimated: true },
  { id: 'altazaj-sandawisht-tikka', chain: 'Al Tazaj', name: 'Sandawisht Tikka', category: 'main', calories: 818, protein: 35, carbs: 78, fats: 40, price_sar: 19.6, estimated: true },
  { id: 'altazaj-tenders-4pc', chain: 'Al Tazaj', name: 'Chicken Tenders (4 pc)', category: 'main', calories: 307, protein: 22, carbs: 20, fats: 15, price_sar: 15.4, family: 'altazaj-tenders', units: 4, estimated: true },
  { id: 'altazaj-tenders-9pc', chain: 'Al Tazaj', name: 'Chicken Tenders (9 pc)', category: 'main', calories: 1058, protein: 62, carbs: 70, fats: 58, price_sar: 31.1, family: 'altazaj-tenders', units: 9, estimated: true },
  { id: 'altazaj-nuggets-5pc', chain: 'Al Tazaj', name: 'Chicken Nuggets (5 pc)', category: 'main', calories: 275, protein: 16, carbs: 18, fats: 15, price_sar: 10.4, estimated: true },
  { id: 'altazaj-nuggets-10pc-fries', chain: 'Al Tazaj', name: '10 pc Nuggets with Fries', category: 'main', calories: 902, protein: 38, carbs: 74, fats: 50, price_sar: 22.6, estimated: true },
  { id: 'altazaj-tj-garmasha', chain: 'Al Tazaj', name: 'TJ Garmasha (12 pc Mix with Fries)', category: 'main', calories: 1139, protein: 45, carbs: 105, fats: 58, price_sar: 31.7, estimated: true },
  { id: 'altazaj-chicken-cheesy-fries', chain: 'Al Tazaj', name: 'Chicken Cheesy Fries', category: 'side', calories: 650, protein: 22, carbs: 58, fats: 36, price_sar: 18.5, estimated: true },
  { id: 'altazaj-cheesy-fries', chain: 'Al Tazaj', name: 'Cheesy Fries', category: 'side', calories: 455, protein: 10, carbs: 48, fats: 24, price_sar: 16.4, estimated: true },
  { id: 'altazaj-tikka-batates-chicken', chain: 'Al Tazaj', name: 'Tikka Batates with Chicken', category: 'side', calories: 1188, protein: 35, carbs: 110, fats: 68, price_sar: 19.5, estimated: true },
  { id: 'altazaj-tikka-batates', chain: 'Al Tazaj', name: 'Tikka Batates', category: 'side', calories: 965, protein: 12, carbs: 95, fats: 60, price_sar: 16.4, estimated: true },
  { id: 'altazaj-hummus', chain: 'Al Tazaj', name: 'Homous', category: 'side', calories: 284, protein: 8, carbs: 22, fats: 18, price_sar: 9.5, estimated: true },
  { id: 'altazaj-chicken-fries-5pc', chain: 'Al Tazaj', name: 'Chicken Fries (5 pc)', category: 'side', calories: 195, protein: 12, carbs: 12, fats: 11, price_sar: 10.4, estimated: true },
  { id: 'altazaj-cheesy-nuggets-4pc', chain: 'Al Tazaj', name: 'Cheesy Nuggets (4 pc)', category: 'side', calories: 252, protein: 12, carbs: 16, fats: 15, price_sar: 10.4, estimated: true },
  { id: 'altazaj-fries-medium', chain: 'Al Tazaj', name: 'Fries (Medium)', category: 'side', calories: 233, protein: 3, carbs: 30, fats: 11, price_sar: 8.1, family: 'altazaj-fries', units: 1, estimated: true },
  { id: 'altazaj-fries-large', chain: 'Al Tazaj', name: 'Fries (Large)', category: 'side', calories: 281, protein: 4, carbs: 36, fats: 13, price_sar: 9.1, family: 'altazaj-fries', units: 1.2, estimated: true },
  { id: 'altazaj-taza-rice', chain: 'Al Tazaj', name: 'Taza Rice', category: 'side', calories: 409, protein: 8, carbs: 75, fats: 8, price_sar: 8.3, estimated: true },
  { id: 'altazaj-corn', chain: 'Al Tazaj', name: 'Corn', category: 'side', calories: 267, protein: 8, carbs: 45, fats: 6, price_sar: 9.5, estimated: true },
  { id: 'altazaj-saj-bread', chain: 'Al Tazaj', name: 'Saj Bread', category: 'side', calories: 73, protein: 2, carbs: 15, fats: 1, price_sar: 2, estimated: true },
  { id: 'altazaj-white-bread-4pc', chain: 'Al Tazaj', name: 'White Bread (4 pc)', category: 'side', calories: 780, protein: 24, carbs: 160, fats: 4, price_sar: 2, estimated: true },
  { id: 'altazaj-green-salad', chain: 'Al Tazaj', name: 'Green Salad', category: 'side', calories: 178, protein: 4, carbs: 12, fats: 12, price_sar: 10.4, estimated: true },
  { id: 'altazaj-fattoush', chain: 'Al Tazaj', name: 'Fatoush Salad (Small)', category: 'side', calories: 145, protein: 3, carbs: 18, fats: 7, price_sar: 10.5, estimated: true },
  { id: 'altazaj-coleslaw', chain: 'Al Tazaj', name: 'Coleslaw', category: 'side', calories: 208, protein: 2, carbs: 14, fats: 16, price_sar: 8.4, estimated: true },
  { id: 'altazaj-basbosah', chain: 'Al Tazaj', name: 'Basbosah Altaza', category: 'dessert', calories: 425, protein: 6, carbs: 60, fats: 18, price_sar: 9.1, estimated: true },

  // ── Buffalo Wild Wings ─────────────────────────────────────────
  // Rebuilt from HungerStation Malqa labels (2026-07). Wing sizes scale
  // monotonically (credible). Skipped: unlabeled burgers/sandwiches/hot
  // dogs/sweets, "What's New" promos, House Samplers (sharing platters),
  // kids meals (include drink), sauces, wings combo (unlabeled).
  { id: 'bww-boneless-7', chain: 'Buffalo Wild Wings', name: 'Boneless Wings (7 pc)', category: 'main', calories: 462, protein: 34, carbs: 30, fats: 22, price_sar: 49, family: 'bww-boneless', units: 7, estimated: true },
  { id: 'bww-boneless-10', chain: 'Buffalo Wild Wings', name: 'Boneless Wings (10 pc)', category: 'main', calories: 712, protein: 52, carbs: 46, fats: 34, price_sar: 69, family: 'bww-boneless', units: 10, estimated: true },
  { id: 'bww-boneless-15', chain: 'Buffalo Wild Wings', name: 'Boneless Wings (15 pc)', category: 'main', calories: 1052, protein: 77, carbs: 68, fats: 50, price_sar: 89, family: 'bww-boneless', units: 15, estimated: true },
  { id: 'bww-boneless-20', chain: 'Buffalo Wild Wings', name: 'Boneless Wings (20 pc)', category: 'main', calories: 1421, protein: 104, carbs: 92, fats: 68, price_sar: 99, family: 'bww-boneless', units: 20, estimated: true },
  { id: 'bww-traditional-5', chain: 'Buffalo Wild Wings', name: 'Traditional Wings (5 pc)', category: 'main', calories: 441, protein: 34, carbs: 3, fats: 32, price_sar: 49, family: 'bww-traditional', units: 5, estimated: true },
  { id: 'bww-traditional-10', chain: 'Buffalo Wild Wings', name: 'Traditional Wings (10 pc)', category: 'main', calories: 867, protein: 67, carbs: 5, fats: 63, price_sar: 69, family: 'bww-traditional', units: 10, estimated: true },
  { id: 'bww-traditional-15', chain: 'Buffalo Wild Wings', name: 'Traditional Wings (15 pc)', category: 'main', calories: 1265, protein: 98, carbs: 8, fats: 92, price_sar: 89, family: 'bww-traditional', units: 15, estimated: true },
  { id: 'bww-traditional-20', chain: 'Buffalo Wild Wings', name: 'Traditional Wings (20 pc)', category: 'main', calories: 1736, protein: 134, carbs: 10, fats: 127, price_sar: 99, family: 'bww-traditional', units: 20, estimated: true },
  { id: 'bww-tenders-3', chain: 'Buffalo Wild Wings', name: 'Crispy Tenders with Fries (3 pc)', category: 'main', calories: 1024, protein: 42, carbs: 90, fats: 54, price_sar: 50, family: 'bww-tenders', units: 3, estimated: true },
  { id: 'bww-tenders-5', chain: 'Buffalo Wild Wings', name: 'Crispy Tenders with Fries (5 pc)', category: 'main', calories: 1707, protein: 70, carbs: 140, fats: 96, price_sar: 69, family: 'bww-tenders', units: 5, estimated: true },
  { id: 'bww-buffalo-ranch-wrap', chain: 'Buffalo Wild Wings', name: 'Buffalo Ranch Chicken Wrap', category: 'main', calories: 1206, protein: 55, carbs: 80, fats: 74, price_sar: 74, estimated: true },
  { id: 'bww-chicken-quesadillas', chain: 'Buffalo Wild Wings', name: 'Chicken Quesadillas', category: 'main', calories: 1230, protein: 55, carbs: 90, fats: 70, price_sar: 55, estimated: true },
  { id: 'bww-buffalo-mac-cheese', chain: 'Buffalo Wild Wings', name: 'Buffalo Mac & Cheese', category: 'main', calories: 850, protein: 40, carbs: 75, fats: 44, price_sar: 59, estimated: true },
  { id: 'bww-chicken-caesar-salad', chain: 'Buffalo Wild Wings', name: 'Chicken Caesar Salad', category: 'main', calories: 835, protein: 45, carbs: 25, fats: 62, price_sar: 59, estimated: true },
  { id: 'bww-loaded-fries', chain: 'Buffalo Wild Wings', name: 'Loaded Fries', category: 'side', calories: 945, protein: 11, carbs: 95, fats: 55, price_sar: 44, estimated: true },
  { id: 'bww-mozzarella-sticks', chain: 'Buffalo Wild Wings', name: 'Mozzarella Sticks (6 pc)', category: 'side', calories: 718, protein: 28, carbs: 52, fats: 44, price_sar: 39, estimated: true },
  { id: 'bww-ultimate-nachos', chain: 'Buffalo Wild Wings', name: 'Ultimate Nachos', category: 'side', calories: 1237, protein: 30, carbs: 120, fats: 70, price_sar: 49, estimated: true },
  { id: 'bww-dip-duo', chain: 'Buffalo Wild Wings', name: 'Dip Duo with Tortilla Chips', category: 'side', calories: 959, protein: 18, carbs: 90, fats: 58, price_sar: 44, estimated: true },
  { id: 'bww-spinach-artichoke-dip', chain: 'Buffalo Wild Wings', name: 'Spinach Artichoke Dip', category: 'side', calories: 1259, protein: 30, carbs: 100, fats: 82, price_sar: 59, estimated: true },
  { id: 'bww-fries', chain: 'Buffalo Wild Wings', name: 'French Fries', category: 'side', calories: 329, protein: 4, carbs: 42, fats: 16, price_sar: 22, family: 'bww-fries', units: 1, estimated: true },
  { id: 'bww-fries-basket', chain: 'Buffalo Wild Wings', name: 'French Fries (Basket)', category: 'side', calories: 676, protein: 9, carbs: 86, fats: 32, price_sar: 39, family: 'bww-fries', units: 2, estimated: true },
  { id: 'bww-potato-wedges-basket', chain: 'Buffalo Wild Wings', name: 'Potato Wedges (Basket)', category: 'side', calories: 676, protein: 9, carbs: 86, fats: 32, price_sar: 39, estimated: true },
  { id: 'bww-onion-rings', chain: 'Buffalo Wild Wings', name: 'Onion Rings', category: 'side', calories: 946, protein: 10, carbs: 90, fats: 60, price_sar: 24, family: 'bww-onion-rings', units: 1, estimated: true },
  { id: 'bww-onion-rings-basket', chain: 'Buffalo Wild Wings', name: 'Onion Rings (Basket)', category: 'side', calories: 1696, protein: 18, carbs: 160, fats: 108, price_sar: 44, family: 'bww-onion-rings', units: 1.8, estimated: true },
  { id: 'bww-caesar-side-salad', chain: 'Buffalo Wild Wings', name: 'Caesar Side Salad', category: 'side', calories: 155, protein: 5, carbs: 8, fats: 11, price_sar: 34, estimated: true },
  { id: 'bww-corn-on-cob', chain: 'Buffalo Wild Wings', name: 'Corn on the Cob', category: 'side', calories: 180, protein: 4, carbs: 25, fats: 7, price_sar: 24, estimated: true },
  { id: 'bww-rice', chain: 'Buffalo Wild Wings', name: 'Rice (Side)', category: 'side', calories: 100, protein: 2, carbs: 20, fats: 1, price_sar: 24, estimated: true },

  // Birdlot removed 2026-07: not on HungerStation (searched Malqa, EN + AR
  // spellings) — prices unverifiable under the HS price-audit rule.

  // ── BROASTEDkey ────────────────────────────────────────────────
  // Reconciled to HungerStation Malqa SFDA labels (2026-07). Skipped:
  // Key Sandwich + Solo Spicy/Nashville (no calorie labels), Crispy
  // Fillet Meals ("New" promo section, includes drink), coleslaw pair
  // (small 250 > normal 190, broken), pickled cucumber "182", cheese &
  // chicken fries (labels copied from plain/nashville fries), sauces.
  { id: 'broastedkey-broasted-regular', chain: 'BROASTEDkey', name: 'Broasted Regular', category: 'main', calories: 904, protein: 52, carbs: 66, fats: 48, price_sar: 28, estimated: true },
  { id: 'broastedkey-broasted-spicy', chain: 'BROASTEDkey', name: 'Broasted Spicy', category: 'main', calories: 909, protein: 52, carbs: 66, fats: 49, price_sar: 28, estimated: true },
  { id: 'broastedkey-broasted-extra-spicy', chain: 'BROASTEDkey', name: 'Broasted Extra Spicy', category: 'main', calories: 915, protein: 52, carbs: 67, fats: 49, price_sar: 31, estimated: true },
  { id: 'broastedkey-thai-red', chain: 'BROASTEDkey', name: 'Thai Red Broasted with Spicy Potatoes', category: 'main', calories: 979, protein: 50, carbs: 80, fats: 50, price_sar: 33, estimated: true },
  { id: 'broastedkey-nashville-broasted', chain: 'BROASTEDkey', name: 'Nashville Broasted with Fries', category: 'main', calories: 941, protein: 48, carbs: 81, fats: 47, price_sar: 33, estimated: true },
  { id: 'broastedkey-tender', chain: 'BROASTEDkey', name: 'Tender', category: 'main', calories: 488, protein: 34, carbs: 38, fats: 22, price_sar: 27, estimated: true },
  { id: 'broastedkey-tender-nashville', chain: 'BROASTEDkey', name: 'Tender Nashville (4 pc with Coleslaw)', category: 'main', calories: 514, protein: 34, carbs: 42, fats: 24, price_sar: 33, estimated: true },
  { id: 'broastedkey-solo-meal', chain: 'BROASTEDkey', name: 'Solo Meal (2 Tenders with Fries)', category: 'main', calories: 1452, protein: 56, carbs: 140, fats: 74, price_sar: 37, estimated: true },
  { id: 'broastedkey-nashville-burger', cuisine: 'burgers', chain: 'BROASTEDkey', name: 'Nashville Burger', category: 'main', calories: 812, protein: 36, carbs: 75, fats: 41, price_sar: 27, estimated: true },
  { id: 'broastedkey-maple-burger', cuisine: 'burgers', chain: 'BROASTEDkey', name: 'Maple Burger', category: 'main', calories: 901, protein: 34, carbs: 92, fats: 44, price_sar: 26, estimated: true },
  { id: 'broastedkey-crispy-burger', cuisine: 'burgers', chain: 'BROASTEDkey', name: 'Crispy Burger', category: 'main', calories: 759, protein: 32, carbs: 72, fats: 38, price_sar: 24, estimated: true },
  { id: 'broastedkey-buffalo-bites', chain: 'BROASTEDkey', name: 'Buffalo Bites', category: 'side', calories: 271, protein: 18, carbs: 22, fats: 12, price_sar: 15, estimated: true },
  { id: 'broastedkey-maple-bites', chain: 'BROASTEDkey', name: 'Maple Bites', category: 'side', calories: 420, protein: 18, carbs: 50, fats: 16, price_sar: 15, estimated: true },
  { id: 'broastedkey-chicken-bites', chain: 'BROASTEDkey', name: 'Chicken Bites', category: 'side', calories: 404, protein: 18, carbs: 46, fats: 16, price_sar: 15, estimated: true },
  { id: 'broastedkey-drumstick-maple', chain: 'BROASTEDkey', name: 'Drumstick with Maple (3 pc)', category: 'side', calories: 423, protein: 26, carbs: 34, fats: 20, price_sar: 18, estimated: true },
  { id: 'broastedkey-hummus', chain: 'BROASTEDkey', name: 'Hummus', category: 'side', calories: 142, protein: 5, carbs: 14, fats: 7, price_sar: 5, estimated: true },
  { id: 'broastedkey-fries', chain: 'BROASTEDkey', name: 'French Fries', category: 'side', calories: 193, protein: 3, carbs: 27, fats: 8, price_sar: 8, estimated: true },
  { id: 'broastedkey-nashville-fries', chain: 'BROASTEDkey', name: 'Nashville Fries', category: 'side', calories: 271, protein: 3, carbs: 36, fats: 13, price_sar: 10, estimated: true },

  // ── Kantaka ────────────────────────────────────────────────────
  // Rebuilt from HS Malqa 2026-07 (old block didn't match the real menu).
  // SFDA labels, estimated macros. Food-only plates (fries/bread/sauces, no
  // drink) kept; kids meals/offers/buckets (drinks or gathering) skipped;
  // Potatoes side skipped (107-kcal label not credible); sauces skipped.
  { id: 'kantaka-broasted-4pc', chain: 'Kantaka', name: 'Broasted Chicken (4 pc with Fries & Bread)', category: 'main', calories: 1261, protein: 70, carbs: 95, fats: 65, price_sar: 30, estimated: true },
  { id: 'kantaka-inject-cheese-4pc', chain: 'Kantaka', name: 'Inject & Cheese It (4 pc with Fries)', category: 'main', calories: 1098, protein: 62, carbs: 80, fats: 58, price_sar: 33, estimated: true },
  { id: 'kantaka-strips-3pc', chain: 'Kantaka', name: 'Chicken Strips (3 pc)', category: 'main', calories: 750, protein: 40, carbs: 50, fats: 42, price_sar: 18, estimated: true },
  { id: 'kantaka-strips-3pc-spicy', chain: 'Kantaka', name: 'Chicken Strips Spicy (3 pc)', category: 'main', calories: 524, protein: 32, carbs: 40, fats: 26, price_sar: 18, estimated: true },
  { id: 'kantaka-strips-fries-5pc', chain: 'Kantaka', name: 'Chicken Strips with Fries (5 pc)', category: 'main', calories: 857, protein: 48, carbs: 78, fats: 39, price_sar: 30, estimated: true },
  { id: 'kantaka-strips-fries-5pc-spicy', chain: 'Kantaka', name: 'Chicken Strips Spicy with Fries (5 pc)', category: 'main', calories: 1050, protein: 52, carbs: 95, fats: 51, price_sar: 30, estimated: true },
  { id: 'kantaka-nuggets-6pc', chain: 'Kantaka', name: 'Chicken Nuggets (6 pc)', category: 'side', calories: 440, protein: 22, carbs: 30, fats: 25, price_sar: 13, estimated: true },
  { id: 'kantaka-hummus', chain: 'Kantaka', name: 'Hummus', category: 'side', calories: 273, protein: 8, carbs: 22, fats: 17, price_sar: 9, estimated: true },
  { id: 'kantaka-bread', chain: 'Kantaka', name: 'Lavash Bread', category: 'side', calories: 300, protein: 9, carbs: 58, fats: 3, price_sar: 3, estimated: true },

  // Broast Line removed 2026-07: not on HungerStation (searched Malqa,
  // EN + AR "خط البروست") — prices unverifiable under the HS price-audit rule.

  // ── Alliwan ────────────────────────────────────────────────────
  // Rebuilt from HungerStation Malqa labels (2026-07) — moved here from
  // shawarma-levant.js (real menu is fried chicken/burgers, renamed from
  // "ALLIWAN" to HS brand "Alliwan"). Skipped: Mondial Box / "Boxes+Drinks" /
  // Meals / kids meals (include a drink), Offers section, gathering family
  // boxes, Nashville boxes (seasoning duplicates of the labeled boxes),
  // sauces/dips, beverages.
  { id: 'alliwan-super-sandwich', chain: 'Alliwan', name: 'Super Sandwich', category: 'main', calories: 627, protein: 30, carbs: 55, fats: 31, price_sar: 30, estimated: true },
  { id: 'alliwan-deluxe-sandwich', chain: 'Alliwan', name: 'Deluxe Sandwich', category: 'main', calories: 616, protein: 30, carbs: 54, fats: 31, price_sar: 29, estimated: true },
  { id: 'alliwan-trio-sandwiches', chain: 'Alliwan', name: 'Trio Sandwiches (3 pc)', category: 'main', calories: 618, protein: 32, carbs: 60, fats: 28, price_sar: 31, estimated: true },
  { id: 'alliwan-tortilla-sandwich', chain: 'Alliwan', name: 'Tortilla Sandwich', category: 'main', calories: 315, protein: 20, carbs: 30, fats: 13, price_sar: 24, estimated: true },
  { id: 'alliwan-twin-sandwich', chain: 'Alliwan', name: 'Twin Sandwich (2 pc)', category: 'main', calories: 412, protein: 22, carbs: 42, fats: 17, price_sar: 21, estimated: true },
  { id: 'alliwan-boneless-sandwich', chain: 'Alliwan', name: 'Boneless Sandwich', category: 'main', calories: 206, protein: 11, carbs: 21, fats: 9, price_sar: 11, estimated: true },
  { id: 'alliwan-nashville-burger', cuisine: 'burgers', chain: 'Alliwan', name: 'Nashville Burger', category: 'main', calories: 650, protein: 32, carbs: 55, fats: 34, price_sar: 33, estimated: true },
  { id: 'alliwan-nashville-boneless-sandwich', chain: 'Alliwan', name: 'Nashville Boneless Sandwich', category: 'main', calories: 210, protein: 11, carbs: 21, fats: 9, price_sar: 12, estimated: true },
  { id: 'alliwan-nashville-twin', chain: 'Alliwan', name: 'Nashville Twin Sandwiches (2 pc)', category: 'main', calories: 440, protein: 24, carbs: 44, fats: 18, price_sar: 23, estimated: true },
  { id: 'alliwan-maple-burger', cuisine: 'burgers', chain: 'Alliwan', name: 'Maple Burger', category: 'main', calories: 718, protein: 35, carbs: 68, fats: 34, price_sar: 32, estimated: true },
  { id: 'alliwan-crunchy-burger', cuisine: 'burgers', chain: 'Alliwan', name: 'Crunchy Burger', category: 'main', calories: 670, protein: 34, carbs: 60, fats: 33, price_sar: 32, estimated: true },
  { id: 'alliwan-chef-burger', cuisine: 'burgers', chain: 'Alliwan', name: 'Chef Burger', category: 'main', calories: 335, protein: 18, carbs: 34, fats: 14, price_sar: 19, estimated: true },
  { id: 'alliwan-boneless-box', chain: 'Alliwan', name: 'Boneless Box (4 pc with Fries)', category: 'main', calories: 1132, protein: 55, carbs: 110, fats: 52, price_sar: 35, estimated: true },
  { id: 'alliwan-mix-box', chain: 'Alliwan', name: 'Mix Meal Box (2 Broasted + 2 Boneless with Fries)', category: 'main', calories: 1209, protein: 60, carbs: 115, fats: 56, price_sar: 35, estimated: true },
  { id: 'alliwan-broasted-box', chain: 'Alliwan', name: 'Broasted Box (4 pc with Fries)', category: 'main', calories: 1342, protein: 65, carbs: 120, fats: 67, price_sar: 35, estimated: true },
  { id: 'alliwan-strips-box', chain: 'Alliwan', name: 'Strips Box (4 pc with Fries)', category: 'main', calories: 1031, protein: 52, carbs: 100, fats: 46, price_sar: 35, estimated: true },
  { id: 'alliwan-mushaabat-box', chain: 'Alliwan', name: 'Mushaabat Box (6 pc Bites with Fries)', category: 'main', calories: 839, protein: 42, carbs: 82, fats: 38, price_sar: 33, estimated: true },
  { id: 'alliwan-mu-mix-box', chain: 'Alliwan', name: 'Mu Mix Box (3 Bites + 2 Boneless with Fries)', category: 'main', calories: 952, protein: 47, carbs: 92, fats: 44, price_sar: 33, estimated: true },
  { id: 'alliwan-wings-8pc', chain: 'Alliwan', name: 'BBQ Chicken Wings (8 pc)', category: 'side', calories: 728, protein: 48, carbs: 20, fats: 50, price_sar: 33, estimated: true, family: 'alliwan-wings', units: 8 },
  { id: 'alliwan-wings-4pc', chain: 'Alliwan', name: 'BBQ Chicken Wings (4 pc)', category: 'side', calories: 374, protein: 24, carbs: 10, fats: 26, price_sar: 21, estimated: true, family: 'alliwan-wings', units: 4 },
  { id: 'alliwan-chicken-cheese-fries', chain: 'Alliwan', name: 'Chicken Cheese Fries Box', category: 'side', calories: 656, protein: 25, carbs: 60, fats: 35, price_sar: 24, estimated: true },
  { id: 'alliwan-cheese-fries', chain: 'Alliwan', name: 'Cheese Fries Box', category: 'side', calories: 581, protein: 14, carbs: 58, fats: 33, price_sar: 22, estimated: true },
  { id: 'alliwan-green-salad', chain: 'Alliwan', name: 'Green Salad', category: 'side', calories: 150, protein: 3, carbs: 12, fats: 10, price_sar: 20, estimated: true },
  { id: 'alliwan-wedges', chain: 'Alliwan', name: 'Potato Wedges', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 13, estimated: true },
  { id: 'alliwan-fries', chain: 'Alliwan', name: 'French Fries', category: 'side', calories: 400, protein: 5, carbs: 50, fats: 20, price_sar: 11, estimated: true },
  { id: 'alliwan-coleslaw', chain: 'Alliwan', name: 'Coleslaw', category: 'side', calories: 184, protein: 1, carbs: 10, fats: 15, price_sar: 7, estimated: true },
  { id: 'alliwan-cookies', chain: 'Alliwan', name: 'Chocolate Chip Cookies', category: 'dessert', calories: 180, protein: 2, carbs: 24, fats: 8, price_sar: 11, estimated: true },

  // ── Black Barn ─────────────────────────────────────────────────
  // HungerStation SFDA labels (2026-07). Crispy chicken burgers form a
  // coherent 720-890 family. Bites/wings sauce variants swing ±400 kcal by
  // sauce alone (blind-fill pattern) — one representative kept per format.
  // Offers/group boxes and sauces skipped.
  { id: 'blackbarn-honey-spicy-crispy', cuisine: 'burgers', chain: 'Black Barn', name: 'Honey Spicy Crispy Burger', category: 'main', calories: 740, protein: 32, carbs: 62, fats: 40, price_sar: 28, estimated: true },
  { id: 'blackbarn-spicy-crispy', cuisine: 'burgers', chain: 'Black Barn', name: 'Spicy Crispy Burger', category: 'main', calories: 830, protein: 34, carbs: 66, fats: 48, price_sar: 33, estimated: true },
  { id: 'blackbarn-maple-crispy', cuisine: 'burgers', chain: 'Black Barn', name: 'Maple Crispy Burger', category: 'main', calories: 770, protein: 32, carbs: 70, fats: 40, price_sar: 33, estimated: true },
  { id: 'blackbarn-grilled-chicken', cuisine: 'burgers', chain: 'Black Barn', name: 'Grilled Chicken Burger', category: 'main', calories: 890, protein: 52, carbs: 58, fats: 50, price_sar: 29, estimated: true },
  { id: 'blackbarn-buffalo-bites', chain: 'Black Barn', name: 'Buffalo Chicken Bites', category: 'main', calories: 1180, protein: 55, carbs: 70, fats: 75, price_sar: 22, estimated: true },
  { id: 'blackbarn-buffalo-wings', chain: 'Black Barn', name: 'Buffalo Wings (10 pc)', category: 'main', calories: 1060, protein: 60, carbs: 30, fats: 78, price_sar: 21, estimated: true },
  { id: 'blackbarn-strips-box', chain: 'Black Barn', name: 'Strips Box (3 pc with Fries)', category: 'main', calories: 1440, protein: 60, carbs: 130, fats: 75, price_sar: 24, estimated: true },
  { id: 'blackbarn-caesar-salad', chain: 'Black Barn', name: 'Caesar Salad', category: 'main', calories: 410, protein: 28, carbs: 14, fats: 27, price_sar: 22, estimated: true },
  { id: 'blackbarn-barn-fries', chain: 'Black Barn', name: 'Barn Loaded Fries', category: 'side', calories: 770, protein: 24, carbs: 80, fats: 40, price_sar: 21, estimated: true },
  { id: 'blackbarn-french-fries', chain: 'Black Barn', name: 'French Fries', category: 'side', calories: 250, protein: 3, carbs: 33, fats: 11, price_sar: 9, estimated: true },

  // ── Alqandil Althahabi ─────────────────────────────────────────
  // HungerStation SFDA labels (2026-07). Broasted/fish chain. Rejected:
  // boneless 7pc and 10pc both labeled "785" (blind fill), "Crunchy Meal
  // 5 pc" copying the broasted 4pc label, family meals, kids meals, spicy
  // variants with identical labels (kept regular only), 3 SR hummus cups
  // labeled ~360-390 (portion implausible), sauces, drinks.
  { id: 'alqandil-broasted-4pc', chain: 'Alqandil Althahabi', name: 'Broasted Chicken (4 pc with Potatoes)', category: 'main', calories: 1063, protein: 58, carbs: 80, fats: 56, price_sar: 35, estimated: true },
  { id: 'alqandil-special-broasted', chain: 'Alqandil Althahabi', name: 'Special Broasted (4 pc with Potatoes)', category: 'main', calories: 1113, protein: 58, carbs: 85, fats: 60, price_sar: 38, estimated: true },
  { id: 'alqandil-crispy-tenders', chain: 'Alqandil Althahabi', name: 'Crispy Tenders Plate', category: 'main', calories: 799, protein: 45, carbs: 60, fats: 42, price_sar: 33, estimated: true },
  { id: 'alqandil-fish', chain: 'Alqandil Althahabi', name: 'Fried Fish with Potatoes', category: 'main', calories: 655, protein: 35, carbs: 50, fats: 35, price_sar: 38, estimated: true },
  { id: 'alqandil-shrimp', chain: 'Alqandil Althahabi', name: 'Fried Shrimp Plate', category: 'main', calories: 941, protein: 40, carbs: 78, fats: 52, price_sar: 48, estimated: true },
  { id: 'alqandil-thighs-bucket-10', chain: 'Alqandil Althahabi', name: 'Bucket of Thighs (10 pc)', category: 'main', calories: 1981, protein: 112, carbs: 96, fats: 127, price_sar: 58, estimated: true },
  { id: 'alqandil-wings', chain: 'Alqandil Althahabi', name: 'Chicken Wings', category: 'main', calories: 439, protein: 28, carbs: 18, fats: 28, price_sar: 17, estimated: true },
  { id: 'alqandil-twister', chain: 'Alqandil Althahabi', name: 'Chicken Twister', category: 'main', calories: 400, protein: 20, carbs: 40, fats: 17, price_sar: 20, estimated: true },
  { id: 'alqandil-fish-twister', chain: 'Alqandil Althahabi', name: 'Fish Twister', category: 'main', calories: 550, protein: 22, carbs: 52, fats: 28, price_sar: 20, estimated: true },
  { id: 'alqandil-fish-fillet-sandwich', chain: 'Alqandil Althahabi', name: 'Fish Fillet Sandwich', category: 'main', calories: 440, protein: 22, carbs: 42, fats: 20, price_sar: 23, estimated: true },
  { id: 'alqandil-shrimpo-sandwich', chain: 'Alqandil Althahabi', name: 'Shrimpo Sandwich (7 pc)', category: 'main', calories: 775, protein: 32, carbs: 70, fats: 40, price_sar: 30, estimated: true },
  { id: 'alqandil-chicken-burger', cuisine: 'burgers', chain: 'Alqandil Althahabi', name: 'Chicken Burger', category: 'main', calories: 566, protein: 28, carbs: 50, fats: 28, price_sar: 22, estimated: true },
  { id: 'alqandil-chicken-fillet', chain: 'Alqandil Althahabi', name: 'Chicken Fillet Sandwich (2 pc)', category: 'main', calories: 713, protein: 36, carbs: 58, fats: 37, price_sar: 22, estimated: true },
  { id: 'alqandil-special-potatoes', chain: 'Alqandil Althahabi', name: 'Special Potatoes', category: 'side', calories: 319, protein: 4, carbs: 42, fats: 15, price_sar: 13, estimated: true },
  { id: 'alqandil-cheese-fries', chain: 'Alqandil Althahabi', name: 'Cheese Fries', category: 'side', calories: 359, protein: 7, carbs: 42, fats: 18, price_sar: 14, estimated: true },
  { id: 'alqandil-coleslaw', chain: 'Alqandil Althahabi', name: 'Coleslaw Salad', category: 'side', calories: 185, protein: 1, carbs: 16, fats: 13, price_sar: 4, estimated: true },
];
