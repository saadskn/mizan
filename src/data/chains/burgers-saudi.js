// Saudi & regional burger chains operating in Riyadh.
// Tier 1: Herfy (published nutrition). Tier 2: Hamburgini, Burgerizzr, Jan Burger,
// Century Burger, Section-B, Salt. Tier 3 (estimates): Grill It, The Real Burger,
// Taxi, Burger Boutique, Nevermind, GUNBUN.

export default [
  // ── Herfy ──────────────────────────────────────────────────────
  { id: 'herfy-big-h', chain: 'Herfy', name: 'Big H Burger', category: 'main', calories: 560, protein: 27, carbs: 44, fats: 30, price_sar: 17, estimated: false },
  { id: 'herfy-beef-burger', chain: 'Herfy', name: 'Beef Burger (Single)', category: 'main', calories: 350, protein: 16, carbs: 33, fats: 17, price_sar: 9, estimated: false },
  { id: 'herfy-double-beef', chain: 'Herfy', name: 'Double Beef Burger', category: 'main', calories: 500, protein: 26, carbs: 34, fats: 27, price_sar: 14, estimated: false },
  { id: 'herfy-chicken-fillet', chain: 'Herfy', name: 'Chicken Fillet Burger', category: 'main', calories: 470, protein: 21, carbs: 46, fats: 22, price_sar: 13, estimated: false },
  { id: 'herfy-spicy-chicken', chain: 'Herfy', name: 'Spicy Chicken Burger', category: 'main', calories: 490, protein: 22, carbs: 47, fats: 24, price_sar: 13, estimated: false },
  { id: 'herfy-grilled-chicken', chain: 'Herfy', name: 'Grilled Chicken Burger', category: 'main', calories: 380, protein: 24, carbs: 38, fats: 14, price_sar: 14, estimated: false },
  { id: 'herfy-fish-fillet', chain: 'Herfy', name: 'Fish Fillet Burger', category: 'main', calories: 430, protein: 17, carbs: 45, fats: 20, price_sar: 12, estimated: false },
  { id: 'herfy-nuggets-6pc', chain: 'Herfy', name: '6-Piece Chicken Nuggets', category: 'side', calories: 280, protein: 14, carbs: 18, fats: 16, price_sar: 12, estimated: false },
  { id: 'herfy-fries-medium', chain: 'Herfy', name: 'French Fries (Medium)', category: 'side', calories: 330, protein: 4, carbs: 42, fats: 16, price_sar: 7, estimated: false },
  { id: 'herfy-cheese-fries', chain: 'Herfy', name: 'Cheese Fries', category: 'side', calories: 420, protein: 8, carbs: 45, fats: 22, price_sar: 10, estimated: false },
  { id: 'herfy-apple-pie', chain: 'Herfy', name: 'Apple Pie', category: 'dessert', calories: 250, protein: 3, carbs: 34, fats: 11, price_sar: 6, estimated: false },
  { id: 'herfy-soft-serve', chain: 'Herfy', name: 'Soft Serve Cone', category: 'dessert', calories: 180, protein: 4, carbs: 29, fats: 5, price_sar: 3, estimated: false },

  // ── Hamburgini ─────────────────────────────────────────────────
  { id: 'hamburgini-classic', chain: 'Hamburgini', name: 'Classic Burger', category: 'main', calories: 450, protein: 22, carbs: 38, fats: 23, price_sar: 17, estimated: true },
  { id: 'hamburgini-cheese', chain: 'Hamburgini', name: 'Cheese Burger', category: 'main', calories: 520, protein: 25, carbs: 39, fats: 28, price_sar: 19, estimated: true },
  { id: 'hamburgini-double', chain: 'Hamburgini', name: 'Double Hamburgini', category: 'main', calories: 680, protein: 38, carbs: 40, fats: 38, price_sar: 26, estimated: true },
  { id: 'hamburgini-chicken', chain: 'Hamburgini', name: 'Chicken Burger', category: 'main', calories: 470, protein: 24, carbs: 44, fats: 21, price_sar: 17, estimated: true },
  { id: 'hamburgini-spicy-chicken', chain: 'Hamburgini', name: 'Spicy Chicken Burger', category: 'main', calories: 490, protein: 24, carbs: 45, fats: 23, price_sar: 18, estimated: true },
  { id: 'hamburgini-mini-trio', chain: 'Hamburgini', name: 'Mini Burgers (3 Sliders)', category: 'main', calories: 600, protein: 28, carbs: 48, fats: 32, price_sar: 24, estimated: true },
  { id: 'hamburgini-fries', chain: 'Hamburgini', name: 'French Fries', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 9, estimated: true },
  { id: 'hamburgini-cheese-fries', chain: 'Hamburgini', name: 'Cheese Fries', category: 'side', calories: 410, protein: 8, carbs: 44, fats: 21, price_sar: 13, estimated: true },

  // ── Burgerizzr ─────────────────────────────────────────────────
  { id: 'burgerizzr-classizzr', chain: 'Burgerizzr', name: 'Classizzr (Single)', category: 'main', calories: 480, protein: 24, carbs: 40, fats: 25, price_sar: 19, estimated: true },
  { id: 'burgerizzr-classizzr-double', chain: 'Burgerizzr', name: 'Classizzr (Double)', category: 'main', calories: 700, protein: 41, carbs: 41, fats: 40, price_sar: 27, estimated: true },
  { id: 'burgerizzr-spicizzr', chain: 'Burgerizzr', name: 'Spicizzr', category: 'main', calories: 500, protein: 24, carbs: 41, fats: 27, price_sar: 20, estimated: true },
  { id: 'burgerizzr-chickenizzr', chain: 'Burgerizzr', name: 'Chickenizzr', category: 'main', calories: 520, protein: 27, carbs: 46, fats: 24, price_sar: 19, estimated: true },
  { id: 'burgerizzr-mushroomizzr', chain: 'Burgerizzr', name: 'Mushroomizzr', category: 'main', calories: 540, protein: 26, carbs: 42, fats: 29, price_sar: 22, estimated: true },
  { id: 'burgerizzr-slider-duo', chain: 'Burgerizzr', name: 'Slider Duo', category: 'main', calories: 520, protein: 24, carbs: 44, fats: 27, price_sar: 19, estimated: true },
  { id: 'burgerizzr-fries', chain: 'Burgerizzr', name: 'French Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 16, price_sar: 9, estimated: true },
  { id: 'burgerizzr-jalapeno-poppers', chain: 'Burgerizzr', name: 'Jalapeño Poppers', category: 'side', calories: 350, protein: 8, carbs: 36, fats: 19, price_sar: 13, estimated: true },

  // ── Jan Burger ─────────────────────────────────────────────────
  { id: 'janburger-classic', chain: 'Jan Burger', name: 'Jan Classic Burger', category: 'main', calories: 470, protein: 23, carbs: 40, fats: 24, price_sar: 15, estimated: true },
  { id: 'janburger-double', chain: 'Jan Burger', name: 'Jan Double Burger', category: 'main', calories: 690, protein: 39, carbs: 41, fats: 39, price_sar: 23, estimated: true },
  { id: 'janburger-chicken', chain: 'Jan Burger', name: 'Chicken Jan Burger', category: 'main', calories: 490, protein: 25, carbs: 45, fats: 22, price_sar: 15, estimated: true },
  { id: 'janburger-spicy', chain: 'Jan Burger', name: 'Spicy Jan Burger', category: 'main', calories: 490, protein: 23, carbs: 42, fats: 25, price_sar: 16, estimated: true },
  { id: 'janburger-sliders-2pc', chain: 'Jan Burger', name: 'Jan Sliders (2 pc)', category: 'main', calories: 430, protein: 20, carbs: 38, fats: 21, price_sar: 14, estimated: true },
  { id: 'janburger-fries', chain: 'Jan Burger', name: 'French Fries', category: 'side', calories: 310, protein: 4, carbs: 41, fats: 14, price_sar: 8, estimated: true },
  { id: 'janburger-onion-rings', chain: 'Jan Burger', name: 'Onion Rings', category: 'side', calories: 340, protein: 4, carbs: 42, fats: 17, price_sar: 10, estimated: true },

  // ── Century Burger ─────────────────────────────────────────────
  { id: 'century-classic', chain: 'Century Burger', name: 'Century Classic', category: 'main', calories: 520, protein: 26, carbs: 42, fats: 27, price_sar: 24, estimated: true },
  { id: 'century-double', chain: 'Century Burger', name: 'Double Century', category: 'main', calories: 760, protein: 44, carbs: 43, fats: 44, price_sar: 34, estimated: true },
  { id: 'century-mushroom-swiss', chain: 'Century Burger', name: 'Mushroom Swiss Burger', category: 'main', calories: 580, protein: 28, carbs: 44, fats: 31, price_sar: 28, estimated: true },
  { id: 'century-crispy-chicken', chain: 'Century Burger', name: 'Crispy Chicken Burger', category: 'main', calories: 560, protein: 26, carbs: 52, fats: 26, price_sar: 24, estimated: true },
  { id: 'century-halloumi', chain: 'Century Burger', name: 'Halloumi Burger', category: 'main', calories: 490, protein: 19, carbs: 46, fats: 25, price_sar: 22, estimated: true },
  { id: 'century-fries', chain: 'Century Burger', name: 'French Fries', category: 'side', calories: 340, protein: 4, carbs: 44, fats: 16, price_sar: 11, estimated: true },
  { id: 'century-truffle-fries', chain: 'Century Burger', name: 'Truffle Fries', category: 'side', calories: 450, protein: 6, carbs: 48, fats: 24, price_sar: 17, estimated: true },

  // ── Section-B ──────────────────────────────────────────────────
  { id: 'sectionb-single', chain: 'Section-B', name: 'Single Burger', category: 'main', calories: 420, protein: 22, carbs: 34, fats: 21, price_sar: 19, estimated: true },
  { id: 'sectionb-double', chain: 'Section-B', name: 'Double Burger', category: 'main', calories: 620, protein: 38, carbs: 35, fats: 35, price_sar: 27, estimated: true },
  { id: 'sectionb-triple', chain: 'Section-B', name: 'Triple Burger', category: 'main', calories: 820, protein: 54, carbs: 36, fats: 49, price_sar: 35, estimated: true },
  { id: 'sectionb-chicken', chain: 'Section-B', name: 'Chicken Burger', category: 'main', calories: 450, protein: 24, carbs: 40, fats: 20, price_sar: 19, estimated: true },
  { id: 'sectionb-cheese-fries', chain: 'Section-B', name: 'Cheese Fries', category: 'side', calories: 430, protein: 8, carbs: 46, fats: 23, price_sar: 14, estimated: true },
  { id: 'sectionb-fries', chain: 'Section-B', name: 'French Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 15, price_sar: 10, estimated: true },
  { id: 'sectionb-cookie', chain: 'Section-B', name: 'Chocolate Chip Cookie', category: 'dessert', calories: 280, protein: 4, carbs: 36, fats: 13, price_sar: 9, estimated: true },

  // ── Salt ───────────────────────────────────────────────────────
  { id: 'salt-beef-slider', chain: 'Salt', name: 'Beef Slider', category: 'main', calories: 290, protein: 14, carbs: 24, fats: 15, price_sar: 14, estimated: true },
  { id: 'salt-beef-sliders-duo', chain: 'Salt', name: 'Beef Sliders (2 pc)', category: 'main', calories: 580, protein: 28, carbs: 48, fats: 30, price_sar: 26, estimated: true },
  { id: 'salt-chicken-slider', chain: 'Salt', name: 'Chicken Slider', category: 'main', calories: 270, protein: 15, carbs: 26, fats: 11, price_sar: 14, estimated: true },
  { id: 'salt-chicken-sliders-duo', chain: 'Salt', name: 'Chicken Sliders (2 pc)', category: 'main', calories: 540, protein: 30, carbs: 52, fats: 22, price_sar: 26, estimated: true },
  { id: 'salt-wagyu-slider', chain: 'Salt', name: 'Wagyu Slider', category: 'main', calories: 330, protein: 15, carbs: 24, fats: 19, price_sar: 18, estimated: true },
  { id: 'salt-fries', chain: 'Salt', name: 'French Fries', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 12, estimated: true },

  // ── Grill It ───────────────────────────────────────────────────
  { id: 'grillit-beef', chain: 'Grill It', name: 'Beef Burger', category: 'main', calories: 500, protein: 25, carbs: 41, fats: 26, price_sar: 20, estimated: true },
  { id: 'grillit-double-beef', chain: 'Grill It', name: 'Double Beef Burger', category: 'main', calories: 720, protein: 42, carbs: 42, fats: 41, price_sar: 28, estimated: true },
  { id: 'grillit-chicken', chain: 'Grill It', name: 'Chicken Burger', category: 'main', calories: 480, protein: 26, carbs: 44, fats: 21, price_sar: 19, estimated: true },
  { id: 'grillit-grilled-chicken', chain: 'Grill It', name: 'Grilled Chicken Sandwich', category: 'main', calories: 400, protein: 28, carbs: 38, fats: 14, price_sar: 19, estimated: true },
  { id: 'grillit-fries', chain: 'Grill It', name: 'French Fries', category: 'side', calories: 320, protein: 4, carbs: 42, fats: 15, price_sar: 9, estimated: true },

  // ── The Real Burger ────────────────────────────────────────────
  { id: 'realburger-classic', chain: 'The Real Burger', name: 'Real Classic Burger', category: 'main', calories: 490, protein: 24, carbs: 40, fats: 25, price_sar: 21, estimated: true },
  { id: 'realburger-double', chain: 'The Real Burger', name: 'Real Double Burger', category: 'main', calories: 710, protein: 41, carbs: 41, fats: 41, price_sar: 29, estimated: true },
  { id: 'realburger-chicken', chain: 'The Real Burger', name: 'Real Chicken Burger', category: 'main', calories: 470, protein: 25, carbs: 43, fats: 21, price_sar: 20, estimated: true },
  { id: 'realburger-smoky', chain: 'The Real Burger', name: 'Smoky Burger', category: 'main', calories: 540, protein: 26, carbs: 42, fats: 29, price_sar: 24, estimated: true },
  { id: 'realburger-fries', chain: 'The Real Burger', name: 'French Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 15, price_sar: 10, estimated: true },

  // ── Taxi ───────────────────────────────────────────────────────
  { id: 'taxi-burger', chain: 'Taxi', name: 'Taxi Burger', category: 'main', calories: 460, protein: 22, carbs: 40, fats: 23, price_sar: 14, estimated: true },
  { id: 'taxi-double-burger', chain: 'Taxi', name: 'Double Taxi Burger', category: 'main', calories: 660, protein: 37, carbs: 41, fats: 36, price_sar: 20, estimated: true },
  { id: 'taxi-chicken-sandwich', chain: 'Taxi', name: 'Chicken Taxi Sandwich', category: 'main', calories: 440, protein: 23, carbs: 42, fats: 19, price_sar: 13, estimated: true },
  { id: 'taxi-halloumi-sandwich', chain: 'Taxi', name: 'Halloumi Sandwich', category: 'main', calories: 410, protein: 16, carbs: 43, fats: 19, price_sar: 11, estimated: true },
  { id: 'taxi-fries', chain: 'Taxi', name: 'French Fries', category: 'side', calories: 300, protein: 4, carbs: 40, fats: 14, price_sar: 7, estimated: true },
  { id: 'taxi-cheese-balls', chain: 'Taxi', name: 'Cheese Balls', category: 'side', calories: 340, protein: 9, carbs: 33, fats: 19, price_sar: 10, estimated: true },

  // ── Burger Boutique ────────────────────────────────────────────
  { id: 'burgerboutique-classic', chain: 'Burger Boutique', name: 'Classic Boutique Burger', category: 'main', calories: 560, protein: 28, carbs: 43, fats: 30, price_sar: 38, estimated: true },
  { id: 'burgerboutique-truffle', chain: 'Burger Boutique', name: 'Truffle Burger', category: 'main', calories: 640, protein: 30, carbs: 45, fats: 37, price_sar: 46, estimated: true },
  { id: 'burgerboutique-crispy-chicken', chain: 'Burger Boutique', name: 'Crispy Chicken Burger', category: 'main', calories: 580, protein: 27, carbs: 52, fats: 28, price_sar: 36, estimated: true },
  { id: 'burgerboutique-minis-3pc', chain: 'Burger Boutique', name: 'Mini Burgers (3 pc)', category: 'main', calories: 630, protein: 30, carbs: 50, fats: 33, price_sar: 42, estimated: true },
  { id: 'burgerboutique-sweet-potato-fries', chain: 'Burger Boutique', name: 'Sweet Potato Fries', category: 'side', calories: 380, protein: 4, carbs: 50, fats: 18, price_sar: 18, estimated: true },

  // ── Nevermind ──────────────────────────────────────────────────
  { id: 'nevermind-classic', chain: 'Nevermind', name: 'Nevermind Classic', category: 'main', calories: 500, protein: 25, carbs: 40, fats: 26, price_sar: 25, estimated: true },
  { id: 'nevermind-double-trouble', chain: 'Nevermind', name: 'Double Trouble', category: 'main', calories: 720, protein: 42, carbs: 41, fats: 42, price_sar: 33, estimated: true },
  { id: 'nevermind-crispy-chicken', chain: 'Nevermind', name: 'Crispy Chicken Burger', category: 'main', calories: 540, protein: 26, carbs: 50, fats: 26, price_sar: 25, estimated: true },
  { id: 'nevermind-smash', chain: 'Nevermind', name: 'Smash Burger', category: 'main', calories: 470, protein: 24, carbs: 38, fats: 24, price_sar: 24, estimated: true },
  { id: 'nevermind-fries', chain: 'Nevermind', name: 'French Fries', category: 'side', calories: 330, protein: 4, carbs: 43, fats: 15, price_sar: 11, estimated: true },

  // ── GUNBUN ─────────────────────────────────────────────────────
  { id: 'gunbun-classic', chain: 'GUNBUN', name: 'GUNBUN Classic', category: 'main', calories: 530, protein: 26, carbs: 44, fats: 27, price_sar: 28, estimated: true },
  { id: 'gunbun-double', chain: 'GUNBUN', name: 'Double GUNBUN', category: 'main', calories: 750, protein: 43, carbs: 45, fats: 42, price_sar: 37, estimated: true },
  { id: 'gunbun-chicken', chain: 'GUNBUN', name: 'Chicken GUNBUN', category: 'main', calories: 550, protein: 27, carbs: 50, fats: 26, price_sar: 28, estimated: true },
  { id: 'gunbun-truffle', chain: 'GUNBUN', name: 'Truffle GUNBUN', category: 'main', calories: 610, protein: 28, carbs: 46, fats: 34, price_sar: 34, estimated: true },
  { id: 'gunbun-fries', chain: 'GUNBUN', name: 'French Fries', category: 'side', calories: 340, protein: 4, carbs: 44, fats: 16, price_sar: 12, estimated: true },
];
