window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-8V438JPJTN');

/* O gtag.js (≈ 0,7 s de CPU no celular) só é baixado depois do evento load, com o navegador ocioso: não disputa a
   renderização inicial. Os comandos acima ficam na fila (dataLayer) e o gtag.js os processa quando chega. */
(function () {
  function carregarGtag() {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-8V438JPJTN';
    document.head.appendChild(s);
  }
  function agendar() {
    if ('requestIdleCallback' in window) requestIdleCallback(carregarGtag, { timeout: 3000 });
    else setTimeout(carregarGtag, 1500);
  }
  if (document.readyState === 'complete') agendar();
  else window.addEventListener('load', agendar, { once: true });
})();
