export default function checkXCollision(player, platform) {
    console.log(player.y)
    if (
        player.x + player.width > platform.x &&
        platform.x + platform.width > player.x &&
        player.y + player.height > platform.y) {
            return 0;
    }
}