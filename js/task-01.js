
const categoriesEl = document.querySelectorAll('.item');

const numberOfCategoriesEl = categoriesEl.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

const itemElements = categoriesEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`)
})

















