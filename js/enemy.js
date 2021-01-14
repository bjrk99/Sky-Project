function spawnWave() {
    const min = innerWidth / 300
    const max = innerWidth / 120
    const waveSize = Math.random() * (max - min) + min
    const wave = []
    
    for (i = 0; i < waveSize; i++){
        const enemy = new Enemy(waveSize)
        wave.push(enemy)
    }
    
    waves.push(wave)
}

function spawnEnemies() {
    if (frame % 400 == 0) {
        spawnWave()
    }
}

// function spawnEnemies() {
//     let interval = 5000
//     const timer = () => {
//         spawnWave()
//         setTimeout(timer, interval)
//     }
//     timer()
// }

function updateEnemies() {
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
}

function randColour() {
    const r = Math.random() * (255 - 30) + 30
    const g = Math.random() * (255 - 30) + 30
    const b = Math.random() * (255 - 30) + 30

    return colour = `rgb(${r},${g},${b})`
}

class Enemy {
    constructor(waveSize) {
        this.radius = Math.random() * (60 - 20) + 20

        this.sp = this.randSpawnPoint(waveSize)
        this.x = this.sp.x
        this.y = this.sp.y

        this.colour = randColour()
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 
            Math.PI * 2, false)
        ctx.fillStyle = this.colour
        ctx.fill()
    }

    update() {
        this.draw()
        this.y = this.y + 1
    }

    randSpawnPoint(waveSize) {
        var x = Math.random() * (canvas.width - 100) + 50
        var randY = Math.random() * 300
        return {x: x, y: -20 - this.radius - randY}
    }
}