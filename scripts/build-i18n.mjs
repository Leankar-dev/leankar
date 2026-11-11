#!/usr/bin/env node
// scripts/build-i18n.mjs — gerador das páginas por idioma (PT é a fonte; EN e ES são geradas).
// Node puro, ZERO dependências. Roda na máquina de quem edita; os arquivos gerados são commitados.
//
//   node scripts/build-i18n.mjs              escreve /en e /es e sincroniza as regiões gerenciadas das fontes PT
//   node scripts/build-i18n.mjs --check      não escreve; sai com código 1 se algo estiver desatualizado
//   node scripts/build-i18n.mjs --only apps/damas-evolution.html     só essa fonte
//   node scripts/build-i18n.mjs --identity   teste de identidade: com L=pt o texto visível tem de ser igual ao da fonte
//
// Escopo = páginas listadas em scripts/i18n/meta.json (<head> e JSON-LD em PT/EN/ES).
// Corpo = core/strings.js (atributos data-i18n, data-i18n-alt, data-i18n-aria, data-i18n-placeholder).
// Faltou tradução, JSON-LD sem classificação ou texto PT desatualizado no meta.json → o build FALHA e não escreve nada.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://leankar.dev';
const LANGS = ['en', 'es'];
const ALL = ['pt', 'en', 'es'];
const HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };
const OG_LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
const SEL_LABEL = { pt: 'PT', en: 'EN', es: 'ES' };
const RESOURCE_RE = /^(?:\.\.\/)*(assets|css|js|core)\//;
const ROOT_DIRS = new Set(['assets', 'css', 'js', 'core', 'scripts', 'en', 'es']);

// ───────────────────────── utilidades de texto/HTML ─────────────────────────
const decode = s => s
  .replace(/&nbsp;/g, '\u00a0').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&amp;/g, '&');
const encAttr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const encText = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const norm = s => s.replace(/\s+/g, ' ').trim();
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function readSource(rel) {
  const buf = fs.readFileSync(path.join(ROOT, rel));
  const bom = buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf;
  const raw = buf.slice(bom ? 3 : 0).toString('utf8');
  return { text: raw.replace(/\r\n/g, '\n'), eol: raw.includes('\r\n') ? '\r\n' : '\n', bom };
}
const serialize = (text, { eol, bom }) => Buffer.concat([bom ? Buffer.from([0xef, 0xbb, 0xbf]) : Buffer.alloc(0), Buffer.from(eol === '\r\n' ? text.replace(/\n/g, '\r\n') : text, 'utf8')]);

// Atributos dentro do texto de uma tag de abertura (aspas duplas; valores podem ter quebras de linha).
const attrRe = name => new RegExp(`(?:^|\\s)${escRe(name)}\\s*=\\s*"([^"]*)"`);
const getAttr = (tag, name) => { const m = attrRe(name).exec(tag); return m ? decode(m[1]) : null; };
function setAttr(tag, name, value) {
  const v = encAttr(value);
  if (attrRe(name).test(tag)) return tag.replace(attrRe(name), m => m.replace(/"[^"]*"$/, () => `"${v}"`));
  const end = /(\s*\/?>)$/.exec(tag)[1];
  return tag.slice(0, tag.length - end.length) + ` ${name}="${v}"` + end;
}
const removeAttr = (tag, name) => tag.replace(new RegExp(`\\s+${escRe(name)}(?:\\s*=\\s*"[^"]*")?(?=[\\s/>])`), '');

// Fim de uma tag de abertura respeitando aspas (um ">" dentro de um valor não encerra a tag).
function tagEnd(html, i) {
  let q = null;
  for (let j = i + 1; j < html.length; j++) {
    const c = html[j];
    if (q) { if (c === q) q = null; } else if (c === '"' || c === "'") q = c; else if (c === '>') return j + 1;
  }
  throw new Error('tag sem fechamento a partir de: ' + html.slice(i, i + 60));
}

// Tokenizador sem perdas: join(tokens) === html. Tipos: text, comment, decl, open, close, raw (conteúdo de script/style).
function tokenize(html) {
  const toks = []; let i = 0;
  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt < 0) { toks.push({ t: 'text', s: html.slice(i) }); break; }
    if (lt > i) toks.push({ t: 'text', s: html.slice(i, lt) });
    if (html.startsWith('<!--', lt)) { const e = html.indexOf('-->', lt + 4); const end = e < 0 ? html.length : e + 3; toks.push({ t: 'comment', s: html.slice(lt, end) }); i = end; continue; }
    if (html[lt + 1] === '!' || html[lt + 1] === '?') { const end = html.indexOf('>', lt) + 1; toks.push({ t: 'decl', s: html.slice(lt, end) }); i = end; continue; }
    if (html[lt + 1] === '/') { const end = html.indexOf('>', lt) + 1; toks.push({ t: 'close', name: html.slice(lt + 2, end - 1).trim().toLowerCase(), s: html.slice(lt, end) }); i = end; continue; }
    const m = /^<([A-Za-z][A-Za-z0-9-]*)/.exec(html.slice(lt, lt + 64));
    if (!m) { toks.push({ t: 'text', s: '<' }); i = lt + 1; continue; }
    const end = tagEnd(html, lt); const s = html.slice(lt, end); const name = m[1].toLowerCase();
    toks.push({ t: 'open', name, s, self: /\/>$/.test(s) }); i = end;
    if (name === 'script' || name === 'style') {
      const mm = new RegExp(`</${name}\\s*>`, 'i').exec(html.slice(i));
      const cEnd = mm ? i + mm.index : html.length;
      toks.push({ t: 'raw', s: html.slice(i, cEnd) }); i = cEnd;
    }
  }
  return toks;
}
const join = toks => toks.map(t => t.s).join('');

// Índice do token de fechamento da mesma tag (conta aninhamento de tags com o mesmo nome).
function findClose(toks, k) {
  const name = toks[k].name; let depth = 1;
  for (let j = k + 1; j < toks.length; j++) {
    const t = toks[j];
    if (t.t === 'open' && t.name === name && !t.self) depth++;
    else if (t.t === 'close' && t.name === name && --depth === 0) return j;
  }
  throw new Error(`fechamento de <${name}> não encontrado (${toks[k].s.slice(0, 80)})`);
}
const indentBefore = (toks, k) => { const p = toks[k - 1]; if (!p || p.t !== 'text') return ''; const tail = p.s.slice(p.s.lastIndexOf('\n') + 1); return /^[ \t]*$/.test(tail) ? tail : ''; };

// ───────────────────────── contexto: dicionário e meta ─────────────────────────
function loadContext() {
  const src = fs.readFileSync(path.join(ROOT, 'core/strings.js'), 'utf8');
  const T = vm.runInNewContext(src + '\n;TRANSLATIONS;');
  const META = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/i18n/meta.json'), 'utf8'));
  return { T, META, scope: new Set(Object.keys(META)) };
}
const pageUrl = (key, L) => `${ORIGIN}/${L === 'pt' ? '' : L + '/'}${key === 'index.html' ? '' : key}`;
const pagePath = (key, L) => `/${L === 'pt' ? '' : L + '/'}${key === 'index.html' ? '' : key}`;

// ───────────────────────── passos do algoritmo (§8.4) ─────────────────────────
// Passo 3: blocos de idioma. Mantém só o bloco de L (sem hidden e sem o atributo); apaga os outros.
function applyLangBlocks(toks, L) {
  const out = [];
  for (let k = 0; k < toks.length; k++) {
    const t = toks[k];
    if (t.t === 'open' && getAttr(t.s, 'data-lang-block') !== null) {
      const c = findClose(toks, k);
      if (getAttr(t.s, 'data-lang-block') === L) {
        let s = removeAttr(removeAttr(t.s, 'data-lang-block'), 'hidden');
        out.push({ ...t, s });
      } else { k = c; if (toks[k + 1]?.t === 'text' && /^\n[ \t]*$/.test(toks[k + 1].s)) k++; }
      continue;
    }
    out.push(t);
  }
  return out;
}

// Passo 2: corpo (data-i18n → innerHTML; -alt/-aria/-placeholder → atributos). Remove todos os data-i18n*.
function translateBody(toks, L, T, errors, where, used) {
  const out = [];
  const tr = (key) => {
    const e = T[key];
    if (!e || typeof e[L] !== 'string' || e[L].trim() === '') { errors.push(`${where}: chave "${key}" sem tradução para ${L}`); return null; }
    used?.add(key); return e[L];
  };
  const rewrite = (tag) => {
    for (const [data, attr] of [['data-i18n-alt', 'alt'], ['data-i18n-aria', 'aria-label'], ['data-i18n-placeholder', 'placeholder']]) {
      const key = getAttr(tag, data);
      if (key !== null) { const v = tr(key); if (v !== null) tag = setAttr(tag, attr, v); tag = removeAttr(tag, data); }
    }
    return tag;
  };
  for (let k = 0; k < toks.length; k++) {
    const t = toks[k];
    if (t.t !== 'open' || !/\sdata-i18n/.test(t.s)) { out.push(t); continue; }
    const key = getAttr(t.s, 'data-i18n');
    let s = rewrite(t.s);
    if (key === null) { out.push({ ...t, s }); continue; }
    const c = findClose(toks, k);
    if (toks.slice(k + 1, c).some(x => x.t === 'open' && /\sdata-i18n(?=[\s=])/.test(x.s))) errors.push(`${where}: data-i18n aninhado dentro de "${key}"`);
    const v = tr(key);
    s = removeAttr(s, 'data-i18n');
    out.push({ ...t, s }, { t: 'text', s: v ?? join(toks.slice(k + 1, c)) }, toks[c]);
    k = c;
  }
  return out;
}

// Texto visível normalizado + valores de alt/aria-label/placeholder (para o teste de identidade).
function visibleOf(toks) {
  let text = ''; const attrs = [];
  for (const t of tokenize(join(toks))) { // re-tokeniza: as traduções inseridas podem conter marcação (<span>, <strong>)
    if (t.t === 'text') text += t.s;
    else if (t.t === 'open') for (const a of ['alt', 'aria-label', 'placeholder']) { const v = getAttr(t.s, a); if (v !== null) attrs.push(`${a}=${norm(v)}`); }
  }
  return { text: norm(decode(text)), attrs };
}

// ───────────────────────── <head> ─────────────────────────
function metaTok(toks, attr, name, errors, where, required = true) {
  const idx = toks.map((t, i) => (t.t === 'open' && t.name === 'meta' && getAttr(t.s, attr) === name ? i : -1)).filter(i => i >= 0);
  if (idx.length !== 1) { if (required || idx.length > 1) errors.push(`${where}: esperava 1 <meta ${attr}="${name}">, achei ${idx.length}`); return -1; }
  return idx[0];
}
function setHead(toks, head, L, errors, where, usedHead) {
  const field = (key, getCur, setNew) => {
    const e = head[key];
    if (!e) { errors.push(`${where}: meta.json sem head.${key}`); return; }
    usedHead.add(key);
    const cur = getCur();
    if (cur === null) return;
    if (norm(cur) !== norm(e.pt)) errors.push(`${where}: head.${key}.pt está DESATUALIZADO em relação ao HTML-fonte\n      HTML:      ${norm(cur)}\n      meta.json: ${norm(e.pt)}`);
    for (const l of LANGS) if (typeof e[l] !== 'string' || !e[l].trim()) errors.push(`${where}: head.${key}.${l} vazio`);
    else if (norm(e[l]) === norm(e.pt) && !e.same) errors.push(`${where}: head.${key}.${l} igual ao PT (use "same": true se for nome próprio)`);
    if (L !== 'pt') setNew(e[L]);
  };
  const metaField = (key, attr, name) => {
    const i = metaTok(toks, attr, name, errors, where);
    if (i < 0) return;
    field(key, () => getAttr(toks[i].s, 'content'), v => { toks[i] = { ...toks[i], s: setAttr(toks[i].s, 'content', v) }; });
  };
  const ti = toks.findIndex(t => t.t === 'open' && t.name === 'title');
  if (ti < 0 || toks[ti + 1]?.t !== 'text') errors.push(`${where}: <title> não encontrado`);
  else field('title', () => decode(toks[ti + 1].s), v => { toks[ti + 1] = { t: 'text', s: encText(v) }; });
  metaField('description', 'name', 'description');
  metaField('ogTitle', 'property', 'og:title');
  metaField('ogDescription', 'property', 'og:description');
  metaField('twitterTitle', 'name', 'twitter:title');
  metaField('twitterDescription', 'name', 'twitter:description');
  // imageAlt vale para og:image:alt e twitter:image:alt (mesmo texto no PT)
  for (const [attr, name] of [['property', 'og:image:alt'], ['name', 'twitter:image:alt']]) metaField('imageAlt', attr, name);
}

function hreflangBlock(key, ind) {
  const link = (h, u) => `<link rel="alternate" hreflang="${h}" href="${u}" />`;
  return ['<!-- i18n:hreflang -->', link('pt-BR', pageUrl(key, 'pt')), link('en', pageUrl(key, 'en')), link('es', pageUrl(key, 'es')), link('x-default', pageUrl(key, 'pt')), '<!-- /i18n:hreflang -->'].join('\n' + ind);
}
// Substitui a região <!-- i18n:NOME --> … <!-- /i18n:NOME --> pelo texto gerado.
function replaceRegion(toks, name, make, errors, where) {
  const a = toks.findIndex(t => t.t === 'comment' && t.s === `<!-- i18n:${name} -->`);
  const b = toks.findIndex(t => t.t === 'comment' && t.s === `<!-- /i18n:${name} -->`);
  if (a < 0 || b < a) { errors.push(`${where}: marcadores <!-- i18n:${name} --> … <!-- /i18n:${name} --> ausentes ou fora de ordem na fonte`); return toks; }
  return [...toks.slice(0, a), { t: 'text', s: make(indentBefore(toks, a)) }, ...toks.slice(b + 1)];
}

// ───────────────────────── JSON-LD ─────────────────────────
const unesc = s => s.replace(/~1/g, '/').replace(/~0/g, '~');
function* leaves(node, ptr = '') {
  if (typeof node === 'string') yield [ptr, node];
  else if (Array.isArray(node)) for (let i = 0; i < node.length; i++) yield* leaves(node[i], `${ptr}/${i}`);
  else if (node && typeof node === 'object') for (const [k, v] of Object.entries(node)) if (!k.startsWith('@')) yield* leaves(v, `${ptr}/${k.replace(/~/g, '~0').replace(/\//g, '~1')}`);
}
const keepMatch = (pattern, ptr) => { const a = pattern.split('/'), b = ptr.split('/'); return a.length === b.length && a.every((x, i) => x === '*' ? /^\d+$/.test(b[i]) : x === b[i]); };
function setAt(root, ptr, value) {
  const parts = ptr.split('/').slice(1).map(unesc); let o = root;
  for (let i = 0; i < parts.length - 1; i++) o = o[parts[i]];
  o[parts[parts.length - 1]] = value;
}
function translateJsonLd(toks, key, L, spec, errors, where, usedLd) {
  const idxs = toks.map((t, i) => (t.t === 'open' && t.name === 'script' && getAttr(t.s, 'type') === 'application/ld+json' ? i + 1 : -1)).filter(i => i > 0);
  const blocks = spec || [];
  if (idxs.length !== blocks.length) { errors.push(`${where}: a página tem ${idxs.length} bloco(s) JSON-LD e o meta.json descreve ${blocks.length}`); return; }
  idxs.forEach((ti, n) => {
    const b = blocks[n], loc = `${where} jsonld[${n}]`;
    let data; try { data = JSON.parse(toks[ti].s); } catch (e) { errors.push(`${loc}: JSON inválido na fonte (${e.message})`); return; }
    const selfPt = pageUrl(key, 'pt');
    const tr = b.translate || {}, keep = b.keep || [];
    const seenTr = new Set(), seenKeep = new Set();
    for (const [ptr, val] of leaves(data)) {
      if (Object.prototype.hasOwnProperty.call(tr, ptr)) {
        seenTr.add(ptr); const e = tr[ptr];
        if (norm(e.pt) !== norm(val)) errors.push(`${loc}: ${ptr}.pt está DESATUALIZADO em relação ao HTML-fonte\n      HTML:      ${norm(val)}\n      meta.json: ${norm(e.pt)}`);
        for (const l of LANGS) if (typeof e[l] !== 'string' || !e[l].trim()) errors.push(`${loc}: ${ptr}.${l} vazio`);
        else if (norm(e[l]) === norm(e.pt) && !e.same) errors.push(`${loc}: ${ptr}.${l} igual ao PT (use "same": true se for nome próprio)`);
        if (L !== 'pt') setAt(data, ptr, e[L]);
        continue;
      }
      const kp = keep.find(p => keepMatch(p, ptr));
      if (kp) { seenKeep.add(kp); continue; }
      if (val === selfPt) { if (L !== 'pt') setAt(data, ptr, pageUrl(key, L)); continue; } // URL da própria página
      errors.push(`${loc}: string NÃO CLASSIFICADA em ${ptr} = ${JSON.stringify(val).slice(0, 70)} (ponha em "translate" ou "keep")`);
    }
    for (const p of Object.keys(tr)) if (!seenTr.has(p)) errors.push(`${loc}: entrada "translate" sem uso: ${p}`);
    for (const p of keep) if (!seenKeep.has(p)) errors.push(`${loc}: entrada "keep" sem uso: ${p}`);
    usedLd.add(n);
    if (L !== 'pt') {
      const ind = indentBefore(toks, ti - 1);
      const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c').split('\n').map(l => ind + l).join('\n');
      toks[ti] = { t: 'raw', s: `\n${json}\n${ind}` };
    }
  });
}

// ───────────────────────── links, recursos, seletor ─────────────────────────
function rewriteLinksAndResources(toks, L, scope) {
  return toks.map(t => {
    if (t.t !== 'open') return t;
    let s = t.s;
    for (const a of ['href', 'src', 'poster', 'action']) {
      const v = getAttr(s, a);
      if (v === null) continue;
      if (a !== 'action' && RESOURCE_RE.test(v)) { s = setAttr(s, a, '/' + v.replace(/^(?:\.\.\/)+/, '')); continue; }
      if ((a === 'href' || a === 'action') && v.startsWith('/') && !v.startsWith('//')) {
        const hash = v.includes('#') ? v.slice(v.indexOf('#')) : '';
        const p = v.slice(0, v.length - hash.length);
        const key = p === '/' || p === '' ? 'index.html' : p.slice(1);
        if (ROOT_DIRS.has(key.split('/')[0]) || !scope.has(key)) continue; // fora do escopo: continua apontando para o PT
        s = setAttr(s, a, pagePath(key, L) + hash);
      }
    }
    return s === t.s ? t : { ...t, s };
  });
}
function selectorInner(key, L, ind) {
  const parts = ALL.map(l => {
    const cur = l === L;
    return `${ind}  <a class="lang-btn${cur ? ' active' : ''}" href="${pagePath(key, l)}" hreflang="${HTML_LANG[l]}" lang="${HTML_LANG[l]}"${cur ? ' aria-current="true"' : ''}>${SEL_LABEL[l]}</a>`;
  });
  return '\n' + parts.join(`\n${ind}  <span class="lang-sep">|</span>\n`) + '\n' + ind;
}
function rewriteSelectors(toks, key, L, errors, where) {
  const out = []; let n = 0;
  for (let k = 0; k < toks.length; k++) {
    const t = toks[k];
    if (t.t === 'open' && t.name === 'div' && (getAttr(t.s, 'class') || '').split(/\s+/).includes('lang-selector')) {
      const c = findClose(toks, k);
      out.push(t, { t: 'text', s: selectorInner(key, L, indentBefore(toks, k)) }, toks[c]); k = c; n++;
    } else out.push(t);
  }
  if (n === 0) errors.push(`${where}: nenhum seletor de idioma (div.lang-selector) encontrado`);
  return out;
}

// ───────────────────────── geração de uma página ─────────────────────────
function generate(key, L, ctx, errors) {
  const { T, META, scope } = ctx;
  const where = `${key} [${L}]`;
  const src = readSource(key);
  let toks = tokenize(src.text);
  if (join(toks) !== src.text) throw new Error(`${where}: o tokenizador não é sem perdas`);
  const meta = META[key];
  const usedHead = new Set(), usedLd = new Set();

  toks = applyLangBlocks(toks, L);
  toks = translateBody(toks, L, T, errors, where, null);
  setHead(toks, meta.head, L, errors, where, usedHead);
  for (const k of Object.keys(meta.head)) if (!usedHead.has(k)) errors.push(`${where}: head.${k} do meta.json não é usado pela página`);
  translateJsonLd(toks, key, L, meta.jsonld, errors, where, usedLd);

  toks = replaceRegion(toks, 'hreflang', ind => hreflangBlock(key, ind), errors, where);
  const html = toks.findIndex(t => t.t === 'open' && t.name === 'html');
  toks[html] = { ...toks[html], s: ensureStaticLang(setAttr(toks[html].s, 'lang', HTML_LANG[L])) };
  for (const [attr, name] of [['rel', 'canonical']]) {
    const i = toks.findIndex(t => t.t === 'open' && t.name === 'link' && getAttr(t.s, attr) === name);
    if (i < 0) errors.push(`${where}: <link rel="canonical"> ausente`); else toks[i] = { ...toks[i], s: setAttr(toks[i].s, 'href', pageUrl(key, L)) };
  }
  const ou = metaTok(toks, 'property', 'og:url', errors, where); if (ou >= 0) toks[ou] = { ...toks[ou], s: setAttr(toks[ou].s, 'content', pageUrl(key, L)) };
  const ol = metaTok(toks, 'property', 'og:locale', errors, where);
  if (ol >= 0) {
    const ind = indentBefore(toks, ol);
    toks[ol] = { ...toks[ol], s: setAttr(toks[ol].s, 'content', OG_LOCALE[L]) };
    const alt = ALL.filter(l => l !== L).map(l => `\n${ind}<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`).join('');
    toks.splice(ol + 1, 0, { t: 'text', s: alt });
  }
  toks = rewriteLinksAndResources(toks, L, scope);
  toks = rewriteSelectors(toks, key, L, errors, where);
  const hd = toks.findIndex(t => t.t === 'open' && t.name === 'head');
  toks.splice(hd + 1, 0, { t: 'text', s: `\n  <!-- GERADO por scripts/build-i18n.mjs a partir de ${key}. NÃO EDITE. -->` });

  let out = join(toks);
  const usesForm = /contact-form\.js/.test(out);
  if (usesForm) console.warn(`  aviso: ${where} usa contact-form.js — mantive strings.js/i18n.js (tratar na Fase 4/7)`);
  else out = out.replace(/^[ \t]*<script src="[^"]*\/(?:core\/strings|js\/i18n)\.js"><\/script>\n/gm, '');
  if (/data-i18n/.test(out)) errors.push(`${where}: restou atributo data-i18n* na saída`);
  return serialize(out, src);
}

// Atributo booleano data-static-lang no <html>: a página tem o texto pré-gerado e o motor antigo (i18n.js) não deve mexer nela.
const ensureStaticLang = tag => (/\sdata-static-lang(?=[\s>\/])/.test(tag) ? tag : tag.replace(/>$/, ' data-static-lang>'));

// Cada seletor (div.lang-selector) da fonte tem de estar entre <!-- i18n:selector --> e <!-- /i18n:selector -->.
function checkSelectorMarkers(toks, errors, where) {
  const prox = (k, d) => { for (let j = k + d; j >= 0 && j < toks.length; j += d) if (!(toks[j].t === 'text' && !toks[j].s.trim())) return toks[j]; return null; };
  let n = 0;
  toks.forEach((t, k) => {
    if (t.t === 'open' && t.name === 'div' && (getAttr(t.s, 'class') || '').split(/\s+/).includes('lang-selector')) {
      n++;
      const c = findClose(toks, k);
      if (prox(k, -1)?.s !== '<!-- i18n:selector -->' || prox(c, 1)?.s !== '<!-- /i18n:selector -->') errors.push(`${where}: o seletor #${n} precisa estar entre <!-- i18n:selector --> e <!-- /i18n:selector -->`);
    }
  });
  const marcas = toks.filter(t => t.t === 'comment' && /^<!-- \/?i18n:selector -->$/.test(t.s)).length;
  if (marcas !== n * 2) errors.push(`${where}: marcadores i18n:selector (${marcas}) não correspondem aos seletores (${n})`);
}

// Sincroniza as regiões gerenciadas da própria fonte PT: hreflang, seletor de idioma (links) e data-static-lang. Retorna os bytes novos.
function syncSource(key, ctx, errors) {
  const src = readSource(key); const where = `${key} [pt]`;
  let toks = tokenize(src.text);
  toks = replaceRegion(toks, 'hreflang', ind => hreflangBlock(key, ind), errors, where);
  checkSelectorMarkers(toks, errors, where);
  toks = rewriteSelectors(toks, key, 'pt', errors, where);
  const html = toks.findIndex(t => t.t === 'open' && t.name === 'html');
  toks[html] = { ...toks[html], s: ensureStaticLang(toks[html].s) };
  if (!/js\/lang\.js"/.test(join(toks))) errors.push(`${where}: falta <script src="…/js/lang.js"> na fonte`);
  return serialize(join(toks), src);
}

// ───────────────────────── teste de identidade ─────────────────────────
function identity(key, ctx) {
  const { T } = ctx; const errors = [];
  const src = readSource(key);
  const a = tokenize(src.text);
  if (join(a) !== src.text) return [`${key}: tokenizador com perdas`];
  const base = visibleOf(applyLangBlocks(a, 'pt'));
  const gen = visibleOf(translateBody(applyLangBlocks(tokenize(src.text), 'pt'), 'pt', T, errors, key, null));
  const res = [...errors];
  if (base.text !== gen.text) {
    let i = 0; while (base.text[i] === gen.text[i]) i++;
    res.push(`${key}: texto visível difere na posição ${i}\n      fonte: …${base.text.slice(Math.max(0, i - 40), i + 80)}\n      pt:    …${gen.text.slice(Math.max(0, i - 40), i + 80)}`);
  }
  if (base.attrs.join('\n') !== gen.attrs.join('\n')) {
    const j = base.attrs.findIndex((x, n) => x !== gen.attrs[n]);
    res.push(`${key}: atributos (alt/aria/placeholder) diferem em #${j}\n      fonte: ${base.attrs[j]}\n      pt:    ${gen.attrs[j]}`);
  }
  return res;
}

// ───────────────────────── principal ─────────────────────────
function main() {
  const args = process.argv.slice(2);
  const check = args.includes('--check'), idMode = args.includes('--identity');
  const oi = args.indexOf('--only'); const only = oi >= 0 ? args[oi + 1] : null;
  const unknown = args.filter((a, i) => !['--check', '--identity', '--only'].includes(a) && args[i - 1] !== '--only');
  if (unknown.length) { console.error('argumento desconhecido: ' + unknown.join(' ')); process.exit(2); }
  const ctx = loadContext();
  let keys = Object.keys(ctx.META);
  if (only) { if (!keys.includes(only)) { console.error(`--only: "${only}" não está em meta.json`); process.exit(2); } keys = [only]; }

  if (idMode) {
    let bad = 0;
    for (const k of keys) { const r = identity(k, ctx); console.log(`${r.length ? 'FALHOU' : 'ok    '}  identidade ${k}`); r.forEach(x => console.log('      ' + x)); bad += r.length; }
    process.exit(bad ? 1 : 0);
  }

  const errors = []; const outputs = new Map(); // caminho relativo → Buffer
  for (const k of keys) {
    outputs.set(k, syncSource(k, ctx, errors));
    for (const L of LANGS) outputs.set(`${L}/${k}`, generate(k, L, ctx, errors));
  }
  if (errors.length) {
    console.error(`\nBUILD FALHOU — ${errors.length} problema(s); nada foi escrito:\n`);
    for (const e of [...new Set(errors)]) console.error('  ✗ ' + e);
    process.exit(2);
  }

  // arquivos gerados que não pertencem mais ao escopo
  const orphans = [];
  if (!only) for (const L of LANGS) (function walk(d) {
    const abs = path.join(ROOT, d); if (!fs.existsSync(abs)) return;
    for (const e of fs.readdirSync(abs, { withFileTypes: true })) { const rel = `${d}/${e.name}`; if (e.isDirectory()) walk(rel); else if (e.name.endsWith('.html') && !outputs.has(rel)) orphans.push(rel); }
  })(L);

  const stale = [], fresh = [];
  for (const [rel, buf] of outputs) {
    const abs = path.join(ROOT, rel);
    (fs.existsSync(abs) && Buffer.compare(fs.readFileSync(abs), buf) === 0 ? fresh : stale).push(rel);
  }
  if (check) {
    if (stale.length || orphans.length) {
      console.error(`DESATUALIZADO — rode: node scripts/build-i18n.mjs`);
      stale.forEach(f => console.error('  ✗ desatualizado/ausente: ' + f));
      orphans.forEach(f => console.error('  ✗ órfão (fora do meta.json): ' + f));
      process.exit(1);
    }
    console.log(`em dia: ${fresh.length} arquivo(s) conferido(s), 0 desatualizado(s).`);
    return;
  }
  for (const rel of stale) { const abs = path.join(ROOT, rel); fs.mkdirSync(path.dirname(abs), { recursive: true }); fs.writeFileSync(abs, outputs.get(rel)); }
  console.log(`escritos: ${stale.length} · inalterados: ${fresh.length}`);
  stale.forEach(f => console.log('  + ' + f));
  orphans.forEach(f => console.log('  ! órfão (fora do meta.json, não apagado): ' + f));
}

main();
