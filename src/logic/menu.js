// logic/menu.js

function handleScroll() {
  const header = document.querySelector('.header');
  const dropdownMenu = document.querySelector('.header__dropdown-menu');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Cambia esto a la altura que necesites para ocultar el header
    if (scrollY > header.offsetHeight) {
      header.classList.add('hidden'); // Oculta el header
      dropdownMenu.classList.remove('hidden'); // Muestra el menú desplegable
    } else {
      header.classList.remove('hidden'); // Muestra el header
      dropdownMenu.classList.add('hidden'); // Oculta el menú desplegable
    }
  });
}

export { handleScroll };
