const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

let categories = "";
let elCount = "";

for (const el of item) {
  categories = el.children[0].textContent;
  elCount = el.children[1].children.length;

  console.log(`Category: ${categories}`);
  console.log(`Elements: ${elCount}`);
}
