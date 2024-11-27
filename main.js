'user strict'
const menuIcon = document.getElementById('menu-icon');
const menuBar = document.getElementById('menu-bar');

menuIcon.addEventListener('click', () => {
  menuBar.classList.toggle('visible');
  menuIcon.textContent = menuBar.classList.contains('visible') ? 'close' : 'menu';
});