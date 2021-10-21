import InputHandler from "./inputHandler.js";
import Player from "./player.js";

export default class Game {
    constructor(gameHeight, gameWidth) {
        this.player = new Player(gameHeight, gameWidth);
        this.gameObjects = [this.player];
        this.inputHandler = new InputHandler(this.player);
    }

    draw(ctx) {
        this.gameObjects.forEach((item) => item.update(ctx));
        this.gameObjects.forEach((item) => item.draw(ctx));
    }
}