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
  swipey[i].addEventListener('dragstart', swipestart)
}

function swipestart(e) {
 coords.innerHTML = e.targetTouches[0] + 'hello'; 
 
  swipemove(e)
}
function swipemove(e) {

}
function swipecancel(e) {
  startstop.innerHTML = 'swipe cancelled';
}
function swipeend(e) {
  startstop.innerHTML = 'swipe end';
}