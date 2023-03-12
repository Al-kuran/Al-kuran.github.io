// Get the form element
const loginForm = document.getElementById('login-form');

// Add an event listener for the form submission
loginForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the username and password values from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Generate the authToken using SHA-256 hash function
  const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const authToken = sha256(email + randomString);

  if (email === 'myusername@gmail.com' && password === 'mypassword@gmail.com') {
    // Save the authToken to localStorage
    localStorage.setItem('authToken', authToken);

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

  if (email === 'Abdullah@gmail.com' && password === 'Abdullah1234') {
    // Save the authToken to localStorage
    localStorage.setItem('authToken', authToken);

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
