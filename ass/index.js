var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var circles = [];
var colours = ["black","white","green","yellow","purple","rose","orange"];


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
        ctx.fillStyle = colours[Math.round(Math.random()*10)];
    }
    draw(){
        ctx.arc(this.xCoord,this.yCoord,this.raduis,0,Math.PI*2);
    }
    update(){
        this.xCoord = this.xCoord + this.dx;
        this.yCoord = this.yCoord + this.dy;
        ctx.beginPath();
        this.draw(this.xCoord,this.yCoord);
        if (this.xCoord - this.raduis < 0 || this.xCoord + this.raduis > canvas.width){
        this.dx = -this.dx; 
        }
        if (this.yCoord - this.raduis < 0 || this.yCoord + this.raduis > canvas.height)
        this.dy = -this.dy;
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }

}
for (var i=0;i<300;i++)
circles[i] = new Circle(giveW(),giveH(),Math.random()*40,(Math.random() - 0.5) * 8,(Math.random() - 0.5) * 8);

window.requestAnimationFrame(drawing)
function drawing(){

ctx.clearRect(0,0,canvas.width,canvas.height);
for (let i = 0; i<circles.length ; i++){
    circles[i].update();
}
window.requestAnimationFrame(drawing)
}

function giveW(){
    do {
        var W = (Math.random() * 300 * 1.5);
    }
    while(W + 100> canvas.width || W - 100 < 0)
    return W;
}

function giveH(){
    do {
        var H = (Math.random() * 400 * 1.5);
    }
    while(H + 100> canvas.height || H - 100 < 0)
    return H;
}