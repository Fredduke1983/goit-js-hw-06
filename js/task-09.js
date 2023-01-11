function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const hexColorEl = document.querySelector('.color');
const btnChngColor = document.querySelector('.change-color');

btnChngColor.addEventListener('click', e => {
  const color = getRandomHexColor();
  hexColorEl.textContent = color;
  document.body.style.backgroundColor = color;
});
