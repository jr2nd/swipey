const DEBUG = 1;
console.log(`(DEBUG LEVEL: ${DEBUG})`);
const swipeycontainer = document.querySelector('#swipey-container');
const swipey = document.querySelectorAll('.swipey');
const answer = document.querySelector('#answer');
const startstop = document.querySelector('#startstop');
const coords = document.querySelector('#coords');
const mousex = document.querySelector('#mousex');
const mousey = document.querySelector('#mousey');
const buttonsInput = document.querySelectorAll('.buttonInput');

for (let i = 0; i < buttonsInput.length; i++) {
  buttonsInput[i].addEventListener('click', function() {
    submitText(this);
  });
} //add input buttons event
function submitText(t) {
  const inputItem = document.querySelector('#inputItem');
  let text = inputItem.value;
  if(text.trim() === "")return;
  newItem = document.createElement('div');
  newEntry = document.createTextNode(text);
  newItem.appendChild(newEntry)
  if (t.id === 'buttonTodo') {
    newItem.classList.add('todo')
    swipeycontainer.appendChild(newItem)
  }
    if (t.id === 'buttonToday') {
      newItem.classList.add('today')
   swipeycontainer.insertBefore(newItem, swipeycontainer.childNodes[0])
    }
    inputItem.value = '';
    inputItem.focus();  
} //submitText
for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('touchstart', swipestart);
  swipey[i].addEventListener('touchcancel', function() {
    swipecancel(this);
  });
  swipey[i].addEventListener('touchend', function() {
    swipeend(this);
  });
} //add touch event listeners
for (let i = 0; i < swipey.length; i++) {
  swipey[i].addEventListener('click', function() {
    swipeend(this);
  });
} //add mouse event listeners
function swipestart(e) {
  this.classList.remove('cancelled');
  e.touches[0].clientX < swipey[0].clientWidth / 2
    ? (swipeyDirection = 'right')
    : (swipeyDirection = 'left');
  swipemove(this, e, swipeyDirection);
} //swipestart()
function swipemove(t, e, leftOrRight) {
  let swipeyX = e.touches[0].clientX;
  let swipeyWidth = t.clientWidth;
  slider = parseInt((swipeyX / swipeyWidth) * 100);
  let color1 = 'green',
    color2 = 'green',
    color3 = 'green',
    color4 = 'yellow';
  t.style.backgroundImage = `(t.style.backgroundImage=(${leftOrRight}, ${color1}, ${color2}, ${color3}, ${color4});`;
} //swipemove()
function swipecancel(t) {
  this.classList.add('cancelled');
} //swipecancel()
function swipeend(t) {
  startstop.innerHTML = startstop.innerHTML + ' ' + t;
} /*swipeend()*/
