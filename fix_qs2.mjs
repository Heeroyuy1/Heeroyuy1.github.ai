import fs from 'fs';
let h = fs.readFileSync('stratum-product.html', 'utf8');

const idx = h.indexOf('Quick Start');
// Get exact content from the actual file
const start = h.indexOf('<h3', idx - 30);
const end = h.indexOf('<h3', h.indexOf('How to Activate') - 30);
const exactOld = h.substring(start, end);

console.log('=== EXACT OLD TEXT (first 200) ===');
console.log(exactOld.substring(0, 200));
console.log('\n=== EXACT OLD TEXT CHARCODES (first 100) ===');
for (let i = 0; i < 100; i++) console.log(exactOld.charCodeAt(i) + ':' + exactOld[i]);
