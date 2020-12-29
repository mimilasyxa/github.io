class Laser{
    constructor(ball){
        this.x = ball.x;
        this.y = ball.y;
        this.status = "play";
    }
    respawn(){
        this.status = "respawn";
    }
    draw(ball, mouseX, mouseY){
        ctx.beginPath();
        ctx.moveTo(ball.x, ball.y); 
        ctx.lineTo(mouseX, mouseY)
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
        ctx.closePath();
    }
}