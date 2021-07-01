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
} //for
function swipestart(event) {
  let swiperight = event.touches[0].clientX < swipey[0].clientWidth / 4;
  let swipeleft = event.touches[0].clientX > (swipey[0].clientWidth / 4) * 3;
  if (swiperight) swipemove(event, this, 'swiperight');
  if (swipeleft) swipemove(event, this, 'swipeleft');
} //swipestart()
function swipemove(e, t, leftOrRight) {
  startstop.innerHTML = leftOrRight; //DEBUG
  let swipeyX = e.touches[0].clientX;
  let swipeywidth = swipey[0].clientWidth;
  let swipeyDirection = 'to right';
  if (leftOrRight === 'swipeleft') swipeyDirection == 'to left';
  if (leftOrRight === 'swiperight') swipeyDirection = 'to right';
  slider = parseInt((swipeyX / swipeywidth) * 100);
  let color1 = 'black',
    color2,
    color3,
    color4 = 'yellow';
  if (swipeyDirection === 'to left') {
    slider < 75 ? (color2 = 'black') : (color2 = 'yellow');
    slider < 50 ? (color3 = 'black') : (color3 = 'yellow');
  } //if
  if (swipeyDirection === 'to right') {
    slider > 25 ? (color2 = 'black') : (color2 = 'yellow');
    slider > 50 ? (color3 = 'black') : (color3 = 'yellow');
  } //if
  t.style.backgroundImage =
    'linear-gradient(' +
    swipeyDirection +
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
