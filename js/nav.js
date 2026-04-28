/* nav.js — Hamburger menu toggle*/

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

// Abrir / cerrar menú al hacer clic en el botón
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

// Cerrar menú al hacer clic en cualquier enlace
function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
}

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
  const clickedOutside =
    !hamburger.contains(e.target) && !mobileNav.contains(e.target);

  if (clickedOutside && mobileNav.classList.contains('open')) {
    closeMobileNav();
  }
});
