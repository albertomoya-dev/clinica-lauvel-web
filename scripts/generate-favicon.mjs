// Genera los favicons a partir del isotipo verde (logo-icon-green.png):
// recorta el margen transparente, engorda el trazo (dilatacion del canal alfa)
// para que se lea a 16-48px y lo compone sobre fondo blanco, ya que Google
// muestra los favicons en un circulo claro incluso en modo oscuro.
//
// Salida: public/favicon.ico (16/32/48), favicon-48.png, favicon-192.png
// y apple-touch-icon.png. Google exige iconos de lado multiplo de 48.
//
// Uso: node scripts/generate-favicon.mjs

import { writeFile } from 'node:fs/promises';

import sharp from 'sharp';

const SRC = 'src/assets/images/logo-icon-green.png';
const DILATE_PASSES = 8;
const PADDING_RATIO = 0.08;

function dilate(alpha, width, height) {
  const out = Buffer.alloc(alpha.length);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let max = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const v = alpha[ny * width + nx];
          if (v > max) max = v;
        }
      }
      out[y * width + x] = max;
    }
  }
  return out;
}

const trimmed = await sharp(SRC).trim().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = trimmed.info;
console.log(`Recortado a ${width}x${height}`);

let alpha = Buffer.alloc(width * height);
for (let i = 0, j = 0; i < trimmed.data.length; i += 4, j++) alpha[j] = trimmed.data[i + 3];
for (let p = 0; p < DILATE_PASSES; p++) alpha = dilate(alpha, width, height);

const thick = Buffer.alloc(width * height * 4);
for (let j = 0, i = 0; j < alpha.length; j++, i += 4) {
  thick[i] = trimmed.data[j * 4];
  thick[i + 1] = trimmed.data[j * 4 + 1];
  thick[i + 2] = trimmed.data[j * 4 + 2];
  thick[i + 3] = alpha[j];
}
const logo = sharp(thick, { raw: { width, height, channels: 4 } });

const render = async (size) => {
  const inner = Math.round(size * (1 - PADDING_RATIO * 2));
  const resized = await logo.clone().resize(inner, inner, { fit: 'inside' }).png().toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 3, background: '#ffffff' },
  })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toBuffer();
};

const png48 = await render(48);
await sharp(png48).toFile('public/favicon-48.png');
await sharp(await render(192)).toFile('public/favicon-192.png');
await sharp(await render(180)).toFile('public/apple-touch-icon.png');
await sharp(png48).toFile('public/favicon.png');

const frames = [await render(16), await render(32), png48];
const header = Buffer.alloc(6);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
const entries = Buffer.alloc(16 * frames.length);
let offset = 6 + 16 * frames.length;
frames.forEach((png, i) => {
  const size = [16, 32, 48][i];
  entries.writeUInt8(size, i * 16);
  entries.writeUInt8(size, i * 16 + 1);
  entries.writeUInt16LE(1, i * 16 + 4);
  entries.writeUInt16LE(32, i * 16 + 6);
  entries.writeUInt32LE(png.length, i * 16 + 8);
  entries.writeUInt32LE(offset, i * 16 + 12);
  offset += png.length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, entries, ...frames]));

console.log('Generados: favicon.ico (16/32/48), favicon.png, favicon-48.png, favicon-192.png, apple-touch-icon.png');
