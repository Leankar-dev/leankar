/**
 * js/lang.js — idioma das páginas com texto pré-gerado (uma URL por idioma: /, /en/, /es/).
 * 1) window.currentLang = idioma do <html lang> ("pt-BR" → "pt"), usado por js/contact-form.js.
 * 2) Ao clicar no seletor de idioma, guarda a escolha em localStorage.lang — assim as páginas
 *    que ainda usam js/i18n.js (troca por JavaScript) abrem no mesmo idioma.
 * 3) Faixa opcional (sem redirecionar): se o navegador está em inglês ou espanhol e a página está em outro idioma, oferece o link
 *    para a versão no idioma do navegador. Dispensável (lembrada), não aparece para robôs nem para quem já escolheu pelo seletor.
 * Não troca nenhum texto da página: o HTML já vem traduzido.
 */
(function () {
  'use strict';

  var htmlLang = (document.documentElement.lang || 'pt').slice(0, 2).toLowerCase();
  window.currentLang = ['pt', 'en', 'es'].indexOf(htmlLang) >= 0 ? htmlLang : 'pt';

  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest ? e.target.closest('.lang-btn') : null;
    if (!link) return;
    var lang = (link.getAttribute('hreflang') || link.getAttribute('lang') || '').slice(0, 2).toLowerCase();
    if (['pt', 'en', 'es'].indexOf(lang) < 0) return;
    try {
      localStorage.setItem('lang', lang);
    } catch (err) { /* localStorage bloqueado (ex.: navegação privada): a navegação por link continua funcionando */ }
  });

  // ── faixa opcional de idioma ──
  var TEXTOS = {
    en: { msg: 'This page is also available in English.', link: 'View in English', fechar: 'Dismiss', rotulo: 'Language suggestion' },
    es: { msg: 'Esta página también está disponible en español.', link: 'Ver en español', fechar: 'Cerrar', rotulo: 'Sugerencia de idioma' }
  };
  function guardado(k) { try { return localStorage.getItem(k); } catch (err) { return null; } }
  function faixa() {
    if (/bot|crawl|spider|slurp|lighthouse|headlesschrome|mediapartners/i.test(navigator.userAgent || '')) return; // robôs não veem a faixa
    var nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (!TEXTOS[nav] || nav === window.currentLang) return;
    if (guardado('lang') || guardado('langBannerOff')) return; // já escolheu o idioma pelo seletor ou dispensou a faixa
    var alt = document.querySelector('link[rel="alternate"][hreflang="' + nav + '"]');
    if (!alt || !document.body) return;
    var destino;
    try { destino = new URL(alt.href).pathname + location.hash; } catch (err) { return; }
    var t = TEXTOS[nav];
    var box = document.createElement('div');
    box.className = 'lang-banner';
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', t.rotulo);
    box.lang = nav;
    var txt = document.createElement('span');
    txt.textContent = t.msg;
    var a = document.createElement('a');
    a.href = destino;
    a.hreflang = nav;
    a.textContent = t.link;
    a.addEventListener('click', function () { try { localStorage.setItem('lang', nav); } catch (err) { /* ok */ } });
    var x = document.createElement('button');
    x.type = 'button';
    x.setAttribute('aria-label', t.fechar);
    x.textContent = '×';
    x.addEventListener('click', function () {
      try { localStorage.setItem('langBannerOff', '1'); } catch (err) { /* ok */ }
      box.remove();
    });
    box.appendChild(txt);
    box.appendChild(a);
    box.appendChild(x);
    document.body.appendChild(box);
  }
  faixa();
})();
