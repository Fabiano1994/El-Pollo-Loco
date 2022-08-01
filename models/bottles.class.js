class Bottles extends DrawableObject {
    height = 80;
    width = 80;
    world;


    constructor(path, x, y) {
        super();
        this.loadImage(path);
        this.x = x;
        this.y = y;
    }

    removeBottle() {
        let i = this.world.level.bottles.indexOf(this);
        this.world.level.bottles.splice(i, 1);
    }

}