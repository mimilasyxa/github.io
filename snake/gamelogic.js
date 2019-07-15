var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 100;
var y = 100;
var snake_moving;
var snake = [];
var snake_eat = false;

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
setInterval(function() {
    window.requestAnimationFrame(drawing())
},1000/15);

class Snake {
    constructor(w ,h){
        this.x = w;
        this.y = h;
    }
    drawing(){
        if (this.x == food.x && this.y == food.y){
            food.respawn();
        }
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,10,10);
        ctx.stroke();
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0){
            console.log("DEATH");
        }
    }
}

class Food {
    constructor(w ,h){
        this.x = w;
        this.y = h;
    }
    drawing(){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.fillRect(this.x ,this.y ,10 ,10);
        ctx.stroke()
    }
    respawn(){
        this.x = randomW();
        this.y = randomH();
    }
}

let head = new Snake(randomW(),randomH());
let food = new Food(randomW(),randomH());

function drawing(){
    switch (snake_moving){
        case ("up"):
            head.y-=10;
            break;
        case ("right"):
            head.x+=10;
            break;
        case ("down"):
            head.y+=10;
            break;
        case ("left"):
            head.x-=10;
            break;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    head.drawing();
    food.drawing();
    ctx.fill();
    ctx.closePath();
}

document.addEventListener( "keydown" , (e)=> {
    switch (e.keyCode) {
        case 38:
            snake_moving = "up";
            break;
        case 39:
            snake_moving = "right";
            break;
        case 40:
            snake_moving = "down";
            break;
        case 37:
            snake_moving = "left";
            break;
        default:
            break;
    }
})

function randomW(){
    let w;
    do {
        w = Math.round(Math.random() * 1000);
    }
    while (w > canvas.width || w % 10);
    return w;
}

function randomH(){
    let h;
    do {
        h = Math.round(Math.random() * 1000);
    }
    while (h > canvas.height || h % 10);
    return h;
}

