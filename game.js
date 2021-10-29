import Portal from './gameObject/portal.js';
import Level from './scenes/level.js';
import Menu from './scenes/menu.js';

export default class Game {
    constructor(gameHeight, gameWidth, ctx) {
        this.switchScene = this.switchScene.bind(this);
        this.ctx = ctx

        this.level = 1;
        this.count = 30;
        this.height = gameHeight;
        this.width = gameWidth;
        this.scene = new Menu(null, this.switchScene, this)

        window.addEventListener('mousemove', (event) => {
            this.mouseEvent = event;
        })

        window.addEventListener('mousedown', (event) => {
            this.mouseEvent.down = true;
        })

        window.addEventListener('mouseup', (event) => {
            this.mouseEvent.down = false;
        })

    }

    onPlay() {
        this.scene = new Level(this.gameHeight, this.gameWidth, this)
    }

    switchScene(scene) {
        this.scene = scene;
    }

    update(deltaTime, ctx) {
        this.scene.update(deltaTime, this.mouseEvent, ctx);
    }

    draw(ctx) {
        this.scene.draw(ctx);
    }
}