const validUsers = [
  { username: 'rotella', password: 'ferot123', redirect: './img/index.html' },
  { username: 'jow', password: 'dinossauro123', redirect: './aluno.html' },
  { username: 'tadeu', password: 'tadano', redirect: './aluno2.html' },
  { username: 'Polis', password: 'corno', redirect: './aluno3.html' },
];

// Evento que é executado após a página ser carregada
window.onload = () => {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
    loader.style.display = 'none'; 
    mainContent.style.display = 'block';
  }, 2000); 


  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  // Adiciona um evento para tratar o envio do formulário
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = document.getElementById('username').value; // Captura o nome de usuário
    const password = document.getElementById('password').value; // Captura a senha

    // Verifica se o usuário é válido
    const user = validUsers.find(user => user.username === username && user.password === password);
    
    if (user) {
      errorMessage.textContent = 'Login bem-sucedido!';
      window.location.href = user.redirect; 
    } else {
      errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
  });
};
