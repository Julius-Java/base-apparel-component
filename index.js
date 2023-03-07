const form = document.getElementById("form")
const input = document.querySelector("form input");
const errorMessage = document.querySelector(".error-message")


function isValidEmail(email) {
    // Regular expression pattern for validating email addresses
    const pattern = /^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$/;
    // Use the RegExp.test() function to check if the email matches the pattern
    return pattern.test(email);
}


form.addEventListener("submit", e => {
    e.preventDefault()

    const email = input.value;

    if (!isValidEmail(email)) {
        form.classList.add("error")
        errorMessage.innerHTML = "Please provide a valid email"
        setTimeout(() => {
            form.classList.remove("error")
        }, 4000)
    } else {
        form.classList.remove("error")
    }
})