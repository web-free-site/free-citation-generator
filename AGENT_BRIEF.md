# Cursor agent brief — free-citation-generator

Target: https://free-citation-generator.web-free.site
Repo name (wrangler `name`): `free-citation-generator`
English name: "Free Citation Generator". English primary.

Follow every rule in the attached `agent-brief-common.md`, with one SEO override below. Do not write the tool from scratch. Do not deploy. Do not switch models. Push to `main` of this repo when the work is done.

**SEO / language override (takes precedence over the common brief):** do **not** add a French or Swahili landing page, UI translation, or how-to pages. How-to and legal pages are English only. You may omit `hreflang` fr.

This is an **APA / MLA / Chicago** (and similar) academic citation generator. Users enter a source manually, or optionally look up a DOI/ISBN/title via a **free, no-key** public API, and copy a formatted citation plus BibTeX. No accounts.

## Recommended base (use this)

- Repo: https://github.com/gabotonatiu/citefast
- License: MIT (keep `LICENSE`, credit CiteFast / Gabriel Tonatiu Andrade in the footer and on `/about`)
- Stars: 0
- Last commit: 21 Jul 2026, 03:02 Africa/Kigali — `51502b879f` on `main`
- Official demo: `https://citefast.app`
- Stack: a complete static site (`index.html`, no Node server): paste a DOI, ISBN, URL or title; format APA 7, MLA 9, Chicago, IEEE, Vancouver, ABNT; export BibTeX / RIS / CSL-JSON. Optional lookups use public no-key APIs (Crossref, OpenAlex). **Remove AdSense** (the upstream loads `pagead2.googlesyndication.com`). **English only** — drop or do not ship ES/PT/FR/DE UI. If any Google API requires a key, remove that lookup path; keep manual entry and no-key Crossref/OpenAlex/Open Library only.
- Cloudflare: yes — static assets / Workers with assets. You must add prerendered HTML for every public page (no bare SPA fallback).
- Verification (this box, 23 Nov 2026, Africa/Kigali): GitHub API. `LICENSE` is a real MIT file (Copyright (c) 2026 Gabriel Tonatiu Andrade). No `package.json`; no backend in the repo. The HTML references Crossref, OpenAlex, doi.org, and a Google endpoint plus AdSense — strip AdSense and any keyed Google call.
- Why this one: MIT with a real `LICENSE` file, a complete static citation product (not just a library), and the exact APA/MLA/Chicago scope users search for.

## Backup (MIT; also a static PWA)

- Repo: https://github.com/IchigoSky21/generate-citation
- License: MIT (LICENSE file, Copyright (c) 2026 IchigoSky21)
- Stars: 1
- Last commit: 28 Sep 2026, 06:58 Africa/Kigali — `08b1b64d9e` on `main`
- Official demo: `https://generate-sitation-app.vercel.app`
- Vanilla HTML/JS PWA: DOI lookup, IEEE and APA, project list. Inspect for any backend or API keys before adopting; keep it static and English only.

Second backup (library, not a complete site): https://github.com/larsgw/citation.js — MIT (`LICENSE.md`), 243 stars, last commit 18 Sep 2026, 17:07 Africa/Kigali, `50c0e00f18`, demo `https://citation.js.org/`. Use only as a dependency if both complete sites fail.

## Do not use these

- Citation tools that require an API key, a paid academic API, or a server.
- Browser extensions, CLI tools, or AO3-only userscripts.
- Any site that ships AdSense or another ad network besides the Adsterra units in this brief.

## What to build on top of gabotonatiu/citefast

1. Import the base into this repo, keep the MIT license, and credit CiteFast / Gabriel Tonatiu Andrade. Omit GitHub Actions workflows if any (the token lacks the `workflow` scope — do not restore them).
2. Rebrand to "Free Citation Generator". English primary. No FR/SW translations of the site. The home tool generates APA 7 (default), MLA 9, and Chicago citations, with IEEE/Vancouver/ABNT acceptable as extra styles. Manual form entry must work fully offline. DOI/ISBN/title lookup may use only free no-key APIs. Copy and BibTeX export must work. Remove AdSense and any third-party analytics.
3. Keep everything 100% usable in the browser. No accounts, no paid APIs, no API keys. Do not upload user bibliographies to a server.
4. Adsterra only, never AdSense. Use **only** the placeholder keys in this brief (or real keys if a follow-up provides them). Follow the `free-invoice-generator` pattern: all 10 units, banners in isolated iframes, `public/ads.json`. Never set COEP/COOP headers. Ads must not break copy/export.
5. SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical, OG; JSON-LD (WebApplication + FAQPage); `sitemap.xml` and `robots.txt` for `https://free-citation-generator.web-free.site`; English how-to pages, at least `/apa-citation-generator`, `/mla-citation-generator`, and `/chicago-citation-generator` (each with its own title, description and canonical); prerendered `/privacy`, `/terms`, `/about`, `/contact`. Canonicals must be `https://free-citation-generator.web-free.site`. No French landing page.
6. Footer: credit the upstream project, and add a link back to the hub `https://web-free.site/?ref=citation-generator`.
7. On every prerendered HTML page, before `</body>`, add the More free tools block and the Cloudflare Web Analytics beacon (see below). Implement this with `scripts/inject-more-tools.mjs` hooked into `postbuild` or the end of `npm run build`, so a later rebuild cannot drop the home-page snippets. Do not rely on a one-off manual edit of `dist/` / `out/`.
   - The same **"More free tools"** block used on the other web-free.site tools (`id="wf-more-tools"`). Include a "Guides on this site" column for the how-to pages. List every current hub tool, plus the nine other sites in this batch (50 tools in total). Show **Free Citation Generator** as bold text, not a self-link. Every outbound tool/hub link must carry `?ref=citation-generator`.
     - **Documents & writing:** Free Word Counter (`https://free-word-counter.web-free.site/?ref=citation-generator`), Free PDF Converter (`https://free-pdf-converter.web-free.site/?ref=citation-generator`), Free CV Maker (`https://free-cv-maker.web-free.site/?ref=citation-generator`), Free Invoice Generator (`https://free-invoice-generator.web-free.site/?ref=citation-generator`), Free Typing Test (`https://free-typing-test.web-free.site/?ref=citation-generator`), Free Signature Generator (`https://free-signature-generator.web-free.site/?ref=citation-generator`), Free Email Signature Generator (`https://free-email-signature-generator.web-free.site/?ref=citation-generator`).
     - **Images & codes:** Free QR Code Creator (`https://free-qr-code-creator.web-free.site/?ref=citation-generator`), Free Image Resizer (`https://free-image-resizer.web-free.site/?ref=citation-generator`), Free Image to Text (`https://free-image-to-text.web-free.site/?ref=citation-generator`), Free Background Remover (`https://free-background-remover.web-free.site/?ref=citation-generator`), Free Image Compressor (`https://free-image-compressor.web-free.site/?ref=citation-generator`), Free HEIC to JPG Converter (`https://free-heic-to-jpg.web-free.site/?ref=citation-generator`), Free Image Upscaler (`https://free-image-upscaler.web-free.site/?ref=citation-generator`), Free Passport Photo Maker (`https://free-passport-photo-maker.web-free.site/?ref=citation-generator`), Free PNG to SVG Converter (`https://free-png-to-svg.web-free.site/?ref=citation-generator`), Free Meme Generator (`https://free-meme-generator.web-free.site/?ref=citation-generator`), Free Color Picker (`https://free-color-picker.web-free.site/?ref=citation-generator`), Free GIF Maker (`https://free-gif-maker.web-free.site/?ref=citation-generator`), Free Photo Editor (`https://free-photo-editor.web-free.site/?ref=citation-generator`), Free Logo Maker (`https://free-logo-maker.web-free.site/?ref=citation-generator`).
     - **Calculators & currency:** Free Online Calculator (`https://free-online-calculator.web-free.site/?ref=citation-generator`), Free Currency Converter (`https://free-currency-converter.web-free.site/?ref=citation-generator`), Free Unit Converter (`https://free-unit-converter.web-free.site/?ref=citation-generator`), Free Loan Calculator (`https://free-loan-calculator.web-free.site/?ref=citation-generator`), Free Age Calculator (`https://free-age-calculator.web-free.site/?ref=citation-generator`), Free Percentage Calculator (`https://free-percentage-calculator.web-free.site/?ref=citation-generator`), Free BMI Calculator (`https://free-bmi-calculator.web-free.site/?ref=citation-generator`).
     - **Text & SEO:** Free AI Humanizer (`https://free-ai-humanizer.web-free.site/?ref=citation-generator`), Free SEO Generator (`https://free-seo-generator.web-free.site/?ref=citation-generator`), Free Backlink Generator (`https://free-backlink-generator.web-free.site/?ref=citation-generator`), Free JSON Formatter (`https://free-json-formatter.web-free.site/?ref=citation-generator`), Free Text to Speech (`https://free-text-to-speech.web-free.site/?ref=citation-generator`), Free Speech to Text (`https://free-speech-to-text.web-free.site/?ref=citation-generator`), Free Diff Checker (`https://free-diff-checker.web-free.site/?ref=citation-generator`), **Free Citation Generator**.
     - **Audio & video:** Free Video to MP3 Converter (`https://free-video-to-mp3.web-free.site/?ref=citation-generator`), Free MP3 Cutter (`https://free-mp3-cutter.web-free.site/?ref=citation-generator`), Free Screen Recorder (`https://free-screen-recorder.web-free.site/?ref=citation-generator`), Free Video Compressor (`https://free-video-compressor.web-free.site/?ref=citation-generator`), Free Video to GIF Converter (`https://free-video-to-gif.web-free.site/?ref=citation-generator`), Free Audio Converter (`https://free-audio-converter.web-free.site/?ref=citation-generator`), Free Video Converter (`https://free-video-converter.web-free.site/?ref=citation-generator`).
     - **Files:** Free ZIP Tool (`https://free-zip-tool.web-free.site/?ref=citation-generator`).
     - **Test data:** Free Fake Address Generator (`https://free-fake-address-generator.web-free.site/?ref=citation-generator`), Free Fake Name Generator (`https://free-fake-name-generator.web-free.site/?ref=citation-generator`).
     - **Security & passwords:** Free Password Generator (`https://free-password-generator.web-free.site/?ref=citation-generator`).
     - **Time:** Free Time Zone Converter (`https://free-time-zone-converter.web-free.site/?ref=citation-generator`).
     - **Drawing:** Free Whiteboard (`https://free-whiteboard.web-free.site/?ref=citation-generator`).
     - **Random & pickers:** Free Spin Wheel (`https://free-spin-wheel.web-free.site/?ref=citation-generator`).
   - The same Cloudflare Web Analytics tag used on the other sites: `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`
8. `wrangler.toml`: `name = "free-citation-generator"`, `[assets]` pointing at the static build output (`dist` or `out`). Use `html_handling = "auto-trailing-slash"` and `not_found_handling = "none"`. Custom domain `free-citation-generator.web-free.site`. **Do not put `account_id` (or API tokens) in the committed file.** **Do not deploy.** Push to this repo only. Deploy happens from Gentil's box. Add a `.assetsignore` so Worker assets do not publish `AGENT_BRIEF.md`, `wrangler.toml`, `package.json`, `package-lock.json`, `.git/`, `node_modules/`, or other source/config files.
9. Test: production build, run locally, generate an APA and an MLA citation from manual fields, copy them, export BibTeX, try one DOI lookup if a no-key API is still wired, check mobile at 390px, confirm AdSense is gone, fix bugs. Critique your own result and fix issues.
10. Push everything to `main`. Final report: base repo + license, which lookup APIs you kept, pages, tests and results, remaining caveats, commit hash.

## Adsterra ad codes

Real Adsterra codes are not ready yet (sites are not live). **Do not invent real-looking keys.** Wire all 10 units and `public/ads.json` with the exact placeholder strings below (32 characters each, prefix `wf23bplaceholder`). After a browser agent writes real keys to `adsterra-codes.md`, a later swap (or a follow-up to you with real keys) will replace them before deploy.

Code formats (KEY = the 32-char placeholder, later a 32-hex hash):
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-citation-generator.web-free.site — site ID SITE_ID_PENDING
Popunder wf23bplaceholderpopunder00000000
Native Banner wf23bplaceholdernativebanner0000
Smartlink wf23bplaceholdersmartlink0000000
Social Bar wf23bplaceholdersocialbar0000000
468x60 wf23bplaceholderbanner468x600000
160x300 wf23bplaceholderbanner160x300000
320x50 wf23bplaceholderbanner320x500000
300x250 wf23bplaceholderbanner300x250000
160x600 wf23bplaceholderbanner160x600000
728x90 wf23bplaceholderbanner728x900000
