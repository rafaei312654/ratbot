document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
  
    // Som de reload
    const sound = new Audio("assets/reload.mp3");
    sound.volume = 0.5;
    sound.play();
  
    // Aguarda 2 segundos e mostra o painel
    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.querySelector("main").style.display = "block";
      document.querySelector("footer").style.display = "block";
    }, 2000);
  });
  