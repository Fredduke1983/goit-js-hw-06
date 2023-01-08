const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsSelector = document.querySelector("#ingredients");

const elementsLiArray = ingredients.map((ingredient) => {
  const elementsLi = document.createElement("li");
  elementsLi.classList.add("item");
  elementsLi.textContent = ingredient;
  return elementsLi;
});

ingredientsSelector.append(...elementsLiArray);
