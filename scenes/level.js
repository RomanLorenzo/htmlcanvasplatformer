import InputHandler from "../utility/inputHandler.js";
import readTextFile from "../utility/readTextFile.js";
import LevelComplete from '../scenes/levelComplete.js';
import Player from "../gameObject/player.js";
import Coin from "../gameObject/coin.js";
import Portal from '../gameObject/portal.js';
import Platform from "../gameObject/platform.js";
export default class Level {
    constructor(game) {
        this.loaded = false;
        fetch(`./saves/level${game.level}.json`)
            .then(response => response.json())
            .then(json => {
                this.data = json;

                this.game = game;

                this.levelCompleted = this.levelCompleted.bind(this);

                this.levelBackground = new Image();
                this.levelBackground.src = './img/cityskyline.png';
                this.levelText = `LEVEL ${this.game.level}`;

                this.player = new Player(game, this.game);
                this.portal = new Portal(game, 770, 275, this.levelCompleted)

                this.coins = [];
                for (const i in this.data.coins) {
                    const coin = this.data.coins[i];
                    this.coins.push(new Coin(this.game, coin.x, coin.y))
                }

                this.platforms = [];
                for (const i in this.data.platforms) {
                    const platform = this.data.platforms[i];
                    this.platforms.push(new Platform(this.game, platform.x, 150))
                }

                this.gameObjects = [this.player, ...this.coins, ...this.platforms, this.portal];
                this.inputHandler = new InputHandler(this.player, this.platforms);

                this.loaded = true;
            });
    }

    update(deltaTime) {
        if (!this.loaded) return;

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
        if (!this.loaded) return;

        ctx.drawImage(this.levelBackground, 0, 0, 1200, 600);

        ctx.fillStyle = 'black';
        ctx.font = '75px PixelGameFont'
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'

        ctx.fillText(this.levelText, this.game.width / 2, 150);

        this.gameObjects.forEach((item) => item.draw(ctx));
    }
}