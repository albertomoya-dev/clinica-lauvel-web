# Cómo obtener la API key de Google Places (para mostrar las reseñas de Google en la web)

La web puede mostrar automáticamente las reseñas que los pacientes dejen en la ficha de Google Maps de Clínica LAUVEL. Para activarlo necesitamos una **API key de Google Cloud**. Es gratuita para este uso (el nivel gratuito mensual cubre de sobra la consulta semanal que hace la web).

Pasos (10 minutos):

1. Entra en [Google Cloud Console](https://console.cloud.google.com/) con la **cuenta de Google que gestiona la ficha de la clínica** (la misma del Google Business Profile, idealmente).
2. Arriba a la izquierda, crea un **proyecto nuevo** (nombre sugerido: `clinica-lauvel-web`).
3. En el menú ≡ → **APIs y servicios** → **Biblioteca**, busca **"Places API (New)"** y pulsa **Habilitar**.
4. Ve a **APIs y servicios** → **Credenciales** → **Crear credenciales** → **Clave de API**. Copia la clave generada.
5. (Recomendado) En la clave recién creada, pulsa **Restringir clave** → en "Restricciones de API" elige **"Restringir clave"** y marca solo **Places API (New)**. Así, aunque la clave se expusiera, no serviría para otra cosa.
6. Google pedirá activar la **facturación** del proyecto (tarjeta). Es obligatorio para usar la API, pero **no habrá cargos**: el nivel gratuito cubre ~10.000 consultas/mes y la web hace 4 al mes.

Cuando la tengas, pásanos la clave (una cadena tipo `AIza...`). Nosotros la ponemos en el servidor y las reseñas aparecerán solas en el carrusel de la web, actualizándose cada semana.

## Notas

- Google solo devuelve **hasta 5 reseñas** (las más "relevantes" según su algoritmo).
- Las reseñas se muestran con el nombre del autor, las estrellas y el texto, igual que en Google, con atribución a Google (es requisito de sus condiciones de uso).
- Si alguna vez queréis quitar una reseña concreta de la web, se puede filtrar; avisadnos.

## Solución de problemas: la API no devuelve reseñas

Síntoma: la API responde correctamente y devuelve la valoración media y el número de reseñas (p. ej. 5 estrellas y 5 reseñas), pero **no incluye los textos de las reseñas**.

Causa: los textos de las reseñas pertenecen al nivel "Enterprise + Atmosphere" de la API, que solo se sirve si el proyecto tiene la **facturación activada y en estado "activa"**. Sin ella, Google omite ese campo silenciosamente (no da error).

Cómo comprobarlo:

1. Entra en [console.cloud.google.com/billing](https://console.cloud.google.com/billing) con la misma cuenta.
2. Verifica que hay una **cuenta de facturación vinculada al proyecto** `clinica-lauvel-web` y que su estado es **Activa** (si está "suspendida" o sin vincular, ese es el problema).
3. Si no hay ninguna, crea la cuenta de facturación (pedirá una tarjeta) y vincúlala al proyecto. **No habrá cargos**: las reseñas tienen 10.000 consultas gratis al mes y la web hace ~5.

En cuanto la facturación esté activa no hay que cambiar nada más: el proceso semanal de la web empezará a traer las reseñas solo.
