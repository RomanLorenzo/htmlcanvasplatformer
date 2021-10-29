export default function checkYCollision(player, platform, game) {
    if (
        player.x + player.width > platform.x &&
        platform.x + platform.width > player.x &&
        player.y > game.gameHeight - player.height - platform.height) {
            return 0;
    }
}