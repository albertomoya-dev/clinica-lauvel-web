# Cambios necesarios según las Skills del proyecto

> Revisión de todas las skills disponibles aplicadas al estado actual del proyecto.  
> **Actualizado:** los ítems marcados con ✅ ya se han implementado; el resto sigue pendiente o depende del cliente.

---

## 1. Skill: accessibility (WCAG 2.2)

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad | Estado |
|---|---|---|---|---|
| 1.1 | ~~La página de accesibilidad declara un **widget de accesibilidad** (tamaño de texto, alto contraste, escala de grises) que **no existe** en el código. Es una declaración falsa.~~ | `src/pages/accesibilidad.astro` | ~~Crítica~~ | ✅ Resuelto: la página actual ya no menciona el widget. |
| 1.2 | ~~El banner de cookies tiene `role="dialog"` pero **no trae el foco** al abrirse, ni **restaura el foco** al cerrarse ni cierra con `Escape`.~~ | `src/components/widgets/CookieBanner.astro` | ~~Alta~~ | ✅ Resuelto: focus inicial, Escape y restauración de foco implementados. |
| 1.3 | ~~El menú móvil abre un panel fullscreen pero **no mueve el foco** al panel ni al cerrar. Tampoco hay foco atrapado.~~ | `src/components/layout/Header.astro` | ~~Alta~~ | ✅ Resuelto: focus trap, foco inicial y Escape implementados. |
| 1.4 | ~~El carrusel de testimonios **triplica las tarjetas** en el DOM (3 bloques). Aunque los bloques 0 y 2 tienen `aria-hidden="true"`, la duplicación de contenido puede generar ruido en lectores de pantalla.~~ | `src/components/sections/Testimonials.astro` | ~~Media~~ | ✅ Resuelto: carrusel simplificado a una sola lista de tarjetas. |
| 1.5 | El acordeón del footer usa `<details>` nativo (bien), pero la lista desplegable aparece **encima** del botón (`bottom-full`) sin anuncio de expansión. | `src/components/layout/Footer.astro` | Media | Pendiente |

### Cambios necesarios (pendientes)

1. Revisar el acordeón del footer para asegurar que el despliegue hacia arriba es accesible y se anuncia correctamente.
2. Añadir `@media (prefers-reduced-motion: reduce)` más exhaustivo si hay animaciones de scroll u otras transiciones no cubiertas.

---

## 2. Skill: astro

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad |
|---|---|---|---|
| 2.1 | `@astrojs/vercel` está instalado pero **no configurado** como adapter. El build es estático (`output` por defecto), por lo que la dependencia es innecesaria o debe usarse/configurarse. | `package.json`, `astro.config.mjs` | Media |
| 2.2 | Los scripts de utilidades (`scripts/*.mjs`) **no están registrados** en `package.json` ni documentados. | `package.json`, `scripts/` | Media |
| 2.3 | `sharp` se usa en scripts pero **no está declarado** en `dependencies`/`devDependencies`. | `package.json`, `scripts/*.mjs` | Media |
| 2.4 | ~~El `site` en `astro.config.mjs` usa un fallback (`process.env.PUBLIC_SITE_URL || 'https://clinica-lauvel.vercel.app'`). Cuando se confirme dominio propio debe actualizarse.~~ | `astro.config.mjs` | ~~Baja~~ | ✅ Resuelto: el fallback ahora es `https://www.clinicalauvel.es`. |

### Cambios necesarios

1. Decidir si se usa `@astrojs/vercel`:
   - Si el despliegue seguirá siendo estático en Vercel, eliminar `@astrojs/vercel`.
   - Si se quiere SSR/edge, configurar `adapter: vercel()` en `astro.config.mjs`.
2. Añadir scripts útiles a `package.json`:
   - `"import-images": "node scripts/import-images.mjs"`
   - `"generate-og": "node scripts/generate-og.mjs"`
   - Registrar `sharp` como `devDependency`.
3. Documentar brevemente el uso de los scripts en `AGENTS.md` o README.
4. ~~Actualizar `site` cuando se confirme el dominio definitivo.~~ ✅ Resuelto: dominio configurado a `https://www.clinicalauvel.es`.

---

## 3. Skill: code-review-and-quality

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad |
|---|---|---|---|
| 3.1 | `SectionHeading.astro` declara `interface Props` pero Astro la infiere automáticamente, generando un **hint** en `astro check`. | `src/components/ui/SectionHeading.astro` | Baja |
| 3.2 | `Header.astro` contiene **CSS muerto** (selectores `:global(.header-logo span:last-child)` y `:global(.header-logo span:first-child)`) que parecen referirse a un logo anterior basado en texto. | `src/components/layout/Header.astro` | Baja |
| 3.3 | Uso de `set:html` en párrafos de introducción de páginas de servicio. El contenido es controlado internamente, pero aumenta superficie de riesgo. | `src/pages/*.astro`, `src/components/sections/NeaeCta.astro` | Media |
| 3.4 | No hay **tests** de ningún tipo. | Todo el proyecto | Alta |
| 3.5 | `Header.astro` usa `(window as any).__lauvelHeaderScrollBound` para evitar duplicar listeners. Es funcional pero frágil con View Transitions. | `src/components/layout/Header.astro` | Media |
| 3.6 | Varios componentes superan las 200 líneas (`Header.astro`, `CookieBanner.astro`, `Footer.astro`, etc.). | Varios | Media |

### Cambios necesarios

1. Eliminar `interface Props` redundante en `SectionHeading.astro` (o utilizarla explícitamente).
2. Limpiar CSS muerto en `Header.astro`.
3. Reemplazar `set:html` por renderizado normal de Astro siempre que sea posible; si se conserva, documentar por qué es seguro.
4. Añadir tests:
   - Unitarios para utilidades (`src/utils/url.ts`, `src/data/site.ts`).
   - Tests de componentes Astro si se añade Vitest + `@astrojs/test`.
   - Considerar Playwright para E2E críticos (formulario de contacto, navegación).
5. ~~Refactorizar `Header.astro` para un manejo más robusto de event listeners con Astro View Transitions (`astro:before-swap`, `astro:page-load`).~~ ✅ Parcialmente resuelto: se eliminó el uso de `window as any` y se añadió tipado global; el listener scroll sigue usando una flag global.
6. Considerar dividir componentes muy grandes en subcomponentes.

---

## 4. Skill: customize-opencode

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad |
|---|---|---|---|
| 4.1 | `opencode.json` solo carga `AGENTS.md` y skills locales. No hay agentes, comandos ni referencias adicionales configurados. | `opencode.json` | Baja |

### Cambios necesarios

1. Considerar si se necesitan:
   - Comandos personalizados (por ejemplo, `/deploy`, `/check-seo`, `/build`).
   - Agentes especializados (por ejemplo, un revisor de SEO o accesibilidad).
   - Referencias a documentación externa (como las specs o web de referencia).
2. Mantener `$schema` actualizado.
3. Asegurar que los cambios en `opencode.json` requieran reinicio de opencode.

---

## 5. Skill: frontend-design

### Observación

Esta skill está pensada para crear interfaces desde cero con una estética distintiva. El proyecto LAUVEL ya tiene:

- Especificaciones de diseño propias (`docs/specs/especificaciones-referencia-monro.md`).
- Sistema de diseño con tokens propios (`src/styles/global.css`).
- Decisiones de marca ya tomadas.

### Cambios necesarios

1. **No aplicar** recomendaciones genéricas de "diseño audaz" si contradicen el spec de referencia de Monro o el brand LAUVEL.
2. Usar esta skill solo para nuevas páginas o secciones donde no haya especificación previa.
3. Asegurar que cualquier nuevo componente siga los tokens de color, tipografía y espaciado existentes.

---

## 6. Skill: frontend-ui-engineering

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad |
|---|---|---|---|
| 6.1 | No hay **estados de carga, error ni vacío** explícitos. | Varios | Media |
| 6.2 | No hay tests automatizados de UI. | Todo | Alta |
| 6.3 | Algunos componentes podrían beneficiarse de una separación más clara entre presentación y datos. | `src/components/sections/` | Media |
| 6.4 | Uso de valores arbitrarios en Tailwind (p. ej. `text-[1.05rem]`, `max-w-3xl` está bien, pero revisar `text-[0.65rem]`). | Varios | Baja |

### Cambios necesarios

1. Añadir tests de componentes/páginas críticas.
2. Revisar valores arbitrarios en clases Tailwind y sustituir por tokens del sistema cuando sea posible.
3. Mantener la separación presentación/datos en nuevas secciones.
4. Verificar que todos los componentes manejen correctamente los casos de datos pendientes (`PENDIENTE_*`).

---

## 7. Skill: nodejs-backend-patterns / nodejs-best-practices

### Observación

El proyecto es un **sitio estático generado con Astro (SSG)**. No hay backend propio salvo:

- Formulario que envía a Web3Forms (tercero).
- Scripts de Node.js en `scripts/` para procesar imágenes y generar OG.

### Cambios necesarios

1. Para los scripts de `scripts/`:
   - Añadir manejo de errores robusto (try/catch, logging).
   - Validar entradas (rutas de archivos, formatos).
   - Evitar rutas absolutas de Windows hardcodeadas.
   - Documentar dependencias (`sharp`, etc.).
2. No añadir Express/Fastify/NestJS salvo que el proyecto evolucione a SSR con endpoints.

---

## 8. Skill: performance-optimization

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad |
|---|---|---|---|
| 8.1 | Se importan **7 archivos CSS de `@fontsource`**, posiblemente incluyendo subconjuntos no latinos (devanagari, vietnamita). | `src/layouts/BaseLayout.astro` | Media | Pendiente |
| 8.2 | Todas las imágenes hero tienen `fetchpriority="high"`; en cada página solo el LCP debería tenerlo. | Páginas de servicios, home | Media | Pendiente |
| 8.3 | `ContactSection.astro` usa una imagen de fondo vía `style="background-image: url(...)"` en lugar de `astro:assets` con `srcset`/formatos optimizados. | `src/components/sections/ContactSection.astro` | Media | Pendiente |
| 8.4 | ~~El carrusel de testimonios **triplica el DOM** (9 tarjetas × 3 = 27 artículos).~~ | `src/components/sections/Testimonials.astro` | ~~Media~~ | ✅ Resuelto: carrusel con lista única. |
| 8.5 | No hay **presupuestos de rendimiento** ni medición de Core Web Vitals en CI. | Todo | Baja | Pendiente |

### Cambios necesarios

1. Reducir importaciones de fuentes solo a los pesos/subconjuntos necesarios (latin/latin-ext).
2. Aplicar `fetchpriority="high"` **solo** a la imagen LCP de cada página.
3. Optimizar la imagen de fondo del formulario:
   - Usar `<Image>` de `astro:assets` o generar múltiples tamaños/formatos.
   - Considerar `loading="lazy"` si está below-the-fold.
4. Refactorizar el carrusel para no triplicar nodos, o usar una implementación más ligera.
5. Medir LCP, CLS e INP con Lighthouse/PageSpeed Insights y establecer presupuestos.

---

## 9. Skill: seo

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad |
|---|---|---|---|
| 9.1 | ~~`public/robots.txt` apunta a `https://www.clinicalauvel.es/sitemap-index.xml`, mientras que `astro.config.mjs` usa `clinica-lauvel.vercel.app` o `PUBLIC_SITE_URL`.~~ | `public/robots.txt` | ~~Alta~~ | ✅ Resuelto: el fallback de `astro.config.mjs` es `https://www.clinicalauvel.es`, coherente con `robots.txt`. |
| 9.2 | ~~No hay `<meta property="og:image:alt">` ni `twitter:site`.~~ | `src/components/seo/Seo.astro` | ~~Media~~ | ✅ Resuelto: añadidos `og:image:alt`, `twitter:image:alt` y `twitter:site` (condicional a dato no pendiente). |
| 9.3 | Las páginas legales no tienen `noindex`. Puede ser intencional, pero conviene revisar. | `src/pages/aviso-legal.astro`, etc. | Baja | Pendiente |
| 9.4 | ~~No hay datos estructurados de `BreadcrumbList` ni `Organization` con logo.~~ | `src/components/seo/JsonLd.astro` | ~~Media~~ | ✅ Resuelto: `Organization` incluye `logo` y `BreadcrumbList` se renderiza en páginas interiores. |
| 9.5 | El sitemap se genera con el dominio configurado en `astro.config.mjs`; si el fallback es vercel, el sitemap de producción final puede quedar desactualizado. | `astro.config.mjs` | Media | Pendiente |

### Cambios necesarios

1. Corregir `robots.txt` para que apunte al dominio real configurado (usar variable o mantener coherencia).
2. Añadir `og:image:alt` y `twitter:site` en `Seo.astro`.
3. Decidir si las páginas legales deben llevar `noindex` y aplicarlo si procede.
4. Enriquecer `JsonLd.astro` con:
   - `Organization` (logo, redes sociales).
   - `BreadcrumbList` para páginas interiores.
5. Configurar `PUBLIC_SITE_URL` correctamente en producción.
6. Validar structured data con Google Rich Results Test.

---

## 10. Skill: spec-driven-development

### Observación

El proyecto ya cuenta con especificaciones:

- `docs/specs/especificaciones-finales-lauvel.md`
- `docs/specs/especificaciones-referencia-monro.md`
- Capturas de referencia.

### Cambios necesarios

1. **Mantener las specs vivas**: cualquier cambio de alcance debe reflejarse en los documentos.
2. Antes de nuevas funcionalidades significativas (por ejemplo, blog, área privada, selector de idioma), escribir una mini-spec con:
   - Objetivo.
   - Alcance.
   - Criterios de aceptación.
   - Archivos afectados.
3. No es necesario crear nueva spec para los ajustes listados en este documento, pero sí seguir el flujo de tareas antes de implementar cambios grandes.

---

## 11. Skill: tailwind-css-patterns

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad |
|---|---|---|---|
| 11.1 | Uso ocasional de valores arbitrarios (`text-[0.65rem]`, `text-[1.05rem]`, `tracking-[0.12em]`). | Varios | Baja |
| 11.2 | Algunos patrones de acordeón se repiten en varios componentes (`TreatmentCard`, `ContactForm`, `CookieBanner`). | Varios | Baja |
| 11.3 | `@theme` está bien configurado, pero no hay utilities para `line-clamp`, `aspect-ratio`, etc. | `src/styles/global.css` | Baja |

### Cambios necesarios

1. Revisar valores arbitrarios y migrar a tokens cuando tenga sentido.
2. Extraer la utilidad de acordeón a una clase reutilizable si se repite más.
3. Añadir a `@theme` cualquier token adicional que se necesite (por ejemplo, espaciados específicos del spec de referencia).

---

## 12. Skill: typescript-advanced-types

### Problemas detectados

| # | Problema | Archivo(s) afectado(s) | Severidad |
|---|---|---|---|
| 12.1 | `interface Props` en `SectionHeading.astro` genera hint de no uso. | `src/components/ui/SectionHeading.astro` | Baja | Pendiente |
| 12.2 | ~~Uso de `(window as any)` en `Header.astro` y otros scripts.~~ | `src/components/layout/Header.astro` | ~~Media~~ | ✅ Resuelto en Header: se declaró tipo global para `Window`. |
| 12.3 | Posibles mejoras tipadas en `navigation.ts`, `site.ts` (por ejemplo, tipos más estrictos para URLs). | `src/data/*.ts` | Baja | Pendiente |

### Cambios necesarios

1. Eliminar o usar `interface Props` en `SectionHeading.astro`.
2. Declarar tipos globales para `window` en lugar de usar `as any`:
   - `declare global { interface Window { __lauvelHeaderScrollBound?: boolean; } }`
3. Tipar de forma más estricta los datos de navegación y site si el proyecto crece.

---

## 13. Skill: web-design-guidelines

### Observación

Esta skill requiere fetch de `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` y aplicar las reglas a archivos específicos.

### Cambios necesarios

1. Ejecutar un review guiado por las Web Interface Guidelines de Vercel sobre los componentes principales:
   - `Header.astro`
   - `Footer.astro`
   - `ContactForm.astro`
   - `CookieBanner.astro`
   - Páginas legales
2. Aplicar las reglas que no entren en conflicto con el spec LAUVEL ni con el spec de referencia Monro.
3. Documentar las excepciones (por ejemplo, el header transparente sobre hero es intencional por diseño).

---

## Resumen de prioridades

### Crítico (hacer antes del lanzamiento)

1. ~~Corregir `robots.txt` (domino incorrecto).~~ ✅ Resuelto.
2. ~~Eliminar o implementar el widget de accesibilidad declarado.~~ ✅ Resuelto.
3. Revisar datos pendientes del cliente (`site.ts`, `env`) y evitar publicar placeholders: teléfono, email, WhatsApp, Instagram, titular RGPD, razón social, CIF.

### Alto

4. Añadir tests (al menos unitarios para utilidades y datos).
5. Revisar permisos/consentimiento de cookies: actualmente no carga ningún script de analítica.
6. Revisar acordeón del footer (despliegue hacia arriba sin anuncio).

### Medio

7. Optimizar fuentes, imágenes de fondo y `fetchpriority`.
8. ~~Enriquecer datos estructurados JSON-LD.~~ ✅ Resuelto: `Organization` con logo, `BreadcrumbList` y metas OG/Twitter completadas.
9. Limpiar CSS muerto y dependencias no usadas (`@astrojs/vercel`).
10. Revisar `set:html` y `interface Props` en `SectionHeading.astro`.

### Bajo

11. Mejorar tipado TypeScript y tipos de datos de navegación/site.
12. Registrar scripts de utilidades en `package.json`.
13. Añadir `og:image:alt`, `twitter:site`, etc. — ✅ Resuelto.
14. Revisar páginas legales (`noindex`).
15. Revisar dominio del sitemap en producción (`PUBLIC_SITE_URL`).


---

## Nota final

Este documento es un **análisis previo a la acción**. Antes de implementar cualquier cambio se recomienda:

1. Validar con el cliente las decisiones que afecten a contenido o brand (widget de accesibilidad, páginas legales `noindex`, dominio final).
2. Medir el rendimiento actual para justificar optimizaciones.
3. Aplicar los cambios en pequeños lotes verificables (`npm run build && npm run check`).
