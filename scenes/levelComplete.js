import Button from "../button.js";

export default class Menu {
    constructor(game) {
        this.game = game;

        this.button = new Button('RETRY', game.height, game.width, game.ctx, () => console.log('retry'), 50, 250);
        this.button2 = new Button('NEXT', game.height, game.width, game.ctx, () => console.log('play'), 250, 400);

        this.elements = [this.button, this.button2];
    }

    update(deltaTime, mouseEvent, ctx) {
        this.elements.forEach(element => element.update(deltaTime, mouseEvent, ctx))
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.font = '100px PixelGameFont'
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'

        const fix = ctx.measureText("M").actualBoundingBoxDescent / 2;
        const textWidth = ctx.measureText(this.text).width;

        ctx.fillText('PLATFORMER', this.game.width / 2, 150)

        this.elements.forEach(element => element.draw(ctx))
    }
}