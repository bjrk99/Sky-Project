

function returnToGame(){
    window.location.href = ("index.html");
    startingScreen = true;
}

  document.getElementById("keepPlaying").addEventListener("click", returnToGame);