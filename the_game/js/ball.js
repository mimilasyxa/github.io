class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dx = 20;
        this.dy = 30;
        this.status = "play";
    }
    respawn(){
        this.status = "respawn";
    }
    bounceCheck(){
        if (this.x + 10 > canvas.width || this.x - 10 < 0 ){
            this.dx = -this.dx;
            bounce.play();
        }
        if (this.y - 10 < 0 ){
            this.dy = -this.dy;
            bounce.play();
        }
        if (this.y + 10 > canvas.height){
            this.respawn();
        }
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.closePath();
        if (this.status == "play"){
            this.x += this.dx;
            this.y += this.dy;
        }
        this.bounceCheck()
    }
}