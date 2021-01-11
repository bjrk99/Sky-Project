const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // should give built in canvas methods
canvas.width = innerWidth - 10;
canvas.height = innerHeight -10;

let frame = 0; // keep track of loops - will help with conditions for what obstacles happen
let leftArrowPressed = false;
let rightArrowPressed = true;

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(10, 680, 50, 50); // player rectangle --- 10 10 50 50
    requestAnimationFrame(animate); // sets up animation loop - recursion
}

animate();

window.addEventListener('keydown', function(e){
    if (e.code === 'ArrowLeft'){
        // move left
        leftArrowPressed = true;
    }
    else if (e.code === 'ArrowRight'){
        // move right
        rightArrowPressed = true;
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