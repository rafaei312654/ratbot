window.onload = () => {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
    loader.style.display = 'none'; 
    mainContent.style.display = 'block';
  }, 2000);

  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('https://login-api-jgp9.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (data.success) {
        errorMessage.textContent = 'Login bem-sucedido!';
        window.location.href = data.redirect;
      } else {
        errorMessage.textContent = data.message;
      }
    } catch (error) {
      errorMessage.textContent = 'Erro de conexão.';
    }
  });
};
