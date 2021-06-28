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
let swipeleft = e.touches[0].clientX > 50;
startstop.innerHTML = swipeleft;
}
function swipemove(e) {
let swipeyX = e.touches[0].clientX;
let swipeywidth = swipey[0].clientWidth;
let color1, color2, color3, color4;
slider = parseInt((swipeyX / swipeywidth) * 100);
slider < 25 ? color1 = 'yellow' : color1 = 'black';
slider < 50 ? color2 = 'yellow' : color2 = 'black';
slider < 75 ? color3 = 'yellow' : color3 = 'black';
slider < 100 ? color4 = 'yellow' : color4 = 'black';
this.style.backgroundImage = "linear-gradient( to left, " +
color1 + ", " +
color2 + ", " +
color3 + ", " +
color4 + ")";
}
function swipecancel(e) {
  startstop.innerHTML = 'swipe cancelled';
}
function swipeend(e) {
  startstop.innerHTML = 'swipe end';
}