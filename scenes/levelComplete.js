import Button from '../button.js';
import Level from './level.js';
export default class LevelComplete {
    constructor(game) {
        this.onNext = this.onNext.bind(this);
        this.game = game;

        this.buttons = [];
        for (let i = 0; i < 2; i++) {
            const text = (i === 0) ? 'NEXT' : 'REDO';
            this.buttons.push(new Button(text, this.game, this.onNext, 200, (250) + (i * 150)))
        }
        this.elements = [...this.buttons];
    }

    update(deltaTime, mouseEvent, ctx) {
        this.elements.forEach(element => element.update(deltaTime, mouseEvent, ctx))
    }

    onNext() {
        this.game.level += 1;
        this.game.switchScene(new Level(this.game))
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.font = '80px PixelGameFont'
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'

        const fix = ctx.measureText("M").actualBoundingBoxDescent / 2;
        const textWidth = ctx.measureText(this.text).width;

        ctx.fillText('LEVEL COMPLETE', this.game.width / 2, 150)

        this.elements.forEach(element => element.draw(ctx))
    }
}