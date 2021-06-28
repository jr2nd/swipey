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
  let color1, color2, color3, color4;
  leftOrRight === 'swiperight' ? color1 = 'black' : color1 = 'yellow'
  leftOrRight === 'swipeleft' ? color4 = 'black' : color4 = 'yellow' 
  slider = parseInt((swipeyX / swipeywidth) * 100);
  slider < 25 ? (color1 = 'black') : (color1 = 'yellow');
  slider < 50 ? (color2 = 'black') : (color2 = 'yellow');
  slider < 75 ? (color3 = 'black') : (color3 = 'yellow');
  slider < 100 ? (color4 = 'black') : (color4 = 'yellow');
  t.style.backgroundImage =
    'linear-gradient( to left, ' +
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
