class Player {
    constructor(){
        this.x = innerWidth / 2;
        this.y = innerHeight - 100;
        // this.x = canvas.width / 2;
        // this.y = canvas.height - 100;
        this.width = 20;
        this.height = 20;
        this.score = 0;

        console.log(innerHeight, innerWidth)
        this.widthSpeedFactor = innerWidth / 140
        this.heightSpeedFactor = innerHeight / 80
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    moveLeft(){
        if (this.x > 8){
            this.x -= this.widthSpeedFactor;
        }
    }
    moveRight(){
        if (this.x < (canvas.width - 28)){
            this.x += this.widthSpeedFactor;
        }
    }
    moveUp(){
        if (this.y > 8){
            this.y -= this.heightSpeedFactor;
        }
    }
    moveDown(){
        if (this.y < (canvas.height - 28)){
            this.y += this.heightSpeedFactor;
        }
    }
    distanceTo(obj) {
        let mid = {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        }
        return Math.hypot(mid.x - obj.x, mid.y - obj.y)
    }
    addScoreForAvoidedObjects(){
        this.score += 5;
    }
    addScoreForCollectable(){
        this.score += 25
    }
}

const player = new Player();
