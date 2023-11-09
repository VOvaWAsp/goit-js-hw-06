const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredient = document.querySelector("#ingredients")

const ingredient = [...ingredients];

ingredient.forEach((ingr) => {
  const itemIngredient = document.createElement("li")
  itemIngredient.textContent = `${ingr}`;
  listIngredient.append(itemIngredient)
})