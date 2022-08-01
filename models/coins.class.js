class Coins extends DrawableObject {
    height = 80;
    width = 80;
    world;


    constructor(path, x, y) {
        super();
        this.loadImage(path);
        this.x = x;
        this.y = y;
    }

    removeCoin() {
        let i = this.world.level.coins.indexOf(this);
        this.world.level.coins.splice(i, 1);
    }

}