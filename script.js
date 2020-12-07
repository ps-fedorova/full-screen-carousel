const carousel = document.querySelector('.carousel');

const list = carousel.querySelector('.carousel__list');
const listElem = carousel.querySelectorAll('.carousel__item');

const angleLeft = carousel.querySelector('.fa-angle-left');
const angleRight = carousel.querySelector('.fa-angle-right')

console.log(angleLeft);

let width = 100; // ширина картинки
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

// Чтобы кликать стрелочками с клавиатуры
function swipeKeyboard(evt) {
  if (evt.key === 'ArrowRight') swipeRight();
  if (evt.key === 'ArrowLeft') swipeLeft();
}

// Обработчики событий
angleRight.addEventListener('click', swipeRight);
angleLeft.addEventListener('click', swipeLeft);

document.addEventListener('keydown', swipeKeyboard);

// чтобы сделать бесконечный слайдер нужен массив и условие, что если массив закончился, то let position = 0;
