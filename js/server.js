
document.getElementById("turnOff").addEventListener("click", turnOffServer);

document.getElementById("turnOn").addEventListener("click", turnOnServer);

function turnOffServer() {
    fetch('http://localhost:3000/serverStatus', {
        method: 'PUT',
        body: JSON.stringify({
            online: false
         }),
         headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })

    document.querySelector("h1").innerText = "Server is down";
}

function turnOnServer() {
    fetch('http://localhost:3000/serverStatus', {
        method: 'PUT',
         body: JSON.stringify({
            online: true
         }),
         headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    })

    document.querySelector("h1").innerText = "Server is up and running";
}