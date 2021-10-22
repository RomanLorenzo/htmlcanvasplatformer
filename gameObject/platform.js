import { detectCollision } from "../utility/collision.js";

export default class Coin {
    constructor(gameHeight, gameWidth, x, y) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.height = 40;
        this.width = 40;

        this.x = x;
        this.y = y;

        this.hidden = false;
    }

    draw(ctx) {
        if (this.hidden) return;
        ctx.fillRect(0, 0, 50, 50)
    }

    update(deltaTime, game) {
        if (!deltaTime) return;

        if (detectCollision(game.player, this)) this.hidden = true;
    }
}