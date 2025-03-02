document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const toggleFormText = document.getElementById("toggle-form");
    const confirmPasswordGroup = document.getElementById("confirm-password-group");
    const authForm = document.getElementById("auth-form");

    let isRegistering = false;

    toggleFormText.addEventListener("click", function () {
        isRegistering = !isRegistering;

        if (isRegistering) {
            formTitle.textContent = "Register";
            confirmPasswordGroup.style.display = "block";
            toggleFormText.innerHTML = 'Already have an account? <a href="#">Login</a>';
        } else {
            formTitle.textContent = "Login";
            confirmPasswordGroup.style.display = "none";
            toggleFormText.innerHTML = 'Don\'t have an account? <a href="#">Register</a>';
        }
    });

    authForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (isRegistering) {
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            alert("Registered Successfully!");
        } else {
            alert("Logged in Successfully!");
        }
    });
});
