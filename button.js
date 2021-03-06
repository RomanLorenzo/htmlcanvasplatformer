import isHovered from "./utility/isHovered.js";

export default class Button {
    constructor(text, game, onClick, x, y) {
        this.onClick = onClick;

        this.text = text;
        
        this.game = game;

        this.clicked = false;
        this.path = new Path2D();
        this.height = 100;
        this.width = 400;
        this.x = x;
        this.y = y;

        //this.squares = [new Square(0, 0)];
    }

    update(deltaTime, mouseEvent, ctx) {
        if (!mouseEvent) return;
        this.isHovered = isHovered(mouseEvent, ctx, this.path);

        if (this.isHovered && mouseEvent.down) {
            this.onClick();
            return this.clicked = true;
        };

        this.clicked = false;
    }

    draw(ctx) {
        ctx.fillStyle = this.isHovered ? 'green' : 'red';
        this.path.rect(this.x, this.y, this.width, this.height)
        ctx.fill(this.path)

        ctx.fillStyle = 'black';
        ctx.font = '50px PixelGameFont'
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'

        const fix = ctx.measureText("M").actualBoundingBoxDescent / 2;
        const textWidth = ctx.measureText(this.text).width;

        ctx.fillText(this.text, (canvas.width/2) + (this.x - (this.game.width / 2 - this.width / 2)), (this.height/2) + this.y + fix)
    }
}