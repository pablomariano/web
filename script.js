const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-menu');

function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
}

menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenu(false);
        menuButton.focus();
    }
});

matchMedia('(min-width: 901px)').addEventListener('change', ({ matches }) => {
    if (matches) setMenu(false);
});
