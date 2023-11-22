'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🧨 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🧨 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct answer!';
    
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber
  }
});

document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?'

  document.querySelector('.guess').value = null

})