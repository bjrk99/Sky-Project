class Projectile {
    constructor(x, y, radius, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.velocity = velocity
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 
                0, Math.PI * 2, false)
        ctx.fillStyle = 'white'
        ctx.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }

    distanceTo(enemy){
        return Math.hypot(this.x - enemy.x, this.y - enemy.y)
    }

    collision(enemy) {
        const dist = this.distanceTo(enemy) - this.radius - enemy.radius
        return dist <= 0
    }
}