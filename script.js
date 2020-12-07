const carousel = document.querySelector('.carousel');

const list = carousel.querySelector('.carousel__list');
const listElem = carousel.querySelectorAll('.carousel__item');

const angleLeft = carousel.querySelector('.fa-angle-left');
const angleRight = carousel.querySelector('.fa-angle-right');
const angleUp = carousel.querySelector('.fa-angle-up');
const angleDown = carousel.querySelector('.fa-angle-down');

let width = 100; // ширина картинки
let hight = 100; // высота картинки
let position = 0; // положение ленты прокрутки

function swipeRight() {
  // сдвиг вправо
  position -= width;
  // последнее передвижение вправо на 1 элемент
  position = Math.max(position, -width * (listElem.length - 1));
  list.style.marginLeft = position + 'vw';
}

function swipeLeft() {
  // сдвиг влево
  position += width;
  // последнее передвижение влево на 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'vw';
}

function swipeUp() {
  // сдвиг вверх
  position -= hight;
  // последнее передвижение вправо на 1 элемент
  position = Math.max(position, -hight * (listElem.length - 1));
  list.style.marginTop = position + 'vh';
}

function swipeDown() {
  // сдвиг вниз
  position += hight;
  // последнее передвижение влево на 1 элемент
  position = Math.min(position, 0)
  list.style.marginTop = position + 'vh';
}

// Чтобы кликать стрелочками с клавиатуры
function swipeKeyboard(evt) {
  if (evt.key === 'ArrowRight') swipeRight();
  if (evt.key === 'ArrowLeft') swipeLeft();
}

// Обработчики событий
angleRight.addEventListener('click', swipeRight);
angleLeft.addEventListener('click', swipeLeft);
angleUp.addEventListener('click', swipeDown);
angleDown.addEventListener('click', swipeUp);

document.addEventListener('keydown', swipeKeyboard);

// чтобы сделать бесконечный слайдер нужен массив и условие, что если массив закончился, то let position = 0;
