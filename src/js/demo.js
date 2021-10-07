const demo = () => 'Webpack Boilerplate v5.10.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.';

// eslint-disable-next-line no-console
const btn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const close = document.getElementsByClassName('modal__close')[0];

btn.onclick = () => {
  modal.style.display = 'flex';
};

close.onclick = () => {
  modal.style.display = 'none';
};
