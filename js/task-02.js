const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const items = document.createElement("li");
  items.textContent = `${ingredient}`;
  items.classList.add("item");
  list.append(items);
})