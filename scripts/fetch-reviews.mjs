// Descarga las reseñas de la ficha de Google Business vía Places API (New)
// y las vuelca en src/data/google-reviews.json.
//
// Requiere GOOGLE_PLACES_API_KEY (sin prefijo PUBLIC_: nunca llega al navegador).
// GOOGLE_PLACE_ID es opcional; si falta, se resuelve con una Text Search.
// Sin API key el script no hace nada (exit 0) para no romper builds locales ni CI.

import { writeFile } from 'node:fs/promises';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const OUT_FILE = new URL('../src/data/google-reviews.json', import.meta.url);
const TEXT_QUERY = 'Clínica LAUVEL, C. Mijail Gorbachov 8, Dos Hermanas, Sevilla';

if (!API_KEY) {
  console.log('GOOGLE_PLACES_API_KEY no definida: se omite la descarga de reseñas.');
  process.exit(0);
}

const headers = {
  'Content-Type': 'application/json',
  'X-Goog-Api-Key': API_KEY,
};

const resolvePlaceId = async () => {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: { ...headers, 'X-Goog-FieldMask': 'places.id,places.displayName' },
    body: JSON.stringify({ textQuery: TEXT_QUERY, languageCode: 'es' }),
  });
  if (!res.ok) throw new Error(`Text Search falló: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const place = data.places?.[0];
  if (!place) throw new Error(`Text Search no encontró la ficha para "${TEXT_QUERY}"`);
  console.log(`Place ID resuelto: ${place.id} (${place.displayName?.text})`);
  return place.id;
};

const fetchReviews = async (placeId) => {
  const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=es`, {
    headers: { ...headers, 'X-Goog-FieldMask': 'reviews,rating,userRatingCount' },
  });
  if (!res.ok) throw new Error(`Place Details falló: ${res.status} ${await res.text()}`);
  return res.json();
};

const placeId = await resolvePlaceId();
const details = await fetchReviews(placeId);
const reviews = (details.reviews ?? [])
  .map((r) => ({
    author: r.authorAttribution?.displayName ?? 'Usuario de Google',
    date: r.relativePublishTimeDescription ?? '',
    text: r.text?.text ?? '',
    rating: r.rating ?? 5,
  }))
  .filter((r) => r.text);

if (reviews.length === 0) {
  console.log('La ficha no devolvió reseñas; no se toca google-reviews.json.');
  process.exit(0);
}

await writeFile(OUT_FILE, JSON.stringify(reviews, null, 2) + '\n');
console.log(`${reviews.length} reseñas escritas en src/data/google-reviews.json`);
