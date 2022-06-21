class Player {
    constructor() {
        this.left = 600;
        this.top = 550;
        this.width = 50;
        this.height = 50;
        this.velocity = 0;
        this.floor = 700;
        this.shootArray = [];

    }


    preload() {


        this.img = loadImage("/images /spaceship.png");
    }
    keyPressed() {
        this.player.keyPressed();
        if (keyCode === ENTER) {
            this.restartGame();

        }
    }

    drawPlayer() {
        image(this.img, this.left, this.top, this.width, this.height);
    }




}