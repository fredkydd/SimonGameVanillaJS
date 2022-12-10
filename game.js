'use strict';
const buttonColours = ['red', 'blue', 'green', 'yellow'], buttons = document.querySelectorAll('.btn'), h1 = document.querySelector('#level-title'), body = document.querySelector('body');

let gamePattern = [], userClickedPattern = [], level = 0, started = false;
// console.log('this is the gamePattern ' + gamePattern);
// console.log('this is the userClickedPattern ' + userClickedPattern);

document.addEventListener('keydown', (x) => {
  if (!started) {
    h1.textContent = ('level ' + level);
    nextSequence();
    started = true;
  }
});

// !USER CLICK
buttons.forEach((item, index, array) => {
  item.addEventListener('click', function (x) {
    const userChosenColor = this.getAttribute('id');
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
});

// !CHECK ANSWER
function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => nextSequence(), 1000);
    }
  } else {
    playSound('wrong');
    body.classList.add('game-over');
    h1.textContent = 'Game Over, Press Any Key to Restart';
    setTimeout(() => body.classList.remove('game-over'), 200);
    startOver();
  }
}

// !GAME SEQUENCE (RANDOM)
function nextSequence() {
  // const randomNumber = Math.floor(Math.random() * 4);
  // const randomChosenColour = buttonColours[randomNumber];

  userClickedPattern = [];
  console.log(userClickedPattern);
  level++;
  h1.textContent = ('level ' + level);

  const randomNumber = () => Math.floor(Math.random() * 4), randomChosenColour = buttonColours[randomNumber()];
  gamePattern.push(randomChosenColour);

  // CHANGE IT PURE CSS
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

// !ANIMATE PRESS
function animatePress(currentColor) {
  document.querySelector('#' + currentColor).classList.add('pressed');
  setTimeout(() => document.querySelector('#' + currentColor).classList.remove('pressed'), 100);
}

// !PLAY  SOUND (RANDOM)
function playSound(name) {
  const audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

// !START OVER
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}







// !USER CLICK SOUND ANIMATE
// buttons.forEach((item, index, array) => {
//   item.addEventListener('click', function (x) {
//     const userChosenColor = this.getAttribute('id');
//     this.classList.add('pressed');
//     setTimeout(() => this.classList.remove('pressed'), 100);

//     console.log(item);
//     console.log(userChosenColor);

//     //! suddenly it also works but how 🤔
//     // const btnAttribute = item.getAttribute('id');

//     switch (userChosenColor) {
//       case 'green': userChosenColor
//         const green = new Audio('sounds/green.mp3');
//         green.play();
//         $(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100);
//         userClickedPattern.push(userChosenColor);
//         checkAnswer(userChosenColor);
//         break;

//       case 'red':
//         const red = new Audio('sounds/red.mp3');
//         red.play();
//         $(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100);
//         userClickedPattern.push(userChosenColor);
//         checkAnswer(userChosenColor);
//         break;

//       case 'yellow':
//         const yellow = new Audio('sounds/yellow.mp3');
//         yellow.play();
//         $(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100);
//         userClickedPattern.push(userChosenColor);
//         checkAnswer(userChosenColor);
//         break;
//       case 'blue':
//         const blue = new Audio('sounds/blue.mp3');
//         blue.play();
//         $(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100);
//         userClickedPattern.push(userChosenColor);
//         checkAnswer(userChosenColor);
//         break;

//       default: console.log(this.innerHTML);
//         break;
//     }
//     console.log(userChosenColor);
//   })
// });