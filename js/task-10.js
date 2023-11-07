const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes")
const inputCrDiv = document.querySelector("input")



function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener("click", () => createBoxes(inputCrDiv.value))

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    boxes.appendChild(div);
    size += 10;
    
  }
}

btnDestroy.addEventListener("click", destroyBoxes)

function destroyBoxes() {
  boxes.innerHTML = ""
}