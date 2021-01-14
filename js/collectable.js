function updateCollectables() {
    collectables.forEach((coll, index) => {
        coll.update()
        if (player.collision(coll)){
            setTimeout(() => {
                collectables.splice(index, 1)
                player.addScoreForCollectable()
            }, 0)
        }
    })
}

function spawnCollectables() {
    const timer = () => {
        collectables.push(new Collectable())
        let interval = Math.random() * (20000 - 5000) + 5000
        setTimeout(timer, interval)
    }
    timer()
}

class Collectable {
    constructor() {
        this.radius = 10
        this.points = 5

        this.sp = this.randSpawnPoint()
        this.x = this.sp.x
        this.y = this.sp.y
    }

    randSpawnPoint() {
        let sp = {
            x: Math.random() * (innerWidth - 100) + 50,
            y: 0 - this.radius
        }
        return sp
    }

    draw() {
        ctx.save()
        ctx.beginPath()
        ctx.translate(this.x, this.y)
        ctx.moveTo(0, 0 - this.radius)

        for (let i = 0; i < this.points; i++) {
            ctx.rotate(Math.PI / this.points)
            ctx.lineTo(0, 0 - (this.radius * 2))
            ctx.rotate(Math.PI / this.points)
            ctx.lineTo(0, 0 - this.radius)
        }
        ctx.closePath()

        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.restore()
    }

    update() {
        this.draw()
        this.y += 5
    }
}