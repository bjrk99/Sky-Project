let leftArrowPressed = false;
let rightArrowPressed = false;
let upArrowPressed = false;
let downArrowPressed = false;

function enterHandler() {
    if (game.state == STATE.start || game.state == STATE.end) {
        game.initialise()
        game.state = STATE.play
    }
}

window.addEventListener('keydown', function(e){
    switch (e.code) {
        case 'Enter':
            enterHandler()
            break;
        case 'ArrowLeft':
            leftArrowPressed = true;
            break
        case 'ArrowRight':
            rightArrowPressed = true;
            break
        case 'ArrowUp':
            upArrowPressed = true;
            break
        case 'ArrowDown':
            downArrowPressed = true;
            break
    }
});

window.addEventListener('keyup', function(e){
    switch (e.code) {
        case 'ArrowLeft':
            leftArrowPressed = false;
            break
        case 'ArrowRight':
            rightArrowPressed = false;
            break
        case 'ArrowUp':
            upArrowPressed = false;
            break
        case 'ArrowDown':
            downArrowPressed = false;
            break
    }
});

function playerMovement(){
    if (leftArrowPressed && (!upArrowPressed && !downArrowPressed)){
        player.moveLeft();
    }

    else if (leftArrowPressed && upArrowPressed){
        player.moveLeft();
        player.moveUp();
    }

    else if (leftArrowPressed && downArrowPressed){
        player.moveLeft();
        player.moveDown();
    } 

    else if (rightArrowPressed && (!upArrowPressed && !downArrowPressed)){
        player.moveRight();
    }

    else if (rightArrowPressed && upArrowPressed){
        player.moveRight();
        player.moveUp();
    }

    else if (rightArrowPressed && downArrowPressed){
        player.moveRight();
        player.moveDown();
    } 

    else if (upArrowPressed){
        player.moveUp();
    } 

    else if (downArrowPressed){
        player.moveDown();
    }
}