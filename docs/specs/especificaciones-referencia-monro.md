# Especificaciones de diseño y estructura — Web tipo "clinicamonro.com"

> Documento de especificación exhaustivo para construir una web **prácticamente idéntica en estructura, secciones y estilo** a `https://clinicamonro.com/`, la web de una clínica de logopedia y psicología en Granada.
>
> **Objetivo**: servir como blueprint único y autosuficiente. Quien lo lea debe poder construir la web sin consultar la original.

---

## Índice

1. [Visión general del proyecto](#1-visión-general-del-proyecto)
2. [Identidad visual (sistema de diseño)](#2-identidad-visual-sistema-de-diseño)
3. [Mapa del sitio (arquitectura de páginas)](#3-mapa-del-sitio-arquitectura-de-páginas)
4. [Elementos globales compartidos](#4-elementos-globales-compartidos)
   - 4.1. Cabecera (header)
   - 4.2. Pie de página (footer)
   - 4.3. Sección compartida "Estamos aquí para ayudarte" (formulario)
   - 4.4. Elementos flotantes (WhatsApp, accesibilidad, cookies)
5. [Página: Home (`/`)](#5-página-home-)
6. [Página: Quiénes somos (`/quienes-somos/`)](#6-página-quiénes-somos-quienes-somos)
7. [Página: Logopedia infantil (`/logopedia-infantil-en-granada/`)](#7-página-logopedia-infantil-logopedia-infantil-en-granada)
8. [Página: Logopedia para adultos (`/logopedia-para-adultos-en-granada/`)](#8-página-logopedia-para-adultos-logopedia-para-adultos-en-granada)
9. [Página: Psicología (`/psicologia-infantil-y-de-adultos-en-granada/`)](#9-página-psicología-psicologia-infantil-y-de-adultos-en-granada)
10. [Página: Contacto (`/contacto/`)](#10-página-contacto-contacto)
11. [Páginas legales](#11-páginas-legales)
12. [Componentes reutilizables (patrones de diseño)](#12-componentes-reutilizables-patrones-de-diseño)
13. [Comportamiento responsive y animaciones](#13-comportamiento-responsive-y-animaciones)
14. [SEO y metadatos](#14-seo-y-metadatos)
15. [Stack técnico de referencia (web original)](#15-stack-técnico-de-referencia-web-original)
16. [Inventario de contenidos (textos íntegros)](#16-inventario-de-contenidos-textos-íntegros)

---

## 1. Visión general del proyecto

| Aspecto | Detalle |
|---|---|
| **Tipo de sitio** | Web corporativa de clínica sanitaria (logopedia y psicología) |
| **Nº de páginas principales** | 5 (Home, Quiénes somos, 3 servicios, Contacto) + 4 legales |
| **Idioma** | Español (con selector de idioma English/Español vía traducción automática) |
| **Tono visual** | Sanitario-cercano: blanco predominante, rosa fucsia como acento, tipografía redondeada y moderna, fotografía real de la clínica |
| **Objetivo de negocio** | Captación de pacientes: CTA recurrente "Primera consulta gratuita", formulario de contacto y botón de WhatsApp |
| **Enfoque SEO** | SEO local ("logopeda en Granada", "psicólogo en Granada", "La Chana"), títulos orientados a búsqueda |

La web es de **una sola columna central** con contenedor de ancho máximo (~1140–1360 px), fondo blanco, secciones alternadas con fondo blanco y rosa muy pálido, y fotografía de gran formato (heroes a ancho completo con overlay oscuro).

---

## 2. Identidad visual (sistema de diseño)

### 2.1. Paleta de colores

| Rol | Color | Hex | Uso |
|---|---|---|---|
| **Acento principal** | Rosa fucsia / magenta | `#D7006B` | Botones, enlaces, títulos de tarjetas, eyebrow labels, subrayado activo de menú, iconos, botones flotantes, acentos del logo |
| **Primario / fondos oscuros** | Negro suave | `#161615` | Footer, menú desplegable, texto de titulares grandes |
| **Texto de titulares** | Negro suave | `#161615` | H1 (en blanco sobre hero), H2, H3 |
| **Texto de cuerpo** | Gris medio | `#5D5D5C` | Párrafos, descripciones |
| **Fondo base** | Blanco | `#FFFFFF` | Fondo general, tarjetas de formulario |
| **Fondo alterno 1** | Rosa pálido | `#FDF2F7` | Tarjetas de servicios/tratamientos, secciones alternas |
| **Fondo alterno 2** | Rosa casi blanco | `#FEFAFC` | Variante de fondo en tarjetas |
| **Números decorativos** | Rosa muy claro | `#FDF2F7` (tono del 01–13 en tarjetas de tratamiento) | Números grandes de fondo en tarjetas |
| **Overlay de heroes** | Negro translúcido | `rgba(0,0,0,~0.35–0.45)` | Veladura sobre imágenes de cabecera para legibilidad del texto blanco |

### 2.2. Tipografía

| Rol | Familia | Peso | Observaciones |
|---|---|---|---|
| **Titulares (H1, H2, H3, títulos de tarjeta)** | *Aloevera Display* (fuente display personalizada) | 500 | Redondeada, geométrica, amigable. Sustituta libre recomendada: **Quicksand Bold**, **Comfortaa** o **Baloo 2** |
| **Cuerpo de texto** | *DM Sans* | 400 | Texto general, párrafos |
| **Etiquetas / eyebrow labels** | *DM Sans* | 500, mayúsculas | Pequeñas etiquetas sobre los H2, en rosa `#D7006B`, con letter-spacing amplio |
| **Botones** | *DM Sans* | 500 | Texto blanco sobre rosa |

**Jerarquía de tamaños (referencia escritorio):**

- H1 (hero): ~64–72 px, blanco, peso 500, alineado a la izquierda
- H2 (secciones): ~42–48 px, `#161615`
- Títulos de tarjeta: ~20–24 px (negro en tarjetas de servicio, rosa `#D7006B` en tarjetas de tratamiento)
- Eyebrow label: ~14 px, mayúsculas, rosa, letter-spacing ~1 px
- Cuerpo: 16–17 px, `#5D5D5C`, interlineado ~1.6

### 2.3. Estilo de botones

1. **Botón primario**: fondo `#D7006B`, texto blanco, padding ~14×30 px, radio de borde pequeño (~4–6 px), texto en peso 500. Ejemplos: "Primera consulta gratuita", "Sobre nosotros", "Conócenos", "Contacta", "Enviar".
2. **Botón circular con flecha**: círculo de ~56 px con borde fino rosa (`#D7006B`), interior transparente/blanco, flecha `→` rosa centrada. Se usa como enlace en tarjetas de servicio y como desplegable en tarjetas de tratamiento. Al interactuar (tarjetas de tratamiento), despliega un acordeón.

### 2.4. Iconografía

- **Iconos lineales** en rosa `#D7006B` (trazo fino, estilo outline): niños, adultos, puzle/pieza para psicología. Aparecen sobre cada tarjeta de servicio.
- **Iconos sociales**: Instagram (outline, blanco en footer, rosa en contacto).
- **Flecha** `→` dentro de botones circulares.
- Botones flotantes con iconos: WhatsApp y accesibilidad (persona).

### 2.5. Imágenes

- Fotografía real de la clínica: equipo con uniforme rosa fucsia, niños en sesión con tarjetas didácticas, recepción, sala con iMac, detalles de material (dados, tarjetas con animales, reloj de pared infantil).
- **Heroes**: imagen a ancho completo, altura ~60–80 vh, con overlay oscuro y H1 blanco a la izquierda.
- Imágenes de sección con **esquinas ligeramente redondeadas** (radio ~10–16 px).

### 2.6. Logotipo

- Logo circular con iniciales **"MR"** en rosa y blanco dentro de un aro, y debajo el texto "Clínica MONRO" (MONRO en rosa fucsia con tracking amplio, "Clínica" en blanco o gris fino).
- En la cabecera aparece en versión clara (blanco/rosa sobre hero oscuro).
- En el footer aparece centrado, en grande, versión blanca/rosa sobre fondo negro.

---

## 3. Mapa del sitio (arquitectura de páginas)

```
/ (Home)
├── /quienes-somos/
├── Servicios (elemento de menú no clicable → desplegable)
│   ├── /logopedia-infantil-en-granada/
│   ├── /logopedia-para-adultos-en-granada/
│   └── /psicologia-infantil-y-de-adultos-en-granada/
├── /contacto/
└── Legales (solo enlazadas desde el footer)
    ├── /aviso-legal/
    ├── /politica-de-privacidad/
    ├── /politica-de-cookies/
    └── /accesibilidad/
```

**Menú principal (cabecera)**: `Home` · `Quiénes somos` · **[LOGO centrado]** · `Servicios ▾` · `Contacto`

**Desplegable de "Servicios"** (fondo oscuro `#161615`, texto blanco):
1. Logopedia infantil en Granada → `/logopedia-infantil-en-granada/`
2. Logopedia para adultos en Granada → `/logopedia-para-adultos-en-granada/`
3. Psicología Infantil y de Adultos en Granada → `/psicologia-infantil-y-de-adultos-en-granada/`

---

## 4. Elementos globales compartidos

### 4.1. Cabecera (header)

- **Disposición**: barra superior de ancho completo, posicionada sobre el hero (fondo transparente), con los elementos en una sola línea:
  - Izquierda: `Home`, `Quiénes somos`
  - Centro: **logotipo** (más alto que el texto del menú, ~90–110 px)
  - Derecha: `Servicios ▾` (con caret), `Contacto`
- **Estilo del menú**: texto blanco (sobre el hero oscuro), ~15–16 px. El **item activo** lleva un **subrayado rosa** `#D7006B` (línea de ~2–3 px bajo el texto).
- **Desplegable "Servicios"**: caja con fondo `#161615`, esquinas ligeramente redondeadas, tres enlaces en blanco apilados verticalmente con padding generoso; aparece al hover/clic.
- **Comportamiento al scroll**: cabecera fija (sticky). En la web original, al hacer scroll el header permanece visible en la parte superior.
- **Móvil**: menú hamburguesa; el desplegable de servicios se convierte en submenú expandible dentro del panel.

### 4.2. Pie de página (footer)

Fondo **negro suave `#161615`**, contenido centrado en una sola columna, de arriba abajo:

1. **Logotipo grande** centrado (versión clara: aro blanco, MR rosa, "Clínica MONRO" blanco/rosa).
2. **Selector de idioma**: desplegable nativo (fondo blanco, texto oscuro) con opciones `Español` / `English` (en la original, GTranslate).
3. **Menú secundario** en línea: `Home` · `Quiénes somos` · `Servicios ▾` · `Contacto`, en blanco, con el item activo subrayado en rosa.
4. **Icono Instagram** (outline blanco) → `https://www.instagram.com/clinicamonro/`.
5. **Bloque de logos de financiación europea** (Kit Digital): leyenda pequeña "PROGRAMA KIT DIGITAL COFINANCIADO POR LOS FONDOS NEXT GENERATION (EU) DEL MECANISMO DE RECUPERACIÓN Y RESILIENCIA" y una fila de logos (Gobierno de España, red.es, Kit Digital, Plan de Recuperación, bandera UE "Financiado por la Unión Europea NextGenerationEU").
6. **Línea legal**: `Clínica Monro©. Aviso legal · Política de privacidad · Política de cookies · Accesibilidad | Diseño: Wit` — los cuatro textos legales son enlaces a sus páginas; "Wit" enlaza a la agencia (witcreativo.es). Texto blanco/gris claro, tamaño ~13–14 px.

### 4.3. Sección compartida "Estamos aquí para ayudarte" (formulario de contacto)

**Aparece al final de TODAS las páginas principales** (Home, Quiénes somos y las tres de servicios), justo antes del footer. Es el bloque de conversión principal.

**Estructura**: sección a ancho completo con **foto de fondo con overlay oscuro** (imagen de la logopeda con uniforme rosa). Dentro, dos columnas:

- **Columna izquierda** (texto blanco):
  - Eyebrow rosa en mayúsculas: `¿NECESITAS MÁS INFORMACIÓN?`
  - H2 grande blanco: `Estamos aquí para ayudarte`
  - Párrafo: "Si quieres resolver dudas, solicitar una valoración o conocer mejor cómo trabajamos, nuestro equipo te atenderá con total cercanía y profesionalidad."
  - Párrafo: "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible."
  - Botón primario rosa: `Primera consulta gratuita` → `/contacto/`
- **Columna derecha**: **tarjeta blanca** con sombra suave y radio de borde, que contiene el formulario:
  - Título en rosa mayúsculas: `RELLENA EL FORMULARIO`
  - Campo `Nombre completo` (input, ancho completo, estilo minimalista con borde inferior)
  - Campos `Correo electrónico` y `Teléfono` (dos columnas 50/50)
  - Campo `Mensaje` (textarea)
  - Checkbox + texto: "He leído y acepto la **Política de privacidad**" (enlace rosa a `/politica-de-privacidad/`)
  - Botón primario rosa: `Enviar`
  - **Desplegable legal** (`<details>`): `Información sobre protección de datos` con icono ℹ, que al expandir muestra: Responsable (MÓNICA ROJAS PÉREZ), Finalidad, Legitimación, Destinatarios, Derechos y enlace a la política de privacidad.

### 4.4. Elementos flotantes

| Elemento | Posición | Descripción |
|---|---|---|
| **Botón WhatsApp** | Inferior derecha, fijo | Círculo rosa `#D7006B` con icono blanco de WhatsApp; abre chat (Joinchat) |
| **Botón accesibilidad** | Borde izquierdo, centrado verticalmente, fijo | Círculo rosa con icono de persona/accesibilidad; abre panel de opciones de accesibilidad (tamaño de fuente, contraste, etc.) |
| **Banner de cookies** | Barra inferior fija en la primera visita | Texto informativo sobre cookies técnicas y de analítica + 3 botones: `Aceptar cookies` (negro), `Rechazar` (outline), `Ajustes` (outline) + enlace a Política de cookies. Tras aceptar, queda un botón persistente "Cambiar los ajustes de cookies" |

---

## 5. Página: Home (`/`)

**Title**: `Clínica Monro: logopedas y psicólogos en Granada (La Chana)`

### Sección 1 — Hero

- Imagen a ancho completo (logopeda atendiendo a una paciente en consulta), overlay oscuro.
- H1 blanco, izquierda: **"Centro de logopedia y psicología en Granada"**
- Botón primario rosa debajo del H1: **"Primera consulta gratuita"** → `/contacto/`

### Sección 2 — Nuestros servicios

- Eyebrow centrado rosa: `NUESTROS SERVICIOS`
- H2 centrado: **"Logopedas y psicólogos en Granada con enfoque clínico"**
- Párrafo centrado (ancho ~70%): "Bienvenidos a Clínica Monro. Estamos ubicados estratégicamente en la **Carretera de Málaga (barrio de La Chana)**, ofreciendo un espacio accesible y profesional para todas las familias. Somos tu centro de referencia si buscas **logopeda o psicólogo en Granada** con un enfoque cercano, clínico y basado en la evidencia."
- **3 tarjetas de servicio** en fila (fondo blanco, sombra muy suave, centradas). Cada una: icono lineal rosa arriba → título → descripción → botón circular con flecha (enlace a la página del servicio):
  1. **Logopedia Infantil** — "Atención especializada para niños y niñas con dificultades en el habla, el lenguaje, la comunicación, la motricidad orofacial o la deglución." → `/logopedia-infantil-en-granada/`
  2. **Logopedia para Adultos** — "Intervención clínica basada en evidencia para alteraciones del lenguaje, del habla, de la voz y deglución en la edad adulta." → `/logopedia-para-adultos-en-granada/`
  3. **Psicología** — "Acompañamiento emocional para niños, adolescentes y adultos." → `/psicologia-infantil-y-de-adultos-en-granada/`

### Sección 3 — Tu clínica de referencia (dos columnas)

- **Izquierda**: eyebrow rosa `LOGOPEDIA Y PSICOLOGÍA` → H2 **"Tu clínica de referencia en el barrio de La Chana"** → párrafo ("Nuestro equipo trabaja con rigor clínico y una metodología actualizada para garantizar procesos de mejora sólidos tanto en niños como en adultos. Combinamos experiencia, formación continua y un trato cercano para acompañar cada caso desde la primera valoración hasta la evolución final.") → botón rosa **"Sobre nosotros"** → `/quienes-somos/` → imagen pequeña debajo (tarjetas didácticas sobre mesa).
- **Derecha**: imagen grande vertical (niña con tarjeta de animal en la frente, juego terapéutico).

### Sección 4 — Qué ofrecemos (lista numerada)

- Eyebrow rosa (izquierda): `QUÉ OFRECEMOS`
- H2: **"Intervención orientada a la evolución"**, seguido de una **línea divisoria horizontal** fina.
- **3 filas numeradas** (`01`, `02`, `03` en rosa claro, grandes). Cada fila: título a la izquierda (~40%), descripción a la derecha (~60%), separadas por líneas finas grises:
  1. **Evaluación y diagnóstico especializado** — "Realizamos una **valoración inicial completa para niños y adultos**, diseñada para identificar la raíz de la patología y trazar una hoja de ruta personalizada y eficaz desde el primer día."
  2. **Tratamientos de logopedia infantil y de adultos** — "Intervención clínica avanzada. Somos especialistas en **atención temprana**, **terapia miofuncional** y rehabilitación de trastornos del habla, la voz y el lenguaje."
  3. **Atención psicológica para todas las etapas** — "Espacio seguro para el cuidado de la salud mental. Tratamiento de **ansiedad, estrés y gestión emocional** dirigido a la infancia, **adolescencia** y edad adulta."
- **Imagen panorámica ancha** debajo (logopeda con niños en sesión, formato ~21:9, bordes redondeados).

### Sección 5 — Nuestro equipo

- Eyebrow centrado: `NUESTRO EQUIPO`
- H2 centrado: **"Equipo de especialistas en logopedia y psicología"**
- Párrafo centrado: "En Clínica MONRO contamos con un equipo joven, especializado y en constante actualización. Nuestra forma de trabajar se basa en la evidencia clínica, la personalización de cada intervención y una atención cercana que genera confianza desde el primer día."
- **3 fotos de equipo** en fila (retratos verticales de Mónica, Emilio y Narcisa con uniforme rosa).
- Botón rosa centrado: **"Conócenos"** → `/quienes-somos/`

### Sección 6 — Testimonios

- Eyebrow (izquierda): `TESTIMONIOS`
- H2: **"Lo que nuestros pacientes destacan"**
- **Carrusel de reseñas de Google** (widget Trustindex): tarjetas con avatar circular con inicial, nombre del paciente, antigüedad ("hace 8 meses"), 5 estrellas doradas, logo de Google, texto de la reseña y enlace "Leer más". Flechas `<` `>` a los lados. 3 tarjetas visibles en escritorio, deslizables.

### Sección 7 — CTA Adeslas / Beca NEAE

- Dos columnas.
- **Izquierda**: H2 **"¿Tienes seguro Adeslas o buscas un centro para Beca NEAE?"** → párrafo "Somos tu clínica de confianza. Aprovecha tu cobertura médica o tu ayuda educativa con nosotros." → párrafo en negrita "¡Consúltanos sin compromiso!" → botón rosa **"Contacta"** → `/contacto/`
- **Derecha**: imagen (reloj infantil de pared, desenfoque).

### Sección 8 — Formulario compartido

Ver [§4.3](#43-sección-compartida-estamos-aquí-para-ayudarte-formulario-de-contacto).

### Sección 9 — Footer

Ver [§4.2](#42-pie-de-página-footer).

---

## 6. Página: Quiénes somos (`/quienes-somos/`)

**Title**: `Equipo Clínica Monro | Mónica Rojas y especialistas en Granada`

### Sección 1 — Hero

- Imagen a ancho completo (tarjetas didácticas con dibujos de animales sobre una mesa), overlay oscuro.
- H1 blanco: **"Quiénes somos: tu equipo de confianza en Granada"**

### Sección 2 — Un equipo comprometido (dos columnas)

- **Izquierda**: imagen grande vertical (logopeda con una niña de la mano en el pasillo de la clínica).
- **Derecha**: H2 **"Un equipo comprometido con tu bienestar y desarrollo"** → párrafo 1 ("En **Clínica MONRO** trabajamos desde una visión integral de la comunicación y la salud emocional. Nuestro enfoque combina especialización clínica, actualización constante y un trato cercano que facilita una evolución real desde las primeras sesiones.") → párrafo 2 ("Atendemos a niños y adultos con intervenciones estructuradas, basadas en la evidencia y adaptadas a las necesidades de cada persona.") → imagen horizontal debajo (dados/cubos de juego terapéutico).

### Sección 3 — Servicios destacados

- H2 centrado: **"Servicios destacados"**
- Las **mismas 3 tarjetas de servicio** de la Home (icono + título + descripción + flecha circular enlazando a cada página de servicio).

### Sección 4 — El equipo (tarjetas de personas)

- Eyebrow centrado: `UN EQUIPO QUE LIDERA CON EXPERIENCIA Y VOCACIÓN`
- H2 centrado: **"Un proyecto que nace de la vocación y del compromiso"**
- Párrafo centrado: "Este equipo forma el núcleo del centro y es la razón por la que tantas familias depositan su confianza en nosotros."
- **3 tarjetas de persona** en fila. Estructura de cada tarjeta: foto vertical grande → nombre y rol (nombre en negrita + " - " + cargo) → párrafo biográfico:
  1. **Mónica - CEO y Logopeda** — "Mónica Rojas es especialista en trastornos de la voz, lenguaje y comunicación (incluyendo motricidad orofacial, disfagia y TEL). Atiende tanto a niños como a adultos con un enfoque terapéutico basado en la cercanía, la personalización y la sensibilidad. Su objetivo principal es fortalecer las habilidades comunicativas de sus pacientes en un ambiente de confianza, celebrando cada avance como un logro compartido."
  2. **Emilio - Logopeda** — "Emilio Alcalde, está especializado en Atención Temprana. Acompaña a niños, jóvenes y adultos en la mejora de sus habilidades comunicativas, lenguaje y voz. Su filosofía de trabajo reconoce la singularidad de cada persona, ofreciendo una intervención adaptada y respetuosa con los ritmos de aprendizaje. Su enfoque se centra en la empatía para lograr que cada pequeño avance se convierta en una gran victoria compartida."
  3. **Narcisa - Psicóloga Sanitaria** — "Narcisa, psicóloga sanitaria, concibe la terapia como un espacio seguro y de confianza libre de juicios. Su vocación surge de la combinación de su formación académica y su experiencia personal con la salud mental. Acompaña a niños, adolescentes y adultos en sus procesos de cambio, con el objetivo principal de ayudarles a dejar de "sobrevivir" para avanzar hacia una vida marcada por la calma, la seguridad y la confianza."

### Sección 5 — Formulario compartido + Footer

Como en Home (§4.3 y §4.2).

---

## 7. Página: Logopedia infantil (`/logopedia-infantil-en-granada/`)

**Title**: `Logopeda infantil en Granada | Especialistas en atención temprana`

### Sección 1 — Hero

- Imagen (dados/cubos terapéuticos turquesa y rojo sobre mesa), overlay oscuro.
- H1 blanco: **"Logopedia infantil en Granada"**

### Sección 2 — Introducción

- Dos párrafos centrados (ancho ~65%):
  1. "En **Clínica MONRO** ofrecemos un servicio especializado de **Logopedia Infantil**, orientado a la detección temprana, evaluación y tratamiento de dificultades del lenguaje, habla, comunicación, voz, deglución y desarrollo. Trabajamos desde un enfoque actualizado, basado en evidencia y adaptado a cada niño."
  2. "Nuestro equipo está formado por logopedas especializados en población infantil y en intervención temprana, con amplia experiencia clínica y una metodología estructurada para asegurar progresos rápidos y sostenibles."

### Sección 3 — Tratamientos (grid de tarjetas numeradas con acordeón)

- Cabecera de sección en dos columnas: H2 a la izquierda **"Tratamientos de logopedia para niños en Granada"** y párrafo a la derecha ("En nuestro centro abordamos todas las áreas incluidas en tu catálogo real, explicadas de forma profesional y orientada a búsqueda local:").
- **Grid de 3 columnas** con **13 tarjetas numeradas** (01–13), fondo rosa pálido `#FDF2F7`, radio de borde suave, padding generoso. Estructura de cada tarjeta:
  - Número grande decorativo (`01`, `02`…) en rosa muy claro, arriba a la izquierda
  - Título en rosa `#D7006B`, negrita
  - Descripción en gris `#5D5D5C` (con fragmentos en negrita)
  - **Botón circular con flecha** que despliega un **acordeón "Qué tratamos"** con lista de puntos

**Las 13 tarjetas (título + qué tratamos):**

1. **Dificultades de lectoescritura y dislexia** — Lentitud lectora, omisiones e inversiones; problemas de comprensión; errores ortográficos persistentes; escritura espejo; dificultades fonológicas; grafomotricidad alterada.
2. **Logopeda para niños con TDAH** — Problemas de atención sostenida; dificultades en comprensión y expresión verbal; organización del discurso; impulsividad comunicativa; bajo rendimiento escolar vinculado al lenguaje.
3. **Retraso madurativo y del lenguaje (atención temprana)** — Retraso simple del lenguaje; retraso madurativo global; dificultades psicomotoras; bajo vocabulario; frases simples o escasa expresión verbal; problemas de comprensión.
4. **Intervención en habilidades sociales para niños** — Dificultad para iniciar o mantener conversaciones; problemas en turnos de palabra; escasa comprensión emocional; rigidez o falta de habilidades pragmáticas; dificultad para integrarse socialmente.
5. **Dislalia, disglosia y tartamudez (disfemia)** — Dislalia (pronunciación de sonidos); disglosia (causas estructurales); disfemia/tartamudez (bloqueos, repeticiones, fluidez).
6. **Tratamiento de la deglución atípica en niños** — Empuje lingual; uso incorrecto de la lengua al tragar; respiración oral; alteraciones en la masticación; hábitos orales asociados (succión, interposición lingual…).
7. **Rehabilitación del Lenguaje en Niños con Implante Coclear o Audífono** — Desarrollo de habilidades auditivas; discriminación y comprensión del habla; adquisición de vocabulario; producción verbal y articulación; gestión de la audición en entornos reales.
8. **Tratamiento Logopédico para Niños con TEA** — Lenguaje expresivo y comprensivo; comunicación funcional y peticiones; habilidades sociales básicas; comprensión emocional; rigidez comunicativa; dificultades pragmáticas.
9. **Tratamiento del Trastorno Específico del Lenguaje (TEL)** — Lenguaje expresivo limitado; dificultades para comprender instrucciones; problemas morfosintácticos; discurso poco organizado; retraso significativo del lenguaje sin causa aparente.
10. **Rehabilitación del lenguaje tras daño cerebral infantil** — Intervención para niños con daño cerebral adquirido: lenguaje, habla, comunicación y funciones cognitivas tras lesiones, traumatismos o ictus.
11. **Intervención en Motricidad Fina y Grafomotricidad Infantil** — Control del lápiz, precisión manual, coordinación, fuerza y patrones motores para la escritura.
12. **Tratamiento de Patologías de la Voz Infantil** — Recuperar una voz funcional y saludable; mejorar calidad vocal y corregir hábitos.
13. **Terapia Miofuncional para Niños** — Respiración oral; deglución atípica; masticación ineficaz; hipotonía o alteraciones en la lengua; malos hábitos orales; alteraciones asociadas a maloclusión.

### Sección 4 — Gestión de Becas NEAE

- H2 (izquierda): **"Gestión de Becas NEAE en Granada"**
- Párrafos: "En Clínica Monro somos centro autorizado para la intervención con **Becas de Necesidades Específicas de Apoyo Educativo (NEAE)**. Si tu hijo/a necesita apoyo logopédico o reeducación pedagógica y cumples los requisitos del Ministerio, nosotros **te ayudamos a tramitar la beca** y diseñamos el plan de intervención que exige la convocatoria." / "Trabajamos con alumnos con TDAH, TEA, Discapacidad Auditiva y Trastornos Graves de Conducta o Comunicación." / "Contacta con nosotros en el formulario a continuación, estaremos encantados de asesorarte."

### Sección 5 — Formulario compartido + Footer

Como en Home (§4.3 y §4.2).

---

## 8. Página: Logopedia para adultos (`/logopedia-para-adultos-en-granada/`)

**Title**: `Logopedia para adultos en Granada | Rehabilitación y voz`

### Sección 1 — Hero

- Imagen (logopeda trabajando con un portátil en consulta), overlay oscuro.
- H1 blanco: **"Logopedia para adultos en Granada"**

### Sección 2 — Introducción

- Un párrafo centrado: "En **Clínica MONRO** ofrecemos intervención **logopédica especializada para adultos** con alteraciones del lenguaje, la voz, la comunicación, la deglución o el habla. Nuestro equipo trabaja con metodologías basadas en evidencia, adaptando cada programa a la situación clínica y las necesidades del paciente."

### Sección 3 — Tratamientos (grid numerado con acordeón)

- Misma estructura que en Logopedia infantil: H2 **"Tratamientos de logopedia para adultos en Granada"** + párrafo lateral + grid de 3 columnas con **9 tarjetas numeradas** (01–09):

1. **Tratamiento de afasia, alexia y disartria (daño cerebral)** — Afasia; alexia; disartria; dificultades tras ictus o daño cerebral; alteraciones del lenguaje por enfermedades degenerativas.
2. **Tratamiento de patologías de la voz (disfonías)** — Disfonías funcionales y orgánicas; nódulos vocales; pólipos; edema de Reinke; quistes; parálisis de cuerda vocal; voz fatigada, ronquera o pérdida vocal.
3. **Tratamiento de la disartria en adultos** — Alteraciones articulatorias; habla lenta, rápida o poco precisa; coordinación fonorespiratoria; dificultad para emitir sonidos; disartria asociada a ictus, Parkinson o enfermedades neurológicas.
4. **Tratamiento de la tartamudez en adultos** — Bloqueos; repeticiones; habla entrecortada; tensión al hablar; ansiedad comunicativa; tartamudez persistente o de inicio en la adultez.
5. **Tratamiento de la disfagia y problemas de deglución** — Disfagia orofaríngea; dificultad para masticar; tos durante o después de comer; sensación de atasco; pérdida de control oral; deglución ineficaz asociada a ictus, Parkinson o envejecimiento.
6. **Educación y entrenamiento vocal profesional** — Proyección vocal; respiración eficiente; técnicas de resonancia; higiene y salud vocal; prevención de lesiones; optimización de la voz para el trabajo (docentes, opositores, teleoperadores, oradores, cantantes).
7. **Estimulación del lenguaje (deterioro cognitivo)** — Comprensión y expresión; organización del discurso; lectura y escritura; pérdida de habilidades por envejecimiento; secuelas de ictus; dificultades para encontrar palabras.
8. **Mejora de la dicción y oratoria** — Evaluación articulatoria; ejercicios de movilidad y precisión; reeducación de fonemas; ritmo, fluidez y prosodia; pautas prácticas para el día a día.
9. **Terapia miofuncional para adultos** — Deglución atípica; respiración oral; masticación; hipotonía o hiperfunción lingual; malos hábitos orales (bruxismo…); alteraciones asociadas a ortodoncia o cirugías dentales.

### Sección 4 — Formulario compartido + Footer

Como en Home (§4.3 y §4.2). *(Esta página NO tiene bloque NEAE.)*

---

## 9. Página: Psicología (`/psicologia-infantil-y-de-adultos-en-granada/`)

**Title**: `Psicólogos en Granada | Terapia infantil y para adultos`

### Sección 1 — Hero

- Imagen (psicóloga con uniforme rosa tomando notas junto a un portátil), overlay oscuro.
- H1 blanco: **"Psicología Infantil y de Adultos en Granada"**

### Sección 2 — Centro de psicología especializado (dos columnas)

- **Izquierda**: H2 **"Centro de psicología especializado en Granada"** + 3 párrafos ("En **Clínica MONRO** ofrecemos un servicio de psicología actualizado, cercano y orientado a mejorar el bienestar emocional en cualquier etapa de la vida." / "Nuestro enfoque combina rigor técnico, formación continua y una intervención adaptada a cada paciente, creando un espacio seguro para trabajar emociones, conducta, autoestima, relaciones y gestión personal." / "Trabajamos con **Adeslas** como aseguradora y llevamos a cabo procesos terapéuticos eficaces, claros y centrados en el progreso.").
- **Derecha**: imagen (dados terapéuticos turquesa y rojo).

### Sección 3 — Tarjetas numeradas (grid de 2)

- Mismo patrón de tarjetas numeradas con acordeón, pero solo **2 tarjetas** (01 y 02), grid de 2 columnas:
  1. **Psicólogo infantil y para adolescentes en Granada** — Qué tratamos: gestión emocional (tristeza, frustración, rabia, inseguridad); problemas de conducta; ansiedad infantil; dificultades sociales; autoestima y autoconcepto; miedos, fobias y bloqueos; adaptación escolar o familiar; apoyo en NEAE; acompañamiento en cambios (separaciones, duelos, mudanzas).
  2. **Terapia psicológica para adultos: ansiedad y estrés** — Qué tratamos: ansiedad y estrés; autoestima; dificultades relacionales; inseguridades y bloqueos; procesos de cambio vital; gestión emocional; tristeza persistente; pensamientos repetitivos; ajustes tras experiencias difíciles.

### Sección 4 — Nuestra psicóloga (dos columnas)

- **Izquierda**: foto de la psicóloga en consulta.
- **Derecha**: H2 **"Nuestra psicóloga"** + párrafos ("**Narcisa**, psicóloga del centro, forma parte del equipo joven y dinámico de **Clínica MONRO**." / "Su intervención destaca por su trato cercano, sensibilidad clínica y capacidad para generar confianza tanto en niños como en adultos." / "Está en formación continua, lo que garantiza un acompañamiento actualizado y eficaz.") + botón rosa **"Contacta"** → `/contacto/`

### Sección 5 — Becas NEAE psicológicas

- H2 (izquierda): **"Tramitación de becas NEAE para apoyo psicológico"**
- Párrafos: "En Clínica Monro somos centro autorizado para gestionar las **Becas de necesidades específicas de apoyo educativo (NEAE)**. Si tu hijo/a requiere reeducación pedagógica o apoyo psicológico por **TDAH, altas capacidades o trastornos de conducta**, nos encargamos de diseñar la memoria clínica necesaria." / "Te asesoramos en todo el proceso para solicitar la ayuda del Ministerio y comenzar la intervención cuanto antes."

### Sección 6 — Formulario compartido + Footer

Como en Home (§4.3 y §4.2).

---

## 10. Página: Contacto (`/contacto/`)

**Title**: `Contacto Clínica Monro | Pide cita Logopedia y Psicología`

### Sección 1 — Hero

- Imagen (sala de la clínica con iMac sobre escritorio blanco), overlay oscuro.
- H1 blanco: **"Contacta con nosotros"**

### Sección 2 — Contacto + formulario (dos columnas)

- **Izquierda**:
  - H2: **"Contacto"**
  - Párrafos: "Si quieres resolver dudas, solicitar una valoración o conocer mejor cómo trabajamos, nuestro equipo te atenderá con total cercanía y profesionalidad." / "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible."
  - **Dirección**: "Ctra. de Málaga, 18, bajo B, Chana, Granada."
  - **Teléfono** (en negrita): "Tel. 666 762 888"
  - **Icono Instagram** → `https://www.instagram.com/clinicamonro/`
- **Derecha**: tarjeta blanca con el **mismo formulario** de la sección compartida (§4.3): "RELLENA EL FORMULARIO", Nombre completo, Correo electrónico, Teléfono, Mensaje, checkbox de privacidad, botón "Enviar", desplegable de protección de datos.

### Sección 3 — Mapa

- **Google Maps embebido** a ancho del contenedor (bloque alto, ~450–500 px, esquinas redondeadas), centrado en la dirección de la clínica (Ctra. de Málaga, 18, La Chana, Granada).

### Sección 4 — Footer

Como en Home (§4.2). *(Esta página no repite la sección 4.3 porque ya lleva el formulario propio.)*

---

## 11. Páginas legales

Cuatro páginas de contenido textual, con diseño sencillo: cabecera y footer globales, título de página y cuerpo de texto legal en contenedor estrecho centrado.

| Página | URL | Contenido |
|---|---|---|
| Aviso legal | `/aviso-legal/` | Datos identificativos del titular, objeto, condiciones de uso, propiedad intelectual |
| Política de privacidad | `/politica-de-privacidad/` | Responsable del tratamiento (MÓNICA ROJAS PÉREZ), finalidades, legitimación, destinatarios, derechos RGPD |
| Política de cookies | `/politica-de-cookies/` | Tipos de cookies (técnicas y de analítica), gestión y desactivación |
| Accesibilidad | `/accesibilidad/` | Declaración de accesibilidad del sitio |

---

## 12. Componentes reutilizables (patrones de diseño)

Resumen de los "bloques" que se repiten — construirlos como componentes únicos:

1. **Hero de página**: imagen full-width (~70 vh) + overlay `rgba(0,0,0,0.4)` + H1 blanco alineado a la izquierda + (solo Home) botón CTA.
2. **Tarjeta de servicio** (3 usos: Home, Quiénes somos): fondo blanco, icono lineal rosa, título negro, texto gris, botón circular flecha → enlace.
3. **Tarjeta de tratamiento numerada** (logopedia infantil ×13, adultos ×9, psicología ×2): fondo `#FDF2F7`, número decorativo claro, título rosa, descripción gris, botón circular que abre acordeón "Qué tratamos" con viñetas.
4. **Lista numerada horizontal** (Home "Qué ofrecemos"): filas con número, título izquierda, texto derecha, separadores de línea fina.
5. **Tarjeta de persona** (equipo ×3 en Home y Quiénes somos): foto vertical + nombre/rol + bio.
6. **Carrusel de testimonios**: tarjetas de reseñas Google con estrellas, avatar, fecha, flechas de navegación.
7. **Bloque dos columnas texto+imagen** (se repite 5+ veces con variantes: texto izquierda/imagen derecha y viceversa; con o sin botón; con o sin segunda imagen).
8. **Eyebrow + H2 + párrafo introductorio**: patrón de cabecera de cada sección (variante centrada y variante a la izquierda).
9. **Sección formulario de contacto** (§4.3): se instancia en 5 páginas.
10. **Botones**: primario rosa y circular-flecha (§2.3).

---

## 13. Comportamiento responsive y animaciones

### Responsive

- **Escritorio (>1024 px)**: layouts como se describen (3 columnas en grids, 2 columnas en bloques texto/imagen).
- **Tablet (768–1024 px)**: grids de 3 → 2 columnas; los bloques de dos columnas pueden mantenerse o apilarse según el ancho.
- **Móvil (<768 px)**: todo se apila a una columna; menú hamburguesa; H1 reduce a ~36–40 px; H2 a ~28–32 px; carrusel muestra 1 tarjeta; los botones flotantes (WhatsApp, accesibilidad) permanecen visibles.
- El header pasa a versión compacta con logo más pequeño y botón hamburguesa.

### Animaciones (la original usa animaciones de entrada de Elementor)

- **Fade in up / fade in left / fade in right / zoom in / bounce in up** al hacer scroll (las secciones aparecen suavemente al entrar en viewport).
- **Hover en tarjetas de servicio**: ligera elevación o cambio de sombra.
- **Acordeones**: despliegue suave (slide down) del bloque "Qué tratamos".
- **Carrusel de testimonios**: transición deslizante.
- Header con transición suave al aparecer el fondo tras hacer scroll.

---

## 14. SEO y metadatos

| Página | Title | Enfoque keyword |
|---|---|---|
| Home | Clínica Monro: logopedas y psicólogos en Granada (La Chana) | logopeda/psicólogo + Granada + barrio La Chana |
| Quiénes somos | Equipo Clínica Monro \| Mónica Rojas y especialistas en Granada | equipo, especialistas, Granada |
| Logopedia infantil | Logopeda infantil en Granada \| Especialistas en atención temprana | logopeda infantil Granada, atención temprana |
| Logopedia adultos | Logopedia para adultos en Granada \| Rehabilitación y voz | logopedia adultos Granada, voz |
| Psicología | Psicólogos en Granada \| Terapia infantil y para adultos | psicólogo Granada, ansiedad, infantil |
| Contacto | Contacto Clínica Monro \| Pide cita Logopedia y Psicología | contacto, cita |

- Slugs en español, descriptivos y con keyword local (`/logopedia-infantil-en-granada/`).
- Negritas semánticas (`<strong>`) sobre keywords dentro de los textos (SEO on-page).
- Datos de contacto reales visibles (NAP: nombre, dirección, teléfono) para SEO local.
- Widget de reseñas de Google como prueba social.

---

## 15. Stack técnico de referencia (web original)

> La original está construida así (no es obligatorio replicar el stack, solo la estructura y el diseño):

| Capa | Tecnología |
|---|---|
| CMS | WordPress |
| Theme | Hello Elementor + child theme personalizado ("child-wit-creativo") |
| Maquetador | Elementor + Elementor Pro (menú, formularios, animaciones) |
| Fuentes | DM Sans (Google Fonts, servida localmente) + "Aloevera Display" (custom) |
| Reseñas | Trustindex (widget de Google Reviews) |
| WhatsApp | Joinchat (creame-whatsapp-me) |
| Cookies | GDPR Cookie Compliance (Moove) |
| Accesibilidad | Pojo Accessibility |
| Idiomas | GTranslate (ES/EN) |
| SEO | Rank Math |
| Mapa | Google Maps embebido |

**Equivalente recomendado para la réplica**: sitio estático o React con componentes reutilizables (ver §12), CSS con variables para la paleta (§2.1), formulario con validación básica + checkbox RGPD, embed de Google Maps, carrusel propio o librería ligera (Swiper), y widget de reseñas manual o Trustindex.

---

## 16. Inventario de contenidos (textos íntegros)

### Datos de la empresa

- **Nombre**: Clínica Monro (Clínica MONRO)
- **Dirección**: Ctra. de Málaga, 18, bajo B, Chana, Granada
- **Teléfono**: 666 762 888
- **Instagram**: `@clinicamonro` → https://www.instagram.com/clinicamonro/
- **Responsable RGPD**: MÓNICA ROJAS PÉREZ
- **Aseguradora concertada**: Adeslas
- **Servicio especial**: Centro autorizado para Becas NEAE

### Equipo

| Nombre | Rol |
|---|---|
| Mónica Rojas | CEO y Logopeda |
| Emilio Alcalde | Logopeda (Atención Temprana) |
| Narcisa Iosub | Psicóloga Sanitaria |

### CTAs recurrentes

- "Primera consulta gratuita" → `/contacto/`
- "Sobre nosotros" → `/quienes-somos/`
- "Conócenos" → `/quienes-somos/`
- "Contacta" → `/contacto/`
- "Enviar" (formulario)

### Claims / titulares clave por página

| Página | H1 | H2 principales |
|---|---|---|
| Home | Centro de logopedia y psicología en Granada | Logopedas y psicólogos en Granada con enfoque clínico · Tu clínica de referencia en el barrio de La Chana · Intervención orientada a la evolución · Equipo de especialistas en logopedia y psicología · Lo que nuestros pacientes destacan · ¿Tienes seguro Adeslas o buscas un centro para Beca NEAE? · Estamos aquí para ayudarte |
| Quiénes somos | Quiénes somos: tu equipo de confianza en Granada | Un equipo comprometido con tu bienestar y desarrollo · Servicios destacados · Un proyecto que nace de la vocación y del compromiso |
| Logopedia infantil | Logopedia infantil en Granada | Tratamientos de logopedia para niños en Granada · Gestión de Becas NEAE en Granada |
| Logopedia adultos | Logopedia para adultos en Granada | Tratamientos de logopedia para adultos en Granada |
| Psicología | Psicología Infantil y de Adultos en Granada | Centro de psicología especializado en Granada · Nuestra psicóloga · Tramitación de becas NEAE para apoyo psicológico |
| Contacto | Contacta con nosotros | Contacto |

### Checklist de imágenes necesarias (referencia de la original)

1. Hero Home: logopeda en consulta con paciente
2. Hero Quiénes somos: tarjetas didácticas con animales sobre mesa
3. Hero Logopedia infantil: dados terapéuticos turquesa/rojo
4. Hero Logopedia adultos: logopeda con portátil
5. Hero Psicología: psicóloga tomando notas
6. Hero Contacto: sala con iMac
7. Niña con tarjeta de animal en la frente (Home §3)
8. Tarjetas didácticas sobre mesa (Home §3, pequeña)
9. Panorámica logopeda con niños en sesión (Home §4)
10. 3 retratos de equipo (Mónica, Emilio, Narcisa) con uniforme rosa
11. Reloj infantil de pared (CTA Adeslas/NEAE)
12. Fondo sección formulario: logopeda de pie (retrato) — se usa en todas las páginas
13. Logopeda con niña en pasillo (Quiénes somos)
14. Dados terapéuticos (Quiénes somos / Psicología)
15. Psicóloga en sesión con paciente (Psicología §4)
16. Logos Kit Digital / red.es / UE (footer)

---

*Fin del documento de especificaciones. Con este blueprint se puede reconstruir la web completa: arquitectura (§3), diseño (§2), secciones página a página (§5–§10), componentes (§12), responsive (§13), SEO (§14) y contenidos (§16).*
