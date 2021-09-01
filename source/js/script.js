//Реализация открытия/закрытия меню в шапке и no-js
const nav = document.querySelector('.navigation');
const menuBtn = document.querySelector('.main-header__menu');
const menuClose = document.querySelector('.navigation__close');

nav.classList.remove('navigation--nojs');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

menuClose.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});
