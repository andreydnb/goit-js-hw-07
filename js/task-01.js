const categoriesRef = document.querySelector('#categories')
console.log(`В списке ${categoriesRef.children.length} категории.`)

const itemRef = document.querySelectorAll('.item h2')
itemRef.forEach (element => console.log(`Категория: ${element.textContent}
Количество элементов: ${element.nextElementSibling.children.length}`))

    