import checkXCollision from "./checkXCollision.js";
import checkYCollision from "./checkYCollision.js";

export default class Player {
    constructor(gameHeight, gameWidth, game) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.game = game;

        this.imgs = [];
        for (let i = 0; i < 10; i++) {
            this.imgs.push(new Image());
            this.imgs[i].src = `./img/walking/sprite_${i}.png`
        }

        this.animationState = 'standing';

        this.height = 155;
        this.width = 85;
        this.direction = 'right';
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
    
    moveRight() {
        this.direction = 'right';
        this.speedX = this.maxSpeedX;
    }
    
    moveLeft() {
        this.direction = 'left';
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
        
        this.deltaCount += deltaTime;

        if (this.animationState === 'walking') {
            if (this.speedX === 0) return this.animationState = 'standing';

            if (this.deltaCount > (1/15 * 1000)) {
                this.deltaCount = 0;
                this.walkingFrame += 1;
                if (this.walkingFrame > 7) this.walkingFrame = 0;
            }
        } else {
            if (this.speedX > 0 || this.speedX < 0) {
                this.animationState = 'walking'
            }
        }

        if (this.animationState === 'standing') {
            if (this.walkingFrame !== 8 && this.walkingFrame !== 9) this.walkingFrame = 8;

            if (this.deltaCount > (1/3 * 1000)) {
                this.deltaCount = 0;
                
                if (this.walkingFrame === 8) return this.walkingFrame = 9;

                this.walkingFrame = 8;
            }
        }

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
        
        level.platforms.forEach((platform) => {
            if (checkYCollision(this, platform, this.game) === 0) {
                this.speedY = 0;
                this.y = this.game.gameHeight - this.height - platform.height;
                return;    
            }
        })
    }

    draw(ctx) {
        if (this.hidden) return;
    
        ctx.imageSmoothingEnabled = false;

        if (this.direction === 'left') {
            ctx.translate(0 + this.width/2, 0 + this.height/2);
            ctx.scale(-1, 1);
            ctx.translate(-(0 + this.width/2), -(0 + this.height/2));
        }

        ctx.drawImage(this.imgs[this.walkingFrame], 0, 0, 17, 31, (this.direction === 'left') ? -this.x : this.x, this.y, this.width, this.height);
        
        ctx.setTransform(1, 0, 0, 1, 0, 0)
    }
}