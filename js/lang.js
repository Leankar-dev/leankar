/**
 * js/lang.js — idioma das páginas com texto pré-gerado (uma URL por idioma: /, /en/, /es/).
 * 1) window.currentLang = idioma do <html lang> ("pt-BR" → "pt"), usado por js/contact-form.js.
 * 2) Ao clicar no seletor de idioma, guarda a escolha em localStorage.lang — assim as páginas
 *    que ainda usam js/i18n.js (troca por JavaScript) abrem no mesmo idioma.
 * Não troca nenhum texto: o HTML já vem traduzido.
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
})();
