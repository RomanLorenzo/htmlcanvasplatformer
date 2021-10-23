import { detectCollision } from "../utility/collision.js";

export default class Platform {
    constructor(gameHeight, gameWidth, x, y) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.height = 100;
        this.width = 200;

        this.x = x;
        this.y = 500;

        this.hidden = false;
    }

    draw(ctx) {
        if (this.hidden) return;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    update(deltaTime, game) {
        if (!deltaTime) return;
    }
}