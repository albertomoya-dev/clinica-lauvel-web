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
  domain: 'https://albertomoya-dev.github.io',
  tagline: 'Logopedia · Psicología · Pedagogía · Fisioterapia',
  disciplines: ['Logopedia', 'Psicología', 'Pedagogía', 'Fisioterapia'] as const,
  population: 'bebés, niños, adolescentes y adultos',

  city: 'Sevilla',
  address: 'C.Mijail Gorbachov, 8, LOC 1, 41702 Dos Hermanas',
  mapUrl: 'https://www.google.com/maps/place/C.+Mijail+Gorbachov,+8,+41702+Dos+Hermanas,+Sevilla/@37.285662,-5.9113787,20.5z/data=!4m6!3m5!1s0xd127064e44f666f:0x787742fc5a6c826e!8m2!3d37.2856754!4d-5.9110482!16s%2Fg%2F11c2c7wjjw?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D',
  phone,
  phoneHref,
  email: getEnv('PUBLIC_CONTACT_EMAIL', 'PENDIENTE_EMAIL'),
  whatsappNumber: getEnv('PUBLIC_CONTACT_WHATSAPP', 'PENDIENTE_WHATSAPP'),
  whatsappMessage: 'Hola, me gustaría pedir información sobre vuestros servicios.',
  instagramUrl: 'PENDIENTE_INSTAGRAM',

  rgpdOwner: 'PENDIENTE_TITULAR_RGPD',
  legalName: 'PENDIENTE_RAZON_SOCIAL',
  cif: 'PENDIENTE_CIF',

  firstConsultFree: true,
  languageSelector: false,
  fundingLogos: false,
} as const;

export const isPending = (value: string): boolean => value.startsWith('PENDIENTE_');

export const primaryCtaLabel = site.firstConsultFree ? 'Primera consulta gratuita' : 'Pide tu valoración';
