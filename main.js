const game = new Game();
let IS_GAME_STARTED = false;
let button = null;

function preload() {
    soundFormats('mp3', 'wav');
    INITIAL_BACKGROUND_IMAGE = loadImage('images/space.png')
    BACKGROUND_IMAGE = loadImage('images/background.png')
    ASTEROID_IMAGE = loadImage('images/asteroid.png')
    UFO_IMAGE = loadImage('images/ufo.png')
    BULLET_IMAGE = loadImage('images/bullet.png')
    GAME_OVER_IMAGE = loadImage('images/alien with ufo.png')
    GAME_AUDIO = loadSound('audio/backgroundsound.wav')
    GAME_LASER_AUDIO = loadSound('audio/lazer.wav')
}

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(BACKGROUND_IMAGE);
    button = createButton('START GAME');
    button.position(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    button.mousePressed(onButtonPressed);
}
function onButtonPressed() {
    IS_GAME_STARTED = true;
    button.remove();
    GAME_AUDIO.play();
    GAME_LASER_AUDIO.playMode('restart');

}

function draw() {
    if (IS_GAME_STARTED) {
        game.play()

    }

}

function keyPressed() {
    game.keyPressed()

}

