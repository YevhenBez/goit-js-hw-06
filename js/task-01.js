const arrayCategoriesLiEl = document.querySelectorAll('.item');
const numberCategoriesLi = arrayCategoriesLiEl.length;
console.log(`Number of categories: ${numberCategoriesLi}`);

const body = document.body;
const paragraph = body.firstElementChild;
const list = paragraph.nextElementSibling;
const categoriesLiForAnimals = list.firstElementChild;

const titleAnimals = categoriesLiForAnimals.firstElementChild.textContent;
console.log(`Category: ${titleAnimals}`);

const secondListAnimals = categoriesLiForAnimals.lastElementChild;

const numbersSecondListAnimals = secondListAnimals.children.length;
console.log(`Elements: ${ numbersSecondListAnimals }`);
