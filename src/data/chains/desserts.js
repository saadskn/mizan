// Dessert chains operating in Riyadh. All items category "dessert"
// (max one per combo, enforced by the engine). No drinks.
// Tier 1: Krispy Kreme, Dunkin', Cinnabon, Baskin Robbins.
// Tier 2: Cold Stone Creamery, House of Donuts, Munch Bakery, Saadeddin,
// Pinkberry, Häagen-Dazs (Riyadh presence re-verified via official locators).

export default [
  // ── Krispy Kreme ───────────────────────────────────────────────
  { id: 'krispykreme-original-glazed', chain: 'Krispy Kreme', name: 'Original Glazed Doughnut', category: 'dessert', calories: 190, protein: 3, carbs: 22, fats: 11, price_sar: 5, family: 'kk-glazed', units: 1, estimated: false },
  { id: 'krispykreme-chocolate-iced', chain: 'Krispy Kreme', name: 'Chocolate Iced Glazed', category: 'dessert', calories: 240, protein: 3, carbs: 33, fats: 11, price_sar: 6, estimated: false },
  { id: 'krispykreme-kreme-filled', chain: 'Krispy Kreme', name: 'Glazed Kreme Filled', category: 'dessert', calories: 340, protein: 4, carbs: 39, fats: 19, price_sar: 7, estimated: false },
  { id: 'krispykreme-cinnamon-sugar', chain: 'Krispy Kreme', name: 'Cinnamon Sugar Doughnut', category: 'dessert', calories: 210, protein: 3, carbs: 25, fats: 11, price_sar: 5, estimated: false },
  { id: 'krispykreme-glazed-3pc', chain: 'Krispy Kreme', name: 'Original Glazed (3 pc)', category: 'dessert', calories: 570, protein: 9, carbs: 66, fats: 33, price_sar: 14, family: 'kk-glazed', units: 3, estimated: false },
  // HungerStation menu expansion (2026-07): SFDA calorie labels, estimated macros.
  { id: 'krispykreme-choco-sprinkles', chain: 'Krispy Kreme', name: 'Choco Iced with Sprinkles', category: 'dessert', calories: 270, protein: 3, carbs: 38, fats: 11, price_sar: 8, estimated: true },
  { id: 'krispykreme-caramel-creme-crunch', chain: 'Krispy Kreme', name: 'Caramel Crème Crunch', category: 'dessert', calories: 380, protein: 4, carbs: 48, fats: 18, price_sar: 8, estimated: true },
  { id: 'krispykreme-lotus-biscoff', chain: 'Krispy Kreme', name: 'Lotus Biscoff Kreme Filled', category: 'dessert', calories: 533, protein: 6, carbs: 60, fats: 29, price_sar: 9, estimated: true },
  { id: 'krispykreme-nutty-cocoa-ring', chain: 'Krispy Kreme', name: 'Nutty Cocoa Filled Ring', category: 'dessert', calories: 465, protein: 6, carbs: 50, fats: 26, price_sar: 9, estimated: true },
  { id: 'krispykreme-hazelnut-dream', chain: 'Krispy Kreme', name: 'Hazelnut Dream Cake Doughnut', category: 'dessert', calories: 496, protein: 6, carbs: 54, fats: 28, price_sar: 8, estimated: true },
  { id: 'krispykreme-tamrona', chain: 'Krispy Kreme', name: 'Tamrona (Date Kreme Filled)', category: 'dessert', calories: 472, protein: 5, carbs: 64, fats: 21, price_sar: 8, estimated: true },
  { id: 'krispykreme-glazed-choc-cake', chain: 'Krispy Kreme', name: 'Glazed Chocolate Cake Doughnut', category: 'dessert', calories: 300, protein: 3, carbs: 42, fats: 13, price_sar: 8, estimated: true },
  { id: 'krispykreme-cinnamon-glaze-roll', chain: 'Krispy Kreme', name: 'Cinnamon Glaze Roll', category: 'dessert', calories: 454, protein: 6, carbs: 63, fats: 19, price_sar: 9, estimated: true },

  // ── Dunkin' ────────────────────────────────────────────────────
  { id: 'dunkin-glazed', chain: "Dunkin'", name: 'Glazed Donut', category: 'dessert', calories: 240, protein: 4, carbs: 33, fats: 11, price_sar: 5, estimated: false },
  { id: 'dunkin-boston-kreme', chain: "Dunkin'", name: 'Boston Kreme Donut', category: 'dessert', calories: 300, protein: 4, carbs: 39, fats: 14, price_sar: 6, estimated: false },
  { id: 'dunkin-chocolate-frosted', chain: "Dunkin'", name: 'Chocolate Frosted Donut', category: 'dessert', calories: 270, protein: 4, carbs: 36, fats: 12, price_sar: 6, estimated: false },
  { id: 'dunkin-munchkins-5', chain: "Dunkin'", name: 'Munchkins (5 pc)', category: 'dessert', calories: 280, protein: 4, carbs: 36, fats: 13, price_sar: 8, estimated: false },
  { id: 'dunkin-bavarian-kreme', chain: "Dunkin'", name: 'Bavarian Kreme Donut', category: 'dessert', calories: 290, protein: 5, carbs: 36, fats: 14, price_sar: 6, estimated: false },
  // HungerStation menu expansion (2026-07): SFDA calorie labels, estimated macros.
  { id: 'dunkin-old-fashion', chain: "Dunkin'", name: 'Old Fashion Donut', category: 'dessert', calories: 354, protein: 5, carbs: 40, fats: 19, price_sar: 6, estimated: true },
  { id: 'dunkin-cookie-donut', chain: "Dunkin'", name: 'Cookie Donut', category: 'dessert', calories: 331, protein: 5, carbs: 44, fats: 15, price_sar: 6, estimated: true },
  { id: 'dunkin-choco-heart', chain: "Dunkin'", name: 'Choco Heart Donut', category: 'dessert', calories: 417, protein: 5, carbs: 52, fats: 21, price_sar: 8, estimated: true },
  { id: 'dunkin-pistachio-crunch', chain: "Dunkin'", name: 'Pistachio Creamy Crunch Donut', category: 'dessert', calories: 549, protein: 8, carbs: 58, fats: 32, price_sar: 8, estimated: true },
  { id: 'dunkin-bagel-egg-cheese', chain: "Dunkin'", name: 'Bagel Egg & Cheese (Plain)', category: 'main', calories: 371, protein: 17, carbs: 48, fats: 13, price_sar: 16, estimated: true },
  { id: 'dunkin-bagel-cinnamon-cheese', chain: "Dunkin'", name: 'Bagel Cinnamon Double Cheese', category: 'main', calories: 315, protein: 13, carbs: 43, fats: 10, price_sar: 16, estimated: true },
  { id: 'dunkin-xtreme-egg-toasty', chain: "Dunkin'", name: 'Xtreme Egg Toasty', category: 'main', calories: 515, protein: 16, carbs: 42, fats: 32, price_sar: 16, estimated: true },
  { id: 'dunkin-toasty-chicken', chain: "Dunkin'", name: 'Big N Toasty Chicken', category: 'main', calories: 365, protein: 22, carbs: 34, fats: 16, price_sar: 20, estimated: true },
  { id: 'dunkin-toasty-egg-cheese', chain: "Dunkin'", name: 'Big N Toasty Egg N Cheese', category: 'main', calories: 306, protein: 14, carbs: 32, fats: 14, price_sar: 16, estimated: true },
  { id: 'dunkin-labneh-honey-toast', chain: "Dunkin'", name: 'Labneh Honey Toast', category: 'main', calories: 306, protein: 9, carbs: 46, fats: 10, price_sar: 13, estimated: true },
  { id: 'dunkin-labneh-pesto-toast', chain: "Dunkin'", name: 'Labneh Pesto Toast', category: 'main', calories: 334, protein: 10, carbs: 36, fats: 17, price_sar: 13, estimated: true },

  // ── Cinnabon ───────────────────────────────────────────────────
  { id: 'cinnabon-classic-roll', chain: 'Cinnabon', name: 'Classic Roll', category: 'dessert', calories: 880, protein: 12, carbs: 127, fats: 36, price_sar: 18, estimated: false },
  { id: 'cinnabon-minibon', chain: 'Cinnabon', name: 'Minibon', category: 'dessert', calories: 350, protein: 5, carbs: 51, fats: 14, price_sar: 11, estimated: false },
  { id: 'cinnabon-bonbites-4', chain: 'Cinnabon', name: 'BonBites (4 pc)', category: 'dessert', calories: 410, protein: 6, carbs: 60, fats: 17, price_sar: 14, estimated: false },
  { id: 'cinnabon-caramel-pecanbon', chain: 'Cinnabon', name: 'Caramel Pecanbon', category: 'dessert', calories: 970, protein: 13, carbs: 133, fats: 42, price_sar: 21, estimated: false },
  { id: 'cinnabon-stix-5', chain: 'Cinnabon', name: 'Cinnabon Stix (5 pc)', category: 'dessert', calories: 380, protein: 6, carbs: 46, fats: 19, price_sar: 12, estimated: false },

  // ── Baskin Robbins ─────────────────────────────────────────────
  { id: 'baskin-vanilla-single', chain: 'Baskin Robbins', name: 'Vanilla Scoop (Single)', category: 'dessert', calories: 260, protein: 4, carbs: 31, fats: 14, price_sar: 8, estimated: false },
  { id: 'baskin-chocolate-chip', chain: 'Baskin Robbins', name: 'Chocolate Chip Scoop', category: 'dessert', calories: 270, protein: 5, carbs: 32, fats: 14, price_sar: 8, estimated: false },
  { id: 'baskin-pralines-cream', chain: 'Baskin Robbins', name: "Pralines 'n Cream Scoop", category: 'dessert', calories: 280, protein: 4, carbs: 34, fats: 14, price_sar: 8, estimated: false },
  { id: 'baskin-double-scoop', chain: 'Baskin Robbins', name: 'Double Scoop Cup', category: 'dessert', calories: 520, protein: 9, carbs: 63, fats: 27, price_sar: 14, estimated: false },
  { id: 'baskin-banana-split', chain: 'Baskin Robbins', name: 'Banana Split', category: 'dessert', calories: 540, protein: 8, carbs: 88, fats: 18, price_sar: 21, estimated: false },
  // HungerStation menu expansion (2026-07): SFDA calorie labels, estimated macros.
  // Note: per-scoop cup calories on HungerStation (~140/4oz) contradict BR published data — skipped; sundaes below are plausible.
  { id: 'baskin-banana-royale', chain: 'Baskin Robbins', name: 'Banana Royale (Value)', category: 'dessert', calories: 546, protein: 8, carbs: 70, fats: 26, price_sar: 36, estimated: true },
  { id: 'baskin-brownie-alamode', chain: 'Baskin Robbins', name: 'Brownie à la Mode (Value)', category: 'dessert', calories: 694, protein: 9, carbs: 86, fats: 34, price_sar: 36, estimated: true },
  { id: 'baskin-banana-split-value', chain: 'Baskin Robbins', name: 'Banana Split (Value)', category: 'dessert', calories: 742, protein: 11, carbs: 102, fats: 32, price_sar: 45, estimated: true },
  { id: 'baskin-burj-emlaaq', chain: 'Baskin Robbins', name: 'Burj Al Emlaaq Sundae', category: 'dessert', calories: 777, protein: 11, carbs: 92, fats: 40, price_sar: 45, estimated: true },
  { id: 'baskin-mochi-strawberry', chain: 'Baskin Robbins', name: 'Mochi Strawberry', category: 'dessert', calories: 173, protein: 3, carbs: 30, fats: 5, price_sar: 20, estimated: true },
  { id: 'baskin-macaron-pralines', chain: 'Baskin Robbins', name: "Ice Cream Macaron (Pralines 'n Cream)", category: 'dessert', calories: 260, protein: 4, carbs: 32, fats: 13, price_sar: 22, estimated: true },

  // ── Cold Stone Creamery ────────────────────────────────────────
  { id: 'coldstone-founders-favorite', chain: 'Cold Stone Creamery', name: "Founder's Favorite (Like It)", category: 'dessert', calories: 530, protein: 8, carbs: 63, fats: 28, price_sar: 24, estimated: false },
  { id: 'coldstone-chocolate-devotion', chain: 'Cold Stone Creamery', name: 'Chocolate Devotion (Like It)', category: 'dessert', calories: 560, protein: 8, carbs: 68, fats: 29, price_sar: 24, estimated: false },
  { id: 'coldstone-cookie-dough', chain: 'Cold Stone Creamery', name: "Cookie Doughn't You Want Some (Like It)", category: 'dessert', calories: 550, protein: 8, carbs: 70, fats: 27, price_sar: 25, estimated: false },
  { id: 'coldstone-strawberry-banana', chain: 'Cold Stone Creamery', name: 'Strawberry Banana Rendezvous (Like It)', category: 'dessert', calories: 430, protein: 6, carbs: 58, fats: 20, price_sar: 22, estimated: false },
  { id: 'coldstone-waffle-sweet-cream', chain: 'Cold Stone Creamery', name: 'Sweet Cream in Waffle Cone', category: 'dessert', calories: 600, protein: 9, carbs: 72, fats: 31, price_sar: 27, estimated: false },

  // ── House of Donuts ────────────────────────────────────────────
  { id: 'houseofdonuts-glazed', chain: 'House of Donuts', name: 'Glazed Donut', category: 'dessert', calories: 240, protein: 4, carbs: 33, fats: 10, price_sar: 7, estimated: true },
  { id: 'houseofdonuts-chocolate', chain: 'House of Donuts', name: 'Chocolate Frosted Donut', category: 'dessert', calories: 260, protein: 4, carbs: 35, fats: 12, price_sar: 8, estimated: true },
  { id: 'houseofdonuts-cream-filled', chain: 'House of Donuts', name: 'Cream Filled Donut', category: 'dessert', calories: 310, protein: 5, carbs: 38, fats: 15, price_sar: 9, estimated: true },
  { id: 'houseofdonuts-mini-6', chain: 'House of Donuts', name: 'Mini Donuts (6 pc)', category: 'dessert', calories: 390, protein: 6, carbs: 50, fats: 19, price_sar: 10, estimated: true },
  { id: 'houseofdonuts-cheesecake', chain: 'House of Donuts', name: 'Cheesecake Slice', category: 'dessert', calories: 420, protein: 7, carbs: 38, fats: 27, price_sar: 14, estimated: true },

  // ── Munch Bakery ───────────────────────────────────────────────
  { id: 'munch-chocolate-chip-cookie', chain: 'Munch Bakery', name: 'Chocolate Chip Cookie', category: 'dessert', calories: 290, protein: 4, carbs: 38, fats: 14, price_sar: 9, estimated: true },
  { id: 'munch-red-velvet-slice', chain: 'Munch Bakery', name: 'Red Velvet Cake Slice', category: 'dessert', calories: 470, protein: 5, carbs: 58, fats: 24, price_sar: 17, estimated: true },
  { id: 'munch-brownie', chain: 'Munch Bakery', name: 'Brownie', category: 'dessert', calories: 380, protein: 5, carbs: 46, fats: 20, price_sar: 12, estimated: true },
  { id: 'munch-mini-cupcakes-4', chain: 'Munch Bakery', name: 'Mini Cupcakes (4 pc)', category: 'dessert', calories: 420, protein: 4, carbs: 54, fats: 21, price_sar: 16, estimated: true },
  { id: 'munch-red-velvet-cupcake', chain: 'Munch Bakery', name: 'Red Velvet Cupcake', category: 'dessert', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 13, estimated: true },
  { id: 'munch-kunafa-cup', chain: 'Munch Bakery', name: 'Kunafa Cup', category: 'dessert', calories: 380, protein: 7, carbs: 48, fats: 18, price_sar: 15, estimated: true },

  // ── Saadeddin ──────────────────────────────────────────────────
  { id: 'saadeddin-kunafa-cheese', chain: 'Saadeddin', name: 'Kunafa Cheese (Slice)', category: 'dessert', calories: 450, protein: 9, carbs: 55, fats: 22, price_sar: 16, estimated: true },
  { id: 'saadeddin-basbousa-2', chain: 'Saadeddin', name: 'Basbousa (2 pc)', category: 'dessert', calories: 380, protein: 5, carbs: 58, fats: 14, price_sar: 12, estimated: true },
  { id: 'saadeddin-umm-ali', chain: 'Saadeddin', name: 'Umm Ali (Portion)', category: 'dessert', calories: 450, protein: 10, carbs: 52, fats: 22, price_sar: 15, estimated: true },
  { id: 'saadeddin-baklava-4', chain: 'Saadeddin', name: 'Baklava Assortment (4 pc)', category: 'dessert', calories: 420, protein: 6, carbs: 48, fats: 23, price_sar: 15, estimated: true },
  { id: 'saadeddin-cheesecake', chain: 'Saadeddin', name: 'Cheesecake Slice', category: 'dessert', calories: 430, protein: 7, carbs: 40, fats: 27, price_sar: 17, estimated: true },
  { id: 'saadeddin-maamoul-dates-3', chain: 'Saadeddin', name: 'Maamoul Dates (3 pc)', category: 'dessert', calories: 330, protein: 5, carbs: 48, fats: 13, price_sar: 10, estimated: true },

  // ── Pinkberry ──────────────────────────────────────────────────
  { id: 'pinkberry-original-small', chain: 'Pinkberry', name: 'Original Frozen Yogurt (Small)', category: 'dessert', calories: 210, protein: 6, carbs: 42, fats: 2, price_sar: 16, estimated: false },
  { id: 'pinkberry-chocolate-small', chain: 'Pinkberry', name: 'Chocolate Frozen Yogurt (Small)', category: 'dessert', calories: 240, protein: 7, carbs: 46, fats: 4, price_sar: 16, estimated: false },
  { id: 'pinkberry-original-fruit-medium', chain: 'Pinkberry', name: 'Original with Fruit (Medium)', category: 'dessert', calories: 320, protein: 8, carbs: 62, fats: 3, price_sar: 22, estimated: false },
  { id: 'pinkberry-salted-caramel-small', chain: 'Pinkberry', name: 'Salted Caramel (Small)', category: 'dessert', calories: 250, protein: 6, carbs: 48, fats: 4, price_sar: 17, estimated: false },
  { id: 'pinkberry-original-large', chain: 'Pinkberry', name: 'Original Frozen Yogurt (Large)', category: 'dessert', calories: 380, protein: 11, carbs: 76, fats: 4, price_sar: 26, estimated: false },

  // ── Häagen-Dazs ────────────────────────────────────────────────
  { id: 'haagendazs-vanilla-single', chain: 'Häagen-Dazs', name: 'Vanilla Scoop (Single)', category: 'dessert', calories: 250, protein: 4, carbs: 21, fats: 17, price_sar: 14, estimated: false },
  { id: 'haagendazs-belgian-chocolate', chain: 'Häagen-Dazs', name: 'Belgian Chocolate Scoop', category: 'dessert', calories: 290, protein: 5, carbs: 26, fats: 18, price_sar: 14, estimated: false },
  { id: 'haagendazs-cookies-cream', chain: 'Häagen-Dazs', name: 'Cookies & Cream Scoop', category: 'dessert', calories: 270, protein: 5, carbs: 24, fats: 17, price_sar: 14, estimated: false },
  { id: 'haagendazs-double-scoop', chain: 'Häagen-Dazs', name: 'Double Scoop Cup', category: 'dessert', calories: 520, protein: 9, carbs: 46, fats: 34, price_sar: 24, estimated: false },
  { id: 'haagendazs-macadamia', chain: 'Häagen-Dazs', name: 'Macadamia Nut Brittle Scoop', category: 'dessert', calories: 280, protein: 4, carbs: 25, fats: 18, price_sar: 14, estimated: false },
];
