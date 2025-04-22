document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;


  if (newUsername === '' || newPassword === '' || confirmPassword === '') {
    alert('Please fill in all fields');
    return;
  }


  if (newPassword !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }


  localStorage.setItem('username', newUsername);
  localStorage.setItem('password', newPassword);


  alert('Registration successful! You can now log in.');
  window.location.href = 'login.html';  
});
