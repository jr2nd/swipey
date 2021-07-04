const swipeycontainer = document.querySelector('#swipey-container');
const swipey = document.querySelectorAll('.swipey');
const answer = document.querySelector('#answer');
const startstop = document.querySelector('#startstop');
const coords = document.querySelector('#coords');
const mousex = document.querySelector('#mousex');
const mousey = document.querySelector('#mousey');
let swiperight, swipeleft;
for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('touchstart', swipestart);
  swipey[i].addEventListener('touchcancel', swipecancel);
  swipey[i].addEventListener('touchend', swipeend);
} //add touch event listeners`
function swipestart() {
  this.touches[0].clientX < swipey[0].clientWidth / 4 ? swipeyDirection = 'to right' : swipeyDirection= 'to left';
swipemove(this, swipeyDirection);
} //swipestart()
function swipemove(t, leftOrRight) {
  let swipeyX = t.touches[0].clientX;
  let swipeywidth = swipey[0].clientWidth;
  slider = parseInt((swipeyX / swipeywidth) * 100);
  let color1 = 'black',
    color2 = 'yellow',
    color3 = 'yellow',
    color4 = 'yellow';
  startstop.innerHTML = slider + ' ' + leftOrRight;//DEBUG
  t.style.backgroundImage =
    'linear-gradient(' +
    leftOrRight +
    ', ' +
    color1 +
    ', ' +
    color2 +
    ', ' +
    color3 +
    ', ' +
    color4 +
    ')';
} //swipemove()
function swipecancel(e) {
  startstop.innerHTML = 'swipe cancelled';
} //swipecancel()
function swipeend(e) {
  startstop.innerHTML = 'swipe end';
} //swipeend()
