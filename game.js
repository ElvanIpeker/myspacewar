class Game {
    constructor() {
        this.player = new Player();
        this.asteroids = [];
        this.isGameOver = false;
        this.points = 0;

    }
    play() {
        if (!this.isGameOver) {
            background(BACKGROUND_IMAGE);
            if (frameCount % 60 === 0) {
                if (this.asteroids.length < 3) {
                    this.asteroids.push(new Asteroid());
                }
            }
            this.player.draw();
            if (frameCount % 60 === 0) {
                this.asteroids.forEach(asteroid => asteroid.incrementY());
                this.player.bullets.forEach(bullet => bullet.decrementY());
            }
            textSize(30);
            fill(255, 153, 51);
            text(this.points, CANVAS_WIDTH - 72, 30);


            this.player.bullets.forEach((bullet) => bullet.draw());
            this.asteroids.forEach((asteroid) => asteroid.draw());
            this.asteroids = this.asteroids.filter((asteroid) => {
                let hasCollided = this.player.bullets.some((bullet) => {
                    return (Math.abs(bullet.x - asteroid.x) < 64 && Math.abs(bullet.y - asteroid.y) < 64);
                });
                if (hasCollided) {
                    this.points += 1;
                }

                return !hasCollided && asteroid.y <= CANVAS_HEIGHT;
            });
            this.player.bullets = this.player.bullets.filter((bullet) => {
                let hasCollided = this.asteroids.some((asteroid) => {
                    return (Math.abs(bullet.x - asteroid.x) < 64 && Math.abs(bullet.y - asteroid.y) < 64);
                });

                return !hasCollided && bullet.y >= 0;

            });
            this.isGameOver = this.asteroids.some((asteroid) => {
                return (Math.abs(asteroid.x - this.player.x) < 64 && Math.abs(asteroid.y - this.player.y) < 64);
            });
        } else {
            background(GAME_OVER_IMAGE);
            textSize(30);
            fill(255, 153, 51);
            text('Game Over! may be next time!\nPoints: ' + this.points, 72, CANVAS_HEIGHT - 72);
            GAME_AUDIO.stop()
        }

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
            GAME_LASER_AUDIO.play();
        }
    }

}
