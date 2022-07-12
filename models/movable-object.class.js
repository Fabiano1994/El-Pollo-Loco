class MovableObject {
    x = 120;
    y = 220;
    img;
    width = 100;
    height = 200;
    imageCache = [];
    currentImage = 0;
    speed = 0.15;
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

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; //  basically like a for loop -> 0, 1, 2, 3, 4, 5, (repeats itself)
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => { //  interval for movement
            this.x -= this.speed;
        }, 50); 
    }
}