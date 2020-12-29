let canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d");
    canvas.width = document.documentElement.clientWidth/2,
    canvas.height = document.documentElement.clientHeight,
    bounce = new Audio("\audio\\bounce.mp3");
    mouseX = 0;
    mouseY = 0;

let ball = new Ball(20,10); 
let laser = new Laser(ball);
function maindraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    if (ball.status == "respawn"){
        laser.draw(ball, mouseX, mouseY);
    }
}

setInterval(maindraw, 10);

////////////////////////////////////////////////////////////////
//Так сказать лазер который будет указывать куда полетит шарик//
////////////////////////////////////////////////////////////////
canvas.addEventListener("mousemove", (e)=>{
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY;
})

document.addEventListener("click", ()=>{
    ball.status = "play";
    ball.dy = -ball.dy;
})