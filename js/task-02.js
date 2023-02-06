const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstLi = document.createElement('li');
firstLi.textContent = ingredients[0];
firstLi.classList.add('item');

const secondLi = document.createElement('li');
secondLi.textContent = ingredients[1];
secondLi.classList.add('item');

const thirdLi = document.createElement('li');
thirdLi.textContent = ingredients[2];
thirdLi.classList.add('item');

const fourthLi = document.createElement('li');
fourthLi.textContent = ingredients[3];
fourthLi.classList.add('item');

const fifthLi = document.createElement('li');
fifthLi.textContent = ingredients[4];
fifthLi.classList.add('item');

const sixthLi = document.createElement('li');
sixthLi.textContent = ingredients[5];
sixthLi.classList.add('item');

const list = document.querySelector('#ingredients');

list.append(firstLi, secondLi, thirdLi, fourthLi, fifthLi, sixthLi);
