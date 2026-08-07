export function withBase(path: string): string {
  const base: string = import.meta.env.BASE_URL ?? '/';
  if (!base || base === '/') return path;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
