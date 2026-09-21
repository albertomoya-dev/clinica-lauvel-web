const getEnv = (key: string, fallback: string): string => {
  const value = import.meta.env[key];
  return typeof value === 'string' && value.trim() ? value : fallback;
};

const phone = getEnv('PUBLIC_CONTACT_PHONE', 'PENDIENTE_TELEFONO');
const phoneHref = getEnv(
  'PUBLIC_CONTACT_PHONE_HREF',
  phone.startsWith('PENDIENTE_') ? 'PENDIENTE_TELEFONO' : `tel:${phone.replace(/\s/g, '')}`,
);

export const site = {
  name: 'Clínica LAUVEL',
  shortName: 'LAUVEL',
  domain: getEnv('PUBLIC_SITE_URL', 'https://www.clinicalauvel.es'),
  tagline: 'Logopedia · Psicología · Pedagogía · Fisioterapia',
  disciplines: ['Logopedia', 'Psicología', 'Pedagogía', 'Fisioterapia'] as const,
  population: 'bebés, niños, adolescentes y adultos',

  city: 'Sevilla',
  address: 'C.Mijail Gorbachov, 8, LOC 1, 41702 Dos Hermanas',
  mapUrl: 'https://maps.app.goo.gl/5E1CCUhbMqQSgJ6Y7',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.4653176585516!2d-5.91362312371316!3d37.285679640182416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1271ed797ed141%3A0xdd6be5c43ddb7bbd!2sCl%C3%ADnica%20Lauvel!5e1!3m2!1ses!2ses!4v1790013566759!5m2!1ses!2ses',
  phone,
  phoneHref,
  email: getEnv('PUBLIC_CONTACT_EMAIL', 'PENDIENTE_EMAIL'),
  whatsappNumber: getEnv('PUBLIC_CONTACT_WHATSAPP', 'PENDIENTE_WHATSAPP'),
  whatsappMessage: 'Hola, me gustaría pedir información sobre vuestros servicios.',
  instagramUrl: 'PENDIENTE_INSTAGRAM',
  twitterHandle: 'PENDIENTE_TWITTER',

  rgpdOwner: 'PENDIENTE_TITULAR_RGPD',
  legalName: 'PENDIENTE_RAZON_SOCIAL',
  cif: 'PENDIENTE_CIF',

  firstConsultFree: true,
  languageSelector: false,
  fundingLogos: false,
} as const;

export const isPending = (value: string): boolean => value.startsWith('PENDIENTE_');

export const primaryCtaLabel = site.firstConsultFree ? 'Primera consulta gratuita' : 'Pide tu valoración';
