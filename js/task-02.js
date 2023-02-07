const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const createItem = (textForItem) => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.textContent = textForItem;
  ingredientItemEl.classList.add('item');
  return ingredientItemEl;
}

const insertItems = (array) => {
  ingredientsListEl.append(...array.map((element) => createItem(element)))
}

insertItems(ingredients);

console.log(ingredientsListEl);
