class Asteroid {
    constructor() {
        this.height = random(20, 20);
        this.width = random(25, 100);
        this.top = random(150, CANVAS_HEIGHT - this.height - 10);
        this.left = CANVAS_WIDTH + 5;
        this.speed = random(1, 5);
        this.roundness = 50;

    }
    preload() {
        this.img = loadImage("/images /asteroid.png");

    }





    drawAsteroid() {

        if (frameCount % 60 === 0) {
            this.asteroid.push(new Asteroid());

        }


    }

}