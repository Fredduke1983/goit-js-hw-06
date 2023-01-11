const abracadabra = document.getElementById("text");
const slider = document.getElementById("font-size-control");

slider.addEventListener("change", (event) => {
  console.log();
  abracadabra.style.fontSize = `${event.currentTarget.value}px`;
});
