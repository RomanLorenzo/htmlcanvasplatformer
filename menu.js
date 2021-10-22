import Button from "./button.js";
import isHovered from "./isHovered.js";

class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isHovered = false;
    }

    draw(ctx) {
        ctx.fillRect(this.x, this.y, 50, 50)
    }
}

export default class Menu {
    constructor(gameHeight, gameWidth, ctx) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.button = new Button('Play', gameHeight, gameWidth, ctx)
    }

    update(deltaTime, mouseEvent, ctx) {
        this.button.update(deltaTime, mouseEvent, ctx);
    }

    draw(ctx) {
        this.button.draw(ctx);
    }
}