const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var img = new Image();
img.src = "./pixel.png"; 
img.onload = function() {
    ctx.imageSmoothingEnabled = false;
    
    ctx.translate(0 + 300/2, 0 + 300/2);
    ctx.scale(-1, 1);
    ctx.translate(-(0 + 300/2), -(0 + 300/2));

    ctx.drawImage(img, 0, 0, 300, 300);
    ctx.restore();
};
img.src = 'pixel.png';    