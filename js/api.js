  // offline event listener
  /*window.addEventListener("offline", (event) => {
    startingScreen = true;
    window.location.href = ("index.html");
  });

  // online event listener
  window.addEventListener("online", (event) => {
    startingScreen = false;
    mainGamePlayScreen = false;
    gameOverScreen = false;
    window.location.href = ("holdingPage.html");
  });

  // checks online status - returns true or false
  const checkOnlineStatus = async () => {
    try {
      const online = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // CHANGE THIS API
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };

  // every 3 seconds check the status of online
  let previousState = false;
  setInterval(async () => {
    const result = await checkOnlineStatus();
    if (previousState != result){
        if (result){
            startingScreen = false;
            mainGamePlayScreen = false;
            gameOverScreen = false;
            previousState = result;
            window.location.href = ("holdingPage.html");
        }
        else{
            startingScreen = true;
            mainGamePlayScreen = false;
            gameOverScreen = false;
            previousState = result;
            window.location.href = ("index.html");
        }   
      }
  }, 3000);

  // load event - checks online property of navigator
  window.addEventListener("load", async (event) => {
    const statusOnline = (await checkOnlineStatus());

      if (statusOnline){
        startingScreen = false;
        mainGamePlayScreen = false;
        gameOverScreen = false;
    }

  });*/

