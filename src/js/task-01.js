const itemRef = document.querySelectorAll('.item h2')
itemRef.forEach (element => console.log(`Категория: ${element.textContent}
Количество элементов: ${element.nextElementSibling.children.length}`))

    