export interface NavItem {
  label: string;
  href: string;
}

export const mainNavLeft: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Quiénes somos', href: '/quienes-somos/' },
];

export const mainNavRight: NavItem[] = [{ label: 'Contacto', href: '/contacto/' }];

export const servicesNav: NavItem[] = [
  { label: 'Logopedia', href: '/logopedia/' },
  { label: 'Pedagogía', href: '/pedagogia/' },
  { label: 'Psicología', href: '/psicologia/' },
  { label: 'Fisioterapia', href: '/fisioterapia/' },
];

export const legalNav: NavItem[] = [
  { label: 'Aviso legal', href: '/aviso-legal/' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad/' },
  { label: 'Política de cookies', href: '/politica-de-cookies/' },
  { label: 'Accesibilidad', href: '/accesibilidad/' },
];
