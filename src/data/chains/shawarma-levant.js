// Shawarma, saj & Levantine chains operating in Riyadh.
// Tier 1: Shawarmer. Tier 2: Mama Noura, Shawarma House, German Doner Kebab,
// Barbar, Malak Al Tawouk, Allo Beirut, Zaatar w Zeit, Operation Falafel.
// Tier 3 (estimates): Shawarma Classic, Golden Saj, Shawarma Jalilah,
// Usta Asim, Mareez, Alsaaj Alreefi.

export default [
  // ── Shawarmer ──────────────────────────────────────────────────
  { id: 'shawarmer-arbo-chicken', chain: 'Shawarmer', name: 'Arbo Chicken Shawarma (Bite-sized)', category: 'main', calories: 380, protein: 24, carbs: 32, fats: 16, price_sar: 24, estimated: false },
  { id: 'shawarmer-tawook', chain: 'Shawarmer', name: 'Tawook Sandwich', category: 'main', calories: 310, protein: 22, carbs: 28, fats: 12, price_sar: 16, estimated: false },
  { id: 'shawarmer-classic-chicken', chain: 'Shawarmer', name: 'Classic Chicken Shawarma', category: 'main', calories: 290, protein: 18, carbs: 30, fats: 11, price_sar: 9, estimated: false },
  { id: 'shawarmer-super-chicken', chain: 'Shawarmer', name: 'Super Chicken Shawarma', category: 'main', calories: 420, protein: 26, carbs: 40, fats: 17, price_sar: 14, estimated: false },
  { id: 'shawarmer-chicken-plate', chain: 'Shawarmer', name: 'Chicken Shawarma Plate', category: 'main', calories: 650, protein: 35, carbs: 60, fats: 30, price_sar: 27, estimated: false },
  { id: 'shawarmer-beef', chain: 'Shawarmer', name: 'Beef Shawarma Sandwich', category: 'main', calories: 330, protein: 19, carbs: 32, fats: 14, price_sar: 11, estimated: false },
  { id: 'shawarmer-fattoush', chain: 'Shawarmer', name: 'Fattoush Salad', category: 'side', calories: 180, protein: 3, carbs: 20, fats: 10, price_sar: 12, estimated: true },
  { id: 'shawarmer-fries', chain: 'Shawarmer', name: 'French Fries', category: 'side', calories: 300, protein: 4, carbs: 40, fats: 14, price_sar: 8, estimated: false },

  // ── Mama Noura ─────────────────────────────────────────────────
  { id: 'mamanoura-chicken-saj', chain: 'Mama Noura', name: 'Chicken Shawarma (Saj)', category: 'main', calories: 350, protein: 22, carbs: 34, fats: 14, price_sar: 10, estimated: true },
  { id: 'mamanoura-chicken-meal', chain: 'Mama Noura', name: 'Chicken Shawarma Meal', category: 'main', calories: 680, protein: 38, carbs: 62, fats: 30, price_sar: 25, estimated: true },
  { id: 'mamanoura-large-shawarma', chain: 'Mama Noura', name: 'Large Chicken Shawarma', category: 'main', calories: 460, protein: 28, carbs: 42, fats: 19, price_sar: 14, estimated: true },
  { id: 'mamanoura-meat-shawarma', chain: 'Mama Noura', name: 'Meat Shawarma Sandwich', category: 'main', calories: 380, protein: 22, carbs: 34, fats: 17, price_sar: 12, estimated: true },
  { id: 'mamanoura-tawook', chain: 'Mama Noura', name: 'Grilled Tawook Sandwich', category: 'main', calories: 330, protein: 24, carbs: 32, fats: 11, price_sar: 11, estimated: true },
  { id: 'mamanoura-hummus', chain: 'Mama Noura', name: 'Hummus', category: 'side', calories: 190, protein: 6, carbs: 17, fats: 11, price_sar: 8, estimated: true },
  { id: 'mamanoura-tabbouleh', chain: 'Mama Noura', name: 'Tabbouleh', category: 'side', calories: 150, protein: 3, carbs: 18, fats: 7, price_sar: 9, estimated: true },
  { id: 'mamanoura-kunafa', chain: 'Mama Noura', name: 'Kunafa', category: 'dessert', calories: 420, protein: 8, carbs: 52, fats: 20, price_sar: 14, estimated: true },

  // ── Shawarma House ─────────────────────────────────────────────
  { id: 'shawarmahouse-classic', chain: 'Shawarma House', name: 'Chicken Shawarma Classic', category: 'main', calories: 340, protein: 21, carbs: 33, fats: 13, price_sar: 9, estimated: true },
  { id: 'shawarmahouse-special', chain: 'Shawarma House', name: 'Chicken Shawarma Special', category: 'main', calories: 450, protein: 23, carbs: 46, fats: 19, price_sar: 13, estimated: true },
  { id: 'shawarmahouse-beef', chain: 'Shawarma House', name: 'Beef Shawarma', category: 'main', calories: 370, protein: 21, carbs: 33, fats: 16, price_sar: 11, estimated: true },
  { id: 'shawarmahouse-platter', chain: 'Shawarma House', name: 'Shawarma Platter', category: 'main', calories: 660, protein: 36, carbs: 58, fats: 30, price_sar: 24, estimated: true },
  { id: 'shawarmahouse-fries', chain: 'Shawarma House', name: 'French Fries', category: 'side', calories: 300, protein: 4, carbs: 40, fats: 14, price_sar: 7, estimated: true },
  { id: 'shawarmahouse-garlic-potato', chain: 'Shawarma House', name: 'Garlic Potato Cubes', category: 'side', calories: 340, protein: 5, carbs: 44, fats: 16, price_sar: 10, estimated: true },

  // ── Shawarma Classic ───────────────────────────────────────────
  { id: 'shawarmaclassic-samoli', chain: 'Shawarma Classic', name: 'Chicken Shawarma (Samoli)', category: 'main', calories: 330, protein: 20, carbs: 33, fats: 13, price_sar: 8, estimated: true },
  { id: 'shawarmaclassic-saj', chain: 'Shawarma Classic', name: 'Chicken Shawarma (Saj)', category: 'main', calories: 350, protein: 21, carbs: 34, fats: 14, price_sar: 9, estimated: true },
  { id: 'shawarmaclassic-meat', chain: 'Shawarma Classic', name: 'Meat Shawarma', category: 'main', calories: 370, protein: 21, carbs: 33, fats: 16, price_sar: 10, estimated: true },
  { id: 'shawarmaclassic-box', chain: 'Shawarma Classic', name: 'Shawarma Box with Fries', category: 'main', calories: 560, protein: 28, carbs: 54, fats: 25, price_sar: 17, estimated: true },
  { id: 'shawarmaclassic-fries', chain: 'Shawarma Classic', name: 'French Fries', category: 'side', calories: 290, protein: 4, carbs: 39, fats: 13, price_sar: 7, estimated: true },

  // ── Golden Saj ─────────────────────────────────────────────────
  { id: 'goldensaj-chicken-wrap', chain: 'Golden Saj', name: 'Golden Chicken Saj Wrap', category: 'main', calories: 380, protein: 23, carbs: 38, fats: 15, price_sar: 12, estimated: true },
  { id: 'goldensaj-meat-wrap', chain: 'Golden Saj', name: 'Golden Meat Saj Wrap', category: 'main', calories: 410, protein: 23, carbs: 37, fats: 19, price_sar: 14, estimated: true },
  { id: 'goldensaj-halloumi', chain: 'Golden Saj', name: 'Halloumi Saj', category: 'main', calories: 420, protein: 18, carbs: 42, fats: 20, price_sar: 12, estimated: true },
  { id: 'goldensaj-zaatar-cheese', chain: 'Golden Saj', name: 'Zaatar & Cheese Saj', category: 'main', calories: 400, protein: 14, carbs: 46, fats: 18, price_sar: 10, estimated: true },
  { id: 'goldensaj-labneh', chain: 'Golden Saj', name: 'Labneh Saj', category: 'main', calories: 340, protein: 11, carbs: 42, fats: 14, price_sar: 9, estimated: true },

  // ── Shawarma Jalilah ───────────────────────────────────────────
  { id: 'jalilah-chicken', chain: 'Shawarma Jalilah', name: 'Jalilah Chicken Shawarma', category: 'main', calories: 340, protein: 21, carbs: 33, fats: 13, price_sar: 9, estimated: true },
  { id: 'jalilah-meat', chain: 'Shawarma Jalilah', name: 'Jalilah Meat Shawarma', category: 'main', calories: 370, protein: 21, carbs: 33, fats: 16, price_sar: 11, estimated: true },
  { id: 'jalilah-jumbo', chain: 'Shawarma Jalilah', name: 'Jumbo Shawarma', category: 'main', calories: 520, protein: 31, carbs: 46, fats: 22, price_sar: 16, estimated: true },
  { id: 'jalilah-plate', chain: 'Shawarma Jalilah', name: 'Shawarma Plate', category: 'main', calories: 640, protein: 34, carbs: 57, fats: 28, price_sar: 22, estimated: true },
  { id: 'jalilah-fries', chain: 'Shawarma Jalilah', name: 'French Fries', category: 'side', calories: 290, protein: 4, carbs: 39, fats: 13, price_sar: 7, estimated: true },

  // ── Usta Asim ──────────────────────────────────────────────────
  { id: 'ustaasim-doner-sandwich', chain: 'Usta Asim', name: 'Turkish Doner Sandwich', category: 'main', calories: 420, protein: 25, carbs: 40, fats: 18, price_sar: 15, estimated: true },
  { id: 'ustaasim-doner-plate', chain: 'Usta Asim', name: 'Doner Plate with Rice', category: 'main', calories: 680, protein: 38, carbs: 62, fats: 29, price_sar: 28, estimated: true },
  { id: 'ustaasim-iskender', chain: 'Usta Asim', name: 'Iskender Doner', category: 'main', calories: 750, protein: 40, carbs: 56, fats: 40, price_sar: 34, estimated: true },
  { id: 'ustaasim-lahmacun', chain: 'Usta Asim', name: 'Lahmacun', category: 'main', calories: 320, protein: 15, carbs: 42, fats: 10, price_sar: 12, estimated: true },
  { id: 'ustaasim-bulgur', chain: 'Usta Asim', name: 'Turkish Bulgur (Side)', category: 'side', calories: 210, protein: 5, carbs: 40, fats: 3, price_sar: 8, estimated: true },

  // ── Mareez ─────────────────────────────────────────────────────
  { id: 'mareez-chicken', chain: 'Mareez', name: 'Mareez Chicken Sandwich', category: 'main', calories: 400, protein: 24, carbs: 40, fats: 16, price_sar: 14, estimated: true },
  { id: 'mareez-meat', chain: 'Mareez', name: 'Mareez Meat Sandwich', category: 'main', calories: 440, protein: 25, carbs: 40, fats: 20, price_sar: 16, estimated: true },
  { id: 'mareez-special-wrap', chain: 'Mareez', name: 'Mareez Special Wrap', category: 'main', calories: 480, protein: 27, carbs: 44, fats: 21, price_sar: 18, estimated: true },
  { id: 'mareez-fries', chain: 'Mareez', name: 'French Fries', category: 'side', calories: 300, protein: 4, carbs: 40, fats: 14, price_sar: 8, estimated: true },
  { id: 'mareez-hummus', chain: 'Mareez', name: 'Hummus', category: 'side', calories: 180, protein: 6, carbs: 16, fats: 10, price_sar: 7, estimated: true },

  // ── Alsaaj Alreefi ─────────────────────────────────────────────
  { id: 'alsaaj-chicken-saj', chain: 'Alsaaj Alreefi', name: 'Reefi Chicken Saj', category: 'main', calories: 380, protein: 23, carbs: 38, fats: 15, price_sar: 11, estimated: true },
  { id: 'alsaaj-meat-saj', chain: 'Alsaaj Alreefi', name: 'Reefi Meat Saj', category: 'main', calories: 410, protein: 23, carbs: 37, fats: 19, price_sar: 13, estimated: true },
  { id: 'alsaaj-cheese-zaatar', chain: 'Alsaaj Alreefi', name: 'Cheese & Zaatar Saj', category: 'main', calories: 400, protein: 14, carbs: 46, fats: 18, price_sar: 9, estimated: true },
  { id: 'alsaaj-labneh-veg', chain: 'Alsaaj Alreefi', name: 'Labneh & Vegetable Saj', category: 'main', calories: 330, protein: 10, carbs: 42, fats: 13, price_sar: 8, estimated: true },
  { id: 'alsaaj-nutella-saj', chain: 'Alsaaj Alreefi', name: 'Nutella Saj', category: 'dessert', calories: 450, protein: 9, carbs: 60, fats: 19, price_sar: 10, estimated: true },

  // ── German Doner Kebab ─────────────────────────────────────────
  { id: 'gdk-chicken-doner', chain: 'German Doner Kebab', name: 'Original Chicken Doner Kebab', category: 'main', calories: 550, protein: 35, carbs: 50, fats: 22, price_sar: 24, estimated: false },
  { id: 'gdk-beef-doner', chain: 'German Doner Kebab', name: 'Original Beef Doner Kebab', category: 'main', calories: 590, protein: 33, carbs: 50, fats: 27, price_sar: 26, estimated: false },
  { id: 'gdk-doner-wrap', chain: 'German Doner Kebab', name: 'Chicken Doner Wrap', category: 'main', calories: 480, protein: 30, carbs: 46, fats: 18, price_sar: 22, estimated: false },
  { id: 'gdk-doner-box', chain: 'German Doner Kebab', name: 'Doner Box with Fries', category: 'main', calories: 560, protein: 30, carbs: 52, fats: 24, price_sar: 23, estimated: false },
  { id: 'gdk-krunch-burger', chain: 'German Doner Kebab', name: 'Doner Krunch Burger', category: 'main', calories: 520, protein: 28, carbs: 48, fats: 23, price_sar: 22, estimated: false },
  { id: 'gdk-fries', chain: 'German Doner Kebab', name: 'French Fries', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 10, estimated: false },

  // ── Barbar ─────────────────────────────────────────────────────
  { id: 'barbar-chicken-shawarma', chain: 'Barbar', name: 'Chicken Shawarma Wrap', category: 'main', calories: 420, protein: 26, carbs: 40, fats: 17, price_sar: 17, estimated: true },
  { id: 'barbar-beef-shawarma', chain: 'Barbar', name: 'Beef Shawarma Wrap', category: 'main', calories: 450, protein: 26, carbs: 40, fats: 20, price_sar: 19, estimated: true },
  { id: 'barbar-grilled-chicken', chain: 'Barbar', name: 'Grilled Chicken Sandwich', category: 'main', calories: 460, protein: 28, carbs: 44, fats: 18, price_sar: 19, estimated: true },
  { id: 'barbar-falafel', chain: 'Barbar', name: 'Falafel Sandwich', category: 'main', calories: 350, protein: 12, carbs: 48, fats: 13, price_sar: 10, estimated: true },
  { id: 'barbar-manoushe-zaatar', chain: 'Barbar', name: 'Zaatar Manoushe', category: 'main', calories: 380, protein: 11, carbs: 50, fats: 15, price_sar: 9, estimated: true },
  { id: 'barbar-cheese-manoushe', chain: 'Barbar', name: 'Cheese Manoushe', category: 'main', calories: 450, protein: 18, carbs: 46, fats: 21, price_sar: 13, estimated: true },
  { id: 'barbar-batata-harra', chain: 'Barbar', name: 'Batata Harra', category: 'side', calories: 290, protein: 4, carbs: 38, fats: 14, price_sar: 12, estimated: true },

  // ── Malak Al Tawouk ────────────────────────────────────────────
  { id: 'malak-tawouk-sandwich', chain: 'Malak Al Tawouk', name: 'Tawouk Sandwich', category: 'main', calories: 360, protein: 26, carbs: 36, fats: 11, price_sar: 15, estimated: true },
  { id: 'malak-spicy-tawouk', chain: 'Malak Al Tawouk', name: 'Spicy Tawouk Sandwich', category: 'main', calories: 370, protein: 26, carbs: 37, fats: 12, price_sar: 16, estimated: true },
  { id: 'malak-tawouk-platter', chain: 'Malak Al Tawouk', name: 'Tawouk Platter', category: 'main', calories: 720, protein: 42, carbs: 62, fats: 31, price_sar: 31, estimated: true },
  { id: 'malak-makanek', chain: 'Malak Al Tawouk', name: 'Makanek Sandwich', category: 'main', calories: 430, protein: 20, carbs: 36, fats: 22, price_sar: 17, estimated: true },
  { id: 'malak-francisco', chain: 'Malak Al Tawouk', name: 'Francisco Sandwich', category: 'main', calories: 460, protein: 28, carbs: 40, fats: 19, price_sar: 19, estimated: true },
  { id: 'malak-fries', chain: 'Malak Al Tawouk', name: 'French Fries', category: 'side', calories: 300, protein: 4, carbs: 40, fats: 14, price_sar: 9, estimated: true },

  // ── Allo Beirut ────────────────────────────────────────────────
  { id: 'allobeirut-chicken-shawarma', chain: 'Allo Beirut', name: 'Chicken Shawarma (Dubai Style)', category: 'main', calories: 430, protein: 26, carbs: 42, fats: 17, price_sar: 19, estimated: true },
  { id: 'allobeirut-beef-shawarma', chain: 'Allo Beirut', name: 'Beef Shawarma Saj', category: 'main', calories: 460, protein: 26, carbs: 41, fats: 20, price_sar: 21, estimated: true },
  { id: 'allobeirut-tawook', chain: 'Allo Beirut', name: 'Chicken Tawook Sandwich', category: 'main', calories: 380, protein: 26, carbs: 38, fats: 13, price_sar: 17, estimated: true },
  { id: 'allobeirut-falafel-wrap', chain: 'Allo Beirut', name: 'Falafel Wrap', category: 'main', calories: 360, protein: 12, carbs: 50, fats: 13, price_sar: 12, estimated: true },
  { id: 'allobeirut-cheese-rakakat', chain: 'Allo Beirut', name: 'Cheese Rakakat (4 pc)', category: 'side', calories: 340, protein: 13, carbs: 30, fats: 18, price_sar: 15, estimated: true },
  { id: 'allobeirut-hummus', chain: 'Allo Beirut', name: 'Hummus Beiruti', category: 'side', calories: 210, protein: 7, carbs: 18, fats: 12, price_sar: 13, estimated: true },

  // ── Zaatar w Zeit ──────────────────────────────────────────────
  { id: 'zwz-tawouk-wrap', chain: 'Zaatar w Zeit', name: 'Chicken Tawouk Wrap', category: 'main', calories: 470, protein: 29, carbs: 48, fats: 17, price_sar: 22, estimated: false },
  { id: 'zwz-halloumi-wrap', chain: 'Zaatar w Zeit', name: 'Halloumi Wrap', category: 'main', calories: 440, protein: 19, carbs: 46, fats: 20, price_sar: 18, estimated: false },
  { id: 'zwz-zaatar-manoushe', chain: 'Zaatar w Zeit', name: 'Zaatar Manoushe', category: 'main', calories: 330, protein: 9, carbs: 46, fats: 12, price_sar: 9, estimated: false },
  { id: 'zwz-cheese-zaatar-manoushe', chain: 'Zaatar w Zeit', name: 'Cheese & Zaatar Manoushe', category: 'main', calories: 430, protein: 16, carbs: 46, fats: 20, price_sar: 14, estimated: false },
  { id: 'zwz-labneh-wrap', chain: 'Zaatar w Zeit', name: 'Labneh Wrap', category: 'main', calories: 350, protein: 11, carbs: 44, fats: 14, price_sar: 13, estimated: false },
  { id: 'zwz-steak-cheese-wrap', chain: 'Zaatar w Zeit', name: 'Steak & Cheese Wrap', category: 'main', calories: 520, protein: 30, carbs: 48, fats: 22, price_sar: 26, estimated: false },
  { id: 'zwz-fries', chain: 'Zaatar w Zeit', name: 'French Fries', category: 'side', calories: 310, protein: 4, carbs: 41, fats: 14, price_sar: 10, estimated: false },

  // ── Operation Falafel ──────────────────────────────────────────
  { id: 'opfalafel-classic', chain: 'Operation Falafel', name: 'Falafel Sandwich (Classic)', category: 'main', calories: 340, protein: 11, carbs: 46, fats: 13, price_sar: 10, estimated: true },
  { id: 'opfalafel-plate', chain: 'Operation Falafel', name: 'Falafel Plate (6 pc)', category: 'main', calories: 620, protein: 22, carbs: 70, fats: 28, price_sar: 24, estimated: true },
  { id: 'opfalafel-chicken-shawarma', chain: 'Operation Falafel', name: 'Chicken Shawarma Sandwich', category: 'main', calories: 400, protein: 24, carbs: 40, fats: 16, price_sar: 16, estimated: true },
  { id: 'opfalafel-halloumi', chain: 'Operation Falafel', name: 'Halloumi Sandwich', category: 'main', calories: 420, protein: 18, carbs: 44, fats: 19, price_sar: 15, estimated: true },
  { id: 'opfalafel-hummus-pine', chain: 'Operation Falafel', name: 'Hummus with Pine Nuts', category: 'side', calories: 250, protein: 8, carbs: 20, fats: 15, price_sar: 14, estimated: true },
  { id: 'opfalafel-fattoush', chain: 'Operation Falafel', name: 'Fattoush', category: 'side', calories: 170, protein: 3, carbs: 20, fats: 9, price_sar: 13, estimated: true },
  { id: 'opfalafel-knafeh', chain: 'Operation Falafel', name: 'Knafeh', category: 'dessert', calories: 440, protein: 9, carbs: 54, fats: 21, price_sar: 18, estimated: true },

  // ── Oven of Damascus Patties ───────────────────────────────────
  { id: 'ovendamascus-cheese-fatayer', chain: 'Oven of Damascus Patties', name: 'Cheese Fatayer', category: 'main', calories: 410, protein: 16, carbs: 48, fats: 17, price_sar: 8, estimated: true },
  { id: 'ovendamascus-zaatar-manousheh', chain: 'Oven of Damascus Patties', name: 'Zaatar Manousheh', category: 'main', calories: 350, protein: 9, carbs: 48, fats: 13, price_sar: 5, estimated: true },
  { id: 'ovendamascus-meat-sfiha', chain: 'Oven of Damascus Patties', name: 'Meat Sfiha (4 pc)', category: 'main', calories: 480, protein: 22, carbs: 50, fats: 21, price_sar: 12, estimated: true },
  { id: 'ovendamascus-spinach-fatayer', chain: 'Oven of Damascus Patties', name: 'Spinach Fatayer (3 pc)', category: 'main', calories: 330, protein: 8, carbs: 46, fats: 12, price_sar: 8, estimated: true },
  { id: 'ovendamascus-cheese-veg-fatayer', chain: 'Oven of Damascus Patties', name: 'Cheese & Vegetable Fatayer', category: 'main', calories: 400, protein: 15, carbs: 46, fats: 17, price_sar: 9, estimated: true },

  // ── ALLIWAN ────────────────────────────────────────────────────
  { id: 'alliwan-shawarma-large', chain: 'ALLIWAN', name: 'Chicken Shawarma (Large)', category: 'main', calories: 450, protein: 27, carbs: 42, fats: 18, price_sar: 12, estimated: true },
  { id: 'alliwan-shawarma-small', chain: 'ALLIWAN', name: 'Chicken Shawarma (Small)', category: 'main', calories: 300, protein: 18, carbs: 30, fats: 12, price_sar: 7, estimated: true },
  { id: 'alliwan-broasted-meal', chain: 'ALLIWAN', name: 'Broasted Chicken Meal (2 pc with Fries)', category: 'main', calories: 720, protein: 38, carbs: 62, fats: 36, price_sar: 18, estimated: true },
  { id: 'alliwan-shawarma-plate', chain: 'ALLIWAN', name: 'Shawarma Plate', category: 'main', calories: 650, protein: 35, carbs: 58, fats: 28, price_sar: 22, estimated: true },
  { id: 'alliwan-mexican-sandwich', chain: 'ALLIWAN', name: 'Mexican Chicken Sandwich', category: 'main', calories: 480, protein: 25, carbs: 46, fats: 21, price_sar: 14, estimated: true },
  { id: 'alliwan-fries', chain: 'ALLIWAN', name: 'French Fries', category: 'side', calories: 300, protein: 4, carbs: 40, fats: 14, price_sar: 7, estimated: true },
];
