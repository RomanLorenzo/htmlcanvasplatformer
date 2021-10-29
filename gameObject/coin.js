import { detectCollision } from "../utility/collision.js";

export default class Coin {
    constructor(gameHeight, gameWidth, x, y) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.img = new Image();
        this.img.src = './img/coin.png';

        this.height = 50;
        this.width = 50;

        this.x = x;
        this.y = y;

        this.hidden = false;
    }

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;

        if (this.hidden) return;
        ctx.drawImage(this.img, 0, 0, 8, 8, this.x, this.y, this.width, this.height);
    }

    update(deltaTime, game) {
        if (!deltaTime) return;

        if (detectCollision(game.player, this)) this.hidden = true;
    }
}