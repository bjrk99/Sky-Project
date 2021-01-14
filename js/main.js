const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // should give built in canvas methods
canvas.width = innerWidth - 10;
canvas.height = innerHeight -10;
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";

let frame = 0; // keep track of loops - will help with conditions for what obstacles happen
// let verticalPosition = canvas.height - 60;
// let horizontalPosition = canvas.width / 2;

let startingScreen = true;
let mainGamePlayScreen = false;
let gameOverScreen = false;

const collectables = []
const waves = []
const fuels = []

function animate(){
    let frameID = requestAnimationFrame(animate); // sets up animation loop - recursion
    ctx.fillStyle = 'rgba(0,0,0,0.5)'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // start
    ctx.fillStyle = 'white'
    if (startingScreen){
        displayStartGame();
    }
    else if (mainGamePlayScreen){
        spawnWall();
        checkForWallCollision();

        waves.forEach((wave, waveIndex) => {
            wave.forEach((enemy, enemyIndex) => {
                enemy.update()
                if (player.collision(enemy)) {
                    mainGamePlayScreen = false;
                    gameOverScreen = true;
                }

                if (offScreen(enemy)) {
                    setTimeout(() => {
                        wave.splice(enemyIndex, 1)

                        if (wave.length == 0) {
                            waves.splice(waveIndex, 1)
                        }

                        player.addScoreForAvoidedObjects();
                    }, 0)
                }
            })
        })

        collectables.forEach((coll, index) => {
            coll.update()
            if (player.collision(coll)){
                setTimeout(() => {
                    collectables.splice(index, 1)
                    player.addScoreForCollectable()
                }, 0)
            }
        })
        
        fuels.forEach((fuel, index) => {
            fuel.update()
            if (player.collision(fuel)) {
                fuels.splice(index, 1)
                player.fuel += 500
            }
        })

        player.draw();
        player.drawFuelGauge()
        playerMovement();

        player.fuel-=1

        frame++;
        ctx.fillStyle = "white";
        ctx.fillText("SCORE: " + player.score, canvas.width/2.2, canvas.height/10);
        if (player.fuel <= 0){
            mainGamePlayScreen = false;
            gameOverScreen = true;
        }
    }
    else if (gameOverScreen){
        displayGameOver();
    }
    // end
}

function offScreen(obj) {
    let height = obj.height

    if (height == null) {
        height = obj.radius
    }

    return obj.y - height > canvas.height
}

function checkForWallCollision(){
    for (let i = 0; i < wallArray.length; i++){
        if (player.y < wallArray[i].y + wallArray[i].height && player.y > wallArray[i].y){
            if (player.x < wallArray[i].leftSide){
                mainGamePlayScreen = false;
                gameOverScreen = true;
            }
            else if (player.x > (canvas.width - wallArray[i].rightSide)){
                mainGamePlayScreen = false;
                gameOverScreen = true;
            }
        }
        else if (player.y + player.height < wallArray[i].y + wallArray[i].height && player.y + player.height > wallArray[i].y){
            if (player.x < wallArray[i].leftSide){
                mainGamePlayScreen = false;
                gameOverScreen = true;
            }
            else if (player.x > (canvas.width - wallArray[i].rightSide)){
                mainGamePlayScreen = false;
                gameOverScreen = true;
            }
        }
    }
}

animate();

// display start of the game function
function displayStartGame(){
    ctx.font = "60px Comic Sans MS";
    ctx.fillText("GAME TITLE", canvas.width / 2, canvas.height / 6);
    ctx.font = "30px Comic Sans MS";
    ctx.fillText("PRESS ENTER", canvas.width / 2, canvas.height / 2);
}

// display end of the game function
function displayGameOver(){
    ctx.font = "60px Comic Sans MS";
    if (player.fuel > 0){
        ctx.fillText("YOU CRASHED - GAME OVER", canvas.width / 2, canvas.height / 6);
    }
    else {
        ctx.fillText("RUN OUT OF FUEL - GAME OVER", canvas.width / 2, canvas.height / 6);
    }
    ctx.font = "30px Comic Sans MS";
    ctx.fillText("YOUR SCORE: " + player.score, canvas.width / 2, canvas.height / 2);
    ctx.font = "15px Comic Sans MS";
    ctx.fillText("PRESS ENTER TO CONTINUE", canvas.width / 2, canvas.height / 1.5);
    ctx.font = "30px Comic Sans MS";
}