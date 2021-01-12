const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // should give built in canvas methods
canvas.width = innerWidth - 10;
canvas.height = innerHeight -10;

let frame = 0; // keep track of loops - will help with conditions for what obstacles happen
// let verticalPosition = canvas.height - 60;
// let horizontalPosition = canvas.width / 2;
let leftArrowPressed = false;
let rightArrowPressed = false;
let upArrowPressed = false;
let downArrowPressed = false;

const waves = []

function animate(){
    let frameID = requestAnimationFrame(animate); // sets up animation loop - recursion
    ctx.fillStyle = 'rgba(0,0,0,0.5)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    playerMovement();
    player.draw();
    waves.forEach((wave, outIndex) => {
        wave.forEach((enemy, inIndex) => {
            dist = player.distanceTo(enemy)
            distBetween = dist - enemy.radius - (player.width / 2)
            if (distBetween < 0){
                cancelAnimationFrame(frameID)
            }

            if (enemy.y - enemy.radius > canvas.height){
                setTimeout(() => {
                    wave.splice(inIndex, 1)
                    player.addScoreForAvoidedObjects();
                    if (wave.length == 0){
                        waves.splice(outIndex, 1)
                    }
                }, 0)
            }
            enemy.update()
        })
    })
}

function spawnWave() {
    var amount = Math.random() * (6 - 2) + 2
    var wave = []
    
    for (i = 0; i < amount; i++){
        var enemy = new Enemy()
        wave.push(enemy)
    }
    
    waves.push(wave)
}

function spawnEnemies() {
    spawnWave()
    setInterval(spawnWave, 4000)
}

spawnEnemies()
animate();

window.addEventListener('keydown', function(e){
    console.log(e.code);
    if (e.code === 'ArrowLeft'){
        // player.moveLeft();
        leftArrowPressed = true;
    }
    else if (e.code === 'ArrowRight'){
        // player.moveRight();
        rightArrowPressed = true;
    }
    else if (e.code === 'ArrowUp'){
        // player.moveUp();
        upArrowPressed = true;
    }
    else if(e.code === 'ArrowDown'){
        // player.moveDown();
        downArrowPressed = true;
    }
});

window.addEventListener('keyup', function(e){
    console.log(e.code);
    if (e.code === 'ArrowLeft'){
        leftArrowPressed = false;
    }
    else if (e.code === 'ArrowRight'){
        rightArrowPressed = false;
    }
    else if (e.code === 'ArrowUp'){
        upArrowPressed = false;
    }
    else if(e.code === 'ArrowDown'){
        downArrowPressed = false;
    }
});

function playerMovement(){
    // going to the left
    if (leftArrowPressed && (!upArrowPressed && !downArrowPressed)){
        player.moveLeft();
    }
    else if (leftArrowPressed && upArrowPressed){
        player.moveLeft();
        player.moveUp();
    }
    else if (leftArrowPressed && downArrowPressed){
        player.moveLeft();
        player.moveDown();
    } // going to the right
    else if (rightArrowPressed && (!upArrowPressed && !downArrowPressed)){
        player.moveRight();
    }
    else if (rightArrowPressed && upArrowPressed){
        player.moveRight();
        player.moveUp();
    }
    else if (rightArrowPressed && downArrowPressed){
        player.moveRight();
        player.moveDown();
    } // going up
    else if (upArrowPressed){
        player.moveUp();
    } // going down
    else if (downArrowPressed){
        player.moveDown();
    }
}

