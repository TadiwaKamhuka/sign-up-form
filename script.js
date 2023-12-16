const pass1 = document.querySelector("#password1")
const pass2 = document.querySelector("#password2")
const passStr = document.querySelector(".hidden")

function passwordValidator(password, confirmationPassword) {
    if (pass1.value == pass2.value) {
        passStr.classList.add("hidden")
        console.log("Passwords match")
        return;
    }
    else {
        passStr.classList.remove("hidden")
        console.log("Passwords do not match")

    }
}

const signUp = document.querySelector("button")

signUp.addEventListener("click", passwordValidator)