import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const dist = path.resolve('dist');
const require = createRequire(import.meta.url);

function fail(msg) {
  console.error('VERIFY FAIL:', msg);
  process.exit(1);
}

if (!fs.existsSync(path.join(dist, 'index.html'))) fail('dist/index.html missing');

const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (/googlesyndication|adsbygoogle/i.test(html)) fail('AdSense still present in index.html');
if (!html.includes('Free Citation Generator')) fail('Branding missing');
if (!html.includes('wf-more-tools')) fail('More-tools block not injected');

const pages = [
  'apa-citation-generator',
  'mla-citation-generator',
  'chicago-citation-generator',
  'privacy',
  'terms',
  'about',
  'contact',
];
for (const p of pages) {
  const f = path.join(dist, p, 'index.html');
  if (!fs.existsSync(f)) fail('Missing page ' + p);
}

// Citation engine smoke test in jsdom
let JSDOM;
try {
  JSDOM = require('jsdom').JSDOM;
} catch {
  console.log('jsdom not installed; skipping engine smoke test');
  console.log('VERIFY OK (partial)');
  process.exit(0);
}

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', { url: 'https://example.com/' });
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = dom.window.localStorage;

const engineSrc = fs.readFileSync(path.join(dist, 'assets/js/engine.js'), 'utf8');
const i18nSrc = fs.readFileSync(path.join(dist, 'assets/js/i18n.js'), 'utf8');
dom.window.eval(i18nSrc);
dom.window.eval(engineSrc);

const meta = {
  type: 'article-journal',
  title: 'Deep learning',
  author: [{ family: 'LeCun', given: 'Y.' }],
  issued: { 'date-parts': [[2015]] },
  'container-title': 'Nature',
  volume: '521',
  DOI: '10.1038/nature14539',
};

const apa = dom.window.CiteEngine.format(meta, 'apa7', 'en').text;
const mla = dom.window.CiteEngine.format(meta, 'mla9', 'en').text;
if (!apa || apa.length < 20) fail('APA format empty');
if (!mla || mla.length < 20) fail('MLA format empty');

const bib = dom.window.CiteEngine.bibtex(meta);
if (!bib.includes('@')) fail('BibTeX export failed');

console.log('APA sample:', String(apa).slice(0, 80) + '…');
console.log('MLA sample:', String(mla).slice(0, 80) + '…');
console.log('VERIFY OK');