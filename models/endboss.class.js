class Endboss extends MovableObject {

    height = 400;
    width = 300;
    y = 60;
    endbossHit_sound = new Audio('./audio/hitEndboss.mp3');
    endbossDead_sound = new Audio('./audio/deadEndboss.mp3');


    IMAGES_WALKING = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_HURT = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        './img/4_enemie_boss_chicken/5_dead/G24.png',
        './img/4_enemie_boss_chicken/5_dead/G25.png',
        './img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 2400;
        this.animate();
    }

    isHit_audio() {
        this.endbossHit_sound.play();
        this.endbossHit_sound.volume = 0.7;
    }

    isDead_audio() {
        this.endbossDead_sound.play();
        this.endbossDead_sound.volume = 0.7;
    }

    animate() {
        let stopIntervall = setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.isHit_audio();
            }
            else if (this.isDeadBoss()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.isDead_audio();
                clearInterval(stopIntervall);
            }
            else {
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 200);
    }
} 