function checkForWallCollision(){
    for (let i = 0; i < walls.length; i++){
        if (player.y < walls[i].y + walls[i].height && player.y > walls[i].y){
            if (player.x < walls[i].leftSide){
                game.state = STATE.end
            }
            else if (player.x + player.width > (canvas.width - walls[i].rightSide)){
                game.state = STATE.end
            }
        }
        else if (player.y + player.height < walls[i].y + walls[i].height && player.y + player.height > walls[i].y){
            if (player.x < walls[i].leftSide){
                game.state = STATE.end
            }
            else if (player.x + player.width > (canvas.width - walls[i].rightSide)){
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

function updateWalls(){
    for (let i = 0; i < walls.length; i++){
        walls[i].update();
    }
}

function spawnWall(){
    if (game.playFrame%400 === 0){
        walls.unshift(new wall); // every 400 frames - new wall spawns
    }

    if (walls.length > 10){
        walls.pop();  // clean up resources
    }
}