# Gerador de páginas por idioma (`scripts/build-i18n.mjs`)

O site tem **uma URL por idioma**: o português fica na raiz (`/`, `/apps/…`, `/blog/…`) e as versões em inglês e espanhol ficam em `/en/…` e `/es/…`.
**As páginas em português são a fonte (editadas à mão).** As de `/en` e `/es` são **geradas** por este script e **commitadas** — não edite nada dentro de `en/` e `es/`.

Node puro, sem dependências, sem `package.json`. Roda na sua máquina; o GitHub Pages só serve os arquivos.

## Fluxo de trabalho

```
editou uma página PT, o core/strings.js ou o scripts/i18n/*.json
        ↓
node scripts/build-i18n.mjs            # regenera en/, es/, sitemap.xml e core/runtime-strings.js
        ↓
node scripts/build-i18n.mjs --check    # tem de dizer "em dia" (sai com código 1 se algo estiver velho)
        ↓
commit de TUDO (fontes + en/ + es/ + sitemap.xml + scripts/i18n/sitemap-state.json)
```

Comandos:

| Comando | O que faz |
|---|---|
| `node scripts/build-i18n.mjs` | escreve os arquivos que mudaram e imprime o resumo (`escritos` / `inalterados`) |
| `node scripts/build-i18n.mjs --check` | não escreve; lista o que está desatualizado e sai com 1 |
| `node scripts/build-i18n.mjs --only apps/damas-evolution.html` | só essa fonte (não mexe no sitemap) |
| `node scripts/build-i18n.mjs --identity` | teste de identidade: o texto do `strings.js` em PT tem de ser igual ao da fonte |
| `node scripts/build-i18n.mjs --update-pt` | copia o texto PT atual das fontes para o `pt` do `meta.json` e **lista** o que mudou (não mexe em en/es) |

Se faltar tradução, o `meta.json` estiver velho ou uma string do JSON-LD não estiver classificada, o build **falha e não escreve nada**.

## De onde vem cada texto

| O quê | Onde fica |
|---|---|
| Corpo das páginas (menus, botões, cards, FAQ, requisitos…) | `core/strings.js` (`TRANSLATIONS['chave'] = { pt, en, es }`), ligado ao HTML por `data-i18n`, `data-i18n-alt`, `data-i18n-aria`, `data-i18n-placeholder` |
| Corpo dos artigos do blog e da privacidade | blocos `data-lang-block="pt|en|es"` dentro do próprio HTML-fonte (o gerador mantém só o bloco do idioma) |
| `<title>`, `description`, Open Graph, Twitter e **JSON-LD** | `scripts/i18n/meta.json` (PT/EN/ES por página) |
| Ordem, frequência e prioridade do `sitemap.xml` | `scripts/i18n/sitemap.json` |
| `lastmod` do sitemap | `scripts/i18n/sitemap-state.json` (guarda um hash do conteúdo; a data só muda quando a página muda) |
| Mensagens do formulário de contato (JavaScript) | `core/runtime-strings.js` — **gerado** a partir de 3 chaves do `strings.js` |
| Imagens Open Graph por idioma | `assets/og/en/<nome>.jpg` e `assets/og/es/<nome>.jpg` (se existir, o gerador usa; senão cai na do PT) |

## Regiões gerenciadas nas páginas PT

O gerador reescreve, **dentro das páginas PT**, só estes trechos (não edite à mão entre os marcadores):

- `<!-- i18n:hreflang --> … <!-- /i18n:hreflang -->` — os 4 `<link rel="alternate">` (pt-BR, en, es, x-default);
- `<!-- i18n:selector --> … <!-- /i18n:selector -->` — o seletor de idioma por links (desktop e menu móvel);
- `<html … data-static-lang>` — diz ao `js/i18n.js` antigo para não mexer na página;
- os `<script>` de `core/strings.js` e `js/i18n.js` são removidos; páginas com formulário carregam `core/runtime-strings.js`.

## Tarefas comuns

**Corrigir um texto em inglês/espanhol do corpo:** edite `core/strings.js` → rode o gerador → `--check` → commit.
**Corrigir o `<title>`, a descrição ou o JSON-LD:** edite `scripts/i18n/meta.json` (o campo `pt` tem de continuar igual ao HTML-fonte; se você mudou o PT, atualize o `pt` também) → gerador.
**Mudou o texto em português do `<head>` ou do JSON-LD de uma página:** o build falha de propósito ("`pt` DESATUALIZADO"), porque a tradução pode ter ficado velha. Rode `node scripts/build-i18n.mjs --update-pt`: ele atualiza o `pt` do `meta.json` e lista cada campo (antes/agora). **Revise o inglês e o espanhol desses campos** no `meta.json` e rode o gerador. Para textos do corpo, o `pt` do `strings.js` é editado junto com o HTML (o `--identity` acusa se divergirem).

**Conferência automática (CI):** o arquivo `.github/workflows/check-i18n.yml` roda `--check` e `--identity` no GitHub a cada push e pull request; se você esquecer de rodar o gerador, o GitHub marca o commit com um X vermelho. Funciona em qualquer sistema (o `--check` ignora a diferença de fim de linha).

**Adicionar uma página nova (em PT, com EN/ES):**
1. crie o HTML em PT (copie uma página parecida), com os `data-i18n` e as **chaves novas** no `core/strings.js` (pt, en e es);
2. coloque os marcadores `i18n:hreflang` (logo depois do `canonical`) e `i18n:selector` (um em volta de cada `div.lang-selector`) e o `<script src="…js/lang.js">`; o JSON-LD de Article/WebPage leva `"inLanguage": "pt-BR"`;
3. acrescente a página em `scripts/i18n/meta.json` (modelo: qualquer entrada existente) e em `scripts/i18n/sitemap.json`;
4. rode o gerador e o `--check`.

Convenções do `meta.json` por página: `head` (title, description, ogTitle, ogDescription, twitterTitle, twitterDescription, imageAlt) e `jsonld` (uma entrada por bloco): `translate` (ponteiro JSON → pt/en/es), `keep` (strings que não se traduzem; aceita `*` para índices de lista), `lang` (ponteiros com o idioma da página, ex. `/inLanguage`). Toda string do JSON-LD precisa estar em um deles. `"same": true` libera EN/ES iguais ao PT (nome próprio). URLs de páginas do próprio site são traduzidas automaticamente.

## Regras de honestidade (valem nos 3 idiomas)

Em app **com anúncios** não se pode escrever "sem anúncios", "no ads", "ad-free", "sin anuncios", "zero permissões", "100% offline" etc. (salvo frase qualificada, como "nenhuma permissão **que precise** da sua autorização"). O BuscaCep exige internet (nunca "offline"). O ReportGo nunca diz "Gratuito/Free/Gratis". App em desenvolvimento não tem selo do Google Play, "Ver vídeo" nem `installUrl`. A tradução não pode afirmar o que o português não afirma.

## Detalhes que ajudam a não errar

- **Blog e privacidade** trazem os 3 idiomas no mesmo HTML-fonte. Para a página em português ter um só `<h1>`, o título dos blocos EN/ES é escrito como `<h2 data-promote="h1">…</h2>`; o gerador o devolve a `<h1>` na página do idioma.
- **Imagens Open Graph:** se o PT aponta para `https://leankar.dev/assets/og/<nome>.jpg` e existe `assets/og/en/<nome>.jpg` (e `es/`), a página do idioma (e o `image` do JSON-LD) usa a dela. As imagens da home e dos artigos são geradas por uma ferramenta local (`gerar_og_cards.cjs`, fora do git) a partir do título de cada idioma.
- **`404.html`** (PT/EN/ES numa página só), **`favicon.ico`** e **`.nojekyll`** ficam na raiz e não passam pelo gerador.

## Faixa opcional de idioma

`js/lang.js` mostra, só para quem tem o navegador em inglês ou espanhol e está numa página de outro idioma, uma faixa discreta "Esta página também está em…". Não redireciona, é dispensável, não aparece para robôs nem para quem já escolheu o idioma pelo seletor.

## Antes de publicar

1. `node scripts/build-i18n.mjs --check` → "em dia".
2. Abra 2 ou 3 páginas dos 3 idiomas no navegador (360 px e 1280 px) e teste o seletor (PT → EN → ES → PT).
3. Depois de publicar, reenvie o `sitemap.xml` no Search Console. O efeito na busca **não é imediato** (semanas).

## Reverter

O português nunca mudou de endereço. Para desfazer o recurso: `git revert` dos commits do recurso (remove `en/`, `es/`, `scripts/`, volta o seletor em botões e o `hreflang` antigo).
