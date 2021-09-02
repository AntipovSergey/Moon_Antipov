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

//Плавный скрол якорных ссылок
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()

  const blockID = anchor.getAttribute('href').substr(1)

  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
}

//Маска для поля tel
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);

//Валидация поля с именем
const userNameInput = document.querySelector('#form-name');
const regex = /[A-Za-zА-Яа-яЁё]/;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH && !regex.test(userNameInput.value)) {
    userNameInput.setCustomValidity(`Ещё ${  MIN_NAME_LENGTH - valueLength } симв.
    Поле может содержать только буквы!`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else if (!regex.test(userNameInput.value)) {
    userNameInput.setCustomValidity(`Поле может содержать только буквы!`);
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});
