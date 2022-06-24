class Background {
    constructor() {
        this.left = 0;

    }
    preload() {
        this.img = ('/images/background.png');

    }
    drawBackground() {
        image(this.img, this.left, 0, CANVAS_WIDTH, 750);
        image(this.img, this.left + CANVAS_WIDTH, 0, CANVAS_WIDTH, 750);
    }
}
