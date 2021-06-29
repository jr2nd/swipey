const swipeycontainer = document.querySelector('#swipey-container');
const swipey = document.querySelectorAll('.swipey');
const answer = document.querySelector('#answer');
const startstop = document.querySelector('#startstop');
const coords = document.querySelector('#coords');
const mousex = document.querySelector('#mousex');
const mousey = document.querySelector('#mousey');

for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('touchstart', swipestart);
  // swipey[i].addEventListener('touchmove', swipemove);
  swipey[i].addEventListener('touchcancel', swipecancel);
  swipey[i].addEventListener('touchend', swipeend);
}
function swipestart(event) {
  let swiperight = event.touches[0].clientX < swipey[0].clientWidth / 4;
  let swipeleft = event.touches[0].clientX > (swipey[0].clientWidth / 4) * 3;
  if(swiperight)(swipemove(event, this, 'swiperight'));
  if(swipeleft)(swipemove(event, this, 'swipeleft'));
}
function swipemove(e, t, leftOrRight) {
  let swipeyX = e.touches[0].clientX;
  let swipeywidth = swipey[0].clientWidth;
  let swipeyDirection = 'to right'
  //leftOrRight === 'swiperight' ? color1 = 'black' : color1 = 'yellow';  leftOrRight === 'swipeleft' ? color4 = 'black' : color4 = 'yellow';
  leftOrRight === 'swipeleft' ? swipeyDirection == 'to left' : swipeyDirection = 'to right';
  slider = parseInt((swipeyX / swipeywidth) * 100);
  color1 = 'black';
  if(swipeyDirection === 'swipeleft'){
  slider < 75 ? (color2 = 'black') : (color2 = 'yellow');
  slider < 50 ? (color3 = 'black') : (color3 = 'yellow');
  slider < 25 ? (color4 = 'black') : (color4 = 'yellow');
  }
  if(swipeyDirection === 'swipeyright'){
  slider > 25 ? (color2 = 'black') : (color2 = 'yellow');
  slider > 50 ? (color3 = 'black') : (color3 = 'yellow');
  slider > 75 ? (color4 = 'black') : (color4 = 'yellow');
  }
  t.style.backgroundImage =
    'linear-gradient(' + swipeyDirection + ', '  +
    color1 +
    ', ' +
    color2 +
    ', ' +
    color3 +
    ', ' +
    color4 +
    ')';
}
function swipecancel(e) {
  startstop.innerHTML = 'swipe cancelled';
}
function swipeend(e) {
  startstop.innerHTML = 'swipe end';
}
