(function () {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('contact-submit');
  const ok = document.getElementById('form-ok');
  const err = document.getElementById('form-err');
  if (!form) return;

  // Fallback em PT caso js/i18n.js não tenha carregado (TRANSLATIONS indisponível)
  function t(key, fallback) {
    const lang = window.currentLang || 'pt';
    return (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[key]?.[lang]) || fallback;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = t('contato.btn-sending', 'Enviando…');
    ok.style.display = err.style.display = 'none';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
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
