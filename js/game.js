let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    document.getElementById('canvasDiv').classList.remove('d-none');
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('startBtn').classList.add('d-none');
}


window.addEventListener("keydown", (event) => {
    if (event.keyCode == 39 || event.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37 || event.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    console.log(event);
});

window.addEventListener("keyup", (event) => {
    if (event.keyCode == 39 || event.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37 || event.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
});