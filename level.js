import InputHandler from "./utility/inputHandler.js";
import Player from "./gameObject/player.js";
import Coin from "./gameObject/coin.js";
import Portal from './gameObject/portal.js';

export default class Level {
    constructor(gameHeight, gameWidth) {
        this.width = gameWidth;
        this.height = gameHeight;

        this.player = new Player(gameHeight, gameWidth);
        this.portal = new Portal(gameHeight, gameWidth, 0, 0, this.finishGame)

        this.coins = [];
        for (let i = 0; i < 5; i++) {
            this.coins.push(new Coin(this.height, this.width, 200 + (i * 100), 540))
        }

        this.gameObjects = [this.player, this.portal, ...this.coins];
        this.inputHandler = new InputHandler(this.player);
    }

    update(deltaTime) {
        this.gameObjects.forEach((item) => item.update(deltaTime, this));
    }

    finishGame() {
        console.log('win!')
    }

    draw(ctx) {
        this.gameObjects.forEach((item) => item.draw(ctx));
    }
}