class Game {
    constructor() {
        this.player = new Player();
        this.asteroids = [];
        this.background = new Background();

    }
    preload() {
        this.player.preload();
        this.background.preload();

    }
    play() {




    }



    keyPressed() {
        this.player.keyPressed();
    }

}
