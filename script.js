const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // redirect to main page after successful login
            window.location.href = '/main-page';
        } else {
            alert(data.message);
        }
        
    } catch (error) {
        console.error(error);
        alert('كلمة السر خاطئة او الايميل خاطئة');
    }
    
    if (email === "maqdadfadhil@gmail.com", password === "Maqdad2007") {
        window.location.href = "file:///C:/Users/fadhl/OneDrive/Desktop/Strange%20Files/website/MainSiteAfterLogin.html";
    }
    if (email === "admin@admin.com", password === "Admin") {
        window.location.href = "file:///C:/Users/fadhl/OneDrive/Desktop/Strange%20Files/website/Admin.html";
    }
});
