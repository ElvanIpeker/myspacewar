class Asteroid {
    constructor() {
        this.x = Math.floor(Math.random() * (CANVAS_WIDTH))
        this.y = 0
    }
    incrementY() {
        this.y = this.y + 64
    }
    draw() {
        image(ASTEROID_IMAGE, this.x, this.y);
    }
}
