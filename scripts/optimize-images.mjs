import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Run explicitly when source artwork changes; originals are never overwritten.
const root = new URL('../', import.meta.url);
const resolve = (path) => fileURLToPath(new URL(path, root));
await mkdir(resolve('src/images/optimized'), { recursive: true });

const sources = [
  ['chiluda', 'RestaurantDemo/01HomePage.png', [400, 640, 960, 1440]],
  ['martha', 'LandingPageMartha/01HomePage.png', [400, 640, 960, 1440]],
  ['inred-home', 'Inredtelecom/01HomePage.png', [400, 640, 960, 1339]],
  ['inred-work', 'Inredtelecom/03OurWorks.png', [400, 682]],
];
const report = [];
for (const [name, source, widths] of sources) {
  const input = resolve(`src/images/${source}`);
  for (const width of widths) {
    const output = resolve(`src/images/optimized/${name}-${width}.webp`);
    const info = await sharp(input).resize({ width, withoutEnlargement: true })
      .webp({ quality: 88, effort: 6, smartSubsample: true }).toFile(output);
    report.push({ asset: `${name}-${width}.webp`, ...info });
  }
}
const logo = resolve('src/images/AGGDev/logo.png');
// Preserve the original ratio and transparent margins used by the Navbar crop.
for (const width of [64, 128]) {
  const info = await sharp(logo).resize({ width })
    .webp({ lossless: true, effort: 6 })
    .toFile(resolve(`src/images/optimized/logo-nav-${width}.webp`));
  report.push({ asset: `logo-nav-${width}.webp`, ...info });
}

// Deterministic, brand-only social graphic. No client artwork or invented claims.
const brandLogo = await sharp(logo).trim().resize({ width: 164 }).png().toBuffer();
const artwork = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#060b12"/>
  <path d="M865 0H1200V630H690Z" fill="#0d1724"/>
  <path d="M80 64H1120" stroke="#5f72ff" stroke-width="3"/>
  <image href="data:image/png;base64,${brandLogo.toString('base64')}" x="78" y="100" width="164" height="146"/>
  <g font-family="Arial, sans-serif">
    <text x="80" y="333" fill="#f4f7fb" font-size="76" font-weight="700" letter-spacing="-3">ACGDevStudio</text>
    <text x="84" y="409" fill="#dce5ef" font-size="38">Desarrollo Web en Aguascalientes</text>
    <text x="84" y="540" fill="#9eacbc" font-size="25">acg-devstudio.com</text>
  </g>
  <rect x="1088" y="515" width="30" height="30" rx="5" fill="#ff9a72"/>
</svg>`;
await sharp(Buffer.from(artwork)).jpeg({ quality: 88, mozjpeg: true })
  .toFile(resolve('public/og-acgdevstudio.jpg'));
await writeFile(resolve('docs/image-optimization.json'), JSON.stringify(report, null, 2) + '\n');
console.table(report.map(({ asset, width, height, size }) => ({ asset, width, height, bytes: size })));
