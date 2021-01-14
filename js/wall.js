const wallArray = [];

class wall {
    constructor(){
        this.leftSide = (Math.random() * canvas.width / 3) + 20;
        this.rightSide = (Math.random() * canvas.width / 3) + 20;
        this.y = -20; // starting position
        this.height = 20;
        this.color = 'white';
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(0, this.y, this.leftSide, this.height); // left wall
        ctx.fillRect(canvas.width - this.rightSide, this.y, this.rightSide, this.height); // right wall
    }
    update(){
        this.y += 1; // speed how fast moves
        this.draw();
    }
}

function spawnWall(){
    if (frame%400 === 0){
        wallArray.unshift(new wall); // every 400 frames - new wall spawns
    }

    for (let i = 0; i < wallArray.length; i++){
        wallArray[i].update();
    }

    if (wallArray.length > 30){
        wallArray.pop(wallArray[0]);  // clean up resources
    }
}