import googleReviews from './google-reviews.json';

export interface Testimonial {
  author: string;
  date: string;
  text: string;
  rating: number;
}

const PENDING_TEXT = 'Aquí aparecerá una reseña real de Google cuando el cliente facilite las suyas (spec §15).';

// Reseñas reales descargadas de Google por scripts/fetch-reviews.mjs (npm run fetch-reviews).
// Mientras no haya ninguna, el carrusel muestra placeholders PENDIENTE_*.
export const testimonials: Testimonial[] =
  googleReviews.length > 0
    ? googleReviews
    : Array.from({ length: 9 }, (_, i) => ({
        author: `PENDIENTE_RESEÑA_${i + 1}`,
        date: 'Reseña de Google',
        text: PENDING_TEXT,
        rating: 5,
      }));
