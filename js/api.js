window.addEventListener("offline", (event) => {
    loadGamePage();
  });

  window.addEventListener("online", (event) => {
    loadHoldingPage();
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

  // method gets online status
  const getOnlineStatus = async () => {
      
    let uri = "http://localhost:3000/serverStatus";

    try {
      const res = await fetch(uri);
      const serverStatus = await res.json();

      const status = serverStatus.online;
      return status;

    } catch (err) {
        console.log("JSON-SERVER IS NOT WATCHING DB.JSON FILE");
    }
  };

 // every 3 seconds gets online status
  setInterval(async () => {

    try {

      const result = await getOnlineStatus();
      
      if (result){
        if (document.title == "Game"){
          window.location.href = ("holdingPage.html");
        }
      }
      else {
        if (document.title == "Back Online"){
          window.location.href = ("index.html");
        }
      }

    } catch (err) {
        console.log("JSON-SERVER IS NOT WATCHING DB.JSON FILE");
    }
  }, 3000);

