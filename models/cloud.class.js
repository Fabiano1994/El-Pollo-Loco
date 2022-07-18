class Cloud extends MovableObject{
    y = 30;
    width = 300;


    constructor() {
        super().loadImage('./img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // math.random calculates a random number from 0-1 (which will be multiplied by 500)
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => { //  sets intervall for every 50 ms this.x will move 1 px
            this.x -= 1;
        }, 50); // you could also write "1000 / 60" for 60 fps
    }

}