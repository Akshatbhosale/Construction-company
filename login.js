document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }


  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');
    window.location.href = 'index.html';  
  } else {
    alert('Invalid credentials. Please try again.');
  }
});
