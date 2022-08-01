class World {
    canvas;
    ctx;
    keyboard;
    walkingBackwards = false;
    camera_x = 0;
    character = new Character();
    endboss = new Endboss();
    level = level_1;
    background_sound = new Audio('./audio/background_theme.mp3');
    statusbar = new Statusbar;
    statusbarCoin = new StatusbarCoin;
    statusbarBottle = new StatusbarBottle;
    throwableObject = [];
    endscreen;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); // uses the context framework for js
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.backgroundMusic();
    }

    backgroundMusic() {
        setInterval(() => {
            this.background_sound.play(); 
            this.background_sound.volume = 0.1;
        }, 500);
    }

    setWorld() { // this function gives the character.world all things from .this (e.g. keyboard) and you can acces it with "world.character.world"
        this.character.world = this;
        this.endboss.world = this;
        this.level.coins.world = this;
        this.level.bottles.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrownObjects();
            this.checkCoinsCollison();
            this.checkBottlesCollison();
        }, 200);
    }

    checkThrownObjects() {
        if(this.keyboard.SPACE) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.throwableObject.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.healthBar);
            }
        });
    }

    checkCoinsCollison() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                // this.soundCoin.play();
                this.character.collectCoins();
                this.statusbarCoin.setPercentage(this.character.coinsCollected);
                this.level.coins.splice(index, 1);     // deletes the coin               
            }
        })
    }

    checkBottlesCollison() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                // this.soundCoin.play();
                this.character.collectBottles();
                this.statusbarBottle.setPercentage(this.character.bottlesCollected);
                this.level.bottles.splice(index, 1);    // deletes the bottle            
            }
        })
    }



    gameOver() {
        setInterval(() => {
            world.keyboard.RIGHT = false;
            world.keyboard.LEFT = false;
            world.keyboard.SPACE = false;
            world.keyboard.UP = false;
        }, 15);

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);    // clears the canvas everytime before it draws

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.ctx.translate(-this.camera_x, 0); // to make statusbar fixed
        this.addToMap(this.statusbar);
        this.addToMap(this.statusbarCoin);
        this.addToMap(this.statusbarBottle);
        this.ctx.translate(this.camera_x, 0); // to make statusbar fixed
        this.addToMap(this.character);

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);
        if (this.endscreen) {
            this.addToMap(this.endscreen);
            this.gameOver();
        }
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