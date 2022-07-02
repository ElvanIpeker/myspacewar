class Player {
    constructor() {
        this.x = CANVAS_WIDTH / 2;
        this.y = CANVAS_HEIGHT - 64;
        this.bullets = [];

    }
    draw() {
        image(UFO_IMAGE, this.x, this.y)
    }
    incrementY() {
        let y = this.y + 64
        if (y > CANVAS_HEIGHT) {
            this.y = 0
        } else {
            this.y = y;
        }
    }
    decrementY() {
        let y = this.y - 64
        if (y < 0) {
            this.y = CANVAS_HEIGHT - 64
        } else {
            this.y = y;
        }
    }
    decrementX() {
        let x = this.x - 64
        if (x < 0) {
            this.x = CANVAS_WIDTH - 64
        } else {
            this.x = x;

        }
    }
    incrementX() {
        let x = this.x + 64
        if (x > CANVAS_WIDTH) {
            this.x = 0


        } else {
            this.x = x
        }

    }
    moveUp() {
        this.decrementY()
    }
    moveDown() {
        this.incrementY()
    }
    moveLeft() {
        this.decrementX()
    }
    moveRight() {
        this.incrementX()
    }
    shootBullet() {
        this.bullets.push(new Bullet(this.x, this.y - 64))
    }


}