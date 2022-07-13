class MovableObject {
    x = 120;
    y = 220;
    img;
    width = 100;
    height = 200;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
    speedY = 0;
    acceleration = 4;
    walkingBackwards = false;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) { //  if instance of Char. or instance of Chick. then the code will be applied 
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; //  basically like a for loop -> 0, 1, 2, 3, 4, 5, (repeats itself)
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
        return this.y < 220;
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