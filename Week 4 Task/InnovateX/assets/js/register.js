document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const selectedDomain = document.getElementById("domain").value;

        // Email Validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("❌ Please enter a valid email address.");
            return;
        }

        // Phone Number Validation (10-digit only)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("❌ Please enter a valid 10-digit phone number.");
            return;
        }

        // Domain Selection Validation
        if (!selectedDomain) {
            alert("❌ Please select a track.");
            return;
        }

        // Display Popup Confirmation
        alert("✅ You are successfully registered for " + selectedDomain + " track!");

        // Redirect to the appropriate speaker page
        if (selectedDomain === "cybersecurity") {
            window.location.href = "cybersecurity.html";
        } else if (selectedDomain === "blockchain") {
            window.location.href = "blockchain.html";
        } else if (selectedDomain === "awsandcloud") {
            window.location.href = "awscloud.html";
        }
    });
});
