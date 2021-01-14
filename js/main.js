const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth - 10;
canvas.height = innerHeight -10;

let frame = 0;

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
        console.log('test')
    }
    else if (mainGamePlayScreen){
        spawnEnemies()
        spawnWall();
        checkForWallCollision();

        updateEnemies()

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

animate();

// ctx.font = "30px Comic Sans MS";
// ctx.fillStyle = "white";
// ctx.textAlign = "center";