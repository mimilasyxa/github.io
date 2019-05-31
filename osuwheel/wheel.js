var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

canvH = canvas.height;
canvW = canvas.width;

// подготовка, создание секторов / текста
function text(){
    ctx.save()
    ctx.translate(canvW/2, canvH/2);
    ctx.rotate(15 * Math.PI/180);
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 150,11); 
    for (var i = 1; i<=12 ;i++){
    ctx.rotate(15*2 * Math.PI/180);
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 150,11); 
    }
    ctx.restore();
}

function draw() {
    ctx.beginPath()
    ctx.strokeStyle = "RGB(255,155,0)"
    ctx.lineTo(canvW/2, canvH/2);
    ctx.arc(canvW/2 ,canvH/2 ,400 ,0 , 30 * Math.PI/180);
    ctx.lineTo(canvW/2, canvH/2);
    for (var i = 1 ; i<=11 ; i++){
    ctx.arc(canvW/2 ,canvH/2 ,400 ,i * 30 * Math.PI/180 ,(i + 1) * 30 * Math.PI/180);
    ctx.lineTo(canvW/2, canvH/2);
    }
    ctx.stroke();
    ctx.closePath();
}

draw();
text();
// дальше будет сама анимация

