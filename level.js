import InputHandler from "./utility/inputHandler.js";
import Player from "./gameObject/player.js";
import Coin from "./gameObject/coin.js";
import Portal from './gameObject/portal.js';
import Platform from "./gameObject/platform.js";

export default class Level {
    constructor(gameHeight, gameWidth, game) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.game = game;

        this.player = new Player(gameHeight, gameWidth, this.game);
        this.portal = new Portal(gameHeight, gameWidth, 0, 0, this.finishGame)

        this.coins = [];
        // for (let i = 0; i < 5; i++) {
        //     this.coins.push(new Coin(this.gameHeight, this.gameWidth, 200 + (i * 100), 540))
        // }

        this.platforms = [];
        for (let i = 0; i < 2; i++) {
            this.platforms.push(new Platform(this.gameHeight, this.gameWidth, 300 + (i * 300), 0))
        }


        this.gameObjects = [this.player, ...this.coins, ...this.platforms];
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