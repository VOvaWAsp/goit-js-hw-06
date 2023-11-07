const btnChangeColor = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")
const body = document.querySelector("body")

btnChangeColor.addEventListener("click", getRandomHexColor)

function getRandomHexColor() {
  const changeColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  body.style.backgroundColor = `${changeColor}`
  spanColor.innerHTML = changeColor
}