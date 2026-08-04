import { withBase } from '../utils/url';

export interface NavItem {
  label: string;
  href: string;
}

export const mainNavLeft: NavItem[] = [
  { label: 'Home', href: withBase('/') },
  { label: 'Quiénes somos', href: withBase('/quienes-somos/') },
];

export const mainNavRight: NavItem[] = [{ label: 'Contacto', href: withBase('/contacto/') }];

export const servicesNav: NavItem[] = [
  { label: 'Logopedia', href: withBase('/logopedia/') },
  { label: 'Pedagogía', href: withBase('/pedagogia/') },
  { label: 'Psicología', href: withBase('/psicologia/') },
  { label: 'Fisioterapia', href: withBase('/fisioterapia/') },
];

export const legalNav: NavItem[] = [
  { label: 'Aviso legal', href: withBase('/aviso-legal/') },
  { label: 'Política de privacidad', href: withBase('/politica-de-privacidad/') },
  { label: 'Política de cookies', href: withBase('/politica-de-cookies/') },
  { label: 'Accesibilidad', href: withBase('/accesibilidad/') },
];
