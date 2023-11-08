const categories = document.querySelectorAll(".item")
console.log("Number of categories:", categories.length)

const list = document.querySelector(".item")

const firstCategory = list.firstElementChild
console.log("Category:", firstCategory.textContent)

const firstSibling = firstCategory.nextElementSibling

const firstElement = firstSibling.querySelectorAll("li")
console.log("Elements:", firstElement.length)

const secondChild= list.nextElementSibling

const secondCategory = secondChild.firstElementChild
console.log("Category:", secondCategory.textContent)

const secondSibling = secondCategory.nextElementSibling

const secondElement = secondSibling.querySelectorAll("li")
console.log("Elements:", secondElement.length)

const thirdChild = secondChild.nextElementSibling

const thirdCategory = thirdChild.firstElementChild
console.log("Category:", thirdCategory.textContent)

const thirdSibling = thirdCategory.nextElementSibling

const thirdElement = thirdSibling.querySelectorAll("li")
console.log("Elements:", thirdElement.length)
