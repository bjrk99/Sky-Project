const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // should give built in canvas methods
canvas.width = innerWidth - 10;
canvas.height = innerHeight -10;

let frame = 0; // keep track of loops - will help with conditions for what obstacles happen
// let verticalPosition = canvas.height - 60;
// let horizontalPosition = canvas.width / 2;

const waves = []

function animate(){
    let frameID = requestAnimationFrame(animate); // sets up animation loop - recursion

    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    var amount = Math.random() * (4 - 1) + 1
    var wave = []
    
    for (i = 0; i < amount; i++){
        var enemy = new Enemy()
        wave.push(enemy)
    }
    
    waves.push(wave)
}

function spawnEnemies() {
    setInterval(spawnWave, 5000)
}

spawnEnemies()
animate();

window.addEventListener('keydown', function(e){
    console.log(e.code);
    if (e.code === 'ArrowLeft'){
        player.moveLeft();
    }
    else if (e.code === 'ArrowRight'){
        player.moveRight();
    }
    else if (e.code === 'ArrowUp'){
        player.moveUp();
    }
    else if(e.code === 'ArrowDown'){
        player.moveDown();
    }
});

