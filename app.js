const COMMON_PASSWORD = '1234';

function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorEl  = document.getElementById('error-msg');
  const btnText  = document.getElementById('btn-text');

  errorEl.classList.remove('show');

  if (username !== '' && password === COMMON_PASSWORD) {
    btnText.textContent = 'Logging in...';
    sessionStorage.setItem('user', username);
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 800);
  } else {
    errorEl.textContent = '❌ Wrong password!';
    errorEl.classList.add('show');
    btnText.textContent = 'Login';
  }
}

function togglePw() {
  const input = document.getElementById('password');
  input.type = input.type === 'password' ? 'text' : 'password';
}