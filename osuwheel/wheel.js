var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
let radius=400,
    triToCir=400;
colours = [ "black", "white" , "green" , "yellow"];

let gH = canvas.height = window.innerHeight;
    gW =canvas.width = window.innerWidth;

if (gH < 1000 || gW < 1400){
    raduis=200;
    triToCir=200;
}

window.requestAnimationFrame(draw);
function draw() {
ctx.clearRect(0,0,10000,10000);
ctx.beginPath();
results();
setTimeout(sectors(),1000);
ctx.stroke();
triangle();
ctx.restore();
window.requestAnimationFrame(draw);
}

function triangle(){
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(gW/2 - triToCir - 10, gH/2);
    ctx.lineTo(gW/2 - triToCir - 50, gH/2 -20);
    ctx.lineTo(gW/2 - triToCir - 50, gH/2 +20);
    ctx.fill();
}

function sectors() {
    for (let i=0 ; i<=2 ; i+=0.20){
        ctx.arc(gW/2,gH/2,radius,0,Math.PI*i,false);   
        ctx.lineTo(gW/2,gH/2);
    }
    ctx.translate(gW/2,gH/2);
    ctx.rotate(Math.PI/180);
    ctx.translate(-gW/2,-gH/2);
}


function results(){
    ctx.font = "24px serif";
    ctx.strokeText("Pass 7 star map w/o NF", gW/2+50, gH/2-10);
}