class Chicken extends MovableObject {
    y = 370;
    width = 50;
    height = 50;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor() {
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; // math.random calculates a random number from 0-1 (which will be multiplied by 500)
        this.speed = 2 + Math.random() * 0.5; // generates random chicken speed - every chicken is differently fast
        this.animate();
    }

    animate() {
        setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
        }, 100);
        this.moveLeftEnemies();
    }


}