
// load event - checks online property of navigator
window.addEventListener("load", (event) => {
    console.log(navigator.onLine);
    if (navigator.onLine){
        startingScreen = false;
        mainGamePlayScreen = false;
        gameOverScreen = false;
    }
  });

  // offline event listener
  window.addEventListener("offline", (event) => {
    startingScreen = true;
    console.log(navigator.onLine);
  });

  // online event listener
  window.addEventListener("online", (event) => {
    startingScreen = false;
    mainGamePlayScreen = false;
    gameOverScreen = false;
    console.log(navigator.onLine);
  });

