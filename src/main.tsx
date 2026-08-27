import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/icons.css'
import './styles/global.css'
import './index.css'
import { i18nReady } from './i18n/i18n';
import App from './App.tsx'

void i18nReady.then(() => {
  const root = document.getElementById('root')!;
  const app = <StrictMode><App /></StrictMode>;
  // Production hydrates build-time HTML; Vite development remains a normal SPA.
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
});
