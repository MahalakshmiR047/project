document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    emailError.textContent = '';
    passwordError.textContent = '';
  
    const validEmail = 'maha123@gmail.com';
    const validPassword = '12345';
  
    let hasError = false;
  
    if (!email) {
      emailError.textContent = 'Email is required!';
      hasError = true;
    } else if (email !== validEmail) {
      emailError.textContent = 'Incorrect email!';
      hasError = true;
    }

    if (!password) {
      passwordError.textContent = 'Password is required!';
      hasError = true;
    } else if (password !== validPassword) {
      passwordError.textContent = 'Incorrect password!';
      hasError = true;
    }
  
    if (!hasError) {
      setTimeout(() => alert('Login successful!'), 1000);
    }
  });
  