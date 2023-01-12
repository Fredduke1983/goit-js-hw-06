function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const elemsDiv = [];
elemsDiv.length = inputNumEl.value;

inputNumEl.addEventListener('change', e => {
  console.log(inputNumEl.value);
});

btnCreate.addEventListener('click', e => {
  const createDivEl = document.createElement('div');
  console.log('create=');
});
btnDestroy.addEventListener('click', e => {
  console.log('destroy');
});
