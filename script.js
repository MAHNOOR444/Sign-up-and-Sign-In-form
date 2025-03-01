document.addEventListener("DOMContentLoaded", () => {
    // Sign In Form Submission
    const signinForm = document.getElementById("signin-form");
    if (signinForm) {
        signinForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Sign In Successful!");
        });
    }

    // Sign Up Form Submission
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            alert("Sign Up Successful!");
            window.location.href = "signin.html"; // Redirect to Sign In page
        });
    }
});
