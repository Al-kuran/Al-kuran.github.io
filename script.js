// Get the form element
const loginForm = document.getElementById('login-form');

// Add an event listener for the form submission
loginForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the username and password values from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Check the user's credentials (you would typically do this server-side, but for this example we'll just use some hardcoded values)
  if (email === 'myusername@gmail.com' && password === 'mypassword@gmail.com') {
    // If the credentials are correct, redirect the user to the dashboard page
    window.location.href = '/MainSiteAfterLogin';
  } else {
    // If the credentials are incorrect, display an error message
    const errorElement = document.createElement('p');
    errorElement.textContent = 'كلمة السر او الايميل خاطئة';
    loginForm.appendChild(errorElement);
  }
});