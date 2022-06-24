class Game {
    constructor() {
        this.player = new Player();
        this.asteroids = [];
        this.bullet = [];
    }
    play() {
        background(BACKGROUND_IMAGE)
        if (frameCount % 60 === 0) {
            if (this.asteroids.length < 3) {
                this.asteroids.push(new Asteroid());
            }
        }
        this.player.draw()
        if (frameCount % 60 === 0) {
            this.asteroids.forEach(asteroid => asteroid.incrementY())
        }
        this.asteroids.forEach(asteroid => asteroid.draw())
        this.asteroids = this.asteroids.filter((asteroid) => {
            return asteroid.y <= CANVAS_HEIGHT;
        });
    }

    keyPressed() {
        if (keyCode === LEFT_ARROW) {
            this.player.moveLeft();
        } else if (keyCode === RIGHT_ARROW) {
            this.player.moveRight();
        } else if (keyCode === ARROW_UP) {
            this.player.moveUp();
        } else if (keyCode === ARROW_DOWN) {
            this.player.moveDown();
        }
    }

}
