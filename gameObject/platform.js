import { detectCollision } from "../utility/collision.js";

export default class Platform {
    constructor(gameHeight, gameWidth, x, y, width) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.height = 200;
        this.width = 160;

        this.x = x;
        this.y = this.gameHeight - this.height;

        this.hidden = false;

        this.platform = new Image();
        this.platform.src = './img/platform.png';
    }

    draw(ctx) {
        if (this.hidden) return;
        ctx.fillStyle = 'grey';
        //ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.drawImage(this.platform, 0, 0, 20, 16, this.x, this.y, this.width, this.height);
    }

    update(deltaTime, game) {
        if (!deltaTime) return;
    }
}