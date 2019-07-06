document.body.style.margin = 0

const width = document.body.clientWidth 
const height = document.body.clientHeight 
let numOfDrops = Math.min(width,height)/2
let Drops = []
let lightingInterval = 0.008

class Drop {
    constructor(fx,fy,initSpeed){
        this.x = fx
        this.y = fy
        this.initialSpeed = initSpeed 
    }
    draw(){
        line(this.x,this.y,this.x+this.initialSpeed/10,this.y+this.initialSpeed/1.5)
    }
    fall(){
        this.y +=  this.initialSpeed
        this.x += this.initialSpeed/10
        if (this.y > height) this.y = 0 
        if (this.x > width) this.x = 0
    }
}

function setup() {
    createCanvas(width, height);
    frameRate(30);
    stroke(255);
    strokeWeight(2);
    generateDrops(numOfDrops);
}

function draw() {
    background(0, 7, 13);
    stroke(140, 202, 255);

    if (Math.random()<lightingInterval){
    background(255);
    stroke(0);
    } 

    Drops.forEach(d => {
        d.draw()
        d.fall()
    });
}

function generateDrops(numOfD) {
    for(var i = 0; i<numOfD;i++){
    let Dx = floor(random(10,width - 10));
    let Dy = floor(random(-100,height));
    let initSpeed = random(5,30);
    let newD = new Drop(Dx,Dy,initSpeed)
    Drops.push(newD);
    }
}

