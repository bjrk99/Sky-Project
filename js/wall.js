const wallArray = [];

class wall {
    constructor(){
        this.left = (Math.random() * canvas.width / 3) + 20;
        this.right = (Math.random() * canvas.width / 3) + 20;
        this.y = -20; // starting position
        this.width = 20;
        this.color = 'white';
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(0, this.y, this.left, this.width); // left wall
        ctx.fillRect(canvas.width - this.right, this.y, this.right, this.width); // right wall
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

    if (wallArray.length > 100){
        wallArray.pop(wallArray[0]);  // clean up resources
    }
}