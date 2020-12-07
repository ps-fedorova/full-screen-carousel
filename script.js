const carousel = document.querySelector('.carousel');

const list = carousel.querySelector('.carousel__list');
const listElem = carousel.querySelectorAll('.carousel__item');

const angleLeft = carousel.querySelector('.fa-angle-left');
const angleRight = carousel.querySelector('.fa-angle-right');
const angleUp = carousel.querySelector('.fa-angle-up');
const angleDown = carousel.querySelector('.fa-angle-down');

console.log(angleDown);

const mQueryMax = window.matchMedia('(max-width: 500px)');
const mQueryMin = window.matchMedia('(min-width: 500px)');

let width = 100; // ширина картинки
let hight = 100; // высота картинки
let position = 0; // положение ленты прокрутки

function swipeRight() {
  // сдвиг вправо
  position -= width;
  // последнее передвижение вправо на 1 элемент
  position = Math.max(position, -width * (listElem.length - 1));
  list.style.marginLeft = position + 'vw';
  list.style.transition = '1s';
}

function swipeLeft() {
  // сдвиг влево
  position += width;
  // последнее передвижение влево на 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'vw';
  list.style.transition = '1s';
}

function swipeUp() {
  // сдвиг вверх
  position -= hight;
  // последнее передвижение вправо на 1 элемент
  position = Math.max(position, -hight * (listElem.length - 1));
  list.style.marginTop = position + 'vh';
  list.style.transition = '1s';
}

function swipeDown() {
  // сдвиг вниз
  position += hight;
  // последнее передвижение влево на 1 элемент
  position = Math.min(position, 0);
  list.style.marginTop = position + 'vh';
  list.style.transition = '1s';
}

// Это нужно, чтобы когда пользователь перевернул экран, слайд сохранился
function handleMobilePhoneResizeMax(e) {
  if (e.matches) {        // Проверяем, верен ли медиа-запрос
    list.style.marginLeft = 0;
    list.style.marginTop = position + 'vh';
    list.style.transition = '0s';
  }
}
function handleMobilePhoneResizeMin(e) {
  if (e.matches) {
    console.log(list.style.marginLeft = position + 'vw');
    console.log(list.style.marginTop = 0);
    list.style.transition = '0s';
  }
}

// Чтобы кликать стрелочками с клавиатуры
function swipeKeyboard(evt) {
  if (evt.key === 'ArrowRight') swipeRight();
  if (evt.key === 'ArrowLeft') swipeLeft();
  if (evt.key === 'ArrowUp') swipeDown();
  if (evt.key === 'ArrowDown') swipeUp();
}

// Обработчики событий

angleRight.addEventListener('click', swipeRight);
angleLeft.addEventListener('click', swipeLeft);
angleUp.addEventListener('click', swipeDown);
angleDown.addEventListener('click', swipeUp);

document.addEventListener('keydown', swipeKeyboard);

mQueryMax.addListener(handleMobilePhoneResizeMax);
mQueryMin.addListener(handleMobilePhoneResizeMin);