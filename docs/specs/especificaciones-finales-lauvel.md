# Especificaciones de diseño y estructura — Web Clínica LAUVEL

> Documento definitivo para construir la web de **Clínica LAUVEL**, centro multidisciplinar de **Logopedia, Psicología, Pedagogía y Fisioterapia**.
>
> La web replica **fielmente la estructura, secciones, componentes y estilo visual** de `clinicamonro.com` (ver documento "Especificaciones web Clínica Monro.md"), pero con **toda la información, contenidos y contexto propios de LAUVEL**.
>
> **Cómo usar este documento**: el sistema de diseño (colores, tipografías, botones, componentes, responsive, animaciones) es el definido en el documento de especificaciones de referencia y se resume en §2. Este documento define la arquitectura, los contenidos página a página y las adaptaciones estructurales necesarias para LAUVEL.

---

## Índice

1. [Visión general y diferencias clave respecto a la referencia](#1-visión-general-y-diferencias-clave-respecto-a-la-referencia)
2. [Sistema de diseño (resumen)](#2-sistema-de-diseño-resumen)
3. [Mapa del sitio y navegación](#3-mapa-del-sitio-y-navegación)
4. [Elementos globales compartidos](#4-elementos-globales-compartidos)
5. [Página: Home](#5-página-home)
6. [Página: Quiénes somos](#6-página-quiénes-somos)
7. [Página: Logopedia](#7-página-logopedia)
8. [Página: Pedagogía](#8-página-pedagogía)
9. [Página: Psicología](#9-página-psicología)
10. [Página: Fisioterapia](#10-página-fisioterapia)
11. [Página: Contacto](#11-página-contacto)
12. [Páginas legales](#12-páginas-legales)
13. [SEO y metadatos](#13-seo-y-metadatos)
14. [Inventario de contenidos e imágenes](#14-inventario-de-contenidos-e-imágenes)
15. [Datos pendientes de confirmar con el cliente](#15-datos-pendientes-de-confirmar-con-el-cliente)

---

## 1. Visión general y diferencias clave respecto a la referencia

| Aspecto | Web de referencia (Monro) | Web LAUVEL |
|---|---|---|
| **Disciplinas** | 3 (Logopedia infantil, Logopedia adultos, Psicología) | **4: Logopedia, Pedagogía, Psicología, Fisioterapia** |
| **Enfoque** | Centro de logopedia y psicología | **Centro multidisciplinar con atención integral y coordinada** |
| **Páginas de servicios** | 3 | **4** (misma plantilla) |
| **Tarjetas de servicios en portada** | 3 tarjetas | **6 servicios destacados** (petición expresa del cliente) en grid de 2 filas × 3 columnas |
| **Seguros médicos** | Bloque "¿Tienes seguro Adeslas…?" | **Se elimina la mención a aseguradoras** (aún no confirmado). El bloque CTA se mantiene pero **centrado 100% en Becas NEAE** |
| **Becas NEAE** | Mención secundaria | **Máxima importancia**: bloque propio destacado en Home y en las páginas de Logopedia, Pedagogía y Psicología |
| **Sección "Cómo trabajamos"** | No existe | **Sección nueva** que adapta el componente "lista numerada" de la Home de referencia |
| **Servicio estrella** | — | **Terapia de Motricidad Orofacial** (área de especialización principal): recibe destacado propio dentro de Logopedia |
| **Población** | Niños y adultos | **Bebés, niños, adolescentes y adultos** |
| **Equipo** | 3 personas con bio | Por definir (nombres, roles, fotos y bios pendientes) |

El resto de la estructura (hero, bloques dos columnas, tarjetas numeradas con acordeón, testimonios, formulario compartido, footer, elementos flotantes) se mantiene **idéntica**.

---

## 2. Sistema de diseño (resumen)

Se hereda por completo del documento de especificaciones de referencia:

- **Paleta**: acento verde oliva `#49523B` (botones, enlaces, iconos, títulos de tarjetas de tratamiento, subrayado activo); dorado `#B59A55` (eyebrows y detalles decorativos); verde muy oscuro `#2E3626` (titulares, footer, desplegables); gris `#5D5D5C` (cuerpo); blanco `#FFFFFF`; fondos alternos crema `#F8F5F0` y `#FBF9F5`; overlay de heroes `rgba(0,0,0,0.35–0.45)`.
- **Tipografía**: display redondeada para titulares (Aloevera Display; sustitutas libres: Quicksand Bold, Comfortaa, Baloo 2) + DM Sans 400/500 para cuerpo, eyebrow labels y botones.
- **Botones**: primario verde oliva con texto blanco (radio ~4–6 px) y botón circular con borde verde oliva y flecha `→` (enlaces y acordeones).
- **Eyebrow labels**: mayúsculas, verde oliva, letter-spacing amplio, sobre cada H2.
- **Componentes reutilizables**: hero de página, tarjeta de servicio, tarjeta numerada con acordeón "Qué tratamos", lista numerada horizontal, tarjeta de persona, carrusel de testimonios, bloque dos columnas texto+imagen, sección formulario, botones flotantes (WhatsApp y accesibilidad), banner de cookies.
- **Responsive y animaciones**: según §13 del documento de referencia (grids 3→2→1 columnas, animaciones fade/slide al hacer scroll, menú hamburguesa en móvil).

> Nota de marca: la paleta corporativa definitiva de LAUVEL se extrae de la tarjeta de visita: verde oliva `#49523B`, dorado `#B59A55` y crema `#F8F5F0`. El logo debe mantenerse con la identidad recibida del cliente. Ver §15.

---

## 3. Mapa del sitio y navegación

```
/ (Home)
├── /quienes-somos/
├── Servicios (elemento de menú no clicable → desplegable)
│   ├── /logopedia/
│   ├── /pedagogia/
│   ├── /psicologia/
│   └── /fisioterapia/
├── /contacto/
└── Legales (solo enlazadas desde el footer)
    ├── /aviso-legal/
    ├── /politica-de-privacidad/
    ├── /politica-de-cookies/
    └── /accesibilidad/
```

**Menú principal (cabecera)**: `Home` · `Quiénes somos` · **[LOGO LAUVEL centrado]** · `Servicios ▾` · `Contacto`

**Desplegable "Servicios"** (fondo `#2E3626`, texto blanco, 4 enlaces):
1. Logopedia → `/logopedia/`
2. Pedagogía → `/pedagogia/`
3. Psicología → `/psicologia/`
4. Fisioterapia → `/fisioterapia/`

> Los slugs son provisionales: ajustar con la ciudad/zona de la clínica para SEO local cuando se confirme (p. ej. `/logopedia-en-[ciudad]/`). Ver §15.

---

## 4. Elementos globales compartidos

Idénticos a la referencia (§4 del documento Monro), con estos contenidos propios:

### 4.1. Cabecera
- Barra transparente sobre el hero, menú blanco, item activo con subrayado verde oliva, logo LAUVEL centrado, desplegable de Servicios (4 items), sticky al scroll, hamburguesa en móvil.

### 4.2. Footer
Fondo `#2E3626`, columna centrada:
1. Logotipo LAUVEL grande (versión clara sobre negro).
2. Selector de idioma (Español/English) — opcional, según cliente (ver §15).
3. Menú secundario: `Home` · `Quiénes somos` · `Servicios ▾` · `Contacto`.
4. Iconos sociales (Instagram y los que indique el cliente).
5. *(Solo si aplica)* Bloque de logos de financiación europea/Kit Digital.
6. Línea legal: `Clínica LAUVEL©. Aviso legal · Política de privacidad · Política de cookies · Accesibilidad`.

### 4.3. Sección compartida "Estamos aquí para ayudarte" (formulario)
Aparece al final de **Home, Quiénes somos y las 4 páginas de servicios**. Estructura idéntica a la referencia:
- Columna izquierda sobre foto con overlay: eyebrow `¿NECESITAS MÁS INFORMACIÓN?`, H2 **"Estamos aquí para ayudarte"**, párrafos:
  - "Si quieres resolver dudas, solicitar una valoración o conocer mejor cómo trabajamos, nuestro equipo te atenderá con total cercanía y profesionalidad."
  - "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible."
  - Botón verde oliva: **"Primera consulta gratuita"** → `/contacto/` *(confirmar con el cliente si la primera consulta/valoración es gratuita; si no, cambiar el CTA a "Pide tu valoración" o "Contacta" — ver §15)*.
- Columna derecha: tarjeta blanca con formulario: `RELLENA EL FORMULARIO` + Nombre completo + Correo electrónico + Teléfono + Mensaje + checkbox "He leído y acepto la **Política de privacidad**" + botón `Enviar` + desplegable legal "Información sobre protección de datos" (Responsable: [titular de LAUVEL], Finalidad, Legitimación, Destinatarios, Derechos).

### 4.4. Elementos flotantes
- Botón **WhatsApp** (inferior derecha, círculo verde oliva) → chat con el número de la clínica.
- Botón **accesibilidad** (borde izquierdo centrado).
- **Banner de cookies** con Aceptar/Rechazar/Ajustes + enlace a política de cookies.

---

## 5. Página: Home

### Sección 1 — Hero
- Imagen a ancho completo (equipo o consulta de LAUVEL), overlay oscuro.
- H1 blanco: **"Centro multidisciplinar de logopedia, psicología, pedagogía y fisioterapia"** *(añadir ciudad cuando se confirme: "…en [Ciudad]")*.
- Botón verde oliva: **"Primera consulta gratuita"** → `/contacto/`

### Sección 2 — Servicios destacados
- Eyebrow centrado: `NUESTROS SERVICIOS`
- H2 centrado: **"Atención integral para todas las etapas de la vida"**
- Párrafo centrado introductorio: "En LAUVEL ofrecemos una atención individualizada para bebés, niños, adolescentes y adultos. Somos un centro multidisciplinar donde la logopedia, la psicología, la pedagogía y la fisioterapia trabajan de forma coordinada, siempre desde un enfoque basado en la evidencia científica."
- **6 tarjetas de servicio** (grid 3 columnas × 2 filas; componente "tarjeta de servicio": icono lineal verde oliva, título, descripción, botón circular con flecha):
  1. **Terapia de Motricidad Orofacial** — "Una de nuestras áreas de especialización: tratamos las alteraciones de la musculatura orofacial para mejorar funciones como respirar, masticar, deglutir y hablar." → `/logopedia/` *(ancla a su bloque)*
  2. **Logopedia infantil y de adultos** — "Prevención, evaluación e intervención en las alteraciones del lenguaje, el habla, la comunicación, la voz y la deglución, para todas las edades." → `/logopedia/`
  3. **Psicología infantil, adolescentes y adultos** — "Un espacio de confianza para comprender lo que ocurre y desarrollar herramientas para afrontar el día a día." → `/psicologia/`
  4. **Reeducación pedagógica y dificultades de aprendizaje** — "Intervención individualizada para potenciar capacidades, mejorar el rendimiento académico y favorecer un aprendizaje autónomo y motivador." → `/pedagogia/`
  5. **Fisioterapia musculoesquelética y deportiva** — "Alivio del dolor, recuperación funcional y readaptación mediante técnicas manuales y ejercicio terapéutico personalizado." → `/fisioterapia/`
  6. **Atención integral infantil** — "Trabajo coordinado entre logopedia, psicología, pedagogía y fisioterapia para ofrecer a cada niño una atención completa." → `/quienes-somos/` *(o a la sección "Cómo trabajamos")*

### Sección 3 — Tu clínica de referencia (dos columnas)
- **Izquierda**: eyebrow `LOGOPEDIA · PSICOLOGÍA · PEDAGOGÍA · FISIOTERAPIA` → H2 **"Un centro multidisciplinar, un único objetivo: tu bienestar"** → párrafo: "En LAUVEL creemos en una atención integral y personalizada. La coordinación entre nuestros profesionales y la colaboración con las familias, centros educativos y otros especialistas nos permite ofrecer una atención completa, cercana y de calidad, acompañando a cada persona durante todo el proceso." → botón verde oliva **"Sobre nosotros"** → `/quienes-somos/` → imagen pequeña debajo.
- **Derecha**: imagen grande vertical (sesión con paciente).

### Sección 4 — Cómo trabajamos (lista numerada)
Adapta el componente "Qué ofrecemos / lista numerada" de la referencia:
- Eyebrow: `CÓMO TRABAJAMOS`
- H2: **"Atención integral y personalizada, paso a paso"** + línea divisoria.
- 4 filas numeradas (título izquierda, descripción derecha, separadores finos):
  1. **Valoración inicial exhaustiva** — "Cada tratamiento comienza con una valoración completa para conocer las necesidades del paciente y establecer unos objetivos terapéuticos claros."
  2. **Plan de intervención individualizado** — "A partir de la evaluación diseñamos un plan adaptado a cada persona, sus fortalezas y sus necesidades."
  3. **Seguimiento continuo de la evolución** — "Revisamos la evolución de forma constante y adaptamos el tratamiento siempre que sea necesario."
  4. **Coordinación multidisciplinar** — "Trabajamos en coordinación con familias, centros educativos y otros especialistas para ofrecer una atención completa."
- Imagen panorámica ancha debajo (equipo o sesión).

### Sección 5 — Nuestro equipo
- Eyebrow centrado: `NUESTRO EQUIPO`
- H2: **"Especialistas en logopedia, psicología, pedagogía y fisioterapia"**
- Párrafo: "En LAUVEL contamos con un equipo multidisciplinar especializado y en constante formación. Nuestra forma de trabajar se basa en la evidencia científica, la personalización de cada intervención y un trato cercano que genera confianza desde el primer día."
- Fotos de equipo en fila (nº según plantilla real) + botón verde oliva **"Conócenos"** → `/quienes-somos/`

### Sección 6 — Testimonios
- Eyebrow: `TESTIMONIOS` + H2 **"Lo que nuestros pacientes destacan"** + carrusel de reseñas de Google (mismo componente).

### Sección 7 — CTA Becas NEAE (bloque destacado)
**Este bloque sustituye al de "Adeslas/Beca NEAE" de la referencia y tiene máxima prioridad visual** (petición expresa del cliente):
- Dos columnas.
- **Izquierda**: H2 **"Centro de intervención para alumnado con Beca NEAE"** → párrafo: "Realizamos tratamientos para el alumnado beneficiario de las **Becas de Necesidades Específicas de Apoyo Educativo (NEAE)** del Ministerio de Educación." → párrafo: "Te asesoramos sobre la ayuda y diseñamos el plan de intervención que exige la convocatoria." → negrita: "¡Consúltanos sin compromiso!" → botón verde oliva **"Contacta"** → `/contacto/`
- **Derecha**: imagen (material didáctico, aula o sesión infantil).

### Sección 8 — Formulario compartido (§4.3)

### Sección 9 — Footer (§4.2)

---

## 6. Página: Quiénes somos

### Sección 1 — Hero
- Imagen + overlay. H1: **"Quiénes somos: tu equipo de confianza"** *(+ ciudad)*.

### Sección 2 — Un equipo comprometido (dos columnas)
- **Izquierda**: imagen grande vertical.
- **Derecha**: H2 **"Un equipo multidisciplinar comprometido con tu bienestar"** → párrafos:
  - "En LAUVEL creemos en una atención integral y personalizada. Trabajamos desde una visión global del desarrollo, la comunicación, el aprendizaje, la salud emocional y el bienestar físico."
  - "Atendemos a bebés, niños, adolescentes y adultos con intervenciones estructuradas, basadas en la evidencia científica y adaptadas a las necesidades de cada persona."
  - Imagen horizontal debajo.

### Sección 3 — Servicios destacados
- H2 centrado: **"Nuestras disciplinas"** + **4 tarjetas de servicio** (componente tarjeta de servicio; fila de 4 o 2×2):
  1. **Logopedia** — "Alteraciones del lenguaje, el habla, la comunicación, la voz, la deglución y las funciones orofaciales." → `/logopedia/`
  2. **Pedagogía** — "Acompañamiento en el proceso de aprendizaje de niños y adolescentes, en coordinación con familias y centros educativos." → `/pedagogia/`
  3. **Psicología** — "Espacio de confianza para niños, adolescentes y adultos: gestión emocional, ansiedad, autoestima y desarrollo personal." → `/psicologia/`
  4. **Fisioterapia** — "Prevención, tratamiento y recuperación de alteraciones del aparato locomotor con técnicas manuales y ejercicio terapéutico." → `/fisioterapia/`

### Sección 4 — El equipo (tarjetas de persona)
- Eyebrow: `UN EQUIPO QUE LIDERA CON EXPERIENCIA Y VOCACIÓN`
- H2: **"Un proyecto que nace de la vocación y del compromiso"**
- Párrafo: "Este equipo forma el núcleo del centro y es la razón por la que tantas familias depositan su confianza en nosotros."
- **Tarjetas de persona** (foto + nombre/rol + bio). Contenido pendiente del cliente (ver §15).

### Sección 5 — Formulario compartido + Footer

---

## 7. Página: Logopedia

### Sección 1 — Hero
- Imagen + overlay. H1: **"Logopedia"** *(+ ciudad: "Logopedia en [Ciudad]")*.

### Sección 2 — Introducción
- Párrafos centrados:
  1. "La logopedia es la disciplina sanitaria encargada de **prevenir, evaluar, diagnosticar e intervenir en las alteraciones del lenguaje, el habla, la comunicación, la voz, la deglución y las funciones orofaciales**."
  2. "En LAUVEL ofrecemos una atención individualizada para **bebés, niños, adolescentes y adultos**, adaptando cada tratamiento a las necesidades específicas de cada persona y trabajando siempre desde un enfoque **basado en la evidencia científica**."
  3. "Creemos que una comunicación eficaz y una correcta función orofacial son fundamentales para el desarrollo, el aprendizaje y la calidad de vida."

### Sección 3 — ¿En qué podemos ayudarte? (grid de tarjetas numeradas)
- Cabecera en dos columnas: H2 **"Tratamientos de logopedia"** + párrafo lateral "Abordamos todas las áreas de la disciplina, con especial atención a nuestras áreas de especialización:".
- Grid de 3 columnas con **7 tarjetas numeradas** (01–07), cada una con acordeón "Qué tratamos":
  1. **Terapia de Motricidad Orofacial** ⭐ *(marcar como área estrella, p. ej. con la tarjeta destacada o una etiqueta "Especialidad")* — "Una de nuestras áreas de especialización. Tratamos alteraciones relacionadas con la musculatura orofacial para mejorar funciones tan importantes como respirar, masticar, deglutir y hablar."
     - Qué tratamos: deglución disfuncional o deglución atípica; respiración oral; sellado labial; fortalecimiento de labios, lengua y musculatura orofacial; hipotonía orofacial; alteraciones de la masticación; interposición lingual; frenillo lingual; rehabilitación post frenectomía; preparación y seguimiento de tratamientos de ortodoncia; hábitos orales nocivos.
  2. **Desarrollo del lenguaje** — Retraso del desarrollo del lenguaje; Trastorno del Desarrollo del Lenguaje (TDL); dificultades de comprensión y expresión; estimulación temprana del lenguaje; retrasos madurativos.
  3. **Habla y pronunciación** — Dislalias; disfemia; trastornos fonológicos; apraxia del habla; disartria; alteraciones articulatorias.
  4. **Comunicación** — Trastornos de la comunicación; Trastorno del Espectro Autista (TEA); Sistemas Aumentativos y Alternativos de Comunicación (SAAC); comunicación funcional.
  5. **Alimentación y deglución** — Disfagia; dificultades en la alimentación infantil; alteraciones de la masticación; selectividad alimentaria.
  6. **Voz** — Disfonías; fatiga vocal; rehabilitación vocal; higiene vocal.
  7. **Logopedia neurológica** — Afasia; disartria; Parkinson; ictus; esclerosis múltiple; demencias.

### Sección 4 — Becas NEAE (bloque destacado)
- H2 (izquierda): **"Becas NEAE: intervención logopédica subvencionada"**
- Párrafos: "En LAUVEL realizamos tratamientos para el alumnado beneficiario de las **Becas de Necesidades Específicas de Apoyo Educativo (NEAE)** del Ministerio de Educación." / "Si tu hijo/a necesita apoyo logopédico, te asesoramos sobre la ayuda y diseñamos el plan de intervención que exige la convocatoria. Contacta con nosotros a través del formulario, estaremos encantados de informarte."

### Sección 5 — Formulario compartido + Footer

---

## 8. Página: Pedagogía

### Sección 1 — Hero
- Imagen + overlay. H1: **"Pedagogía"** *(+ ciudad)*.

### Sección 2 — Introducción
- Párrafos centrados:
  1. "Cada niño aprende a un ritmo diferente. En LAUVEL acompañamos a **niños y adolescentes en su proceso de aprendizaje** mediante una intervención individualizada, adaptada a sus fortalezas y necesidades."
  2. "Nuestro objetivo es **potenciar sus capacidades, mejorar su rendimiento académico** y favorecer un aprendizaje más autónomo y motivador."
  3. "Trabajamos en **coordinación con las familias y los centros educativos** para ofrecer una atención integral."

### Sección 3 — ¿En qué podemos ayudarte? (grid numerado)
- H2 **"Servicios de pedagogía"** + párrafo lateral + grid 3 columnas con **6 tarjetas numeradas** (01–06):
  1. **Reeducación pedagógica** ⭐ *(estrella)* — Refuerzo educativo individualizado; apoyo escolar especializado; desarrollo de hábitos de estudio; motivación académica.
  2. **Dificultades de aprendizaje** — Dislexia; discalculia; disgrafía; dificultades en comprensión lectora; expresión escrita.
  3. **Atención y funciones ejecutivas** — Déficit de atención; TDAH; organización; planificación; memoria de trabajo; control inhibitorio; flexibilidad cognitiva.
  4. **Técnicas de estudio** — Organización del estudio; planificación del tiempo; estrategias de aprendizaje; comprensión y síntesis; preparación de exámenes.
  5. **Altas capacidades** — Enriquecimiento educativo; orientación familiar; estrategias de aprendizaje.
  6. **Orientación familiar** — Asesoramiento a familias; pautas para casa; coordinación con centros escolares.

### Sección 4 — Becas NEAE (bloque destacado)
- H2: **"Becas NEAE: reeducación pedagógica subvencionada"**
- Párrafos: "Somos un centro que realiza tratamientos para el alumnado beneficiario de las **Becas NEAE del Ministerio de Educación**." / "Si tu hijo/a necesita reeducación pedagógica o apoyo escolar especializado, te asesoramos en todo el proceso y diseñamos el plan de intervención según la convocatoria."

### Sección 5 — Formulario compartido + Footer

---

## 9. Página: Psicología

### Sección 1 — Hero
- Imagen + overlay. H1: **"Psicología"** *(+ ciudad)*.

### Sección 2 — Centro de psicología (dos columnas)
- **Izquierda**: H2 **"Un espacio de confianza para cada etapa de la vida"** + párrafos:
  - "En LAUVEL ofrecemos un espacio de confianza donde **niños, adolescentes y adultos** pueden comprender lo que les ocurre y desarrollar herramientas para afrontar las dificultades del día a día."
  - "Cada intervención se adapta a las necesidades de la persona, respetando sus tiempos y objetivos, desde un enfoque **cercano, profesional y basado en la evidencia científica**."
- **Derecha**: imagen.

### Sección 3 — ¿En qué podemos ayudarte? (grid numerado)
- H2 **"Servicios de psicología"** + grid 3 columnas con **5 tarjetas numeradas** (01–05):
  1. **Psicología infantil** ⭐ — Ansiedad; miedos; gestión emocional; rabietas; autoestima; problemas de conducta; habilidades sociales; adaptación escolar; separación de los padres.
  2. **Psicología para adolescentes** — Ansiedad; estrés; baja autoestima; gestión emocional; relaciones sociales; orientación personal; acoso escolar; motivación académica.
  3. **Psicología para adultos** — Ansiedad; estrés; depresión; autoestima; duelo; dependencia emocional; gestión emocional; desarrollo personal.
  4. **Neurodesarrollo** — Trastorno por Déficit de Atención e Hiperactividad (TDAH); Trastorno del Espectro Autista (TEA); evaluación psicológica; intervención individualizada.
  5. **Terapia familiar** — Orientación familiar; dificultades de convivencia; pautas educativas; comunicación familiar.

### Sección 4 — Becas NEAE (bloque destacado)
- H2: **"Becas NEAE: apoyo psicológico subvencionado"**
- Párrafos: "Realizamos intervenciones para el alumnado beneficiario de las **Becas NEAE del Ministerio de Educación** que requiera apoyo psicológico (TDAH, TEA, dificultades emocionales o de conducta…)." / "Te asesoramos en todo el proceso para solicitar la ayuda y comenzar la intervención cuanto antes."

### Sección 5 — Formulario compartido + Footer

---

## 10. Página: Fisioterapia

### Sección 1 — Hero
- Imagen + overlay. H1: **"Fisioterapia"** *(+ ciudad)*.

### Sección 2 — Introducción
- Párrafos centrados:
  1. "La fisioterapia ayuda a **prevenir, tratar y recuperar alteraciones del aparato locomotor** mediante técnicas manuales, ejercicio terapéutico y programas de tratamiento personalizados."
  2. "Nuestro objetivo es **aliviar el dolor, recuperar la funcionalidad y mejorar la calidad de vida** de cada paciente."

### Sección 3 — ¿En qué podemos ayudarte? (grid numerado)
- H2 **"Servicios de fisioterapia"** + grid 3 columnas con **6 tarjetas numeradas** (01–06):
  1. **Fisioterapia traumatológica y musculoesquelética** ⭐ — Dolor cervical; dolor lumbar; contracturas; tendinopatías; lesiones musculares; esguinces; recuperación postquirúrgica.
  2. **Fisioterapia deportiva** — Prevención de lesiones; recuperación funcional; readaptación deportiva; sobrecargas musculares.
  3. **Fisioterapia pediátrica** — Retrasos del desarrollo motor; tortícolis congénita; plagiocefalia; alteraciones posturales.
  4. **Articulación temporomandibular (ATM)** — Dolor mandibular; bruxismo; chasquidos; limitación de apertura bucal; cefaleas asociadas.
  5. **Suelo pélvico** — Embarazo; preparación al parto; recuperación postparto; incontinencia urinaria; dolor pélvico.
  6. **Ejercicio terapéutico** — Reeducación del movimiento; fortalecimiento muscular; mejora del equilibrio; prevención de recaídas.

### Sección 4 — Formulario compartido + Footer
*(Sin bloque NEAE: no aplica a fisioterapia.)*

---

## 11. Página: Contacto

Idéntica en estructura a la referencia:

### Sección 1 — Hero
- Imagen + overlay. H1: **"Contacta con nosotros"**.

### Sección 2 — Contacto + formulario (dos columnas)
- **Izquierda**: H2 **"Contacto"** + párrafos ("Si quieres resolver dudas, solicitar una valoración o conocer mejor cómo trabajamos, nuestro equipo te atenderá con total cercanía y profesionalidad." / "Déjanos tus datos y nos pondremos en contacto contigo lo antes posible.") + **dirección** + **teléfono** (negrita) + iconos sociales. *(Datos pendientes — ver §15.)*
- **Derecha**: tarjeta blanca con el formulario (§4.3).

### Sección 3 — Mapa
- Google Maps embebido con la ubicación de la clínica.

### Sección 4 — Footer

---

## 12. Páginas legales

Cuatro páginas de texto legal con cabecera y footer globales: **Aviso legal**, **Política de privacidad** (Responsable: [titular LAUVEL]), **Política de cookies** y **Accesibilidad**.

---

## 13. SEO y metadatos

> Sustituir `[Ciudad]` por la ubicación real cuando se confirme (SEO local es clave en esta plantilla).

| Página | Title propuesto | Keywords objetivo |
|---|---|---|
| Home | Clínica LAUVEL: logopedia, psicología, pedagogía y fisioterapia en [Ciudad] | clínica multidisciplinar + ciudad |
| Quiénes somos | Equipo Clínica LAUVEL \| Especialistas en [Ciudad] | equipo, especialistas |
| Logopedia | Logopeda en [Ciudad] \| Clínica LAUVEL | logopeda + ciudad, terapia miofuncional, deglución atípica, frenillo lingual, TDL, disfemia |
| Pedagogía | Pedagogía y reeducación pedagógica en [Ciudad] \| Clínica LAUVEL | reeducación pedagógica, dislexia, TDAH, técnicas de estudio + ciudad |
| Psicología | Psicólogos en [Ciudad] \| Terapia infantil, adolescentes y adultos | psicólogo + ciudad, ansiedad, gestión emocional |
| Fisioterapia | Fisioterapia en [Ciudad] \| Clínica LAUVEL | fisioterapeuta + ciudad, fisioterapia deportiva, ATM, suelo pélvico |
| Contacto | Contacto Clínica LAUVEL \| Pide tu cita | contacto, cita |

- Negritas semánticas sobre keywords en los textos (como en la referencia).
- NAP visible (nombre, dirección, teléfono) en Contacto y footer para SEO local.
- Tratamientos estrella trabajados como keywords dentro de sus tarjetas: Terapia de Motricidad Orofacial, deglución atípica, frenillo lingual/post frenectomía, respiración oral, disfagia, TDL, disfemia, reeducación pedagógica, dislexia/disgrafía/discalculia, TDAH, técnicas de estudio, psicología infantil, ansiedad, fisioterapia deportiva, ATM/bruxismo, suelo pélvico, fisioterapia pediátrica.
- Si algún tratamiento estrella crece en demanda, se le puede dar **página propia** futura (estructura ya preparada: cada tarjeta puede convertirse en landing con el mismo patrón).

---

## 14. Inventario de contenidos e imágenes

### Datos de la empresa
- **Nombre**: Clínica LAUVEL
- **Disciplinas**: Logopedia, Psicología, Pedagogía, Fisioterapia
- **Población**: bebés, niños, adolescentes y adultos
- **Área estrella**: Terapia de Motricidad Orofacial
- **Ayudas**: Becas NEAE (Ministerio de Educación) — máxima prioridad comunicativa
- **Seguros**: sin mencionar de momento

### CTAs recurrentes
- "Primera consulta gratuita" → `/contacto/` *(pendiente confirmar gratuidad)*
- "Sobre nosotros" / "Conócenos" → `/quienes-somos/`
- "Contacta" → `/contacto/`
- "Enviar" (formulario)

### Checklist de imágenes necesarias
1. Hero Home (equipo/consulta LAUVEL)
2. Hero Quiénes somos
3. Hero Logopedia
4. Hero Pedagogía
5. Hero Psicología
6. Hero Fisioterapia
7. Hero Contacto
8. Imagen sesión/paciente (Home §3)
9. Imagen panorámica equipo (Home §4)
10. Fotos de equipo (nº según plantilla)
11. Imagen bloque Becas NEAE (material didáctico/aula)
12. Fondo sección formulario (se usa en todas las páginas)
13. Imagen Quiénes somos §2 (vertical + horizontal)
14. Imagen Psicología §2
15. Iconos lineales: logopedia, pedagogía, psicología, fisioterapia, motricidad orofacial, atención integral
16. Logo LAUVEL (versión clara y oscura)

---

## 15. Datos pendientes de confirmar con el cliente

| # | Dato | Impacto |
|---|---|---|
| 1 | **Ciudad/zona de la clínica** | Slugs, títulos H1, SEO local, mapa |
| 2 | **Dirección, teléfono, email, WhatsApp** | Contacto, footer, botón flotante |
| 3 | **Redes sociales** (URLs) | Footer y página de contacto |
| 4 | **Equipo**: nombres, roles, fotos y bios | Home §5 y Quiénes somos §4 |
| 5 | **Logo e identidad de LAUVEL** (logo ya recibido; paleta corporativa extraída de la tarjeta: verde oliva `#49523B`, dorado `#B59A55`, crema `#F8F5F0`) | Mantener logo del cliente; paleta ya aplicada en web |
| 6 | **¿Primera consulta/valoración gratuita?** | Texto del CTA principal |
| 7 | **Titular RGPD** (nombre del responsable) | Formularios y política de privacidad |
| 8 | **¿Selector de idioma?** | Footer |
| 9 | **¿Logos de financiación (Kit Digital u otros)?** | Footer |
| 10 | **Reseñas de Google** (si ya existen) | Sección testimonios (si no, placeholder) |
| 11 | **Aseguradoras** (si se confirman en el futuro) | Recuperar bloque tipo "Adeslas" en Home |

---

*Documento complementario de "Especificaciones web Clínica Monro.md": aquél define el diseño y la estructura de referencia; éste define los contenidos y adaptaciones de LAUVEL. Juntos permiten construir la web completa.*
