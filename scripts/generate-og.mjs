import sharp from 'sharp';

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#F5F0EB"/>
  <rect y="560" width="1200" height="70" fill="#AC9687"/>
  <circle cx="1050" cy="120" r="220" fill="#FAF8F5"/>
  <circle cx="120" cy="500" r="140" fill="#EADDD3" opacity="0.6"/>
  <text x="600" y="255" font-family="Segoe UI, Arial, sans-serif" font-size="34" letter-spacing="14" fill="#5D5D5C" text-anchor="middle">CLÍNICA</text>
  <text x="600" y="365" font-family="Segoe UI, Arial, sans-serif" font-size="110" font-weight="700" letter-spacing="18" fill="#AC9687" text-anchor="middle">LAUVEL</text>
  <text x="600" y="450" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#161615" text-anchor="middle">Logopedia · Psicología · Pedagogía · Fisioterapia</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile('public/og-default.jpg');
console.log('public/og-default.jpg generado');
