/* web-free.site ad loader — Adsterra placeholders for Free Citation Generator */
(function () {
  'use strict';
  if (window.__wfAds) return;
  window.__wfAds = 1;
  var C = {
    pop: 'https://abscloud.org/1/1c5970b4cf6a4ce6a7f3039ec245f17a',
    social: 'https://bauval.org/14/92692dd4566f0d52f887b468727a184c',
    native: 'https://bauval.org/21/7d75a632988635699f3e1e876710ac07',
    nativeId: 'container-7d75a632988635699f3e1e876710ac07',
    smart: 'https://araplhn.org/4/53091ffbbffbaf6f484efb13eadd02a7',
    bannerBase: 'https://bauval.org/22',
    banners: {
      '728x90': '00082d50aeee202e60c6ae2ef3c4d565',
      '468x60': '2b1b84e55b44045553a5bf4989c221bd',
      '300x250': '302879cbb74d9e08031e98bbd3788e73',
      '160x600': 'da72f6dd3c3ca80fe92bd84a3e9b0919',
      '160x300': '7cde566718605566cdf523e89898addf',
      '320x50': '28b3425761f86d7c2111591e84fa85d3',
    },
  };
  var d = document;
  var html = (d.body ? d.body.innerHTML : '') + [].map.call(d.scripts, function (s) { return s.src || ''; }).join(' ');
  function has(k) { return html.indexOf(k) > -1; }
  function addScript(src, parent) {
    if (has(src)) return;
    var s = d.createElement('script');
    s.src = src;
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    (parent || d.body).appendChild(s);
  }
  function banner(size) {
    var k = C.banners[size];
    if (!k) return null;
    var wh = size.split('x'), w = +wh[0], h = +wh[1];
    var box = d.createElement('div');
    box.className = 'wf-ad wf-ad-' + size;
    box.setAttribute('aria-label', 'Advertisement');
    box.style.cssText = 'margin:1.25rem auto;text-align:center;max-width:100%;overflow:hidden';
    var f = d.createElement('iframe');
    f.title = 'Advertisement';
    f.width = w;
    f.height = h;
    f.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation');
    f.style.cssText = 'border:0;display:block;margin:0 auto;max-width:100%';
    f.srcdoc =
      '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0">' +
      "<script>atOptions={'key':'" +
      k +
      "','format':'iframe','height':" +
      h +
      ",'width':" +
      w +
      ",'params':{}};</scr" +
      'ipt><script src="' +
      C.bannerBase +
      '/' +
      k +
      '"></scr' +
      'ipt></body></html>';
    box.appendChild(f);
    return box;
  }
  function run() {
    var vw = window.innerWidth || 1024;
    var root = d.querySelector('article') || d.querySelector('main') || d.body;
    var h1 = root.querySelector('h1');
    var topSize = vw >= 780 ? '728x90' : vw >= 500 ? '468x60' : '320x50';
    var top = banner(topSize);
    if (top && h1 && h1.parentNode) h1.parentNode.insertBefore(top, h1.nextSibling);
    if (!has(C.nativeId)) {
      var nb = d.createElement('div');
      nb.className = 'wf-ad-native';
      nb.style.margin = '1.5rem 0';
      var nc = d.createElement('div');
      nc.id = C.nativeId;
      nb.appendChild(nc);
      root.appendChild(nb);
      addScript(C.native, nb);
    }
    var b3 = banner('300x250');
    if (b3) root.appendChild(b3);
    addScript(C.social, d.body);
    addScript(C.pop, d.body);
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', run);
  else run();
})();