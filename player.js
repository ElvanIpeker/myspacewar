class Player {
    constructor() {
        this.left = 600;
        this.top = 550;
        this.width = 50;
        this.height = 50;
        this.col = CANVAS_WIDTH / 64 / 2;

        this.velocity = 0;
        this.floor = 700;
        this.shootArray = [];
    }
    moveUp() {
        this.row = this.row - 1
        image(this.ufoImage, this.col * 64, CANVAS_WIDTH - 64)
    }
    moveDown() {
        this.row = this.row + 1
        image(this.ufoImage, this.col * 64, CANVAS_WIDTH - 64)
    }
    moveLeft() {
        this.col = this.col - 1
        background(this.backgroundImage)
        image(this.ufoImage, this.col * 64, CANVAS_HEIGHT - 75)
    }
    moveRight() {
        this.col = this.col + 1
        background(this.backgroundImage)
        image(this.ufoImage, this.col * 64, CANVAS_HEIGHT - 75)

    }

}