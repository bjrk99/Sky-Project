function spawnFuel() {
    const timer = () => {
        fuels.push(new Fuel())
        let interval = Math.random() * (20000 - 10000) + 10000
        setTimeout(timer, interval)
    }
    timer()
}

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
        this.draw();
        this.y += 0.8;
    }

    randSpawnPoint() {
        let sp = {
            x: Math.random() * (innerWidth - 100) + 50,
            y: 0 - this.height - (Math.random() * 250)
        }
        
        return sp
    }
}