class Game {
    constructor() {
        this.player = new Player();
        this.asteroids = [];
        this.background = new Background();

    }
    preload() {
        this.player.preload();
        this.background.preload();

    }
    play() {
        if (frameCount % 60 === 0) {
            this.asteroids.push(new Asteroid());
        }
        this.asteroids.forEach((asteroid) => asteroid.draw())
        this.asteroids = this.asteroids.filter((asteroid) => {
            asteroid.draw();
            return asteroid.height >= asteroid.height;

        });

    }



    keyPressed() {
        this.player.keyPressed();
    }

}
