const wallArray = [];

function checkForWallCollision(){
    for (let i = 0; i < wallArray.length; i++){
        if (player.y < wallArray[i].y + wallArray[i].height && player.y > wallArray[i].y){
            if (player.x < wallArray[i].leftSide){
                game.state = STATE.end
            }
            else if (player.x + player.width > (canvas.width - wallArray[i].rightSide)){
                game.state = STATE.end
            }
        }
        else if (player.y + player.height < wallArray[i].y + wallArray[i].height && player.y + player.height > wallArray[i].y){
            if (player.x < wallArray[i].leftSide){
                game.state = STATE.end
            }
            else if (player.x + player.width > (canvas.width - wallArray[i].rightSide)){
                game.state = STATE.end
            }
        }
    }
}

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
    if (game.playFrame%400 === 0){
        wallArray.unshift(new wall); // every 400 frames - new wall spawns
    }

    for (let i = 0; i < wallArray.length; i++){
        wallArray[i].update();
    }

    if (wallArray.length > 10){
        wallArray.pop();  // clean up resources
    }
}