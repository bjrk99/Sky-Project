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
  setInterval(async () => {
    const result = await checkOnlineStatus();
    if (result){
        loadHoldingPage();
    }
    else{
        loadGamePage();
    }
  }, 3000);

  // load event - checks online property of navigator
  window.addEventListener("load", async (event) => {
    const statusOnline = (await checkOnlineStatus());
      if (statusOnline){
          loadHoldingPage();
    }
    else {
        loadGamePage();
    }

  });

function loadHoldingPage(){
      if (document.title == "Game"){
        startingScreen = false;
        mainGamePlayScreen = false;
        gameOverScreen = false;
        window.location.href = ("holdingPage.html");
    }
}

function loadGamePage(){
    if (document.title == "Back Online"){
        startingScreen = true;
        window.location.href = ("index.html");
    }
}

