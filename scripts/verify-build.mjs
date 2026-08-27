import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

// Build contract, checked directly on disk: no browser/JavaScript rendering.
const output = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', output), 'utf8');
assert.match(html, /<html lang="es-MX">/);
assert.match(html, /<link rel="canonical" href="https:\/\/www\.acg-devstudio\.com\/"/);
assert.match(html, /<title>Desarrollo Web en Aguascalientes \| ACGDevStudio<\/title>/);
assert.match(html, /name="description"/);
assert.doesNotMatch(html, /acgdevstudio\.web\.app/);
const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.deepEqual(graph['@graph'].map((entity) => entity['@type']), ['Organization', 'WebSite']);
assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
assert.match(html, /Tu negocio merece una web a su altura/);
assert.match(html, /Creo sitios web profesionales/);
for (const id of ['home', 'portfolio', 'process', 'demo', 'faq', 'contact']) {
  assert.equal((html.match(new RegExp(`id="${id}"`, 'g')) ?? []).length, 1, `section ${id}`);
}
for (const title of ['Inredtelecom', 'Martha García', 'La Chiluda Seafood']) assert.ok(html.includes(title));
const articles = html.match(/<article\b[^>]*>/g) ?? [];
assert.equal(articles.length, 3);
assert.equal(articles.filter((tag) => tag.includes('hidden=""') && tag.includes('inert=""')).length, 2);
assert.equal((html.match(/class="faq-question"/g) ?? []).length, 8);
assert.match(html, /<form\b[^>]*method="post"/);
assert.match(html, /Solicitar propuesta visual/);
assert.match(html, /og:image:width" content="1200"/);
assert.match(html, /og:image:height" content="630"/);

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(anchor), `anchor ${anchor}`);
// Verify every emitted local image/style/script URL, including responsive variants.
const assets = new Set([...html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)].map((m) => m[1]));
for (const [, set] of html.matchAll(/(?:srcSet|imagesrcset)="([^"]+)"/gi)) {
  for (const candidate of set.split(',')) assets.add(candidate.trim().split(/\s+/)[0]);
}
for (const asset of assets) await access(new URL(asset.slice(1), output));
for (const path of [...assets].filter((asset) => asset.endsWith('.css'))) {
  const css = await readFile(new URL(path.slice(1), output), 'utf8');
  assert.doesNotMatch(css, /bootstrap-icons\.woff|@import[^;]*fonts\.googleapis/);
  for (const [, asset] of css.matchAll(/url\(["']?(\/assets\/[^)"']+)/g)) {
    await access(new URL(asset.slice(1), output));
  }
}
for (const file of ['robots.txt', 'sitemap.xml', 'favicon.png', 'og-acgdevstudio.jpg']) await access(new URL(file, output));
const robots = await readFile(new URL('robots.txt', output), 'utf8');
assert.match(robots, /Allow: \/[\r\n]/);
assert.match(robots, /Sitemap: https:\/\/www\.acg-devstudio\.com\/sitemap\.xml/);
const sitemap = await readFile(new URL('sitemap.xml', output), 'utf8');
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]), ['https://www.acg-devstudio.com/']);
console.log('Static HTML verified: SEO, 6 sections, 3 projects, 8 FAQs, form, anchors and assets.');
