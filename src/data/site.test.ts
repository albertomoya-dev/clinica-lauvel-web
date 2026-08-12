import { describe, it, expect } from 'vitest';
import { site, isPending, primaryCtaLabel } from './site';

describe('site data', () => {
  it('has the expected static values', () => {
    expect(site.name).toBe('Clínica LAUVEL');
    expect(site.shortName).toBe('LAUVEL');
    expect(site.city).toBe('Sevilla');
    expect(site.disciplines).toEqual(['Logopedia', 'Psicología', 'Pedagogía', 'Fisioterapia']);
    expect(site.firstConsultFree).toBe(true);
  });

  it('falls back to the configured default domain', () => {
    expect(site.domain).toBe('https://www.clinicalauvel.es');
  });

  it('detects pending placeholders', () => {
    expect(isPending('PENDIENTE_TELEFONO')).toBe(true);
    expect(isPending('PENDIENTE_EMAIL')).toBe(true);
    expect(isPending('info@clinicalauvel.es')).toBe(false);
    expect(isPending('')).toBe(false);
  });

  it('computes primary CTA label based on firstConsultFree', () => {
    expect(primaryCtaLabel).toBe('Primera consulta gratuita');
  });
});
