function randSpawnPoint(ySize) {
    var x = Math.random() * (canvas.width - 100) + 50
    var y = 0 - ySize - (Math.random() * ySize * 3)
    return {x: x, y: y}
}

function randColour() {
    const r = Math.random() * (255 - 30) + 30
    const g = Math.random() * (255 - 30) + 30
    const b = Math.random() * (255 - 30) + 30

    return colour = `rgb(${r},${g},${b})`
}

class Enemy {
    constructor() {
        this.radius = Math.random() * (60 - 20) + 20

        this.sp = randSpawnPoint(this.radius)
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
}