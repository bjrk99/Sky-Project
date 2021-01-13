class Collectable {
    constructor() {
        this.height = 30
        this.width = 30

        this.sp = this.randSpawnPoint()
        this.x = this.sp.x
        this.y = this.sp.y
    }

    randSpawnPoint() {
        let sp = {
            x: Math.random() * (innerWidth - 100) + 50,
            y: 0 - this.height
        }
        return sp
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.draw()
        this.y += 5
    }
}