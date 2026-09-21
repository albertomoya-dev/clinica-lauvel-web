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
