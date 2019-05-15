var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
var CircRad = 400;
var triToCir = 400;
var stdHeight = 966;
var stdWidth = 1920;

canvas.height = document.documentElement.clientHeight -20;
canvas.width = document.documentElement.clientWidth;

let gH = canvas.height,
    gW = canvas.width;
    scaleH = gH / stdHeight;

triToCir=400 * scaleH;
CircRad = 400 * scaleH;

window.requestAnimationFrame(draw);
function draw() {
ctx.clearRect(0,0,10000,10000);
triangle();
ctx.beginPath();
results();
sectors();
ctx.stroke();
window.requestAnimationFrame(draw);
}

function triangle(){
    ctx.beginPath();
    ctx.moveTo(gW/2 - triToCir - 10, gH/2);
    ctx.lineTo(gW/2 - triToCir - 50, gH/2 + (-20 * scaleH));
    ctx.lineTo(gW/2 - triToCir - 50, gH/2 +(20 * scaleH));
    ctx.fill();
}

function sectors() {
    for (let i=0 ; i<=2 ; i+=0.20){
        ctx.arc(gW/2,gH/2,CircRad,0,Math.PI*i,false);   
        ctx.lineTo(gW/2,gH/2);
    }
    ctx.translate(gW/2,gH/2);
    ctx.rotate(Math.PI/270);
    ctx.translate(-gW/2,-gH/2);
}

function results(){
    ctx.font = 24*scaleH +"px serif";
    ctx.strokeText("Pass 7 star map w/o NF", gW/2+50, gH/2-10);
}