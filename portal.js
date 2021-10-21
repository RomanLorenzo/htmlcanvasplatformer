import { detectCollision } from "./collision.js";

export default class Portal {
    constructor(gameHeight, gameWidth, x, y, finishGame) {
        this.finishGame = finishGame;
        
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.height = 40;
        this.width = 40;

        this.x = gameWidth - this.width;
        this.y = gameHeight - this.height;

        this.hidden = false;
    }

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;

        if (this.hidden) return;
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.height, this.width);
    }

    update(deltaTime, game) {
        if (!deltaTime) return;

        if (detectCollision(game.player, this)) this.finishGame();
    }
}