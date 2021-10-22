import isHovered from "./isHovered.js";

export default class Button {
    constructor(text, gameHeight, gameWidth, ctx) {
        this.text = text;
        
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.path = new Path2D();
        this.height = 100;
        this.width = 700;
        this.x = this.gameWidth / 2 - this.width / 2;
        this.y = this.gameHeight / 2 - this.height / 2

        //this.squares = [new Square(0, 0)];
    }

    update(deltaTime, mouseEvent, ctx) {
        this.isHovered = isHovered(mouseEvent, ctx, this.path);
    }

    draw(ctx) {
        ctx.fillStyle = this.isHovered ? 'green' : 'red';
        this.path.rect(this.x, this.y, this.width, this.height)
        ctx.fill(this.path)

        ctx.fillStyle = 'black';
        ctx.font = '50px arial'
        ctx.textAlign = 'center';
        ctx.fillText(this.text, canvas.width/2, this.y + this.height / 1.4)
        //this.squares.forEach((square) => square.draw(ctx));
    }
}