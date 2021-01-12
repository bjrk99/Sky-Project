class Player {
    constructor(){
        this.x = innerWidth / 2;
        this.y = innerHeight - 100;
        // this.x = canvas.width / 2;
        // this.y = canvas.height - 100;
        this.width = 20;
        this.height = 20;
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    moveLeft(){
        this.x -= 10;
    }
    moveRight(){
        this.x += 10;
    }

    distanceTo(obj) {
        return Math.hypot(this.x - obj.x, this.y - obj.y)
    }
}

const player = new Player();
