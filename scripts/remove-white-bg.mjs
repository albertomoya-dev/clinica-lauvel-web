import sharp from 'sharp';
import path from 'node:path';

const files = [
  'src/assets/images/logo-icon.png',
  'src/assets/images/logo-main.png',
];

for (const file of files) {
  const input = path.resolve(file);
  const { data, info } = await sharp(input)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const lum = Math.round((r + g + b) / 3);
    const a = 255 - lum;

    if (a <= 8) {
      out[j + 3] = 0;
      continue;
    }

    if (a >= 250) {
      out[j] = r;
      out[j + 1] = g;
      out[j + 2] = b;
      out[j + 3] = 255;
      continue;
    }

    out[j] = Math.min(255, Math.max(0, Math.round(((r - lum) * 255) / a)));
    out[j + 1] = Math.min(255, Math.max(0, Math.round(((g - lum) * 255) / a)));
    out[j + 2] = Math.min(255, Math.max(0, Math.round(((b - lum) * 255) / a)));
    out[j + 3] = a;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(input);

  console.log(file, 'fondo blanco eliminado');
}
