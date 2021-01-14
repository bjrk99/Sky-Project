const STATE = {
    start: 0, 
    play: 1, 
    end: 2
}

class Game {
    constructor() {
        this.frame = -1
        this.state = STATE.start
    }

    drawStartScreen() {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("GAME TITLE", canvas.width / 2, canvas.height / 6);
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("PRESS ENTER", canvas.width / 2, canvas.height / 2);
    }

    drawPlayScreen() {
        // updateEnemies()
        // updateCollectables()
        // updateFuels()
    
        player.draw()
        player.drawFuelGauge()
    }

    drawEndScreen() {
        ctx.font = "60px Comic Sans MS";
        if (player.fuel > 0){
            ctx.fillText("YOU CRASHED - GAME OVER", canvas.width / 2, canvas.height / 6);
        }
        else {
            ctx.fillText("RUN OUT OF FUEL - GAME OVER", canvas.width / 2, canvas.height / 6);
        }
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("YOUR SCORE: " + player.score, canvas.width / 2, canvas.height / 2);
        ctx.font = "15px Comic Sans MS";
        ctx.fillText("PRESS ENTER TO CONTINUE", canvas.width / 2, canvas.height / 1.5);
        ctx.font = "30px Comic Sans MS";
    }
}