class World {
    canvas;
    ctx;
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.widht, this.canvas.height);    // clears the canvas everytime before it draws

        this.ctx.drawImage (this.character.img, this.character.x, this.character.y, this.character.widht, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage (enemy.img, enemy.x, enemy.y, enemy.widht, enemy.height);
        });
        this.clouds.forEach(cloud => {
            this.ctx.drawImage (cloud.img, cloud.x, cloud.y, cloud.widht, cloud.height);
        });


        let self = this;
        requestAnimationFrame(function() {  // function to draw the picture repeatedly (how many fps it draws is according to you pc specs)
            self.draw();
        });
    }
}