import sharp from 'sharp';
import path from 'node:path';

const files = [
  { file: 'src/assets/images/logo-icon.png', passes: 2 },
  { file: 'src/assets/images/logo-main.png', passes: 2 },
];

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

for (const { file, passes } of files) {
  const input = path.resolve(file);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  let alpha = Buffer.alloc(width * height);
  for (let i = 0, j = 0; i < data.length; i += 4, j++) alpha[j] = data[i + 3];

  for (let p = 0; p < passes; p++) alpha = dilate(alpha, width, height);

  const out = Buffer.alloc(width * height * 4);
  for (let j = 0, i = 0; j < alpha.length; j++, i += 4) {
    out[i] = 0;
    out[i + 1] = 0;
    out[i + 2] = 0;
    out[i + 3] = alpha[j];
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(input);

  console.log(file, `trazo engordado (${passes} pasadas)`);
}
