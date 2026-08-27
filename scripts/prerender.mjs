import { readFile, writeFile } from 'node:fs/promises';

process.env.NODE_ENV = 'production';
const { render } = await import('../dist-ssr/entry-server.js');
const index = new URL('../dist/index.html', import.meta.url);
const template = await readFile(index, 'utf8');
const outlet = '<div id="root"></div>';
if (!template.includes(outlet)) throw new Error('Missing or already rendered root placeholder');
const markup = await render();
if (!markup.includes('<h1') || !markup.includes('id="contact"')) {
  throw new Error('Incomplete prerender: expected homepage content');
}
await writeFile(index, template.replace(outlet, () => `<div id="root">${markup}</div>`));
console.log(`Prerendered /: ${Buffer.byteLength(markup)} bytes of React HTML`);
