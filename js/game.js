class Game {
    constructor() {

    }

    displayStartScreen() {
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("GAME TITLE", canvas.width / 2, canvas.height / 6);
        ctx.font = "30px Comic Sans MS";
        ctx.fillText("PRESS ENTER", canvas.width / 2, canvas.height / 2);
    }

    displayPlayScreen() {

    }

    displayEndScreen() {
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