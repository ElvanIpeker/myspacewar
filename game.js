class Game {
    constructor() {
        this.player = new Player();
        this.asteroids = [];

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
            this.player.bullets.forEach(bullet => bullet.decrementY())
        }
        this.player.bullets.forEach(bullet => bullet.draw())
        this.asteroids.forEach(asteroid => asteroid.draw())
        this.asteroids = this.asteroids.filter((asteroid) => {
            let hasCollided = this.player.bullets.some((bullet) => {
                return Math.abs(bullet.x - asteroid.x) < 64 && Math.abs(bullet.y - asteroid.y) < 64
            })
            return !hasCollided && asteroid.y <= CANVAS_HEIGHT;


        });
        this.player.bullets = this.player.bullets.filter((bullet) => {
            let hasCollided = this.asteroids.some((asteroid) => {
                return Math.abs(bullet.x - asteroid.x) < 64 && Math.abs(bullet.y - asteroid.y) < 64
            })
            return !hasCollided && bullet.y >= 0;

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
        } else if (keyCode === SPACE_BAR) {
            this.player.shootBullet();
        }
    }

}
