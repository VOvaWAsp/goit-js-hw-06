const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

  const items = document.createElement("li");
  items.textContent = `${ingredients}`;
items.classList.add("item");
  list.append(items);
