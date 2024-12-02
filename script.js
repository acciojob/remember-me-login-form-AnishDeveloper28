const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("checkbox");
const existingUserBtn = document.getElementById("existing");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existingUserBtn.style.display = "block";
}

// Handle form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberMeCheckbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    alert(`Logged in as ${username}`);

    if (rememberMeCheckbox.checked) {
        existingUserBtn.style.display = "block";
    }
});

existingUserBtn.addEventListener("click", () => {
    alert(`Logged in as ${savedUsername}`);
});
