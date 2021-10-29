const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image();
image.addEventListener('load', e => {
    ctx.imageSmoothingEnabled = false;

    ctx.translate(0 + 128/2, 0 + 128/2)
    ctx.scale(-1, 1)
    ctx.translate(-(0 + 128/2), -(0 + 128/2))
    
    ctx.drawImage(image, 0, 0, 32, 32, 0, 0, 128, 128);

    ctx.fillStyle = 'green';
});
image.src = './img/walking/sprite_8.png';