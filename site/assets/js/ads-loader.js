/* Free Citation Generator — Adsterra slots via ads.json (isolated banner iframes). */
(function () {
  'use strict';
  if (window.__wfCitationAds) return;
  window.__wfCitationAds = 1;

  const DEFAULT_BANNER_BASE = 'https://bauval.org/22';

  function injectScript(src, marker, parent) {
    if (!src || document.querySelector('script[data-ad="' + marker + '"]')) return;
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    s.setAttribute('data-ad', marker);
    (parent || document.body).appendChild(s);
  }

  function bannerSrcDoc(key, w, h, base) {
    const at = JSON.stringify({ key, format: 'iframe', height: h, width: w, params: {} });
    const src = base.replace(/\/$/, '') + '/' + key;
    return (
      '<!DOCTYPE html><html><head><meta charset="utf-8"></head>' +
      '<body style="margin:0;padding:0;overflow:hidden;background:transparent">' +
      '<script>var atOptions = ' +
      at +
      ';</script><script src="' +
      src +
      '"><\/script></body></html>'
    );
  }

  function mountBanner(def, base, label) {
    const aside = document.createElement('aside');
    aside.className = 'wf-ad wf-ad-banner';
    aside.setAttribute('aria-label', label || 'Advertisement');
    const f = document.createElement('iframe');
    f.title = label || 'Advertisement';
    f.width = def.width;
    f.height = def.height;
    f.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms');
    f.style.cssText =
      'border:0;display:block;margin:0 auto;max-width:100%;width:' + def.width + 'px;height:' + def.height + 'px';
    f.srcdoc = bannerSrcDoc(def.key, def.width, def.height, base);
    f.loading = 'lazy';
    aside.appendChild(f);
    return aside;
  }

  function pickTopBanner(cfg, vw) {
    const name = vw >= 780 ? 'banner728x90' : vw >= 500 ? 'banner468x60' : 'banner320x50';
    return cfg.banners && cfg.banners[name];
  }

  function run(cfg) {
    if (!cfg || !cfg.enabled) return;
    const base = cfg.bannerScriptBase || DEFAULT_BANNER_BASE;
    const vw = window.innerWidth || 1024;

    if (cfg.socialBar) injectScript(cfg.socialBar, 'social-bar', document.body);
    if (cfg.popunder) injectScript(cfg.popunder, 'popunder', document.head);

    const hero = document.querySelector('.hero');
    const topDef = pickTopBanner(cfg, vw);
    if (hero && topDef) {
      const top = mountBanner(topDef, base, 'Advertisement');
      top.style.margin = '1rem 0';
      const search = document.querySelector('.searchbox');
      if (search && search.parentNode) search.parentNode.insertBefore(top, search.nextSibling);
    }

    const native = cfg.nativeBanner;
    if (native && native.src && native.containerId) {
      const slot = document.querySelector('#ad-native-slot');
      if (slot) {
        const inner = document.createElement('div');
        inner.id = native.containerId;
        slot.appendChild(inner);
        injectScript(native.src, 'native-' + native.containerId, slot);
      }
    }

    const preview = document.querySelector('#previewCard');
    const mid = cfg.banners && cfg.banners.banner300x250;
    if (preview && mid && !preview.classList.contains('is-empty')) {
      const b = mountBanner(mid, base, 'Advertisement');
      b.style.margin = '1rem 0';
      preview.appendChild(b);
    }

    if (cfg.smartlink && cfg.smartlink.url) {
      const p = document.createElement('p');
      p.className = 'wf-sponsored';
      p.style.cssText = 'font-size:.8rem;opacity:.75;text-align:center;margin:1rem 0';
      const a = document.createElement('a');
      a.href = cfg.smartlink.url;
      a.target = '_blank';
      a.rel = 'sponsored nofollow noopener';
      a.textContent = cfg.smartlink.label || 'Sponsored';
      p.appendChild(a);
      const lib = document.querySelector('.lib');
      if (lib) lib.parentNode.insertBefore(p, lib);
    }
  }

  fetch('/ads.json')
    .then((r) => r.json())
    .then(run)
    .catch(() => {});
})();