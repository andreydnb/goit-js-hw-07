const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsUlRef = document.querySelector('#ingredients')

const liRef = ingredients.map(ingredient => {
  const ingredientLiRef = document.createElement('li')
  ingredientLiRef.textContent = ingredient;

  return ingredientLiRef
});

console.log(liRef)

ingredientsUlRef.append(...liRef)