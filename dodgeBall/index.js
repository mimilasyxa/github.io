var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var circles = [];
var r,g,b;

canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;

console.log(canvas.height,canvas.width);

class Circle {
    constructor(x,y,radius){
        this.xCoord = x;
        this.yCoord = y;
        this.radius = radius;
        this.velocity = {
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10,
        };
        this.style = getRGB();
        this.mass = this.radius/10 + Math.floor(Math.random()+ (9 - 3) + 3);
    }
    collisionD(){
        if (this.xCoord - this.radius < 0 || this.xCoord + this.radius > canvas.width){
        this.velocity.x = -this.velocity.x; 
        this.style = getRGB();
        }
        if (this.yCoord - this.radius < 0 || this.yCoord + this.radius > canvas.height){
        this.velocity.y = -this.velocity.y;
        this.style = getRGB();
        }
    }
    draw(){
        ctx.fillStyle = this.style;
        ctx.lineTo(this.xCoord,this.yCoord);
        ctx.lineTo(this.xCoord - this.radius/1.5, this.yCoord - this.radius/1.5);
        ctx.lineTo(this.xCoord , this.yCoord + this.radius/1.5);
        ctx.arc(this.xCoord,this.yCoord,this.radius,0,Math.PI*2);
    }
    update(circles){
        this.xCoord = this.xCoord + this.velocity.x;
        this.yCoord = this.yCoord + this.velocity.y;
        ctx.beginPath();
        this.draw(this.xCoord,this.yCoord);
        this.collisionD();
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
        for (let c = 0; c<circles.length; c++){
            if (this == circles[c]) continue;
            if (distance(this.xCoord ,this.yCoord , circles[c].xCoord, circles[c].yCoord) - (this.radius + circles[c].radius)< 0){
                resolveCollision(this,circles[c]);
                if (this.radius > circles[c].radius) circles[c].style = this.style;
                else this.style = circles[c].style;
        }
                
    }
    }

}

for (let i=0;i<50;i++){
    let x = giveW();
    let y = giveH();
    let radius  = Math.floor(Math.random() * (30 - 20)) + 20;
    if (i > 0){
        for (let j = 0 ; j<circles.length;j++){
            if (distance(x ,y , circles[j].xCoord, circles[j].yCoord) - (radius + circles[j].radius)< 0){
                x = giveW();
                y = giveH();
                j = -1;
            }
        }
    }
    circles.push(new Circle(x ,y ,radius));
}
window.requestAnimationFrame(drawing)
function drawing(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    circles.forEach(circle => {
        circle.update(circles);    
    })
    window.requestAnimationFrame(drawing)
    }

function giveW(){
    do {
        var W = (Math.random() * 1000 * 1.6);
    }
    while(W + 100> canvas.width || W - 100 < 0)
    return W;
}

function giveH(){
    do {
        var H = (Math.random() * 1000);
    }
    while(H + 100> canvas.height || H - 100 < 0)
    return H;
}

function getRGB(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return ["rgb(" + r + "," + g + "," + b + ")"];
}

function distance(x1 ,y1 ,x2 ,y2){
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    return [Math.sqrt(Math.pow(xDistance,2)+Math.pow(yDistance,2))];
}


function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}


function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.xCoord - particle.xCoord;
    const yDist = otherParticle.yCoord - particle.yCoord;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.yCoord - particle.yCoord, otherParticle.xCoord - particle.xCoord);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}