let uname = document.getElementById("uname")
let nameError = document.getElementById("nameError")

let emails = document.getElementById("emails")
let emailError = document.getElementById("emailError")

let Message = document.getElementById("Message");
let MessageError = document.getElementById("MessageError")

let contactForm = document.getElementById("contactForm")

uname.addEventListener("blur", () => {
    if (uname.value === "") {
        nameError.textContent = "name is Required"
    } else {
        nameError.textContent = ""
    }
})

emails.addEventListener("blur", () => {
    if (emails.value === "") {
        emailError.textContent = "email is Required"
    } else {
        emailError.textContent = ""
    }
})

Message.addEventListener("blur", () => {
    if (Message.value === "") {
        MessageError.textContent = "message is Required"
    } else {
        MessageError.textContent = ""
    }
})


contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let check = true

    if (uname.value === "") {
        nameError.textContent = "Name is required"
        check = false
    }

    if (emails.value === "") {
        emailError.textContent = "Email is required"
        check = false
    }

    if (Message.value === "") {
        MessageError.textContent = "Message is required"
        check = false
    }

    if (check) {
        alert("Your form is successfully submitted")
        contactForm.reset()
    }
})