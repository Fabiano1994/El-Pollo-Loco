class World {
    canvas;
    ctx;
    keyboard;
    walkingBackwards = false;
    camera_x = 0;
    character = new Character();
    level = level_1;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // uses the context framework for js
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

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);



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

        if (mo.walkingBackwards) { // if left key is pressed (walkingBackwards = true)
            this.ctx.save();    //  it saves the current attributes
            this.ctx.translate(mo.width, 0); // mirror character 180 degrees to other direction
            this.ctx.scale(-1, 1); //   moves character a bit to the left
            mo.x = mo.x * -1;   // mirrors x coordinates 
        }

        this.ctx.drawImage (mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.walkingBackwards) {
            mo.x = mo.x * -1;
            this.ctx.restore(); //  resets everything again (character moves forwards on the same coordinates)
        }
    }
}