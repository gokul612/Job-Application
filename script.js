document
  .getElementById("jobApplicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cgpa = parseFloat(document.getElementById("cgpa").value);
    const role = document.getElementById("role").value.toLowerCase();
    const message = document.getElementById("message");
    const Graduation = document.getElementById("gy").value;
    let errorMessage = "";

    if (cgpa <= 7.5) {
      errorMessage += "CGPA must be greater than 7.5. ";
    }

    if (Graduation < 2025) {
      errorMessage += "Your Graduation Year must be  2025 or above. ";
    }

    if (errorMessage) {
      message.textContent = errorMessage.trim();
      message.style.color = "red";
    } else {
      message.textContent = "Application submitted successfully!";
      message.style.color = "green";
    }
  });
