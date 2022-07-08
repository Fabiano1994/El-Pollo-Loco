class Cloud extends MovableObject{
    y = 30;
    widht = 300;


    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // math.random calculates a random number from 0-1 (which will be multiplied by 500)
    }

}