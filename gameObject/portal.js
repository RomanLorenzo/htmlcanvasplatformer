import { detectCollision } from "../utility/collision.js";

export default class Portal {
    constructor(game, x, y, finishGame) {
        this.finishGame = finishGame;
        
        this.gameHeight = game.height;
        this.gameWidth = game.width;

        this.height = 120;
        this.width = 30;

        this.x = x;
        this.y = y;

        this.hidden = false;
    }

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;

        if (this.hidden) return;
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(deltaTime, game) {
        if (!deltaTime) return;

        if (detectCollision(game.player, this)) this.finishGame();
    }
}