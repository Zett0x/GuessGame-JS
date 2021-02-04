'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let state = 0; //0 inicio 1 ganado 2perdido
document.querySelector('.guess').value = null;
console.log(secretNumber);

const check = function () {
  const b = Number(document.querySelector('.guess').value);

  if (state === 0) {
    if (b <= 0) {
      document.querySelector('.message').textContent =
        '¡Elija un número entre 1 y 20!';
    } else if (b === secretNumber) {
      document.querySelector('.message').textContent = '¡Número correcto!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (highscore < score)
        document.querySelector('.highscore').textContent = score;
      highscore = score;
      state = 1;
    } else if (score === 1) {
      document.querySelector('.message').textContent = '¡Has perdido!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      score = 0;
      state = 2;
    } else if (Math.abs(b - secretNumber) < 3) {
      document.querySelector('.message').textContent = '¡Caliente, caliente!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '¡Frío, frío!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
};
const repetir = function () {
  score = 20;
  state = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
};
document.querySelector('.btn.check').addEventListener('click', check);
document.querySelector('.btn.again').addEventListener('click', repetir);
