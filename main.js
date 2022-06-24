const game = new Game();

function preload() {
    BACKGROUND_IMAGE = loadImage('images/background.png')
    ASTEROID_IMAGE = loadImage('images/asteroid.png')
    UFO_IMAGE = loadImage('images/ufo.png')
    BULLET_IMAGE = loadImage('images/bullet.png')
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
    game.play()
}

function keyPressed() {
    game.keyPressed()

}

