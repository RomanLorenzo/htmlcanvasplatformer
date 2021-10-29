import InputHandler from "./utility/inputHandler.js";
import PlayerTest from "./gameObject/playerTest.js";
import Player from "./gameObject/player.js";
import Coin from "./gameObject/coin.js";
import Portal from './gameObject/portal.js';
import Platform from "./gameObject/platform.js";

export default class Level {
    constructor(gameHeight, gameWidth, game) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.game = game;

        this.levelBackground = new Image();
        this.levelBackground.src = './img/cityskyline.png';
        this.levelText = 'LEVEL 1';

        this.player = new Player(gameHeight, gameWidth, this.game);
        this.portal = new Portal(gameHeight, gameWidth, 0, 0, this.finishGame)

        this.coins = [];
        for (let i = 0; i < 5; i++) {
            this.coins.push(new Coin(this.gameHeight, this.gameWidth, 200 + (i * 100), 325))
        }

        this.platforms = [];
        for (let i = 0; i < 3; i++) {
            this.platforms.push(new Platform(this.gameHeight, this.gameWidth, 100 + (i * 300), 0, 150))
        }

        this.gameObjects = [this.player, ...this.coins, ...this.platforms];
        this.inputHandler = new InputHandler(this.player, this.platforms);
    }

    update(deltaTime) {
        this.gameObjects.forEach((item) => item.update(deltaTime, this));
        if (this.player.y > this.gameHeight - this.player.height + 500) {
            this.player.x = 50;
            this.player.y = 200;
            this.player.speedY = 0;
        }
    }

    finishGame() {
        console.log('win!')
    }

    draw(ctx) {
        ctx.drawImage(this.levelBackground, 0, 0, 1200, 600);

        ctx.fillStyle = 'black';
        ctx.font = '75px PixelGameFont'
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'

        ctx.fillText(this.levelText, this.gameWidth / 2, 150);

        this.gameObjects.forEach((item) => item.draw(ctx));
    }
}