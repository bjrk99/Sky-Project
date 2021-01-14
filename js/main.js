const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth - 10;
canvas.height = innerHeight - 10;

const collectables = []
const waves = []
const fuels = []

const game = new Game()

function animate() {
    game.frame = requestAnimationFrame(animate)
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    switch(game.state) {
        case STATE.start:
            game.drawStartScreen()
            break
        case STATE.play:
            game.drawPlayScreen()
            game.frameLogic()
            break
        case STATE.end:
            game.drawEndScreen()
            break
    }
}

function offScreen(obj) {
    let height = obj.height

    if (height == null) {
        height = obj.radius
    }

    return obj.y - height > canvas.height
}

animate()