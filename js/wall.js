const wallArray = [];

class wall {
    constructor(){
        this.left = (Math.random() * canvas.width / 3) + 20;
        this.right = (Math.random() * canvas.width / 3) + 20;
        this.y = 0; // starting position
        this.width = 20;
        this.color = 'white';
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(0, this.y, this.width, this.left); // left wall AHHHH WHAT THE HELL???
        ctx.fillRect(canvas.width - this.right, this.y, this.right, this.width); // right wall
    }
    update(){
        this.y += 3; // speed how fast moves
        this.draw();
    }
}

function spawnWall(){
    if (frame%200 === 0){
        wallArray.unshift(new wall); // every 200 frames - new wall spawns
    }

    for (let i = 0; i < wallArray.length; i++){
        wallArray[i].update();
    }

    if (wallArray.length > 100){
        wallArray.pop(wallArray[0]);  // clean up resources
    }
}