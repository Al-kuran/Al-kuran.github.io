// Get the form element
const loginForm = document.getElementById('login-form');

// Add an event listener for the form submission
loginForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the username and password values from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  

  if (email === 'Admin@gmail.com' && password === 'Admin@gmail.com') {

    // Store the user email in localStorage
    localStorage.setItem('userEmail', email);

    // Redirect the user to the main site after login
    window.location.href = '/Admin.html';
  } else if (email === 'Abdullah@gmail.com' && password === 'Abdullah1234') {

    // Store the user email in localStorage
    localStorage.setItem('userEmail', email);

    // Redirect the user to the main site after login
    window.location.href = '/MainSiteAfterLogin';
  } else {

    const errorElement = document.createElement('p');
    errorElement.textContent = 'كلمة السر او الايميل خاطئة';
    errorElement.style.fontFamily = "'Tajawal', sans-serif";
    

    const existingErrorElement = loginForm.querySelector('.error-message');
    if (existingErrorElement) {

      existingErrorElement.textContent = errorElement.textContent;
    } else {

      errorElement.classList.add('error-message');
      loginForm.appendChild(errorElement);
    }
    
  }
});

// Check if the user is already logged in
const userEmail = localStorage.getItem('userEmail');
if (userEmail) {
  // Redirect the user to the main site after login
  window.location.href = '/MainSiteAfterLogin';
}
