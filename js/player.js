class Player {
    constructor(){
        this.x = innerWidth / 2;
        this.y = innerHeight - 100;
        // this.x = canvas.width / 2;
        // this.y = canvas.height - 100;
        this.width = 20;
        this.height = 20;

        console.log(innerHeight, innerWidth)
        this.widthSpeedFactor = innerWidth / 140
        this.heightSpeedFactor = innerHeight / 80
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    moveLeft(){
        this.x -= this.widthSpeedFactor;
    }
    moveRight(){
        this.x += this.widthSpeedFactor;
    }
    moveUp(){
        this.y -= this.heightSpeedFactor;
    }
    moveDown(){
        this.y += this.heightSpeedFactor;
    }
    distanceTo(obj) {
        let mid = {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }
        return Math.hypot(mid.x - obj.x, mid.y - obj.y)
    }
}

const player = new Player();
