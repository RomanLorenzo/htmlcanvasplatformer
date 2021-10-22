import InputHandler from "./inputHandler.js";
import Player from "./player.js";
import Coin from "./coin.js";
import Portal from './portal.js';
import Level from './level.js';
import Menu from './menu.js';

export default class Game {
    constructor(gameHeight, gameWidth) {
        this.onPlay = this.onPlay.bind(this);
        this.count = 30;
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        window.addEventListener('mousemove', (event) => {
            this.mouseEvent = event;
        })

        window.addEventListener('mousedown', (event) => {
            this.mouseEvent.down = true;
        })

        window.addEventListener('mouseup', (event) => {
            this.mouseEvent.down = false;
        })

        this.level = new Menu(gameHeight, gameWidth, null, this.onPlay)
    }

    onPlay() {
        this.level = new Level(this.gameHeight, this.gameWidth)
    }

    update(deltaTime, ctx) {
        this.level.update(deltaTime, this.mouseEvent, ctx);
    }

    draw(ctx) {
        this.level.draw(ctx);
    }
}