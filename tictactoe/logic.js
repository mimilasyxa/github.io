var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

window.requestAnimationFrame(drawing)
function drawing(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0 ,0 ,canvas.width ,canvas.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.moveTo(canvas.width/3 ,canvas.width/12);
    ctx.lineTo(canvas.width/3 ,canvas.width/3);
    ctx.stroke();
    window.requestAnimationFrame(drawing);
}
