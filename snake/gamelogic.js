var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 100;
var y = 100;
var snake_moving;
var snake = [];
var prev_x = [];
var prev_y = [];
var snake_eat = false;
var length = 1;

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
setInterval(function() {
    window.requestAnimationFrame(drawing())
},1000/10);

class Snake {
    constructor(w ,h){
        this.x = w;
        this.y = h;
        this.xPrev;
        this.yPrev;
    }
    drawing(){
        if (this.x == food.x && this.y == food.y){
            food.respawn();
            this.increase();
        }
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,10,10);
        ctx.stroke();
        prev_x.push(this.x);
        prev_y.push(this.y);
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0){
        }
    }
    increase(){
        length++;
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
        ctx.fillStyle = "black";
    }
    respawn(){
        this.x = randomW();
        this.y = randomH();
    }
}

snake.push(new Snake(randomW(),randomH()));
let food = new Food(randomW(),randomH());

function drawing(){
    switch (snake_moving){
        case ("up"):
            snake[0].y-=10;
            break;
        case ("right"):
            snake[0].x+=10;
            break;
        case ("down"):
            snake[0].y+=10;
            break;
        case ("left"):
            snake[0].x-=10;
            break;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    snake.forEach((part) => {
        part.drawing();
    })
    food.drawing();
    for (var i = 0; i<length ;i++){
    ctx.fillRect(prev_x[prev_x.length-(1 + i)] ,prev_y[prev_y.length-(1 + i)], 10 ,10);
    }
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

