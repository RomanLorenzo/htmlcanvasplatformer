import Game from './game.js';

const canvas = document.getElementById('canvas');
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
const ctx = canvas.getContext('2d');

const game = new Game(600, 800);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 804, 604);
  game.update(deltaTime, ctx);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();