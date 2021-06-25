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

function swipestart() {
  startstop.innerHTML = 'swipe start';
  swipey[3].innerHTML='swipestart'
}
function swipemove() {}
function swipecancel() {
  startstop.innerHTML = 'swipe cancelled';
}
function swipeend() {
  startstop.innerHTML = 'swipe end';
  swipey[3].innerHTML='swipe stop'
}
