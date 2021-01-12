class Player {
    constructor(){
        this.x = innerWidth / 2;
        this.y = innerHeight - 100;
        // this.x = canvas.width / 2;
        // this.y = canvas.height - 100;
        this.width = 20;
        this.height = 20;

        this.speedFactor = innerWidth / 100
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    moveLeft(){
        this.x -= this.speedFactor;
    }
    moveRight(){
        this.x += this.speedFactor;
    }
    moveUp(){
        this.y -= this.speedFactor;
    }
    moveDown(){
        this.y += this.speedFactor;
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
