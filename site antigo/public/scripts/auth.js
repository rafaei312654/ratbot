document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        if (data.success) window.location.href = "index.html";
        else alert("Login falhou: " + data.message);
      });
    }
  
    if (registerForm) {
      registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(registerForm);
        const res = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        if (data.success) window.location.href = "login.html";
        else alert("Erro no cadastro: " + data.message);
      });
    }
  });
  
