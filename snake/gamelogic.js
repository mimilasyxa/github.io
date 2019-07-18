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
var pixel = 50;
var points = 0;
var font = 40;
var box = document.querySelector(".arrows");
var body = document.querySelector("body");
var arrows = {
    up : document.querySelector("#up"), 
    right : document.querySelector("#right"), 
    down : document.querySelector("#down"), 
    left : document.querySelector("#left"), 
};
if (window.localStorage.getItem("score") == null) {
    var topscore = 0;
}
else var topscore = window.localStorage.getItem("score");

canvas.height = 1500;
canvas.width = 3000;

if (window.innerWidth < 800){
    font = 40;
    box.style.display = "flex";
    pixel = 50;
    canvas.height = 1200;
    canvas.width = 900;
}
setInterval(function() {
    window.requestAnimationFrame(drawing);
},1000/10);

class Snake {
    constructor(w ,h){
        this.x = w;
        this.y = h;
    }
    drawing(){
        if (this.x == food.x && this.y == food.y){
            food.respawn();
            this.increase();
            points+=100;
        }
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,pixel,pixel);
        ctx.stroke();
        prev_x.push(this.x);
        prev_y.push(this.y);
        if (prev_x.length > length){
        prev_x.shift();
        prev_y.shift();
        }
        this.saveScore();
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0){
            switch (snake_moving){
                case "left":
                    this.x = canvas.width;
                    break;
                case "right":
                    this.x = 0 - pixel;
                    break;
                case "up":
                    this.y = canvas.height;
                    break;
                case "down":
                    this.y = 0;
                    break;
            }
         
        }
    }
    increase(){
        length++;
    }
    saveScore(){
        if (window.localStorage.getItem("score")<points){
        window.localStorage.setItem("score", points);
        topscore = window.localStorage.getItem("score");
            }
    }
    death(){
        snake_moving = "stop";
        points = 0;
        length=1;
        this.x = randomW();
        this.y = randomH();
    }
}

class Food {
    constructor(w ,h){
        this.x = w;
        this.y = h;
    }
    drawing(){
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.fillRect(this.x ,this.y ,pixel ,pixel);
        ctx.stroke()
        ctx.fillStyle = "black";
    }
    respawn(){
        this.x = randomW();
        this.y = randomH();
        for (var i=0 ; i<length+2 ; i++){
            if (this.x == prev_x[i] && this.y == prev_y[i]){
                this.respawn();
            }
        }
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
        default:
            break;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0 ,0 ,canvas.width ,canvas.height)
    ctx.fillStyle = "black";
    snake.forEach((part) => {
        part.drawing();
    })
    food.drawing();
    for (var i = 0; i<length ;i++){
    ctx.rect(prev_x[prev_x.length-(1 + i)] ,prev_y[prev_y.length-(1 + i)], pixel ,pixel);
    }
    score();
    ctx.fill();
    ctx.closePath();
    controlDetection()
}

setInterval(function(){
    if (points == 0){
    }
    else points--;
    for (var i = 0; i < length ; i++){
        if (length> 3 && ( snake[0].x == prev_x[prev_x.length - (i + 2)]) && (snake[0].y == prev_y[prev_y.length - (i+2)])){
            snake[0].death();
       
        }
    }
},1000/2);

function controlDetection(){
document.addEventListener( "keydown" , (e)=> {
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

document.addEventListener("touchstart", (e) => {
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
        case arrows.left :
            if (!(snake_moving == "right" && length > 1)) snake_moving = "left";
            break;
        break;
    }
})
}
function randomW(){
    let w;
    do {
        w = Math.round(Math.random() * 1000);
    }
    while (w >= canvas.width || !(w % pixel == 0));
    return w;
}

function randomH(){
    let h;
    do {
        h = Math.round(Math.random() * 1000);
    }
    while (h > canvas.height || !(h % pixel == 0));
    return h;
}

function score(){
    ctx.font= font +'px sans-serif';
    ctx.fillText("Счёт: " + points, canvas.width/2 - font, font);
    ctx.fillText("Лучший счёт: " + topscore, canvas.width/2 - font*3, font*2);
}