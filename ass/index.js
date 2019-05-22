var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var circles = [];

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

console.log(canvas.height,canvas.width);

class Circle {
    constructor(x,y,radius,dx,dy){
        this.xCoord = x;
        this.yCoord = y;
        this.raduis = radius;
        this.dx = dx;
        this.dy = dy;
    }
    draw(){
        ctx.arc(this.xCoord,this.yCoord,this.raduis,0,Math.PI*2);
    }
    update(){
        this.xCoord = this.xCoord + this.dx;
        this.yCoord = this.yCoord + this.dy;
        this.draw(this.xCoord,this.yCoord);
        if (this.xCoord - this.raduis < 0 || this.xCoord + this.raduis > canvas.width)
        this.dx = -this.dx;
        if (this.yCoord - this.raduis < 0 || this.yCoord + this.raduis > canvas.height)
        this.dy = -this.dy;
    }

}
for (var i=0;i<15;i++)
circles[i] = new Circle(100 + i*20,100 + i*20,100 ,2,2)

window.requestAnimationFrame(drawing)
function drawing(){

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "rgb(200,0,0)";  
ctx.beginPath();
for (let i = 0; i<circles.length ; i++){
    circles[i].update();
}
ctx.closePath();
ctx.stroke();
window.requestAnimationFrame(drawing)
}
