const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');

let width = 100; // ширина картинки
let position = 0; // положение ленты прокрутки

carousel.querySelector('.fa-angle-left').onclick = function () {
  // сдвиг влево
  position += width;
  // последнее передвижение влево на 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'vw';
};

carousel.querySelector('.fa-angle-right').onclick = function () {
  // сдвиг вправо
  position -= width;
  // последнее передвижение вправо на 1 элемент
  position = Math.max(position, -width * (listElems.length - 1));
  list.style.marginLeft = position + 'vw';
};