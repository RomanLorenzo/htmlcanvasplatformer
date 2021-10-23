export default class InputHandler {
    constructor(player, platforms) {
        document.addEventListener('keydown', (event) => {
            switch(event.code) {
                case 'ArrowRight':
                    player.moveRight();
                    break;
                case 'ArrowLeft':
                    player.moveLeft();
                    break;
                case 'ArrowUp':
                    if (
                        player.y === player.gameHeight - player.height) {
                        player.jump();
                    }

                    platforms.forEach((platform) => {
                        if  ((
                            player.x + player.width > platform.x &&
                            platform.x + platform.width > player.x &&
                            player.y >= player.gameHeight - player.height - platform.height) &&
                            (player.y !== player.gameHeight - player.height)) {
                                player.jump();
                            }
                    })
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