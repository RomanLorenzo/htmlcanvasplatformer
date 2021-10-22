import InputHandler from "./inputHandler.js";
import Player from "./player.js";
import Coin from "./coin.js";
import Portal from './portal.js';
import Level from './level.js';
import Menu from './menu.js';

export default class Game {
    constructor(gameHeight, gameWidth) {
        window.addEventListener('mousemove', (event) => {
            this.mouseEvent = event;
        })

        this.level = new Menu(gameHeight, gameWidth)
    }

    update(deltaTime, ctx) {
        this.level.update(deltaTime, this.mouseEvent, ctx);
    }

    draw(ctx) {
        this.level.draw(ctx);
    }
}