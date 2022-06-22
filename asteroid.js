class Asteroid {
    constructor() {
        this.height = Math.random(0, 500);
        this.width = Math.random(50, 700);
        this.top = Math.random(150, CANVAS_HEIGHT - this.height - 10);
        this.left = CANVAS_WIDTH + 5;
        this.speed = Math.random(1, 5);
        this.roundness = 50;
    }




}
