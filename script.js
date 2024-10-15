'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 15;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)

let highScore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Number is too high!';
      //   const cur = document.querySelector('.score').textContent
      //   document.querySelector('.score').textContent = cur - 1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Number is too low!';
      //   const cur = document.querySelector('.score').textContent
      //   document.querySelector('.score').textContent = cur - 1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})





