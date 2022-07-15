class MovableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    speedX = 0;
    acceleration = 4;
    walkingBackwards = false;
    healthBar = 100;
    lastHit = 0;

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.healthBar -= 5;
        if (this.healthBar < 0) {
            this.healthBar = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;   //  miliseconds since 01.01.1970 - miliseconds since last time we got hit = difference in ms
        timePassed = timePassed / 1000; //  difference in s
        return timePassed < 1;
    }

    isDead() {
        return this.healthBar == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; //  basically like a for loop -> 0, 1, 2, 3, 4, 5, (repeats itself)
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) { // throwable object always falls
            return true;
        } else {
        return this.y < 220;
        }
    }

    moveRight() {
        this.x += this.speed; //    adds x variable to the speed variable (eg 100 + 5) when right key is pressed 
        this.walkingBackwards = false;
        this.walking_sound.play();
    }

    moveLeft() {
        this.x -= this.speed;
        this.walkingBackwards = true;
        this.walking_sound.play();
    }

    jump() {
        this.speedY = 30;
    }

    moveLeftEnemies() {
        setInterval(() => {
            this.x -= this.speed;
        }, 50);
    }
}