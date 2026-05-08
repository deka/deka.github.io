#!/usr/bin/env node
import sharp from 'sharp';
import { stat } from 'fs/promises';
import { resolve, dirname, basename } from 'path';
import { mkdirSync } from 'fs';

const args = process.argv.slice(2);
const inputPath = args[0];
const outputPath = args[1];

const maxWidth = parseInt(args.find(a => a.startsWith('--width='))?.split('=')[1] ?? '1920');
const quality = parseInt(args.find(a => a.startsWith('--quality='))?.split('=')[1] ?? '85');
const format = (args.find(a => a.startsWith('--format='))?.split('=')[1] ?? 'webp').toLowerCase();

if (!inputPath || !outputPath) {
  console.error('Usage: node .claude/skills/image-web/scripts/image-web.mjs <input> <output> [--width=1920] [--quality=85] [--format=webp|avif|jpeg|png]');
  process.exit(1);
}

async function main() {
  const input = resolve(inputPath);
  const output = resolve(outputPath);

  mkdirSync(dirname(output), { recursive: true });

  const inputStat = await stat(input);
  const inputSize = inputStat.size;

  let pipeline = sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .withMetadata(false);

  switch (format) {
    case 'webp':
      pipeline = pipeline.webp({ quality, effort: 4 });
      break;
    case 'avif':
      pipeline = pipeline.avif({ quality, effort: 4 });
      break;
    case 'jpeg':
    case 'jpg':
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
      break;
    case 'png':
      pipeline = pipeline.png({ compressionLevel: 9 });
      break;
    default:
      console.error(`Format inconnu : ${format}. Formats supportés : webp, avif, jpeg, png`);
      process.exit(1);
  }

  await pipeline.toFile(output);

  const outputStat = await stat(output);
  const outputSize = outputStat.size;
  const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
  const meta = await sharp(output).metadata();

  console.log(`✓ ${basename(input)} → ${basename(output)}`);
  console.log(`  ${(inputSize / 1024).toFixed(0)} Ko → ${(outputSize / 1024).toFixed(0)} Ko  (${savings > 0 ? '-' : '+'}${Math.abs(savings)}%)`);
  console.log(`  ${meta.width}×${meta.height}px | ${format.toUpperCase()} | qualité ${quality}`);
}

main().catch(err => {
  console.error('Erreur :', err.message);
  process.exit(1);
});
