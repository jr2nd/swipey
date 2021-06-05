let swipeycontainer = document.getElementById('swipey-container');
let swipey = document.getElementsByClassName('swipey');
let coords = document.getElementById('coords');
let down = false;
let mywidth = 300;

for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('mousedown', swipeon);
  swipey[i].addEventListener('mouseup', swipeoff);
  swipey[i].addEventListener('mousemove', swipemove);
  swipey[i].addEventListener('mouseout', swipeout);
  swipey[i].style.width = mywidth + 'px';
}

function swipeon() {
  down = true;
}

function swipeoff() {
  this.style.width="300px"
  down = false;
}

function swipemove() {
  if (down === true) {
    mywidth -= 1;
    this.style.width = mywidth + 'px';
  } //if
} //function

function swipeout() {
  this.style.width = "300px";
  down = false;
}
