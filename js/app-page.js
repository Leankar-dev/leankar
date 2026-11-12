/* ── YEAR ── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── HAMBURGER ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

/* Esc fecha o menu móvel e devolve o foco ao botão */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape' || !mobileMenu.classList.contains('open')) return;
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.focus();
});

/* ── REVEAL ON SCROLL ──
   threshold 0: revela quando QUALQUER parte entra na área útil. Com 0.1 um bloco muito alto (mais de ~10× a
   viewport) nunca atingia a razão e ficava invisível. Sem IntersectionObserver, mostra tudo. */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0, rootMargin: '0px 0px -10% 0px' }
  );
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}

/* ── FAQ ACCORDION ──
   O HTML novo traz id/aria-controls/role/aria-labelledby estáticos; nas páginas ainda não migradas o JS os completa.
   O painel fechado fica visibility:hidden (CSS), então não é lido por leitor de tela nem recebe foco. */
function setFaqOpen(item, open) {
  item.classList.toggle('open', open);
  item.querySelector('.faq-question').setAttribute('aria-expanded', String(open));
}
document.querySelectorAll('.faq-item').forEach((item, i) => {
  const btn   = item.querySelector('.faq-question');
  const panel = item.querySelector('.faq-answer');
  if (!btn.id)    btn.id = 'faq-q' + (i + 1);
  if (!panel.id)  panel.id = 'faq-a' + (i + 1);
  if (!btn.hasAttribute('aria-controls'))     btn.setAttribute('aria-controls', panel.id);
  if (!panel.hasAttribute('role'))            panel.setAttribute('role', 'region');
  if (!panel.hasAttribute('aria-labelledby')) panel.setAttribute('aria-labelledby', btn.id);
  btn.setAttribute('aria-expanded', String(item.classList.contains('open')));
  btn.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => setFaqOpen(el, false));
    if (!wasOpen) setFaqOpen(item, true);
  });
});

/* ── GALERIA DE TELAS ── (no-op se a página não tem .app-gallery-track) */
const galleryTrack = document.querySelector('.app-gallery-track');
if (galleryTrack) {
  const galleryNav    = document.querySelector('.app-gallery-nav');
  const prevBtn       = galleryNav && galleryNav.querySelector('[data-dir="-1"]');
  const nextBtn       = galleryNav && galleryNav.querySelector('[data-dir="1"]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const itemStep = () => {
    const shot = galleryTrack.querySelector('.app-shot');
    if (!shot) return galleryTrack.clientWidth;
    const gap = parseFloat(getComputedStyle(galleryTrack).columnGap) || 0;
    return shot.getBoundingClientRect().width + gap;
  };
  const scrollByItems = dir => galleryTrack.scrollBy({
    left: dir * itemStep(),
    behavior: reducedMotion.matches ? 'auto' : 'smooth'
  });
  const updateGalleryNav = () => {
    const max = galleryTrack.scrollWidth - galleryTrack.clientWidth;
    if (galleryNav) galleryNav.hidden = max <= 1;
    if (prevBtn) prevBtn.setAttribute('aria-disabled', String(galleryTrack.scrollLeft <= 1));
    if (nextBtn) nextBtn.setAttribute('aria-disabled', String(galleryTrack.scrollLeft >= max - 1));
  };

  if (prevBtn) prevBtn.addEventListener('click', () => scrollByItems(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => scrollByItems(1));
  galleryTrack.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    scrollByItems(e.key === 'ArrowRight' ? 1 : -1);
  });
  galleryTrack.addEventListener('scroll', updateGalleryNav, { passive: true });
  window.addEventListener('resize', updateGalleryNav, { passive: true });
  galleryTrack.querySelectorAll('img').forEach(img => img.addEventListener('load', updateGalleryNav));
  updateGalleryNav();
}
