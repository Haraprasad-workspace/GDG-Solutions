document.addEventListener("DOMContentLoaded", function () {
    // Load stored preferences
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.style.background = "#222";
        document.body.style.color = "#fff";
        document.getElementById("dark-mode").checked = true;
    }
    document.getElementById("notifications").checked = localStorage.getItem("notifications") === "true";
    document.getElementById("ai-feedback").checked = localStorage.getItem("ai-feedback") === "true";
});

// Update Profile
function updateProfile() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    alert(`Profile updated! Name: ${name}, Email: ${email}`);
}

// Save Preferences
function savePreferences() {
    let darkMode = document.getElementById("dark-mode").checked;
    let notifications = document.getElementById("notifications").checked;
    let aiFeedback = document.getElementById("ai-feedback").checked;

    localStorage.setItem("dark-mode", darkMode);
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("ai-feedback", aiFeedback);

    alert("Preferences saved!");
}

// Logout
function logout() {
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page
}
