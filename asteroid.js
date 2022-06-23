class Asteroid {
    constructor() {
        this.x = Math.floor(Math.random() * (CANVAS_WIDTH))
        this.y = 0
        this.asteroidImage = null
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    incrementY() {
        let y = this.y + 64
        if (y > CANVAS_HEIGHT) {
            this.y = 0
        } else {
            this.y = y;
        }
    }

    draw() {
        image(ASTEROID_IMAGE, this.x, this.y);

    }
}
