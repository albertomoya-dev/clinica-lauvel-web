export const site = {
  name: 'Clínica LAUVEL',
  shortName: 'LAUVEL',
  domain: 'https://albertomoya-dev.github.io/clinica-lauvel-web',
  tagline: 'Logopedia · Psicología · Pedagogía · Fisioterapia',
  disciplines: ['Logopedia', 'Psicología', 'Pedagogía', 'Fisioterapia'] as const,
  population: 'bebés, niños, adolescentes y adultos',

  city: 'PENDIENTE_CIUDAD',
  address: 'PENDIENTE_DIRECCION',
  phone: 'PENDIENTE_TELEFONO',
  phoneHref: 'PENDIENTE_TELEFONO',
  email: 'PENDIENTE_EMAIL',
  whatsappNumber: 'PENDIENTE_WHATSAPP',
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
