///////////// LOGIN

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const emailData = document.querySelector('#email-login').value.trim();
  const passwordData = document.querySelector('#password-login').value.trim();

  if (emailData && passwordData) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/authors/login', {
      method: 'POST',
      body: JSON.stringify({ email: emailData, password: passwordData }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};



///////////// SIGN UP


const signupFormHandler = async (event) => {
  event.preventDefault();

  const nameData = document.querySelector('#name-signup').value.trim();
  const emailData = document.querySelector('#email-signup').value.trim();
  const passwordData = document.querySelector('#password-signup').value.trim();

  if (nameData && emailData && passwordData) {
    const response = await fetch('/api/authors', {
      method: 'POST',
      body: JSON.stringify({
        name: nameData, 
        email: emailData, 
        password: passwordData, 
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#logInButton')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signUpButton')
  .addEventListener('submit', signupFormHandler);
