const input = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  outName.textContent = event.currentTarget.value;
  if (outName.textContent == "") {
    outName.textContent = "Anonymous";
  }
});
