class Player {
    constructor() {
        this.x = CANVAS_WIDTH / 2
        this.y = CANVAS_HEIGHT - 64
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
        background(this.backgroundImage)
        image(this.ufoImage, this.x, this.y)
    }
    moveDown() {
        this.incrementY()
        background(this.backgroundImage)
        image(this.ufoImage, this.x, this.y)
    }
    moveLeft() {

        this.decrementX()
        background(this.backgroundImage)
        image(this.ufoImage, this.x, this.y)
    }
    moveRight() {
        this.incrementX()
        background(this.backgroundImage)
        image(this.ufoImage, this.x, this.y)

    }

}