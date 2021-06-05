let swipeycontainer = document.getElementById('swipey-container');
let swipey = document.getElementsByClassName('swipey');
let coords = document.getElementById('coords');
let down = false;

for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('mousedown', swipeon);
  swipey[i].addEventListener('mouseup', swipeoff);
  swipey[i].addEventListener('mousemove', swipemove);
  swipey[i].addEventListener('mouseout', swipeout);
}

function swipeon() {
  down = true;
}

function swipeoff() {
  this.style.width = '97';
  down = false;
}

function swipemove() {
  if (down === true) {
} //if
} //function

function swipeout() {
  this.style.width = '97%';
  down = false;
}