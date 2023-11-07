const removeBtn = document.querySelector(`button[data-action="decrement"]`);
const addBtn = document.querySelector(`button[data-action="increment"]`);
const valueSubs = document.querySelector(`#value`)

let counterValue = 0;

const remove = (event) => {
    counterValue -= 1;
    valueSubs.textContent = counterValue;
    console.log(counterValue);
}

removeBtn.addEventListener("click", remove);

const add = (event) => {
    counterValue += 1;
    valueSubs.textContent = counterValue;
    console.log(counterValue);
}

addBtn.addEventListener("click", add);
