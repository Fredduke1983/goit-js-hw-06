function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');
// const divsElBoxes = boxesEl.querySelector('div');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const elemsDiv = [];

inputNumEl.addEventListener('change', e => {
  // console.log(inputNumEl.value);
});

btnCreate.addEventListener('click', e => {
  createBoxes(inputNumEl.value);
  // for (let i = 0; i < inputNumEl.value; i++) {
  //   const createDivEl = document.createElement('div');
  //   elemsDiv.push(createDivEl);
  // }
  // boxesEl.append(...elemsDiv.map(a => a));
});

btnDestroy.addEventListener('click', e => {
  for (let i = 0; i < inputNumEl.value; i++) {
    const divsElBoxes = boxesEl.querySelector('div');
    divsElBoxes.remove();
  }

  console.log('destroy');
});

const createBoxes = amount => {
  for (let i = 0; i < amount; i++) {
    const createDivEl = document.createElement('div');
    elemsDiv.push(createDivEl);
  }
  boxesEl.append(...elemsDiv.map(a => a));
  // return;
};
