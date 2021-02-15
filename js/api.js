let previousState = false;

// load event - checks online property of navigator
window.addEventListener("load", (event) => {
    console.log(navigator.onLine);
    if (navigator.onLine){
        startingScreen = false;
        mainGamePlayScreen = false;
        gameOverScreen = false;
    }
  })

  // offline event listener
  window.addEventListener("offline", (event) => {
    startingScreen = true;
  });

  // online event listener
  window.addEventListener("online", (event) => {
    startingScreen = false;
    mainGamePlayScreen = false;
    gameOverScreen = false;
  });

  // checks online status - returns true or false
  const checkOnlineStatus = async () => {
    try {
      const online = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };

  // every 3 seconds check the status of online
  setInterval(async () => {
    const result = await checkOnlineStatus();
    if (previousState != result){
        if (result){
            startingScreen = false;
            mainGamePlayScreen = false;
            gameOverScreen = false;
            previousState = result;
        }
        else{
            startingScreen = true;
            mainGamePlayScreen = false;
            gameOverScreen = false;
            previousState = result;
        }   
      }
  }, 3000);

  window.addEventListener("load", async (event) => {
    const statusOnline = (await checkOnlineStatus());

      if (statusOnline){
        startingScreen = false;
        mainGamePlayScreen = false;
        gameOverScreen = false;
    }

  });

