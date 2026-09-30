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
