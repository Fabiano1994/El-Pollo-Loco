class Background extends MovableObject{

    width = 720;
    height = 480;
    y = 0;
    x = 0;

    constructor(imagePath, x) {
        super().loadImage(imagePath);

        
    }

}