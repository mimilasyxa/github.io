var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var challenge=["succ","succ 2","succ 3","succ 4","succ 5","succ 6","succ 7","succ 8","succ 9","succ 10","succ 11","succ 12"];
var timeR = Math.random() *(400 - 150) + 150;
var userInput;

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

canvH = canvas.height;
canvW = canvas.width;

// подготовка, создание секторов / текста
function text(){
    ctx.beginPath();
    ctx.save()
    ctx.translate(canvW/2, canvH/2);
    ctx.rotate(15 * Math.PI/180);
    ctx.font = "30px Arial";
    ctx.fillText(challenge[0],150,11); 
    for (var i = 1; i<12 ;i++){
    ctx.rotate(15*2 * Math.PI/180);
    ctx.font = "30px Arial";
    ctx.fillText(challenge[i], 150,11); 
    }
    ctx.restore();
    ctx.closePath();
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

function arrow(){
    ctx.fillStyle = "RGB(255,155,0)";
    ctx.beginPath();
    ctx.moveTo(canvW/2 + 450, canvH/2);
    ctx.lineTo(canvW/2 + 450 + 30, canvH/2 - 10);
    ctx.lineTo(canvW/2 + 450 + 30, canvH/2 + 10);
    ctx.closePath();
    ctx.stroke();
}

function startBTN(){
    ctx.beginPath();
    ctx.moveTo(canvW/2 + 490, canvH/2 - 20);
    ctx.lineTo(canvW/2 + 490 + 100, canvH/2 - 20);
    ctx.lineTo(canvW/2 + 490 + 100, canvH/2 + 20);
    ctx.lineTo(canvW/2 + 490, canvH/2 + 20);
    ctx.font = "30px Arial";
    ctx.fillText("START",canvW/2 + 492,canvH/2 + 10); 
    ctx.closePath();
    ctx.stroke();
}

function ownChallenges(){
    ctx.beginPath();
    ctx.strokeStyle = "RGB(255,155,0)";
    ctx.moveTo(canvW/2 - 730, canvH/2 - 20);
    ctx.lineTo(canvW/2 - 440, canvH/2 - 20);
    ctx.lineTo(canvW/2 - 440, canvH/2 + 20);
    ctx.lineTo(canvW/2 - 730, canvH/2 + 20);
    ctx.font = "30px Arial";
    ctx.fillText("OWN CHALLENGES",canvW/2 - 725,canvH/2 + 10); 
    ctx.closePath();
    ctx.stroke();
}

ownChallenges();
draw();
text();
arrow();
startBTN();

canvas.addEventListener("click", function(event){
    x = event.clientX;
    y = event.clientY;
    if ((x > canvW/2 + 490 && x < canvW/2 + 590)&(y > canvH/2 - 20 && y < canvH/2 + 20)){
        mainDraw();
        //mainDraw();
    }
    if ((x > canvW/2 - 800 && x < canvW/2 - 505)&(y > canvH/2 - 20 && y < canvH/2 + 20)){
       userInput = prompt("To make your own wheel you need to write down 12 challenges divided by comma.Then press START and wheel will change//Для создания собственного колеса вам необходимо вписать 12 испытаний разделённых запятой.Затем нажать START и колесо изменится");
       challenge =  userInput.split(",");
    }
})
// дальше будет сама анимация
let a = 0; 

function mainDraw(){
    ctx.clearRect(0 ,0 ,canvW ,canvH);
    ownChallenges();
    arrow();
    startBTN();
    ctx.save();
    ctx.translate(canvW/2, canvH/2);
    ctx.rotate(a * 1.1* Math.PI/180);
    ctx.translate(-canvW/2, -canvH/2);
    draw();
    text();
    ctx.restore();
    a+=5;
    if (a < timeR){
    window.requestAnimationFrame(mainDraw);
    }
    else {
        stop;
        a = 0;
        timeR = Math.random() *(400 - 150) + 150;
    }
}


