let game_status = "menu",
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

if (game_status = "menu"){
    screenColor("black");
    ctx.strokeStyle = "white";
    ctx.rect(canvas.width/2 - 50, canvas.height/2 - 20, 100, 40);
    ctx.font = "20px Arial";
    ctx.fill();
    ctx.stroke();
    printText("НАЧАТЬ");
}
function screenColor(color){
    ctx.fillStyle = color;
    ctx.fillRect(0,0, canvas.width, canvas.height);
}
function printText(word){
    ctx.fillStyle = "white";
    ctx.fillText(word,canvas.width/2 - 36, canvas.height/2 + 7); 
}

