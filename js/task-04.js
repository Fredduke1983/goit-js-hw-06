const buttonDecr = document.querySelector("button[data-action='decrement']");
const buttonIncr = document.querySelector("button[data-action='increment']");

const val = document.getElementById("value");
let counterValue = Number(val.textContent);

buttonDecr.addEventListener("click", () => {
  counterValue -= 1;
  val.textContent = counterValue;
});

buttonIncr.addEventListener("click", () => {
  counterValue += 1;
  val.textContent = counterValue;
});
