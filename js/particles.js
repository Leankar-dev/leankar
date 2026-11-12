/* ── PARTICLES (fundo animado, compartilhado entre todas as páginas) ──
   Custo controlado: menos partículas e 30 quadros/s em telas pequenas, comparação de distância sem raiz quadrada,
   pausa com a aba oculta e redimensionamento só quando a LARGURA muda (no celular, a barra de endereço
   mudava a altura a cada rolagem e recriava o canvas). */
(function () {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const small = () => window.innerWidth < 768;
  const countFor = () => (small() ? 28 : 70);
  const connDist = () => (small() ? 110 : 140);
  const particles = [];
  let lastWidth = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    lastWidth = window.innerWidth;
    while (particles.length > countFor()) particles.pop();
    while (particles.length < countFor()) particles.push(new Particle());
    particles.forEach(p => { if (p.x > canvas.width) p.x = Math.random() * canvas.width; if (p.y > canvas.height) p.y = Math.random() * canvas.height; });
  }

  const COLORS = ['rgba(0,198,255,', 'rgba(124,58,237,', 'rgba(245,158,11,'];

  class Particle {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 10;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r = Math.random() * 2 + 1;
      this.col = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    update(step) { // step = quadros de 60 Hz decorridos (mantém a velocidade igual a 30 ou 60 quadros/s)
      this.x += this.vx * step;
      this.y += this.vy * step;
      if (this.y < -10) this.reset(false);
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.col + this.opacity + ')';
      ctx.fill();
    }
  }

  resize();

  function drawConnections() {
    const dist = connDist(), dist2 = dist * dist;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < dist2) {
          const alpha = (1 - Math.sqrt(d2) / dist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,198,255,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frameId = null;
  let last = 0;

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.draw());
    drawConnections();
  }

  function loop(now) {
    frameId = requestAnimationFrame(loop);
    const minInterval = small() ? 1000 / 30 : 0; // 30 quadros/s em telas pequenas
    if (now - last < minInterval - 1) return;
    const step = last ? Math.min((now - last) / (1000 / 60), 3) : 1;
    last = now;
    particles.forEach(p => p.update(step));
    render();
  }

  function start() { if (frameId === null) { last = 0; frameId = requestAnimationFrame(loop); } }
  function stop() { if (frameId !== null) { cancelAnimationFrame(frameId); frameId = null; } }

  /* Com "reduzir movimento": desenha um quadro estático e não anima. Com a aba oculta, pausa. */
  function applyMotionPreference() {
    if (reducedMotion.matches || document.hidden) {
      stop();
      if (reducedMotion.matches) render();
    } else {
      start();
    }
  }

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (window.innerWidth === lastWidth) { // só a altura mudou (barra de endereço do celular): só cresce o canvas, nunca o recria a cada rolagem
      if (window.innerHeight > canvas.height) canvas.height = window.innerHeight;
      return;
    }
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); if (reducedMotion.matches) render(); }, 150);
  }, { passive: true });

  reducedMotion.addEventListener('change', applyMotionPreference);
  document.addEventListener('visibilitychange', applyMotionPreference);
  applyMotionPreference();
})();
