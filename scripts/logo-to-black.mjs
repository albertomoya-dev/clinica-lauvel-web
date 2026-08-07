import sharp from 'sharp';
import path from 'node:path';

const files = [
  'src/assets/images/logo-icon.png',
  'src/assets/images/logo-main.png',
];

for (const file of files) {
  const input = path.resolve(file);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0, j = 0; i < data.length; i += 4, j += 4) {
    const a = data[i + 3];
    const boosted = a < 24 ? 0 : Math.min(255, Math.round(((a - 24) / (140 - 24)) * 255));
    out[j] = 0;
    out[j + 1] = 0;
    out[j + 2] = 0;
    out[j + 3] = boosted;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(input);

  console.log(file, 'negro solido aplicado');
}
