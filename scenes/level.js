import InputHandler from "../utility/inputHandler.js";
import LevelComplete from '../scenes/levelComplete.js';
import PlayerTest from "../gameObject/playerTest.js";
import Player from "../gameObject/player.js";
import Coin from "../gameObject/coin.js";
import Portal from '../gameObject/portal.js';
import Platform from "../gameObject/platform.js";

export default class Level {
    constructor(game) {
        this.game = game;

        this.levelCompleted = this.levelCompleted.bind(this);

        this.levelBackground = new Image();
        this.levelBackground.src = './img/cityskyline.png';
        this.levelText = 'LEVEL 1';

        this.player = new Player(game.height, game.width, this.game);
        this.portal = new Portal(game.height, game.width, 770, 275, this.levelCompleted)

        this.coins = [];
        for (let i = 0; i < 5; i++) {
            this.coins.push(new Coin(this.game.height, this.game.width, 200 + (i * 100), 325))
        }

        this.platforms = [];
        for (let i = 0; i < 3; i++) {
            this.platforms.push(new Platform(this.game.height, this.game.width, 100 + (i * 300), 0, 150))
        }

        this.gameObjects = [this.player, ...this.coins, ...this.platforms, this.portal];
        this.inputHandler = new InputHandler(this.player, this.platforms);
    }

    update(deltaTime) {
        this.gameObjects.forEach((item) => item.update(deltaTime, this));
        if (this.player.y > this.game.height - this.player.height + 500) {
            this.player.x = 50;
            this.player.y = 200;
            this.player.speedY = 0;
        }
    }

    levelCompleted() {
        this.game.switchScene(new LevelComplete(this.game, this.game.switchScenes))
    }

    draw(ctx) {
        ctx.drawImage(this.levelBackground, 0, 0, 1200, 600);

        ctx.fillStyle = 'black';
        ctx.font = '75px PixelGameFont'
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'

        ctx.fillText(this.levelText, this.game.width / 2, 150);

        this.gameObjects.forEach((item) => item.draw(ctx));
    }
}