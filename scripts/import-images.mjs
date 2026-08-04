import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'C:\\Users\\Timonlia\\Downloads\\Kimi_Agent_Especificaciones web Clínica Monro\\app\\public\\images';
const DEST = path.resolve('src/assets/images');

await mkdir(DEST, { recursive: true });

const files = (await readdir(SRC)).filter((f) => f.endsWith('.jpg'));

for (const file of files) {
  const input = path.join(SRC, file);
  const img = sharp(input);
  const { width, height } = await img.metadata();
  const cropHeight = Math.round(height * 0.94);
  await img
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(DEST, file));
  console.log(`${file}: ${width}x${height} -> ${width}x${cropHeight}`);
}

console.log('Importadas', files.length, 'imágenes a', DEST);
