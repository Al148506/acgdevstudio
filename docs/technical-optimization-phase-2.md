# Optimización técnica — fase 2

Fecha: 2026-08-27. Validado localmente; no desplegado a Vercel.

## Alcance y resultado

Se conserva React 19 + Vite 7 + TypeScript, el diseño, copy, SEO previo y las interacciones.
Se implementó generación estática de la home durante el build e hidratación en el navegador.
No se agregaron páginas, Analytics, Pixel, rutas ni servidor permanente.

## Auditoría de imágenes y ahorro

Pesos en bytes (KB decimal). Medidas de visualización tomadas en desktop 1440 × 1000,
DPR 1. La transformación CSS del logo sigue siendo la original (38px de caja,
aproximadamente 44px después del scale). Las capturas mantienen object-fit y proporciones.

| Imagen / uso | Original PNG | Dimensiones originales | Caja desktop | WebP seleccionado desktop | Variantes WebP |
|---|---:|---|---|---:|---|
| Logo / Navbar | 833261 | 1402 × 1122 | 38 × 38 | 3612 | 64 / 128 px, lossless |
| La Chiluda / Hero y CaseStudies | 1683196 | 1892 × 903 | Hero 508 × 286 | 19512 (640px, Hero) | 400 / 640 / 960 / 1440 |
| Martha / Hero y CaseStudies | 304340 | 1906 × 909 | Hero 281 × 149 | 6102 (400px, Hero) | 400 / 640 / 960 / 1440 |
| Inred galería / Hero | 354473 | 682 × 485 | 281 × 149 | 22706 (400px) | 400 / 682 |
| Inred home / CaseStudies | 192054 | 1339 × 536 | 721 × 406 | 21324 (960px) | 400 / 640 / 960 / 1339 |

- Logo + tres imágenes eager: **3175270 → 51932 bytes**, ahorro **3123338 bytes (~98.4%)** en esta selección desktop DPR 1.
- Incluyendo Inred home: **3367324 → 73256 bytes**. Esta imagen es lazy y no se incluye en el ahorro estrictamente eager.
- Incluso seleccionando la variante mayor de cada imagen eager: 158218 bytes (~95.0% menos).
- Todas las 16 variantes juntas: 363068 bytes; el navegador NO descarga todas las variantes.
- La selección real depende de viewport, DPR y caché. Al redimensionar, el navegador puede conservar una variante más grande ya descargada.
- Originales conservados sin modificaciones. No se amplía el original de galería de 682px.
- WebP calidad 88 para capturas; logo lossless. AVIF no se añadió: WebP ya reduce sustancialmente el peso con una sola familia de recursos mantenible.
- BrowserFrame acepta srcSet/sizes/width/height. Hero continúa eager y La Chiluda tiene fetchPriority=high; CaseStudies mantiene lazy.

Regeneración explícita (no necesaria en cada deploy): `npm run optimize:images`.
Sharp 0.35.4 es una dependencia de desarrollo; no se incorpora al bundle del navegador.
Los archivos generados deben versionarse junto con el código.

## Open Graph

`public/og-acgdevstudio.jpg`, 1200 × 630, 32354 bytes. Composición basada en el logo,
nombre, dominio y colores actuales, sin imágenes de clientes ni afirmaciones nuevas.
Fuente reproducible: `scripts/optimize-images.mjs`.

URL pública: https://www.acg-devstudio.com/og-acgdevstudio.jpg

Se configuraron og:image/width/height/alt y twitter:image/alt con summary_large_image.
En el preview de producción devuelve HTTP 200 image/jpeg.

## Fuentes

- Se mantienen Inter (400/500/600/700), Space Grotesk (500/600/700) y DM Sans (300/400/500).
- DM Sans sí se usa en FAQ, Contact y Footer; no se sustituyó por Inter.
- Se conservan las reglas font-weight de los componentes, incluyendo pesos sintetizados como antes.
- Se retiraron los @import de los cuatro CSS activos y se centralizó una sola solicitud en el head,
  con preconnect a Google Fonts/gstatic y display=swap.
- Se excluyeron Syne y cursivas de la landing activa. Los componentes retirados conservan sus estilos
  originales por si se reutilizan; no están incluidos en el build actual.
- El stylesheet de fuentes sigue siendo externo y render-blocking; mejora el descubrimiento temprano
  y elimina la cadena @import, no elimina toda dependencia de red. Self-hosting queda como alternativa futura.

## Bootstrap y peso inicial

- Bootstrap CSS se conserva: reboot, container y utilidades de componentes existentes siguen siendo consumidores.
- Bootstrap JS se retiró del entry: no existen data-bs-* ni llamadas a sus plugins; menú/FAQ/carrusel usan React.
- Bootstrap Icons permanece instalado. Se utilizan sus mismos SVG mediante máscaras CSS para los ocho iconos
  detectados, incluidos consumidores de componentes retirados, conservando sus clases bi-*.
- La instalación local estaba incompleta (faltaban font/fonts y cuatro SVG). Se restauraron dependencias
  del lockfile; no se cambió ninguna versión preexistente. El build final no tiene warnings de iconos.

| Bundle inicial, sin comprimir | Antes | Después | Reducción |
|---|---:|---:|---:|
| JavaScript | 450.03 KB | 369.99 KB | ~80.04 KB / 17.8% |
| CSS | 353.52 KB | 273.23 KB | ~80.29 KB / 22.7% |

Gzip después: JS113.93 KB / CSS39.69 KB (antes137.87 / 53.62 KB).
HTML crece de unos3.46 KB a34403 bytes porque ahora incluye contenido real.
Estos son tamaños de build, NO métricas Lighthouse ni tráfico total de una sesión.

## Prerenderizado: decisión e implementación

Se eligieron APIs oficiales ya instaladas: React `prerender` de react-dom/static,
`hydrateRoot` y build SSR de Vite. No hay plugin nuevo ni navegador headless en Vercel.

Alternativas consideradas:
- Continuar SPA: mínimo mantenimiento, pero HTML vacío antes de JavaScript; no cumple este objetivo.
- Plugin/captura con navegador: agrega dependencia, descarga de navegador y sincronización de snapshots;
  innecesario para una sola ruta con contenido estático.
- Astro/Next: útiles con más rutas/datos, pero migración innecesaria y fuera de alcance.
- APIs nativas: pequeño script propio que hay que mantener, sin dependencia del ciclo de vida de un plugin.

Flujo de `npm run build`:
1. `tsc -b`.
2. Build cliente en `dist`.
3. Build SSR en `dist-ssr` (ya ignorado por Git; no es el directorio público).
4. `scripts/prerender.mjs` renderiza App y sustituye el root vacío en dist/index.html.
5. `scripts/verify-build.mjs` valida el contrato de contenido/SEO/assets y falla si está incompleto.

Vercel: build command **npm run build**, output **dist**, Node22.12+ o24 compatible con Vite7.
Si existe un override del comando en el dashboard, comprobar que no sea solo `vite build`.
No hacen falta Functions ni un servidor Node en producción. Las variables EmailJS VITE_* se siguen
configurando en Vercel como antes. Los cambios de contenido requieren un nuevo build.

La misma inicialización española de i18n se espera antes del prerender y la hidratación.
El año de Footer usa snapshot de build durante hidratación y año actual después; evita diferencias
por cambio de año. Navbar/FAQ/formulario/carrusel mantienen el mismo estado inicial.
Desarrollo (`npm run dev`) conserva montaje SPA normal; producción hidrata el HTML existente.
El formulario declara method=post para que, si JavaScript no llega a cargar, el navegador no
incluya datos personales en una URL GET. El envío real por EmailJS y las interacciones requieren
JavaScript; no se ha creado un endpoint de formulario sin JavaScript.

Fragmento real del HTML final (extractos abreviados):

```html
<div id="root">
  <!-- React también emite preloads de las imágenes eager -->
  <nav class="site-navbar" aria-label="Navegación principal">...</nav>
  <main>
    <section class="hero-section" id="home" aria-labelledby="hero-title">
      ...
      <h1 class="hero-title" id="hero-title">Tu negocio merece una web a su altura</h1>
      <p class="hero-description">Creo sitios web profesionales para ayudarte a destacar y conectar con más clientes.</p>
      ...
    </section>
    ...
    <article class="case-study case-study--enter-next" aria-labelledby="inredtelecom-title" aria-hidden="false">...</article>
    <article class="case-study" aria-labelledby="martha-garcia-portfolio-title" hidden="" inert="" aria-hidden="true">...</article>
    <article class="case-study" aria-labelledby="la-chiluda-demo-title" hidden="" inert="" aria-hidden="true">...</article>
  </main>
</div>
```

Todo el contenido de las tres fichas está en HTML; solo una se muestra. Los artículos inactivos
siguen hidden/inert y sus enlaces tabIndex=-1. Esto no garantiza que Google indexe todo ni sustituye
la inspección de URL en Search Console.

Referencias oficiales consultadas:
- https://react.dev/reference/react-dom/static/prerender
- https://react.dev/reference/react-dom/client/hydrateRoot
- https://vite.dev/guide/ssr
- https://sharp.pixelplumbing.com/install/
- https://getbootstrap.com/docs/5.3/customize/optimize/
- https://icons.getbootstrap.com/

## Validación

- Build cliente + SSR + prerender + comprobaciones estáticas correctos; TypeScript y lint correctos.
- git diff --check correcto (avisos de normalización LF/CRLF, no errores).
- HTML leído directamente sin ejecutar JavaScript: title, description, canonical, JSON-LD,
  un H1, seis secciones, tres proyectos completos, ocho FAQ y formulario.
- Recursos locales del HTML/srcset/CSS existen. Robots, sitemap, favicon y OG retornan200 en preview.
- Desktop1440×1000, tablet768×1024 y móvil390×844: un proyecto visible, tres montados, sin overflow nuevo.
- Navbar sticky/scrolled, anclas y sección activa; menú móvil abre/cierra al seleccionar.
- Carrusel siguiente/anterior/indicadores y flechas de teclado; foco vuelve al viewport al ocultar la tarjeta enfocada.
- FAQ abre/cierra; icono SVG se carga. Formulario cambia WhatsApp/Correo/Llamada y limpia errores del campo oculto.
- Se probó envío vacío para validar errores, sin enviar un correo real ni contactar por WhatsApp.
- WhatsApp SVG, href y Footer conservados. Sin errores de hidratación en consola.
- No se dispone de una comparación Lighthouse controlada fiable; no se reportan Performance/LCP/CLS/TBT/INP inventados.

## Riesgos y pendientes

1. Desplegar y verificar HTML y recursos en el dominio público; revisar GSC y caché de previews sociales.
2. Medir Lighthouse y datos de campo después del deploy. Peso menor no garantiza puntuación ni CWV específicos.
3. `npm audit` reporta10 vulnerabilidades (8 high,2 low) en dependencias previas de desarrollo:
   @babel/core,brace-expansion,esbuild,flatted,js-yaml,minimatch,nanoid,picomatch,postcss,vite.
   Sharp no aparece afectado. No se ejecutó audit fix ni se actualizaron librerías ajenas a la fase.
   Conviene una actualización separada; no exponer el servidor de desarrollo públicamente.
4. Las imágenes originales siguen en el repositorio pero no se descargan en la landing activa.
5. El desajuste de posición del CTA móvil del portfolio ya detectado en la fase anterior no se rediseñó aquí.

## Archivos

Rutas relativas a `D:/Proyectos React/acgdevstudio/`.

Modificados: index.html; package.json; package-lock.json; vite.config.ts; src/main.tsx;
src/i18n/i18n.ts; src/styles/global.css; src/components/BrowserFrame/BrowserFrame.tsx;
src/components/Hero/Hero.tsx; src/components/Navbar/Navbar.tsx;
src/components/CaseStudies/CaseStudies.tsx; src/data/case-studies.data.ts;
src/components/FAQ/FAQ.css; src/components/Contact/Contact.css; src/components/Contact/Contact.tsx;
src/components/Footer/Footer.css; src/components/Footer/Footer.tsx.

Creados: scripts/optimize-images.mjs; scripts/prerender.mjs; scripts/verify-build.mjs;
src/entry-server.tsx; src/build-env.d.ts; src/data/project-images.ts; src/styles/icons.css;
src/images/optimized/* (16 WebP); public/og-acgdevstudio.jpg;
docs/image-optimization.json; docs/technical-optimization-phase-2.md.
