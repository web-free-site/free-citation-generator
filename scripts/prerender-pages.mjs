import fs from 'node:fs';
import path from 'node:path';

const HOST = 'https://free-citation-generator.web-free.site';
const dist = path.resolve('dist');

const PAGES = [
  {
    slug: 'apa-citation-generator',
    title: 'Free APA Citation Generator — APA 7th Edition',
    description:
      'Generate APA 7th edition citations for journal articles, books, and websites. Paste a DOI or enter fields manually — free in your browser.',
    h1: 'APA citation generator (APA 7)',
    body: `<p>Use our <a href="/">Free Citation Generator</a> with <strong>APA 7</strong> selected to format references for psychology, education, nursing, and social-science papers. Paste a DOI or ISBN for autocomplete, or expand <strong>fill in the details manually</strong> to type authors, title, year, and journal.</p>
<ul><li>In-text citations and reference list entries follow APA 7 conventions.</li><li>Include DOI or URL when available.</li><li>Export BibTeX or RIS for Zotero and LaTeX.</li></ul>
<p><a class="btn btn--primary" href="/">Open the citation tool</a></p>`,
    faq: [
      { q: 'What is APA 7?', a: 'APA 7 is the current American Psychological Association style for student and professional papers.' },
      { q: 'Does this APA generator store my sources?', a: 'No. Your library stays in browser local storage only.' },
    ],
  },
  {
    slug: 'mla-citation-generator',
    title: 'Free MLA Citation Generator — MLA 9th Edition',
    description:
      'Create MLA 9 works-cited entries for humanities papers. Free MLA citation generator in your browser with BibTeX export.',
    h1: 'MLA citation generator (MLA 9)',
    body: `<p>Choose <strong>MLA 9</strong> in the <a href="/">Free Citation Generator</a> for literature, languages, and humanities assignments. Lookup by DOI or title, or enter details manually.</p>
<ul><li>Works cited list formatting aligned with MLA 9.</li><li>Container titles and DOIs when relevant.</li><li>Copy with formatting for Word or Google Docs.</li></ul>
<p><a class="btn btn--primary" href="/">Open the citation tool</a></p>`,
    faq: [
      { q: 'MLA 8 vs MLA 9?', a: 'This tool targets MLA 9, the edition most instructors require today.' },
      { q: 'Can I export to Zotero?', a: 'Use the RIS export button on any generated citation.' },
    ],
  },
  {
    slug: 'chicago-citation-generator',
    title: 'Free Chicago Citation Generator — Notes & Bibliography',
    description:
      'Build Chicago-style bibliography entries for history and publishing. Free browser tool with manual entry and DOI lookup.',
    h1: 'Chicago citation generator',
    body: `<p>History and art-history papers often use <strong>Chicago</strong>. Select Chicago in our <a href="/">main generator</a>, paste a DOI, or fill the manual form for books, chapters, and web pages.</p>
<ul><li>Bibliography-style reference list output.</li><li>Publisher, place, and edition fields for books.</li><li>Always verify against your instructor’s Chicago variant.</li></ul>
<p><a class="btn btn--primary" href="/">Open the citation tool</a></p>`,
    faq: [
      { q: 'Author-date or notes?', a: 'CiteFast engine formats bibliography entries; confirm which Chicago system your course uses.' },
      { q: 'Is Chicago the same as Turabian?', a: 'Turabian is a student adaptation of Chicago — check your syllabus.' },
    ],
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy — Free Citation Generator',
    description: 'How Free Citation Generator handles data, lookups, advertising, and browser storage.',
    h1: 'Privacy Policy',
    body: `<p class="updated">Last updated: 23 November 2026</p>
<section><h2>Summary</h2><p class="highlight"><strong>We do not collect personal data.</strong> The tool runs in your browser. Saved references stay in local storage on your device.</p></section>
<section><h2>What we store</h2><ul><li>Citation library and preferences in your browser (localStorage) only.</li><li>We have no accounts and no server database of your bibliographies.</li></ul></section>
<section><h2>Third-party lookups</h2><p>When you search by DOI, ISBN, title, PMID, or similar, your query is sent to public APIs that may include Crossref, OpenAlex, doi.org, Open Library, NCBI PubMed, and Google Books. Each service has its own privacy policy. We do not send your full library to any server.</p></section>
<section><h2>Advertising</h2><p>The site may show ads from Adsterra. Ad partners may use cookies. You can control cookies in your browser settings.</p></section>
<section><h2>Analytics</h2><p>We use Cloudflare Web Analytics (privacy-oriented, no third-party ad cookies from that beacon).</p></section>
<section><h2>Contact</h2><p>Questions: see our <a href="/contact/">contact page</a>.</p></section>`,
  },
  {
    slug: 'terms',
    title: 'Terms of Use — Free Citation Generator',
    description: 'Terms for using the free academic citation generator at free-citation-generator.web-free.site.',
    h1: 'Terms of Use',
    body: `<p class="updated">Last updated: 23 November 2026</p>
<section><h2>Use of the tool</h2><p>Free Citation Generator is provided as-is for educational reference formatting. You are responsible for checking citations against your institution’s style guide.</p></section>
<section><h2>No warranty</h2><p>We do not guarantee that every field or punctuation mark matches your publisher’s requirements. Metadata from lookup APIs can contain errors.</p></section>
<section><h2>License</h2><p>The citation engine is based on <a href="https://github.com/gabotonatiu/citefast" rel="noopener" target="_blank">CiteFast</a> (MIT). This site adds branding, hosting, and supporting pages.</p></section>`,
  },
  {
    slug: 'about',
    title: 'About — Free Citation Generator',
    description: 'About this free APA, MLA, and Chicago citation tool and its open-source roots.',
    h1: 'About Free Citation Generator',
    body: `<p>Free Citation Generator helps students and researchers build APA 7, MLA 9, Chicago, IEEE, Vancouver, and ABNT references in the browser — no signup, no uploads of your bibliography.</p>
<p>It is powered by <strong>CiteFast</strong>, an MIT-licensed project by <a href="https://github.com/gabotonatiu/citefast" target="_blank" rel="noopener">Gabriel Tonatiu Andrade</a>. We gratefully credit that upstream work.</p>
<p>This edition is part of the <a href="https://web-free.site/?ref=citation-generator">web-free.site</a> family of free browser tools.</p>
<p><a class="btn btn--primary" href="/">Try the generator</a></p>`,
  },
  {
    slug: 'contact',
    title: 'Contact — Free Citation Generator',
    description: 'How to reach the team behind Free Citation Generator.',
    h1: 'Contact',
    body: `<p>Free Citation Generator is operated as part of web-free.site. For privacy or terms questions, review the <a href="/privacy/">Privacy Policy</a> and <a href="/terms/">Terms</a>.</p>
<p>For hub-wide inquiries, visit <a href="https://web-free.site/?ref=citation-generator">web-free.site</a>.</p>
<p>Upstream open-source project: <a href="https://github.com/gabotonatiu/citefast" target="_blank" rel="noopener">gabotonatiu/citefast</a>.</p>`,
  },
];

function faqJsonLd(items) {
  if (!items || !items.length) return '';
  return `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((x) => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.a },
    })),
  })}</script>`;
}

function shell(page) {
  const url = HOST + '/' + page.slug + '/';
  const faq = faqJsonLd(page.faq);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description.replace(/"/g, '&quot;')}">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Free Citation Generator">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description.replace(/"/g, '&quot;')}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${HOST}/assets/og-image.svg">
  <meta name="robots" content="index, follow">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <style>
    .legal-page { max-width: 760px; margin: 0 auto; }
    .legal-page h1 { font-size: clamp(26px, 4vw, 36px); margin: 12px 0 8px; }
    .legal-page p, .legal-page li { color: var(--text-soft); line-height: 1.65; }
    .legal-page .updated { color: var(--text-mute); font-size: 13px; }
    .site-nav { display: flex; flex-wrap: wrap; gap: 12px; margin: 0 0 1.5rem; font-size: 14px; }
    .site-nav a { color: var(--accent); }
  </style>
  ${faq}
  <script src="https://ref.web-free.site/r.js" defer></script>
</head>
<body>
  <header class="topbar">
    <div class="wrap topbar__inner">
      <a class="brand" href="/">
        <span class="brand__mark" aria-hidden="true">❝</span>
        <span class="brand__name">Free <b>Citation</b></span>
      </a>
      <a class="btn btn--ghost btn--sm" href="/">← Tool</a>
    </div>
  </header>
  <main class="wrap main legal-page article">
    <nav class="site-nav" aria-label="Site">
      <a href="/apa-citation-generator/">APA</a>
      <a href="/mla-citation-generator/">MLA</a>
      <a href="/chicago-citation-generator/">Chicago</a>
      <a href="/about/">About</a>
      <a href="/privacy/">Privacy</a>
    </nav>
    <h1>${page.h1}</h1>
    ${page.body}
  </main>
  <footer class="footer">
    <div class="wrap footer__inner">
      <p>Based on <a href="https://github.com/gabotonatiu/citefast" target="_blank" rel="noopener">CiteFast</a> (MIT) by Gabriel Tonatiu Andrade ·
      <a href="https://web-free.site/?ref=citation-generator">More free tools</a></p>
    </div>
  </footer>
  <script src="/assets/js/wf-ads.js" defer></script>
</body>
</html>`;
}

for (const page of PAGES) {
  const dir = path.join(dist, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), shell(page));
}
console.log('Prerendered', PAGES.length, 'pages');