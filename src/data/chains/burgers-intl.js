// International burger chains operating in Riyadh.
// Tier 1 (published nutrition): McDonald's KSA, Burger King, Hardee's, Five Guys.
// Tier 2 (partial data / estimates): Fuddruckers, Johnny Rockets, Black Tap.

export default [
  // ── McDonald's KSA ─────────────────────────────────────────────
  { id: 'mcd-big-mac', chain: "McDonald's KSA", name: 'Big Mac', category: 'main', calories: 550, protein: 25, carbs: 46, fats: 30, price_sar: 24, estimated: false },
  { id: 'mcd-mcchicken', chain: "McDonald's KSA", name: 'McChicken Sandwich', category: 'main', calories: 400, protein: 15, carbs: 40, fats: 20, price_sar: 19, estimated: false },
  { id: 'mcd-6pc-nuggets', chain: "McDonald's KSA", name: '6-Piece Chicken McNuggets', category: 'side', calories: 270, protein: 14, carbs: 25, fats: 13, price_sar: 14, estimated: false },
  { id: 'mcd-quarter-pounder', chain: "McDonald's KSA", name: 'Quarter Pounder with Cheese', category: 'main', calories: 520, protein: 30, carbs: 42, fats: 26, price_sar: 27, estimated: false },
  { id: 'mcd-double-cheeseburger', chain: "McDonald's KSA", name: 'Double Cheeseburger', category: 'main', calories: 450, protein: 25, carbs: 34, fats: 24, price_sar: 17, estimated: false },
  { id: 'mcd-cheeseburger', chain: "McDonald's KSA", name: 'Cheeseburger', category: 'main', calories: 300, protein: 15, carbs: 32, fats: 13, price_sar: 10, estimated: false },
  { id: 'mcd-hamburger', chain: "McDonald's KSA", name: 'Hamburger', category: 'main', calories: 250, protein: 12, carbs: 31, fats: 9, price_sar: 8, estimated: false },
  { id: 'mcd-mcarabia-chicken', chain: "McDonald's KSA", name: 'McArabia Grilled Chicken', category: 'main', calories: 500, protein: 31, carbs: 44, fats: 22, price_sar: 22, estimated: false },
  { id: 'mcd-grand-chicken-deluxe', chain: "McDonald's KSA", name: 'Grand Chicken Deluxe', category: 'main', calories: 540, protein: 28, carbs: 48, fats: 26, price_sar: 26, estimated: false },
  { id: 'mcd-fries-medium', chain: "McDonald's KSA", name: 'French Fries (Medium)', category: 'side', calories: 340, protein: 4, carbs: 44, fats: 16, price_sar: 11, estimated: false },
  { id: 'mcd-fries-small', chain: "McDonald's KSA", name: 'French Fries (Small)', category: 'side', calories: 230, protein: 3, carbs: 30, fats: 11, price_sar: 8, estimated: false },
  { id: 'mcd-side-salad', chain: "McDonald's KSA", name: 'Side Salad', category: 'side', calories: 20, protein: 1, carbs: 4, fats: 0, price_sar: 9, estimated: false },
  { id: 'mcd-mcflurry-oreo', chain: "McDonald's KSA", name: 'McFlurry Oreo', category: 'dessert', calories: 340, protein: 9, carbs: 53, fats: 11, price_sar: 13, estimated: false },
  { id: 'mcd-sundae-chocolate', chain: "McDonald's KSA", name: 'Chocolate Sundae', category: 'dessert', calories: 280, protein: 6, carbs: 46, fats: 8, price_sar: 9, estimated: false },

  // ── Burger King ────────────────────────────────────────────────
  { id: 'bk-whopper', chain: 'Burger King', name: 'Whopper', category: 'main', calories: 660, protein: 28, carbs: 49, fats: 40, price_sar: 27, estimated: false },
  { id: 'bk-whopper-jr', chain: 'Burger King', name: 'Whopper Jr.', category: 'main', calories: 330, protein: 14, carbs: 27, fats: 18, price_sar: 15, estimated: false },
  { id: 'bk-big-king', chain: 'Burger King', name: 'Big King', category: 'main', calories: 550, protein: 27, carbs: 39, fats: 32, price_sar: 24, estimated: false },
  { id: 'bk-cheeseburger', chain: 'Burger King', name: 'Cheeseburger', category: 'main', calories: 300, protein: 15, carbs: 27, fats: 14, price_sar: 9, estimated: false },
  { id: 'bk-chicken-royale', chain: 'Burger King', name: 'Chicken Royale', category: 'main', calories: 630, protein: 25, carbs: 48, fats: 37, price_sar: 25, estimated: false },
  { id: 'bk-chicken-burger', chain: 'Burger King', name: 'Chicken Burger', category: 'main', calories: 450, protein: 18, carbs: 42, fats: 23, price_sar: 15, estimated: false },
  { id: 'bk-nuggets-6pc', chain: 'Burger King', name: '6-Piece Chicken Nuggets', category: 'side', calories: 260, protein: 13, carbs: 16, fats: 16, price_sar: 12, estimated: false },
  { id: 'bk-onion-rings', chain: 'Burger King', name: 'Onion Rings (Medium)', category: 'side', calories: 320, protein: 4, carbs: 40, fats: 16, price_sar: 10, estimated: false },
  { id: 'bk-fries-medium', chain: 'Burger King', name: 'French Fries (Medium)', category: 'side', calories: 320, protein: 4, carbs: 41, fats: 14, price_sar: 10, estimated: false },
  { id: 'bk-caramel-sundae', chain: 'Burger King', name: 'Caramel Sundae', category: 'dessert', calories: 280, protein: 5, carbs: 48, fats: 7, price_sar: 8, estimated: false },

  // ── Hardee's ───────────────────────────────────────────────────
  { id: 'hardees-famous-star', chain: "Hardee's", name: 'Famous Star with Cheese', category: 'main', calories: 590, protein: 24, carbs: 50, fats: 33, price_sar: 24, estimated: false },
  { id: 'hardees-super-star', chain: "Hardee's", name: 'Super Star with Cheese', category: 'main', calories: 790, protein: 41, carbs: 51, fats: 47, price_sar: 30, estimated: false },
  { id: 'hardees-western-star', chain: "Hardee's", name: 'Western Star', category: 'main', calories: 740, protein: 32, carbs: 64, fats: 38, price_sar: 27, estimated: false },
  { id: 'hardees-big-chicken-fillet', chain: "Hardee's", name: 'Big Chicken Fillet', category: 'main', calories: 630, protein: 29, carbs: 56, fats: 31, price_sar: 24, estimated: false },
  { id: 'hardees-charbroiled-chicken', chain: "Hardee's", name: 'Charbroiled Chicken Sandwich', category: 'main', calories: 380, protein: 30, carbs: 33, fats: 14, price_sar: 22, estimated: false },
  { id: 'hardees-angus-thickburger', chain: "Hardee's", name: '1/3 lb Angus Thickburger', category: 'main', calories: 750, protein: 34, carbs: 54, fats: 44, price_sar: 31, estimated: false },
  { id: 'hardees-tenders-3pc', chain: "Hardee's", name: 'Hand-Breaded Chicken Tenders (3 pc)', category: 'side', calories: 260, protein: 22, carbs: 13, fats: 13, price_sar: 17, estimated: false },
  { id: 'hardees-curly-fries', chain: "Hardee's", name: 'Curly Fries (Medium)', category: 'side', calories: 410, protein: 5, carbs: 47, fats: 22, price_sar: 11, estimated: false },
  { id: 'hardees-fries-medium', chain: "Hardee's", name: 'Natural Fries (Medium)', category: 'side', calories: 320, protein: 4, carbs: 43, fats: 14, price_sar: 10, estimated: false },
  { id: 'hardees-chocolate-cake', chain: "Hardee's", name: 'Chocolate Cake', category: 'dessert', calories: 300, protein: 3, carbs: 40, fats: 14, price_sar: 9, estimated: false },

  // ── Five Guys ──────────────────────────────────────────────────
  { id: 'fiveguys-hamburger', chain: 'Five Guys', name: 'Hamburger', category: 'main', calories: 700, protein: 39, carbs: 39, fats: 43, price_sar: 39, estimated: false },
  { id: 'fiveguys-cheeseburger', chain: 'Five Guys', name: 'Cheeseburger', category: 'main', calories: 840, protein: 47, carbs: 40, fats: 55, price_sar: 44, estimated: false },
  { id: 'fiveguys-little-hamburger', chain: 'Five Guys', name: 'Little Hamburger', category: 'main', calories: 480, protein: 23, carbs: 39, fats: 26, price_sar: 29, estimated: false },
  { id: 'fiveguys-little-cheeseburger', chain: 'Five Guys', name: 'Little Cheeseburger', category: 'main', calories: 550, protein: 27, carbs: 40, fats: 32, price_sar: 33, estimated: false },
  { id: 'fiveguys-bacon-burger', chain: 'Five Guys', name: 'Bacon Burger (Beef Bacon)', category: 'main', calories: 780, protein: 43, carbs: 39, fats: 50, price_sar: 45, estimated: false },
  { id: 'fiveguys-hot-dog', chain: 'Five Guys', name: 'Hot Dog', category: 'main', calories: 520, protein: 18, carbs: 40, fats: 31, price_sar: 25, estimated: false },
  { id: 'fiveguys-grilled-cheese', chain: 'Five Guys', name: 'Grilled Cheese', category: 'main', calories: 470, protein: 11, carbs: 41, fats: 26, price_sar: 19, estimated: false },
  { id: 'fiveguys-fries-little', chain: 'Five Guys', name: 'Little Fries', category: 'side', calories: 530, protein: 8, carbs: 72, fats: 23, price_sar: 17, estimated: false },
  { id: 'fiveguys-fries-regular', chain: 'Five Guys', name: 'Regular Fries', category: 'side', calories: 950, protein: 15, carbs: 131, fats: 41, price_sar: 23, estimated: false },

  // ── Fuddruckers ────────────────────────────────────────────────
  { id: 'fuddruckers-original-third', chain: 'Fuddruckers', name: 'The Original 1/3 lb Burger', category: 'main', calories: 660, protein: 35, carbs: 44, fats: 37, price_sar: 34, estimated: false },
  { id: 'fuddruckers-half-pound', chain: 'Fuddruckers', name: '1/2 lb Burger', category: 'main', calories: 840, protein: 50, carbs: 45, fats: 51, price_sar: 42, estimated: false },
  { id: 'fuddruckers-crispy-chicken', chain: 'Fuddruckers', name: 'Crispy Chicken Sandwich', category: 'main', calories: 570, protein: 28, carbs: 52, fats: 27, price_sar: 29, estimated: false },
  { id: 'fuddruckers-grilled-chicken', chain: 'Fuddruckers', name: 'Grilled Chicken Sandwich', category: 'main', calories: 440, protein: 34, carbs: 41, fats: 15, price_sar: 29, estimated: false },
  { id: 'fuddruckers-hot-dog', chain: 'Fuddruckers', name: 'Hot Dog', category: 'main', calories: 510, protein: 17, carbs: 42, fats: 30, price_sar: 24, estimated: true },
  { id: 'fuddruckers-wedge-fries', chain: 'Fuddruckers', name: 'Wedge Fries', category: 'side', calories: 430, protein: 6, carbs: 56, fats: 20, price_sar: 14, estimated: false },
  { id: 'fuddruckers-brownie', chain: 'Fuddruckers', name: 'Chocolate Brownie', category: 'dessert', calories: 480, protein: 6, carbs: 64, fats: 23, price_sar: 15, estimated: false },

  // ── Johnny Rockets ─────────────────────────────────────────────
  { id: 'johnnyrockets-original', chain: 'Johnny Rockets', name: 'The Original', category: 'main', calories: 590, protein: 28, carbs: 45, fats: 33, price_sar: 32, estimated: false },
  { id: 'johnnyrockets-smokehouse', chain: 'Johnny Rockets', name: 'Smoke House Burger', category: 'main', calories: 780, protein: 36, carbs: 54, fats: 46, price_sar: 38, estimated: false },
  { id: 'johnnyrockets-rocket-single', chain: 'Johnny Rockets', name: 'Rocket Single', category: 'main', calories: 480, protein: 24, carbs: 40, fats: 25, price_sar: 27, estimated: true },
  { id: 'johnnyrockets-crispy-chicken', chain: 'Johnny Rockets', name: 'Crispy Chicken Sandwich', category: 'main', calories: 560, protein: 26, carbs: 52, fats: 27, price_sar: 29, estimated: false },
  { id: 'johnnyrockets-tenders-4pc', chain: 'Johnny Rockets', name: 'Chicken Tenders (4 pc)', category: 'side', calories: 340, protein: 26, carbs: 18, fats: 18, price_sar: 24, estimated: false },
  { id: 'johnnyrockets-american-fries', chain: 'Johnny Rockets', name: 'American Fries', category: 'side', calories: 440, protein: 6, carbs: 58, fats: 20, price_sar: 14, estimated: false },
  { id: 'johnnyrockets-apple-pie', chain: 'Johnny Rockets', name: 'Apple Pie', category: 'dessert', calories: 350, protein: 3, carbs: 48, fats: 17, price_sar: 14, estimated: true },

  // ── Black Tap ──────────────────────────────────────────────────
  { id: 'blacktap-all-american', chain: 'Black Tap', name: 'All-American Burger', category: 'main', calories: 780, protein: 38, carbs: 46, fats: 47, price_sar: 52, estimated: true },
  { id: 'blacktap-greg-norman', chain: 'Black Tap', name: 'The Greg Norman (Wagyu)', category: 'main', calories: 850, protein: 40, carbs: 44, fats: 55, price_sar: 65, estimated: true },
  { id: 'blacktap-crispy-chicken', chain: 'Black Tap', name: 'Crispy Chicken Sandwich', category: 'main', calories: 720, protein: 34, carbs: 58, fats: 38, price_sar: 49, estimated: true },
  { id: 'blacktap-falafel-burger', chain: 'Black Tap', name: 'Falafel Burger', category: 'main', calories: 570, protein: 16, carbs: 62, fats: 27, price_sar: 39, estimated: true },
  { id: 'blacktap-texan-burger', chain: 'Black Tap', name: 'The Texan Burger', category: 'main', calories: 880, protein: 44, carbs: 50, fats: 55, price_sar: 59, estimated: true },
  { id: 'blacktap-fries', chain: 'Black Tap', name: 'French Fries', category: 'side', calories: 420, protein: 5, carbs: 55, fats: 20, price_sar: 19, estimated: true },
];
