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
    constructor(gameHeight, gameWidth, ctx, onPlay) {
        this.onPlay = onPlay;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.button = new Button('Play', gameHeight, gameWidth, ctx, onPlay, 200, 250);
        this.button2 = new Button('Tutorial', gameHeight, gameWidth, ctx, null, 200, 400);

        this.elements = [this.button, this.button2];
    }

    update(deltaTime, mouseEvent, ctx) {
        this.elements.forEach(element => element.update(deltaTime, mouseEvent, ctx))
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.font = '100px arial'
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'

        const fix = ctx.measureText("M").actualBoundingBoxDescent / 2;
        const textWidth = ctx.measureText(this.text).width;

        ctx.fillText('Platformer', this.gameWidth / 2, 150)

        this.elements.forEach(element => element.draw(ctx))
    }
}