// Seafood quick-service chains operating in Riyadh (all Tier 2).

export default [

  // ── Shrimp Nation ──────────────────────────────────────────────
  // Rebuilt 2026-07 from the real HungerStation Malqa menu (/135915) — old
  // 7-item block was fabricated (no Cajun bag / skewers on the real menu).
  // Every kept item carries an HS calorie label; macros back-computed
  // (estimated:true). Boiled mains include the corn in their descriptions.
  // Skipped: kids meals, all drinks (juices, soft drinks, ice tea, malt
  // beverages, water), extra sauce/corn add-ons.
  { id: 'shrimpnation-boiled-shrimp', chain: 'Shrimp Nation', name: 'Boiled Shrimp (with Corn)', category: 'main', calories: 470, protein: 45, carbs: 20, fats: 23, price_sar: 85.8, estimated: true },
  { id: 'shrimpnation-lobster', chain: 'Shrimp Nation', name: 'Boiled Lobster (with Corn)', category: 'main', calories: 630, protein: 55, carbs: 25, fats: 35, price_sar: 156.2, estimated: true },
  { id: 'shrimpnation-fish-sticks', chain: 'Shrimp Nation', name: 'Fish Sticks (with Corn)', category: 'main', calories: 570, protein: 32, carbs: 48, fats: 27, price_sar: 81.4, estimated: true },
  { id: 'shrimpnation-mussels', chain: 'Shrimp Nation', name: 'Boiled Mussels (with Corn)', category: 'main', calories: 540, protein: 40, carbs: 28, fats: 30, price_sar: 82.5, estimated: true },
  { id: 'shrimpnation-crab', chain: 'Shrimp Nation', name: 'Boiled Crab (with Corn)', category: 'main', calories: 480, protein: 38, carbs: 22, fats: 26, price_sar: 82.5, estimated: true },
  { id: 'shrimpnation-mix', chain: 'Shrimp Nation', name: 'Seafood Mix (Shrimp, Lobster, Mussels & Crab)', category: 'main', calories: 840, protein: 70, carbs: 40, fats: 44, price_sar: 204.6, estimated: true },
  { id: 'shrimpnation-fish-chips', chain: 'Shrimp Nation', name: 'Arabian Fish and Chips', category: 'main', calories: 570, protein: 28, carbs: 55, fats: 26, price_sar: 75.9, estimated: true },
  { id: 'shrimpnation-dynamite', chain: 'Shrimp Nation', name: 'Dynamite Shrimp', category: 'main', calories: 660, protein: 26, carbs: 48, fats: 40, price_sar: 57.2, estimated: true },
  { id: 'shrimpnation-chili-honey', chain: 'Shrimp Nation', name: 'Chili Honey Shrimp', category: 'main', calories: 660, protein: 26, carbs: 56, fats: 37, price_sar: 59.4, estimated: true },
  { id: 'shrimpnation-shrimp-basket', chain: 'Shrimp Nation', name: 'Shrimp Basket', category: 'main', calories: 510, protein: 24, carbs: 42, fats: 27, price_sar: 44, estimated: true },
  { id: 'shrimpnation-fish-basket', chain: 'Shrimp Nation', name: 'Fish Basket', category: 'main', calories: 560, protein: 26, carbs: 46, fats: 30, price_sar: 44, estimated: true },
  { id: 'shrimpnation-calamari-basket', chain: 'Shrimp Nation', name: 'Calamari Basket', category: 'main', calories: 410, protein: 20, carbs: 38, fats: 20, price_sar: 40.7, estimated: true },
  { id: 'shrimpnation-rice', chain: 'Shrimp Nation', name: 'White Rice', category: 'side', calories: 250, protein: 5, carbs: 55, fats: 1, price_sar: 8.8, estimated: true },
  { id: 'shrimpnation-rocca-salad', chain: 'Shrimp Nation', name: 'Rocca Salad', category: 'side', calories: 140, protein: 4, carbs: 20, fats: 5, price_sar: 18.7, estimated: true },
  { id: 'shrimpnation-shrimp-corn-salad', chain: 'Shrimp Nation', name: 'Shrimp & Corn Salad', category: 'side', calories: 610, protein: 20, carbs: 35, fats: 43, price_sar: 27.5, estimated: true },
  { id: 'shrimpnation-crab-salad', chain: 'Shrimp Nation', name: 'Crab Salad', category: 'side', calories: 670, protein: 18, carbs: 30, fats: 53, price_sar: 41.8, estimated: true },
  { id: 'shrimpnation-nation-soup', chain: 'Shrimp Nation', name: 'Shrimp Nation Soup', category: 'side', calories: 300, protein: 18, carbs: 20, fats: 16, price_sar: 30.8, estimated: true },
  { id: 'shrimpnation-tom-yum', chain: 'Shrimp Nation', name: 'Tom Yum Soup', category: 'side', calories: 45, protein: 4, carbs: 5, fats: 1, price_sar: 30.8, estimated: true },
  { id: 'shrimpnation-shrimp-soup', chain: 'Shrimp Nation', name: 'Shrimp Soup (Creamy)', category: 'side', calories: 430, protein: 16, carbs: 22, fats: 31, price_sar: 30.8, estimated: true },
  { id: 'shrimpnation-fries', chain: 'Shrimp Nation', name: 'French Fries', category: 'side', calories: 590, protein: 7, carbs: 68, fats: 32, price_sar: 13.2, estimated: true },
  { id: 'shrimpnation-wedges', chain: 'Shrimp Nation', name: 'Wedges Fries', category: 'side', calories: 740, protein: 8, carbs: 86, fats: 40, price_sar: 19.8, estimated: true },
  { id: 'shrimpnation-pineapple-pudding', chain: 'Shrimp Nation', name: 'Pineapple Pudding', category: 'dessert', calories: 290, protein: 4, carbs: 38, fats: 14, price_sar: 30.8, estimated: true },

  // ── Shrimp Shack ───────────────────────────────────────────────
  // Reconciled to HungerStation SFDA labels (2026-07). Labels self-verify:
  // calamari meal = 2x snack + fries exactly (199x2+215=613), shack rolls
  // double at exactly 2x, boil sizes near-linear. Skipped: "New" section
  // (promo), creamy soup at "900", peeled-shrimp duplicates (same labels),
  // kids meals, shack boxes / World Cup feasts, drinks.
  { id: 'shrimpshack-boil', chain: 'Shrimp Shack', name: 'Medium Shrimp Boil (9 pc)', category: 'main', calories: 498, protein: 42, carbs: 40, fats: 18, price_sar: 47, estimated: true, family: 'shrimpshack-medium-boil', units: 1 },
  { id: 'shrimpshack-boil-double', chain: 'Shrimp Shack', name: 'Medium Shrimp Boil (18 pc)', category: 'main', calories: 970, protein: 80, carbs: 78, fats: 38, price_sar: 83, estimated: true, family: 'shrimpshack-medium-boil', units: 2 },
  { id: 'shrimpshack-jumbo-boil', chain: 'Shrimp Shack', name: 'Jumbo Shrimp Boil (6 pc)', category: 'main', calories: 510, protein: 45, carbs: 40, fats: 19, price_sar: 65, estimated: true },
  { id: 'shrimpshack-crab', chain: 'Shrimp Shack', name: 'Crab Boil (3 pc)', category: 'main', calories: 408, protein: 35, carbs: 40, fats: 12, price_sar: 59, estimated: true },
  { id: 'shrimpshack-lobster', chain: 'Shrimp Shack', name: 'Lobster Boil (1 pc)', category: 'main', calories: 502, protein: 40, carbs: 45, fats: 18, price_sar: 139, estimated: true },
  { id: 'shrimpshack-fish-bucket', chain: 'Shrimp Shack', name: 'Fried Fish Bucket (5-6 pc)', category: 'main', calories: 657, protein: 40, carbs: 58, fats: 29, price_sar: 59, estimated: true },
  { id: 'shrimpshack-fried-meal', chain: 'Shrimp Shack', name: 'Shrimp Basket Meal (10 pc with Fries)', category: 'main', calories: 958, protein: 38, carbs: 88, fats: 50, price_sar: 54, estimated: true },
  { id: 'shrimpshack-basket-snack', chain: 'Shrimp Shack', name: 'Shrimp Basket Snack (5 pc)', category: 'main', calories: 342, protein: 18, carbs: 33, fats: 15, price_sar: 29, estimated: true },
  { id: 'shrimpshack-fried-bucket-25', chain: 'Shrimp Shack', name: 'Fried Shrimp Bucket (25 pc with Fries)', category: 'main', calories: 2115, protein: 95, carbs: 190, fats: 108, price_sar: 119, estimated: true },
  { id: 'shrimpshack-calamari-snack', chain: 'Shrimp Shack', name: 'Calamari Basket Snack (8 pc)', category: 'main', calories: 199, protein: 12, carbs: 22, fats: 7, price_sar: 29, estimated: true },
  { id: 'shrimpshack-calamari-meal', chain: 'Shrimp Shack', name: 'Calamari Basket Meal (16 pc with Fries)', category: 'main', calories: 613, protein: 22, carbs: 66, fats: 29, price_sar: 47, estimated: true },
  { id: 'shrimpshack-mix-platter', chain: 'Shrimp Shack', name: 'Mix Platter (Shrimp, Calamari & Fish)', category: 'main', calories: 1230, protein: 55, carbs: 110, fats: 63, price_sar: 89, estimated: true },
  { id: 'shrimpshack-burger', chain: 'Shrimp Shack', name: 'Shack Roll (Fried Shrimp)', category: 'main', calories: 528, protein: 24, carbs: 46, fats: 27, price_sar: 25, estimated: true },
  { id: 'shrimpshack-roll-boiled', chain: 'Shrimp Shack', name: 'Shack Roll (Boiled Shrimp)', category: 'main', calories: 452, protein: 26, carbs: 46, fats: 18, price_sar: 25, estimated: true },
  { id: 'shrimpshack-fish-roll', chain: 'Shrimp Shack', name: 'Fish Roll', category: 'main', calories: 444, protein: 22, carbs: 46, fats: 19, price_sar: 29, estimated: true },
  { id: 'shrimpshack-fish-burger', chain: 'Shrimp Shack', name: 'Fish Burger', category: 'main', calories: 503, protein: 24, carbs: 44, fats: 25, price_sar: 25, estimated: true },
  { id: 'shrimpshack-dynamite', chain: 'Shrimp Shack', name: 'Dynamite Shrimp', category: 'main', calories: 880, protein: 30, carbs: 60, fats: 58, price_sar: 51, estimated: true },
  { id: 'shrimpshack-rice', chain: 'Shrimp Shack', name: 'Steamed White Rice', category: 'side', calories: 253, protein: 5, carbs: 54, fats: 2, price_sar: 10, estimated: true },
  { id: 'shrimpshack-fries', chain: 'Shrimp Shack', name: 'French Fries', category: 'side', calories: 333, protein: 4, carbs: 44, fats: 15, price_sar: 11, estimated: true },
  { id: 'shrimpshack-corn', chain: 'Shrimp Shack', name: 'Boiled Corn', category: 'side', calories: 146, protein: 4, carbs: 28, fats: 2, price_sar: 6, estimated: true },
  { id: 'shrimpshack-rocket-salad', chain: 'Shrimp Shack', name: 'Rocket Salad', category: 'side', calories: 274, protein: 8, carbs: 12, fats: 21, price_sar: 15, estimated: true },
  { id: 'shrimpshack-bread', chain: 'Shrimp Shack', name: 'Brioche Bread', category: 'side', calories: 174, protein: 5, carbs: 32, fats: 3, price_sar: 4, estimated: true },

  // ── Shrimplus ──────────────────────────────────────────────────
  // Rebuilt from the real HungerStation Malqa menu (2026-07). No calorie
  // labels anywhere on the menu → composition estimates with HS prices.
  // Boiled catches include the corn noted in their descriptions. Skipped:
  // Limited Period section (promo), all meals/lunch offers (drinks),
  // seasoning/sauce cups, beverages.
  { id: 'shrimplus-shrimp-9', chain: 'Shrimplus', name: 'Boiled Shrimp (9 pc with Corn)', category: 'main', calories: 400, protein: 40, carbs: 25, fats: 15, price_sar: 59, family: 'shrimplus-boiled-shrimp', units: 9, estimated: true },
  { id: 'shrimplus-shrimp-13', chain: 'Shrimplus', name: 'Boiled Shrimp (13 pc with Corn)', category: 'main', calories: 520, protein: 55, carbs: 30, fats: 20, price_sar: 69, family: 'shrimplus-boiled-shrimp', units: 13, estimated: true },
  { id: 'shrimplus-shrimp-26', chain: 'Shrimplus', name: 'Boiled Shrimp (26 pc with Corn)', category: 'main', calories: 900, protein: 105, carbs: 40, fats: 35, price_sar: 115, family: 'shrimplus-boiled-shrimp', units: 26, estimated: true },
  { id: 'shrimplus-shrimp-39', chain: 'Shrimplus', name: 'Boiled Shrimp (39 pc with 2 Corn)', category: 'main', calories: 1300, protein: 155, carbs: 55, fats: 51, price_sar: 149, family: 'shrimplus-boiled-shrimp', units: 39, estimated: true },
  { id: 'shrimplus-crab-single', chain: 'Shrimplus', name: 'Crab Single (2-3 pc with Corn)', category: 'main', calories: 420, protein: 30, carbs: 28, fats: 20, price_sar: 55, family: 'shrimplus-crab', units: 1, estimated: true },
  { id: 'shrimplus-crab-double', chain: 'Shrimplus', name: 'Crab Double (4-6 pc with Corn)', category: 'main', calories: 700, protein: 52, carbs: 35, fats: 39, price_sar: 85, family: 'shrimplus-crab', units: 2, estimated: true },
  { id: 'shrimplus-mussels-single', chain: 'Shrimplus', name: 'Mussels Single (10 pc with Corn)', category: 'main', calories: 380, protein: 28, carbs: 30, fats: 16, price_sar: 99, family: 'shrimplus-mussels', units: 1, estimated: true },
  { id: 'shrimplus-mussels-double', chain: 'Shrimplus', name: 'Mussels Double (20 pc with Corn)', category: 'main', calories: 630, protein: 50, carbs: 40, fats: 30, price_sar: 125, family: 'shrimplus-mussels', units: 2, estimated: true },
  { id: 'shrimplus-3-catch-bucket', chain: 'Shrimplus', name: '3 Catch in 1 Bucket', category: 'main', calories: 1030, protein: 108, carbs: 48, fats: 45, price_sar: 199, estimated: true },
  { id: 'shrimplus-seafood-mix-small', chain: 'Shrimplus', name: 'Seafood Mix Small', category: 'main', calories: 750, protein: 75, carbs: 40, fats: 32, price_sar: 129, estimated: true },
  { id: 'shrimplus-shrimprice', chain: 'Shrimplus', name: 'Shrimprice (10 pc with Rice)', category: 'main', calories: 750, protein: 45, carbs: 95, fats: 20, price_sar: 79, estimated: true },
  { id: 'shrimplus-platter', chain: 'Shrimplus', name: 'Shrimplus Platter (Fried Mix)', category: 'main', calories: 1200, protein: 70, carbs: 90, fats: 62, price_sar: 109, estimated: true },
  { id: 'shrimplus-seabass-2pc', chain: 'Shrimplus', name: 'Seabass Fillet (2 pc)', category: 'main', calories: 520, protein: 32, carbs: 36, fats: 28, price_sar: 57, family: 'shrimplus-seabass', units: 2, estimated: true },
  { id: 'shrimplus-seabass-4pc', chain: 'Shrimplus', name: 'Seabass Fillet (4 pc)', category: 'main', calories: 1040, protein: 64, carbs: 72, fats: 56, price_sar: 99, family: 'shrimplus-seabass', units: 4, estimated: true },
  { id: 'shrimplus-fried-shrimp', chain: 'Shrimplus', name: 'Fried Shrimp', category: 'main', calories: 560, protein: 35, carbs: 40, fats: 29, price_sar: 57, estimated: true },
  { id: 'shrimplus-fried-calamari', chain: 'Shrimplus', name: 'Fried Calamari', category: 'main', calories: 480, protein: 26, carbs: 40, fats: 24, price_sar: 45, estimated: true },
  { id: 'shrimplus-shrimp-roll', chain: 'Shrimplus', name: 'Shrimp Roll', category: 'main', calories: 480, protein: 22, carbs: 46, fats: 22, price_sar: 23, estimated: true },
  { id: 'shrimplus-smoked-shrimp-roll', chain: 'Shrimplus', name: 'Smoked Shrimp Roll (10 pc)', category: 'main', calories: 450, protein: 28, carbs: 44, fats: 17, price_sar: 29, estimated: true },
  { id: 'shrimplus-chimichurri-roll', chain: 'Shrimplus', name: 'Chimichurri Shrimp Roll', category: 'main', calories: 470, protein: 22, carbs: 45, fats: 22, price_sar: 23, estimated: true },
  { id: 'shrimplus-seabass-burger', chain: 'Shrimplus', name: 'Seabass Fish Fillet Burger', category: 'main', calories: 560, protein: 30, carbs: 48, fats: 28, price_sar: 33, estimated: true },
  { id: 'shrimplus-shrimp-burger', chain: 'Shrimplus', name: 'Shrimp Burger', category: 'main', calories: 550, protein: 25, carbs: 50, fats: 28, price_sar: 29, estimated: true },
  { id: 'shrimplus-shrimp-chowder', chain: 'Shrimplus', name: 'Shrimp Chowder', category: 'side', calories: 380, protein: 20, carbs: 28, fats: 20, price_sar: 33, estimated: true },
  { id: 'shrimplus-corn', chain: 'Shrimplus', name: 'Corn (2 pc with Sauce)', category: 'side', calories: 320, protein: 8, carbs: 40, fats: 14, price_sar: 19, estimated: true },
  { id: 'shrimplus-rice', chain: 'Shrimplus', name: 'Rice Bowl', category: 'side', calories: 340, protein: 6, carbs: 70, fats: 3, price_sar: 14, estimated: true },
  { id: 'shrimplus-fries', chain: 'Shrimplus', name: 'French Fries', category: 'side', calories: 420, protein: 5, carbs: 54, fats: 20, price_sar: 15, estimated: true },
  { id: 'shrimplus-rocca-salad', chain: 'Shrimplus', name: 'Rocca Salad', category: 'side', calories: 90, protein: 2, carbs: 10, fats: 5, price_sar: 7, estimated: true },
  { id: 'shrimplus-dynamite-shrimp', chain: 'Shrimplus', name: 'Dynamite Shrimp', category: 'side', calories: 450, protein: 20, carbs: 30, fats: 27, price_sar: 17, estimated: true },
];
