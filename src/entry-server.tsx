import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { i18nReady } from './i18n/i18n';
import App from './App';

// Executed only at build time. No persistent server or browser is required.
export async function render() {
  await i18nReady;
  const { prelude } = await prerender(<StrictMode><App /></StrictMode>);
  return new Response(prelude).text();
}
