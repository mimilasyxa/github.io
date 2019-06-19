let canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d");

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

class Handle {
    constructor(height,color){
        this.height = height;
        this.color = color;
        this.xCoord = canvas.width/2;
        this.yCoord = canvas.height/2;
    }
    draw(){
        ctx.beginPath();
        ctx.moveTo(canvas.width/2,canvas.height/2);
        ctx.lineTo(canvas.width/2,canvas.height/4);
        ctx.closePath();
        ctx.stroke();
    }
    update(){
        this.draw();
    }
}

let hours = new Handle(100,"red");

function clock(){
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(canvas.width/2,canvas.height/2,10,0,Math.PI*2);
ctx.closePath()
ctx.fill();
hours.update();
}

window.requestAnimationFrame(clock);