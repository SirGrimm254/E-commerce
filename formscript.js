function validateRange(input, min, max) {
    let value = input.value.replace(/\D/g, '');
    if(value !== "") {
        let numValue = parseInt(value, 10);
        if (numValue < min) input.value = min;
        if (numValue > max) input.value = max;
        input.value = numValue;
    }
}

function isNumber(event) {
    return event.charCode >= 48 && event.charCode <= 57;
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form Submitted!");

        const username = document.getElementById("username").value;
        const password =  document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const passwordRegex = /^[A-Z][A-Za-z0-9]{7,14}$/;

        if (!username || !password || !confirmPassword) {
            alert("All fields required!");
        }

        if (!passwordRegex.test(password)) {
            alert("Password must start with a capital letter, be 8-15 characters long and contain only letters and numbers.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert("Registration successful! You can now log in.");
            window.location.href = "login.html";
        } catch (error) {
            console.error("Error saving to localStorage:", error);
            alert("An error occurred. please try again.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    

    document.querySelector(".btn input[type='button']").addEventListener("click", function () {

        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
            alert("Login Successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password!");
        }
    });
});