let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    mobileButtonPress();
    document.getElementById('canvasDiv').classList.remove('d-none');
    document.getElementById('howTo').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('startBtn').classList.add('d-none');
}

function mobileButtonPress() {
    document.getElementById('btnLeft').addEventListener("touchstart", (event) => {
        event.preventDefault();
            keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener("touchend", (event) => {
        event.preventDefault();
            keyboard.LEFT = false;
    });

    document.getElementById('btnRight').addEventListener("touchstart", (event) => {
        event.preventDefault();
            keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener("touchend", (event) => {
        event.preventDefault();
            keyboard.RIGHT = false;
    });
        
    document.getElementById('btnJump').addEventListener("touchstart", (event) => {
        event.preventDefault();
            keyboard.UP = true;
    });

    document.getElementById('btnJump').addEventListener("touchend", (event) => {
        event.preventDefault();
            keyboard.UP = false;
    });

    document.getElementById('btnThrow').addEventListener("touchstart", (event) => {
        event.preventDefault();
            keyboard.SPACE = true;
    });

    document.getElementById('btnThrow').addEventListener("touchend", (event) => {
        event.preventDefault();
            keyboard.SPACE = false;
    });
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