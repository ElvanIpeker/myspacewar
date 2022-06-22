const game = new Game();
const player = new Player();
const asteroid = new Asteroid();


function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    loadImage("/images/background.png", (img) => {
        player.backgroundImage = img
        asteroid.backgroundImage = img
        background(img);
    });
    loadImage("/images/ufo.png", (img) => {
        player.ufoImage = img;
        image(player.ufoImage, CANVAS_WIDTH / 2, CANVAS_HEIGHT - 75);
    });
    loadImage("/images/asteroid.png", (img) => {
        asteroid.asteroidImage = img

    })
}

function preload() {
    this.img = loadImage("/images/background.png");
}

function load() { }

function keyPressed() {
    if (keyCode === LEFT_ARROW) {

        player.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        player.moveRight();
    } else if (keyCode === ARROW_UP) {
        player.moveUp();
    } else if (keyCode === ARROW_DOWN) {
        player.moveDown();
    }
}

function draw() {


}

