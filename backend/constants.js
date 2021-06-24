const TOTALRECORDS = 1000;
const RECORDSPERPAGE = 10;
const TOTALNUMCHUNKS = Math.ceil(TOTALRECORDS / RECORDSPERPAGE);

module.exports = {
  categoriesMerchant: {
    0: { merchant: 'Super Fresh', category: 'Food' },
    1: { merchant: 'Wallmart', category: 'Food' },
    2: { merchant: 'Adobe', category: 'Software' },
    3: { merchant: 'Apple', category: 'Tools' },
    4: { merchant: 'Google Play', category: 'Software' },
    5: { merchant: 'Att&t', category: 'Communication' },
    6: { merchant: 'Cannon Camera', category: 'Tool' },
    7: { merchant: 'Whole Foods', category: 'Food' },
    8: { merchant: 'Nike', category: 'Clothing' },
    9: { merchant: 'Jetblue', category: 'Transportation' }
  },
  status: { 0: 'pending', 1: 'approved', 2: 'declined' },
  TOTALRECORDS,
  RECORDSPERPAGE,
  TOTALNUMCHUNKS,
  currentIndex: 0,
  URL: 'http://localhost:3000'
};
