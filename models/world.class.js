class World {
    canvas;
    ctx;
    keyboard;
    walkingBackwards = false;
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new Background ('../img/5_background/layers/air.png', 0),
        new Background ('../img/5_background/layers/3_third_layer/1.png', 0),
        new Background ('../img/5_background/layers/2_second_layer/1.png', 0),
        new Background ('../img/5_background/layers/1_first_layer/1.png', 0)
    ];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() { // this function gives the character.world all things from .this (e.g. keyboard) and you can acces it with "world.character.world"
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    // clears the canvas everytime before it draws

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);



        let self = this;
        requestAnimationFrame(function() {  // function to draw the picture repeatedly (how many fps it draws is according to you pc specs)
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {  //moveableObject

        if (mo.walkingBackwards) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage (mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.walkingBackwards) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}