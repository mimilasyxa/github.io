var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 100;
var y = 100;
var snake_moving;

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
setInterval(function() {
    window.requestAnimationFrame(drawing())
},1000/15);



function drawing(){
    switch (snake_moving){
        case ("up"):
            y-=10;
            break;
        case ("right"):
            x+=10;
            break;
        case ("down"):
            y+=10;
            break;
        case ("left"):
            x-=10;
            break;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(x,y,10,10);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

document.addEventListener( "keydown" , (e)=> {
    console.log(e.keyCode);
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