const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let path1 = new Path2D();
path1.rect(10, 10, 100,100);

ctx.stroke(path1);
