class Character extends MovableObject {
    speed = 8;
    world;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'

    ];

    walking_sound = new Audio('audio/footstep.mp3');


    constructor() {
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed; //    adds x variable to the speed variable (eg 100 + 5) when right key is pressed 
                this.walkingBackwards = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT  && this.x > 0) {
                this.x -= this.speed;
                this.walkingBackwards = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;  //  moves camera to according where character goes
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                let i = this.currentImage % this.IMAGES_WALKING.length; //  basically like a for loop -> 0, 1, 2, 3, 4, 5, (repeats itself)
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }


}

