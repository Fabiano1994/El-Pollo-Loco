class Chicken extends MovableObject{
    y = 300;
    widht = 50;
    height = 50;

    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 300 + Math.random() * 500; // math.random calculates a random number from 0-1 (which will be multiplied by 500)
    }


}