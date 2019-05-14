var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
let dX = 1,
colours = [ "black", "white" , "green" , "yellow"];

let gH = canvas.height = window.innerHeight;
    gW =canvas.width = window.innerWidth;

window.requestAnimationFrame(draw);
function draw() {
ctx.clearRect(0,0,10000,10000);
triangle();
ctx.beginPath();
setTimeout(sectors(),1000);
ctx.stroke();
window.requestAnimationFrame(draw);
}

function triangle(){
    ctx.beginPath();
    ctx.moveTo(gW/2 - 410, gH/2);
    ctx.lineTo(gW/2 - 450, gH/2 -20);
    ctx.lineTo(gW/2 - 450, gH/2 +20);
    ctx.fill();
}

function sectors() {
    for (let i=0 ; i<=2 ; i+=0.20){
    ctx.arc(gW/2,gH/2,400,0,Math.PI*i,false);   
    ctx.lineTo(gW/2,gH/2);
    }
    ctx.translate(gW/2,gH/2);
    ctx.rotate(Math.PI/180);
    ctx.translate(-gW/2,-gH/2);
}
