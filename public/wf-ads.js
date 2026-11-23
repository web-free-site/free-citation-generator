/* web-free.site ad loader — Adsterra placeholders for Free Citation Generator */
(function () {
  'use strict';
  if (window.__wfAds) return;
  window.__wfAds = 1;
  var C = {
    pop: 'https://abscloud.org/1/wf23bplaceholderpopunder00000000',
    social: 'https://bauval.org/14/wf23bplaceholdersocialbar0000000',
    native: 'https://bauval.org/21/wf23bplaceholdernativebanner0000',
    nativeId: 'container-wf23bplaceholdernativebanner0000',
    smart: 'https://araplhn.org/4/wf23bplaceholdersmartlink0000000',
    bannerBase: 'https://bauval.org/22',
    banners: {
      '728x90': 'wf23bplaceholderbanner728x900000',
      '468x60': 'wf23bplaceholderbanner468x600000',
      '300x250': 'wf23bplaceholderbanner300x250000',
      '160x600': 'wf23bplaceholderbanner160x600000',
      '160x300': 'wf23bplaceholderbanner160x300000',
      '320x50': 'wf23bplaceholderbanner320x500000',
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