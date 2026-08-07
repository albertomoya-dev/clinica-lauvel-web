export interface Testimonial {
  author: string;
  date: string;
  text: string;
  rating: number;
}

const PENDING_TEXT = 'Aquí aparecerá una reseña real de Google cuando el cliente facilite las suyas (spec §15).';

export const testimonials: Testimonial[] = Array.from({ length: 9 }, (_, i) => ({
  author: `PENDIENTE_RESEÑA_${i + 1}`,
  date: 'Reseña de Google',
  text: PENDING_TEXT,
  rating: 5,
}));
