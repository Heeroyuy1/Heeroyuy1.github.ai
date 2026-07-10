import fs from 'fs';
const h = fs.readFileSync('stratum-product.html', 'utf8');
const idx = h.indexOf('Quick Start');
if (idx > -1) {
  const slice = h.substring(idx - 20, idx + 1800);
  console.log(slice);
} else {
  console.log('Quick Start not found');
}
