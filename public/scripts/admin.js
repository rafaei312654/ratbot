document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("solicitacoes");
  
    const res = await fetch("http://localhost:3000/api/requests");
    const requests = await res.json();
  
    if (requests.length === 0) {
      container.innerHTML = "<p>Sem solicitações no momento.</p>";
    } else {
      requests.forEach(req => {
        const div = document.createElement("div");
        div.className = "barra";
        div.innerHTML = `
          <span>${req.nome}</span>
          <button onclick="marcarComoFeito('${req._id}')">Feito</button>
        `;
        container.appendChild(div);
      });
    }
  });
  
  async function marcarComoFeito(id) {
    await fetch(`http://localhost:3000/api/requests/${id}`, { method: "DELETE" });
    window.location.reload();
  }
  