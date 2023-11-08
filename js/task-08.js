const registForm = document.querySelector(".login-form");

registForm.addEventListener("submit", handleRegist);

function handleRegist(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert("please write a text in login form")
    }

    const loginForm = {
        email,
        password
    }
    console.log("User data:", loginForm);
    form.reset()
    return loginForm;
}
