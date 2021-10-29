import checkXCollision from "../utility/checkXCollision.js";
import checkYCollision from "../utility/checkYCollision.js";

export default class Player {
    constructor(gameHeight, gameWidth, game) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.game = game;

        this.imgs = [];
        for (let i = 0; i < 8; i++) {
            this.imgs.push(new Image());
            this.imgs[i].src = `./img/walking/sprite_${i}.png`
        }

        this.height = 160;
        this.width = 160;
        this.direction = 'left';
        this.hidden = false;

        this.speedX = 0;
        this.maxSpeedX = 10;
        this.speedY = 0;
        this.maxSpeedY = 20;
        this.gravity = 1;

        this.x = 50;
        this.y = 200;

        this.walkingFrame = 0;
        this.deltaCount = 0;
    }
    
    update(deltaTime, level) {
        if (!deltaTime) return;
        
        this.deltaCount += deltaTime;
        
        if (this.deltaCount > (1/15 * 1000)) {
            this.deltaCount = 0;
            this.walkingFrame += 1;
            if (this.walkingFrame > 7) this.walkingFrame = 0;
        }
    }

    draw(ctx) {
        if (this.hidden) return;
    
        ctx.imageSmoothingEnabled = false;

        ctx.drawImage(this.imgs[this.walkingFrame], 0, 0, 32, 32, this.x, this.y, this.width, this.height);
    }
}