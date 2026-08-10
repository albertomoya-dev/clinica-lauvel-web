# Clínica LAUVEL — Web corporativa

Web corporativa de **Clínica LAUVEL**, centro multidisciplinar de **Logopedia, Psicología, Pedagogía y Fisioterapia** (bebés, niños, adolescentes y adultos).

## Fuente de verdad (OBLIGATORIO leer antes de tocar contenido o diseño)

- `docs/specs/especificaciones-finales-lauvel.md` — contenidos, arquitectura y adaptaciones propias de LAUVEL. **Manda sobre todo.**
- `docs/specs/especificaciones-referencia-monro.md` — sistema de diseño, componentes y estructura de referencia (la web que se replica en estilo).
- Capturas de la web de referencia: `C:\Users\Timonlia\Downloads\especificaciones_web_referencia_clinamonro\screenshots\`

## Reglas de oro

1. **Todo texto visible sale del spec LAUVEL** o se deriva directamente de él. Prohibido inventar copy, tratamientos o claims.
2. **Datos pendientes del cliente** (§15 del spec LAUVEL): viven centralizados en `src/data/site.ts` con valores `PENDIENTE_*`. Nunca rellenar con datos ficticios que parezcan reales (teléfonos, direcciones, nombres de equipo, reseñas).
3. **Diseño = sistema del spec de referencia §2** (colores, tipografías, botones, componentes). No introducir colores o estilos ajenos al sistema.
4. Idioma de toda la UI y el contenido: **español (es-ES)**, `lang="es"`.
5. Fuentes e iconos **autohospedados** (nada de Google Fonts CDN — RGPD).

## Stack

- **Astro 5** (SSG estático) + **TypeScript strict**
- **Tailwind CSS v4** vía `@tailwindcss/vite`; tokens de diseño en `src/styles/global.css` (`@theme`)
- Fuentes: `@fontsource/dm-sans` (cuerpo/eyebrow/botones) + `@fontsource/baloo-2` (display/titulares; sustituta libre de Aloevera Display)
- Carrusel testimonios: **JS vanilla con scroll-snap** (sin dependencias)
- Formulario: **Web3Forms** (`PUBLIC_WEB3FORMS_KEY` en `.env`; pendiente del cliente)
- SEO: `@astrojs/sitemap`, metas/OG en `src/components/seo/`, JSON-LD `MedicalClinic`
- Sin framework JS de islas: interactividad con **JS vanilla en `<script>`** de componentes Astro

## Comandos

```bash
npm run dev       # desarrollo
npm run build     # build estático en dist/
npm run preview   # preview del build
npm run check     # astro check (tipos)
```

## Design tokens (spec referencia §2)

| Token | Valor | Uso |
|---|---|---|
| `accent` | `#49523B` | botones, enlaces, iconos, títulos de tarjetas de tratamiento, subrayado activo |
| `accent-hover` | `#3A442E` | hover de botones/enlaces con fondo de acento |
| `gold` | `#B59A55` | detalles decorativos y hover en superficies oscuras (eyebrows usan `accent`) |
| `ink` | `#2E3626` | titulares, footer, desplegables |
| `body` | `#5D5D5C` | texto de cuerpo |
| `bg` | `#FFFFFF` | fondo base |
| `soft` | `#F8F5F0` | tarjetas de tratamiento, secciones alternas |
| `softer` | `#FBF9F5` | variante de fondo |
| `card-number` | `#E5DFC9` | números decorativos grandes de tarjetas |
| overlay heroes | `rgba(0,0,0,.35–.45)` | legibilidad de H1 blanco |

- H1 hero ~64–72px (móvil 36–40), H2 ~42–48px (móvil 28–32), títulos tarjeta 20–24px, eyebrow ~14px mayúsculas tracking amplio, cuerpo 16–17px / line-height 1.6
- Botón primario: bg accent, texto blanco, padding ~14×30, radius 4–6px, peso 500
- Botón circular flecha: ~56px, borde fino accent, flecha `→` (en tarjetas de tratamiento abre acordeón "Qué tratamos")
- Contenedor máx ~1140–1360px; imágenes con radius 10–16px
- Responsive: grids 3→2 (tablet) →1 (móvil); menú hamburguesa <1024px
- Animaciones: fade-in-up/left/right al entrar en viewport (IntersectionObserver), acordeones slide suave, carrusel deslizante

## Datos pendientes del cliente (spec LAUVEL §15)

Ciudad/zona, dirección, teléfono, email, WhatsApp, redes sociales, equipo (nombres/roles/bios — fotos ya recibidas), logo, gratuidad de primera consulta (CTA), titular RGPD, selector de idioma, logos de financiación, reseñas de Google, aseguradoras. → **Todos en `src/data/site.ts`**.

## Imágenes

Recibidas del cliente (provisionales, generadas con IA) en `src/assets/images/` — importadas con `scripts/import-images.mjs`, que recorta el 6% inferior para eliminar la marca de agua. Se sirven vía `astro:assets` (`<Image>`, WebP responsive). Si llegan fotos reales, se sustituyen los archivos manteniendo los nombres. `Placeholder.astro` solo queda para el mapa de Google (dirección pendiente).

## Checklist SEO por página (spec LAUVEL §13)

- `title` del spec (sustituir `[Ciudad]` cuando se confirme) + meta description + canonical
- Un solo H1 por página; jerarquía H2/H3 correcta
- `<strong>` en keywords dentro de los textos (SEO on-page, como en la referencia)
- NAP consistente (nombre/dirección/teléfono desde `site.ts`)
- JSON-LD en layout principal; sitemap y robots.txt generados
- Slugs en español; cuando se confirme ciudad: `/logopedia-en-[ciudad]/` etc. con redirects

## Convenciones de código

- Componentes `.astro` en PascalCase bajo `src/components/{ui,layout,sections,widgets,seo}/`
- Contenido estructurado en `src/data/*.ts` tipado; las páginas no hardcodean listas (servicios, tratamientos, equipo, testimonios, pasos)
- Imágenes con `astro:assets` cuando lleguen las reales; alt descriptivo en español
- Accesibilidad: labels asociados en formularios, foco visible, `aria-expanded`/`aria-controls` en acordeones y menús, contraste AA
- Sin comentarios en el código salvo que aporten contexto no obvio
- Español para contenido/UI; inglés para nombres de variables/funciones
