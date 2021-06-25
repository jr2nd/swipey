const swipeycontainer = document.querySelector('#swipey-container');
const swipeys = document.querySelector('.swipey');
const answer = document.querySelector('#answer');
const startstop = document.querySelector('#startstop');
const coords = document.querySelector('#coords');
const mousex = document.querySelector('#mousex');
const mousey = cocument.querySelector('#mousey');

for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('touchstart', swipestart);
  swipey[i].addEventListener('touchmove', swipemove);
  swipey[i].addEventListener('touchcancel', swipecancel);
  swipey[i].addEventListener('touchend', swipeend);
}

function swipestart() {
  answer.innerHTML = "swipe start"
}
function swipemove() {

}
function swipecancel() {
  startstop.innerHTML = 'swipe cancelled'
}
function swipeend() {
  startstop.innerHTML = 'swipe end'
}
