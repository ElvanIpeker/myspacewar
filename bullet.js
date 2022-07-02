class Bullet {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    draw() {
        image(BULLET_IMAGE, this.x, this.y)
    }

    decrementY() {
        this.y = this.y - 64;

    }

}


