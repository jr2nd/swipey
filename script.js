let swipeycontainer = document.getElementById('swipey-container');
let swipey = document.getElementsByClassName('swipey');
let coords = document.getElementById('coords');
let down = false;

for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('touchstart', swipemove);
  swipey[i].addEventListener('touchmove', swipeout);
  swipey[i].addEventListener('touchcancel', swipemove);
  swipey[i].addEventListener('touchcancel', logswipe);
}

function logswipe() {
  console.log('logswipe');
}

function swipeon() {
  down = true;
}

function swipeoff() {}

function swipemove() {
  if (down === true) {
  } //if
} //function

function swipeout() {
  down = false;
}

function touchswipe() {
  alert('touchswipe');
}
