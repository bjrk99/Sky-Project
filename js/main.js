const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // should give built in canvas methods
canvas.width = innerWidth - 10;
canvas.height = innerHeight -10;

let frame = 0; // keep track of loops - will help with conditions for what obstacles happen
let leftArrowPressed = false;
let rightArrowPressed = true;
let verticalPosition = canvas.height - 60;
let horizontalPosition = canvas.width / 2;

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(horizontalPosition, verticalPosition, 100, 30); // player rectangle --- 10 10 50 50
    requestAnimationFrame(animate); // sets up animation loop - recursion
}

animate();

window.addEventListener('keydown', function(e){
    if (e.code === 'ArrowLeft'){
        // move left
        leftArrowPressed = true;
        horizontalPosition -= 10;
    }
    else if (e.code === 'ArrowRight'){
        // move right
        rightArrowPressed = true;
        horizontalPosition += 10;
    }
})

window.addEventListener('keyup', function(e){
    if (e.code === 'ArrowLeft'){
        // stop moving left
        leftArrowPressed = false;
    }
    else if (e.code === 'ArrowRight') {
        // stop moving right
        rightArrowPressed = false;
    }
})

