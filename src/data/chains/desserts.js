// Dessert chains operating in Riyadh. All items category "dessert"
// (max one per combo, enforced by the engine). No drinks.
// Tier 1: Krispy Kreme, Dunkin', Cinnabon, Baskin Robbins.
// Tier 2: Cold Stone Creamery, Munch Bakery, Saadeddin,
// Pinkberry, Häagen-Dazs (Riyadh presence re-verified via official locators).

export default [
  // ── Krispy Kreme ───────────────────────────────────────────────
  // Re-audited 2026-07 vs real HS menu (Malqa, /93811): HS calorie labels,
  // macros back-computed. Removed Glazed Kreme Filled + Cinnamon Sugar (not
  // sold here). Skipped: LTO dozen deals, dozen/mini boxes, Pack of 3 Premium
  // (choose-your-own, per-piece avg label), Bambolini mix boxes, all hot/iced
  // coffee & hot chocolate (beverage ban).
  { id: 'krispykreme-original-glazed', chain: 'Krispy Kreme', name: 'Original Glazed Doughnut', category: 'dessert', calories: 200, protein: 3, carbs: 22, fats: 11, price_sar: 7, family: 'kk-glazed', units: 1, estimated: true },
  { id: 'krispykreme-chocolate-iced', chain: 'Krispy Kreme', name: 'Choco Iced Glazed', category: 'dessert', calories: 250, protein: 4, carbs: 31, fats: 12, price_sar: 8, estimated: true },
  { id: 'krispykreme-glazed-3pc', chain: 'Krispy Kreme', name: 'Original Glazed (Pack of 3)', category: 'dessert', calories: 600, protein: 9, carbs: 66, fats: 33, price_sar: 18, family: 'kk-glazed', units: 3, estimated: true },
  { id: 'krispykreme-eclair-double-choc', chain: 'Krispy Kreme', name: 'Eclair Double Chocolate', category: 'dessert', calories: 568, protein: 8, carbs: 60, fats: 32, price_sar: 8, estimated: true },
  { id: 'krispykreme-eclair-custard', chain: 'Krispy Kreme', name: 'Eclair Filled Custard', category: 'dessert', calories: 440, protein: 7, carbs: 52, fats: 22, price_sar: 8, estimated: true },
  { id: 'krispykreme-bambolini-pistachio-kunafa', chain: 'Krispy Kreme', name: 'Pistachio Kunafa Bambolini', category: 'dessert', calories: 264, protein: 5, carbs: 34, fats: 12, price_sar: 6, estimated: true },
  { id: 'krispykreme-bambolini-strawberry', chain: 'Krispy Kreme', name: 'Strawberry Bambolini', category: 'dessert', calories: 207, protein: 4, carbs: 30, fats: 8, price_sar: 6, estimated: true },
  { id: 'krispykreme-bambolini-caramel', chain: 'Krispy Kreme', name: 'Caramel Kreme Bambolini', category: 'dessert', calories: 222, protein: 4, carbs: 31, fats: 9, price_sar: 6, estimated: true },
  { id: 'krispykreme-bambolini-hazelnut', chain: 'Krispy Kreme', name: 'Hazelnut Bambolini', category: 'dessert', calories: 232, protein: 4, carbs: 31, fats: 10, price_sar: 6, estimated: true },
  { id: 'krispykreme-mango-passion-tartini', chain: 'Krispy Kreme', name: 'Mango with Passion Fruit Tartini', category: 'dessert', calories: 427, protein: 6, carbs: 56, fats: 20, price_sar: 8, estimated: true },
  { id: 'krispykreme-mango-cheesecake', chain: 'Krispy Kreme', name: 'Mango Cheesecake Doughnut', category: 'dessert', calories: 386, protein: 6, carbs: 50, fats: 17, price_sar: 8, estimated: true },
  { id: 'krispykreme-orange-cheesecake', chain: 'Krispy Kreme', name: 'Orange Cheesecake Doughnut', category: 'dessert', calories: 363, protein: 6, carbs: 47, fats: 16, price_sar: 8, estimated: true },
  { id: 'krispykreme-red-velvet', chain: 'Krispy Kreme', name: 'Red Velvet Cake Doughnut', category: 'dessert', calories: 570, protein: 7, carbs: 70, fats: 29, price_sar: 8, estimated: true },
  { id: 'krispykreme-cheesecake', chain: 'Krispy Kreme', name: 'Cheesecake Doughnut', category: 'dessert', calories: 340, protein: 5, carbs: 40, fats: 18, price_sar: 9, estimated: true },
  { id: 'krispykreme-vanilla-cake', chain: 'Krispy Kreme', name: 'Vanilla Cake Doughnut', category: 'dessert', calories: 466, protein: 5, carbs: 60, fats: 22, price_sar: 8, estimated: true },
  { id: 'krispykreme-choco-sprinkles', chain: 'Krispy Kreme', name: 'Choco Iced with Sprinkles', category: 'dessert', calories: 270, protein: 3, carbs: 38, fats: 11, price_sar: 8, estimated: true },
  { id: 'krispykreme-caramel-creme-crunch', chain: 'Krispy Kreme', name: 'Caramel Crème Crunch', category: 'dessert', calories: 380, protein: 4, carbs: 48, fats: 18, price_sar: 8, estimated: true },
  { id: 'krispykreme-lotus-biscoff', chain: 'Krispy Kreme', name: 'Lotus Biscoff Kreme Filled', category: 'dessert', calories: 533, protein: 6, carbs: 60, fats: 29, price_sar: 9, estimated: true },
  { id: 'krispykreme-nutty-cocoa-ring', chain: 'Krispy Kreme', name: 'Nutty Cocoa Filled Ring', category: 'dessert', calories: 465, protein: 6, carbs: 50, fats: 26, price_sar: 9, estimated: true },
  { id: 'krispykreme-hazelnut-dream', chain: 'Krispy Kreme', name: 'Hazelnut Dream Cake Doughnut', category: 'dessert', calories: 496, protein: 6, carbs: 54, fats: 28, price_sar: 8, estimated: true },
  { id: 'krispykreme-tamrona', chain: 'Krispy Kreme', name: 'Tamrona (Date Kreme Filled)', category: 'dessert', calories: 472, protein: 5, carbs: 64, fats: 21, price_sar: 8, estimated: true },
  { id: 'krispykreme-glazed-choc-cake', chain: 'Krispy Kreme', name: 'Glazed Chocolate Cake Doughnut', category: 'dessert', calories: 300, protein: 3, carbs: 42, fats: 13, price_sar: 8, estimated: true },
  { id: 'krispykreme-cinnamon-glaze-roll', chain: 'Krispy Kreme', name: 'Cinnamon Glaze Roll', category: 'dessert', calories: 454, protein: 6, carbs: 63, fats: 19, price_sar: 9, estimated: true },

  // ── Dunkin' ────────────────────────────────────────────────────
  // Price audit 2026-07 vs HS Malqa (/162397): classic donuts realigned to HS
  // labels/prices (all donuts 6 SR); Munchkins 5pc + Bavarian Kreme removed (not
  // on HS — only a 25-pc party box with no label). Skipped: all beverages/
  // refreshers/coffee boxes, unlabeled donuts (Vanilla Sprinkle, Cotton Candy,
  // Mango Mirage, whole Fancy section except labeled two), Riri Roll (no label),
  // dozen boxes (sharing), coffee beans, mugs/tumblers, water.
  { id: 'dunkin-glazed', chain: "Dunkin'", name: 'Glazed Donut', category: 'dessert', calories: 254, protein: 4, carbs: 35, fats: 11, price_sar: 6, estimated: true },
  { id: 'dunkin-boston-kreme', chain: "Dunkin'", name: 'Boston Cream Donut', category: 'dessert', calories: 370, protein: 5, carbs: 48, fats: 17, price_sar: 6, estimated: true },
  { id: 'dunkin-chocolate-frosted', chain: "Dunkin'", name: 'Choco Frosted Donut', category: 'dessert', calories: 296, protein: 4, carbs: 40, fats: 13, price_sar: 6, estimated: true },
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
  { id: 'dunkin-bagel-cream-cheese-cinnamon', chain: "Dunkin'", name: 'Bagel Cream Cheese Cinnamon', category: 'main', calories: 382, protein: 12, carbs: 50, fats: 15, price_sar: 16, estimated: true },
  { id: 'dunkin-bagel-plain-double-cheese', chain: "Dunkin'", name: 'Bagel Plain Double Cheese', category: 'main', calories: 370, protein: 16, carbs: 45, fats: 14, price_sar: 16, estimated: true },
  { id: 'dunkin-cheese-croissant', chain: "Dunkin'", name: 'Cheese Croissant', category: 'main', calories: 410, protein: 10, carbs: 38, fats: 24, price_sar: 10, estimated: true },
  { id: 'dunkin-zaatar-croissant', chain: "Dunkin'", name: 'Zaatar Croissant', category: 'main', calories: 409, protein: 9, carbs: 42, fats: 23, price_sar: 10, estimated: true },
  { id: 'dunkin-extreme-egg-croissant', chain: "Dunkin'", name: 'Extreme Egg Croissant Sandwich', category: 'main', calories: 300, protein: 12, carbs: 28, fats: 16, price_sar: 15, estimated: true },
  { id: 'dunkin-plain-croissant', chain: "Dunkin'", name: 'Plain Croissant', category: 'side', calories: 394, protein: 8, carbs: 40, fats: 22, price_sar: 10, estimated: true },
  { id: 'dunkin-cream-cheese-croissant', chain: "Dunkin'", name: 'Cream Cheese Croissant', category: 'side', calories: 390, protein: 9, carbs: 38, fats: 22, price_sar: 15, estimated: true },

  // ── Cinnabon ───────────────────────────────────────────────────
  // HungerStation (Malqa, 2026-07) shows no calorie labels, so macros stay from
  // official Cinnabon nutrition; prices reconciled to HS. Stix not sold on HS
  // (removed); BonBites 4pc replaced by the HS Cinnabites 5pc (macros scaled per
  // piece). Chocobon/Mini Pecan/Mini Choco skipped — no published nutrition.
  { id: 'cinnabon-classic-roll', chain: 'Cinnabon', name: 'Classic Roll', category: 'dessert', calories: 880, protein: 12, carbs: 127, fats: 36, price_sar: 20, estimated: false },
  { id: 'cinnabon-minibon', chain: 'Cinnabon', name: 'Minibon', category: 'dessert', calories: 350, protein: 5, carbs: 51, fats: 14, price_sar: 17, estimated: false },
  { id: 'cinnabon-cinnabites-5', chain: 'Cinnabon', name: 'Cinnabites (5 pc)', category: 'dessert', calories: 513, protein: 8, carbs: 75, fats: 21, price_sar: 18, estimated: true },
  { id: 'cinnabon-caramel-pecanbon', chain: 'Cinnabon', name: 'Pecanbon', category: 'dessert', calories: 970, protein: 13, carbs: 133, fats: 42, price_sar: 24, estimated: false },
  { id: 'cinnabon-chocobon', chain: 'Cinnabon', name: 'Chocobon', category: 'dessert', calories: 900, protein: 12, carbs: 130, fats: 38, price_sar: 21, estimated: true },

  // ── Baskin Robbins ─────────────────────────────────────────────
  // Price audit 2026-07 vs HS Malqa (/25310): old generic 8/14/21-SR scoops replaced
  // with the real Kids(2.5oz)/Value(4oz)/Emlaaq(6oz) cup lineup at HS prices; calories
  // from BR published ~65 kcal/oz (HS's ~88-cal kids / 140-cal value scoop labels
  // contradict published data and stay rejected — sundae-cup section rejected with them).
  // Skipped: flavor packs / bundles / LTO / hand-pack tubs / whole cakes (sharing),
  // hot drinks + thick shake (beverages), topping cups (extras), vegan 500ml tub,
  // pistachio stick (no label).
  { id: 'baskin-single-kids-cup', chain: 'Baskin Robbins', name: 'Single Scoop Cup (Kids 2.5 oz)', category: 'dessert', calories: 165, protein: 3, carbs: 19, fats: 9, price_sar: 13, family: 'baskin-cup', units: 2.5, estimated: true },
  { id: 'baskin-double-kids-cup', chain: 'Baskin Robbins', name: 'Double Scoop Cup (Kids 2.5 oz)', category: 'dessert', calories: 330, protein: 6, carbs: 38, fats: 18, price_sar: 24, family: 'baskin-cup', units: 5, estimated: true },
  { id: 'baskin-triple-kids-cup', chain: 'Baskin Robbins', name: 'Triple Scoop Cup (Kids 2.5 oz)', category: 'dessert', calories: 495, protein: 9, carbs: 57, fats: 26, price_sar: 36, family: 'baskin-cup', units: 7.5, estimated: true },
  { id: 'baskin-single-value-cup', chain: 'Baskin Robbins', name: 'Single Scoop Cup (Value 4 oz)', category: 'dessert', calories: 260, protein: 4, carbs: 31, fats: 14, price_sar: 18, family: 'baskin-cup', units: 4, estimated: true },
  { id: 'baskin-double-value-cup', chain: 'Baskin Robbins', name: 'Double Scoop Cup (Value 4 oz)', category: 'dessert', calories: 520, protein: 8, carbs: 62, fats: 27, price_sar: 32, family: 'baskin-cup', units: 8, estimated: true },
  { id: 'baskin-triple-value-cup', chain: 'Baskin Robbins', name: 'Triple Scoop Cup (Value 4 oz)', category: 'dessert', calories: 780, protein: 12, carbs: 93, fats: 40, price_sar: 44, family: 'baskin-cup', units: 12, estimated: true },
  { id: 'baskin-single-emlaaq-cup', chain: 'Baskin Robbins', name: 'Single Scoop Cup (Emlaaq 6 oz)', category: 'dessert', calories: 390, protein: 6, carbs: 46, fats: 20, price_sar: 23, family: 'baskin-cup', units: 6, estimated: true },
  { id: 'baskin-double-emlaaq-cup', chain: 'Baskin Robbins', name: 'Double Scoop Cup (Emlaaq 6 oz)', category: 'dessert', calories: 780, protein: 12, carbs: 93, fats: 40, price_sar: 40, family: 'baskin-cup', units: 12, estimated: true },
  { id: 'baskin-banana-royale-kids', chain: 'Baskin Robbins', name: 'Banana Royale (Kids)', category: 'dessert', calories: 399, protein: 6, carbs: 57, fats: 16, price_sar: 32, family: 'baskin-banana-royale', units: 5, estimated: true },
  { id: 'baskin-banana-royale', chain: 'Baskin Robbins', name: 'Banana Royale (Value)', category: 'dessert', calories: 546, protein: 8, carbs: 70, fats: 26, price_sar: 36, family: 'baskin-banana-royale', units: 8, estimated: true },
  { id: 'baskin-brownie-alamode-kids', chain: 'Baskin Robbins', name: 'Brownie à la Mode (Kids)', category: 'dessert', calories: 547, protein: 8, carbs: 73, fats: 25, price_sar: 32, family: 'baskin-brownie-alamode', units: 5, estimated: true },
  { id: 'baskin-brownie-alamode', chain: 'Baskin Robbins', name: 'Brownie à la Mode (Value)', category: 'dessert', calories: 694, protein: 9, carbs: 86, fats: 34, price_sar: 36, family: 'baskin-brownie-alamode', units: 8, estimated: true },
  { id: 'baskin-banana-split-kids', chain: 'Baskin Robbins', name: 'Banana Split (Kids)', category: 'dessert', calories: 540, protein: 8, carbs: 88, fats: 18, price_sar: 39, family: 'baskin-banana-split', units: 7.5, estimated: true },
  { id: 'baskin-banana-split-value', chain: 'Baskin Robbins', name: 'Banana Split (Value)', category: 'dessert', calories: 742, protein: 11, carbs: 102, fats: 32, price_sar: 45, family: 'baskin-banana-split', units: 12, estimated: true },
  { id: 'baskin-burj-emlaaq', chain: 'Baskin Robbins', name: 'Burj Al Emlaaq Sundae', category: 'dessert', calories: 777, protein: 11, carbs: 92, fats: 40, price_sar: 45, estimated: true },
  { id: 'baskin-mochi-strawberry', chain: 'Baskin Robbins', name: 'Mochi Strawberry', category: 'dessert', calories: 173, protein: 3, carbs: 30, fats: 5, price_sar: 20, estimated: true },
  { id: 'baskin-macaron-pralines', chain: 'Baskin Robbins', name: "Ice Cream Macaron (Pralines 'n Cream)", category: 'dessert', calories: 260, protein: 4, carbs: 32, fats: 13, price_sar: 22, estimated: true },

  // ── Cold Stone Creamery ────────────────────────────────────────
  // Rebuilt 2026-07 from HungerStation "Cold Stone" (Malqa). Only the
  // 4/6/8 oz signature-creation labels are credible (16/32/48 oz labels are
  // garbage — e.g. Chocolate Devotion 16 oz "156 cal"; Strawberry Blonde
  // 6 oz "523" > 8 oz "345" also junk, dropped). Skipped: kilo party cakes,
  // premium shakes (drinks + "1 Calories" labels), waffle cones ("10 cal"),
  // World Cup offers, To Go duplicates.
  { id: 'coldstone-chocolate-devotion-4oz', chain: 'Cold Stone Creamery', name: 'Chocolate Devotion (4 oz)', category: 'dessert', calories: 190, protein: 3, carbs: 22, fats: 10, price_sar: 22, estimated: true, family: 'coldstone-chocolate-devotion', units: 2 },
  { id: 'coldstone-chocolate-devotion-6oz', chain: 'Cold Stone Creamery', name: 'Chocolate Devotion (6 oz)', category: 'dessert', calories: 230, protein: 4, carbs: 28, fats: 11, price_sar: 27, estimated: true, family: 'coldstone-chocolate-devotion', units: 3 },
  { id: 'coldstone-chocolate-devotion-8oz', chain: 'Cold Stone Creamery', name: 'Chocolate Devotion (8 oz)', category: 'dessert', calories: 260, protein: 4, carbs: 30, fats: 14, price_sar: 32, estimated: true, family: 'coldstone-chocolate-devotion', units: 4 },
  { id: 'coldstone-pb-cup-4oz', chain: 'Cold Stone Creamery', name: 'Peanut Butter Cup Perfection (4 oz)', category: 'dessert', calories: 190, protein: 5, carbs: 20, fats: 10, price_sar: 22, estimated: true, family: 'coldstone-pb-cup', units: 2 },
  { id: 'coldstone-pb-cup-6oz', chain: 'Cold Stone Creamery', name: 'Peanut Butter Cup Perfection (6 oz)', category: 'dessert', calories: 290, protein: 7, carbs: 30, fats: 16, price_sar: 27, estimated: true, family: 'coldstone-pb-cup', units: 3 },
  { id: 'coldstone-pb-cup-8oz', chain: 'Cold Stone Creamery', name: 'Peanut Butter Cup Perfection (8 oz)', category: 'dessert', calories: 315, protein: 8, carbs: 32, fats: 17, price_sar: 32, estimated: true, family: 'coldstone-pb-cup', units: 4 },
  { id: 'coldstone-strawberry-blonde-4oz', chain: 'Cold Stone Creamery', name: 'Our Strawberry Blonde (4 oz)', category: 'dessert', calories: 232, protein: 3, carbs: 30, fats: 11, price_sar: 22, estimated: true, family: 'coldstone-strawberry-blonde', units: 2 },
  { id: 'coldstone-strawberry-blonde-8oz', chain: 'Cold Stone Creamery', name: 'Our Strawberry Blonde (8 oz)', category: 'dessert', calories: 345, protein: 5, carbs: 46, fats: 16, price_sar: 32, estimated: true, family: 'coldstone-strawberry-blonde', units: 4 },
  { id: 'coldstone-birthday-cake-4oz', chain: 'Cold Stone Creamery', name: 'Birthday Cake Remix (4 oz)', category: 'dessert', calories: 290, protein: 4, carbs: 37, fats: 14, price_sar: 22, estimated: true, family: 'coldstone-birthday-cake', units: 2 },
  { id: 'coldstone-birthday-cake-6oz', chain: 'Cold Stone Creamery', name: 'Birthday Cake Remix (6 oz)', category: 'dessert', calories: 390, protein: 5, carbs: 52, fats: 18, price_sar: 27, estimated: true, family: 'coldstone-birthday-cake', units: 3 },
  { id: 'coldstone-birthday-cake-8oz', chain: 'Cold Stone Creamery', name: 'Birthday Cake Remix (8 oz)', category: 'dessert', calories: 420, protein: 6, carbs: 54, fats: 20, price_sar: 32, estimated: true, family: 'coldstone-birthday-cake', units: 4 },
  { id: 'coldstone-mud-pie-4oz', chain: 'Cold Stone Creamery', name: 'Mud Pie Mojo (4 oz)', category: 'dessert', calories: 320, protein: 6, carbs: 36, fats: 17, price_sar: 22, estimated: true, family: 'coldstone-mud-pie', units: 2 },
  { id: 'coldstone-mud-pie-6oz', chain: 'Cold Stone Creamery', name: 'Mud Pie Mojo (6 oz)', category: 'dessert', calories: 420, protein: 8, carbs: 44, fats: 23, price_sar: 27, estimated: true, family: 'coldstone-mud-pie', units: 3 },
  { id: 'coldstone-mud-pie-8oz', chain: 'Cold Stone Creamery', name: 'Mud Pie Mojo (8 oz)', category: 'dessert', calories: 430, protein: 8, carbs: 46, fats: 24, price_sar: 32, estimated: true, family: 'coldstone-mud-pie', units: 4 },
  { id: 'coldstone-create-your-own-4oz', chain: 'Cold Stone Creamery', name: 'Create Your Own Ice Cream (4 oz)', category: 'dessert', calories: 270, protein: 4, carbs: 32, fats: 14, price_sar: 22, estimated: true, family: 'coldstone-create-your-own', units: 2 },
  { id: 'coldstone-create-your-own-8oz', chain: 'Cold Stone Creamery', name: 'Create Your Own Ice Cream (8 oz)', category: 'dessert', calories: 340, protein: 5, carbs: 40, fats: 18, price_sar: 32, estimated: true, family: 'coldstone-create-your-own', units: 4 },

  // House of Donuts removed 2026-07: not on HungerStation (searched Malqa,
  // EN + AR "بيت الدونات") — prices unverifiable under the audit mandate.

  // ── Munch Bakery ───────────────────────────────────────────────
  // Rebuilt from HungerStation Malqa (2026-07). Most labels are explicitly
  // "calories per 100 g" — those items are scaled to typical piece weight
  // (pushup ~90 g, cupcake ~75 g); jar cakes/melts carry plain totals.
  // Skipped: whole medium/large/design/gender-reveal cakes and lunch/character
  // mini cakes (multi-serve gathering sizes), 24-pc combo box.
  { id: 'munch-chocolate-jar-cake', chain: 'Munch Bakery', name: 'Chocolate Jar Cake', category: 'dessert', calories: 360, protein: 5, carbs: 46, fats: 16, price_sar: 22, estimated: true },
  { id: 'munch-redvelvet-jar-cake', chain: 'Munch Bakery', name: 'Red Velvet Jar Cake', category: 'dessert', calories: 310, protein: 4, carbs: 40, fats: 14, price_sar: 22, estimated: true },
  { id: 'munch-strawberry-jar-cake', chain: 'Munch Bakery', name: 'Strawberry Jar Cake', category: 'dessert', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 22, estimated: true },
  { id: 'munch-tiramisu-jar-cake', chain: 'Munch Bakery', name: 'Tiramisu Jar Cake', category: 'dessert', calories: 270, protein: 4, carbs: 34, fats: 12, price_sar: 22, estimated: true },
  { id: 'munch-dream-pushup', chain: 'Munch Bakery', name: 'Dream Mini Pushup Cake', category: 'dessert', calories: 210, protein: 3, carbs: 28, fats: 9, price_sar: 9, estimated: true },
  { id: 'munch-chocolate-pushup', chain: 'Munch Bakery', name: 'Chocolate Mini Pushup', category: 'dessert', calories: 290, protein: 4, carbs: 36, fats: 14, price_sar: 9, estimated: true },
  { id: 'munch-red-velvet-cupcake', chain: 'Munch Bakery', name: 'Red Velvet Cupcake', category: 'dessert', calories: 260, protein: 3, carbs: 33, fats: 13, price_sar: 9, estimated: true },
  { id: 'munch-carrot-cupcake', chain: 'Munch Bakery', name: 'Carrot Cupcake', category: 'dessert', calories: 160, protein: 2, carbs: 21, fats: 7, price_sar: 9, estimated: true },
  { id: 'munch-dream-cupcake', chain: 'Munch Bakery', name: 'Dream Cupcake', category: 'dessert', calories: 160, protein: 2, carbs: 21, fats: 7, price_sar: 9, estimated: true },
  { id: 'munch-fudge-mini-cupcake', chain: 'Munch Bakery', name: 'Chocolate Fudge Mini Cupcake', category: 'dessert', calories: 80, protein: 1, carbs: 10, fats: 4, price_sar: 4.5, estimated: true, family: 'munch-mini-cupcake', units: 1 },
  { id: 'munch-mini-cupcakes-6', chain: 'Munch Bakery', name: 'Box of 6 Mini Cupcakes', category: 'dessert', calories: 480, protein: 6, carbs: 60, fats: 24, price_sar: 27, estimated: true, family: 'munch-mini-cupcake', units: 6 },
  { id: 'munch-mini-cupcakes-12', chain: 'Munch Bakery', name: 'Box of 12 Mini Cupcakes', category: 'dessert', calories: 960, protein: 12, carbs: 120, fats: 48, price_sar: 54, estimated: true, family: 'munch-mini-cupcake', units: 12 },
  { id: 'munch-mini-melt', chain: 'Munch Bakery', name: 'Mini Munch Melt', category: 'dessert', calories: 140, protein: 2, carbs: 16, fats: 7, price_sar: 7, estimated: true },

  // ── Saadeddin ──────────────────────────────────────────────────
  // Rebuilt from HungerStation Malqa "Saadeddin pastry" (2026-07). All HS
  // labels there are per 100 g (a whole cake serving 7 shows the same number
  // as its single piece), so slices are scaled to ~130 g piece weight.
  // Skipped: whole cakes (serve 7-14), kg/half-kg trays and boxes, chocolate
  // gift boxes, sandwich/pastry sharing boxes, nuts/coffee/tea/dates
  // (grocery), multi-serve ice cream molds and rolls, all drinks.
  { id: 'saadeddin-mango-cheesecake-piece', chain: 'Saadeddin', name: 'Mango Cheesecake Piece', category: 'dessert', calories: 330, protein: 5, carbs: 33, fats: 20, price_sar: 19.9, estimated: true },
  { id: 'saadeddin-mango-slice', chain: 'Saadeddin', name: 'Mango Slice', category: 'dessert', calories: 320, protein: 4, carbs: 40, fats: 16, price_sar: 18.9, estimated: true },
  { id: 'saadeddin-caramel-peanut-slice', chain: 'Saadeddin', name: 'Caramel Peanut Slice', category: 'dessert', calories: 420, protein: 7, carbs: 44, fats: 24, price_sar: 18.9, estimated: true },
  { id: 'saadeddin-red-velvet-crunch-slice', chain: 'Saadeddin', name: 'Red Velvet Crunch Slice', category: 'dessert', calories: 380, protein: 5, carbs: 44, fats: 20, price_sar: 18.9, estimated: true },
  { id: 'saadeddin-rocher-piece', chain: 'Saadeddin', name: 'Rocher Cake Piece', category: 'dessert', calories: 500, protein: 7, carbs: 48, fats: 31, price_sar: 19.9, estimated: true },
  { id: 'saadeddin-kitkat-piece', chain: 'Saadeddin', name: 'KitKat Cake Piece', category: 'dessert', calories: 510, protein: 7, carbs: 52, fats: 30, price_sar: 19.9, estimated: true },
  { id: 'saadeddin-blueberry-cheesecake-piece', chain: 'Saadeddin', name: 'Blueberry Cheesecake Piece', category: 'dessert', calories: 310, protein: 5, carbs: 30, fats: 19, price_sar: 19.9, estimated: true },
  { id: 'saadeddin-red-berry-cheesecake-piece', chain: 'Saadeddin', name: 'Red Berry Cheesecake Piece', category: 'dessert', calories: 325, protein: 5, carbs: 32, fats: 20, price_sar: 19.9, estimated: true },
  { id: 'saadeddin-pecan-caramel-cheesecake-piece', chain: 'Saadeddin', name: 'Pecan Caramel Cheesecake Piece', category: 'dessert', calories: 430, protein: 6, carbs: 40, fats: 27, price_sar: 24.9, estimated: true },
  { id: 'saadeddin-strawberry-cake-piece', chain: 'Saadeddin', name: 'Strawberry Cake Piece', category: 'dessert', calories: 240, protein: 4, carbs: 28, fats: 12, price_sar: 24.9, estimated: true },
  { id: 'saadeddin-snickers-cake-piece', chain: 'Saadeddin', name: 'Snickers Cake Piece', category: 'dessert', calories: 480, protein: 8, carbs: 50, fats: 28, price_sar: 23.9, estimated: true },
  { id: 'saadeddin-chocolate-mousse-piece', chain: 'Saadeddin', name: 'Chocolate Mousse Piece', category: 'dessert', calories: 490, protein: 7, carbs: 46, fats: 30, price_sar: 19.9, estimated: true },
  { id: 'saadeddin-twix-cake-piece', chain: 'Saadeddin', name: 'Twix Cake Piece', category: 'dessert', calories: 550, protein: 7, carbs: 58, fats: 32, price_sar: 19.9, estimated: true },
  { id: 'saadeddin-tiramisu-piece', chain: 'Saadeddin', name: 'Tiramisu Cake Piece', category: 'dessert', calories: 395, protein: 6, carbs: 42, fats: 22, price_sar: 24.9, estimated: true },
  { id: 'saadeddin-triple-chocolate-cookie', chain: 'Saadeddin', name: 'Triple Chocolate Cookie', category: 'dessert', calories: 280, protein: 4, carbs: 36, fats: 14, price_sar: 9.9, estimated: true },
  { id: 'saadeddin-white-chocolate-cookie', chain: 'Saadeddin', name: 'White Chocolate Cookie', category: 'dessert', calories: 280, protein: 4, carbs: 36, fats: 14, price_sar: 9.9, estimated: true },
  { id: 'saadeddin-nabulsi-kunafa-cake', chain: 'Saadeddin', name: 'Soft Nabulsi Kunafa Cake', category: 'dessert', calories: 480, protein: 10, carbs: 54, fats: 25, price_sar: 15.9, estimated: true },
  { id: 'saadeddin-pistachio-maamoul', chain: 'Saadeddin', name: 'Pistachio Laf Maamoul', category: 'dessert', calories: 240, protein: 4, carbs: 30, fats: 12, price_sar: 7.9, estimated: true },
  { id: 'saadeddin-tumor-maamoul', chain: 'Saadeddin', name: 'Maamoul Tumor Wrapped', category: 'dessert', calories: 210, protein: 3, carbs: 32, fats: 8, price_sar: 7.9, estimated: true },
  { id: 'saadeddin-brookies-pudding', chain: 'Saadeddin', name: 'Brookies Pudding Small', category: 'dessert', calories: 450, protein: 6, carbs: 52, fats: 24, price_sar: 21.9, estimated: true },
  { id: 'saadeddin-vanilla-frizo', chain: 'Saadeddin', name: 'Vanilla Frizo', category: 'dessert', calories: 320, protein: 5, carbs: 38, fats: 16, price_sar: 13.9, estimated: true },
  { id: 'saadeddin-petit-four-choc-dipped', chain: 'Saadeddin', name: 'Mini Chocolate Dipped Petit Four Box (6 pc)', category: 'dessert', calories: 590, protein: 7, carbs: 62, fats: 34, price_sar: 15.9, estimated: true },
  { id: 'saadeddin-petit-four-butter', chain: 'Saadeddin', name: 'Mini Butter Sablé Petit Four Box (8 pc)', category: 'dessert', calories: 370, protein: 5, carbs: 42, fats: 20, price_sar: 15.9, estimated: true },

  // ── Pinkberry ──────────────────────────────────────────────────
  // Reconciled 2026-07 with HungerStation (Malqa): every froyo cup there
  // carries a "1 Calories" junk label, so plain sizes use Pinkberry US
  // published nutrition (Original, nonfat) with HS prices; "with toppings"
  // sizes are composition estimates (+~1 oz topping). Skipped: BOGO/multi-
  // cup offers, topping add-ons, smoothies (drinks), water.
  { id: 'pinkberry-original-small', chain: 'Pinkberry', name: 'Original Frozen Yogurt (Small 5 oz)', category: 'dessert', calories: 150, protein: 5, carbs: 31, fats: 0, price_sar: 17, estimated: false, family: 'pinkberry-original', units: 5 },
  { id: 'pinkberry-original-medium', chain: 'Pinkberry', name: 'Original Frozen Yogurt (Medium 8 oz)', category: 'dessert', calories: 240, protein: 8, carbs: 50, fats: 0, price_sar: 22, estimated: false, family: 'pinkberry-original', units: 8 },
  { id: 'pinkberry-original-large', chain: 'Pinkberry', name: 'Original Frozen Yogurt (Large 13 oz)', category: 'dessert', calories: 390, protein: 13, carbs: 81, fats: 1, price_sar: 27, estimated: false, family: 'pinkberry-original', units: 13 },
  { id: 'pinkberry-take-home', chain: 'Pinkberry', name: 'Original Frozen Yogurt (Take Home 25 oz)', category: 'dessert', calories: 750, protein: 25, carbs: 155, fats: 1, price_sar: 55, estimated: false, family: 'pinkberry-original', units: 25 },
  { id: 'pinkberry-small-toppings', chain: 'Pinkberry', name: 'Frozen Yogurt with Toppings (Small 5 oz)', category: 'dessert', calories: 270, protein: 6, carbs: 46, fats: 7, price_sar: 27, estimated: true, family: 'pinkberry-toppings', units: 5 },
  { id: 'pinkberry-medium-toppings', chain: 'Pinkberry', name: 'Frozen Yogurt with Toppings (Medium 8 oz)', category: 'dessert', calories: 360, protein: 9, carbs: 62, fats: 9, price_sar: 32, estimated: true, family: 'pinkberry-toppings', units: 8 },
  { id: 'pinkberry-large-toppings', chain: 'Pinkberry', name: 'Frozen Yogurt with Toppings (Large 13 oz)', category: 'dessert', calories: 510, protein: 14, carbs: 90, fats: 11, price_sar: 37, estimated: true, family: 'pinkberry-toppings', units: 13 },

  // ── Häagen-Dazs ────────────────────────────────────────────────
  // Reconciled 2026-07 with HungerStation "Haagen Dazs" (Malqa): scoops/
  // pints all carry "100 Calories" junk labels → scoop line uses HD
  // published per-scoop data (vanilla reference, flavor selectable) with HS
  // prices; sundaes/jars/pastries use their credible HS labels. Skipped:
  // offers/boxes/whole cakes (gathering + junk labels), milkshakes/
  // smoothies/lemonades/teas/coffees (drinks), toppings, ice cream
  // sandwich (0 SR / ambiguous 59 SR mix), Bites 24 pc ("300 cal" junk).
  { id: 'haagendazs-scoop-1', chain: 'Häagen-Dazs', name: 'Regular Scoop (1)', category: 'dessert', calories: 270, protein: 5, carbs: 25, fats: 17, price_sar: 19, estimated: true, family: 'haagendazs-scoops', units: 1 },
  { id: 'haagendazs-scoop-2', chain: 'Häagen-Dazs', name: 'Regular Scoops (2)', category: 'dessert', calories: 540, protein: 10, carbs: 50, fats: 34, price_sar: 36, estimated: true, family: 'haagendazs-scoops', units: 2 },
  { id: 'haagendazs-scoop-3', chain: 'Häagen-Dazs', name: 'Regular Scoops (3)', category: 'dessert', calories: 810, protein: 15, carbs: 75, fats: 51, price_sar: 45, estimated: true, family: 'haagendazs-scoops', units: 3 },
  { id: 'haagendazs-pint', chain: 'Häagen-Dazs', name: 'Pint', category: 'dessert', calories: 870, protein: 16, carbs: 80, fats: 55, price_sar: 59, estimated: true },
  { id: 'haagendazs-fruit-temptation', chain: 'Häagen-Dazs', name: 'Fruit Temptation Sundae', category: 'dessert', calories: 680, protein: 10, carbs: 82, fats: 34, price_sar: 45, estimated: true },
  { id: 'haagendazs-macadamia-crunch', chain: 'Häagen-Dazs', name: 'Macadamia Crunch Sundae', category: 'dessert', calories: 680, protein: 10, carbs: 70, fats: 40, price_sar: 45, estimated: true },
  { id: 'haagendazs-cookie-crunch', chain: 'Häagen-Dazs', name: 'Cookie Crunch Sundae', category: 'dessert', calories: 680, protein: 10, carbs: 76, fats: 37, price_sar: 45, estimated: true },
  { id: 'haagendazs-brownie-explosion', chain: 'Häagen-Dazs', name: 'Brownie Explosion Sundae', category: 'dessert', calories: 680, protein: 10, carbs: 74, fats: 38, price_sar: 45, estimated: true },
  { id: 'haagendazs-cookie-skillet', chain: 'Häagen-Dazs', name: 'Cookie Skillet', category: 'dessert', calories: 680, protein: 10, carbs: 78, fats: 36, price_sar: 49, estimated: true },
  { id: 'haagendazs-ultimate-tiramisu', chain: 'Häagen-Dazs', name: 'The Ultimate Tiramisu', category: 'dessert', calories: 493, protein: 8, carbs: 56, fats: 26, price_sar: 36, estimated: true },
  { id: 'haagendazs-tiramisu-jar', chain: 'Häagen-Dazs', name: 'Tiramisu Jar', category: 'dessert', calories: 234, protein: 4, carbs: 27, fats: 12, price_sar: 29, estimated: true },
  { id: 'haagendazs-chocolate-heaven-jar', chain: 'Häagen-Dazs', name: 'Chocolate Heaven Jar', category: 'dessert', calories: 360, protein: 6, carbs: 42, fats: 18, price_sar: 27, estimated: true },
  { id: 'haagendazs-carrot-cake-jar', chain: 'Häagen-Dazs', name: 'Carrot Cake Jar', category: 'dessert', calories: 380, protein: 5, carbs: 46, fats: 19, price_sar: 27, estimated: true },
  { id: 'haagendazs-chocolate-cookie', chain: 'Häagen-Dazs', name: 'Milk Chocolate Cookie', category: 'dessert', calories: 420, protein: 5, carbs: 52, fats: 21, price_sar: 14, estimated: true },
  { id: 'haagendazs-brownie', chain: 'Häagen-Dazs', name: 'Brownie', category: 'dessert', calories: 420, protein: 5, carbs: 50, fats: 22, price_sar: 20, estimated: true },
  { id: 'haagendazs-molten-cake', chain: 'Häagen-Dazs', name: 'Molten Cake with Ice Cream', category: 'dessert', calories: 420, protein: 6, carbs: 50, fats: 21, price_sar: 39, estimated: true },
  { id: 'haagendazs-affogato', chain: 'Häagen-Dazs', name: 'Affogato', category: 'dessert', calories: 120, protein: 3, carbs: 12, fats: 7, price_sar: 28, estimated: true },

  // ── BLABAN ─────────────────────────────────────────────────────
  // HungerStation SFDA calorie labels (2026-07). Only internally consistent
  // items kept — the rice pudding / kashtouta / koshary / Om Ali sections all
  // carry copy-pasted ~1200-1360 labels (Nutella variant listed BELOW plain)
  // and were rejected wholesale. Dabadibo sizes scale exactly 3x, Sankorita/
  // Metkandara sizes scale exactly 2x with price — those pass.
  { id: 'blaban-dabadibo-small', chain: 'BLABAN', name: 'Dabadibo Teddy Bear (Small)', category: 'dessert', calories: 408, protein: 6, carbs: 48, fats: 21, price_sar: 13, estimated: true, family: 'blaban-dabadibo', units: 1 },
  { id: 'blaban-dabadibo-large', chain: 'BLABAN', name: 'Dabadibo Teddy Bears (Large, 3 pc)', category: 'dessert', calories: 1224, protein: 18, carbs: 144, fats: 63, price_sar: 31, estimated: true, family: 'blaban-dabadibo', units: 3 },
  { id: 'blaban-fazaa-small', chain: 'BLABAN', name: 'Fazaa Chocolate Cake (Small)', category: 'dessert', calories: 1307, protein: 16, carbs: 150, fats: 71, price_sar: 30, estimated: true },
  { id: 'blaban-el-habba-small', chain: 'BLABAN', name: 'El Habba Chocolate Cake (Small)', category: 'dessert', calories: 1239, protein: 20, carbs: 135, fats: 68, price_sar: 37, estimated: true },
  { id: 'blaban-de-paris-small', chain: 'BLABAN', name: 'De Paris Cake (Small)', category: 'dessert', calories: 1738, protein: 22, carbs: 192, fats: 98, price_sar: 42, estimated: true },
  { id: 'blaban-sankorita-large', chain: 'BLABAN', name: 'Sankorita (Large)', category: 'dessert', calories: 1333, protein: 24, carbs: 140, fats: 76, price_sar: 35.72, estimated: true },
  { id: 'blaban-metkandara-medium', chain: 'BLABAN', name: 'Metkandara (Medium)', category: 'dessert', calories: 1760, protein: 26, carbs: 184, fats: 102, price_sar: 48, estimated: true },
  { id: 'blaban-ellouaa', chain: 'BLABAN', name: 'Ellouaa Mille-Feuille', category: 'dessert', calories: 895, protein: 12, carbs: 92, fats: 53, price_sar: 31, estimated: true },
];
