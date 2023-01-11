function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
const buttons = document.querySelectorAll('button');
const btnCreate = buttons[0];
const btnDestroy = buttons[1];
const elemsDiv = [];

inputNumEl.addEventListener('change', e => {
  console.log(inputNumEl.value);
});

btnCreate.addEventListener('click', e => {
  const createDivEl = document.createElement('div');
  for (let i = 0; i <= inputNumEl.value; i += 1) {
    elemsDiv.push(createDivEl);
  }
  const elements = elemsDiv.map(a => a);
  boxesEl.insertAdjacentElement('beforeend', ...elements);
});
btnDestroy.addEventListener('click', e => {
  console.log('destroy');
});
