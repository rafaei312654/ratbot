// auth.js 
import axios from 'axios';

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
      
      const response = await axios.post('/login', {
        username: username, 
        senha: password,   
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;

      if (data.success) {
        errorMessage.textContent = 'Login bem-sucedido!';
        window.location.href = data.redirect; // Redireciona o navegador para a URL fornecida pelo backend.
      } else {
        errorMessage.textContent = data.message || 'Usuário ou senha incorretos.';
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      errorMessage.textContent = 'Erro ao tentar fazer login.';
    }
  });
};
