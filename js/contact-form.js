(function () {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('contact-submit');
  const ok = document.getElementById('form-ok');
  const err = document.getElementById('form-err');
  if (!form) return;

  // Fallback em PT caso core/runtime-strings.js não tenha carregado (TRANSLATIONS indisponível)
  function t(key, fallback) {
    const lang = window.currentLang || 'pt';
    return (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[key]?.[lang]) || fallback;
  }

  // O formulário usa novalidate (sem balões do navegador): a validação é feita aqui, antes de enviar ao Formspree.
  const campos = [...form.querySelectorAll('input[name="nome"], input[name="_replyto"], textarea[name="mensagem"]')];
  const erroPadrao = err.textContent; // texto de "falha ao enviar" já no idioma da página
  const valido = c => c.value.trim() !== '' && c.checkValidity();

  campos.forEach(c => c.addEventListener('input', () => {
    if (c.getAttribute('aria-invalid') === 'true' && valido(c)) c.setAttribute('aria-invalid', 'false');
  }));

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    ok.style.display = err.style.display = 'none';

    let primeiroInvalido = null;
    campos.forEach(c => {
      const v = valido(c);
      c.setAttribute('aria-invalid', String(!v));
      if (!v && !primeiroInvalido) primeiroInvalido = c;
    });
    if (primeiroInvalido) { // não envia nada: mostra o aviso (role="alert") e leva o foco ao 1º campo com problema
      err.textContent = t('contato.invalid', 'Preencha seu nome, um e-mail válido e a mensagem.');
      err.style.display = 'block';
      primeiroInvalido.focus();
      return;
    }

    err.textContent = erroPadrao;
    btn.disabled = true;
    btn.textContent = t('contato.btn-sending', 'Enviando…');
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        campos.forEach(c => c.setAttribute('aria-invalid', 'false'));
        ok.style.display = 'block';
        btn.textContent = t('contato.btn-sent', 'Enviado!');
      } else {
        throw new Error();
      }
    } catch {
      err.style.display = 'block';
      btn.disabled = false;
      btn.textContent = t('contato.btn-submit', 'Enviar mensagem');
    }
  });
})();
