export default function checkXCollision(player, platform) {
    if (
        player.x + player.width> platform.x &&
        platform.x + platform.width > player.x &&
        player.y + player.height > platform.y) {
            return 0;
    }
}