const logBtn = document.getElementById("log-btn")
const signBtn = document.getElementById("sign-btn")
const closedModal = document.getElementById("close-modal")

function logIn() {
    document.getElementById("overlay").style.display = "block"
}

function signUp() {
    document.getElementById("overlay").style.display = "block"
}

function closeModal() {
    document.getElementById("overlay").style.display = "none"
}

logBtn.addEventListener("click", logIn())
signBtn.addEventListener("click", signUp())

closedModal.addEventListener("click", closeModal())