import fs from 'fs';
let h = fs.readFileSync('stratum-product.html', 'utf8');

// === 1. License Activation section ===
const licActOld = '<h4 style="color: white; margin-top: 1rem;">License Activation</h4>\n                            <ol style="list-style: decimal; padding-left: 1.2rem; color: var(--color-gray-300); font-size: 0.9rem;">\n                                <li style="margin-bottom: 0.3rem;">Obtain a key via <code>python generate_license_key.py</code> (format: <code>XXXXX-XXXXX-XXXXX-XXXXX</code>)</li>\n                                <li style="margin-bottom: 0.3rem;">Open License tab, paste key, click Activate</li>\n                                <li style="margin-bottom: 0.3rem;">All features unlock immediately (no restart needed)</li>\n                            </ol>';

const licActNew = '<h4 style="color: white; margin-top: 1rem;">Getting Started (Trial)</h4>\n                            <ol style="list-style: decimal; padding-left: 1.2rem; color: var(--color-gray-300); font-size: 0.9rem;">\n                                <li style="margin-bottom: 0.3rem;">Launch Stratum \u2014 a <strong>24-hour free trial</strong> starts automatically on first run</li>\n                                <li style="margin-bottom: 0.3rem;">The License tab shows remaining trial time and which features are locked</li>\n                            </ol>\n\n                            <h4 style="color: white; margin-top: 1rem;">License Activation (From Within the App)</h4>\n                            <ol style="list-style: decimal; padding-left: 1.2rem; color: var(--color-gray-300); font-size: 0.9rem;">\n                                <li style="margin-bottom: 0.3rem;">Purchase a license key from Woven Model (key format: <code>XXXXX-XXXXX-XXXXX-XXXXX</code>)</li>\n                                <li style="margin-bottom: 0.3rem;">Open the <strong>License tab</strong> in Stratum</li>\n                                <li style="margin-bottom: 0.3rem;">Paste your license key into the activation field and click <strong>Activate</strong></li>\n                                <li style="margin-bottom: 0.3rem;">All features unlock immediately \u2014 no restart needed</li>\n                            </ol>';

h = h.replace(licActOld, licActNew);

// === 2. License Key Format section ===
const keyFmtOld = '<h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">License Key Format</h3>\n                    <pre><code>python generate_license_key.py\n# Output:\n#   1. XXXXX-XXXXX-XXXXX-XXXXX  \u2705\n#   2. XXXXX-XXXXX-XXXXX-XXXXX  \u2705</code></pre>\n                    <p style="color: var(--color-gray-400);">Keys use format <code>XXXXX-XXXXX-XXXXX-XXXXX</code> with a modulo-36 checksum (20 alphanumeric characters). Generated keys pass validation. Contact Woven Model to obtain a license key.</p>';

const keyFmtNew = '<h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">How to Activate</h3>\n                    <ol style="list-style: decimal; padding-left: 1.2rem; color: var(--color-gray-300); font-size: 0.9rem;">\n                        <li style="margin-bottom: 0.3rem;">Launch Stratum \u2014 the <strong>License tab</strong> opens automatically or is accessible from the tab bar</li>\n                        <li style="margin-bottom: 0.3rem;">If you haven\'t purchased a key yet, start a <strong>24-hour free trial</strong> with one click</li>\n                        <li style="margin-bottom: 0.3rem;">To activate a full license, paste your key (format: <code>XXXXX-XXXXX-XXXXX-XXXXX</code>) into the activation field and click <strong>Activate</strong></li>\n                        <li style="margin-bottom: 0.3rem;">All features unlock immediately \u2014 no app restart required</li>\n                        <li style="margin-bottom: 0.3rem;">Need a key? <a href="https://calendar.app.google/VcNdH476r22az1kj7" target="_blank" rel="noopener noreferrer">Schedule a consultation</a> with Woven Model to purchase a license</li>\n                    </ol>';

h = h.replace(keyFmtOld, keyFmtNew);

// === 3. Quick Start section ===
// Find the exact position of "Quick Start" then walk backward to the preceding h3, forward to the next h3
let qsIdx = h.indexOf('Quick Start');
// Walk backward from qsIdx to find the last h3 tag
let contentStart = h.lastIndexOf('<h3', qsIdx);
// Walk forward from qsIdx to find the next h3 tag (for "Portable Build")
let nextH3 = h.indexOf('<h3', qsIdx + 1);
// And the one after that (for "How to Activate" or whatever follows Portable Build)
let endH3 = h.indexOf('<h3', nextH3 + 1);

// But the first `<h3` matching might be "Installation" section header. Let's check content:
let qsBlock = h.substring(contentStart, endH3);
console.log('QS BLOCK starts with:', qsBlock.substring(0, 50));

// The contentStart should be "Quick Start" section h3, not the first h3 in the document
// Walk backwards from qsIdx to find the appropriate h3
let searchPos = qsIdx;
let found = false;
for (let i = 200; i > 0; i--) {
  let testPos = h.lastIndexOf('<h3', qsIdx - i);
  if (testPos > contentStart - 5) continue;
  // Found the h3 BEFORE Quick Start
  contentStart = testPos;
  break;
}

console.log('Adjusted contentStart h3:', h.substring(contentStart, contentStart + 60));

let qsOld = h.substring(contentStart, endH3);
console.log('QS Old total length:', qsOld.length);

let qsNew = '<h3 style="margin-bottom: 1rem;">Quick Start (Portable \u2014 No Install Needed)</h3>\n                    <p style="color: var(--color-gray-300); font-size: 0.92rem;">\n                        The easiest way to use Stratum is the <strong>portable executable</strong> \u2014 no Python or dependency setup required:\n                    </p>\n                    <ol style="list-style: decimal; padding-left: 1.2rem; color: var(--color-gray-300); font-size: 0.9rem;">\n                        <li style="margin-bottom: 0.3rem;">Download <code>Stratum.exe</code> from the product page or your license delivery email</li>\n                        <li style="margin-bottom: 0.3rem;">Double-click <code>Stratum.exe</code> to launch the application</li>\n                        <li style="margin-bottom: 0.3rem;">On first launch, choose <strong>Start 24-Hour Free Trial</strong> or activate your license key</li>\n                        <li style="margin-bottom: 0.3rem;">Enter stock symbols, set your date range, and click <strong>Run Backtest</strong></li>\n                    </ol>\n\n                    <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">System Requirements</h3>\n                    <ul>\n                        <li><strong>OS:</strong> Windows 10 or 11 (64-bit)</li>\n                        <li><strong>Disk:</strong> 500 MB minimum (more for cached data)</li>\n                        <li><strong>RAM:</strong> 4 GB minimum, 8 GB recommended</li>\n                    </ul>\n\n                    <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Build from Source (Advanced)</h3>\n                    <p style="color: var(--color-gray-400); font-size: 0.9rem;">If you prefer to run from source code instead of the portable build:</p>\n                    <pre><code>pip install -r requirements.txt\npython app.py</code></pre>\n                    <p style="color: var(--color-gray-400); font-size: 0.88rem;">Requires Python 3.10. See <code>README.md</code> for full details.</p>';

// Direct replacement using string lengths
h = h.substring(0, contentStart) + qsNew + h.substring(endH3);

// Verify the file is still valid HTML (basic check)
if (h.includes('<html') && h.includes('</html>')) {
  fs.writeFileSync('stratum-product.html', h, 'utf8');
  console.log('All changes applied successfully');
} else {
  console.log('ERROR: File would be corrupted! Undoing...');
}

// Check that old patterns are gone
if (h.includes('python generate_license_key.py') || h.includes('License Key Format') || h.includes('Clone or download the repository')) {
  console.log('WARNING: Some old patterns remain');
} else {
  console.log('All old patterns removed successfully');
}
