import { describe, it, expect } from 'vitest';
import { withBase } from './url';

describe('withBase', () => {
  it('returns the path unchanged when base is root', () => {
    expect(withBase('/contacto/')).toBe('/contacto/');
    expect(withBase('/logopedia')).toBe('/logopedia');
  });

  it('prefixes the path with the base when base is not root', () => {
    const originalBase = import.meta.env.BASE_URL;
    import.meta.env.BASE_URL = '/subpath/';
    expect(withBase('/contacto/')).toBe('/subpath/contacto/');
    expect(withBase('logopedia')).toBe('/subpath/logopedia');
    import.meta.env.BASE_URL = originalBase;
  });

  it('handles base without trailing slash', () => {
    const originalBase = import.meta.env.BASE_URL;
    import.meta.env.BASE_URL = '/subpath';
    expect(withBase('/contacto/')).toBe('/subpath/contacto/');
    import.meta.env.BASE_URL = originalBase;
  });
});
