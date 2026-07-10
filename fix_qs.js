var fs = require('fs');
var h = fs.readFileSync('stratum-product.html', 'utf8');

// Use the "System Requirements" heading as an anchor since it appears right before Quick Start
var srIdx = h.indexOf('<h3 style="margin-bottom: 1rem;">System Requirements</h3>');
// Find the next "Quick Start" heading
var qsIdx = h.indexOf('Quick Start', srIdx);

// contentStart is the System Requirements h3
// end is the h3 after "Portable Build" (next h3 after Quick Start + Portable Build)
// Find the Portable Build h3 after qsIdx
var portableIdx = h.indexOf('<h3', qsIdx);
// Find the h3 after Portable Build
var afterPortableIdx = h.indexOf('<h3', portableIdx + 5);

console.log('System Requirements at:', srIdx);
console.log('Quick Start at:', qsIdx);
console.log('Portable Build h3 at:', portableIdx);
console.log('After Portable h3 at:', afterPortableIdx);

var oldBlock = h.substring(srIdx, afterPortableIdx);
console.log('Old block length:', oldBlock.length);
console.log('Old block starts with:', oldBlock.substring(0, 50));

var newBlock = [
  '<h3 style="margin-bottom: 1rem;">Quick Start (Portable \u2014 No Install Needed)</h3>',
  '                    <p style="color: var(--color-gray-300); font-size: 0.92rem;">',
  '                        The easiest way to use Stratum is the <strong>portable executable</strong> \u2014 no Python or dependency setup required:',
  '                    </p>',
  '                    <ol style="list-style: decimal; padding-left: 1.2rem; color: var(--color-gray-300); font-size: 0.9rem;">',
  '                        <li style="margin-bottom: 0.3rem;">Download <code>Stratum.exe</code> from the product page or your license delivery email</li>',
  '                        <li style="margin-bottom: 0.3rem;">Double-click <code>Stratum.exe</code> to launch the application</li>',
  '                        <li style="margin-bottom: 0.3rem;">On first launch, choose <strong>Start 24-Hour Free Trial</strong> or activate your license key</li>',
  '                        <li style="margin-bottom: 0.3rem;">Enter stock symbols, set your date range, and click <strong>Run Backtest</strong></li>',
  '                    </ol>',
  '',
  '                    <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">System Requirements</h3>',
  '                    <ul>',
  '                        <li><strong>OS:</strong> Windows 10 or 11 (64-bit)</li>',
  '                        <li><strong>Disk:</strong> 500 MB minimum (more for cached data)</li>',
  '                        <li><strong>RAM:</strong> 4 GB minimum, 8 GB recommended</li>',
  '                    </ul>',
  '',
  '                    <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Build from Source (Advanced)</h3>',
  '                    <p style="color: var(--color-gray-400); font-size: 0.9rem;">If you prefer to run from source code instead of the portable build:</p>',
  '                    <pre><code>pip install -r requirements.txt',
  'python app.py</code></pre>',
  '                    <p style="color: var(--color-gray-400); font-size: 0.88rem;">Requires Python 3.10. See <code>README.md</code> for full details.</p>'
].join('\n');

h = h.substring(0, srIdx) + newBlock + h.substring(afterPortableIdx);

if (h.indexOf('<html') !== -1 && h.indexOf('</html>') !== -1) {
  fs.writeFileSync('stratum-product.html', h, 'utf8');
  console.log('Success!');
} else {
  console.log('ERROR: corrupt HTML');
}
