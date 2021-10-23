import checkXCollision from "./checkXCollision.js";
import checkYCollision from "./checkYCollision.js";

export default class Player {
    constructor(gameHeight, gameWidth, game) {


        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.game = game;

        this.img = new Image();
        this.img.src = './img/pixel.png';

        this.height = 110;
        this.width = 80;
        this.direction = 'left';

        this.speedX = 0;
        this.maxSpeedX = 10;
        this.speedY = 0;
        this.maxSpeedY = 20;
        this.gravity = 1;

        this.x = 50;
        this.y = 200;
    }

    draw(ctx) {
        ctx.imageSmoothingEnabled = false;

        ctx.drawImage(this.img, 0, 0, 8, 11, this.x, this.y, this.width, this.height);
    }

    moveRight() {
        this.speedX = this.maxSpeedX;
    }

    moveLeft() {
        this.speedX = -this.maxSpeedX;
    }

    jump() {
        this.speedY = -15;
    }

    stop() {
        this.speedX = 0;
    }

    update(deltaTime, level) {
        if (!deltaTime) return;
        //X Movement Logic
        this.x += this.speedX;
        
        if (this.x > this.gameWidth - this.width) this.x -= this.speedX;
        if (this.x < 0) this.x -= this.speedX;

        level.platforms.forEach((platform) => {
            if (checkXCollision(this, platform) === 0) {
                this.x -= this.speedX;
            }
        })
        

        //Y Movement Logic
        
        if (this.y !== this.gameHeight - this.height) this.speedY += this.gravity
        
        this.y += this.speedY;
        if (this.y > this.gameHeight - this.height) {
            this.y = this.gameHeight - this.height;
            this.speedY = 0;
        };
        
        level.platforms.forEach((platform) => {
            if (checkYCollision(this, platform, this.game) === 0) {
                this.speedY = 0;
                this.y = this.game.gameHeight - this.height - platform.height;
                return;    
            }
        })
    }
}