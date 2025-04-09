
window.onload = () => {
  const loader = document.getElementById('loader');
  const main = document.getElementById('main-content');
  const audio = document.getElementById('boot-sound');
  const reloadSound = document.getElementById('reload-sound');

  reloadSound.play();
  setTimeout(() => {
    loader.style.display = 'none';
    main.style.display = 'block';
    audio.play();
  }, 2000);
}
