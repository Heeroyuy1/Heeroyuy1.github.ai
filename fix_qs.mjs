import fs from 'fs';
let h = fs.readFileSync('stratum-product.html', 'utf8');

// Quick Start section - match exactly from what we read
const oldText = '                    <h3 style="margin-bottom: 1rem;">Quick Start</h3>\n                    <pre><code># Clone or download the repository\ncd stratum\n\n# Install dependencies\npip install PyQt6 PyQt6-Charts pyqtgraph numpy pandas\npip install yfinance scipy reportlab openpyxl cryptography\n\n# Run the application\npython app.py</code></pre>\n\n                    <p style="color: var(--color-gray-400);">On first launch, Stratum prompts for license activation or starts a <strong>24-hour free trial</strong>. It then creates the default profile, data/logs/reports directories, and opens the Dashboard tab ready for use.</p>\n\n                    <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Portable Build</h3>\n                    <pre><code>python build_portable.py --portable</code></pre>\n                    <p style="color: var(--color-gray-400);">Outputs <code>dist/Stratum.exe</code> \u2014 a single-file portable executable. No Python installation required.</p>';

const newText = '                    <h3 style="margin-bottom: 1rem;">Quick Start (Portable \u2014 No Install Needed)</h3>\n                    <p style="color: var(--color-gray-300); font-size: 0.92rem;">\n                        The easiest way to use Stratum is the <strong>portable executable</strong> \u2014 no Python or dependency setup required:\n                    </p>\n                    <ol style="list-style: decimal; padding-left: 1.2rem; color: var(--color-gray-300); font-size: 0.9rem;">\n                        <li style="margin-bottom: 0.3rem;">Download <code>Stratum.exe</code> from the product page or your license delivery email</li>\n                        <li style="margin-bottom: 0.3rem;">Double-click <code>Stratum.exe</code> to launch the application</li>\n                        <li style="margin-bottom: 0.3rem;">On first launch, choose <strong>Start 24-Hour Free Trial</strong> or activate your license key</li>\n                        <li style="margin-bottom: 0.3rem;">Enter stock symbols, set your date range, and click <strong>Run Backtest</strong></li>\n                    </ol>\n\n                    <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">System Requirements</h3>\n                    <ul>\n                        <li><strong>OS:</strong> Windows 10 or 11 (64-bit)</li>\n                        <li><strong>Disk:</strong> 500 MB minimum (more for cached data)</li>\n                        <li><strong>RAM:</strong> 4 GB minimum, 8 GB recommended</li>\n                    </ul>\n\n                    <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Build from Source (Advanced)</h3>\n                    <p style="color: var(--color-gray-400); font-size: 0.9rem;">If you prefer to run from source code instead of the portable build:</p>\n                    <pre><code>pip install -r requirements.txt\npython app.py</code></pre>\n                    <p style="color: var(--color-gray-400); font-size: 0.88rem;">Requires Python 3.10. See <code>README.md</code> for full details.</p>';

if (h.includes(oldText)) {
  h = h.replace(oldText, newText);
  fs.writeFileSync('stratum-product.html', h, 'utf8');
  console.log('Quick Start replaced successfully');
} else {
  console.log('Old Quick Start text NOT FOUND - check for differences');
  // show what's actually there
  const idx = h.indexOf('Quick Start');
  if (idx > -1) console.log('Found at:', h.substring(idx - 10, idx + 100));
}
