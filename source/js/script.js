//Реализация открытия/закрытия меню в шапке и no-js
const nav = document.querySelector('.navigation');
const menuBtn = document.querySelector('.main-header__menu');
const menuClose = document.querySelector('.navigation__close');

if(nav) {
  nav.classList.remove('navigation--nojs');
}

if(menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}

if(menuClose) {
  menuClose.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}

//Маска для поля tel
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');

if(selector) {
  im.mask(selector);
}

//Включение видео
const playButton = document.querySelector('.video__button');

if(playButton) {
  playButton.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.video__video').querySelector('video');
    video.play();
    e.currentTarget.classList.toggle('is-hide');
  });
}

//Закрытие меню при нажатии на ссылку в планшетной и мобильной версиях
const links = document.querySelectorAll('.navigation__link');

if(links) {
  for (let link of links) {
    link.addEventListener ('click', () => {
      nav.classList.remove('is-open');
    })
  }
}
