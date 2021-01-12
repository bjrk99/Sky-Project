function randSpawnPoint(ySize) {
    var x = Math.random() * (canvas.width - 100) + 50
    var y = 0 - ySize
    return {x: x, y: y}
}

class Enemy {
    constructor() {
        this.radius = 30

        this.sp = randSpawnPoint(this.radius)
        this.x = this.sp.x
        this.y = this.sp.y
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 
            Math.PI * 2, false)
        ctx.fillStyle = 'red'
        ctx.fill()
    }

    update() {
        this.draw()
        this.y = this.y + 0.5
    }
}