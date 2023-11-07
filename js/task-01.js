const category = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log("Categories:", items.length);

items.forEach((item) => {
    const nameCategoty = item.querySelector("h2").textContent;
    const nameItem = item.querySelectorAll("li").length;

    console.log("Category:", nameCategoty);
    console.log("Elements:", nameItem);
})