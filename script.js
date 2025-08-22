// Navegação mobile
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fechar menu ao clicar em um link
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano dinâmico no rodapé
const anoSpan = document.getElementById('anoAtual');
if (anoSpan) anoSpan.textContent = new Date().getFullYear();

// Sombra no header ao rolar
const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY || window.pageYOffset;
  const goingDown = y > lastScroll;
  lastScroll = y;
  if (y > 8) {
    header.style.boxShadow = '0 8px 24px rgba(12,27,42,0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
  // Opcional: esconder header ao rolar para baixo em mobile
  if (window.innerWidth < 900) {
    header.style.transform = goingDown ? 'translateY(-100%)' : 'translateY(0)';
  }
});

// Suporte a foco visível no teclado
document.body.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') document.body.classList.add('user-is-tabbing');
});