document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  try {
    const response = await fetch('https://login-api.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = data.redirect;
    } else {
      errorMessage.textContent = data.message;
    }
  } catch (error) {
    errorMessage.textContent = 'Erro de conexão.';
  }
});

