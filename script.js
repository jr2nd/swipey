const swipeycontainer = document.querySelector('#swipey-container');
const swipey = document.querySelectorAll('.swipey');
const answer = document.querySelector('#answer');
const startstop = document.querySelector('#startstop');
const coords = document.querySelector('#coords');
const mousex = document.querySelector('#mousex');
const mousey = document.querySelector('#mousey');

for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('touchstart', swipestart);
  swipey[i].addEventListener('touchmove', swipemove);
  swipey[i].addEventListener('touchcancel', swipecancel);
  swipey[i].addEventListener('touchend', swipeend);
}

function swipestart(e) {
  mousex.innerHTML = e.touches[0].clientX;
  mousey.innerHTML = e.touches[0].clientY;
  swipemove()
}
function swipemove(e) {
  coords.innerHTML = e.touches[0].clientX + ' ' + e.touches[0].clientY;
}
function swipecancel(e) {
  startstop.innerHTML = 'swipe cancelled';
}
function swipeend(e) {
  startstop.innerHTML = 'swipe end';
}