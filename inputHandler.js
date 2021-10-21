export default class InputHandler {
    constructor(player) {
        document.addEventListener('keydown', (event) => {
            console.log(event.code);
            switch(event.code) {
                case 'ArrowRight':
                    player.moveRight();
                    break;
                case 'ArrowLeft':
                    player.moveLeft();
                    break;
                case 'ArrowUp':
                    if (player.y === player.gameHeight - player.height) {
                        player.jump();
                    }
                    break;
            }
        })

        document.addEventListener('keyup', (event) => {
            switch(event.code) {
                case 'ArrowRight':
                    if (player.speedX > 0) player.stop();
                    break;
                case 'ArrowLeft':
                    if (player.speedX < 0) player.stop();
                    break;
            }
        })
    }
}