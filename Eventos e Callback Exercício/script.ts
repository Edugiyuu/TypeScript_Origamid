// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');
  nav?.classList.toggle("active")
}

btnMobile?.addEventListener('pointerdown', toggleMenu);