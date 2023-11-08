const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
   if (output.textContent === "" || event.currentTarget.value === "") {
    return output.textContent = "Anonymous";
}
    output.textContent = event.currentTarget.value;
    })

