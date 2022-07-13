class World {
    canvas;
    ctx;
    keyboard;
    walkingBackwards = false;
    camera_x = 0;
    character = new Character();
    endboss = new Endboss();
    level = level_1;
    background_sound = new Audio('audio/background_theme.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // uses the context framework for js
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        // this.background_sound.play();
    }

    setWorld() { // this function gives the character.world all things from .this (e.g. keyboard) and you can acces it with "world.character.world"
        this.character.world = this;
        this.endboss.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if(this.character.isColliding(enemy) ) {
                    console.log('Collision with', enemy);}
            });
        }, 200);
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
        requestAnimationFrame(function () {  // function to draw the picture repeatedly (how many fps it draws is according to you pc specs)
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
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.walkingBackwards) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();    //  it saves the current attributes
        this.ctx.translate(mo.width, 0); // mirror character 180 degrees to other direction
        this.ctx.scale(-1, 1); //   moves character a bit to the left
        mo.x = mo.x * -1;   // mirrors x coordinates 
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore(); //  resets everything again (character moves forwards on the same coordinates)
    }


}