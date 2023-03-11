window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const emailInput = document.querySelector('#email');
      const emailValue = emailInput.value;
      const passwordInput = document.querySelector('#password');
      const passwordValue = passwordInput.value;
      const data = emailValue + ',' + passwordValue;
      const file = new File([data], 'data.txt', {type: 'text/plain'});
      const writer = new FileWriter();
      writer.write(file);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailValue)) {
        window.location.href = "https://www.youtube.com";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  });