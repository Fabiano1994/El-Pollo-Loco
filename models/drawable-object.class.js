class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x = 120;
    y = 220;
    width = 100;
    height = 200;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) { //  if instance of Char. or instance of Chick. then the code will be applied 
            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.strokeStyle = "blue";
            // ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}