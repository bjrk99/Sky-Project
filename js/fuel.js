class Fuel {
    constructor() {
        this.height = 30
        this.width = 30

        this.sp = this.randSpawnPoint()
        this.x = this.sp.x
        this.y = this.sp.y

        this.show = true
    }

    draw(){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.draw()
        this.y += 1
    }

    randSpawnPoint() {
        let sp = {
            x: Math.random() * (innerWidth - 100) + 50,
            y: 0 - this.height
        }
        console.log(sp)
        return sp
    }
}