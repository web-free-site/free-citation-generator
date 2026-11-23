import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');

function copyRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    if (name === 'node_modules' || name === '.git') continue;
    const from = path.join(src, name);
    const to = path.join(dest, name);
    const st = fs.statSync(from);
    if (st.isDirectory()) copyRecursive(from, to);
    else fs.copyFileSync(from, to);
  }
}

if (fs.existsSync(root)) fs.rmSync(root, { recursive: true, force: true });
fs.mkdirSync(root, { recursive: true });
copyRecursive(path.resolve('site'), root);
copyRecursive(path.resolve('public'), root);

await import('./prerender-pages.mjs');
await import('./generate-sitemap.mjs');
await import('./inject-more-tools.mjs');
console.log('Build complete → dist/');