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

let scoreSaved

const projectiles = []
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
        scoreSaved = false
        spawnEnemies()
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

                projectiles.forEach((proj, projIndex) => {
                    proj.update()
                    if (proj.collision(enemy)) {
                        wave.splice(enemyIndex, 1)
                        projectiles.splice(projIndex, 1)
                    }
                })
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
                player.refuel()
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
            else if (player.x + player.width > (canvas.width - wallArray[i].rightSide)){
                mainGamePlayScreen = false;
                gameOverScreen = true;
            }
        }
        else if (player.y + player.height < wallArray[i].y + wallArray[i].height && player.y + player.height > wallArray[i].y){
            if (player.x < wallArray[i].leftSide){
                mainGamePlayScreen = false;
                gameOverScreen = true;
            }
            else if (player.x + player.width > (canvas.width - wallArray[i].rightSide)){
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
    ctx.fillText("EVIL CIRCLES", canvas.width / 2, canvas.height / 6);
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
    //ctx.fillText("HIGH SCORE: " + (hs == null ? 0 : hs), canvas.width / 2, canvas.height / 2);
    ctx.fillText("YOUR SCORE: " + player.score, canvas.width / 2, (canvas.height / 6) + 50);
    ctx.font = "15px Comic Sans MS";
    ctx.fillText("PRESS ENTER TO CONTINUE", canvas.width / 2, canvas.height / 1.2);
    ctx.font = "30px Comic Sans MS";

    if (!scoreSaved) {
        saveScore()
    }

    displayHighscores()
}

function displayHighscores() {
    let highscores = JSON.parse(localStorage.getItem('highscores'))
    let top5 = Object.values(highscores).sort((a, b) => b - a).slice(0, 5)
    let name = "N/A"
    let usedEntries = []

    ctx.font = "15px Comic Sans MS"

    top5.forEach((score, index) => {
        let keys = Object.keys(highscores)
        for (let i = 0; i < keys.length; i++) {
            if (highscores[keys[i]] == score) {
                if (!usedEntries.includes(keys[i])) {
                    name = keys[i]
                    usedEntries.push(name)
                    break;
                }
            }
        }
        let text = `#${index + 1}      ${name} : ${score}`
        ctx.fillText(text, canvas.width / 2, (canvas.height / 3) + (50 * (index + 1)))
    })
}

function saveScore() {
    scoreSaved = true;
    let highscores = JSON.parse(localStorage.getItem('highscores'))

    if (highscores == null) {
        highscores = {}
    }
    let name = prompt('Please enter your name', '')

    if (player.score > (highscores[name] == null ? 0 : highscores[name])) {
        highscores[name] = player.score
        localStorage.highscores = JSON.stringify(highscores)
    }
}
