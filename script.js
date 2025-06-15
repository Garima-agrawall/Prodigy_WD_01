
document.addEventListener("DOMContentLoaded", function () {
  const emailInputs = document.querySelectorAll('.email-box input');
  const buttons = document.querySelectorAll('.email-box button');

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const email = emailInputs[index].value.trim();
      if (email === "") {
        alert("Please enter your email to get started!");
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
      } else {
        alert("Thank you! A confirmation email has been sent to " + email);
        emailInputs[index].value = "";
      }
    });
  });

  function validateEmail(email) {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
