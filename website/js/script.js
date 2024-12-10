// Hole den Button und die Nachricht
const button = document.getElementById('magicButton');
const message = document.getElementById('message');

avocado.style.left = `${Math.random() * (window.innerWidth - 60)}px`; 
avocado.style.top = `${Math.random() * (window.innerHeight - 60)}px`;

newX = (newX <= 0) ? 0 : windowWidth - avocadoRect.width;
newY = (newY <= 0) ? 0 : windowHeight - avocadoRect.height;