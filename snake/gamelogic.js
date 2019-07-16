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
var pixel = 25;
var box = document.querySelector(".arrows");
var arrows = {
    up : document.querySelector("#up"), 
    right : document.querySelector("#right"), 
    down : document.querySelector("#down"), 
    left : document.querySelector("#left"), 
};

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

if (canvas.width < 1000){
    box.style.display = "flex";
    pixel = 50;
}
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
        ctx.fillRect(this.x,this.y,pixel,pixel);
        ctx.stroke();
        prev_x.push(this.x);
        prev_y.push(this.y);
        if (prev_x.length > 4){
        prev_x.shift();
        prev_y.shift();
        }
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
        ctx.fillRect(this.x ,this.y ,pixel ,pixel);
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
            snake[0].y-=pixel;
            break;
        case ("right"):
            snake[0].x+=pixel;
            break;
        case ("down"):
            snake[0].y+=pixel;
            break;
        case ("left"):
            snake[0].x-=pixel;
            break;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    snake.forEach((part) => {
        part.drawing();
    })
    food.drawing();
    for (var i = 0; i<length ;i++){
    ctx.fillRect(prev_x[prev_x.length-(1 + i)] ,prev_y[prev_y.length-(1 + i)], pixel ,pixel);
    }
    ctx.fill();
    ctx.closePath();
}

document.addEventListener( "keydown" , (e)=> {
    console.log(e);
    switch (e.keyCode) {
        case 87:
        case 38:
            if (!(snake_moving == "down" && length > 1)) snake_moving = "up";
            break;
        case 68:
        case 39:
            if (!(snake_moving == "left" && length > 1)) snake_moving = "right";
            break;
        case 83:
        case 40:
            if (!(snake_moving == "up" && length > 1)) snake_moving = "down";
            break;
        case 65:
        case 37:
            if (!(snake_moving == "right" && length > 1)) snake_moving = "left";
            break;
        default:
            break;
    }
})


document.addEventListener("mouseup", (e) => {
    console.log(e.target);
    switch (e.target){
        case arrows.up :
            if (!(snake_moving == "down" && length > 1)) snake_moving = "up";
            break;
        case arrows.right :
            if (!(snake_moving == "left" && length > 1)) snake_moving = "right";
            break;
        case arrows.down :
            if (!(snake_moving == "up" && length > 1)) snake_moving = "down";
            break;
        case arrows.right :
            if (!(snake_moving == "left" && length > 1)) snake_moving = "right";
            break;
        break;
    }
})

function randomW(){
    let w;
    do {
        w = Math.round(Math.random() * 1000);
    }
    while (w > canvas.width || w % pixel);
    return w;
}

function randomH(){
    let h;
    do {
        h = Math.round(Math.random() * 1000);
    }
    while (h > canvas.height || h % pixel);
    return h;
}

