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
console.log(`Elements: ${numbersSecondListAnimals}`);

const categoriesLiForProducts = categoriesLiForAnimals.nextElementSibling;

const titleProducts = categoriesLiForProducts.firstElementChild.textContent;
console.log(`Category: ${titleProducts}`);

const secondListProducts = categoriesLiForProducts.lastElementChild;

const numbersSecondListProducts = secondListProducts.children.length;
console.log(`Elements: ${numbersSecondListProducts}`);

const categoriesLiForTechnologies = categoriesLiForProducts.nextElementSibling;

const titleTechnologies = categoriesLiForTechnologies.firstElementChild.textContent;
console.log(`Category: ${titleTechnologies}`);

const secondListTechnologies = categoriesLiForTechnologies.lastElementChild;

const numbersSecondListTechnologies = secondListTechnologies.children.length;
console.log(`Elements: ${numbersSecondListTechnologies}`);