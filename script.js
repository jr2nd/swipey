const DEBUG = 1;
DEBUG
  ? console.log('DEBUG: ' + DEBUG)
  : console.log('clear all DEBUG statements');
const swipeycontainer = document.querySelector('#swipey-container');
const swipey = document.querySelectorAll('.swipey');
const answer = document.querySelector('#answer');
const startstop = document.querySelector('#startstop');
const coords = document.querySelector('#coords');
const mousex = document.querySelector('#mousex');
const mousey = document.querySelector('#mousey');
for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('touchstart', swipestart);
  swipey[i].addEventListener('touchcancel', swipecancel);
  swipey[i].addEventListener('touchend', swipeend);
} //add touch event listeners`
function swipestart(e) {
  e.touches[0].clientX < swipey[0].clientWidth / 2
    ? (swipeyDirection = 'right')
    : (swipeyDirection = 'left');
  swipemove(this, e, swipeyDirection);
} //swipestart()
function swipemove(swipeyDiv,touchEvent, leftOrRight) {
  startstop.innerHTML = 'swipeyDiv: ' + swipeyDiv;
  let swipeyX = touchEvent.touches[0].clientX;
  let swipeyWidth = swipeyDiv.clientWidth;
  slider = parseInt((swipeyX / swipeyWidth) * 100);
  let color1 = 'black',
    color2 = 'black',
    color3 = 'yellow',
    color4 = 'yellow';
  swipeyDiv.style.backgroundImage="linear-gradient('to right' , green, red, blue, yellow)";
} //swipemove()
function swipecancel(e) {
  startstop.innerHTML = 'swipe cancelled';
} //swipecancel()
function swipeend(e) {
  startstop.innerHTML = 'swipe end';
} /*swipeend()*/
