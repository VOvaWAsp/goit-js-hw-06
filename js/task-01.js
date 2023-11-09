const categories = document.querySelectorAll(".item")
console.log("Number of categories:", categories.length)

categories.forEach(category => {
    const captionCategory = category.firstElementChild.textContent;
    const itemCategory = category.firstElementChild.nextElementSibling.children;

    console.log("Category:", captionCategory)
    console.log("Elements:", itemCategory.length)
})
 