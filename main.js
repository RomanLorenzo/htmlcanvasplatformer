import Player from './player.js'
import InputHandler from './inputHandler.js';
import Game from './game.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(canvas.height, canvas.width);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();