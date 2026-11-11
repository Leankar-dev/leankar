/**
 * js/i18n.js — motor de internacionalização.
 * As strings estão em core/strings.js (const TRANSLATIONS), carregado antes deste arquivo.
 */

// ── ENGINE ────────────────────────────────────────────────────────────────────

const SUPPORTED_LANGS = ['pt', 'en', 'es'];
const DEFAULT_LANG = 'pt';

function detectLang() {
  let stored = null;
  try {
    stored = localStorage.getItem('lang');
  } catch { /* localStorage bloqueado (ex.: navegação privada) — segue sem persistência */ }
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
  if (browser === 'es') return 'es';
  if (browser === 'en') return 'en';
  return DEFAULT_LANG;
}

const OG_LOCALES = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };

function applyLang(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  window.currentLang = lang; // exposto para o script inline do form de contato em index.html
  try {
    localStorage.setItem('lang', lang);
  } catch { /* localStorage bloqueado — idioma não persiste entre páginas, mas a troca ainda funciona */ }

  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', OG_LOCALES[lang]);

  // Textos (innerHTML — algumas chaves carregam markup como <strong> ou <span>)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = TRANSLATIONS[key]?.[lang];
    if (translation !== undefined) el.innerHTML = translation;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const translation = TRANSLATIONS[key]?.[lang];
    if (translation !== undefined) el.placeholder = translation;
  });

  // aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    const translation = TRANSLATIONS[key]?.[lang];
    if (translation !== undefined) el.setAttribute('aria-label', translation);
  });

  // alt (usado no badge "Disponível no Google Play")
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.dataset.i18nAlt;
    const translation = TRANSLATIONS[key]?.[lang];
    if (translation !== undefined) el.alt = translation;
  });

  // Atualizar estado visual do seletor
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });

  // Blocos de conteúdo com versão própria por idioma (ex.: corpo dos artigos do blog, privacy.html)
  document.querySelectorAll('[data-lang-block]').forEach(el => {
    el.hidden = el.dataset.langBlock !== lang;
  });
}

function initI18n() {
  // Páginas com texto pré-gerado (uma URL por idioma: /, /en/, /es/) trazem data-static-lang no <html>: não há o que traduzir aqui.
  if (document.documentElement.hasAttribute('data-static-lang')) return;
  const lang = detectLang();
  applyLang(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
